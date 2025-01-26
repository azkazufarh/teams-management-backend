'use strict';

module.exports = function (Team) {
    // Define the remote method
    Team.teamDetails = async function (teamId) {
      const team = await Team.findById(teamId, {
        include: 'members', // Include related members
      });
  
      if (!team) {
        const error = new Error('Team not found');
        error.status = 404;
        throw error;
      }
  
      const teamObject = team.toJSON();
      const totalMembers = teamObject.members ? teamObject.members.length : 0;
  
      return {
        id: team.id,
        name: team.name,
        description: team.description,
        totalMembers: totalMembers,
      };
    };
  
    // Expose the remote method
    Team.remoteMethod('teamDetails', {
      description: 'Get team details including total members',
      accepts: { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
      returns: { arg: 'data', type: 'object', root: true },
      http: { path: '/:id/details', verb: 'get' },
    });
  };
  

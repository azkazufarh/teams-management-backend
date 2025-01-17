module.exports = function (app, cb) {
    const ds = app.dataSources.db;
  
    // Auto-migrate models
    ds.automigrate('Team', (err) => {
      if (err) return cb(err);
      console.log('Team table created successfully.');
  
      ds.automigrate('Member', (err) => {
        if (err) return cb(err);
        console.log('Member table created successfully.');
        cb();
      });
    });
  };
  
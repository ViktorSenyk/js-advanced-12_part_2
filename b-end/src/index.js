const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config/config');

mongoose.connect(config.mongoURI, config.mongoConnectConfig)
  .then(() => {
    console.log('MongoDB connecting: Successfully!');
    app.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`));
  })
  .catch(err => console.log(err));

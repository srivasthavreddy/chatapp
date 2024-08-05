const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/config.env' });
const databaseConnect = () => {
     console.log('Database URL:', process.env.DATABASE_URL); // Add this line to log the database URL
     mongoose.connect(process.env.DATABASE_URL).then(() => {
          console.log('Mongodb Database Connected');
     }).catch(error => {
          console.log(error);
     });
};

module.exports = databaseConnect;

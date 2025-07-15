
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb+srv://vamshaj:Ganesh38@temp.291bavb.mongodb.net/TEMP?retryWrites=true&w=majority&appName=TEMP')
  .then(() => {
    console.log('DB connected succesfully !');
    app.listen(2000, () => { 
      console.log('Server running on port 2000');
    });
  })
  .catch((err) => {
    console.log('Connection failed');
    console.error(err.message);
  });

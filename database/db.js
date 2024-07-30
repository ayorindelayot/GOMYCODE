const mongoose  = require('mongoose');
// const uri = "mongodb+srv://<username>:<password>@ikiigai.fqfguof.mongodb.net/?retryWrites=true&w=majority&appName=IKIIGAI";
const mongoURI = 'mongodb+srv://ayorindelayot:12345678nnnn@ikiigai.1wgwphk.mongodb.net/?retryWrites=true&w=majority&appName=IKIIGAI';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI , options)
  .then(() => {
    console.log('Connected to MongoDB')
    // start application or perform additional operations 
  })
  .catch((error)=> {
    console.error('Error connecting to MongoDB:', error)
  });
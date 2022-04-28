const mongoose = require("mongoose");

//DB_URI can be changed from config file.
//for using local storage, DB_URI = mongodb://localhost:27017/Gramoday in config file.
const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected with ${data.connection.name} server`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDatabase;

const mongoose = require("mongoose");

//Not writing try-catch block or catchAsyncError here, coz we are handling the error in Unhandled Promise Rejection in server.
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

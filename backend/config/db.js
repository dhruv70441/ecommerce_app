import mongoose from 'mongoose';

const DB_NAME = "ecommerce";  //database name
const connectDB = async () => {
    try {
        const mongoURI = `${process.env.MONGO_URL}/${DB_NAME}`;

        const conn = await mongoose.connect(mongoURI);
        console.log(`Connected to MongoDB at ${conn.connection.host}`);
    } catch (error) {
        // Log the error and terminate the process in case of failure
        console.log(`Error in MongoDB connection: ${error.message}`);
        process.exit(1);  // Exit the process if the connection fails
    }
};

export default connectDB;

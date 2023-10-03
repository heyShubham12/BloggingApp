import mongoose from 'mongoose';

const Connection = async (username, password) => {
      const URL = `mongodb://${username}:${password}@ac-s5fjlws-shard-00-00.emkyp1b.mongodb.net:27017,ac-s5fjlws-shard-00-01.emkyp1b.mongodb.net:27017,ac-s5fjlws-shard-00-02.emkyp1b.mongodb.net:27017/?ssl=true&replicaSet=atlas-7a9u7i-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //const URL = `mongodb+srv://${username}:${password}@blog-app.emkyp1b.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
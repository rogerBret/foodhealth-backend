const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
 const mongoose = require('mongoose')

async function startServer(){
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app, })

    app.use((req, res) =>{
        res.send("Hello from express server")
    });

    await mongoose.connect('mongodb://127.0.0.1:27017/projet4077', {
        useUnifiedTopology: true,
        useNewUrlParser:true,
    }); 
    console.log('Mongodb connected.....');

    app.listen(4000, () => console.log("server in running on port 4000"))
}

startServer();
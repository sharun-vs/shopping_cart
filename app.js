const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

require('dotenv').config()

const graphqlSchema = require('./graphql/schemas/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yviq2.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
	{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	app.listen(process.env.PORT);
})
.catch(err => {
	console.log(err);
});


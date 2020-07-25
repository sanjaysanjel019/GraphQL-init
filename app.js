const express = require('express');
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const app = express();
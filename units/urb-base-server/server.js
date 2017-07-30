// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import express from 'express'
import graphQLHTTP from 'express-graphql'

import graphql from './graphQL' // GraphQL server
import ObjectManager from './graphql/ObjectManager'
import webapp from '../urb-base-webapp/server' // Isomorphic React server

// Read environment
require('dotenv').load()

const port = process.env.PORT

const router = express()

// GraphQL server
router.use('/graphql', graphql)

// Application with routes
router.use(webapp)

// Set up all persisters
ObjectManager.initializePersisters(false, () => {
  // Serve - work differently in development and production. In production only the
  // specified host serves
  if (process.env.NODE_ENV == 'production') router.listen(process.env.PORT, process.env.HOST)
  else {
    // Development server - localhost
    const localhostDevelopmentServer = express()
    localhostDevelopmentServer.use(router)
    localhostDevelopmentServer.listen(process.env.PORT, '127.0.0.1')
    console.log('☄  DEVELOPMENT. Server listening on 127.0.0.1')

    // Development server - on a specific IP, if different from localhost
    if (process.env.HOST != '127.0.0.1') {
      const localIPDevelopmentServer = express()
      localIPDevelopmentServer.use(router)
      localIPDevelopmentServer.listen(process.env.PORT, process.env.HOST)
      console.log('☄  DEVELOPMENT. Server listening on ' + process.env.HOST)
    }
  }
})
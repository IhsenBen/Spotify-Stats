import { createServer } from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { json } from "body-parser";
import { application } from "./graphql/modulesLoader";
import SpotifyWebApi from 'spotify-web-api-node';
import { config } from 'dotenv';

config();

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

var spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  }
);


const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({
    // schema: application.createSchemaForApollo() // graphql-modules has marked this deprecated, but works with Apollo Server 4.
    // Recommended approach is to use gateway:
    gateway: {
      async load() {
        return { executor: application.createApolloExecutor() };
      },
      onSchemaLoadOrUpdate(callback) {
        callback({ apiSchema: application.schema } as any);
        return () => {};
      },
      async stop() {},
    },
  });

  await apolloServer.start();

  app.use(
    "/api",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  // test spotify api 
  app.use('/spt-test', (req, res) => {
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
      function(data) {
        console.log('Artist albums', data.body);
        res.send(JSON.stringify(data.body));
      },
      function(err) {
        console.error(err);
      }
    );
  })


  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/api`);
  // send a message to clinet in the body
};

startServer();

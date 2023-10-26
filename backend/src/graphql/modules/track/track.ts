import { prisma } from "../../../prisma/client";
import { GraphQLError } from "graphql";
import { createModule, gql } from "graphql-modules";
import { TrackModule } from "./generated-types/module-types";

export const trackResolver: TrackModule.Resolvers = {
  Query: {
    tracks: async () => {
      const tracks = await prisma.track.findMany();
      return tracks;
    },
    track: async (_, { id }) => {
      const track = await prisma.track.findUnique({
        where: { id: String(id) },
      });
      if (!track) {
        throw new GraphQLError("Track not found");
      }
      return track;
    },
  },
  Mutation: {
    createTrack: async (_, { input }) => {
      const track = await prisma.track.create({
        data: {
          ...input,
        },
      });
      return track;
    },
    updateTrack: async (_, { input }) => {
      const track = await prisma.track.update({
        where: { id: String(input.id) },
        data: {
          ...input,
        },
      });
      if (!track) {
        throw new GraphQLError("Track not found");
      }
      return track;
    },
    deleteTrack: async (_, { id }) => {
      const exists = await prisma.track.count({
        where: { id: String(id) },
      });
      if (!exists) {
        throw new GraphQLError("Track not found");
      }
      const track = await prisma.track.delete({
        where: { id: String(id) },
      });
      return track;
    },
  },
};

export const trackModule = createModule({
  id: "track",
  dirname: __dirname,
  typeDefs: gql`
type Track {
  id: ID!
  title: String!
  artist: [Artist!]
  albums: [Album!]
}

extend type Query {
  tracks: [Track!]!
  track(id: ID!): Track!
}

extend type Mutation {
  createTrack(input: TrackInput!): Track!
  updateTrack(input: TrackInput!): Track!
  deleteTrack(id: ID!): Track!
}


input TrackInput {
  title: String!
  artistId: String
  albumId: String
  id: String!
}
`,
  resolvers: trackResolver,
});

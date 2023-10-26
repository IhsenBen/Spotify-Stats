import { createModule, gql } from "graphql-modules";
import { AlbumModule } from "./generated-types/module-types";
import { prisma } from "../../../prisma/client";
import { GraphQLError } from "graphql";

export const resolvers: AlbumModule.Resolvers = {
  Query: {
    albums: async () => {
      const albums = await prisma.album.findMany();
      return albums;
    },
    album: async (_, { id }) => {
      const album = await prisma.album.findUnique({
        where: { id: String(id) },
      });
      if (!album) {
        throw new GraphQLError("Album not found");
      }
      return album;
    },
  },
  Mutation: {
    createAlbum: async (_, { input }) => {
      const album = await prisma.album.create({
        data: {
          ...input,
        },
      });
      return album;
    },
    updateAlbum: async (_, { input }) => {
      const album = await prisma.album.update({
        where: { id: String(input.id) },
        data: {
          ...input,
        },
      });
      if (!album) {
        throw new GraphQLError("Album not found");
      }
      return album;
    },
    deleteAlbum: async (_, { id }) => {
      const exists = await prisma.album.count({
        where: { id: String(id) },
      });
      if (!exists) {
        throw new GraphQLError("Album not found");
      }
      const album = await prisma.album.delete({
        where: { id: Number(id) },
      });

      return album;
    },
  },
};

export const albumModule = createModule({
  id: "albums",
  dirname: __dirname,
  typeDefs: gql`
        type Album {
            id: ID!
            title: String!
            genre: [Genre!]
            artistId: [ID!]
            usersIds: [ID]
            createdAt: String!
            updatedAt: String!
        }

        input AlbumInput {
            id: ID!
            title: String!
            artistId: [String]
            usersIds: [String]
            genre: [Genre!]
        }

        extend type Query {
            albums: [Album!]!
            album(id: ID!): Album!
        }

        extend type Mutation {
            createAlbum(input: AlbumInput!): Album!
            updateAlbum(input: AlbumInput!): Album!
            deleteAlbum(id: ID!): Album!
        }
    `,
  resolvers,
});

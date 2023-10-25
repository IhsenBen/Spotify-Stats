import { prisma } from "../../../prisma/client";
import { GraphQLError } from "graphql";
import { createModule, gql } from "graphql-modules";
import { ArtistModule } from "./generated-types/module-types";

export const artistsResolver: ArtistModule.Resolvers = {
    Query: {
        artists: async () => {
            const artists = await prisma.artist.findMany();
            return artists;
        },
        artist: async (_, { id }) => {
            const artist = await prisma.artist.findUnique({
                where: { id: String(id) },
            });
            if (!artist) {
                throw new GraphQLError("Artist not found");
            }
            return artist;
        },
    },

    Mutation: {
        createArtist: async (_, { input }) => {
           // check if artist exists
            const artistExists = await prisma.artist.findFirst({
                where: { name: input.name },
            });

            if (artistExists) {
                throw new GraphQLError("This artist already exists");
            }
            const artist = await prisma.artist.create({
                data: {
                    name: input.name,
                    genre: input.genre,
                    albums: {
                        connect: input.albums?.map((albumId) => ({
                            id: albumId,
                        })),
                    },
                    users: {
                        connect: input.users?.map((userId) => ({
                            id: userId,
                        })),
                    },
                },
            });
            return artist;
        },
        updateArtist: async (_, { input }) => {
            const artist = await prisma.artist.update({
                where: { id: String(input.id) },
                data: {
                    ...input,
                },
            });
            return artist;
        },
        deleteArtist: async (_, { id }) => {
            const artist = await prisma.artist.delete({
                where: { id: String(id) },
            });
            return artist;
        },
    },

};


export const artistModule = createModule({
    id: "artists",
    dirname: __dirname,
    typeDefs: gql`
        type Artist {
            id: ID!
            name: String!
            genre: String!
            users: [User!]!
            albums: [Album!]!
        }

        input ArtistInput {
            id: ID
            name: String!
            genre: String
            albums: [ID!]
            users: [ID!]
        }

        extend type Query {
            artists: [Artist!]!
            artist(id: ID!): Artist!
        }

        extend type Mutation {
            createArtist(input: ArtistInput!): Artist!
            updateArtist(input: ArtistInput!): Artist!
            deleteArtist(id: ID!): Artist!
        }
    `,
    resolvers: artistsResolver,
});

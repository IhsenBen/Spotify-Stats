import { createModule, gql } from "graphql-modules";
import { AlbumModule } from "./generated-types/module-types";
import { prisma } from "../../../prisma/client";
import { GraphQLError } from "graphql";

export const resolvers: AlbumModule.Resolvers = {
    Album: {
        artist: async (parent) => {
            const user = await prisma.user.findUnique({
                where: { id: parent.artistId },
            });
            if (!user) {
                throw new GraphQLError("User not found");
            }
            return user;
        },
    },
    Query: {
        albums: async () => {
            const albums = await prisma.album.findMany();
            return albums;
        },
        album: async (_, { id }) => {
            const album = await prisma.album.findUnique({
                where: { id: Number(id) },
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
                where: { id: Number(input.id) },
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
                where: { id: Number(id) },
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
            artistId: Int!
            artist: User!
            createdAt: String!
            updatedAt: String!
        }

        input AlbumInput {
            title: String!
            artistId: Int!
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
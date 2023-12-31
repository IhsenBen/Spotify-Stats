import { createModule, gql } from "graphql-modules";
import { UserModule } from "./generated-types/module-types";
const bcrypt = require("bcryptjs");
import { prisma } from "../../../prisma/client";
import { GraphQLError } from "graphql";

const usersResolver: UserModule.Resolvers = {
  Query: {
    users: async () => {
      const users = await prisma.user.findMany();
      return users;
    },
    user: async (_, { id }) => {
      const user = await prisma.user.findUnique({
        where: { id: String(id) },
      });
      if (!user) {
        throw new GraphQLError("User not found");
      }
      return user;
    },
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const userExists = await prisma.user.findUnique({
        where: { email: input.email },
      });
      if (userExists) {
        throw new GraphQLError("This user already exists");
      }
      const user = await prisma.user.create({
        data: {
          email: input.email,
          username: input.userName,
          password: await bcrypt.hash(input.password, 10),
          createdAt: new Date(),
        },
      });
      return user;
    },
    loginUser: async (_, { input }) => {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });
      if (!user) {
        throw new GraphQLError("User not found");
      }
      const isValid = await bcrypt.compare(input.password, user.password);
      if (!isValid) {
        throw new GraphQLError("Invalid password");
      }
      return user;
    },
    updateUser: async (_, { input }) => {
      const user = await prisma.user.update({
        where: { id: Number(input.id) },
        data: {
          ...input,
        },
      });
      if (!user) {
        throw new GraphQLError("User not found");
      }
      return user;
    },
    deleteUser: async (_, { id }) => {
      const exists = await prisma.user.count({
        where: { id: Number(id) },
      });
      if (!exists) {
        throw new GraphQLError("User not found");
      }
      const user = await prisma.user.delete({
        where: { id: Number(id) },
      });

      return user;
    },
  },
};

export const usersModule = createModule({
  id: "users",
  dirname: __dirname,
  typeDefs: gql`
    input UserInput {
      id: ID
      userName: String
      password: String
      email: String
      likedArtistIds: [ID]
      likedAlbumIds: [ID]
      role: String
    }

    type User {
      id: ID
      userName: String
      password: String
      email: String
      role: String
      likedArtistIds: [ID]
      likedAlbumIds: [ID]
      createdAt: String
    }

    type Query {
      users: [User]
      user(id: ID): User
    }
    type Mutation {
      createUser(input: UserInput!): User
      loginUser(input: UserInput!): User
      updateUser(input: UserInput!): User
      deleteUser(id: ID!): User
    }
  `,
  resolvers: usersResolver,
});
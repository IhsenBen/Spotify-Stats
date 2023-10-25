/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace ArtistModule {
  interface DefinedFields {
    Artist: 'id' | 'name' | 'genre' | 'users' | 'albums';
    Query: 'artists' | 'artist';
    Mutation: 'createArtist' | 'updateArtist' | 'deleteArtist';
  };
  
  interface DefinedInputFields {
    ArtistInput: 'id' | 'name' | 'genre' | 'albums' | 'users';
  };
  
  export type Artist = Pick<Types.Artist, DefinedFields['Artist']>;
  export type User = Types.User;
  export type Album = Types.Album;
  export type ArtistInput = Pick<Types.ArtistInput, DefinedInputFields['ArtistInput']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type ArtistResolvers = Pick<Types.ArtistResolvers, DefinedFields['Artist'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Artist?: ArtistResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Artist?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      genre?: gm.Middleware[];
      users?: gm.Middleware[];
      albums?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      artists?: gm.Middleware[];
      artist?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createArtist?: gm.Middleware[];
      updateArtist?: gm.Middleware[];
      deleteArtist?: gm.Middleware[];
    };
  };
}
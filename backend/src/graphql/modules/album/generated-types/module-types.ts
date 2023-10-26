/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace AlbumModule {
  interface DefinedFields {
    Album: 'id' | 'title' | 'genre' | 'artistId' | 'usersIds' | 'createdAt' | 'updatedAt';
    Query: 'albums' | 'album';
    Mutation: 'createAlbum' | 'updateAlbum' | 'deleteAlbum';
  };
  
  interface DefinedInputFields {
    AlbumInput: 'id' | 'title' | 'artistId' | 'usersIds' | 'genre';
  };
  
  export type Album = Pick<Types.Album, DefinedFields['Album']>;
  export type Genre = Types.Genre;
  export type AlbumInput = Pick<Types.AlbumInput, DefinedInputFields['AlbumInput']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type AlbumResolvers = Pick<Types.AlbumResolvers, DefinedFields['Album'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Album?: AlbumResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Album?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      genre?: gm.Middleware[];
      artistId?: gm.Middleware[];
      usersIds?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      updatedAt?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      albums?: gm.Middleware[];
      album?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createAlbum?: gm.Middleware[];
      updateAlbum?: gm.Middleware[];
      deleteAlbum?: gm.Middleware[];
    };
  };
}
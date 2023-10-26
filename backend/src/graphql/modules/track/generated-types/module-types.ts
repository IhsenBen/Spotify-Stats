/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace TrackModule {
  interface DefinedFields {
    Track: 'id' | 'title' | 'artist' | 'albums';
    Query: 'tracks' | 'track';
    Mutation: 'createTrack' | 'updateTrack' | 'deleteTrack';
  };
  
  interface DefinedInputFields {
    TrackInput: 'title' | 'artistId' | 'albumId' | 'id';
  };
  
  export type Track = Pick<Types.Track, DefinedFields['Track']>;
  export type Artist = Types.Artist;
  export type Album = Types.Album;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type TrackInput = Pick<Types.TrackInput, DefinedInputFields['TrackInput']>;
  
  export type TrackResolvers = Pick<Types.TrackResolvers, DefinedFields['Track'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Track?: TrackResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Track?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      artist?: gm.Middleware[];
      albums?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      tracks?: gm.Middleware[];
      track?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createTrack?: gm.Middleware[];
      updateTrack?: gm.Middleware[];
      deleteTrack?: gm.Middleware[];
    };
  };
}
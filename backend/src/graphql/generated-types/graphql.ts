/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Album = {
  __typename?: 'Album';
  artistId?: Maybe<Array<Scalars['ID']['output']>>;
  createdAt: Scalars['String']['output'];
  genre?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  usersIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type AlbumInput = {
  artistId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre?: InputMaybe<Array<Genre>>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  usersIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Artist = {
  __typename?: 'Artist';
  albumIds?: Maybe<Array<Scalars['ID']['output']>>;
  genre?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  trackids?: Maybe<Array<Scalars['ID']['output']>>;
  userids?: Maybe<Array<Scalars['ID']['output']>>;
};

export type ArtistInput = {
  albums?: InputMaybe<Array<Scalars['ID']['input']>>;
  genre?: InputMaybe<Array<Genre>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  tracks?: InputMaybe<Array<Scalars['ID']['input']>>;
  users?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Genre =
  | 'BLUES'
  | 'CLASSICAL'
  | 'COUNTRY'
  | 'ELECTRONIC'
  | 'FOLK'
  | 'HIPHOP'
  | 'JAZZ'
  | 'METAL'
  | 'OTHER'
  | 'POP'
  | 'PUNK'
  | 'RAP'
  | 'REGGAE'
  | 'ROCK';

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Album;
  createArtist: Artist;
  createTrack: Track;
  createUser?: Maybe<User>;
  deleteAlbum: Album;
  deleteArtist: Artist;
  deleteTrack: Track;
  deleteUser?: Maybe<User>;
  loginUser?: Maybe<User>;
  updateAlbum: Album;
  updateArtist: Artist;
  updateTrack: Track;
  updateUser?: Maybe<User>;
};


export type MutationCreateAlbumArgs = {
  input: AlbumInput;
};


export type MutationCreateArtistArgs = {
  input: ArtistInput;
};


export type MutationCreateTrackArgs = {
  input: TrackInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteArtistArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTrackArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  input: UserInput;
};


export type MutationUpdateAlbumArgs = {
  input: AlbumInput;
};


export type MutationUpdateArtistArgs = {
  input: ArtistInput;
};


export type MutationUpdateTrackArgs = {
  input: TrackInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  album: Album;
  albums: Array<Album>;
  artist: Artist;
  artists: Array<Artist>;
  track: Track;
  tracks: Array<Track>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArtistArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTrackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Track = {
  __typename?: 'Track';
  albumId?: Maybe<Array<Scalars['ID']['output']>>;
  artistId?: Maybe<Array<Scalars['ID']['output']>>;
  genere?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type TrackInput = {
  albumIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  artistId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  likedAlbumIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  likedArtistIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  likedAlbumIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  likedArtistIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>;
  AlbumInput: AlbumInput;
  Artist: ResolverTypeWrapper<Artist>;
  ArtistInput: ArtistInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Genre: Genre;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<Track>;
  TrackInput: TrackInput;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  AlbumInput: AlbumInput;
  Artist: Artist;
  ArtistInput: ArtistInput;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Track: Track;
  TrackInput: TrackInput;
  User: User;
  UserInput: UserInput;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  artistId?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  genre?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usersIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  albumIds?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackids?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  userids?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationCreateAlbumArgs, 'input'>>;
  createArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationCreateArtistArgs, 'input'>>;
  createTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationCreateTrackArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>;
  deleteArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationDeleteArtistArgs, 'id'>>;
  deleteTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationDeleteTrackArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  updateAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationUpdateAlbumArgs, 'input'>>;
  updateArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationUpdateArtistArgs, 'input'>>;
  updateTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationUpdateTrackArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<QueryTrackArgs, 'id'>>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  albumId?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  artistId?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  genere?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  likedAlbumIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  likedArtistIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


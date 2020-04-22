/* AUTO-GENERATED, DO NOT EDIT THIS FILE */
/* @ts-nocheck */
/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import {
  AuthorityModel,
  BusinessTypeModel,
  CountryModel,
  EstablishmentModel,
  RatingModel,
  RegionModel,
  SchemeTypeModel,
  SortOptionModel,
} from '../types/models';
import { ApolloContext } from '../graphql/context/types';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Authority = {
  __typename?: 'Authority';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type BusinessType = {
  __typename?: 'BusinessType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Establishment = {
  __typename?: 'Establishment';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  addressLineOne: Scalars['String'];
  addressLineTwo: Maybe<Scalars['String']>;
  addressLineThree: Maybe<Scalars['String']>;
  addressLineFour: Maybe<Scalars['String']>;
  postcode: Scalars['String'];
  phoneNumber: Maybe<Scalars['String']>;
  rating: Scalars['String'];
  ratingDate: Scalars['String'];
  geolocation: Geolocation;
  newRatingPending: Scalars['Boolean'];
};

export type Geolocation = {
  __typename?: 'Geolocation';
  longitude: Scalars['String'];
  latitude: Scalars['String'];
};

export type Rating = {
  __typename?: 'Rating';
  id: Scalars['ID'];
  name: Scalars['String'];
  schemaType: SchemeType;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SchemeType = {
  __typename?: 'SchemeType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SortOption = {
  __typename?: 'SortOption';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  authorities: Array<Maybe<Authority>>;
  authority: Authority;
  businessTypes: Array<Maybe<BusinessType>>;
  businessType: BusinessType;
  countries: Array<Maybe<Country>>;
  country: Country;
  establishments: Array<Maybe<Establishment>>;
  establishment: Establishment;
  regions: Array<Maybe<Region>>;
  region: Region;
  schemeTypes: Array<Maybe<SchemeType>>;
  sortOptions: Array<Maybe<SortOption>>;
  ratings: Array<Maybe<Rating>>;
};

export type QueryAuthorityArgs = {
  id: Scalars['ID'];
};

export type QueryBusinessTypeArgs = {
  id: Scalars['ID'];
};

export type QueryCountryArgs = {
  id: Scalars['ID'];
};

export type QueryEstablishmentArgs = {
  id: Scalars['ID'];
};

export type QueryRegionArgs = {
  id: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Authority: ResolverTypeWrapper<AuthorityModel>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  BusinessType: ResolverTypeWrapper<BusinessTypeModel>;
  Country: ResolverTypeWrapper<CountryModel>;
  Establishment: ResolverTypeWrapper<EstablishmentModel>;
  Geolocation: ResolverTypeWrapper<Geolocation>;
  Rating: ResolverTypeWrapper<RatingModel>;
  Region: ResolverTypeWrapper<RegionModel>;
  SchemeType: ResolverTypeWrapper<SchemeTypeModel>;
  SortOption: ResolverTypeWrapper<SortOptionModel>;
  Query: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Authority: AuthorityModel;
  ID: Scalars['ID'];
  BusinessType: BusinessTypeModel;
  Country: CountryModel;
  Establishment: EstablishmentModel;
  Geolocation: Geolocation;
  Rating: RatingModel;
  Region: RegionModel;
  SchemeType: SchemeTypeModel;
  SortOption: SortOptionModel;
  Query: {};
}>;

export type AuthorityResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Authority'] = ResolversParentTypes['Authority']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type BusinessTypeResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['BusinessType'] = ResolversParentTypes['BusinessType']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CountryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type EstablishmentResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Establishment'] = ResolversParentTypes['Establishment']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLineOne: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLineTwo: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  addressLineThree: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  addressLineFour: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  postcode: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  rating: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ratingDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  geolocation: Resolver<ResolversTypes['Geolocation'], ParentType, ContextType>;
  newRatingPending: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type GeolocationResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Geolocation'] = ResolversParentTypes['Geolocation']
> = ResolversObject<{
  longitude: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  latitude: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type RatingResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaType: Resolver<ResolversTypes['SchemeType'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type RegionResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type SchemeTypeResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['SchemeType'] = ResolversParentTypes['SchemeType']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type SortOptionResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['SortOption'] = ResolversParentTypes['SortOption']
> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  authorities: Resolver<
    Array<Maybe<ResolversTypes['Authority']>>,
    ParentType,
    ContextType
  >;
  authority: Resolver<
    ResolversTypes['Authority'],
    ParentType,
    ContextType,
    RequireFields<QueryAuthorityArgs, 'id'>
  >;
  businessTypes: Resolver<
    Array<Maybe<ResolversTypes['BusinessType']>>,
    ParentType,
    ContextType
  >;
  businessType: Resolver<
    ResolversTypes['BusinessType'],
    ParentType,
    ContextType,
    RequireFields<QueryBusinessTypeArgs, 'id'>
  >;
  countries: Resolver<
    Array<Maybe<ResolversTypes['Country']>>,
    ParentType,
    ContextType
  >;
  country: Resolver<
    ResolversTypes['Country'],
    ParentType,
    ContextType,
    RequireFields<QueryCountryArgs, 'id'>
  >;
  establishments: Resolver<
    Array<Maybe<ResolversTypes['Establishment']>>,
    ParentType,
    ContextType
  >;
  establishment: Resolver<
    ResolversTypes['Establishment'],
    ParentType,
    ContextType,
    RequireFields<QueryEstablishmentArgs, 'id'>
  >;
  regions: Resolver<
    Array<Maybe<ResolversTypes['Region']>>,
    ParentType,
    ContextType
  >;
  region: Resolver<
    ResolversTypes['Region'],
    ParentType,
    ContextType,
    RequireFields<QueryRegionArgs, 'id'>
  >;
  schemeTypes: Resolver<
    Array<Maybe<ResolversTypes['SchemeType']>>,
    ParentType,
    ContextType
  >;
  sortOptions: Resolver<
    Array<Maybe<ResolversTypes['SortOption']>>,
    ParentType,
    ContextType
  >;
  ratings: Resolver<
    Array<Maybe<ResolversTypes['Rating']>>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Authority: AuthorityResolvers<ContextType>;
  BusinessType: BusinessTypeResolvers<ContextType>;
  Country: CountryResolvers<ContextType>;
  Establishment: EstablishmentResolvers<ContextType>;
  Geolocation: GeolocationResolvers<ContextType>;
  Rating: RatingResolvers<ContextType>;
  Region: RegionResolvers<ContextType>;
  SchemeType: SchemeTypeResolvers<ContextType>;
  SortOption: SortOptionResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;

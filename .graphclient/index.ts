// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  nftOwned: Array<Nft>;
};


export type AccountnftOwnedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Nft_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nftOwned?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_not?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_contains?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'nftOwned';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type MetaData = {
  id: Scalars['ID'];
  ipfsHash: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  type: Scalars['String'];
  sun: Scalars['String'];
  moon: Scalars['String'];
  rising: Scalars['String'];
  externalURL: Scalars['String'];
  backgroundColor: Scalars['String'];
  attributes: Array<Scalars['String']>;
};

export type MetaData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sun?: InputMaybe<Scalars['String']>;
  sun_not?: InputMaybe<Scalars['String']>;
  sun_gt?: InputMaybe<Scalars['String']>;
  sun_lt?: InputMaybe<Scalars['String']>;
  sun_gte?: InputMaybe<Scalars['String']>;
  sun_lte?: InputMaybe<Scalars['String']>;
  sun_in?: InputMaybe<Array<Scalars['String']>>;
  sun_not_in?: InputMaybe<Array<Scalars['String']>>;
  sun_contains?: InputMaybe<Scalars['String']>;
  sun_contains_nocase?: InputMaybe<Scalars['String']>;
  sun_not_contains?: InputMaybe<Scalars['String']>;
  sun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sun_starts_with?: InputMaybe<Scalars['String']>;
  sun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sun_not_starts_with?: InputMaybe<Scalars['String']>;
  sun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sun_ends_with?: InputMaybe<Scalars['String']>;
  sun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sun_not_ends_with?: InputMaybe<Scalars['String']>;
  sun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  moon?: InputMaybe<Scalars['String']>;
  moon_not?: InputMaybe<Scalars['String']>;
  moon_gt?: InputMaybe<Scalars['String']>;
  moon_lt?: InputMaybe<Scalars['String']>;
  moon_gte?: InputMaybe<Scalars['String']>;
  moon_lte?: InputMaybe<Scalars['String']>;
  moon_in?: InputMaybe<Array<Scalars['String']>>;
  moon_not_in?: InputMaybe<Array<Scalars['String']>>;
  moon_contains?: InputMaybe<Scalars['String']>;
  moon_contains_nocase?: InputMaybe<Scalars['String']>;
  moon_not_contains?: InputMaybe<Scalars['String']>;
  moon_not_contains_nocase?: InputMaybe<Scalars['String']>;
  moon_starts_with?: InputMaybe<Scalars['String']>;
  moon_starts_with_nocase?: InputMaybe<Scalars['String']>;
  moon_not_starts_with?: InputMaybe<Scalars['String']>;
  moon_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  moon_ends_with?: InputMaybe<Scalars['String']>;
  moon_ends_with_nocase?: InputMaybe<Scalars['String']>;
  moon_not_ends_with?: InputMaybe<Scalars['String']>;
  moon_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rising?: InputMaybe<Scalars['String']>;
  rising_not?: InputMaybe<Scalars['String']>;
  rising_gt?: InputMaybe<Scalars['String']>;
  rising_lt?: InputMaybe<Scalars['String']>;
  rising_gte?: InputMaybe<Scalars['String']>;
  rising_lte?: InputMaybe<Scalars['String']>;
  rising_in?: InputMaybe<Array<Scalars['String']>>;
  rising_not_in?: InputMaybe<Array<Scalars['String']>>;
  rising_contains?: InputMaybe<Scalars['String']>;
  rising_contains_nocase?: InputMaybe<Scalars['String']>;
  rising_not_contains?: InputMaybe<Scalars['String']>;
  rising_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rising_starts_with?: InputMaybe<Scalars['String']>;
  rising_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rising_not_starts_with?: InputMaybe<Scalars['String']>;
  rising_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rising_ends_with?: InputMaybe<Scalars['String']>;
  rising_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rising_not_ends_with?: InputMaybe<Scalars['String']>;
  rising_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL?: InputMaybe<Scalars['String']>;
  externalURL_not?: InputMaybe<Scalars['String']>;
  externalURL_gt?: InputMaybe<Scalars['String']>;
  externalURL_lt?: InputMaybe<Scalars['String']>;
  externalURL_gte?: InputMaybe<Scalars['String']>;
  externalURL_lte?: InputMaybe<Scalars['String']>;
  externalURL_in?: InputMaybe<Array<Scalars['String']>>;
  externalURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  externalURL_contains?: InputMaybe<Scalars['String']>;
  externalURL_contains_nocase?: InputMaybe<Scalars['String']>;
  externalURL_not_contains?: InputMaybe<Scalars['String']>;
  externalURL_not_contains_nocase?: InputMaybe<Scalars['String']>;
  externalURL_starts_with?: InputMaybe<Scalars['String']>;
  externalURL_starts_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL_not_starts_with?: InputMaybe<Scalars['String']>;
  externalURL_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL_ends_with?: InputMaybe<Scalars['String']>;
  externalURL_ends_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL_not_ends_with?: InputMaybe<Scalars['String']>;
  externalURL_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColor_not?: InputMaybe<Scalars['String']>;
  backgroundColor_gt?: InputMaybe<Scalars['String']>;
  backgroundColor_lt?: InputMaybe<Scalars['String']>;
  backgroundColor_gte?: InputMaybe<Scalars['String']>;
  backgroundColor_lte?: InputMaybe<Scalars['String']>;
  backgroundColor_in?: InputMaybe<Array<Scalars['String']>>;
  backgroundColor_not_in?: InputMaybe<Array<Scalars['String']>>;
  backgroundColor_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_contains_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_starts_with?: InputMaybe<Scalars['String']>;
  backgroundColor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_not_starts_with?: InputMaybe<Scalars['String']>;
  backgroundColor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_ends_with?: InputMaybe<Scalars['String']>;
  backgroundColor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_not_ends_with?: InputMaybe<Scalars['String']>;
  backgroundColor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<Scalars['String']>>;
  attributes_not?: InputMaybe<Array<Scalars['String']>>;
  attributes_contains?: InputMaybe<Array<Scalars['String']>>;
  attributes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  attributes_not_contains?: InputMaybe<Array<Scalars['String']>>;
  attributes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MetaData_orderBy =
  | 'id'
  | 'ipfsHash'
  | 'name'
  | 'description'
  | 'image'
  | 'type'
  | 'sun'
  | 'moon'
  | 'rising'
  | 'externalURL'
  | 'backgroundColor'
  | 'attributes';

export type Nft = {
  id: Scalars['ID'];
  tokenURI: Scalars['String'];
  tokenID: Scalars['BigInt'];
  owner?: Maybe<Account>;
  metadata?: Maybe<MetaData>;
};

export type Nft_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenID?: InputMaybe<Scalars['BigInt']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Nft_orderBy =
  | 'id'
  | 'tokenURI'
  | 'tokenID'
  | 'owner'
  | 'metadata';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  covenSearch: Array<MetaData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Nft_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetaDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetaDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetaData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycovenSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Nft_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetaDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetaDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetaData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Account_filter: Account_filter;
  String: ResolverTypeWrapper<Scalars['String']>;
  Account_orderBy: Account_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  MetaData: ResolverTypeWrapper<MetaData>;
  MetaData_filter: MetaData_filter;
  MetaData_orderBy: MetaData_orderBy;
  Nft: ResolverTypeWrapper<Nft>;
  Nft_filter: Nft_filter;
  Nft_orderBy: Nft_orderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Account_filter: Account_filter;
  String: Scalars['String'];
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Bytes: Scalars['Bytes'];
  MetaData: MetaData;
  MetaData_filter: MetaData_filter;
  Nft: Nft;
  Nft_filter: Nft_filter;
  Query: {};
  Subscription: {};
  _Block_: _Block_;
  _Meta_: _Meta_;
  Boolean: Scalars['Boolean'];
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nftOwned?: Resolver<Array<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<AccountnftOwnedArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type MetaDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetaData'] = ResolversParentTypes['MetaData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ipfsHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sun?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rising?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backgroundColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NftResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Nft'] = ResolversParentTypes['Nft']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MetaData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<QuerynftArgs, 'id' | 'subgraphError'>>;
  nfts?: Resolver<Array<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<QuerynftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metaData?: Resolver<Maybe<ResolversTypes['MetaData']>, ParentType, ContextType, RequireFields<QuerymetaDataArgs, 'id' | 'subgraphError'>>;
  metaDatas?: Resolver<Array<ResolversTypes['MetaData']>, ParentType, ContextType, RequireFields<QuerymetaDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  covenSearch?: Resolver<Array<ResolversTypes['MetaData']>, ParentType, ContextType, RequireFields<QuerycovenSearchArgs, 'text' | 'first' | 'skip' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nft?: SubscriptionResolver<Maybe<ResolversTypes['Nft']>, "nft", ParentType, ContextType, RequireFields<SubscriptionnftArgs, 'id' | 'subgraphError'>>;
  nfts?: SubscriptionResolver<Array<ResolversTypes['Nft']>, "nfts", ParentType, ContextType, RequireFields<SubscriptionnftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metaData?: SubscriptionResolver<Maybe<ResolversTypes['MetaData']>, "metaData", ParentType, ContextType, RequireFields<SubscriptionmetaDataArgs, 'id' | 'subgraphError'>>;
  metaDatas?: SubscriptionResolver<Array<ResolversTypes['MetaData']>, "metaDatas", ParentType, ContextType, RequireFields<SubscriptionmetaDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  MetaData?: MetaDataResolvers<ContextType>;
  Nft?: NftResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace CryptocovenTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  nftOwned: Array<Nft>;
};


export type AccountnftOwnedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Nft_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nftOwned?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_not?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_contains?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nftOwned_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'nftOwned';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type MetaData = {
  id: Scalars['ID'];
  ipfsHash: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  type: Scalars['String'];
  sun: Scalars['String'];
  moon: Scalars['String'];
  rising: Scalars['String'];
  externalURL: Scalars['String'];
  backgroundColor: Scalars['String'];
  attributes: Array<Scalars['String']>;
};

export type MetaData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sun?: InputMaybe<Scalars['String']>;
  sun_not?: InputMaybe<Scalars['String']>;
  sun_gt?: InputMaybe<Scalars['String']>;
  sun_lt?: InputMaybe<Scalars['String']>;
  sun_gte?: InputMaybe<Scalars['String']>;
  sun_lte?: InputMaybe<Scalars['String']>;
  sun_in?: InputMaybe<Array<Scalars['String']>>;
  sun_not_in?: InputMaybe<Array<Scalars['String']>>;
  sun_contains?: InputMaybe<Scalars['String']>;
  sun_contains_nocase?: InputMaybe<Scalars['String']>;
  sun_not_contains?: InputMaybe<Scalars['String']>;
  sun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sun_starts_with?: InputMaybe<Scalars['String']>;
  sun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sun_not_starts_with?: InputMaybe<Scalars['String']>;
  sun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sun_ends_with?: InputMaybe<Scalars['String']>;
  sun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sun_not_ends_with?: InputMaybe<Scalars['String']>;
  sun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  moon?: InputMaybe<Scalars['String']>;
  moon_not?: InputMaybe<Scalars['String']>;
  moon_gt?: InputMaybe<Scalars['String']>;
  moon_lt?: InputMaybe<Scalars['String']>;
  moon_gte?: InputMaybe<Scalars['String']>;
  moon_lte?: InputMaybe<Scalars['String']>;
  moon_in?: InputMaybe<Array<Scalars['String']>>;
  moon_not_in?: InputMaybe<Array<Scalars['String']>>;
  moon_contains?: InputMaybe<Scalars['String']>;
  moon_contains_nocase?: InputMaybe<Scalars['String']>;
  moon_not_contains?: InputMaybe<Scalars['String']>;
  moon_not_contains_nocase?: InputMaybe<Scalars['String']>;
  moon_starts_with?: InputMaybe<Scalars['String']>;
  moon_starts_with_nocase?: InputMaybe<Scalars['String']>;
  moon_not_starts_with?: InputMaybe<Scalars['String']>;
  moon_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  moon_ends_with?: InputMaybe<Scalars['String']>;
  moon_ends_with_nocase?: InputMaybe<Scalars['String']>;
  moon_not_ends_with?: InputMaybe<Scalars['String']>;
  moon_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rising?: InputMaybe<Scalars['String']>;
  rising_not?: InputMaybe<Scalars['String']>;
  rising_gt?: InputMaybe<Scalars['String']>;
  rising_lt?: InputMaybe<Scalars['String']>;
  rising_gte?: InputMaybe<Scalars['String']>;
  rising_lte?: InputMaybe<Scalars['String']>;
  rising_in?: InputMaybe<Array<Scalars['String']>>;
  rising_not_in?: InputMaybe<Array<Scalars['String']>>;
  rising_contains?: InputMaybe<Scalars['String']>;
  rising_contains_nocase?: InputMaybe<Scalars['String']>;
  rising_not_contains?: InputMaybe<Scalars['String']>;
  rising_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rising_starts_with?: InputMaybe<Scalars['String']>;
  rising_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rising_not_starts_with?: InputMaybe<Scalars['String']>;
  rising_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rising_ends_with?: InputMaybe<Scalars['String']>;
  rising_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rising_not_ends_with?: InputMaybe<Scalars['String']>;
  rising_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL?: InputMaybe<Scalars['String']>;
  externalURL_not?: InputMaybe<Scalars['String']>;
  externalURL_gt?: InputMaybe<Scalars['String']>;
  externalURL_lt?: InputMaybe<Scalars['String']>;
  externalURL_gte?: InputMaybe<Scalars['String']>;
  externalURL_lte?: InputMaybe<Scalars['String']>;
  externalURL_in?: InputMaybe<Array<Scalars['String']>>;
  externalURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  externalURL_contains?: InputMaybe<Scalars['String']>;
  externalURL_contains_nocase?: InputMaybe<Scalars['String']>;
  externalURL_not_contains?: InputMaybe<Scalars['String']>;
  externalURL_not_contains_nocase?: InputMaybe<Scalars['String']>;
  externalURL_starts_with?: InputMaybe<Scalars['String']>;
  externalURL_starts_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL_not_starts_with?: InputMaybe<Scalars['String']>;
  externalURL_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL_ends_with?: InputMaybe<Scalars['String']>;
  externalURL_ends_with_nocase?: InputMaybe<Scalars['String']>;
  externalURL_not_ends_with?: InputMaybe<Scalars['String']>;
  externalURL_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColor_not?: InputMaybe<Scalars['String']>;
  backgroundColor_gt?: InputMaybe<Scalars['String']>;
  backgroundColor_lt?: InputMaybe<Scalars['String']>;
  backgroundColor_gte?: InputMaybe<Scalars['String']>;
  backgroundColor_lte?: InputMaybe<Scalars['String']>;
  backgroundColor_in?: InputMaybe<Array<Scalars['String']>>;
  backgroundColor_not_in?: InputMaybe<Array<Scalars['String']>>;
  backgroundColor_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_contains_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_starts_with?: InputMaybe<Scalars['String']>;
  backgroundColor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_not_starts_with?: InputMaybe<Scalars['String']>;
  backgroundColor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_ends_with?: InputMaybe<Scalars['String']>;
  backgroundColor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  backgroundColor_not_ends_with?: InputMaybe<Scalars['String']>;
  backgroundColor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<Scalars['String']>>;
  attributes_not?: InputMaybe<Array<Scalars['String']>>;
  attributes_contains?: InputMaybe<Array<Scalars['String']>>;
  attributes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  attributes_not_contains?: InputMaybe<Array<Scalars['String']>>;
  attributes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MetaData_orderBy =
  | 'id'
  | 'ipfsHash'
  | 'name'
  | 'description'
  | 'image'
  | 'type'
  | 'sun'
  | 'moon'
  | 'rising'
  | 'externalURL'
  | 'backgroundColor'
  | 'attributes';

export type Nft = {
  id: Scalars['ID'];
  tokenURI: Scalars['String'];
  tokenID: Scalars['BigInt'];
  owner?: Maybe<Account>;
  metadata?: Maybe<MetaData>;
};

export type Nft_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenID?: InputMaybe<Scalars['BigInt']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Nft_orderBy =
  | 'id'
  | 'tokenURI'
  | 'tokenID'
  | 'owner'
  | 'metadata';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  covenSearch: Array<MetaData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Nft_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetaDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetaDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetaData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycovenSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  account?: Maybe<Account>;
  accounts: Array<Account>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Nft_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetaDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetaDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetaData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryCryptocovenSdk = {
  /** null **/
  account: InContextSdkMethod<CryptocovenTypes.Query['account'], CryptocovenTypes.QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<CryptocovenTypes.Query['accounts'], CryptocovenTypes.QueryaccountsArgs, MeshContext>,
  /** null **/
  nft: InContextSdkMethod<CryptocovenTypes.Query['nft'], CryptocovenTypes.QuerynftArgs, MeshContext>,
  /** null **/
  nfts: InContextSdkMethod<CryptocovenTypes.Query['nfts'], CryptocovenTypes.QuerynftsArgs, MeshContext>,
  /** null **/
  metaData: InContextSdkMethod<CryptocovenTypes.Query['metaData'], CryptocovenTypes.QuerymetaDataArgs, MeshContext>,
  /** null **/
  metaDatas: InContextSdkMethod<CryptocovenTypes.Query['metaDatas'], CryptocovenTypes.QuerymetaDatasArgs, MeshContext>,
  /** null **/
  covenSearch: InContextSdkMethod<CryptocovenTypes.Query['covenSearch'], CryptocovenTypes.QuerycovenSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<CryptocovenTypes.Query['_meta'], CryptocovenTypes.Query_metaArgs, MeshContext>
};

export type MutationCryptocovenSdk = {

};

export type SubscriptionCryptocovenSdk = {
  /** null **/
  account: InContextSdkMethod<CryptocovenTypes.Subscription['account'], CryptocovenTypes.SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<CryptocovenTypes.Subscription['accounts'], CryptocovenTypes.SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  nft: InContextSdkMethod<CryptocovenTypes.Subscription['nft'], CryptocovenTypes.SubscriptionnftArgs, MeshContext>,
  /** null **/
  nfts: InContextSdkMethod<CryptocovenTypes.Subscription['nfts'], CryptocovenTypes.SubscriptionnftsArgs, MeshContext>,
  /** null **/
  metaData: InContextSdkMethod<CryptocovenTypes.Subscription['metaData'], CryptocovenTypes.SubscriptionmetaDataArgs, MeshContext>,
  /** null **/
  metaDatas: InContextSdkMethod<CryptocovenTypes.Subscription['metaDatas'], CryptocovenTypes.SubscriptionmetaDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<CryptocovenTypes.Subscription['_meta'], CryptocovenTypes.Subscription_metaArgs, MeshContext>
};

export type CryptocovenContext = {
      ["cryptocoven"]: { Query: QueryCryptocovenSdk, Mutation: MutationCryptocovenSdk, Subscription: SubscriptionCryptocovenSdk },
      
    };

export type MeshContext = CryptocovenContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/cryptocoven/introspectionSchema":
      return import("./sources/cryptocoven/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const cryptocovenTransforms = [];
const additionalTypeDefs = [] as any[];
const cryptocovenHandler = new GraphqlHandler({
              name: "cryptocoven",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/chidubemokeke/crypto-coven-trial"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("cryptocoven"),
              logger: logger.child("cryptocoven"),
              importFn
            });
sources[0] = {
          name: 'cryptocoven',
          handler: cryptocovenHandler,
          transforms: cryptocovenTransforms
        }
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolvers = [] as any[]

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
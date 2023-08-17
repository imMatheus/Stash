/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateStoreInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  createStore: Store;
  removeStore: Store;
  updateStore: Store;
};


export type MutationCreateStoreArgs = {
  createStoreInput: CreateStoreInput;
};


export type MutationRemoveStoreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateStoreArgs = {
  updateStoreInput: UpdateStoreInput;
};

export type Query = {
  store: Store;
  stores: Array<Store>;
};


export type QueryStoreArgs = {
  id: Scalars['Int']['input'];
};

export type Store = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type UpdateStoreInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type GetStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoresQuery = { stores: Array<{ exampleField: number }> };


export const GetStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exampleField"}}]}}]}}]} as unknown as DocumentNode<GetStoresQuery, GetStoresQueryVariables>;
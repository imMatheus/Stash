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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type BaseAccount = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BaseStore = {
  createdAt: Scalars['DateTime']['output'];
  /** Id of store */
  id: Scalars['String']['output'];
  /** Name of store */
  name: Scalars['String']['output'];
  /** The number of products in store */
  productsCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BaseStoreMember = {
  createdAt: Scalars['DateTime']['output'];
  /** Id of member */
  id: Scalars['String']['output'];
  /** Role of the user */
  role: StoreMemberRole;
  updatedAt: Scalars['DateTime']['output'];
  user: BaseUser;
  userId: Scalars['String']['output'];
};

export type BaseUser = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  profileImage: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type CreateStoreInput = {
  /** Name of the store */
  name: Scalars['String']['input'];
};

export type LoginResponse = {
  access_token: Scalars['String']['output'];
  user: BaseUser;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  createStore: BaseStore;
  login: LoginResponse;
  removeStore: BaseStore;
  signup: LoginResponse;
  updateStore: BaseStore;
};


export type MutationCreateStoreArgs = {
  createStoreInput: CreateStoreInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveStoreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  signUpInput: LoginUserInput;
};


export type MutationUpdateStoreArgs = {
  updateStoreInput: UpdateStoreInput;
};

export type Query = {
  me?: Maybe<BaseUser>;
  myStores: Array<BaseStore>;
  store?: Maybe<StoreWithMembers>;
  stores: Array<BaseStore>;
  user?: Maybe<BaseUser>;
  users: Array<BaseUser>;
};


export type QueryStoreArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email: Scalars['String']['input'];
};

export enum StoreMemberRole {
  Admin = 'ADMIN',
  Owner = 'OWNER'
}

export type StoreWithMembers = {
  createdAt: Scalars['DateTime']['output'];
  /** Id of store */
  id: Scalars['String']['output'];
  /** Members of the store */
  members: Array<BaseStoreMember>;
  /** Name of store */
  name: Scalars['String']['output'];
  /** The number of products in store */
  productsCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateStoreInput = {
  id: Scalars['Int']['input'];
  /** Name of the store */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LoginMutationMutationVariables = Exact<{
  params: LoginUserInput;
}>;


export type LoginMutationMutation = { login: { access_token: string, user: { id: string, createdAt: any, profileImage: string, username?: string | null } } };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { me?: { id: string, createdAt: any, profileImage: string, username?: string | null } | null };

export type SignUpMutationMutationVariables = Exact<{
  params: LoginUserInput;
}>;


export type SignUpMutationMutation = { signup: { access_token: string, user: { id: string, profileImage: string, username?: string | null, createdAt: any } } };

export type CreateStoreMutationMutationVariables = Exact<{
  params: CreateStoreInput;
}>;


export type CreateStoreMutationMutation = { createStore: { id: string, name: string, productsCount: number } };

export type MyStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type MyStoresQuery = { myStores: Array<{ id: string, name: string, productsCount: number }> };

export type StoreByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type StoreByIdQuery = { store?: { id: string, name: string, productsCount: number } | null };


export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const MeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<MeQueryQuery, MeQueryQueryVariables>;
export const SignUpMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const CreateStoreMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStoreMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStoreInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createStoreInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"productsCount"}}]}}]}}]} as unknown as DocumentNode<CreateStoreMutationMutation, CreateStoreMutationMutationVariables>;
export const MyStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"productsCount"}}]}}]}}]} as unknown as DocumentNode<MyStoresQuery, MyStoresQueryVariables>;
export const StoreByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoreById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"store"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"productsCount"}}]}}]}}]} as unknown as DocumentNode<StoreByIdQuery, StoreByIdQueryVariables>;
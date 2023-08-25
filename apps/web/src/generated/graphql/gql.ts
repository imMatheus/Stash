/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LoginMutation($params: LoginUserInput!) {\n    login(loginUserInput: $params) {\n      access_token\n      user {\n        id\n        createdAt\n        profileImage\n        username\n      }\n    }\n  }\n": types.LoginMutationDocument,
    "\n  query MeQuery {\n    me {\n      id\n      createdAt\n      profileImage\n      username\n    }\n  }\n": types.MeQueryDocument,
    "\n  mutation SignUpMutation($params: LoginUserInput!) {\n    signup(signUpInput: $params) {\n      access_token\n      user {\n        id\n        profileImage\n        username\n        createdAt\n      }\n    }\n  }\n": types.SignUpMutationDocument,
    "\n  mutation CreateStoreMutation($params: CreateStoreInput!) {\n    createStore(createStoreInput: $params) {\n      id\n      name\n      productsCount\n    }\n  }\n": types.CreateStoreMutationDocument,
    "\n  query MyStores {\n    stores {\n      id\n      name\n      productsCount\n    }\n  }\n": types.MyStoresDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginMutation($params: LoginUserInput!) {\n    login(loginUserInput: $params) {\n      access_token\n      user {\n        id\n        createdAt\n        profileImage\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginMutation($params: LoginUserInput!) {\n    login(loginUserInput: $params) {\n      access_token\n      user {\n        id\n        createdAt\n        profileImage\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MeQuery {\n    me {\n      id\n      createdAt\n      profileImage\n      username\n    }\n  }\n"): (typeof documents)["\n  query MeQuery {\n    me {\n      id\n      createdAt\n      profileImage\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUpMutation($params: LoginUserInput!) {\n    signup(signUpInput: $params) {\n      access_token\n      user {\n        id\n        profileImage\n        username\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SignUpMutation($params: LoginUserInput!) {\n    signup(signUpInput: $params) {\n      access_token\n      user {\n        id\n        profileImage\n        username\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateStoreMutation($params: CreateStoreInput!) {\n    createStore(createStoreInput: $params) {\n      id\n      name\n      productsCount\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStoreMutation($params: CreateStoreInput!) {\n    createStore(createStoreInput: $params) {\n      id\n      name\n      productsCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyStores {\n    stores {\n      id\n      name\n      productsCount\n    }\n  }\n"): (typeof documents)["\n  query MyStores {\n    stores {\n      id\n      name\n      productsCount\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
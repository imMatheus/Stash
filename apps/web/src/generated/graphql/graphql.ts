/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type BaseAccount = {
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type BaseUser = {
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["String"]["output"];
  profileImage: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  username?: Maybe<Scalars["String"]["output"]>;
};

export type CreateStoreInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type LoginResponse = {
  access_token: Scalars["String"]["output"];
  user: BaseUser;
};

export type LoginUserInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  createStore: Store;
  login: LoginResponse;
  removeStore: Store;
  signup: LoginResponse;
  updateStore: Store;
};

export type MutationCreateStoreArgs = {
  createStoreInput: CreateStoreInput;
};

export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};

export type MutationRemoveStoreArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationSignupArgs = {
  signUpInput: LoginUserInput;
};

export type MutationUpdateStoreArgs = {
  updateStoreInput: UpdateStoreInput;
};

export type Query = {
  me?: Maybe<BaseUser>;
  store: Store;
  stores: Array<Store>;
  user?: Maybe<BaseUser>;
  users: Array<BaseUser>;
};

export type QueryStoreArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryUserArgs = {
  email: Scalars["String"]["input"];
};

export type Store = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["output"];
};

export type UpdateStoreInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type LoginMutationMutationVariables = Exact<{
  params: LoginUserInput;
}>;

export type LoginMutationMutation = {
  login: {
    access_token: string;
    user: {
      id: string;
      createdAt: any;
      profileImage: string;
      username?: string | null;
    };
  };
};

export type MeQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MeQueryQuery = {
  me?: {
    id: string;
    createdAt: any;
    profileImage: string;
    username?: string | null;
  } | null;
};

export type SignUpMutationMutationVariables = Exact<{
  params: LoginUserInput;
}>;

export type SignUpMutationMutation = {
  signup: {
    access_token: string;
    user: {
      id: string;
      profileImage: string;
      username?: string | null;
      createdAt: any;
    };
  };
};

export type MyStoresQueryVariables = Exact<{ [key: string]: never }>;

export type MyStoresQuery = { stores: Array<{ exampleField: number }> };

export type GetStoresQueryVariables = Exact<{ [key: string]: never }>;

export type GetStoresQuery = { stores: Array<{ exampleField: number }> };

export const LoginMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "params" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LoginUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "loginUserInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "params" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_token" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "profileImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export const MeQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MeQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profileImage" },
                },
                { kind: "Field", name: { kind: "Name", value: "username" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQueryQuery, MeQueryQueryVariables>;
export const SignUpMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SignUpMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "params" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LoginUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "signup" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "signUpInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "params" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "access_token" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "profileImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SignUpMutationMutation,
  SignUpMutationMutationVariables
>;
export const MyStoresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MyStores" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "stores" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "exampleField" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyStoresQuery, MyStoresQueryVariables>;
export const GetStoresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetStores" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "stores" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "exampleField" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetStoresQuery, GetStoresQueryVariables>;

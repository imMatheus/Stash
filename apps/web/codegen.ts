import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  overwrite: true,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/generated/graphql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      config: {
        useTypeImports: true,
        skipTypename: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  ignoreNoDocuments: true,
};

export default codegenConfig;

import { CdktfProviderProject } from "@cdktf/provider-project";
const project = new CdktfProviderProject({
  author: "Chris Rybicki",
  authorAddress: "chrisr@monada.co",
  cdktfVersion: 0.19,
  constructsVersion: "10.3.0",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project"],
  jsiiVersion: "~5.0.0",
  name: "provider-neon",
  projenrcTs: true,
  repositoryUrl: "https://github.com/chrisr/provider-neon.git",
  terraformProvider: "kislerdm/neon@~> 0.2",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
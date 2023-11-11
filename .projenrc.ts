import { CdktfProviderProject } from "@cdktf/provider-project";

const project = new CdktfProviderProject({
  author: "Chris Rybicki",
  authorAddress: "crybicki98@gmail.com",
  cdktfVersion: "^0.19.0",
  constructsVersion: "^10.3.0",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project@^0.3.0"],
  jsiiVersion: "^5.0.0",
  name: "@rybickic/provider-neon",
  projenrcTs: true,
  repositoryUrl: "https://github.com/chrisr/provider-neon.git",
  terraformProvider: "kislerdm/neon@~> 0.2",
  description: "CDKTF provider for kislerdm/neon",
});

project.synth();

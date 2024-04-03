const { CdktfProviderProject } = require("@cdktf/provider-project");

const project = new CdktfProviderProject({
  author: "Chris Rybicki",
  authorAddress: "crybicki98@gmail.com",
  cdktfVersion: "^0.20.6",
  constructsVersion: "^10.3.0",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project@^0.3.0"],
  githubNamespace: "Chriscbr",
  jsiiVersion: "^5.0.0",
  name: "cdktf-provider-neon",
  packageName: "@rybickic/cdktf-provider-neon",
  projenrcTs: false,
  publishToGo: false,
  publishToMaven: false,
  publishToNuget: false,
  publishToPypi: false,
  releaseToNpm: true,
  releaseFailureIssue: false,
  repositoryUrl: "https://github.com/chrisr/cdktf-provider-neon.git",
  terraformProvider: "kislerdm/neon@~> 0.2",
  description: "CDKTF provider for kislerdm/neon",
});

const docgen = project.tasks.tryFind("docgen");
docgen.reset();
docgen.exec("jsii-docgen -l typescript");

project.addGitIgnore("!API.md");

project.synth();


# Terraform CDK neon Provider tracks ~> 0.2

This repo builds and publishes the Terraform neon Provider bindings for [CDK for Terraform](https://cdk.tf).

Is based directly on neon 0.2.5

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@Chriscbr/provider-neon](https://www.npmjs.com/package/@Chriscbr/provider-neon).

`npm install @Chriscbr/provider-neon`

### PyPI

The PyPI package is available at [https://pypi.org/project/Chriscbr-cdktf-provider-neon](https://pypi.org/project/Chriscbr-cdktf-provider-neon).

`pipenv install Chriscbr-cdktf-provider-neon`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Neon](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Neon).

`dotnet add package HashiCorp.Cdktf.Providers.Neon`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-neon](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-neon).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-neon</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```


### Go

The go package is generated into the [`github.com/Chriscbr/cdktf-provider-neon-go`](https://github.com/Chriscbr/cdktf-provider-neon-go) package.

`go get github.com/Chriscbr/cdktf-provider-neon-go/neon`

## Docs

Find auto-generated docs for this provider here:

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-neon).

## Versioning

This project is explicitly not tracking the Terraform neon Provider version 1:1. In fact, it always tracks `latest` of `~> 0.2` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform neon Provider](https://registry.terraform.io/providers/kislerdm/neon/0.2.5)
    - This links to the minimum version being tracked, you can find the latest released version [in our releases](https://github.com/cdktf/cdktf-provider-neon/releases)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/hashicorp/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [Repository Manager](https://github.com/hashicorp/cdktf-repository-manager/)

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Branch <a name="Branch" id="@rybickic/cdktf-provider-neon.branch.Branch"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch neon_branch}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.branch.Branch.Initializer"></a>

```typescript
import { branch } from '@rybickic/cdktf-provider-neon'

new branch.Branch(scope: Construct, id: string, config: BranchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.branch.BranchConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.branch.Branch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.branch.Branch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.branch.Branch.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.branch.BranchConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.resetParentLsn">resetParentLsn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.resetParentTimestamp">resetParentTimestamp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.branch.Branch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.branch.Branch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.branch.Branch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.branch.Branch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.branch.Branch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.branch.Branch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.branch.Branch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.branch.Branch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.branch.Branch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@rybickic/cdktf-provider-neon.branch.Branch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.branch.Branch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@rybickic/cdktf-provider-neon.branch.Branch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.branch.Branch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.branch.Branch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.branch.Branch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@rybickic/cdktf-provider-neon.branch.Branch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.branch.Branch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@rybickic/cdktf-provider-neon.branch.Branch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetName` <a name="resetName" id="@rybickic/cdktf-provider-neon.branch.Branch.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@rybickic/cdktf-provider-neon.branch.Branch.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetParentLsn` <a name="resetParentLsn" id="@rybickic/cdktf-provider-neon.branch.Branch.resetParentLsn"></a>

```typescript
public resetParentLsn(): void
```

##### `resetParentTimestamp` <a name="resetParentTimestamp" id="@rybickic/cdktf-provider-neon.branch.Branch.resetParentTimestamp"></a>

```typescript
public resetParentTimestamp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.branch.Branch.isConstruct"></a>

```typescript
import { branch } from '@rybickic/cdktf-provider-neon'

branch.Branch.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.branch.Branch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.branch.Branch.isTerraformElement"></a>

```typescript
import { branch } from '@rybickic/cdktf-provider-neon'

branch.Branch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.branch.Branch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@rybickic/cdktf-provider-neon.branch.Branch.isTerraformResource"></a>

```typescript
import { branch } from '@rybickic/cdktf-provider-neon'

branch.Branch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.branch.Branch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.branch.Branch.generateConfigForImport"></a>

```typescript
import { branch } from '@rybickic/cdktf-provider-neon'

branch.Branch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.branch.Branch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.branch.Branch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Branch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.branch.Branch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Branch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.branch.Branch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Branch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.logicalSize">logicalSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.parentLsnInput">parentLsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.parentTimestampInput">parentTimestampInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.parentLsn">parentLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.parentTimestamp">parentTimestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.branch.Branch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.branch.Branch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.branch.Branch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.branch.Branch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.branch.Branch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.branch.Branch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.branch.Branch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.branch.Branch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.branch.Branch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.branch.Branch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.branch.Branch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.branch.Branch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.branch.Branch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.branch.Branch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.branch.Branch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalSize`<sup>Required</sup> <a name="logicalSize" id="@rybickic/cdktf-provider-neon.branch.Branch.property.logicalSize"></a>

```typescript
public readonly logicalSize: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@rybickic/cdktf-provider-neon.branch.Branch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@rybickic/cdktf-provider-neon.branch.Branch.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `parentLsnInput`<sup>Optional</sup> <a name="parentLsnInput" id="@rybickic/cdktf-provider-neon.branch.Branch.property.parentLsnInput"></a>

```typescript
public readonly parentLsnInput: string;
```

- *Type:* string

---

##### `parentTimestampInput`<sup>Optional</sup> <a name="parentTimestampInput" id="@rybickic/cdktf-provider-neon.branch.Branch.property.parentTimestampInput"></a>

```typescript
public readonly parentTimestampInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.branch.Branch.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.branch.Branch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@rybickic/cdktf-provider-neon.branch.Branch.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `parentLsn`<sup>Required</sup> <a name="parentLsn" id="@rybickic/cdktf-provider-neon.branch.Branch.property.parentLsn"></a>

```typescript
public readonly parentLsn: string;
```

- *Type:* string

---

##### `parentTimestamp`<sup>Required</sup> <a name="parentTimestamp" id="@rybickic/cdktf-provider-neon.branch.Branch.property.parentTimestamp"></a>

```typescript
public readonly parentTimestamp: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.branch.Branch.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.branch.Branch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Database <a name="Database" id="@rybickic/cdktf-provider-neon.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database neon_database}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.database.Database.Initializer"></a>

```typescript
import { database } from '@rybickic/cdktf-provider-neon'

new database.Database(scope: Construct, id: string, config: DatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.database.DatabaseConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.database.Database.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.Database.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.database.Database.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.database.DatabaseConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.database.Database.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.database.Database.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.database.Database.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.database.Database.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.database.Database.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.database.Database.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.database.Database.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.database.Database.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@rybickic/cdktf-provider-neon.database.Database.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@rybickic/cdktf-provider-neon.database.Database.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.Database.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.database.Database.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.database.Database.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@rybickic/cdktf-provider-neon.database.Database.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@rybickic/cdktf-provider-neon.database.Database.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@rybickic/cdktf-provider-neon.database.Database.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.database.Database.isConstruct"></a>

```typescript
import { database } from '@rybickic/cdktf-provider-neon'

database.Database.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.database.Database.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.database.Database.isTerraformElement"></a>

```typescript
import { database } from '@rybickic/cdktf-provider-neon'

database.Database.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@rybickic/cdktf-provider-neon.database.Database.isTerraformResource"></a>

```typescript
import { database } from '@rybickic/cdktf-provider-neon'

database.Database.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.database.Database.generateConfigForImport"></a>

```typescript
import { database } from '@rybickic/cdktf-provider-neon'

database.Database.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Database to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.ownerNameInput">ownerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.ownerName">ownerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.database.Database.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.database.Database.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.database.Database.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.database.Database.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.database.Database.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.database.Database.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.database.Database.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.database.Database.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.database.Database.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.database.Database.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.database.Database.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.database.Database.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.database.Database.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.database.Database.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@rybickic/cdktf-provider-neon.database.Database.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.database.Database.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@rybickic/cdktf-provider-neon.database.Database.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerNameInput`<sup>Optional</sup> <a name="ownerNameInput" id="@rybickic/cdktf-provider-neon.database.Database.property.ownerNameInput"></a>

```typescript
public readonly ownerNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.database.Database.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.database.Database.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.Database.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.database.Database.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerName`<sup>Required</sup> <a name="ownerName" id="@rybickic/cdktf-provider-neon.database.Database.property.ownerName"></a>

```typescript
public readonly ownerName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.database.Database.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.database.Database.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Endpoint <a name="Endpoint" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint neon_endpoint}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer"></a>

```typescript
import { endpoint } from '@rybickic/cdktf-provider-neon'

new endpoint.Endpoint(scope: Construct, id: string, config: EndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.endpoint.EndpointConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.endpoint.EndpointConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetComputeProvisioner">resetComputeProvisioner</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetPoolerEnabled">resetPoolerEnabled</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetPoolerMode">resetPoolerMode</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetRegionId">resetRegionId</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetSuspendTimeoutSeconds">resetSuspendTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetComputeProvisioner` <a name="resetComputeProvisioner" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetComputeProvisioner"></a>

```typescript
public resetComputeProvisioner(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetPgSettings` <a name="resetPgSettings" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```

##### `resetPoolerEnabled` <a name="resetPoolerEnabled" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetPoolerEnabled"></a>

```typescript
public resetPoolerEnabled(): void
```

##### `resetPoolerMode` <a name="resetPoolerMode" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetPoolerMode"></a>

```typescript
public resetPoolerMode(): void
```

##### `resetRegionId` <a name="resetRegionId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetRegionId"></a>

```typescript
public resetRegionId(): void
```

##### `resetSuspendTimeoutSeconds` <a name="resetSuspendTimeoutSeconds" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetSuspendTimeoutSeconds"></a>

```typescript
public resetSuspendTimeoutSeconds(): void
```

##### `resetType` <a name="resetType" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Endpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.isConstruct"></a>

```typescript
import { endpoint } from '@rybickic/cdktf-provider-neon'

endpoint.Endpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.isTerraformElement"></a>

```typescript
import { endpoint } from '@rybickic/cdktf-provider-neon'

endpoint.Endpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.isTerraformResource"></a>

```typescript
import { endpoint } from '@rybickic/cdktf-provider-neon'

endpoint.Endpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.generateConfigForImport"></a>

```typescript
import { endpoint } from '@rybickic/cdktf-provider-neon'

endpoint.Endpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Endpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Endpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Endpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Endpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.proxyHost">proxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.computeProvisionerInput">computeProvisionerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerEnabledInput">poolerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerModeInput">poolerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.regionIdInput">regionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.suspendTimeoutSecondsInput">suspendTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerEnabled">poolerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerMode">poolerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.suspendTimeoutSeconds">suspendTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `host`<sup>Required</sup> <a name="host" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `proxyHost`<sup>Required</sup> <a name="proxyHost" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.proxyHost"></a>

```typescript
public readonly proxyHost: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `computeProvisionerInput`<sup>Optional</sup> <a name="computeProvisionerInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.computeProvisionerInput"></a>

```typescript
public readonly computeProvisionerInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `poolerEnabledInput`<sup>Optional</sup> <a name="poolerEnabledInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerEnabledInput"></a>

```typescript
public readonly poolerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poolerModeInput`<sup>Optional</sup> <a name="poolerModeInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerModeInput"></a>

```typescript
public readonly poolerModeInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionIdInput`<sup>Optional</sup> <a name="regionIdInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.regionIdInput"></a>

```typescript
public readonly regionIdInput: string;
```

- *Type:* string

---

##### `suspendTimeoutSecondsInput`<sup>Optional</sup> <a name="suspendTimeoutSecondsInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.suspendTimeoutSecondsInput"></a>

```typescript
public readonly suspendTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `computeProvisioner`<sup>Required</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `poolerEnabled`<sup>Required</sup> <a name="poolerEnabled" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerEnabled"></a>

```typescript
public readonly poolerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poolerMode`<sup>Required</sup> <a name="poolerMode" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.poolerMode"></a>

```typescript
public readonly poolerMode: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `suspendTimeoutSeconds`<sup>Required</sup> <a name="suspendTimeoutSeconds" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.suspendTimeoutSeconds"></a>

```typescript
public readonly suspendTimeoutSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### NeonProvider <a name="NeonProvider" id="@rybickic/cdktf-provider-neon.provider.NeonProvider"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs neon}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer"></a>

```typescript
import { provider } from '@rybickic/cdktf-provider-neon'

new provider.NeonProvider(scope: Construct, id: string, config?: NeonProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.provider.NeonProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.provider.NeonProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.resetApiKey">resetApiKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NeonProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.isConstruct"></a>

```typescript
import { provider } from '@rybickic/cdktf-provider-neon'

provider.NeonProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.isTerraformElement"></a>

```typescript
import { provider } from '@rybickic/cdktf-provider-neon'

provider.NeonProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@rybickic/cdktf-provider-neon'

provider.NeonProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@rybickic/cdktf-provider-neon'

provider.NeonProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NeonProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeonProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeonProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NeonProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Project <a name="Project" id="@rybickic/cdktf-provider-neon.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project neon_project}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.project.Project.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

new project.Project(scope: Construct, id: string, config?: ProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@rybickic/cdktf-provider-neon.project.Project.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.putBranch">putBranch</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.putDefaultEndpointSettings">putDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetComputeProvisioner">resetComputeProvisioner</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetDefaultEndpointSettings">resetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetHistoryRetentionSeconds">resetHistoryRetentionSeconds</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetPgVersion">resetPgVersion</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetRegionId">resetRegionId</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetStorePassword">resetStorePassword</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.project.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.project.Project.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.project.Project.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.project.Project.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.project.Project.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.project.Project.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.project.Project.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@rybickic/cdktf-provider-neon.project.Project.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@rybickic/cdktf-provider-neon.project.Project.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.project.Project.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@rybickic/cdktf-provider-neon.project.Project.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@rybickic/cdktf-provider-neon.project.Project.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putBranch` <a name="putBranch" id="@rybickic/cdktf-provider-neon.project.Project.putBranch"></a>

```typescript
public putBranch(value: ProjectBranch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.project.Project.putBranch.parameter.value"></a>

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectBranch

---

##### `putDefaultEndpointSettings` <a name="putDefaultEndpointSettings" id="@rybickic/cdktf-provider-neon.project.Project.putDefaultEndpointSettings"></a>

```typescript
public putDefaultEndpointSettings(value: ProjectDefaultEndpointSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.project.Project.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings

---

##### `putQuota` <a name="putQuota" id="@rybickic/cdktf-provider-neon.project.Project.putQuota"></a>

```typescript
public putQuota(value: ProjectQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.project.Project.putQuota.parameter.value"></a>

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectQuota

---

##### `resetBranch` <a name="resetBranch" id="@rybickic/cdktf-provider-neon.project.Project.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetComputeProvisioner` <a name="resetComputeProvisioner" id="@rybickic/cdktf-provider-neon.project.Project.resetComputeProvisioner"></a>

```typescript
public resetComputeProvisioner(): void
```

##### `resetDefaultEndpointSettings` <a name="resetDefaultEndpointSettings" id="@rybickic/cdktf-provider-neon.project.Project.resetDefaultEndpointSettings"></a>

```typescript
public resetDefaultEndpointSettings(): void
```

##### `resetHistoryRetentionSeconds` <a name="resetHistoryRetentionSeconds" id="@rybickic/cdktf-provider-neon.project.Project.resetHistoryRetentionSeconds"></a>

```typescript
public resetHistoryRetentionSeconds(): void
```

##### `resetName` <a name="resetName" id="@rybickic/cdktf-provider-neon.project.Project.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPgVersion` <a name="resetPgVersion" id="@rybickic/cdktf-provider-neon.project.Project.resetPgVersion"></a>

```typescript
public resetPgVersion(): void
```

##### `resetQuota` <a name="resetQuota" id="@rybickic/cdktf-provider-neon.project.Project.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetRegionId` <a name="resetRegionId" id="@rybickic/cdktf-provider-neon.project.Project.resetRegionId"></a>

```typescript
public resetRegionId(): void
```

##### `resetStorePassword` <a name="resetStorePassword" id="@rybickic/cdktf-provider-neon.project.Project.resetStorePassword"></a>

```typescript
public resetStorePassword(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.project.Project.isConstruct"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

project.Project.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.project.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.project.Project.isTerraformElement"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

project.Project.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@rybickic/cdktf-provider-neon.project.Project.isTerraformResource"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

project.Project.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.project.Project.generateConfigForImport"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

project.Project.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.branch">branch</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.connectionUri">connectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.databaseHost">databaseHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.databasePassword">databasePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.databaseUser">databaseUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.defaultBranchId">defaultBranchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.quota">quota</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.branchInput">branchInput</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectBranch</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.computeProvisionerInput">computeProvisionerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointSettingsInput">defaultEndpointSettingsInput</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.historyRetentionSecondsInput">historyRetentionSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.pgVersionInput">pgVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.quotaInput">quotaInput</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuota</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.regionIdInput">regionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.storePasswordInput">storePasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.historyRetentionSeconds">historyRetentionSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.pgVersion">pgVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.storePassword">storePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.project.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.project.Project.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.project.Project.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.project.Project.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.project.Project.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.project.Project.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.project.Project.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.project.Project.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.project.Project.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.project.Project.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.project.Project.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.project.Project.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.project.Project.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.project.Project.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@rybickic/cdktf-provider-neon.project.Project.property.branch"></a>

```typescript
public readonly branch: ProjectBranchOutputReference;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@rybickic/cdktf-provider-neon.project.Project.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

---

##### `databaseHost`<sup>Required</sup> <a name="databaseHost" id="@rybickic/cdktf-provider-neon.project.Project.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@rybickic/cdktf-provider-neon.project.Project.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databasePassword`<sup>Required</sup> <a name="databasePassword" id="@rybickic/cdktf-provider-neon.project.Project.property.databasePassword"></a>

```typescript
public readonly databasePassword: string;
```

- *Type:* string

---

##### `databaseUser`<sup>Required</sup> <a name="databaseUser" id="@rybickic/cdktf-provider-neon.project.Project.property.databaseUser"></a>

```typescript
public readonly databaseUser: string;
```

- *Type:* string

---

##### `defaultBranchId`<sup>Required</sup> <a name="defaultBranchId" id="@rybickic/cdktf-provider-neon.project.Project.property.defaultBranchId"></a>

```typescript
public readonly defaultBranchId: string;
```

- *Type:* string

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: ProjectDefaultEndpointSettingsOutputReference;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.Project.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quota`<sup>Required</sup> <a name="quota" id="@rybickic/cdktf-provider-neon.project.Project.property.quota"></a>

```typescript
public readonly quota: ProjectQuotaOutputReference;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@rybickic/cdktf-provider-neon.project.Project.property.branchInput"></a>

```typescript
public readonly branchInput: ProjectBranch;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectBranch

---

##### `computeProvisionerInput`<sup>Optional</sup> <a name="computeProvisionerInput" id="@rybickic/cdktf-provider-neon.project.Project.property.computeProvisionerInput"></a>

```typescript
public readonly computeProvisionerInput: string;
```

- *Type:* string

---

##### `defaultEndpointSettingsInput`<sup>Optional</sup> <a name="defaultEndpointSettingsInput" id="@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointSettingsInput"></a>

```typescript
public readonly defaultEndpointSettingsInput: ProjectDefaultEndpointSettings;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings

---

##### `historyRetentionSecondsInput`<sup>Optional</sup> <a name="historyRetentionSecondsInput" id="@rybickic/cdktf-provider-neon.project.Project.property.historyRetentionSecondsInput"></a>

```typescript
public readonly historyRetentionSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@rybickic/cdktf-provider-neon.project.Project.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pgVersionInput`<sup>Optional</sup> <a name="pgVersionInput" id="@rybickic/cdktf-provider-neon.project.Project.property.pgVersionInput"></a>

```typescript
public readonly pgVersionInput: number;
```

- *Type:* number

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@rybickic/cdktf-provider-neon.project.Project.property.quotaInput"></a>

```typescript
public readonly quotaInput: ProjectQuota;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectQuota

---

##### `regionIdInput`<sup>Optional</sup> <a name="regionIdInput" id="@rybickic/cdktf-provider-neon.project.Project.property.regionIdInput"></a>

```typescript
public readonly regionIdInput: string;
```

- *Type:* string

---

##### `storePasswordInput`<sup>Optional</sup> <a name="storePasswordInput" id="@rybickic/cdktf-provider-neon.project.Project.property.storePasswordInput"></a>

```typescript
public readonly storePasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeProvisioner`<sup>Required</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.project.Project.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

---

##### `historyRetentionSeconds`<sup>Required</sup> <a name="historyRetentionSeconds" id="@rybickic/cdktf-provider-neon.project.Project.property.historyRetentionSeconds"></a>

```typescript
public readonly historyRetentionSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.project.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@rybickic/cdktf-provider-neon.project.Project.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.project.Project.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `storePassword`<sup>Required</sup> <a name="storePassword" id="@rybickic/cdktf-provider-neon.project.Project.property.storePassword"></a>

```typescript
public readonly storePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.project.Project.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Role <a name="Role" id="@rybickic/cdktf-provider-neon.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role neon_role}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.role.Role.Initializer"></a>

```typescript
import { role } from '@rybickic/cdktf-provider-neon'

new role.Role(scope: Construct, id: string, config: RoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.role.RoleConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.role.Role.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.Role.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.role.Role.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.role.RoleConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.role.Role.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.role.Role.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.role.Role.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.role.Role.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.role.Role.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.role.Role.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.role.Role.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.role.Role.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.role.Role.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@rybickic/cdktf-provider-neon.role.Role.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.role.Role.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@rybickic/cdktf-provider-neon.role.Role.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.Role.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.role.Role.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.role.Role.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.role.Role.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@rybickic/cdktf-provider-neon.role.Role.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.role.Role.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@rybickic/cdktf-provider-neon.role.Role.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@rybickic/cdktf-provider-neon.role.Role.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.role.Role.isConstruct"></a>

```typescript
import { role } from '@rybickic/cdktf-provider-neon'

role.Role.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.role.Role.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.role.Role.isTerraformElement"></a>

```typescript
import { role } from '@rybickic/cdktf-provider-neon'

role.Role.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.role.Role.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@rybickic/cdktf-provider-neon.role.Role.isTerraformResource"></a>

```typescript
import { role } from '@rybickic/cdktf-provider-neon'

role.Role.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.role.Role.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.role.Role.generateConfigForImport"></a>

```typescript
import { role } from '@rybickic/cdktf-provider-neon'

role.Role.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.role.Role.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.role.Role.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Role to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.role.Role.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Role that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.role.Role.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Role to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.role.Role.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.role.Role.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.role.Role.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.role.Role.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.role.Role.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.role.Role.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.role.Role.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.role.Role.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.role.Role.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.role.Role.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.role.Role.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.role.Role.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.role.Role.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.role.Role.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `password`<sup>Required</sup> <a name="password" id="@rybickic/cdktf-provider-neon.role.Role.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `protected`<sup>Required</sup> <a name="protected" id="@rybickic/cdktf-provider-neon.role.Role.property.protected"></a>

```typescript
public readonly protected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@rybickic/cdktf-provider-neon.role.Role.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.role.Role.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@rybickic/cdktf-provider-neon.role.Role.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.role.Role.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.role.Role.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.Role.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.role.Role.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.role.Role.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.role.Role.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchConfig <a name="BranchConfig" id="@rybickic/cdktf-provider-neon.branch.BranchConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.Initializer"></a>

```typescript
import { branch } from '@rybickic/cdktf-provider-neon'

const branchConfig: branch.BranchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.name">name</a></code> | <code>string</code> | Branch name. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentId">parentId</a></code> | <code>string</code> | ID of the branch to checkout. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentLsn">parentLsn</a></code> | <code>string</code> | Log Sequence Number (LSN) horizon for the data to be present in the new branch. See details: https://neon.tech/docs/reference/glossary/#lsn. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentTimestamp">parentTimestamp</a></code> | <code>number</code> | Timestamp horizon for the data to be present in the new branch.  **Note**: it's defined as Unix epoch.'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#project_id Branch#project_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#name Branch#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

ID of the branch to checkout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#parent_id Branch#parent_id}

---

##### `parentLsn`<sup>Optional</sup> <a name="parentLsn" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentLsn"></a>

```typescript
public readonly parentLsn: string;
```

- *Type:* string

Log Sequence Number (LSN) horizon for the data to be present in the new branch. See details: https://neon.tech/docs/reference/glossary/#lsn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#parent_lsn Branch#parent_lsn}

---

##### `parentTimestamp`<sup>Optional</sup> <a name="parentTimestamp" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentTimestamp"></a>

```typescript
public readonly parentTimestamp: number;
```

- *Type:* number

Timestamp horizon for the data to be present in the new branch.  **Note**: it's defined as Unix epoch.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#parent_timestamp Branch#parent_timestamp}

---

### DatabaseConfig <a name="DatabaseConfig" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.Initializer"></a>

```typescript
import { database } from '@rybickic/cdktf-provider-neon'

const databaseConfig: database.DatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.branchId">branchId</a></code> | <code>string</code> | Branch ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.name">name</a></code> | <code>string</code> | Database name. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.ownerName">ownerName</a></code> | <code>string</code> | Role name of the database owner. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#id Database#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Branch ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#branch_id Database#branch_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#name Database#name}

---

##### `ownerName`<sup>Required</sup> <a name="ownerName" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.ownerName"></a>

```typescript
public readonly ownerName: string;
```

- *Type:* string

Role name of the database owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#owner_name Database#owner_name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#project_id Database#project_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EndpointConfig <a name="EndpointConfig" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.Initializer"></a>

```typescript
import { endpoint } from '@rybickic/cdktf-provider-neon'

const endpointConfig: endpoint.EndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.branchId">branchId</a></code> | <code>string</code> | Branch ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#autoscaling_limit_max_cu Endpoint#autoscaling_limit_max_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#autoscaling_limit_min_cu Endpoint#autoscaling_limit_min_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the endpoint. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#pg_settings Endpoint#pg_settings}. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerEnabled">poolerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Activate connection pooling. See details: https://neon.tech/docs/connect/connection-pooling. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerMode">poolerMode</a></code> | <code>string</code> | Mode of connections pooling. See details: https://neon.tech/docs/connect/connection-pooling. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.regionId">regionId</a></code> | <code>string</code> | AWS Region. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.suspendTimeoutSeconds">suspendTimeoutSeconds</a></code> | <code>number</code> | Duration of inactivity in seconds after which the compute endpoint is automatically suspended. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.type">type</a></code> | <code>string</code> | Access type. **Note** that "read_write" is the only supported type yet. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Branch ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#branch_id Endpoint#branch_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#project_id Endpoint#project_id}

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#autoscaling_limit_max_cu Endpoint#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#autoscaling_limit_min_cu Endpoint#autoscaling_limit_min_cu}.

---

##### `computeProvisioner`<sup>Optional</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#compute_provisioner Endpoint#compute_provisioner}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#disabled Endpoint#disabled}

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#pg_settings Endpoint#pg_settings}.

---

##### `poolerEnabled`<sup>Optional</sup> <a name="poolerEnabled" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerEnabled"></a>

```typescript
public readonly poolerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Activate connection pooling. See details: https://neon.tech/docs/connect/connection-pooling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#pooler_enabled Endpoint#pooler_enabled}

---

##### `poolerMode`<sup>Optional</sup> <a name="poolerMode" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerMode"></a>

```typescript
public readonly poolerMode: string;
```

- *Type:* string

Mode of connections pooling. See details: https://neon.tech/docs/connect/connection-pooling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#pooler_mode Endpoint#pooler_mode}

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#region_id Endpoint#region_id}

---

##### `suspendTimeoutSeconds`<sup>Optional</sup> <a name="suspendTimeoutSeconds" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.suspendTimeoutSeconds"></a>

```typescript
public readonly suspendTimeoutSeconds: number;
```

- *Type:* number

Duration of inactivity in seconds after which the compute endpoint is automatically suspended.

The value 0 means use the global default.
The value -1 means never suspend. The default value is 300 seconds (5 minutes).
The maximum value is 604800 seconds (1 week)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#suspend_timeout_seconds Endpoint#suspend_timeout_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Access type. **Note** that "read_write" is the only supported type yet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/endpoint#type Endpoint#type}

---

### NeonProviderConfig <a name="NeonProviderConfig" id="@rybickic/cdktf-provider-neon.provider.NeonProviderConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.provider.NeonProviderConfig.Initializer"></a>

```typescript
import { provider } from '@rybickic/cdktf-provider-neon'

const neonProviderConfig: provider.NeonProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | API access key. Default is read from the environment variable `NEON_API_KEY`. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@rybickic/cdktf-provider-neon.provider.NeonProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs#alias NeonProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@rybickic/cdktf-provider-neon.provider.NeonProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

API access key. Default is read from the environment variable `NEON_API_KEY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs#api_key NeonProvider#api_key}

---

### ProjectBranch <a name="ProjectBranch" id="@rybickic/cdktf-provider-neon.project.ProjectBranch"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

const projectBranch: project.ProjectBranch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranch.property.databaseName">databaseName</a></code> | <code>string</code> | The database name. If not specified, the default database name will be used. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranch.property.name">name</a></code> | <code>string</code> | The branch name. If not specified, the default branch name will be used. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranch.property.roleName">roleName</a></code> | <code>string</code> | The role name. If not specified, the default role name will be used. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name. If not specified, the default database name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#database_name Project#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The branch name. If not specified, the default branch name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#name Project#name}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The role name. If not specified, the default role name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#role_name Project#role_name}

---

### ProjectConfig <a name="ProjectConfig" id="@rybickic/cdktf-provider-neon.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

const projectConfig: project.ProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.branch">branch</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectBranch</code> | branch block. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings</code> | default_endpoint_settings block. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.historyRetentionSeconds">historyRetentionSeconds</a></code> | <code>number</code> | The number of seconds to retain the point-in-time restore (PITR) backup history for this project. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.pgVersion">pgVersion</a></code> | <code>number</code> | Postgres version. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.quota">quota</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuota</code> | quota block. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.regionId">regionId</a></code> | <code>string</code> | AWS Region. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.storePassword">storePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not passwords are stored for roles in the Neon project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.branch"></a>

```typescript
public readonly branch: ProjectBranch;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectBranch

branch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#branch Project#branch}

---

##### `computeProvisioner`<sup>Optional</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#compute_provisioner Project#compute_provisioner}

---

##### `defaultEndpointSettings`<sup>Optional</sup> <a name="defaultEndpointSettings" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: ProjectDefaultEndpointSettings;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings

default_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#default_endpoint_settings Project#default_endpoint_settings}

---

##### `historyRetentionSeconds`<sup>Optional</sup> <a name="historyRetentionSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.historyRetentionSeconds"></a>

```typescript
public readonly historyRetentionSeconds: number;
```

- *Type:* number

The number of seconds to retain the point-in-time restore (PITR) backup history for this project.

Default: 7 days, see https://neon.tech/docs/reference/glossary#point-in-time-restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#history_retention_seconds Project#history_retention_seconds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#name Project#name}

---

##### `pgVersion`<sup>Optional</sup> <a name="pgVersion" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

Postgres version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#pg_version Project#pg_version}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.quota"></a>

```typescript
public readonly quota: ProjectQuota;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectQuota

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#quota Project#quota}

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#region_id Project#region_id}

---

##### `storePassword`<sup>Optional</sup> <a name="storePassword" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.storePassword"></a>

```typescript
public readonly storePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not passwords are stored for roles in the Neon project.

Storing passwords facilitates access to Neon features that require authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#store_password Project#store_password}

---

### ProjectDefaultEndpointSettings <a name="ProjectDefaultEndpointSettings" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

const projectDefaultEndpointSettings: project.ProjectDefaultEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#autoscaling_limit_max_cu Project#autoscaling_limit_max_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#autoscaling_limit_min_cu Project#autoscaling_limit_min_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.suspendTimeoutSeconds">suspendTimeoutSeconds</a></code> | <code>number</code> | Duration of inactivity in seconds after which the compute endpoint is automatically suspended. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#autoscaling_limit_max_cu Project#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#autoscaling_limit_min_cu Project#autoscaling_limit_min_cu}.

---

##### `suspendTimeoutSeconds`<sup>Optional</sup> <a name="suspendTimeoutSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.suspendTimeoutSeconds"></a>

```typescript
public readonly suspendTimeoutSeconds: number;
```

- *Type:* number

Duration of inactivity in seconds after which the compute endpoint is automatically suspended.

The value 0 means use the global default.
The value -1 means never suspend. The default value is 300 seconds (5 minutes).
The maximum value is 604800 seconds (1 week)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#suspend_timeout_seconds Project#suspend_timeout_seconds}

---

### ProjectQuota <a name="ProjectQuota" id="@rybickic/cdktf-provider-neon.project.ProjectQuota"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

const projectQuota: project.ProjectQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuota.property.activeTimeSeconds">activeTimeSeconds</a></code> | <code>number</code> | The total amount of wall-clock time allowed to be spent by the project's compute endpoints. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuota.property.computeTimeSeconds">computeTimeSeconds</a></code> | <code>number</code> | The total amount of CPU seconds allowed to be spent by the project's compute endpoints. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuota.property.dataTransferBytes">dataTransferBytes</a></code> | <code>number</code> | Total amount of data transferred from all of a project's branches using the proxy. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuota.property.logicalSizeBytes">logicalSizeBytes</a></code> | <code>number</code> | Limit on the logical size of every project's branch. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuota.property.writtenDataBytes">writtenDataBytes</a></code> | <code>number</code> | Total amount of data written to all of a project's branches. |

---

##### `activeTimeSeconds`<sup>Optional</sup> <a name="activeTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.activeTimeSeconds"></a>

```typescript
public readonly activeTimeSeconds: number;
```

- *Type:* number

The total amount of wall-clock time allowed to be spent by the project's compute endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#active_time_seconds Project#active_time_seconds}

---

##### `computeTimeSeconds`<sup>Optional</sup> <a name="computeTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.computeTimeSeconds"></a>

```typescript
public readonly computeTimeSeconds: number;
```

- *Type:* number

The total amount of CPU seconds allowed to be spent by the project's compute endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#compute_time_seconds Project#compute_time_seconds}

---

##### `dataTransferBytes`<sup>Optional</sup> <a name="dataTransferBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.dataTransferBytes"></a>

```typescript
public readonly dataTransferBytes: number;
```

- *Type:* number

Total amount of data transferred from all of a project's branches using the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#data_transfer_bytes Project#data_transfer_bytes}

---

##### `logicalSizeBytes`<sup>Optional</sup> <a name="logicalSizeBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.logicalSizeBytes"></a>

```typescript
public readonly logicalSizeBytes: number;
```

- *Type:* number

Limit on the logical size of every project's branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#logical_size_bytes Project#logical_size_bytes}

---

##### `writtenDataBytes`<sup>Optional</sup> <a name="writtenDataBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.writtenDataBytes"></a>

```typescript
public readonly writtenDataBytes: number;
```

- *Type:* number

Total amount of data written to all of a project's branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#written_data_bytes Project#written_data_bytes}

---

### RoleConfig <a name="RoleConfig" id="@rybickic/cdktf-provider-neon.role.RoleConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.role.RoleConfig.Initializer"></a>

```typescript
import { role } from '@rybickic/cdktf-provider-neon'

const roleConfig: role.RoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.branchId">branchId</a></code> | <code>string</code> | Branch ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.name">name</a></code> | <code>string</code> | Role name. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role#id Role#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Branch ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role#branch_id Role#branch_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role#name Role#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role#project_id Role#project_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectBranchOutputReference <a name="ProjectBranchOutputReference" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

new project.ProjectBranchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.resetRoleName"></a>

```typescript
public resetRoleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.internalValue">internalValue</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectBranch</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.project.ProjectBranchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectBranch;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectBranch

---


### ProjectDefaultEndpointSettingsOutputReference <a name="ProjectDefaultEndpointSettingsOutputReference" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

new project.ProjectDefaultEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resetSuspendTimeoutSeconds">resetSuspendTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetSuspendTimeoutSeconds` <a name="resetSuspendTimeoutSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.resetSuspendTimeoutSeconds"></a>

```typescript
public resetSuspendTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.suspendTimeoutSecondsInput">suspendTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.suspendTimeoutSeconds">suspendTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `suspendTimeoutSecondsInput`<sup>Optional</sup> <a name="suspendTimeoutSecondsInput" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.suspendTimeoutSecondsInput"></a>

```typescript
public readonly suspendTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `suspendTimeoutSeconds`<sup>Required</sup> <a name="suspendTimeoutSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.suspendTimeoutSeconds"></a>

```typescript
public readonly suspendTimeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectDefaultEndpointSettings;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings

---


### ProjectQuotaOutputReference <a name="ProjectQuotaOutputReference" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.Initializer"></a>

```typescript
import { project } from '@rybickic/cdktf-provider-neon'

new project.ProjectQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetActiveTimeSeconds">resetActiveTimeSeconds</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetComputeTimeSeconds">resetComputeTimeSeconds</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetDataTransferBytes">resetDataTransferBytes</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetLogicalSizeBytes">resetLogicalSizeBytes</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetWrittenDataBytes">resetWrittenDataBytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveTimeSeconds` <a name="resetActiveTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetActiveTimeSeconds"></a>

```typescript
public resetActiveTimeSeconds(): void
```

##### `resetComputeTimeSeconds` <a name="resetComputeTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetComputeTimeSeconds"></a>

```typescript
public resetComputeTimeSeconds(): void
```

##### `resetDataTransferBytes` <a name="resetDataTransferBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetDataTransferBytes"></a>

```typescript
public resetDataTransferBytes(): void
```

##### `resetLogicalSizeBytes` <a name="resetLogicalSizeBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetLogicalSizeBytes"></a>

```typescript
public resetLogicalSizeBytes(): void
```

##### `resetWrittenDataBytes` <a name="resetWrittenDataBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.resetWrittenDataBytes"></a>

```typescript
public resetWrittenDataBytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.activeTimeSecondsInput">activeTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.computeTimeSecondsInput">computeTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.dataTransferBytesInput">dataTransferBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.logicalSizeBytesInput">logicalSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.writtenDataBytesInput">writtenDataBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.activeTimeSeconds">activeTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.computeTimeSeconds">computeTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.dataTransferBytes">dataTransferBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.logicalSizeBytes">logicalSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.writtenDataBytes">writtenDataBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.internalValue">internalValue</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuota</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeTimeSecondsInput`<sup>Optional</sup> <a name="activeTimeSecondsInput" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.activeTimeSecondsInput"></a>

```typescript
public readonly activeTimeSecondsInput: number;
```

- *Type:* number

---

##### `computeTimeSecondsInput`<sup>Optional</sup> <a name="computeTimeSecondsInput" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.computeTimeSecondsInput"></a>

```typescript
public readonly computeTimeSecondsInput: number;
```

- *Type:* number

---

##### `dataTransferBytesInput`<sup>Optional</sup> <a name="dataTransferBytesInput" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.dataTransferBytesInput"></a>

```typescript
public readonly dataTransferBytesInput: number;
```

- *Type:* number

---

##### `logicalSizeBytesInput`<sup>Optional</sup> <a name="logicalSizeBytesInput" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.logicalSizeBytesInput"></a>

```typescript
public readonly logicalSizeBytesInput: number;
```

- *Type:* number

---

##### `writtenDataBytesInput`<sup>Optional</sup> <a name="writtenDataBytesInput" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.writtenDataBytesInput"></a>

```typescript
public readonly writtenDataBytesInput: number;
```

- *Type:* number

---

##### `activeTimeSeconds`<sup>Required</sup> <a name="activeTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.activeTimeSeconds"></a>

```typescript
public readonly activeTimeSeconds: number;
```

- *Type:* number

---

##### `computeTimeSeconds`<sup>Required</sup> <a name="computeTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.computeTimeSeconds"></a>

```typescript
public readonly computeTimeSeconds: number;
```

- *Type:* number

---

##### `dataTransferBytes`<sup>Required</sup> <a name="dataTransferBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.dataTransferBytes"></a>

```typescript
public readonly dataTransferBytes: number;
```

- *Type:* number

---

##### `logicalSizeBytes`<sup>Required</sup> <a name="logicalSizeBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.logicalSizeBytes"></a>

```typescript
public readonly logicalSizeBytes: number;
```

- *Type:* number

---

##### `writtenDataBytes`<sup>Required</sup> <a name="writtenDataBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.writtenDataBytes"></a>

```typescript
public readonly writtenDataBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectQuota;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectQuota

---




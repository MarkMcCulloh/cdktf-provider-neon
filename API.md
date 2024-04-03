
# Terraform CDK neon Provider tracks ~> 0.2

This repo builds and publishes the Terraform neon Provider bindings for [CDK for Terraform](https://cdk.tf).

Is based directly on neon 0.5.0

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
- [Terraform neon Provider](https://registry.terraform.io/providers/kislerdm/neon/0.5.0)
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

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch neon_branch}.

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
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.branch.Branch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.branch.Branch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `hasResourceMove` <a name="hasResourceMove" id="@rybickic/cdktf-provider-neon.branch.Branch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

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

##### `moveFromId` <a name="moveFromId" id="@rybickic/cdktf-provider-neon.branch.Branch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.branch.Branch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

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

##### `moveToId` <a name="moveToId" id="@rybickic/cdktf-provider-neon.branch.Branch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.branch.Branch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch#import import section} in the documentation of this resource for the id to use

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

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database neon_database}.

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
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.database.Database.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.database.Database.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `hasResourceMove` <a name="hasResourceMove" id="@rybickic/cdktf-provider-neon.database.Database.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

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

##### `moveFromId` <a name="moveFromId" id="@rybickic/cdktf-provider-neon.database.Database.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.Database.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

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

##### `moveToId` <a name="moveToId" id="@rybickic/cdktf-provider-neon.database.Database.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.Database.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

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

### DataNeonBranchEndpoints <a name="DataNeonBranchEndpoints" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints neon_branch_endpoints}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchEndpoints.DataNeonBranchEndpoints(scope: Construct, id: string, config: DataNeonBranchEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEndpoints` <a name="putEndpoints" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | DataNeonBranchEndpointsEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.putEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]

---

##### `resetEndpoints` <a name="resetEndpoints" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetId` <a name="resetId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNeonBranchEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isConstruct"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

dataNeonBranchEndpoints.DataNeonBranchEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformElement"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformDataSource"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNeonBranchEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNeonBranchEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNeonBranchEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNeonBranchEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.endpoints">endpoints</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.endpoints"></a>

```typescript
public readonly endpoints: DataNeonBranchEndpointsEndpointsList;
```

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | DataNeonBranchEndpointsEndpoints[];
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataNeonBranches <a name="DataNeonBranches" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branches neon_branches}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

new dataNeonBranches.DataNeonBranches(scope: Construct, id: string, config: DataNeonBranchesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNeonBranches resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isConstruct"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

dataNeonBranches.DataNeonBranches.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isTerraformElement"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

dataNeonBranches.DataNeonBranches.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isTerraformDataSource"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

dataNeonBranches.DataNeonBranches.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.generateConfigForImport"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

dataNeonBranches.DataNeonBranches.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNeonBranches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNeonBranches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNeonBranches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNeonBranches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.branches">branches</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `branches`<sup>Required</sup> <a name="branches" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.branches"></a>

```typescript
public readonly branches: DataNeonBranchesBranchesList;
```

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranches.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataNeonBranchRolePassword <a name="DataNeonBranchRolePassword" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password neon_branch_role_password}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer"></a>

```typescript
import { dataNeonBranchRolePassword } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchRolePassword.DataNeonBranchRolePassword(scope: Construct, id: string, config: DataNeonBranchRolePasswordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNeonBranchRolePassword resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isConstruct"></a>

```typescript
import { dataNeonBranchRolePassword } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRolePassword.DataNeonBranchRolePassword.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformElement"></a>

```typescript
import { dataNeonBranchRolePassword } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformDataSource"></a>

```typescript
import { dataNeonBranchRolePassword } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport"></a>

```typescript
import { dataNeonBranchRolePassword } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNeonBranchRolePassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNeonBranchRolePassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNeonBranchRolePassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNeonBranchRolePassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `password`<sup>Required</sup> <a name="password" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePassword.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataNeonBranchRoles <a name="DataNeonBranchRoles" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles neon_branch_roles}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchRoles.DataNeonBranchRoles(scope: Construct, id: string, config: DataNeonBranchRolesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRoles` <a name="putRoles" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.putRoles"></a>

```typescript
public putRoles(value: IResolvable | DataNeonBranchRolesRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.putRoles.parameter.value"></a>

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]

---

##### `resetId` <a name="resetId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoles` <a name="resetRoles" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.resetRoles"></a>

```typescript
public resetRoles(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNeonBranchRoles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isConstruct"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRoles.DataNeonBranchRoles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isTerraformElement"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRoles.DataNeonBranchRoles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isTerraformDataSource"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRoles.DataNeonBranchRoles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNeonBranchRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNeonBranchRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNeonBranchRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNeonBranchRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.roles">roles</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.branchIdInput">branchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.rolesInput">rolesInput</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.branchId">branchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `roles`<sup>Required</sup> <a name="roles" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.roles"></a>

```typescript
public readonly roles: DataNeonBranchRolesRolesList;
```

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.branchIdInput"></a>

```typescript
public readonly branchIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | DataNeonBranchRolesRoles[];
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRoles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataNeonProject <a name="DataNeonProject" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/project neon_project}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer"></a>

```typescript
import { dataNeonProject } from '@rybickic/cdktf-provider-neon'

new dataNeonProject.DataNeonProject(scope: Construct, id: string, config: DataNeonProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNeonProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isConstruct"></a>

```typescript
import { dataNeonProject } from '@rybickic/cdktf-provider-neon'

dataNeonProject.DataNeonProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isTerraformElement"></a>

```typescript
import { dataNeonProject } from '@rybickic/cdktf-provider-neon'

dataNeonProject.DataNeonProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isTerraformDataSource"></a>

```typescript
import { dataNeonProject } from '@rybickic/cdktf-provider-neon'

dataNeonProject.DataNeonProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.generateConfigForImport"></a>

```typescript
import { dataNeonProject } from '@rybickic/cdktf-provider-neon'

dataNeonProject.DataNeonProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNeonProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNeonProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNeonProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNeonProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.connectionUri">connectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databaseHost">databaseHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databasePassword">databasePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databaseUser">databaseUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.defaultBranchId">defaultBranchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

---

##### `databaseHost`<sup>Required</sup> <a name="databaseHost" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databasePassword`<sup>Required</sup> <a name="databasePassword" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databasePassword"></a>

```typescript
public readonly databasePassword: string;
```

- *Type:* string

---

##### `databaseUser`<sup>Required</sup> <a name="databaseUser" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.databaseUser"></a>

```typescript
public readonly databaseUser: string;
```

- *Type:* string

---

##### `defaultBranchId`<sup>Required</sup> <a name="defaultBranchId" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.defaultBranchId"></a>

```typescript
public readonly defaultBranchId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Endpoint <a name="Endpoint" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint neon_endpoint}.

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
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `hasResourceMove` <a name="hasResourceMove" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

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

##### `moveFromId` <a name="moveFromId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

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

##### `moveToId` <a name="moveToId" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.endpoint.Endpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use

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

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs neon}.

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
| <code><a href="#@rybickic/cdktf-provider-neon.provider.NeonProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.provider.NeonProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs#import import section} in the documentation of this resource for the id to use

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

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project neon_project}.

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
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.putBranch">putBranch</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.putDefaultEndpointSettings">putDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetAllowedIps">resetAllowedIps</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetAllowedIpsPrimaryBranchOnly">resetAllowedIpsPrimaryBranchOnly</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetComputeProvisioner">resetComputeProvisioner</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetDefaultEndpointSettings">resetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.resetEnableLogicalReplication">resetEnableLogicalReplication</a></code> | *No description.* |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.project.Project.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `hasResourceMove` <a name="hasResourceMove" id="@rybickic/cdktf-provider-neon.project.Project.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

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

##### `moveFromId` <a name="moveFromId" id="@rybickic/cdktf-provider-neon.project.Project.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.Project.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

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

##### `moveToId` <a name="moveToId" id="@rybickic/cdktf-provider-neon.project.Project.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.Project.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

##### `resetAllowedIps` <a name="resetAllowedIps" id="@rybickic/cdktf-provider-neon.project.Project.resetAllowedIps"></a>

```typescript
public resetAllowedIps(): void
```

##### `resetAllowedIpsPrimaryBranchOnly` <a name="resetAllowedIpsPrimaryBranchOnly" id="@rybickic/cdktf-provider-neon.project.Project.resetAllowedIpsPrimaryBranchOnly"></a>

```typescript
public resetAllowedIpsPrimaryBranchOnly(): void
```

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

##### `resetEnableLogicalReplication` <a name="resetEnableLogicalReplication" id="@rybickic/cdktf-provider-neon.project.Project.resetEnableLogicalReplication"></a>

```typescript
public resetEnableLogicalReplication(): void
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

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointId">defaultEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.quota">quota</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuotaOutputReference</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.allowedIpsInput">allowedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.allowedIpsPrimaryBranchOnlyInput">allowedIpsPrimaryBranchOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.branchInput">branchInput</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectBranch</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.computeProvisionerInput">computeProvisionerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointSettingsInput">defaultEndpointSettingsInput</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.enableLogicalReplicationInput">enableLogicalReplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.historyRetentionSecondsInput">historyRetentionSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.pgVersionInput">pgVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.quotaInput">quotaInput</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuota</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.regionIdInput">regionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.storePasswordInput">storePasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.allowedIps">allowedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.allowedIpsPrimaryBranchOnly">allowedIpsPrimaryBranchOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.project.Project.property.enableLogicalReplication">enableLogicalReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
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

##### `defaultEndpointId`<sup>Required</sup> <a name="defaultEndpointId" id="@rybickic/cdktf-provider-neon.project.Project.property.defaultEndpointId"></a>

```typescript
public readonly defaultEndpointId: string;
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

##### `allowedIpsInput`<sup>Optional</sup> <a name="allowedIpsInput" id="@rybickic/cdktf-provider-neon.project.Project.property.allowedIpsInput"></a>

```typescript
public readonly allowedIpsInput: string[];
```

- *Type:* string[]

---

##### `allowedIpsPrimaryBranchOnlyInput`<sup>Optional</sup> <a name="allowedIpsPrimaryBranchOnlyInput" id="@rybickic/cdktf-provider-neon.project.Project.property.allowedIpsPrimaryBranchOnlyInput"></a>

```typescript
public readonly allowedIpsPrimaryBranchOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

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

##### `enableLogicalReplicationInput`<sup>Optional</sup> <a name="enableLogicalReplicationInput" id="@rybickic/cdktf-provider-neon.project.Project.property.enableLogicalReplicationInput"></a>

```typescript
public readonly enableLogicalReplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

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

##### `allowedIps`<sup>Required</sup> <a name="allowedIps" id="@rybickic/cdktf-provider-neon.project.Project.property.allowedIps"></a>

```typescript
public readonly allowedIps: string[];
```

- *Type:* string[]

---

##### `allowedIpsPrimaryBranchOnly`<sup>Required</sup> <a name="allowedIpsPrimaryBranchOnly" id="@rybickic/cdktf-provider-neon.project.Project.property.allowedIpsPrimaryBranchOnly"></a>

```typescript
public readonly allowedIpsPrimaryBranchOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computeProvisioner`<sup>Required</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.project.Project.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

---

##### `enableLogicalReplication`<sup>Required</sup> <a name="enableLogicalReplication" id="@rybickic/cdktf-provider-neon.project.Project.property.enableLogicalReplication"></a>

```typescript
public readonly enableLogicalReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

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

### ProjectPermission <a name="ProjectPermission" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission neon_project_permission}.

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer"></a>

```typescript
import { projectPermission } from '@rybickic/cdktf-provider-neon'

new projectPermission.ProjectPermission(scope: Construct, id: string, config: ProjectPermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer.parameter.config">config</a></code> | <code>@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.Initializer.parameter.config"></a>

- *Type:* @rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectPermission resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isConstruct"></a>

```typescript
import { projectPermission } from '@rybickic/cdktf-provider-neon'

projectPermission.ProjectPermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isTerraformElement"></a>

```typescript
import { projectPermission } from '@rybickic/cdktf-provider-neon'

projectPermission.ProjectPermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isTerraformResource"></a>

```typescript
import { projectPermission } from '@rybickic/cdktf-provider-neon'

projectPermission.ProjectPermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.generateConfigForImport"></a>

```typescript
import { projectPermission } from '@rybickic/cdktf-provider-neon'

projectPermission.ProjectPermission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectPermission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectPermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.granteeInput">granteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.grantee">grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.granteeInput"></a>

```typescript
public readonly granteeInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Role <a name="Role" id="@rybickic/cdktf-provider-neon.role.Role"></a>

Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role neon_role}.

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
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@rybickic/cdktf-provider-neon.role.Role.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@rybickic/cdktf-provider-neon.role.Role.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `hasResourceMove` <a name="hasResourceMove" id="@rybickic/cdktf-provider-neon.role.Role.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

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

##### `moveFromId` <a name="moveFromId" id="@rybickic/cdktf-provider-neon.role.Role.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.Role.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

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

##### `moveToId` <a name="moveToId" id="@rybickic/cdktf-provider-neon.role.Role.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.Role.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentTimestamp">parentTimestamp</a></code> | <code>number</code> | Timestamp horizon for the data to be present in the new branch. **Note**: it's defined as Unix epoch.'. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch#project_id Branch#project_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch#name Branch#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

ID of the branch to checkout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch#parent_id Branch#parent_id}

---

##### `parentLsn`<sup>Optional</sup> <a name="parentLsn" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentLsn"></a>

```typescript
public readonly parentLsn: string;
```

- *Type:* string

Log Sequence Number (LSN) horizon for the data to be present in the new branch. See details: https://neon.tech/docs/reference/glossary/#lsn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch#parent_lsn Branch#parent_lsn}

---

##### `parentTimestamp`<sup>Optional</sup> <a name="parentTimestamp" id="@rybickic/cdktf-provider-neon.branch.BranchConfig.property.parentTimestamp"></a>

```typescript
public readonly parentTimestamp: number;
```

- *Type:* number

Timestamp horizon for the data to be present in the new branch. **Note**: it's defined as Unix epoch.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/branch#parent_timestamp Branch#parent_timestamp}

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
| <code><a href="#@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#id Database#id}. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#branch_id Database#branch_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#name Database#name}

---

##### `ownerName`<sup>Required</sup> <a name="ownerName" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.ownerName"></a>

```typescript
public readonly ownerName: string;
```

- *Type:* string

Role name of the database owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#owner_name Database#owner_name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#project_id Database#project_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.database.DatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNeonBranchEndpointsConfig <a name="DataNeonBranchEndpointsConfig" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.Initializer"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchEndpointsConfig: dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.branchId">branchId</a></code> | <code>string</code> | Branch ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]</code> | endpoints block. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#id DataNeonBranchEndpoints#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Branch ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#branch_id DataNeonBranchEndpoints#branch_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#project_id DataNeonBranchEndpoints#project_id}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | DataNeonBranchEndpointsEndpoints[];
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#endpoints DataNeonBranchEndpoints#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#id DataNeonBranchEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNeonBranchEndpointsEndpoints <a name="DataNeonBranchEndpointsEndpoints" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints.Initializer"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchEndpointsEndpoints: dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints = { ... }
```


### DataNeonBranchesBranches <a name="DataNeonBranchesBranches" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranches"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranches.Initializer"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchesBranches: dataNeonBranches.DataNeonBranchesBranches = { ... }
```


### DataNeonBranchesConfig <a name="DataNeonBranchesConfig" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.Initializer"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchesConfig: dataNeonBranches.DataNeonBranchesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branches#id DataNeonBranches#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branches#project_id DataNeonBranches#project_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branches#id DataNeonBranches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNeonBranchRolePasswordConfig <a name="DataNeonBranchRolePasswordConfig" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.Initializer"></a>

```typescript
import { dataNeonBranchRolePassword } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchRolePasswordConfig: dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.branchId">branchId</a></code> | <code>string</code> | Branch ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.roleName">roleName</a></code> | <code>string</code> | Role name. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#id DataNeonBranchRolePassword#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Branch ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#branch_id DataNeonBranchRolePassword#branch_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#project_id DataNeonBranchRolePassword#project_id}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#role_name DataNeonBranchRolePassword#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchRolePassword.DataNeonBranchRolePasswordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#id DataNeonBranchRolePassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNeonBranchRolesConfig <a name="DataNeonBranchRolesConfig" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.Initializer"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchRolesConfig: dataNeonBranchRoles.DataNeonBranchRolesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.branchId">branchId</a></code> | <code>string</code> | Branch ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#id DataNeonBranchRoles#id}. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.roles">roles</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]</code> | roles block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.branchId"></a>

```typescript
public readonly branchId: string;
```

- *Type:* string

Branch ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#branch_id DataNeonBranchRoles#branch_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#project_id DataNeonBranchRoles#project_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#id DataNeonBranchRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesConfig.property.roles"></a>

```typescript
public readonly roles: IResolvable | DataNeonBranchRolesRoles[];
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#roles DataNeonBranchRoles#roles}

---

### DataNeonBranchRolesRoles <a name="DataNeonBranchRolesRoles" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles.Initializer"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

const dataNeonBranchRolesRoles: dataNeonBranchRoles.DataNeonBranchRolesRoles = { ... }
```


### DataNeonProjectConfig <a name="DataNeonProjectConfig" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.Initializer"></a>

```typescript
import { dataNeonProject } from '@rybickic/cdktf-provider-neon'

const dataNeonProjectConfig: dataNeonProject.DataNeonProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.id">id</a></code> | <code>string</code> | Project ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonProject.DataNeonProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/project#id DataNeonProject#id}

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
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#autoscaling_limit_max_cu Endpoint#autoscaling_limit_max_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#autoscaling_limit_min_cu Endpoint#autoscaling_limit_min_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the endpoint. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#pg_settings Endpoint#pg_settings}. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerEnabled">poolerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Activate connection pooling. See details: https://neon.tech/docs/connect/connection-pooling. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerMode">poolerMode</a></code> | <code>string</code> | Mode of connections pooling. See details: https://neon.tech/docs/connect/connection-pooling. |
| <code><a href="#@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.regionId">regionId</a></code> | <code>string</code> | Deployment region: https://neon.tech/docs/introduction/regions. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#branch_id Endpoint#branch_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#project_id Endpoint#project_id}

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#autoscaling_limit_max_cu Endpoint#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#autoscaling_limit_min_cu Endpoint#autoscaling_limit_min_cu}.

---

##### `computeProvisioner`<sup>Optional</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#compute_provisioner Endpoint#compute_provisioner}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#disabled Endpoint#disabled}

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#pg_settings Endpoint#pg_settings}.

---

##### `poolerEnabled`<sup>Optional</sup> <a name="poolerEnabled" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerEnabled"></a>

```typescript
public readonly poolerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Activate connection pooling. See details: https://neon.tech/docs/connect/connection-pooling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#pooler_enabled Endpoint#pooler_enabled}

---

##### `poolerMode`<sup>Optional</sup> <a name="poolerMode" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.poolerMode"></a>

```typescript
public readonly poolerMode: string;
```

- *Type:* string

Mode of connections pooling. See details: https://neon.tech/docs/connect/connection-pooling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#pooler_mode Endpoint#pooler_mode}

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

Deployment region: https://neon.tech/docs/introduction/regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#region_id Endpoint#region_id}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#suspend_timeout_seconds Endpoint#suspend_timeout_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@rybickic/cdktf-provider-neon.endpoint.EndpointConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Access type. **Note** that "read_write" is the only supported type yet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/endpoint#type Endpoint#type}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs#alias NeonProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@rybickic/cdktf-provider-neon.provider.NeonProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

API access key. Default is read from the environment variable `NEON_API_KEY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs#api_key NeonProvider#api_key}

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
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranch.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the default database provisioned upon creation of new project. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranch.property.name">name</a></code> | <code>string</code> | The name of the default branch provisioned upon creation of new project. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectBranch.property.roleName">roleName</a></code> | <code>string</code> | The name of the default role provisioned upon creation of new project. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the default database provisioned upon creation of new project.

It's owned by the default role (`role_name`).
If not specified, the default database name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#database_name Project#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the default branch provisioned upon creation of new project.

If not specified, the default branch name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#name Project#name}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@rybickic/cdktf-provider-neon.project.ProjectBranch.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the default role provisioned upon creation of new project.

If not specified, the default role name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#role_name Project#role_name}

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
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.allowedIps">allowedIps</a></code> | <code>string[]</code> | A list of IP addresses that are allowed to connect to the endpoints. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.allowedIpsPrimaryBranchOnly">allowedIpsPrimaryBranchOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Apply the allow-list to the primary branch only. Note that the feature is available to the Neon Pro Plan only. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.branch">branch</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectBranch</code> | branch block. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.computeProvisioner">computeProvisioner</a></code> | <code>string</code> | Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings</code> | default_endpoint_settings block. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.enableLogicalReplication">enableLogicalReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Sets wal_level=logical for all compute endpoints in this project. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.historyRetentionSeconds">historyRetentionSeconds</a></code> | <code>number</code> | The number of seconds to retain the point-in-time restore (PITR) backup history for this project. Default: 7 days, see https://neon.tech/docs/reference/glossary#point-in-time-restore. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.pgVersion">pgVersion</a></code> | <code>number</code> | Postgres version. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.quota">quota</a></code> | <code>@rybickic/cdktf-provider-neon.project.ProjectQuota</code> | quota block. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectConfig.property.regionId">regionId</a></code> | <code>string</code> | Deployment region: https://neon.tech/docs/introduction/regions. |
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

##### `allowedIps`<sup>Optional</sup> <a name="allowedIps" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.allowedIps"></a>

```typescript
public readonly allowedIps: string[];
```

- *Type:* string[]

A list of IP addresses that are allowed to connect to the endpoints.

Note that the feature is available to the Neon Pro Plan only. Details: https://neon.tech/docs/manage/projects#configure-ip-allow

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#allowed_ips Project#allowed_ips}

---

##### `allowedIpsPrimaryBranchOnly`<sup>Optional</sup> <a name="allowedIpsPrimaryBranchOnly" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.allowedIpsPrimaryBranchOnly"></a>

```typescript
public readonly allowedIpsPrimaryBranchOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Apply the allow-list to the primary branch only. Note that the feature is available to the Neon Pro Plan only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#allowed_ips_primary_branch_only Project#allowed_ips_primary_branch_only}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.branch"></a>

```typescript
public readonly branch: ProjectBranch;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectBranch

branch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#branch Project#branch}

---

##### `computeProvisioner`<sup>Optional</sup> <a name="computeProvisioner" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.computeProvisioner"></a>

```typescript
public readonly computeProvisioner: string;
```

- *Type:* string

Provisioner The Neon compute provisioner. Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#compute_provisioner Project#compute_provisioner}

---

##### `defaultEndpointSettings`<sup>Optional</sup> <a name="defaultEndpointSettings" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: ProjectDefaultEndpointSettings;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings

default_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#default_endpoint_settings Project#default_endpoint_settings}

---

##### `enableLogicalReplication`<sup>Optional</sup> <a name="enableLogicalReplication" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.enableLogicalReplication"></a>

```typescript
public readonly enableLogicalReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Sets wal_level=logical for all compute endpoints in this project.

All active endpoints will be suspended. Once enabled, logical replication cannot be disabled.
See details: https://neon.tech/docs/introduction/logical-replication


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#enable_logical_replication Project#enable_logical_replication}

---

##### `historyRetentionSeconds`<sup>Optional</sup> <a name="historyRetentionSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.historyRetentionSeconds"></a>

```typescript
public readonly historyRetentionSeconds: number;
```

- *Type:* number

The number of seconds to retain the point-in-time restore (PITR) backup history for this project. Default: 7 days, see https://neon.tech/docs/reference/glossary#point-in-time-restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#history_retention_seconds Project#history_retention_seconds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#name Project#name}

---

##### `pgVersion`<sup>Optional</sup> <a name="pgVersion" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

Postgres version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#pg_version Project#pg_version}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.quota"></a>

```typescript
public readonly quota: ProjectQuota;
```

- *Type:* @rybickic/cdktf-provider-neon.project.ProjectQuota

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#quota Project#quota}

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

Deployment region: https://neon.tech/docs/introduction/regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#region_id Project#region_id}

---

##### `storePassword`<sup>Optional</sup> <a name="storePassword" id="@rybickic/cdktf-provider-neon.project.ProjectConfig.property.storePassword"></a>

```typescript
public readonly storePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not passwords are stored for roles in the Neon project.

Storing passwords facilitates access to Neon features that require authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#store_password Project#store_password}

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
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#autoscaling_limit_max_cu Project#autoscaling_limit_max_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#autoscaling_limit_min_cu Project#autoscaling_limit_min_cu}. |
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.suspendTimeoutSeconds">suspendTimeoutSeconds</a></code> | <code>number</code> | Duration of inactivity in seconds after which the compute endpoint is automatically suspended. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#autoscaling_limit_max_cu Project#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#autoscaling_limit_min_cu Project#autoscaling_limit_min_cu}.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#suspend_timeout_seconds Project#suspend_timeout_seconds}

---

### ProjectPermissionConfig <a name="ProjectPermissionConfig" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.Initializer"></a>

```typescript
import { projectPermission } from '@rybickic/cdktf-provider-neon'

const projectPermissionConfig: projectPermission.ProjectPermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.grantee">grantee</a></code> | <code>string</code> | Email of the user whom to grant project permission. |
| <code><a href="#@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.projectId">projectId</a></code> | <code>string</code> | Project ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

Email of the user whom to grant project permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission#grantee ProjectPermission#grantee}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.projectPermission.ProjectPermissionConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission#project_id ProjectPermission#project_id}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#active_time_seconds Project#active_time_seconds}

---

##### `computeTimeSeconds`<sup>Optional</sup> <a name="computeTimeSeconds" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.computeTimeSeconds"></a>

```typescript
public readonly computeTimeSeconds: number;
```

- *Type:* number

The total amount of CPU seconds allowed to be spent by the project's compute endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#compute_time_seconds Project#compute_time_seconds}

---

##### `dataTransferBytes`<sup>Optional</sup> <a name="dataTransferBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.dataTransferBytes"></a>

```typescript
public readonly dataTransferBytes: number;
```

- *Type:* number

Total amount of data transferred from all of a project's branches using the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#data_transfer_bytes Project#data_transfer_bytes}

---

##### `logicalSizeBytes`<sup>Optional</sup> <a name="logicalSizeBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.logicalSizeBytes"></a>

```typescript
public readonly logicalSizeBytes: number;
```

- *Type:* number

Limit on the logical size of every project's branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#logical_size_bytes Project#logical_size_bytes}

---

##### `writtenDataBytes`<sup>Optional</sup> <a name="writtenDataBytes" id="@rybickic/cdktf-provider-neon.project.ProjectQuota.property.writtenDataBytes"></a>

```typescript
public readonly writtenDataBytes: number;
```

- *Type:* number

Total amount of data written to all of a project's branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project#written_data_bytes Project#written_data_bytes}

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
| <code><a href="#@rybickic/cdktf-provider-neon.role.RoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role#id Role#id}. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role#branch_id Role#branch_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role#name Role#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role#project_id Role#project_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@rybickic/cdktf-provider-neon.role.RoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/role#id Role#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataNeonBranchEndpointsEndpointsList <a name="DataNeonBranchEndpointsEndpointsList" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.get"></a>

```typescript
public get(index: number): DataNeonBranchEndpointsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNeonBranchEndpointsEndpoints[];
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints[]

---


### DataNeonBranchEndpointsEndpointsOutputReference <a name="DataNeonBranchEndpointsEndpointsOutputReference" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer"></a>

```typescript
import { dataNeonBranchEndpoints } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.proxyHost">proxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `proxyHost`<sup>Required</sup> <a name="proxyHost" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.proxyHost"></a>

```typescript
public readonly proxyHost: string;
```

- *Type:* string

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNeonBranchEndpointsEndpoints;
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchEndpoints.DataNeonBranchEndpointsEndpoints

---


### DataNeonBranchesBranchesList <a name="DataNeonBranchesBranchesList" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

new dataNeonBranches.DataNeonBranchesBranchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.get"></a>

```typescript
public get(index: number): DataNeonBranchesBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNeonBranchesBranchesOutputReference <a name="DataNeonBranchesBranchesOutputReference" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer"></a>

```typescript
import { dataNeonBranches } from '@rybickic/cdktf-provider-neon'

new dataNeonBranches.DataNeonBranchesBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.logicalSize">logicalSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.internalValue">internalValue</a></code> | <code>@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranches</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalSize`<sup>Required</sup> <a name="logicalSize" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.logicalSize"></a>

```typescript
public readonly logicalSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNeonBranchesBranches;
```

- *Type:* @rybickic/cdktf-provider-neon.dataNeonBranches.DataNeonBranchesBranches

---


### DataNeonBranchRolesRolesList <a name="DataNeonBranchRolesRolesList" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchRoles.DataNeonBranchRolesRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.get"></a>

```typescript
public get(index: number): DataNeonBranchRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNeonBranchRolesRoles[];
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles[]

---


### DataNeonBranchRolesRolesOutputReference <a name="DataNeonBranchRolesRolesOutputReference" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer"></a>

```typescript
import { dataNeonBranchRoles } from '@rybickic/cdktf-provider-neon'

new dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protected`<sup>Required</sup> <a name="protected" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.protected"></a>

```typescript
public readonly protected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNeonBranchRolesRoles;
```

- *Type:* cdktf.IResolvable | @rybickic/cdktf-provider-neon.dataNeonBranchRoles.DataNeonBranchRolesRoles

---


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
| <code><a href="#@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
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

##### `id`<sup>Required</sup> <a name="id" id="@rybickic/cdktf-provider-neon.project.ProjectDefaultEndpointSettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
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




// https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#name Branch#name}
  */
  readonly name?: string;
  /**
  * ID of the branch to checkout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#parent_id Branch#parent_id}
  */
  readonly parentId?: string;
  /**
  * Log Sequence Number (LSN) horizon for the data to be present in the new branch.
  * See details: https://neon.tech/docs/reference/glossary/#lsn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#parent_lsn Branch#parent_lsn}
  */
  readonly parentLsn?: string;
  /**
  * Timestamp horizon for the data to be present in the new branch. 
  * **Note**: it's defined as Unix epoch.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#parent_timestamp Branch#parent_timestamp}
  */
  readonly parentTimestamp?: number;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#project_id Branch#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch neon_branch}
*/
export class Branch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Branch to import
  * @param importFromId The id of the existing Branch that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Branch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/branch neon_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchConfig
  */
  public constructor(scope: Construct, id: string, config: BranchConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_branch',
      terraformGeneratorMetadata: {
        providerName: 'neon',
        providerVersion: '0.2.5',
        providerVersionConstraint: '~> 0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parentId = config.parentId;
    this._parentLsn = config.parentLsn;
    this._parentTimestamp = config.parentTimestamp;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_size - computed: true, optional: false, required: false
  public get logicalSize() {
    return this.getNumberAttribute('logical_size');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // parent_lsn - computed: true, optional: true, required: false
  private _parentLsn?: string; 
  public get parentLsn() {
    return this.getStringAttribute('parent_lsn');
  }
  public set parentLsn(value: string) {
    this._parentLsn = value;
  }
  public resetParentLsn() {
    this._parentLsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentLsnInput() {
    return this._parentLsn;
  }

  // parent_timestamp - computed: true, optional: true, required: false
  private _parentTimestamp?: number; 
  public get parentTimestamp() {
    return this.getNumberAttribute('parent_timestamp');
  }
  public set parentTimestamp(value: number) {
    this._parentTimestamp = value;
  }
  public resetParentTimestamp() {
    this._parentTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTimestampInput() {
    return this._parentTimestamp;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      parent_lsn: cdktf.stringToTerraform(this._parentLsn),
      parent_timestamp: cdktf.numberToTerraform(this._parentTimestamp),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}

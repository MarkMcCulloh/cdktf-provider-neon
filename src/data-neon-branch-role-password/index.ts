// https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNeonBranchRolePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branch ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#branch_id DataNeonBranchRolePassword#branch_id}
  */
  readonly branchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#id DataNeonBranchRolePassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#project_id DataNeonBranchRolePassword#project_id}
  */
  readonly projectId: string;
  /**
  * Role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#role_name DataNeonBranchRolePassword#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password neon_branch_role_password}
*/
export class DataNeonBranchRolePassword extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_branch_role_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNeonBranchRolePassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNeonBranchRolePassword to import
  * @param importFromId The id of the existing DataNeonBranchRolePassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNeonBranchRolePassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon_branch_role_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_role_password neon_branch_role_password} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNeonBranchRolePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: DataNeonBranchRolePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_branch_role_password',
      terraformGeneratorMetadata: {
        providerName: 'neon',
        providerVersion: '0.5.0',
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
    this._branchId = config.branchId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_id - computed: false, optional: false, required: true
  private _branchId?: string; 
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }
  public set branchId(value: string) {
    this._branchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchIdInput() {
    return this._branchId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_id: cdktf.stringToTerraform(this._branchId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_id: {
        value: cdktf.stringToHclTerraform(this._branchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

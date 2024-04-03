// https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email of the user whom to grant project permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission#grantee ProjectPermission#grantee}
  */
  readonly grantee: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission#project_id ProjectPermission#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission neon_project_permission}
*/
export class ProjectPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_project_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectPermission to import
  * @param importFromId The id of the existing ProjectPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon_project_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/resources/project_permission neon_project_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_project_permission',
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
    this._grantee = config.grantee;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grantee - computed: false, optional: false, required: true
  private _grantee?: string; 
  public get grantee() {
    return this.getStringAttribute('grantee');
  }
  public set grantee(value: string) {
    this._grantee = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      grantee: cdktf.stringToTerraform(this._grantee),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grantee: {
        value: cdktf.stringToHclTerraform(this._grantee),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

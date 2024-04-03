// https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNeonBranchRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branch ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#branch_id DataNeonBranchRoles#branch_id}
  */
  readonly branchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#id DataNeonBranchRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#project_id DataNeonBranchRoles#project_id}
  */
  readonly projectId: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#roles DataNeonBranchRoles#roles}
  */
  readonly roles?: DataNeonBranchRolesRoles[] | cdktf.IResolvable;
}
export interface DataNeonBranchRolesRoles {
}

export function dataNeonBranchRolesRolesToTerraform(struct?: DataNeonBranchRolesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNeonBranchRolesRolesToHclTerraform(struct?: DataNeonBranchRolesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNeonBranchRolesRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNeonBranchRolesRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNeonBranchRolesRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
}

export class DataNeonBranchRolesRolesList extends cdktf.ComplexList {
  public internalValue? : DataNeonBranchRolesRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNeonBranchRolesRolesOutputReference {
    return new DataNeonBranchRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles neon_branch_roles}
*/
export class DataNeonBranchRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_branch_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNeonBranchRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNeonBranchRoles to import
  * @param importFromId The id of the existing DataNeonBranchRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNeonBranchRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon_branch_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_roles neon_branch_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNeonBranchRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNeonBranchRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_branch_roles',
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
    this._roles.internalValue = config.roles;
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

  // roles - computed: false, optional: true, required: false
  private _roles = new DataNeonBranchRolesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataNeonBranchRolesRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_id: cdktf.stringToTerraform(this._branchId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      roles: cdktf.listMapper(dataNeonBranchRolesRolesToTerraform, true)(this._roles.internalValue),
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
      roles: {
        value: cdktf.listMapperHcl(dataNeonBranchRolesRolesToHclTerraform, true)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNeonBranchRolesRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

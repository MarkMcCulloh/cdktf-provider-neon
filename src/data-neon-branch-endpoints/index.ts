// https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNeonBranchEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branch ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#branch_id DataNeonBranchEndpoints#branch_id}
  */
  readonly branchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#id DataNeonBranchEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#project_id DataNeonBranchEndpoints#project_id}
  */
  readonly projectId: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#endpoints DataNeonBranchEndpoints#endpoints}
  */
  readonly endpoints?: DataNeonBranchEndpointsEndpoints[] | cdktf.IResolvable;
}
export interface DataNeonBranchEndpointsEndpoints {
}

export function dataNeonBranchEndpointsEndpointsToTerraform(struct?: DataNeonBranchEndpointsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNeonBranchEndpointsEndpointsToHclTerraform(struct?: DataNeonBranchEndpointsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNeonBranchEndpointsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNeonBranchEndpointsEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNeonBranchEndpointsEndpoints | cdktf.IResolvable | undefined) {
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // proxy_host - computed: true, optional: false, required: false
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNeonBranchEndpointsEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataNeonBranchEndpointsEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataNeonBranchEndpointsEndpointsOutputReference {
    return new DataNeonBranchEndpointsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints neon_branch_endpoints}
*/
export class DataNeonBranchEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_branch_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNeonBranchEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNeonBranchEndpoints to import
  * @param importFromId The id of the existing DataNeonBranchEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNeonBranchEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon_branch_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.5.0/docs/data-sources/branch_endpoints neon_branch_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNeonBranchEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNeonBranchEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_branch_endpoints',
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
    this._endpoints.internalValue = config.endpoints;
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DataNeonBranchEndpointsEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataNeonBranchEndpointsEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_id: cdktf.stringToTerraform(this._branchId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      endpoints: cdktf.listMapper(dataNeonBranchEndpointsEndpointsToTerraform, true)(this._endpoints.internalValue),
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
      endpoints: {
        value: cdktf.listMapperHcl(dataNeonBranchEndpointsEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNeonBranchEndpointsEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

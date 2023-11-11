// https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provisioner The Neon compute provisioner.
  * Specify the k8s-neonvm provisioner to create a compute endpoint that supports Autoscaling.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#compute_provisioner Project#compute_provisioner}
  */
  readonly computeProvisioner?: string;
  /**
  * The number of seconds to retain the point-in-time restore (PITR) backup history for this project. 
  * Default: 7 days, see https://neon.tech/docs/reference/glossary#point-in-time-restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#history_retention_seconds Project#history_retention_seconds}
  */
  readonly historyRetentionSeconds?: number;
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#name Project#name}
  */
  readonly name?: string;
  /**
  * Postgres version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#pg_version Project#pg_version}
  */
  readonly pgVersion?: number;
  /**
  * AWS Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#region_id Project#region_id}
  */
  readonly regionId?: string;
  /**
  * Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#store_password Project#store_password}
  */
  readonly storePassword?: boolean | cdktf.IResolvable;
  /**
  * branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#branch Project#branch}
  */
  readonly branch?: ProjectBranch;
  /**
  * default_endpoint_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#default_endpoint_settings Project#default_endpoint_settings}
  */
  readonly defaultEndpointSettings?: ProjectDefaultEndpointSettings;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#quota Project#quota}
  */
  readonly quota?: ProjectQuota;
}
export interface ProjectBranch {
  /**
  * The database name. If not specified, the default database name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#database_name Project#database_name}
  */
  readonly databaseName?: string;
  /**
  * The branch name. If not specified, the default branch name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#name Project#name}
  */
  readonly name?: string;
  /**
  * The role name. If not specified, the default role name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#role_name Project#role_name}
  */
  readonly roleName?: string;
}

export function projectBranchToTerraform(struct?: ProjectBranchOutputReference | ProjectBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}

export class ProjectBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectBranch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectBranch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._roleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._roleName = value.roleName;
    }
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface ProjectDefaultEndpointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#autoscaling_limit_max_cu Project#autoscaling_limit_max_cu}
  */
  readonly autoscalingLimitMaxCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#autoscaling_limit_min_cu Project#autoscaling_limit_min_cu}
  */
  readonly autoscalingLimitMinCu?: number;
  /**
  * Duration of inactivity in seconds after which the compute endpoint is automatically suspended. 
  * The value 0 means use the global default.
  * The value -1 means never suspend. The default value is 300 seconds (5 minutes).
  * The maximum value is 604800 seconds (1 week)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#suspend_timeout_seconds Project#suspend_timeout_seconds}
  */
  readonly suspendTimeoutSeconds?: number;
}

export function projectDefaultEndpointSettingsToTerraform(struct?: ProjectDefaultEndpointSettingsOutputReference | ProjectDefaultEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_limit_max_cu: cdktf.numberToTerraform(struct!.autoscalingLimitMaxCu),
    autoscaling_limit_min_cu: cdktf.numberToTerraform(struct!.autoscalingLimitMinCu),
    suspend_timeout_seconds: cdktf.numberToTerraform(struct!.suspendTimeoutSeconds),
  }
}

export class ProjectDefaultEndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectDefaultEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingLimitMaxCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimitMaxCu = this._autoscalingLimitMaxCu;
    }
    if (this._autoscalingLimitMinCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimitMinCu = this._autoscalingLimitMinCu;
    }
    if (this._suspendTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendTimeoutSeconds = this._suspendTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectDefaultEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingLimitMaxCu = undefined;
      this._autoscalingLimitMinCu = undefined;
      this._suspendTimeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingLimitMaxCu = value.autoscalingLimitMaxCu;
      this._autoscalingLimitMinCu = value.autoscalingLimitMinCu;
      this._suspendTimeoutSeconds = value.suspendTimeoutSeconds;
    }
  }

  // autoscaling_limit_max_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMaxCu?: number; 
  public get autoscalingLimitMaxCu() {
    return this.getNumberAttribute('autoscaling_limit_max_cu');
  }
  public set autoscalingLimitMaxCu(value: number) {
    this._autoscalingLimitMaxCu = value;
  }
  public resetAutoscalingLimitMaxCu() {
    this._autoscalingLimitMaxCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMaxCuInput() {
    return this._autoscalingLimitMaxCu;
  }

  // autoscaling_limit_min_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMinCu?: number; 
  public get autoscalingLimitMinCu() {
    return this.getNumberAttribute('autoscaling_limit_min_cu');
  }
  public set autoscalingLimitMinCu(value: number) {
    this._autoscalingLimitMinCu = value;
  }
  public resetAutoscalingLimitMinCu() {
    this._autoscalingLimitMinCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMinCuInput() {
    return this._autoscalingLimitMinCu;
  }

  // suspend_timeout_seconds - computed: true, optional: true, required: false
  private _suspendTimeoutSeconds?: number; 
  public get suspendTimeoutSeconds() {
    return this.getNumberAttribute('suspend_timeout_seconds');
  }
  public set suspendTimeoutSeconds(value: number) {
    this._suspendTimeoutSeconds = value;
  }
  public resetSuspendTimeoutSeconds() {
    this._suspendTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTimeoutSecondsInput() {
    return this._suspendTimeoutSeconds;
  }
}
export interface ProjectQuota {
  /**
  * The total amount of wall-clock time allowed to be spent by the project's compute endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#active_time_seconds Project#active_time_seconds}
  */
  readonly activeTimeSeconds?: number;
  /**
  * The total amount of CPU seconds allowed to be spent by the project's compute endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#compute_time_seconds Project#compute_time_seconds}
  */
  readonly computeTimeSeconds?: number;
  /**
  * Total amount of data transferred from all of a project's branches using the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#data_transfer_bytes Project#data_transfer_bytes}
  */
  readonly dataTransferBytes?: number;
  /**
  * Limit on the logical size of every project's branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#logical_size_bytes Project#logical_size_bytes}
  */
  readonly logicalSizeBytes?: number;
  /**
  * Total amount of data written to all of a project's branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#written_data_bytes Project#written_data_bytes}
  */
  readonly writtenDataBytes?: number;
}

export function projectQuotaToTerraform(struct?: ProjectQuotaOutputReference | ProjectQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time_seconds: cdktf.numberToTerraform(struct!.activeTimeSeconds),
    compute_time_seconds: cdktf.numberToTerraform(struct!.computeTimeSeconds),
    data_transfer_bytes: cdktf.numberToTerraform(struct!.dataTransferBytes),
    logical_size_bytes: cdktf.numberToTerraform(struct!.logicalSizeBytes),
    written_data_bytes: cdktf.numberToTerraform(struct!.writtenDataBytes),
  }
}

export class ProjectQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeSeconds = this._activeTimeSeconds;
    }
    if (this._computeTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeTimeSeconds = this._computeTimeSeconds;
    }
    if (this._dataTransferBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferBytes = this._dataTransferBytes;
    }
    if (this._logicalSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalSizeBytes = this._logicalSizeBytes;
    }
    if (this._writtenDataBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.writtenDataBytes = this._writtenDataBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTimeSeconds = undefined;
      this._computeTimeSeconds = undefined;
      this._dataTransferBytes = undefined;
      this._logicalSizeBytes = undefined;
      this._writtenDataBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTimeSeconds = value.activeTimeSeconds;
      this._computeTimeSeconds = value.computeTimeSeconds;
      this._dataTransferBytes = value.dataTransferBytes;
      this._logicalSizeBytes = value.logicalSizeBytes;
      this._writtenDataBytes = value.writtenDataBytes;
    }
  }

  // active_time_seconds - computed: true, optional: true, required: false
  private _activeTimeSeconds?: number; 
  public get activeTimeSeconds() {
    return this.getNumberAttribute('active_time_seconds');
  }
  public set activeTimeSeconds(value: number) {
    this._activeTimeSeconds = value;
  }
  public resetActiveTimeSeconds() {
    this._activeTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeSecondsInput() {
    return this._activeTimeSeconds;
  }

  // compute_time_seconds - computed: true, optional: true, required: false
  private _computeTimeSeconds?: number; 
  public get computeTimeSeconds() {
    return this.getNumberAttribute('compute_time_seconds');
  }
  public set computeTimeSeconds(value: number) {
    this._computeTimeSeconds = value;
  }
  public resetComputeTimeSeconds() {
    this._computeTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTimeSecondsInput() {
    return this._computeTimeSeconds;
  }

  // data_transfer_bytes - computed: true, optional: true, required: false
  private _dataTransferBytes?: number; 
  public get dataTransferBytes() {
    return this.getNumberAttribute('data_transfer_bytes');
  }
  public set dataTransferBytes(value: number) {
    this._dataTransferBytes = value;
  }
  public resetDataTransferBytes() {
    this._dataTransferBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferBytesInput() {
    return this._dataTransferBytes;
  }

  // logical_size_bytes - computed: true, optional: true, required: false
  private _logicalSizeBytes?: number; 
  public get logicalSizeBytes() {
    return this.getNumberAttribute('logical_size_bytes');
  }
  public set logicalSizeBytes(value: number) {
    this._logicalSizeBytes = value;
  }
  public resetLogicalSizeBytes() {
    this._logicalSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSizeBytesInput() {
    return this._logicalSizeBytes;
  }

  // written_data_bytes - computed: true, optional: true, required: false
  private _writtenDataBytes?: number; 
  public get writtenDataBytes() {
    return this.getNumberAttribute('written_data_bytes');
  }
  public set writtenDataBytes(value: number) {
    this._writtenDataBytes = value;
  }
  public resetWrittenDataBytes() {
    this._writtenDataBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writtenDataBytesInput() {
    return this._writtenDataBytes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project neon_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs/resources/project neon_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'neon_project',
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
    this._computeProvisioner = config.computeProvisioner;
    this._historyRetentionSeconds = config.historyRetentionSeconds;
    this._name = config.name;
    this._pgVersion = config.pgVersion;
    this._regionId = config.regionId;
    this._storePassword = config.storePassword;
    this._branch.internalValue = config.branch;
    this._defaultEndpointSettings.internalValue = config.defaultEndpointSettings;
    this._quota.internalValue = config.quota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_provisioner - computed: true, optional: true, required: false
  private _computeProvisioner?: string; 
  public get computeProvisioner() {
    return this.getStringAttribute('compute_provisioner');
  }
  public set computeProvisioner(value: string) {
    this._computeProvisioner = value;
  }
  public resetComputeProvisioner() {
    this._computeProvisioner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProvisionerInput() {
    return this._computeProvisioner;
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_password - computed: true, optional: false, required: false
  public get databasePassword() {
    return this.getStringAttribute('database_password');
  }

  // database_user - computed: true, optional: false, required: false
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }

  // default_branch_id - computed: true, optional: false, required: false
  public get defaultBranchId() {
    return this.getStringAttribute('default_branch_id');
  }

  // history_retention_seconds - computed: false, optional: true, required: false
  private _historyRetentionSeconds?: number; 
  public get historyRetentionSeconds() {
    return this.getNumberAttribute('history_retention_seconds');
  }
  public set historyRetentionSeconds(value: number) {
    this._historyRetentionSeconds = value;
  }
  public resetHistoryRetentionSeconds() {
    this._historyRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyRetentionSecondsInput() {
    return this._historyRetentionSeconds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pg_version - computed: true, optional: true, required: false
  private _pgVersion?: number; 
  public get pgVersion() {
    return this.getNumberAttribute('pg_version');
  }
  public set pgVersion(value: number) {
    this._pgVersion = value;
  }
  public resetPgVersion() {
    this._pgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionInput() {
    return this._pgVersion;
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // store_password - computed: false, optional: true, required: false
  private _storePassword?: boolean | cdktf.IResolvable; 
  public get storePassword() {
    return this.getBooleanAttribute('store_password');
  }
  public set storePassword(value: boolean | cdktf.IResolvable) {
    this._storePassword = value;
  }
  public resetStorePassword() {
    this._storePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storePasswordInput() {
    return this._storePassword;
  }

  // branch - computed: false, optional: true, required: false
  private _branch = new ProjectBranchOutputReference(this, "branch");
  public get branch() {
    return this._branch;
  }
  public putBranch(value: ProjectBranch) {
    this._branch.internalValue = value;
  }
  public resetBranch() {
    this._branch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch.internalValue;
  }

  // default_endpoint_settings - computed: false, optional: true, required: false
  private _defaultEndpointSettings = new ProjectDefaultEndpointSettingsOutputReference(this, "default_endpoint_settings");
  public get defaultEndpointSettings() {
    return this._defaultEndpointSettings;
  }
  public putDefaultEndpointSettings(value: ProjectDefaultEndpointSettings) {
    this._defaultEndpointSettings.internalValue = value;
  }
  public resetDefaultEndpointSettings() {
    this._defaultEndpointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointSettingsInput() {
    return this._defaultEndpointSettings.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new ProjectQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: ProjectQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_provisioner: cdktf.stringToTerraform(this._computeProvisioner),
      history_retention_seconds: cdktf.numberToTerraform(this._historyRetentionSeconds),
      name: cdktf.stringToTerraform(this._name),
      pg_version: cdktf.numberToTerraform(this._pgVersion),
      region_id: cdktf.stringToTerraform(this._regionId),
      store_password: cdktf.booleanToTerraform(this._storePassword),
      branch: projectBranchToTerraform(this._branch.internalValue),
      default_endpoint_settings: projectDefaultEndpointSettingsToTerraform(this._defaultEndpointSettings.internalValue),
      quota: projectQuotaToTerraform(this._quota.internalValue),
    };
  }
}

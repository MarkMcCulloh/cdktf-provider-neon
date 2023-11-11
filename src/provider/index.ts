// https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NeonProviderConfig {
  /**
  * API access key. Default is read from the environment variable `NEON_API_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs#api_key NeonProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs#alias NeonProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs neon}
*/
export class NeonProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NeonProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NeonProvider to import
  * @param importFromId The id of the existing NeonProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NeonProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.2.5/docs neon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NeonProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NeonProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'neon',
      terraformGeneratorMetadata: {
        providerName: 'neon',
        providerVersion: '0.2.5',
        providerVersionConstraint: '~> 0.2'
      },
      terraformProviderSource: 'kislerdm/neon'
    });
    this._apiKey = config.apiKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}

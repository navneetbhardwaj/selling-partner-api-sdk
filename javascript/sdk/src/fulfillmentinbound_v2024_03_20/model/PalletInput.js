/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Dimensions } from './Dimensions.js'
import { Stackability } from './Stackability.js'
import { Weight } from './Weight.js'

/**
 * The PalletInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/PalletInput
 * @version 2024-03-20
 */
export class PalletInput {
  /**
   * Constructs a new <code>PalletInput</code>.
   * Contains input information about a pallet to be used in the inbound plan.
   * @alias module:fulfillmentinbound_v2024_03_20/model/PalletInput
   * @class
   * @param quantity {Number} The number of containers where all other properties like weight or dimensions are identical.
   */
  constructor (quantity) {
    this.quantity = quantity
  }

  /**
   * Constructs a <code>PalletInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/PalletInput} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/PalletInput} The populated <code>PalletInput</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      switch (typeof data) {
        case 'string':
          obj = String(data)
          break
        case 'number':
          obj = Number(data)
          break
        case 'boolean':
          obj = Boolean(data)
          break
      }
      obj = obj || new PalletInput()
      if (data.hasOwnProperty('dimensions')) { obj.dimensions = Dimensions.constructFromObject(data.dimensions) }
      if (data.hasOwnProperty('quantity')) { obj.quantity = ApiClient.convertToType(data.quantity, 'Number') }
      if (data.hasOwnProperty('stackability')) { obj.stackability = Stackability.constructFromObject(data.stackability) }
      if (data.hasOwnProperty('weight')) { obj.weight = Weight.constructFromObject(data.weight) }
    }
    return obj
  }
}

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/Dimensions} dimensions
 */
PalletInput.prototype.dimensions = undefined

/**
 * The number of containers where all other properties like weight or dimensions are identical.
 * @member {Number} quantity
 */
PalletInput.prototype.quantity = undefined

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/Stackability} stackability
 */
PalletInput.prototype.stackability = undefined

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/Weight} weight
 */
PalletInput.prototype.weight = undefined

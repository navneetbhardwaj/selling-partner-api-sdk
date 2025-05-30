/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Error } from './Error.js'

/**
 * The AddInventoryResponse model module.
 * @module fbainventory_v1/model/AddInventoryResponse
 * @version v1
 */
export class AddInventoryResponse {
  /**
   * Constructs a new <code>AddInventoryResponse</code>.
   * The response schema for the AddInventory operation.
   * @alias module:fbainventory_v1/model/AddInventoryResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>AddInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbainventory_v1/model/AddInventoryResponse} obj Optional instance to populate.
   * @return {module:fbainventory_v1/model/AddInventoryResponse} The populated <code>AddInventoryResponse</code> instance.
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
      obj = obj || new AddInventoryResponse()
      if (data.hasOwnProperty('errors')) { obj.errors = ApiClient.convertToType(data.errors, [Error]) }
    }
    return obj
  }
}

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:fbainventory_v1/model/Error>} errors
 */
AddInventoryResponse.prototype.errors = undefined

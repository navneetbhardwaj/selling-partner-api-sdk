/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
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

/**
 * The ItemQuantity model module.
 * @module vendordfinventory_v1/model/ItemQuantity
 * @version v1
 */
export class ItemQuantity {
  /**
   * Constructs a new <code>ItemQuantity</code>.
   * Details of item quantity.
   * @alias module:vendordfinventory_v1/model/ItemQuantity
   * @class
   * @param unitOfMeasure {String} Unit of measure for the available quantity.
   */
  constructor (unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure
  }

  /**
   * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfinventory_v1/model/ItemQuantity} obj Optional instance to populate.
   * @return {module:vendordfinventory_v1/model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
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
      obj = obj || new ItemQuantity()
      if (data.hasOwnProperty('amount')) { obj.amount = ApiClient.convertToType(data.amount, 'Number') }
      if (data.hasOwnProperty('unitOfMeasure')) { obj.unitOfMeasure = ApiClient.convertToType(data.unitOfMeasure, 'String') }
    }
    return obj
  }
}

/**
 * Quantity of units available for a specific item.
 * @member {Number} amount
 */
ItemQuantity.prototype.amount = undefined

/**
 * Unit of measure for the available quantity.
 * @member {String} unitOfMeasure
 */
ItemQuantity.prototype.unitOfMeasure = undefined

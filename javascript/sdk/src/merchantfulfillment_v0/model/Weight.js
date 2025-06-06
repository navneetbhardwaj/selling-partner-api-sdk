/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { UnitOfWeight } from './UnitOfWeight.js'

/**
 * The Weight model module.
 * @module merchantfulfillment_v0/model/Weight
 * @version v0
 */
export class Weight {
  /**
   * Constructs a new <code>Weight</code>.
   * The weight.
   * @alias module:merchantfulfillment_v0/model/Weight
   * @class
   * @param value {Number} The weight value.
   * @param unit {module:merchantfulfillment_v0/model/UnitOfWeight}
   */
  constructor (value, unit) {
    this.value = value
    this.unit = unit
  }

  /**
   * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/Weight} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/Weight} The populated <code>Weight</code> instance.
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
      obj = obj || new Weight()
      if (data.hasOwnProperty('Value')) { obj.value = ApiClient.convertToType(data.Value, 'Number') }
      if (data.hasOwnProperty('Unit')) { obj.unit = UnitOfWeight.constructFromObject(data.Unit) }
    }
    return obj
  }
}

/**
 * The weight value.
 * @member {Number} value
 */
Weight.prototype.value = undefined

/**
 * @member {module:merchantfulfillment_v0/model/UnitOfWeight} unit
 */
Weight.prototype.unit = undefined

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

/**
 * The LiquidVolume model module.
 * @module merchantfulfillment_v0/model/LiquidVolume
 * @version v0
 */
export class LiquidVolume {
  /**
   * Constructs a new <code>LiquidVolume</code>.
   * Liquid volume.
   * @alias module:merchantfulfillment_v0/model/LiquidVolume
   * @class
   * @param unit {module:merchantfulfillment_v0/model/LiquidVolume.UnitEnum} The unit of measurement.
   * @param value {Number} The measurement value.
   */
  constructor (unit, value) {
    this.unit = unit
    this.value = value
  }

  /**
   * Constructs a <code>LiquidVolume</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/LiquidVolume} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/LiquidVolume} The populated <code>LiquidVolume</code> instance.
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
      obj = obj || new LiquidVolume()
      if (data.hasOwnProperty('Unit')) { obj.unit = ApiClient.convertToType(data.Unit, 'String') }
      if (data.hasOwnProperty('Value')) { obj.value = ApiClient.convertToType(data.Value, 'Number') }
    }
    return obj
  }
}

/**
 * Allowed values for the <code>Unit</code> property.
 * @enum {String}
 * @readonly
 */
LiquidVolume.UnitEnum = {

  /**
     * value: "ML"
     * @const
     */
  ML: 'ML',

  /**
     * value: "L"
     * @const
     */
  L: 'L',

  /**
     * value: "FL_OZ"
     * @const
     */
  FL_OZ: 'FL_OZ',

  /**
     * value: "GAL"
     * @const
     */
  GAL: 'GAL',

  /**
     * value: "PT"
     * @const
     */
  PT: 'PT',

  /**
     * value: "QT"
     * @const
     */
  QT: 'QT',

  /**
     * value: "C"
     * @const
     */
  C: 'C'
}

/**
 * The unit of measurement.
 * @member {module:merchantfulfillment_v0/model/LiquidVolume.UnitEnum} unit
 */
LiquidVolume.prototype.unit = undefined

/**
 * The measurement value.
 * @member {Number} value
 */
LiquidVolume.prototype.value = undefined

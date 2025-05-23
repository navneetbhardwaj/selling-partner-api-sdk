/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
 * The Duration model module.
 * @module vendorshipments_v1/model/Duration
 * @version v1
 */
export class Duration {
  /**
   * Constructs a new <code>Duration</code>.
   * Duration after manufacturing date during which the product is valid for consumption.
   * @alias module:vendorshipments_v1/model/Duration
   * @class
   * @param durationUnit {module:vendorshipments_v1/model/Duration.DurationUnitEnum} Unit for duration.
   * @param durationValue {Number} Value for the duration in terms of the durationUnit.
   */
  constructor (durationUnit, durationValue) {
    this.durationUnit = durationUnit
    this.durationValue = durationValue
  }

  /**
   * Constructs a <code>Duration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/Duration} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/Duration} The populated <code>Duration</code> instance.
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
      obj = obj || new Duration()
      if (data.hasOwnProperty('durationUnit')) { obj.durationUnit = ApiClient.convertToType(data.durationUnit, 'String') }
      if (data.hasOwnProperty('durationValue')) { obj.durationValue = ApiClient.convertToType(data.durationValue, 'Number') }
    }
    return obj
  }
}

/**
 * Allowed values for the <code>durationUnit</code> property.
 * @enum {String}
 * @readonly
 */
Duration.DurationUnitEnum = {

  /**
     * value: "Days"
     * @const
     */
  Days: 'Days',

  /**
     * value: "Months"
     * @const
     */
  Months: 'Months'
}

/**
 * Unit for duration.
 * @member {module:vendorshipments_v1/model/Duration.DurationUnitEnum} durationUnit
 */
Duration.prototype.durationUnit = undefined

/**
 * Value for the duration in terms of the durationUnit.
 * @member {Number} durationValue
 */
Duration.prototype.durationValue = undefined

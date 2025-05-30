/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import { MoneyType } from './MoneyType.js'

/**
 * The Points model module.
 * @module pricing_v0/model/Points
 * @version v0
 */
export class Points {
  /**
   * Constructs a new <code>Points</code>.
   * The number of Amazon Points offered with the purchase of an item, and their monetary value.
   * @alias module:pricing_v0/model/Points
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>Points</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/Points} obj Optional instance to populate.
   * @return {module:pricing_v0/model/Points} The populated <code>Points</code> instance.
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
      obj = obj || new Points()
      if (data.hasOwnProperty('PointsNumber')) { obj.pointsNumber = ApiClient.convertToType(data.PointsNumber, 'Number') }
      if (data.hasOwnProperty('PointsMonetaryValue')) { obj.pointsMonetaryValue = MoneyType.constructFromObject(data.PointsMonetaryValue) }
    }
    return obj
  }
}

/**
 * The number of points.
 * @member {Number} pointsNumber
 */
Points.prototype.pointsNumber = undefined

/**
 * @member {module:pricing_v0/model/MoneyType} pointsMonetaryValue
 */
Points.prototype.pointsMonetaryValue = undefined

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

/**
 * The MoneyType model module.
 * @module pricing_v0/model/MoneyType
 * @version v0
 */
export class MoneyType {
  /**
   * Constructs a new <code>MoneyType</code>.
   * Currency type and monetary value. Schema for demonstrating pricing info.
   * @alias module:pricing_v0/model/MoneyType
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>MoneyType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/MoneyType} obj Optional instance to populate.
   * @return {module:pricing_v0/model/MoneyType} The populated <code>MoneyType</code> instance.
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
      obj = obj || new MoneyType()
      if (data.hasOwnProperty('CurrencyCode')) { obj.currencyCode = ApiClient.convertToType(data.CurrencyCode, 'String') }
      if (data.hasOwnProperty('Amount')) { obj.amount = ApiClient.convertToType(data.Amount, 'Number') }
    }
    return obj
  }
}

/**
 * The currency code in ISO 4217 format.
 * @member {String} currencyCode
 */
MoneyType.prototype.currencyCode = undefined

/**
 * The monetary value.
 * @member {Number} amount
 */
MoneyType.prototype.amount = undefined

/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
 * The Money model module.
 * @module invoicing_v0/model/Money
 * @version v0
 */
export class Money {
  /**
   * Constructs a new <code>Money</code>.
   * The currency type and amount.
   * @alias module:invoicing_v0/model/Money
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoicing_v0/model/Money} obj Optional instance to populate.
   * @return {module:invoicing_v0/model/Money} The populated <code>Money</code> instance.
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
      obj = obj || new Money()
      if (data.hasOwnProperty('CurrencyCode')) { obj.currencyCode = ApiClient.convertToType(data.CurrencyCode, 'String') }
      if (data.hasOwnProperty('Amount')) { obj.amount = ApiClient.convertToType(data.Amount, 'String') }
    }
    return obj
  }
}

/**
 * Three-digit currency code in ISO 4217 format.
 * @member {String} currencyCode
 */
Money.prototype.currencyCode = undefined

/**
 * The currency amount.
 * @member {String} amount
 */
Money.prototype.amount = undefined

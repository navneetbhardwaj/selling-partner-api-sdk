/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import { Currency } from './Currency.js'

/**
 * The ChargeInstrument model module.
 * @module finances_v0/model/ChargeInstrument
 * @version v0
 */
export class ChargeInstrument {
  /**
   * Constructs a new <code>ChargeInstrument</code>.
   * A payment instrument.
   * @alias module:finances_v0/model/ChargeInstrument
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ChargeInstrument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_v0/model/ChargeInstrument} obj Optional instance to populate.
   * @return {module:finances_v0/model/ChargeInstrument} The populated <code>ChargeInstrument</code> instance.
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
      obj = obj || new ChargeInstrument()
      if (data.hasOwnProperty('Description')) { obj.description = ApiClient.convertToType(data.Description, 'String') }
      if (data.hasOwnProperty('Tail')) { obj.tail = ApiClient.convertToType(data.Tail, 'String') }
      if (data.hasOwnProperty('Amount')) { obj.amount = Currency.constructFromObject(data.Amount) }
    }
    return obj
  }
}

/**
 * A short description of the charge instrument.
 * @member {String} description
 */
ChargeInstrument.prototype.description = undefined

/**
 * The account tail (trailing digits) of the charge instrument.
 * @member {String} tail
 */
ChargeInstrument.prototype.tail = undefined

/**
 * @member {module:finances_v0/model/Currency} amount
 */
ChargeInstrument.prototype.amount = undefined

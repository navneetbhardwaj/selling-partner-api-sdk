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
 * The ValueAddedServiceChargeEvent model module.
 * @module finances_v0/model/ValueAddedServiceChargeEvent
 * @version v0
 */
export class ValueAddedServiceChargeEvent {
  /**
   * Constructs a new <code>ValueAddedServiceChargeEvent</code>.
   * An event related to a value added service charge.
   * @alias module:finances_v0/model/ValueAddedServiceChargeEvent
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ValueAddedServiceChargeEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_v0/model/ValueAddedServiceChargeEvent} obj Optional instance to populate.
   * @return {module:finances_v0/model/ValueAddedServiceChargeEvent} The populated <code>ValueAddedServiceChargeEvent</code> instance.
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
      obj = obj || new ValueAddedServiceChargeEvent()
      if (data.hasOwnProperty('TransactionType')) { obj.transactionType = ApiClient.convertToType(data.TransactionType, 'String') }
      if (data.hasOwnProperty('PostedDate')) { obj.postedDate = ApiClient.convertToType(data.PostedDate, 'Date') }
      if (data.hasOwnProperty('Description')) { obj.description = ApiClient.convertToType(data.Description, 'String') }
      if (data.hasOwnProperty('TransactionAmount')) { obj.transactionAmount = Currency.constructFromObject(data.TransactionAmount) }
    }
    return obj
  }
}

/**
 * Indicates the type of transaction.  Example: 'Other Support Service fees'
 * @member {String} transactionType
 */
ValueAddedServiceChargeEvent.prototype.transactionType = undefined

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} postedDate
 */
ValueAddedServiceChargeEvent.prototype.postedDate = undefined

/**
 * A short description of the service charge event.
 * @member {String} description
 */
ValueAddedServiceChargeEvent.prototype.description = undefined

/**
 * @member {module:finances_v0/model/Currency} transactionAmount
 */
ValueAddedServiceChargeEvent.prototype.transactionAmount = undefined

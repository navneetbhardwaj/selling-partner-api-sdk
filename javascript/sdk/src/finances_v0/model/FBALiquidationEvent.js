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
 * The FBALiquidationEvent model module.
 * @module finances_v0/model/FBALiquidationEvent
 * @version v0
 */
export class FBALiquidationEvent {
  /**
   * Constructs a new <code>FBALiquidationEvent</code>.
   * A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace.
   * @alias module:finances_v0/model/FBALiquidationEvent
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>FBALiquidationEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_v0/model/FBALiquidationEvent} obj Optional instance to populate.
   * @return {module:finances_v0/model/FBALiquidationEvent} The populated <code>FBALiquidationEvent</code> instance.
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
      obj = obj || new FBALiquidationEvent()
      if (data.hasOwnProperty('PostedDate')) { obj.postedDate = ApiClient.convertToType(data.PostedDate, 'Date') }
      if (data.hasOwnProperty('OriginalRemovalOrderId')) { obj.originalRemovalOrderId = ApiClient.convertToType(data.OriginalRemovalOrderId, 'String') }
      if (data.hasOwnProperty('LiquidationProceedsAmount')) { obj.liquidationProceedsAmount = Currency.constructFromObject(data.LiquidationProceedsAmount) }
      if (data.hasOwnProperty('LiquidationFeeAmount')) { obj.liquidationFeeAmount = Currency.constructFromObject(data.LiquidationFeeAmount) }
    }
    return obj
  }
}

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} postedDate
 */
FBALiquidationEvent.prototype.postedDate = undefined

/**
 * The identifier for the original removal order.
 * @member {String} originalRemovalOrderId
 */
FBALiquidationEvent.prototype.originalRemovalOrderId = undefined

/**
 * @member {module:finances_v0/model/Currency} liquidationProceedsAmount
 */
FBALiquidationEvent.prototype.liquidationProceedsAmount = undefined

/**
 * @member {module:finances_v0/model/Currency} liquidationFeeAmount
 */
FBALiquidationEvent.prototype.liquidationFeeAmount = undefined

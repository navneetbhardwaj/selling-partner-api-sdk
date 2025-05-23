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
import { ChargeComponent } from './ChargeComponent.js'
import { DirectPayment } from './DirectPayment.js'
import { FeeComponent } from './FeeComponent.js'
import { ShipmentItem } from './ShipmentItem.js'

/**
 * The ShipmentEvent model module.
 * @module finances_v0/model/ShipmentEvent
 * @version v0
 */
export class ShipmentEvent {
  /**
   * Constructs a new <code>ShipmentEvent</code>.
   * A shipment, refund, guarantee claim, or chargeback.
   * @alias module:finances_v0/model/ShipmentEvent
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ShipmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_v0/model/ShipmentEvent} obj Optional instance to populate.
   * @return {module:finances_v0/model/ShipmentEvent} The populated <code>ShipmentEvent</code> instance.
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
      obj = obj || new ShipmentEvent()
      if (data.hasOwnProperty('AmazonOrderId')) { obj.amazonOrderId = ApiClient.convertToType(data.AmazonOrderId, 'String') }
      if (data.hasOwnProperty('SellerOrderId')) { obj.sellerOrderId = ApiClient.convertToType(data.SellerOrderId, 'String') }
      if (data.hasOwnProperty('MarketplaceName')) { obj.marketplaceName = ApiClient.convertToType(data.MarketplaceName, 'String') }
      if (data.hasOwnProperty('StoreName')) { obj.storeName = ApiClient.convertToType(data.StoreName, 'String') }
      if (data.hasOwnProperty('OrderChargeList')) { obj.orderChargeList = ApiClient.convertToType(data.OrderChargeList, [ChargeComponent]) }
      if (data.hasOwnProperty('OrderChargeAdjustmentList')) { obj.orderChargeAdjustmentList = ApiClient.convertToType(data.OrderChargeAdjustmentList, [ChargeComponent]) }
      if (data.hasOwnProperty('ShipmentFeeList')) { obj.shipmentFeeList = ApiClient.convertToType(data.ShipmentFeeList, [FeeComponent]) }
      if (data.hasOwnProperty('ShipmentFeeAdjustmentList')) { obj.shipmentFeeAdjustmentList = ApiClient.convertToType(data.ShipmentFeeAdjustmentList, [FeeComponent]) }
      if (data.hasOwnProperty('OrderFeeList')) { obj.orderFeeList = ApiClient.convertToType(data.OrderFeeList, [FeeComponent]) }
      if (data.hasOwnProperty('OrderFeeAdjustmentList')) { obj.orderFeeAdjustmentList = ApiClient.convertToType(data.OrderFeeAdjustmentList, [FeeComponent]) }
      if (data.hasOwnProperty('DirectPaymentList')) { obj.directPaymentList = ApiClient.convertToType(data.DirectPaymentList, [DirectPayment]) }
      if (data.hasOwnProperty('PostedDate')) { obj.postedDate = ApiClient.convertToType(data.PostedDate, 'Date') }
      if (data.hasOwnProperty('ShipmentItemList')) { obj.shipmentItemList = ApiClient.convertToType(data.ShipmentItemList, [ShipmentItem]) }
      if (data.hasOwnProperty('ShipmentItemAdjustmentList')) { obj.shipmentItemAdjustmentList = ApiClient.convertToType(data.ShipmentItemAdjustmentList, [ShipmentItem]) }
    }
    return obj
  }
}

/**
 * An Amazon-defined identifier for an order.
 * @member {String} amazonOrderId
 */
ShipmentEvent.prototype.amazonOrderId = undefined

/**
 * A seller-defined identifier for an order.
 * @member {String} sellerOrderId
 */
ShipmentEvent.prototype.sellerOrderId = undefined

/**
 * The name of the marketplace where the event occurred.
 * @member {String} marketplaceName
 */
ShipmentEvent.prototype.marketplaceName = undefined

/**
 * The name of the store where the event occurred.
 * @member {String} storeName
 */
ShipmentEvent.prototype.storeName = undefined

/**
 * A list of charge information on the seller's account.
 * @member {Array.<module:finances_v0/model/ChargeComponent>} orderChargeList
 */
ShipmentEvent.prototype.orderChargeList = undefined

/**
 * A list of charge information on the seller's account.
 * @member {Array.<module:finances_v0/model/ChargeComponent>} orderChargeAdjustmentList
 */
ShipmentEvent.prototype.orderChargeAdjustmentList = undefined

/**
 * A list of fee component information.
 * @member {Array.<module:finances_v0/model/FeeComponent>} shipmentFeeList
 */
ShipmentEvent.prototype.shipmentFeeList = undefined

/**
 * A list of fee component information.
 * @member {Array.<module:finances_v0/model/FeeComponent>} shipmentFeeAdjustmentList
 */
ShipmentEvent.prototype.shipmentFeeAdjustmentList = undefined

/**
 * A list of fee component information.
 * @member {Array.<module:finances_v0/model/FeeComponent>} orderFeeList
 */
ShipmentEvent.prototype.orderFeeList = undefined

/**
 * A list of fee component information.
 * @member {Array.<module:finances_v0/model/FeeComponent>} orderFeeAdjustmentList
 */
ShipmentEvent.prototype.orderFeeAdjustmentList = undefined

/**
 * A list of direct payment information.
 * @member {Array.<module:finances_v0/model/DirectPayment>} directPaymentList
 */
ShipmentEvent.prototype.directPaymentList = undefined

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} postedDate
 */
ShipmentEvent.prototype.postedDate = undefined

/**
 * A list of shipment items.
 * @member {Array.<module:finances_v0/model/ShipmentItem>} shipmentItemList
 */
ShipmentEvent.prototype.shipmentItemList = undefined

/**
 * A list of shipment items.
 * @member {Array.<module:finances_v0/model/ShipmentItem>} shipmentItemAdjustmentList
 */
ShipmentEvent.prototype.shipmentItemAdjustmentList = undefined

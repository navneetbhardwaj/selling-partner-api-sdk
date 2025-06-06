/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { DeliveryWindow } from './DeliveryWindow.js'

/**
 * The ScheduledDeliveryInfo model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ScheduledDeliveryInfo
 * @version 2020-07-01
 */
export class ScheduledDeliveryInfo {
  /**
   * Constructs a new <code>ScheduledDeliveryInfo</code>.
   * Delivery information for a scheduled delivery. This is only available in the JP marketplace.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/ScheduledDeliveryInfo
   * @class
   * @param deliveryTimeZone {String} The time zone of the destination address for the fulfillment order preview. Must be an IANA time zone name. Example: Asia/Tokyo.
   * @param deliveryWindows {Array.<module:fulfillmentoutbound_v2020_07_01/model/DeliveryWindow>} An array of delivery windows.
   */
  constructor (deliveryTimeZone, deliveryWindows) {
    this.deliveryTimeZone = deliveryTimeZone
    this.deliveryWindows = deliveryWindows
  }

  /**
   * Constructs a <code>ScheduledDeliveryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/ScheduledDeliveryInfo} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/ScheduledDeliveryInfo} The populated <code>ScheduledDeliveryInfo</code> instance.
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
      obj = obj || new ScheduledDeliveryInfo()
      if (data.hasOwnProperty('deliveryTimeZone')) { obj.deliveryTimeZone = ApiClient.convertToType(data.deliveryTimeZone, 'String') }
      if (data.hasOwnProperty('deliveryWindows')) { obj.deliveryWindows = ApiClient.convertToType(data.deliveryWindows, [DeliveryWindow]) }
    }
    return obj
  }
}

/**
 * The time zone of the destination address for the fulfillment order preview. Must be an IANA time zone name. Example: Asia/Tokyo.
 * @member {String} deliveryTimeZone
 */
ScheduledDeliveryInfo.prototype.deliveryTimeZone = undefined

/**
 * An array of delivery windows.
 * @member {Array.<module:fulfillmentoutbound_v2020_07_01/model/DeliveryWindow>} deliveryWindows
 */
ScheduledDeliveryInfo.prototype.deliveryWindows = undefined

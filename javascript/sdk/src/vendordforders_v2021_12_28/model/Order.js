/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { OrderDetails } from './OrderDetails.js'

/**
 * The Order model module.
 * @module vendordforders_v2021_12_28/model/Order
 * @version 2021-12-28
 */
export class Order {
  /**
   * Constructs a new <code>Order</code>.
   * Represents a purchase order.
   * @alias module:vendordforders_v2021_12_28/model/Order
   * @class
   * @param purchaseOrderNumber {String} The purchase order number for this order. Formatting Notes: alpha-numeric code.
   */
  constructor (purchaseOrderNumber) {
    this.purchaseOrderNumber = purchaseOrderNumber
  }

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordforders_v2021_12_28/model/Order} obj Optional instance to populate.
   * @return {module:vendordforders_v2021_12_28/model/Order} The populated <code>Order</code> instance.
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
      obj = obj || new Order()
      if (data.hasOwnProperty('purchaseOrderNumber')) { obj.purchaseOrderNumber = ApiClient.convertToType(data.purchaseOrderNumber, 'String') }
      if (data.hasOwnProperty('orderDetails')) { obj.orderDetails = OrderDetails.constructFromObject(data.orderDetails) }
    }
    return obj
  }
}

/**
 * The purchase order number for this order. Formatting Notes: alpha-numeric code.
 * @member {String} purchaseOrderNumber
 */
Order.prototype.purchaseOrderNumber = undefined

/**
 * @member {module:vendordforders_v2021_12_28/model/OrderDetails} orderDetails
 */
Order.prototype.orderDetails = undefined

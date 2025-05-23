/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Currency } from './Currency.js'

/**
 * The CollectOnDelivery model module.
 * @module shipping_v2/model/CollectOnDelivery
 * @version v2
 */
export class CollectOnDelivery {
  /**
   * Constructs a new <code>CollectOnDelivery</code>.
   * The amount to collect on delivery.
   * @alias module:shipping_v2/model/CollectOnDelivery
   * @class
   * @param amount {module:shipping_v2/model/Currency}
   */
  constructor (amount) {
    this.amount = amount
  }

  /**
   * Constructs a <code>CollectOnDelivery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/CollectOnDelivery} obj Optional instance to populate.
   * @return {module:shipping_v2/model/CollectOnDelivery} The populated <code>CollectOnDelivery</code> instance.
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
      obj = obj || new CollectOnDelivery()
      if (data.hasOwnProperty('amount')) { obj.amount = Currency.constructFromObject(data.amount) }
    }
    return obj
  }
}

/**
 * @member {module:shipping_v2/model/Currency} amount
 */
CollectOnDelivery.prototype.amount = undefined

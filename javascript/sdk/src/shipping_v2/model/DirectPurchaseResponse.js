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
import { DirectPurchaseResult } from './DirectPurchaseResult.js'

/**
 * The DirectPurchaseResponse model module.
 * @module shipping_v2/model/DirectPurchaseResponse
 * @version v2
 */
export class DirectPurchaseResponse {
  /**
   * Constructs a new <code>DirectPurchaseResponse</code>.
   * The response schema for the directPurchaseShipment operation.
   * @alias module:shipping_v2/model/DirectPurchaseResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>DirectPurchaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/DirectPurchaseResponse} obj Optional instance to populate.
   * @return {module:shipping_v2/model/DirectPurchaseResponse} The populated <code>DirectPurchaseResponse</code> instance.
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
      obj = obj || new DirectPurchaseResponse()
      if (data.hasOwnProperty('payload')) { obj.payload = DirectPurchaseResult.constructFromObject(data.payload) }
    }
    return obj
  }
}

/**
 * @member {module:shipping_v2/model/DirectPurchaseResult} payload
 */
DirectPurchaseResponse.prototype.payload = undefined

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
import { PackageDocumentDetail } from './PackageDocumentDetail.js'

/**
 * The DirectPurchaseResult model module.
 * @module shipping_v2/model/DirectPurchaseResult
 * @version v2
 */
export class DirectPurchaseResult {
  /**
   * Constructs a new <code>DirectPurchaseResult</code>.
   * The payload for the directPurchaseShipment operation.
   * @alias module:shipping_v2/model/DirectPurchaseResult
   * @class
   * @param shipmentId {String} The unique shipment identifier provided by a shipping service.
   */
  constructor (shipmentId) {
    this.shipmentId = shipmentId
  }

  /**
   * Constructs a <code>DirectPurchaseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/DirectPurchaseResult} obj Optional instance to populate.
   * @return {module:shipping_v2/model/DirectPurchaseResult} The populated <code>DirectPurchaseResult</code> instance.
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
      obj = obj || new DirectPurchaseResult()
      if (data.hasOwnProperty('shipmentId')) { obj.shipmentId = ApiClient.convertToType(data.shipmentId, 'String') }
      if (data.hasOwnProperty('packageDocumentDetailList')) { obj.packageDocumentDetailList = ApiClient.convertToType(data.packageDocumentDetailList, [PackageDocumentDetail]) }
    }
    return obj
  }
}

/**
 * The unique shipment identifier provided by a shipping service.
 * @member {String} shipmentId
 */
DirectPurchaseResult.prototype.shipmentId = undefined

/**
 * A list of post-purchase details about a package that will be shipped using a shipping service.
 * @member {Array.<module:shipping_v2/model/PackageDocumentDetail>} packageDocumentDetailList
 */
DirectPurchaseResult.prototype.packageDocumentDetailList = undefined

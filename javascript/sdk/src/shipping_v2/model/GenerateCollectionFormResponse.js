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
import { CollectionsFormDocument } from './CollectionsFormDocument.js'

/**
 * The GenerateCollectionFormResponse model module.
 * @module shipping_v2/model/GenerateCollectionFormResponse
 * @version v2
 */
export class GenerateCollectionFormResponse {
  /**
   * Constructs a new <code>GenerateCollectionFormResponse</code>.
   * The Response  for the GenerateCollectionFormResponse operation.
   * @alias module:shipping_v2/model/GenerateCollectionFormResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>GenerateCollectionFormResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/GenerateCollectionFormResponse} obj Optional instance to populate.
   * @return {module:shipping_v2/model/GenerateCollectionFormResponse} The populated <code>GenerateCollectionFormResponse</code> instance.
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
      obj = obj || new GenerateCollectionFormResponse()
      if (data.hasOwnProperty('collectionsFormDocument')) { obj.collectionsFormDocument = CollectionsFormDocument.constructFromObject(data.collectionsFormDocument) }
    }
    return obj
  }
}

/**
 * @member {module:shipping_v2/model/CollectionsFormDocument} collectionsFormDocument
 */
GenerateCollectionFormResponse.prototype.collectionsFormDocument = undefined

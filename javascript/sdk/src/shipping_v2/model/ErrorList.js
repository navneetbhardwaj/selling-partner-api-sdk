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
import { Error } from './Error.js'

/**
 * The ErrorList model module.
 * @module shipping_v2/model/ErrorList
 * @version v2
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:shipping_v2/model/ErrorList
   * @class
   * @param errors {Array.<module:shipping_v2/model/Error>} Array of Errors
   */
  constructor (errors) {
    this.errors = errors
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/ErrorList} obj Optional instance to populate.
   * @return {module:shipping_v2/model/ErrorList} The populated <code>ErrorList</code> instance.
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
      obj = obj || new ErrorList()
      if (data.hasOwnProperty('errors')) { obj.errors = ApiClient.convertToType(data.errors, [Error]) }
    }
    return obj
  }
}

/**
 * Array of Errors
 * @member {Array.<module:shipping_v2/model/Error>} errors
 */
ErrorList.prototype.errors = undefined

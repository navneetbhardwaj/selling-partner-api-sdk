/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

/**
 * The Error model module.
 * @module orders_v0/model/Error
 * @version v0
 */
export class Error {
  /**
   * Constructs a new <code>Error</code>.
   * Error response returned when the request is unsuccessful.
   * @alias module:orders_v0/model/Error
   * @class
   * @param code {String} An error code that identifies the type of error that occurred.
   * @param message {String} A message that describes the error condition.
   */
  constructor (code, message) {
    this.code = code
    this.message = message
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/Error} obj Optional instance to populate.
   * @return {module:orders_v0/model/Error} The populated <code>Error</code> instance.
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
      obj = obj || new Error()
      if (data.hasOwnProperty('code')) { obj.code = ApiClient.convertToType(data.code, 'String') }
      if (data.hasOwnProperty('message')) { obj.message = ApiClient.convertToType(data.message, 'String') }
      if (data.hasOwnProperty('details')) { obj.details = ApiClient.convertToType(data.details, 'String') }
    }
    return obj
  }
}

/**
 * An error code that identifies the type of error that occurred.
 * @member {String} code
 */
Error.prototype.code = undefined

/**
 * A message that describes the error condition.
 * @member {String} message
 */
Error.prototype.message = undefined

/**
 * Additional details that can help the caller understand or fix the issue.
 * @member {String} details
 */
Error.prototype.details = undefined

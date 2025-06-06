/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
 *
 * The version of the OpenAPI document: v1
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
 * @module fbaeligibility_v1/model/Error
 * @version v1
 */
export class Error {
  /**
   * Constructs a new <code>Error</code>.
   * Error response returned when the request is unsuccessful.
   * @alias module:fbaeligibility_v1/model/Error
   * @class
   * @param code {String} An error code that identifies the type of error that occurred.
   */
  constructor (code) {
    this.code = code
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbaeligibility_v1/model/Error} obj Optional instance to populate.
   * @return {module:fbaeligibility_v1/model/Error} The populated <code>Error</code> instance.
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
 * A message that describes the error condition in a human-readable form.
 * @member {String} message
 */
Error.prototype.message = undefined

/**
 * Additional information that can help the caller understand or fix the issue.
 * @member {String} details
 */
Error.prototype.details = undefined

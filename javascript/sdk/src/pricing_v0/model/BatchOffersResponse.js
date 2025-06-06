/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import { GetOffersHttpStatusLine } from './GetOffersHttpStatusLine.js'
import { GetOffersResponse } from './GetOffersResponse.js'
import { HttpResponseHeaders } from './HttpResponseHeaders.js'

/**
 * The BatchOffersResponse model module.
 * @module pricing_v0/model/BatchOffersResponse
 * @version v0
 */
export class BatchOffersResponse {
  /**
   * Constructs a new <code>BatchOffersResponse</code>.
   * Common schema that present in &#x60;ItemOffersResponse&#x60; and &#x60;ListingOffersResponse&#x60;
   * @alias module:pricing_v0/model/BatchOffersResponse
   * @class
   * @param body {module:pricing_v0/model/GetOffersResponse}
   */
  constructor (body) {
    this.body = body
  }

  /**
   * Constructs a <code>BatchOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/BatchOffersResponse} obj Optional instance to populate.
   * @return {module:pricing_v0/model/BatchOffersResponse} The populated <code>BatchOffersResponse</code> instance.
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
      obj = obj || new BatchOffersResponse()
      if (data.hasOwnProperty('headers')) { obj.headers = HttpResponseHeaders.constructFromObject(data.headers) }
      if (data.hasOwnProperty('status')) { obj.status = GetOffersHttpStatusLine.constructFromObject(data.status) }
      if (data.hasOwnProperty('body')) { obj.body = GetOffersResponse.constructFromObject(data.body) }
    }
    return obj
  }
}

/**
 * @member {module:pricing_v0/model/HttpResponseHeaders} headers
 */
BatchOffersResponse.prototype.headers = undefined

/**
 * @member {module:pricing_v0/model/GetOffersHttpStatusLine} status
 */
BatchOffersResponse.prototype.status = undefined

/**
 * @member {module:pricing_v0/model/GetOffersResponse} body
 */
BatchOffersResponse.prototype.body = undefined

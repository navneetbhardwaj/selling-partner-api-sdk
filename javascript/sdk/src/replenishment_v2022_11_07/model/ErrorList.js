/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 *
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
 * @module replenishment_v2022_11_07/model/ErrorList
 * @version 2022-11-07
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:replenishment_v2022_11_07/model/ErrorList
   * @class
   * @param errors {Array.<module:replenishment_v2022_11_07/model/Error>} A list of error responses returned when a request is unsuccessful.
   */
  constructor (errors) {
    this.errors = errors
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment_v2022_11_07/model/ErrorList} obj Optional instance to populate.
   * @return {module:replenishment_v2022_11_07/model/ErrorList} The populated <code>ErrorList</code> instance.
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
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:replenishment_v2022_11_07/model/Error>} errors
 */
ErrorList.prototype.errors = undefined

/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { AplusResponse } from './AplusResponse.js'
import { Error } from './Error.js'

/**
 * The AplusPaginatedResponse model module.
 * @module apluscontent_v2020_11_01/model/AplusPaginatedResponse
 * @version 2020-11-01
 */
export class AplusPaginatedResponse {
  /**
   * Constructs a new <code>AplusPaginatedResponse</code>.
   * A token that you use to retrieve the next page of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextPageToken&#x60; is null. Note that this operation can return empty pages.
   * @alias module:apluscontent_v2020_11_01/model/AplusPaginatedResponse
   * @class
   * @implements module:apluscontent_v2020_11_01/model/AplusResponse
   */
  constructor () {
    AplusResponse.call(this)
  }

  /**
   * Constructs a <code>AplusPaginatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/AplusPaginatedResponse} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/AplusPaginatedResponse} The populated <code>AplusPaginatedResponse</code> instance.
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
      obj = obj || new AplusPaginatedResponse()
      AplusResponse.constructFromObject(data, obj)
      if (data.hasOwnProperty('warnings')) { obj.warnings = ApiClient.convertToType(data.warnings, [Error]) }
      if (data.hasOwnProperty('nextPageToken')) { obj.nextPageToken = ApiClient.convertToType(data.nextPageToken, 'String') }
    }
    return obj
  }
}

/**
 * A set of messages to the user, such as warnings or comments.
 * @member {Array.<module:apluscontent_v2020_11_01/model/Error>} warnings
 */
AplusPaginatedResponse.prototype.warnings = undefined

/**
 * A token that you use to fetch a specific page when there are multiple pages of results.
 * @member {String} nextPageToken
 */
AplusPaginatedResponse.prototype.nextPageToken = undefined

// Implement AplusResponse interface:
/**
 * A set of messages to the user, such as warnings or comments.
 * @member {Array.<module:apluscontent_v2020_11_01/model/Error>} warnings
 */
AplusResponse.prototype.warnings = undefined

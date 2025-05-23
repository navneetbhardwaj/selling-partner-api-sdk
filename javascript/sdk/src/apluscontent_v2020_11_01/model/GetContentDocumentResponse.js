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
import { ContentRecord } from './ContentRecord.js'
import { Error } from './Error.js'

/**
 * The GetContentDocumentResponse model module.
 * @module apluscontent_v2020_11_01/model/GetContentDocumentResponse
 * @version 2020-11-01
 */
export class GetContentDocumentResponse {
  /**
   * Constructs a new <code>GetContentDocumentResponse</code>.
   * @alias module:apluscontent_v2020_11_01/model/GetContentDocumentResponse
   * @class
   * @implements module:apluscontent_v2020_11_01/model/AplusResponse
   * @param contentRecord {module:apluscontent_v2020_11_01/model/ContentRecord}
   */
  constructor (contentRecord) {
    AplusResponse.call(this)
    this.contentRecord = contentRecord
  }

  /**
   * Constructs a <code>GetContentDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/GetContentDocumentResponse} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/GetContentDocumentResponse} The populated <code>GetContentDocumentResponse</code> instance.
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
      obj = obj || new GetContentDocumentResponse()
      AplusResponse.constructFromObject(data, obj)
      if (data.hasOwnProperty('warnings')) { obj.warnings = ApiClient.convertToType(data.warnings, [Error]) }
      if (data.hasOwnProperty('contentRecord')) { obj.contentRecord = ContentRecord.constructFromObject(data.contentRecord) }
    }
    return obj
  }
}

/**
 * A set of messages to the user, such as warnings or comments.
 * @member {Array.<module:apluscontent_v2020_11_01/model/Error>} warnings
 */
GetContentDocumentResponse.prototype.warnings = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/ContentRecord} contentRecord
 */
GetContentDocumentResponse.prototype.contentRecord = undefined

// Implement AplusResponse interface:
/**
 * A set of messages to the user, such as warnings or comments.
 * @member {Array.<module:apluscontent_v2020_11_01/model/Error>} warnings
 */
AplusResponse.prototype.warnings = undefined

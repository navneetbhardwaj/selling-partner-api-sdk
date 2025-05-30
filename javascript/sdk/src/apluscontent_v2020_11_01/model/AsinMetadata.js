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
import { AsinBadge } from './AsinBadge.js'

/**
 * The AsinMetadata model module.
 * @module apluscontent_v2020_11_01/model/AsinMetadata
 * @version 2020-11-01
 */
export class AsinMetadata {
  /**
   * Constructs a new <code>AsinMetadata</code>.
   * The A+ Content ASIN with additional metadata for content management. If you don&#39;t include the &#x60;includedDataSet&#x60; parameter in a call to the &#x60;listContentDocumentAsinRelations&#x60; operation, the related ASINs are returned without metadata.
   * @alias module:apluscontent_v2020_11_01/model/AsinMetadata
   * @class
   * @param asin {String} The Amazon Standard Identification Number (ASIN).
   */
  constructor (asin) {
    this.asin = asin
  }

  /**
   * Constructs a <code>AsinMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/AsinMetadata} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/AsinMetadata} The populated <code>AsinMetadata</code> instance.
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
      obj = obj || new AsinMetadata()
      if (data.hasOwnProperty('asin')) { obj.asin = ApiClient.convertToType(data.asin, 'String') }
      if (data.hasOwnProperty('badgeSet')) { obj.badgeSet = ApiClient.convertToType(data.badgeSet, [AsinBadge]) }
      if (data.hasOwnProperty('parent')) { obj.parent = ApiClient.convertToType(data.parent, 'String') }
      if (data.hasOwnProperty('title')) { obj.title = ApiClient.convertToType(data.title, 'String') }
      if (data.hasOwnProperty('imageUrl')) { obj.imageUrl = ApiClient.convertToType(data.imageUrl, 'String') }
      if (data.hasOwnProperty('contentReferenceKeySet')) { obj.contentReferenceKeySet = ApiClient.convertToType(data.contentReferenceKeySet, ['String']) }
    }
    return obj
  }
}

/**
 * The Amazon Standard Identification Number (ASIN).
 * @member {String} asin
 */
AsinMetadata.prototype.asin = undefined

/**
 * The set of ASIN badges.
 * @member {Array.<module:apluscontent_v2020_11_01/model/AsinBadge>} badgeSet
 */
AsinMetadata.prototype.badgeSet = undefined

/**
 * The Amazon Standard Identification Number (ASIN).
 * @member {String} parent
 */
AsinMetadata.prototype.parent = undefined

/**
 * The title for the ASIN in the Amazon catalog.
 * @member {String} title
 */
AsinMetadata.prototype.title = undefined

/**
 * The default image for the ASIN in the Amazon catalog.
 * @member {String} imageUrl
 */
AsinMetadata.prototype.imageUrl = undefined

/**
 * A set of content reference keys.
 * @member {Array.<String>} contentReferenceKeySet
 */
AsinMetadata.prototype.contentReferenceKeySet = undefined

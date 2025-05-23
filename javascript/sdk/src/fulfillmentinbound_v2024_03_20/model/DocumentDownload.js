/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The DocumentDownload model module.
 * @module fulfillmentinbound_v2024_03_20/model/DocumentDownload
 * @version 2024-03-20
 */
export class DocumentDownload {
  /**
   * Constructs a new <code>DocumentDownload</code>.
   * Resource to download the requested document.
   * @alias module:fulfillmentinbound_v2024_03_20/model/DocumentDownload
   * @class
   * @param downloadType {String} The type of download. Possible values: `URL`.
   * @param uri {String} Uniform resource identifier to identify where the document is located.
   */
  constructor (downloadType, uri) {
    this.downloadType = downloadType
    this.uri = uri
  }

  /**
   * Constructs a <code>DocumentDownload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/DocumentDownload} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/DocumentDownload} The populated <code>DocumentDownload</code> instance.
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
      obj = obj || new DocumentDownload()
      if (data.hasOwnProperty('downloadType')) { obj.downloadType = ApiClient.convertToType(data.downloadType, 'String') }
      if (data.hasOwnProperty('expiration')) { obj.expiration = ApiClient.convertToType(data.expiration, 'Date') }
      if (data.hasOwnProperty('uri')) { obj.uri = ApiClient.convertToType(data.uri, 'String') }
    }
    return obj
  }
}

/**
 * The type of download. Possible values: `URL`.
 * @member {String} downloadType
 */
DocumentDownload.prototype.downloadType = undefined

/**
 * The URI's expiration time. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
 * @member {Date} expiration
 */
DocumentDownload.prototype.expiration = undefined

/**
 * Uniform resource identifier to identify where the document is located.
 * @member {String} uri
 */
DocumentDownload.prototype.uri = undefined

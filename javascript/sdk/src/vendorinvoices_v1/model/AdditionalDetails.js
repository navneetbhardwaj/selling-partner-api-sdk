/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
 * The AdditionalDetails model module.
 * @module vendorinvoices_v1/model/AdditionalDetails
 * @version v1
 */
export class AdditionalDetails {
  /**
   * Constructs a new <code>AdditionalDetails</code>.
   * Additional information provided by the selling party for tax-related or any other purpose.
   * @alias module:vendorinvoices_v1/model/AdditionalDetails
   * @class
   * @param type {module:vendorinvoices_v1/model/AdditionalDetails.TypeEnum} The type of the additional information provided by the selling party.
   * @param detail {String} The detail of the additional information provided by the selling party.
   */
  constructor (type, detail) {
    this.type = type
    this.detail = detail
  }

  /**
   * Constructs a <code>AdditionalDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorinvoices_v1/model/AdditionalDetails} obj Optional instance to populate.
   * @return {module:vendorinvoices_v1/model/AdditionalDetails} The populated <code>AdditionalDetails</code> instance.
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
      obj = obj || new AdditionalDetails()
      if (data.hasOwnProperty('type')) { obj.type = ApiClient.convertToType(data.type, 'String') }
      if (data.hasOwnProperty('detail')) { obj.detail = ApiClient.convertToType(data.detail, 'String') }
      if (data.hasOwnProperty('languageCode')) { obj.languageCode = ApiClient.convertToType(data.languageCode, 'String') }
    }
    return obj
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AdditionalDetails.TypeEnum = {

  /**
     * value: "SUR"
     * @const
     */
  SUR: 'SUR',

  /**
     * value: "OCR"
     * @const
     */
  OCR: 'OCR',

  /**
     * value: "CartonCount"
     * @const
     */
  CartonCount: 'CartonCount'
}

/**
 * The type of the additional information provided by the selling party.
 * @member {module:vendorinvoices_v1/model/AdditionalDetails.TypeEnum} type
 */
AdditionalDetails.prototype.type = undefined

/**
 * The detail of the additional information provided by the selling party.
 * @member {String} detail
 */
AdditionalDetails.prototype.detail = undefined

/**
 * The language code of the additional information detail.
 * @member {String} languageCode
 */
AdditionalDetails.prototype.languageCode = undefined

/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import { AdditionalInputs } from './AdditionalInputs.js'

/**
 * The ItemLevelFields model module.
 * @module merchantfulfillment_v0/model/ItemLevelFields
 * @version v0
 */
export class ItemLevelFields {
  /**
   * Constructs a new <code>ItemLevelFields</code>.
   * A list of item level fields.
   * @alias module:merchantfulfillment_v0/model/ItemLevelFields
   * @class
   * @param asin {String} The Amazon Standard Identification Number (ASIN) of the item.
   * @param additionalInputs {Array.<module:merchantfulfillment_v0/model/AdditionalInputs>} A list of additional inputs.
   */
  constructor (asin, additionalInputs) {
    this.asin = asin
    this.additionalInputs = additionalInputs
  }

  /**
   * Constructs a <code>ItemLevelFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/ItemLevelFields} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/ItemLevelFields} The populated <code>ItemLevelFields</code> instance.
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
      obj = obj || new ItemLevelFields()
      if (data.hasOwnProperty('Asin')) { obj.asin = ApiClient.convertToType(data.Asin, 'String') }
      if (data.hasOwnProperty('AdditionalInputs')) { obj.additionalInputs = ApiClient.convertToType(data.AdditionalInputs, [AdditionalInputs]) }
    }
    return obj
  }
}

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} asin
 */
ItemLevelFields.prototype.asin = undefined

/**
 * A list of additional inputs.
 * @member {Array.<module:merchantfulfillment_v0/model/AdditionalInputs>} additionalInputs
 */
ItemLevelFields.prototype.additionalInputs = undefined

/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import { AmazonPrepFeesDetails } from './AmazonPrepFeesDetails.js'
import { BarcodeInstruction } from './BarcodeInstruction.js'
import { PrepGuidance } from './PrepGuidance.js'
import { PrepInstruction } from './PrepInstruction.js'

/**
 * The SKUPrepInstructions model module.
 * @module fulfillmentinbound_v0/model/SKUPrepInstructions
 * @version v0
 */
export class SKUPrepInstructions {
  /**
   * Constructs a new <code>SKUPrepInstructions</code>.
   * Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon&#39;s fulfillment network.
   * @alias module:fulfillmentinbound_v0/model/SKUPrepInstructions
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>SKUPrepInstructions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v0/model/SKUPrepInstructions} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v0/model/SKUPrepInstructions} The populated <code>SKUPrepInstructions</code> instance.
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
      obj = obj || new SKUPrepInstructions()
      if (data.hasOwnProperty('SellerSKU')) { obj.sellerSKU = ApiClient.convertToType(data.SellerSKU, 'String') }
      if (data.hasOwnProperty('ASIN')) { obj.ASIN = ApiClient.convertToType(data.ASIN, 'String') }
      if (data.hasOwnProperty('BarcodeInstruction')) { obj.barcodeInstruction = BarcodeInstruction.constructFromObject(data.BarcodeInstruction) }
      if (data.hasOwnProperty('PrepGuidance')) { obj.prepGuidance = PrepGuidance.constructFromObject(data.PrepGuidance) }
      if (data.hasOwnProperty('PrepInstructionList')) { obj.prepInstructionList = ApiClient.convertToType(data.PrepInstructionList, [PrepInstruction]) }
      if (data.hasOwnProperty('AmazonPrepFeesDetailsList')) { obj.amazonPrepFeesDetailsList = ApiClient.convertToType(data.AmazonPrepFeesDetailsList, [AmazonPrepFeesDetails]) }
    }
    return obj
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSKU
 */
SKUPrepInstructions.prototype.sellerSKU = undefined

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
SKUPrepInstructions.prototype.ASIN = undefined

/**
 * @member {module:fulfillmentinbound_v0/model/BarcodeInstruction} barcodeInstruction
 */
SKUPrepInstructions.prototype.barcodeInstruction = undefined

/**
 * @member {module:fulfillmentinbound_v0/model/PrepGuidance} prepGuidance
 */
SKUPrepInstructions.prototype.prepGuidance = undefined

/**
 * A list of preparation instructions to help with item sourcing decisions.
 * @member {Array.<module:fulfillmentinbound_v0/model/PrepInstruction>} prepInstructionList
 */
SKUPrepInstructions.prototype.prepInstructionList = undefined

/**
 * A list of preparation instructions and fees for Amazon to prep goods for shipment.
 * @member {Array.<module:fulfillmentinbound_v0/model/AmazonPrepFeesDetails>} amazonPrepFeesDetailsList
 */
SKUPrepInstructions.prototype.amazonPrepFeesDetailsList = undefined

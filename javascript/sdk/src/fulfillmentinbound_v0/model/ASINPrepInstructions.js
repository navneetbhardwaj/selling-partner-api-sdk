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
import { BarcodeInstruction } from './BarcodeInstruction.js'
import { PrepGuidance } from './PrepGuidance.js'
import { PrepInstruction } from './PrepInstruction.js'

/**
 * The ASINPrepInstructions model module.
 * @module fulfillmentinbound_v0/model/ASINPrepInstructions
 * @version v0
 */
export class ASINPrepInstructions {
  /**
   * Constructs a new <code>ASINPrepInstructions</code>.
   * Item preparation instructions to help with item sourcing decisions.
   * @alias module:fulfillmentinbound_v0/model/ASINPrepInstructions
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ASINPrepInstructions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v0/model/ASINPrepInstructions} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v0/model/ASINPrepInstructions} The populated <code>ASINPrepInstructions</code> instance.
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
      obj = obj || new ASINPrepInstructions()
      if (data.hasOwnProperty('ASIN')) { obj.ASIN = ApiClient.convertToType(data.ASIN, 'String') }
      if (data.hasOwnProperty('BarcodeInstruction')) { obj.barcodeInstruction = BarcodeInstruction.constructFromObject(data.BarcodeInstruction) }
      if (data.hasOwnProperty('PrepGuidance')) { obj.prepGuidance = PrepGuidance.constructFromObject(data.PrepGuidance) }
      if (data.hasOwnProperty('PrepInstructionList')) { obj.prepInstructionList = ApiClient.convertToType(data.PrepInstructionList, [PrepInstruction]) }
    }
    return obj
  }
}

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
ASINPrepInstructions.prototype.ASIN = undefined

/**
 * @member {module:fulfillmentinbound_v0/model/BarcodeInstruction} barcodeInstruction
 */
ASINPrepInstructions.prototype.barcodeInstruction = undefined

/**
 * @member {module:fulfillmentinbound_v0/model/PrepGuidance} prepGuidance
 */
ASINPrepInstructions.prototype.prepGuidance = undefined

/**
 * A list of preparation instructions to help with item sourcing decisions.
 * @member {Array.<module:fulfillmentinbound_v0/model/PrepInstruction>} prepInstructionList
 */
ASINPrepInstructions.prototype.prepInstructionList = undefined

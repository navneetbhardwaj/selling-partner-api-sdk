/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import { Expiry } from './Expiry.js'
import { Money } from './Money.js'

/**
 * The ItemDetails model module.
 * @module vendorshipments_v1/model/ItemDetails
 * @version v1
 */
export class ItemDetails {
  /**
   * Constructs a new <code>ItemDetails</code>.
   * Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.
   * @alias module:vendorshipments_v1/model/ItemDetails
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/ItemDetails} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/ItemDetails} The populated <code>ItemDetails</code> instance.
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
      obj = obj || new ItemDetails()
      if (data.hasOwnProperty('purchaseOrderNumber')) { obj.purchaseOrderNumber = ApiClient.convertToType(data.purchaseOrderNumber, 'String') }
      if (data.hasOwnProperty('lotNumber')) { obj.lotNumber = ApiClient.convertToType(data.lotNumber, 'String') }
      if (data.hasOwnProperty('expiry')) { obj.expiry = Expiry.constructFromObject(data.expiry) }
      if (data.hasOwnProperty('maximumRetailPrice')) { obj.maximumRetailPrice = Money.constructFromObject(data.maximumRetailPrice) }
      if (data.hasOwnProperty('handlingCode')) { obj.handlingCode = ApiClient.convertToType(data.handlingCode, 'String') }
    }
    return obj
  }
}

/**
 * The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple purchase order numbers that are in particular carton or pallet within the shipment, then provide the purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code.
 * @member {String} purchaseOrderNumber
 */
ItemDetails.prototype.purchaseOrderNumber = undefined

/**
 * The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items contained. This field is mandatory for all perishable items.
 * @member {String} lotNumber
 */
ItemDetails.prototype.lotNumber = undefined

/**
 * @member {module:vendorshipments_v1/model/Expiry} expiry
 */
ItemDetails.prototype.expiry = undefined

/**
 * @member {module:vendorshipments_v1/model/Money} maximumRetailPrice
 */
ItemDetails.prototype.maximumRetailPrice = undefined

/**
 * Allowed values for the <code>handlingCode</code> property.
 * @enum {String}
 * @readonly
 */
ItemDetails.HandlingCodeEnum = {

  /**
     * value: "Oversized"
     * @const
     */
  Oversized: 'Oversized',

  /**
     * value: "Fragile"
     * @const
     */
  Fragile: 'Fragile',

  /**
     * value: "Food"
     * @const
     */
  Food: 'Food',

  /**
     * value: "HandleWithCare"
     * @const
     */
  HandleWithCare: 'HandleWithCare'
}

/**
 * Identification of the instructions on how specified item/carton/pallet should be handled.
 * @member {module:vendorshipments_v1/model/ItemDetails.HandlingCodeEnum} handlingCode
 */
ItemDetails.prototype.handlingCode = undefined

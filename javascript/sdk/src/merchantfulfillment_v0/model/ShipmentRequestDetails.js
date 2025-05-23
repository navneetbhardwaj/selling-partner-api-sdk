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
import { Address } from './Address.js'
import { Item } from './Item.js'
import { LabelCustomization } from './LabelCustomization.js'
import { PackageDimensions } from './PackageDimensions.js'
import { ShippingServiceOptions } from './ShippingServiceOptions.js'
import { Weight } from './Weight.js'

/**
 * The ShipmentRequestDetails model module.
 * @module merchantfulfillment_v0/model/ShipmentRequestDetails
 * @version v0
 */
export class ShipmentRequestDetails {
  /**
   * Constructs a new <code>ShipmentRequestDetails</code>.
   * Shipment information required for requesting shipping service offers or for creating a shipment.
   * @alias module:merchantfulfillment_v0/model/ShipmentRequestDetails
   * @class
   * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
   * @param itemList {Array.<module:merchantfulfillment_v0/model/Item>} The list of items you want to include in a shipment.
   * @param shipFromAddress {module:merchantfulfillment_v0/model/Address}
   * @param packageDimensions {module:merchantfulfillment_v0/model/PackageDimensions}
   * @param weight {module:merchantfulfillment_v0/model/Weight}
   * @param shippingServiceOptions {module:merchantfulfillment_v0/model/ShippingServiceOptions}
   */
  constructor (amazonOrderId, itemList, shipFromAddress, packageDimensions, weight, shippingServiceOptions) {
    this.amazonOrderId = amazonOrderId
    this.itemList = itemList
    this.shipFromAddress = shipFromAddress
    this.packageDimensions = packageDimensions
    this.weight = weight
    this.shippingServiceOptions = shippingServiceOptions
  }

  /**
   * Constructs a <code>ShipmentRequestDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/ShipmentRequestDetails} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/ShipmentRequestDetails} The populated <code>ShipmentRequestDetails</code> instance.
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
      obj = obj || new ShipmentRequestDetails()
      if (data.hasOwnProperty('AmazonOrderId')) { obj.amazonOrderId = ApiClient.convertToType(data.AmazonOrderId, 'String') }
      if (data.hasOwnProperty('SellerOrderId')) { obj.sellerOrderId = ApiClient.convertToType(data.SellerOrderId, 'String') }
      if (data.hasOwnProperty('ItemList')) { obj.itemList = ApiClient.convertToType(data.ItemList, [Item]) }
      if (data.hasOwnProperty('ShipFromAddress')) { obj.shipFromAddress = Address.constructFromObject(data.ShipFromAddress) }
      if (data.hasOwnProperty('PackageDimensions')) { obj.packageDimensions = PackageDimensions.constructFromObject(data.PackageDimensions) }
      if (data.hasOwnProperty('Weight')) { obj.weight = Weight.constructFromObject(data.Weight) }
      if (data.hasOwnProperty('MustArriveByDate')) { obj.mustArriveByDate = ApiClient.convertToType(data.MustArriveByDate, 'Date') }
      if (data.hasOwnProperty('ShipDate')) { obj.shipDate = ApiClient.convertToType(data.ShipDate, 'Date') }
      if (data.hasOwnProperty('ShippingServiceOptions')) { obj.shippingServiceOptions = ShippingServiceOptions.constructFromObject(data.ShippingServiceOptions) }
      if (data.hasOwnProperty('LabelCustomization')) { obj.labelCustomization = LabelCustomization.constructFromObject(data.LabelCustomization) }
    }
    return obj
  }
}

/**
 * An Amazon-defined order identifier, in 3-7-7 format.
 * @member {String} amazonOrderId
 */
ShipmentRequestDetails.prototype.amazonOrderId = undefined

/**
 * A seller-defined order identifier.
 * @member {String} sellerOrderId
 */
ShipmentRequestDetails.prototype.sellerOrderId = undefined

/**
 * The list of items you want to include in a shipment.
 * @member {Array.<module:merchantfulfillment_v0/model/Item>} itemList
 */
ShipmentRequestDetails.prototype.itemList = undefined

/**
 * @member {module:merchantfulfillment_v0/model/Address} shipFromAddress
 */
ShipmentRequestDetails.prototype.shipFromAddress = undefined

/**
 * @member {module:merchantfulfillment_v0/model/PackageDimensions} packageDimensions
 */
ShipmentRequestDetails.prototype.packageDimensions = undefined

/**
 * @member {module:merchantfulfillment_v0/model/Weight} weight
 */
ShipmentRequestDetails.prototype.weight = undefined

/**
 * Date-time formatted timestamp.
 * @member {Date} mustArriveByDate
 */
ShipmentRequestDetails.prototype.mustArriveByDate = undefined

/**
 * Date-time formatted timestamp.
 * @member {Date} shipDate
 */
ShipmentRequestDetails.prototype.shipDate = undefined

/**
 * @member {module:merchantfulfillment_v0/model/ShippingServiceOptions} shippingServiceOptions
 */
ShipmentRequestDetails.prototype.shippingServiceOptions = undefined

/**
 * @member {module:merchantfulfillment_v0/model/LabelCustomization} labelCustomization
 */
ShipmentRequestDetails.prototype.labelCustomization = undefined

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
import { ContainerIdentification } from './ContainerIdentification.js'
import { Dimensions } from './Dimensions.js'
import { InnerContainersDetails } from './InnerContainersDetails.js'
import { PackedItems } from './PackedItems.js'
import { Weight } from './Weight.js'

/**
 * The Containers model module.
 * @module vendorshipments_v1/model/Containers
 * @version v1
 */
export class Containers {
  /**
   * Constructs a new <code>Containers</code>.
   * A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
   * @alias module:vendorshipments_v1/model/Containers
   * @class
   * @param containerType {module:vendorshipments_v1/model/Containers.ContainerTypeEnum} The type of container.
   * @param containerIdentifiers {Array.<module:vendorshipments_v1/model/ContainerIdentification>} A list of carton identifiers.
   */
  constructor (containerType, containerIdentifiers) {
    this.containerType = containerType
    this.containerIdentifiers = containerIdentifiers
  }

  /**
   * Constructs a <code>Containers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/Containers} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/Containers} The populated <code>Containers</code> instance.
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
      obj = obj || new Containers()
      if (data.hasOwnProperty('containerType')) { obj.containerType = ApiClient.convertToType(data.containerType, 'String') }
      if (data.hasOwnProperty('containerSequenceNumber')) { obj.containerSequenceNumber = ApiClient.convertToType(data.containerSequenceNumber, 'String') }
      if (data.hasOwnProperty('containerIdentifiers')) { obj.containerIdentifiers = ApiClient.convertToType(data.containerIdentifiers, [ContainerIdentification]) }
      if (data.hasOwnProperty('trackingNumber')) { obj.trackingNumber = ApiClient.convertToType(data.trackingNumber, 'String') }
      if (data.hasOwnProperty('dimensions')) { obj.dimensions = Dimensions.constructFromObject(data.dimensions) }
      if (data.hasOwnProperty('weight')) { obj.weight = Weight.constructFromObject(data.weight) }
      if (data.hasOwnProperty('tier')) { obj.tier = ApiClient.convertToType(data.tier, 'Number') }
      if (data.hasOwnProperty('block')) { obj.block = ApiClient.convertToType(data.block, 'Number') }
      if (data.hasOwnProperty('innerContainersDetails')) { obj.innerContainersDetails = InnerContainersDetails.constructFromObject(data.innerContainersDetails) }
      if (data.hasOwnProperty('packedItems')) { obj.packedItems = ApiClient.convertToType(data.packedItems, [PackedItems]) }
    }
    return obj
  }
}

/**
 * Allowed values for the <code>containerType</code> property.
 * @enum {String}
 * @readonly
 */
Containers.ContainerTypeEnum = {

  /**
     * value: "carton"
     * @const
     */
  carton: 'carton',

  /**
     * value: "pallet"
     * @const
     */
  pallet: 'pallet'
}

/**
 * The type of container.
 * @member {module:vendorshipments_v1/model/Containers.ContainerTypeEnum} containerType
 */
Containers.prototype.containerType = undefined

/**
 * An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.
 * @member {String} containerSequenceNumber
 */
Containers.prototype.containerSequenceNumber = undefined

/**
 * A list of carton identifiers.
 * @member {Array.<module:vendorshipments_v1/model/ContainerIdentification>} containerIdentifiers
 */
Containers.prototype.containerIdentifiers = undefined

/**
 * The tracking number used for identifying the shipment.
 * @member {String} trackingNumber
 */
Containers.prototype.trackingNumber = undefined

/**
 * @member {module:vendorshipments_v1/model/Dimensions} dimensions
 */
Containers.prototype.dimensions = undefined

/**
 * @member {module:vendorshipments_v1/model/Weight} weight
 */
Containers.prototype.weight = undefined

/**
 * Number of layers per pallet.
 * @member {Number} tier
 */
Containers.prototype.tier = undefined

/**
 * Number of cartons per layer on the pallet.
 * @member {Number} block
 */
Containers.prototype.block = undefined

/**
 * @member {module:vendorshipments_v1/model/InnerContainersDetails} innerContainersDetails
 */
Containers.prototype.innerContainersDetails = undefined

/**
 * A list of packed items.
 * @member {Array.<module:vendorshipments_v1/model/PackedItems>} packedItems
 */
Containers.prototype.packedItems = undefined

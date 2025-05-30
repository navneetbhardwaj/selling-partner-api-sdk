/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Address } from './Address.js'
import { DestinationDetails } from './DestinationDetails.js'
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js'
import { InboundPreferences } from './InboundPreferences.js'
import { InboundStatus } from './InboundStatus.js'

/**
 * The InboundOrder model module.
 * @module awd_v2024_05_09/model/InboundOrder
 * @version 2024-05-09
 */
export class InboundOrder {
  /**
   * Constructs a new <code>InboundOrder</code>.
   * Represents an AWD inbound order.
   * @alias module:awd_v2024_05_09/model/InboundOrder
   * @class
   * @param createdAt {Date} Date when this order was created.
   * @param orderId {String} Inbound order ID.
   * @param orderStatus {module:awd_v2024_05_09/model/InboundStatus}
   * @param originAddress {module:awd_v2024_05_09/model/Address}
   * @param packagesToInbound {Array.<module:awd_v2024_05_09/model/DistributionPackageQuantity>} List of packages to be inbounded.
   */
  constructor (createdAt, orderId, orderStatus, originAddress, packagesToInbound) {
    this.createdAt = createdAt
    this.orderId = orderId
    this.orderStatus = orderStatus
    this.originAddress = originAddress
    this.packagesToInbound = packagesToInbound
  }

  /**
   * Constructs a <code>InboundOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_v2024_05_09/model/InboundOrder} obj Optional instance to populate.
   * @return {module:awd_v2024_05_09/model/InboundOrder} The populated <code>InboundOrder</code> instance.
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
      obj = obj || new InboundOrder()
      if (data.hasOwnProperty('createdAt')) { obj.createdAt = ApiClient.convertToType(data.createdAt, 'Date') }
      if (data.hasOwnProperty('destinationDetails')) { obj.destinationDetails = DestinationDetails.constructFromObject(data.destinationDetails) }
      if (data.hasOwnProperty('externalReferenceId')) { obj.externalReferenceId = ApiClient.convertToType(data.externalReferenceId, 'String') }
      if (data.hasOwnProperty('orderId')) { obj.orderId = ApiClient.convertToType(data.orderId, 'String') }
      if (data.hasOwnProperty('orderStatus')) { obj.orderStatus = InboundStatus.constructFromObject(data.orderStatus) }
      if (data.hasOwnProperty('originAddress')) { obj.originAddress = Address.constructFromObject(data.originAddress) }
      if (data.hasOwnProperty('packagesToInbound')) { obj.packagesToInbound = ApiClient.convertToType(data.packagesToInbound, [DistributionPackageQuantity]) }
      if (data.hasOwnProperty('preferences')) { obj.preferences = InboundPreferences.constructFromObject(data.preferences) }
      if (data.hasOwnProperty('updatedAt')) { obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Date') }
    }
    return obj
  }
}

/**
 * Date when this order was created.
 * @member {Date} createdAt
 */
InboundOrder.prototype.createdAt = undefined

/**
 * @member {module:awd_v2024_05_09/model/DestinationDetails} destinationDetails
 */
InboundOrder.prototype.destinationDetails = undefined

/**
 * Reference ID that can be used to correlate the order with partner resources.
 * @member {String} externalReferenceId
 */
InboundOrder.prototype.externalReferenceId = undefined

/**
 * Inbound order ID.
 * @member {String} orderId
 */
InboundOrder.prototype.orderId = undefined

/**
 * @member {module:awd_v2024_05_09/model/InboundStatus} orderStatus
 */
InboundOrder.prototype.orderStatus = undefined

/**
 * @member {module:awd_v2024_05_09/model/Address} originAddress
 */
InboundOrder.prototype.originAddress = undefined

/**
 * List of packages to be inbounded.
 * @member {Array.<module:awd_v2024_05_09/model/DistributionPackageQuantity>} packagesToInbound
 */
InboundOrder.prototype.packagesToInbound = undefined

/**
 * @member {module:awd_v2024_05_09/model/InboundPreferences} preferences
 */
InboundOrder.prototype.preferences = undefined

/**
 * Date when this order was last updated.
 * @member {Date} updatedAt
 */
InboundOrder.prototype.updatedAt = undefined

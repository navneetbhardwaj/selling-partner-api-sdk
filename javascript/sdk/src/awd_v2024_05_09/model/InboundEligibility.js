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
import { InboundEligibilityStatus } from './InboundEligibilityStatus.js'
import { OrderIneligibilityReason } from './OrderIneligibilityReason.js'
import { SkuEligibility } from './SkuEligibility.js'

/**
 * The InboundEligibility model module.
 * @module awd_v2024_05_09/model/InboundEligibility
 * @version 2024-05-09
 */
export class InboundEligibility {
  /**
   * Constructs a new <code>InboundEligibility</code>.
   * Represents the eligibility status of the inbound packages.
   * @alias module:awd_v2024_05_09/model/InboundEligibility
   * @class
   * @param packagesToInbound {Array.<module:awd_v2024_05_09/model/SkuEligibility>} Details on SKU eligibility for each inbound package.
   * @param previewedAt {Date} Timestamp when the eligibility check is performed.
   * @param status {module:awd_v2024_05_09/model/InboundEligibilityStatus}
   */
  constructor (packagesToInbound, previewedAt, status) {
    this.packagesToInbound = packagesToInbound
    this.previewedAt = previewedAt
    this.status = status
  }

  /**
   * Constructs a <code>InboundEligibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_v2024_05_09/model/InboundEligibility} obj Optional instance to populate.
   * @return {module:awd_v2024_05_09/model/InboundEligibility} The populated <code>InboundEligibility</code> instance.
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
      obj = obj || new InboundEligibility()
      if (data.hasOwnProperty('ineligibilityReasons')) { obj.ineligibilityReasons = ApiClient.convertToType(data.ineligibilityReasons, [OrderIneligibilityReason]) }
      if (data.hasOwnProperty('packagesToInbound')) { obj.packagesToInbound = ApiClient.convertToType(data.packagesToInbound, [SkuEligibility]) }
      if (data.hasOwnProperty('previewedAt')) { obj.previewedAt = ApiClient.convertToType(data.previewedAt, 'Date') }
      if (data.hasOwnProperty('status')) { obj.status = InboundEligibilityStatus.constructFromObject(data.status) }
    }
    return obj
  }
}

/**
 * If there are order level eligibility issues, then this list will contain those error codes and descriptions.
 * @member {Array.<module:awd_v2024_05_09/model/OrderIneligibilityReason>} ineligibilityReasons
 */
InboundEligibility.prototype.ineligibilityReasons = undefined

/**
 * Details on SKU eligibility for each inbound package.
 * @member {Array.<module:awd_v2024_05_09/model/SkuEligibility>} packagesToInbound
 */
InboundEligibility.prototype.packagesToInbound = undefined

/**
 * Timestamp when the eligibility check is performed.
 * @member {Date} previewedAt
 */
InboundEligibility.prototype.previewedAt = undefined

/**
 * @member {module:awd_v2024_05_09/model/InboundEligibilityStatus} status
 */
InboundEligibility.prototype.status = undefined

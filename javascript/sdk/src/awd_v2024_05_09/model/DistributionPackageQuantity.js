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
import { DistributionPackage } from './DistributionPackage.js'

/**
 * The DistributionPackageQuantity model module.
 * @module awd_v2024_05_09/model/DistributionPackageQuantity
 * @version 2024-05-09
 */
export class DistributionPackageQuantity {
  /**
   * Constructs a new <code>DistributionPackageQuantity</code>.
   * Represents a distribution package with its respective quantity.
   * @alias module:awd_v2024_05_09/model/DistributionPackageQuantity
   * @class
   * @param count {Number} Number of cases or pallets with the same package configuration.
   * @param distributionPackage {module:awd_v2024_05_09/model/DistributionPackage}
   */
  constructor (count, distributionPackage) {
    this.count = count
    this.distributionPackage = distributionPackage
  }

  /**
   * Constructs a <code>DistributionPackageQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_v2024_05_09/model/DistributionPackageQuantity} obj Optional instance to populate.
   * @return {module:awd_v2024_05_09/model/DistributionPackageQuantity} The populated <code>DistributionPackageQuantity</code> instance.
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
      obj = obj || new DistributionPackageQuantity()
      if (data.hasOwnProperty('count')) { obj.count = ApiClient.convertToType(data.count, 'Number') }
      if (data.hasOwnProperty('distributionPackage')) { obj.distributionPackage = DistributionPackage.constructFromObject(data.distributionPackage) }
    }
    return obj
  }
}

/**
 * Number of cases or pallets with the same package configuration.
 * @member {Number} count
 */
DistributionPackageQuantity.prototype.count = undefined

/**
 * @member {module:awd_v2024_05_09/model/DistributionPackage} distributionPackage
 */
DistributionPackageQuantity.prototype.distributionPackage = undefined

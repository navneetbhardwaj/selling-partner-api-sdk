/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { OperationalConfiguration } from './OperationalConfiguration.js'

/**
 * The DeliveryChannel model module.
 * @module supplysources_v2020_07_01/model/DeliveryChannel
 * @version 2020-07-01
 */
export class DeliveryChannel {
  /**
   * Constructs a new <code>DeliveryChannel</code>.
   * The delivery channel of a supply source.
   * @alias module:supplysources_v2020_07_01/model/DeliveryChannel
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>DeliveryChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplysources_v2020_07_01/model/DeliveryChannel} obj Optional instance to populate.
   * @return {module:supplysources_v2020_07_01/model/DeliveryChannel} The populated <code>DeliveryChannel</code> instance.
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
      obj = obj || new DeliveryChannel()
      if (data.hasOwnProperty('isSupported')) { obj.isSupported = ApiClient.convertToType(data.isSupported, 'Boolean') }
      if (data.hasOwnProperty('operationalConfiguration')) { obj.operationalConfiguration = OperationalConfiguration.constructFromObject(data.operationalConfiguration) }
    }
    return obj
  }
}

/**
 * @member {Boolean} isSupported
 */
DeliveryChannel.prototype.isSupported = undefined

/**
 * @member {module:supplysources_v2020_07_01/model/OperationalConfiguration} operationalConfiguration
 */
DeliveryChannel.prototype.operationalConfiguration = undefined

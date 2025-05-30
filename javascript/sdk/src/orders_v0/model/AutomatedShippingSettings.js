/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

/**
 * The AutomatedShippingSettings model module.
 * @module orders_v0/model/AutomatedShippingSettings
 * @version v0
 */
export class AutomatedShippingSettings {
  /**
   * Constructs a new <code>AutomatedShippingSettings</code>.
   * Contains information regarding the Shipping Settings Automation program, such as whether the order&#39;s shipping settings were generated automatically, and what those settings are.
   * @alias module:orders_v0/model/AutomatedShippingSettings
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>AutomatedShippingSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/AutomatedShippingSettings} obj Optional instance to populate.
   * @return {module:orders_v0/model/AutomatedShippingSettings} The populated <code>AutomatedShippingSettings</code> instance.
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
      obj = obj || new AutomatedShippingSettings()
      if (data.hasOwnProperty('HasAutomatedShippingSettings')) { obj.hasAutomatedShippingSettings = ApiClient.convertToType(data.HasAutomatedShippingSettings, 'Boolean') }
      if (data.hasOwnProperty('AutomatedCarrier')) { obj.automatedCarrier = ApiClient.convertToType(data.AutomatedCarrier, 'String') }
      if (data.hasOwnProperty('AutomatedShipMethod')) { obj.automatedShipMethod = ApiClient.convertToType(data.AutomatedShipMethod, 'String') }
    }
    return obj
  }
}

/**
 * When true, this order has automated shipping settings generated by Amazon. This order could be identified as an SSA order.
 * @member {Boolean} hasAutomatedShippingSettings
 */
AutomatedShippingSettings.prototype.hasAutomatedShippingSettings = undefined

/**
 * Auto-generated carrier for SSA orders.
 * @member {String} automatedCarrier
 */
AutomatedShippingSettings.prototype.automatedCarrier = undefined

/**
 * Auto-generated ship method for SSA orders.
 * @member {String} automatedShipMethod
 */
AutomatedShippingSettings.prototype.automatedShipMethod = undefined

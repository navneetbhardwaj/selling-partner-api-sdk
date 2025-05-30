/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { EventCode } from './EventCode.js'
import { Location } from './Location.js'
import { ShipmentType } from './ShipmentType.js'

/**
 * The Event model module.
 * @module shipping_v2/model/Event
 * @version v2
 */
export class Event {
  /**
   * Constructs a new <code>Event</code>.
   * A tracking event.
   * @alias module:shipping_v2/model/Event
   * @class
   * @param eventCode {module:shipping_v2/model/EventCode}
   * @param eventTime {Date} The ISO 8601 formatted timestamp of the event.
   */
  constructor (eventCode, eventTime) {
    this.eventCode = eventCode
    this.eventTime = eventTime
  }

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/Event} obj Optional instance to populate.
   * @return {module:shipping_v2/model/Event} The populated <code>Event</code> instance.
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
      obj = obj || new Event()
      if (data.hasOwnProperty('eventCode')) { obj.eventCode = EventCode.constructFromObject(data.eventCode) }
      if (data.hasOwnProperty('location')) { obj.location = Location.constructFromObject(data.location) }
      if (data.hasOwnProperty('eventTime')) { obj.eventTime = ApiClient.convertToType(data.eventTime, 'Date') }
      if (data.hasOwnProperty('shipmentType')) { obj.shipmentType = ShipmentType.constructFromObject(data.shipmentType) }
    }
    return obj
  }
}

/**
 * @member {module:shipping_v2/model/EventCode} eventCode
 */
Event.prototype.eventCode = undefined

/**
 * @member {module:shipping_v2/model/Location} location
 */
Event.prototype.location = undefined

/**
 * The ISO 8601 formatted timestamp of the event.
 * @member {Date} eventTime
 */
Event.prototype.eventTime = undefined

/**
 * @member {module:shipping_v2/model/ShipmentType} shipmentType
 */
Event.prototype.shipmentType = undefined

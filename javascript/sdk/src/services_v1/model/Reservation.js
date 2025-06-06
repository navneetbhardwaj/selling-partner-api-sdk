/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import { AvailabilityRecord } from './AvailabilityRecord.js'

/**
 * The Reservation model module.
 * @module services_v1/model/Reservation
 * @version v1
 */
export class Reservation {
  /**
   * Constructs a new <code>Reservation</code>.
   * Reservation object reduces the capacity of a resource.
   * @alias module:services_v1/model/Reservation
   * @class
   * @param type {module:services_v1/model/Reservation.TypeEnum} Type of reservation.
   * @param availability {module:services_v1/model/AvailabilityRecord}
   */
  constructor (type, availability) {
    this.type = type
    this.availability = availability
  }

  /**
   * Constructs a <code>Reservation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/Reservation} obj Optional instance to populate.
   * @return {module:services_v1/model/Reservation} The populated <code>Reservation</code> instance.
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
      obj = obj || new Reservation()
      if (data.hasOwnProperty('reservationId')) { obj.reservationId = ApiClient.convertToType(data.reservationId, 'String') }
      if (data.hasOwnProperty('type')) { obj.type = ApiClient.convertToType(data.type, 'String') }
      if (data.hasOwnProperty('availability')) { obj.availability = AvailabilityRecord.constructFromObject(data.availability) }
    }
    return obj
  }
}

/**
 * Unique identifier for a reservation. If present, it is treated as an update reservation request and will update the corresponding reservation. Otherwise, it is treated as a new create reservation request.
 * @member {String} reservationId
 */
Reservation.prototype.reservationId = undefined

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Reservation.TypeEnum = {

  /**
     * value: "APPOINTMENT"
     * @const
     */
  APPOINTMENT: 'APPOINTMENT',

  /**
     * value: "TRAVEL"
     * @const
     */
  TRAVEL: 'TRAVEL',

  /**
     * value: "VACATION"
     * @const
     */
  VACATION: 'VACATION',

  /**
     * value: "BREAK"
     * @const
     */
  BREAK: 'BREAK',

  /**
     * value: "TRAINING"
     * @const
     */
  TRAINING: 'TRAINING'
}

/**
 * Type of reservation.
 * @member {module:services_v1/model/Reservation.TypeEnum} type
 */
Reservation.prototype.type = undefined

/**
 * @member {module:services_v1/model/AvailabilityRecord} availability
 */
Reservation.prototype.availability = undefined

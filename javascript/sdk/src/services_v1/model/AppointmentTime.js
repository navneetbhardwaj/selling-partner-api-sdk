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

/**
 * The AppointmentTime model module.
 * @module services_v1/model/AppointmentTime
 * @version v1
 */
export class AppointmentTime {
  /**
   * Constructs a new <code>AppointmentTime</code>.
   * The time of the appointment window.
   * @alias module:services_v1/model/AppointmentTime
   * @class
   * @param startTime {Date} The date and time of the start of the appointment window in ISO 8601 format.
   * @param durationInMinutes {Number} The duration of the appointment window, in minutes.
   */
  constructor (startTime, durationInMinutes) {
    this.startTime = startTime
    this.durationInMinutes = durationInMinutes
  }

  /**
   * Constructs a <code>AppointmentTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/AppointmentTime} obj Optional instance to populate.
   * @return {module:services_v1/model/AppointmentTime} The populated <code>AppointmentTime</code> instance.
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
      obj = obj || new AppointmentTime()
      if (data.hasOwnProperty('startTime')) { obj.startTime = ApiClient.convertToType(data.startTime, 'Date') }
      if (data.hasOwnProperty('durationInMinutes')) { obj.durationInMinutes = ApiClient.convertToType(data.durationInMinutes, 'Number') }
    }
    return obj
  }
}

/**
 * The date and time of the start of the appointment window in ISO 8601 format.
 * @member {Date} startTime
 */
AppointmentTime.prototype.startTime = undefined

/**
 * The duration of the appointment window, in minutes.
 * @member {Number} durationInMinutes
 */
AppointmentTime.prototype.durationInMinutes = undefined

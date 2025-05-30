/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { HandoverMethod } from './HandoverMethod.js'

/**
 * The TimeSlot model module.
 * @module easyship_v2022_03_23/model/TimeSlot
 * @version 2022-03-23
 */
export class TimeSlot {
  /**
   * Constructs a new <code>TimeSlot</code>.
   * A time window to hand over an Easy Ship package to Amazon Logistics.
   * @alias module:easyship_v2022_03_23/model/TimeSlot
   * @class
   * @param slotId {String} A string of up to 255 characters.
   */
  constructor (slotId) {
    this.slotId = slotId
  }

  /**
   * Constructs a <code>TimeSlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyship_v2022_03_23/model/TimeSlot} obj Optional instance to populate.
   * @return {module:easyship_v2022_03_23/model/TimeSlot} The populated <code>TimeSlot</code> instance.
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
      obj = obj || new TimeSlot()
      if (data.hasOwnProperty('slotId')) { obj.slotId = ApiClient.convertToType(data.slotId, 'String') }
      if (data.hasOwnProperty('startTime')) { obj.startTime = ApiClient.convertToType(data.startTime, 'Date') }
      if (data.hasOwnProperty('endTime')) { obj.endTime = ApiClient.convertToType(data.endTime, 'Date') }
      if (data.hasOwnProperty('handoverMethod')) { obj.handoverMethod = HandoverMethod.constructFromObject(data.handoverMethod) }
    }
    return obj
  }
}

/**
 * A string of up to 255 characters.
 * @member {String} slotId
 */
TimeSlot.prototype.slotId = undefined

/**
 * A datetime value in ISO 8601 format.
 * @member {Date} startTime
 */
TimeSlot.prototype.startTime = undefined

/**
 * A datetime value in ISO 8601 format.
 * @member {Date} endTime
 */
TimeSlot.prototype.endTime = undefined

/**
 * @member {module:easyship_v2022_03_23/model/HandoverMethod} handoverMethod
 */
TimeSlot.prototype.handoverMethod = undefined

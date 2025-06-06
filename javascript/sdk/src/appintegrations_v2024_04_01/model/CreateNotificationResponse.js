/**
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * The version of the OpenAPI document: 2024-04-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The CreateNotificationResponse model module.
 * @module appintegrations_v2024_04_01/model/CreateNotificationResponse
 * @version 2024-04-01
 */
export class CreateNotificationResponse {
  /**
   * Constructs a new <code>CreateNotificationResponse</code>.
   * The response for the &#x60;createNotification&#x60; operation.
   * @alias module:appintegrations_v2024_04_01/model/CreateNotificationResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>CreateNotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:appintegrations_v2024_04_01/model/CreateNotificationResponse} obj Optional instance to populate.
   * @return {module:appintegrations_v2024_04_01/model/CreateNotificationResponse} The populated <code>CreateNotificationResponse</code> instance.
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
      obj = obj || new CreateNotificationResponse()
      if (data.hasOwnProperty('notificationId')) { obj.notificationId = ApiClient.convertToType(data.notificationId, 'String') }
    }
    return obj
  }
}

/**
 * The unique identifier assigned to each notification.
 * @member {String} notificationId
 */
CreateNotificationResponse.prototype.notificationId = undefined

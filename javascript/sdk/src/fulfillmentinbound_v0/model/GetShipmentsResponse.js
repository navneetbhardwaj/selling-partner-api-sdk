/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import { Error } from './Error.js'
import { GetShipmentsResult } from './GetShipmentsResult.js'

/**
 * The GetShipmentsResponse model module.
 * @module fulfillmentinbound_v0/model/GetShipmentsResponse
 * @version v0
 */
export class GetShipmentsResponse {
  /**
   * Constructs a new <code>GetShipmentsResponse</code>.
   * The response schema for the getShipments operation.
   * @alias module:fulfillmentinbound_v0/model/GetShipmentsResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>GetShipmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v0/model/GetShipmentsResponse} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v0/model/GetShipmentsResponse} The populated <code>GetShipmentsResponse</code> instance.
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
      obj = obj || new GetShipmentsResponse()
      if (data.hasOwnProperty('payload')) { obj.payload = GetShipmentsResult.constructFromObject(data.payload) }
      if (data.hasOwnProperty('errors')) { obj.errors = ApiClient.convertToType(data.errors, [Error]) }
    }
    return obj
  }
}

/**
 * @member {module:fulfillmentinbound_v0/model/GetShipmentsResult} payload
 */
GetShipmentsResponse.prototype.payload = undefined

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:fulfillmentinbound_v0/model/Error>} errors
 */
GetShipmentsResponse.prototype.errors = undefined

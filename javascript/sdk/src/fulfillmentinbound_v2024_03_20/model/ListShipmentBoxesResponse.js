/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Box } from './Box.js'
import { Pagination } from './Pagination.js'

/**
 * The ListShipmentBoxesResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListShipmentBoxesResponse
 * @version 2024-03-20
 */
export class ListShipmentBoxesResponse {
  /**
   * Constructs a new <code>ListShipmentBoxesResponse</code>.
   * The &#x60;listShipmentBoxes&#x60; response.
   * @alias module:fulfillmentinbound_v2024_03_20/model/ListShipmentBoxesResponse
   * @class
   * @param boxes {Array.<module:fulfillmentinbound_v2024_03_20/model/Box>} A list of boxes in a shipment.
   */
  constructor (boxes) {
    this.boxes = boxes
  }

  /**
   * Constructs a <code>ListShipmentBoxesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/ListShipmentBoxesResponse} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/ListShipmentBoxesResponse} The populated <code>ListShipmentBoxesResponse</code> instance.
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
      obj = obj || new ListShipmentBoxesResponse()
      if (data.hasOwnProperty('boxes')) { obj.boxes = ApiClient.convertToType(data.boxes, [Box]) }
      if (data.hasOwnProperty('pagination')) { obj.pagination = Pagination.constructFromObject(data.pagination) }
    }
    return obj
  }
}

/**
 * A list of boxes in a shipment.
 * @member {Array.<module:fulfillmentinbound_v2024_03_20/model/Box>} boxes
 */
ListShipmentBoxesResponse.prototype.boxes = undefined

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/Pagination} pagination
 */
ListShipmentBoxesResponse.prototype.pagination = undefined

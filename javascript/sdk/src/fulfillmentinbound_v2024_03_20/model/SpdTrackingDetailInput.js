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
import { SpdTrackingItemInput } from './SpdTrackingItemInput.js'

/**
 * The SpdTrackingDetailInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/SpdTrackingDetailInput
 * @version 2024-03-20
 */
export class SpdTrackingDetailInput {
  /**
   * Constructs a new <code>SpdTrackingDetailInput</code>.
   * Contains input information to update Small Parcel Delivery (SPD) tracking information.
   * @alias module:fulfillmentinbound_v2024_03_20/model/SpdTrackingDetailInput
   * @class
   * @param spdTrackingItems {Array.<module:fulfillmentinbound_v2024_03_20/model/SpdTrackingItemInput>} List of Small Parcel Delivery (SPD) tracking items input.
   */
  constructor (spdTrackingItems) {
    this.spdTrackingItems = spdTrackingItems
  }

  /**
   * Constructs a <code>SpdTrackingDetailInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/SpdTrackingDetailInput} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/SpdTrackingDetailInput} The populated <code>SpdTrackingDetailInput</code> instance.
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
      obj = obj || new SpdTrackingDetailInput()
      if (data.hasOwnProperty('spdTrackingItems')) { obj.spdTrackingItems = ApiClient.convertToType(data.spdTrackingItems, [SpdTrackingItemInput]) }
    }
    return obj
  }
}

/**
 * List of Small Parcel Delivery (SPD) tracking items input.
 * @member {Array.<module:fulfillmentinbound_v2024_03_20/model/SpdTrackingItemInput>} spdTrackingItems
 */
SpdTrackingDetailInput.prototype.spdTrackingItems = undefined

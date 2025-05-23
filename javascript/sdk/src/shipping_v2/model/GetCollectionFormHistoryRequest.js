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
import { Address } from './Address.js'
import { ClientReferenceDetail } from './ClientReferenceDetail.js'
import { DateRange } from './DateRange.js'

/**
 * The GetCollectionFormHistoryRequest model module.
 * @module shipping_v2/model/GetCollectionFormHistoryRequest
 * @version v2
 */
export class GetCollectionFormHistoryRequest {
  /**
   * Constructs a new <code>GetCollectionFormHistoryRequest</code>.
   * The request schema to get query collections form history API .
   * @alias module:shipping_v2/model/GetCollectionFormHistoryRequest
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>GetCollectionFormHistoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/GetCollectionFormHistoryRequest} obj Optional instance to populate.
   * @return {module:shipping_v2/model/GetCollectionFormHistoryRequest} The populated <code>GetCollectionFormHistoryRequest</code> instance.
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
      obj = obj || new GetCollectionFormHistoryRequest()
      if (data.hasOwnProperty('clientReferenceDetails')) { obj.clientReferenceDetails = ApiClient.convertToType(data.clientReferenceDetails, [ClientReferenceDetail]) }
      if (data.hasOwnProperty('maxResults')) { obj.maxResults = ApiClient.convertToType(data.maxResults, 'Number') }
      if (data.hasOwnProperty('carrierId')) { obj.carrierId = ApiClient.convertToType(data.carrierId, 'String') }
      if (data.hasOwnProperty('shipFromAddress')) { obj.shipFromAddress = Address.constructFromObject(data.shipFromAddress) }
      if (data.hasOwnProperty('dateRange')) { obj.dateRange = DateRange.constructFromObject(data.dateRange) }
    }
    return obj
  }
}

/**
 * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
 * @member {Array.<module:shipping_v2/model/ClientReferenceDetail>} clientReferenceDetails
 */
GetCollectionFormHistoryRequest.prototype.clientReferenceDetails = undefined

/**
 * max Number of Results for query .
 * @member {Number} maxResults
 */
GetCollectionFormHistoryRequest.prototype.maxResults = undefined

/**
 * The carrier identifier for the offering, provided by the carrier.
 * @member {String} carrierId
 */
GetCollectionFormHistoryRequest.prototype.carrierId = undefined

/**
 * @member {module:shipping_v2/model/Address} shipFromAddress
 */
GetCollectionFormHistoryRequest.prototype.shipFromAddress = undefined

/**
 * @member {module:shipping_v2/model/DateRange} dateRange
 */
GetCollectionFormHistoryRequest.prototype.dateRange = undefined

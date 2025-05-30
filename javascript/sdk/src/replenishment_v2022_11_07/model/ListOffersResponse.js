/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { ListOffersResponseOffer } from './ListOffersResponseOffer.js'
import { PaginationResponse } from './PaginationResponse.js'

/**
 * The ListOffersResponse model module.
 * @module replenishment_v2022_11_07/model/ListOffersResponse
 * @version 2022-11-07
 */
export class ListOffersResponse {
  /**
   * Constructs a new <code>ListOffersResponse</code>.
   * The response schema for the &#x60;listOffers&#x60; operation.
   * @alias module:replenishment_v2022_11_07/model/ListOffersResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ListOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment_v2022_11_07/model/ListOffersResponse} obj Optional instance to populate.
   * @return {module:replenishment_v2022_11_07/model/ListOffersResponse} The populated <code>ListOffersResponse</code> instance.
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
      obj = obj || new ListOffersResponse()
      if (data.hasOwnProperty('offers')) { obj.offers = ApiClient.convertToType(data.offers, [ListOffersResponseOffer]) }
      if (data.hasOwnProperty('pagination')) { obj.pagination = PaginationResponse.constructFromObject(data.pagination) }
    }
    return obj
  }
}

/**
 * A list of offers.
 * @member {Array.<module:replenishment_v2022_11_07/model/ListOffersResponseOffer>} offers
 */
ListOffersResponse.prototype.offers = undefined

/**
 * @member {module:replenishment_v2022_11_07/model/PaginationResponse} pagination
 */
ListOffersResponse.prototype.pagination = undefined

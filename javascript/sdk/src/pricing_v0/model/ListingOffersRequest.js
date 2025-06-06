/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import { BatchOffersRequestParams } from './BatchOffersRequestParams.js'
import { BatchRequest } from './BatchRequest.js'
import { CustomerType } from './CustomerType.js'
import { HttpMethod } from './HttpMethod.js'
import { ItemCondition } from './ItemCondition.js'

/**
 * The ListingOffersRequest model module.
 * @module pricing_v0/model/ListingOffersRequest
 * @version v0
 */
export class ListingOffersRequest {
  /**
   * Constructs a new <code>ListingOffersRequest</code>.
   * List of request parameters that can be accepted by &#x60;ListingOffersRequest&#x60; operation
   * @alias module:pricing_v0/model/ListingOffersRequest
   * @class
   * @implements module:pricing_v0/model/BatchRequest
   * @implements module:pricing_v0/model/BatchOffersRequestParams
   * @param uri {String} The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
   * @param method {module:pricing_v0/model/HttpMethod}
   * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace for which prices are returned.
   * @param itemCondition {module:pricing_v0/model/ItemCondition}
   */
  constructor (uri, method, marketplaceId, itemCondition) {
    BatchRequest.call(this, uri, method)
    BatchOffersRequestParams.call(this, marketplaceId, itemCondition)
    this.uri = uri
    this.method = method
    this.marketplaceId = marketplaceId
    this.itemCondition = itemCondition
  }

  /**
   * Constructs a <code>ListingOffersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/ListingOffersRequest} obj Optional instance to populate.
   * @return {module:pricing_v0/model/ListingOffersRequest} The populated <code>ListingOffersRequest</code> instance.
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
      obj = obj || new ListingOffersRequest()
      BatchRequest.constructFromObject(data, obj)
      BatchOffersRequestParams.constructFromObject(data, obj)
      if (data.hasOwnProperty('uri')) { obj.uri = ApiClient.convertToType(data.uri, 'String') }
      if (data.hasOwnProperty('method')) { obj.method = HttpMethod.constructFromObject(data.method) }
      if (data.hasOwnProperty('headers')) { obj.headers = ApiClient.convertToType(data.headers, { String: 'String' }) }
      if (data.hasOwnProperty('MarketplaceId')) { obj.marketplaceId = ApiClient.convertToType(data.MarketplaceId, 'String') }
      if (data.hasOwnProperty('ItemCondition')) { obj.itemCondition = ItemCondition.constructFromObject(data.ItemCondition) }
      if (data.hasOwnProperty('CustomerType')) { obj.customerType = CustomerType.constructFromObject(data.CustomerType) }
    }
    return obj
  }
}

/**
 * The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
 * @member {String} uri
 */
ListingOffersRequest.prototype.uri = undefined

/**
 * @member {module:pricing_v0/model/HttpMethod} method
 */
ListingOffersRequest.prototype.method = undefined

/**
 * A mapping of additional HTTP headers to send/receive for the individual batch request.
 * @member {Object.<String, String>} headers
 */
ListingOffersRequest.prototype.headers = undefined

/**
 * A marketplace identifier. Specifies the marketplace for which prices are returned.
 * @member {String} marketplaceId
 */
ListingOffersRequest.prototype.marketplaceId = undefined

/**
 * @member {module:pricing_v0/model/ItemCondition} itemCondition
 */
ListingOffersRequest.prototype.itemCondition = undefined

/**
 * @member {module:pricing_v0/model/CustomerType} customerType
 */
ListingOffersRequest.prototype.customerType = undefined

// Implement BatchRequest interface:
/**
 * The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
 * @member {String} uri
 */
BatchRequest.prototype.uri = undefined

/**
 * @member {module:pricing_v0/model/HttpMethod} method
 */
BatchRequest.prototype.method = undefined

/**
 * A mapping of additional HTTP headers to send/receive for the individual batch request.
 * @member {Object.<String, String>} headers
 */
BatchRequest.prototype.headers = undefined

// Implement BatchOffersRequestParams interface:
/**
 * A marketplace identifier. Specifies the marketplace for which prices are returned.
 * @member {String} marketplaceId
 */
BatchOffersRequestParams.prototype.marketplaceId = undefined

/**
 * @member {module:pricing_v0/model/ItemCondition} itemCondition
 */
BatchOffersRequestParams.prototype.itemCondition = undefined

/**
 * @member {module:pricing_v0/model/CustomerType} customerType
 */
BatchOffersRequestParams.prototype.customerType = undefined

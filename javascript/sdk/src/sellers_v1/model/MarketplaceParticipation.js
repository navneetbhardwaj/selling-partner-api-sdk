/**
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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
import { Marketplace } from './Marketplace.js'
import { Participation } from './Participation.js'

/**
 * The MarketplaceParticipation model module.
 * @module sellers_v1/model/MarketplaceParticipation
 * @version v1
 */
export class MarketplaceParticipation {
  /**
   * Constructs a new <code>MarketplaceParticipation</code>.
   * @alias module:sellers_v1/model/MarketplaceParticipation
   * @class
   * @param marketplace {module:sellers_v1/model/Marketplace}
   * @param participation {module:sellers_v1/model/Participation}
   * @param storeName {String} The name of the seller's store as displayed in the marketplace.
   */
  constructor (marketplace, participation, storeName) {
    this.marketplace = marketplace
    this.participation = participation
    this.storeName = storeName
  }

  /**
   * Constructs a <code>MarketplaceParticipation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellers_v1/model/MarketplaceParticipation} obj Optional instance to populate.
   * @return {module:sellers_v1/model/MarketplaceParticipation} The populated <code>MarketplaceParticipation</code> instance.
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
      obj = obj || new MarketplaceParticipation()
      if (data.hasOwnProperty('marketplace')) { obj.marketplace = Marketplace.constructFromObject(data.marketplace) }
      if (data.hasOwnProperty('participation')) { obj.participation = Participation.constructFromObject(data.participation) }
      if (data.hasOwnProperty('storeName')) { obj.storeName = ApiClient.convertToType(data.storeName, 'String') }
    }
    return obj
  }
}

/**
 * @member {module:sellers_v1/model/Marketplace} marketplace
 */
MarketplaceParticipation.prototype.marketplace = undefined

/**
 * @member {module:sellers_v1/model/Participation} participation
 */
MarketplaceParticipation.prototype.participation = undefined

/**
 * The name of the seller's store as displayed in the marketplace.
 * @member {String} storeName
 */
MarketplaceParticipation.prototype.storeName = undefined

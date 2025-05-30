/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { ItemRelationship } from './ItemRelationship.js'

/**
 * The ItemRelationshipsByMarketplace model module.
 * @module listingsitems_v2021_08_01/model/ItemRelationshipsByMarketplace
 * @version 2021-08-01
 */
export class ItemRelationshipsByMarketplace {
  /**
   * Constructs a new <code>ItemRelationshipsByMarketplace</code>.
   * Relationship details for the listing item in the specified marketplace.
   * @alias module:listingsitems_v2021_08_01/model/ItemRelationshipsByMarketplace
   * @class
   * @param marketplaceId {String} Amazon marketplace identifier.
   * @param relationships {Array.<module:listingsitems_v2021_08_01/model/ItemRelationship>} Relationships for the listing item.
   */
  constructor (marketplaceId, relationships) {
    this.marketplaceId = marketplaceId
    this.relationships = relationships
  }

  /**
   * Constructs a <code>ItemRelationshipsByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsitems_v2021_08_01/model/ItemRelationshipsByMarketplace} obj Optional instance to populate.
   * @return {module:listingsitems_v2021_08_01/model/ItemRelationshipsByMarketplace} The populated <code>ItemRelationshipsByMarketplace</code> instance.
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
      obj = obj || new ItemRelationshipsByMarketplace()
      if (data.hasOwnProperty('marketplaceId')) { obj.marketplaceId = ApiClient.convertToType(data.marketplaceId, 'String') }
      if (data.hasOwnProperty('relationships')) { obj.relationships = ApiClient.convertToType(data.relationships, [ItemRelationship]) }
    }
    return obj
  }
}

/**
 * Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
ItemRelationshipsByMarketplace.prototype.marketplaceId = undefined

/**
 * Relationships for the listing item.
 * @member {Array.<module:listingsitems_v2021_08_01/model/ItemRelationship>} relationships
 */
ItemRelationshipsByMarketplace.prototype.relationships = undefined

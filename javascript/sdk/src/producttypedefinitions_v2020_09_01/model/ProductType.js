/**
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](doc:product-type-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-09-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The ProductType model module.
 * @module producttypedefinitions_v2020_09_01/model/ProductType
 * @version 2020-09-01
 */
export class ProductType {
  /**
   * Constructs a new <code>ProductType</code>.
   * An Amazon product type with a definition available.
   * @alias module:producttypedefinitions_v2020_09_01/model/ProductType
   * @class
   * @param name {String} The name of the Amazon product type.
   * @param displayName {String} The human-readable and localized description of the Amazon product type.
   * @param marketplaceIds {Array.<String>} The Amazon marketplace identifiers for which the product type definition is available.
   */
  constructor (name, displayName, marketplaceIds) {
    this.name = name
    this.displayName = displayName
    this.marketplaceIds = marketplaceIds
  }

  /**
   * Constructs a <code>ProductType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:producttypedefinitions_v2020_09_01/model/ProductType} obj Optional instance to populate.
   * @return {module:producttypedefinitions_v2020_09_01/model/ProductType} The populated <code>ProductType</code> instance.
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
      obj = obj || new ProductType()
      if (data.hasOwnProperty('name')) { obj.name = ApiClient.convertToType(data.name, 'String') }
      if (data.hasOwnProperty('displayName')) { obj.displayName = ApiClient.convertToType(data.displayName, 'String') }
      if (data.hasOwnProperty('marketplaceIds')) { obj.marketplaceIds = ApiClient.convertToType(data.marketplaceIds, ['String']) }
    }
    return obj
  }
}

/**
 * The name of the Amazon product type.
 * @member {String} name
 */
ProductType.prototype.name = undefined

/**
 * The human-readable and localized description of the Amazon product type.
 * @member {String} displayName
 */
ProductType.prototype.displayName = undefined

/**
 * The Amazon marketplace identifiers for which the product type definition is available.
 * @member {Array.<String>} marketplaceIds
 */
ProductType.prototype.marketplaceIds = undefined

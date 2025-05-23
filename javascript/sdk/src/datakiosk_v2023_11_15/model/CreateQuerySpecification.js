/**
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The CreateQuerySpecification model module.
 * @module datakiosk_v2023_11_15/model/CreateQuerySpecification
 * @version 2023-11-15
 */
export class CreateQuerySpecification {
  /**
   * Constructs a new <code>CreateQuerySpecification</code>.
   * Information required to create the query.
   * @alias module:datakiosk_v2023_11_15/model/CreateQuerySpecification
   * @class
   * @param query {String} The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed.
   */
  constructor (query) {
    this.query = query
  }

  /**
   * Constructs a <code>CreateQuerySpecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:datakiosk_v2023_11_15/model/CreateQuerySpecification} obj Optional instance to populate.
   * @return {module:datakiosk_v2023_11_15/model/CreateQuerySpecification} The populated <code>CreateQuerySpecification</code> instance.
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
      obj = obj || new CreateQuerySpecification()
      if (data.hasOwnProperty('query')) { obj.query = ApiClient.convertToType(data.query, 'String') }
      if (data.hasOwnProperty('paginationToken')) { obj.paginationToken = ApiClient.convertToType(data.paginationToken, 'String') }
    }
    return obj
  }
}

/**
 * The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed.
 * @member {String} query
 */
CreateQuerySpecification.prototype.query = undefined

/**
 * A token to fetch a certain page of query results when there are multiple pages of query results available. The value of this token must be fetched from the `pagination.nextToken` field of the `Query` object, and the `query` field for this object must also be set to the `query` field of the same `Query` object. A `Query` object can be retrieved from either the `getQueries` or `getQuery` operation. In the absence of this token value, the first page of query results will be requested.
 * @member {String} paginationToken
 */
CreateQuerySpecification.prototype.paginationToken = undefined

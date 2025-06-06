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
import { CreateQueryResponse } from '../model/CreateQueryResponse.js'
import { CreateQuerySpecification } from '../model/CreateQuerySpecification.js'
import { ErrorList } from '../model/ErrorList.js'
import { GetDocumentResponse } from '../model/GetDocumentResponse.js'
import { GetQueriesResponse } from '../model/GetQueriesResponse.js'
import { Query } from '../model/Query.js'
import { SuperagentRateLimiter } from '../../../helper/SuperagentRateLimiter.mjs'
import { DefaultRateLimitFetcher } from '../../../helper/DefaultRateLimitFetcher.mjs'

/**
* Queries service.
* @module datakiosk_v2023_11_15/api/QueriesApi
* @version 2023-11-15
*/
export class QueriesApi {
  // Private memeber stores the default rate limiters
  #defaultRateLimiterMap

  /**
    * Constructs a new QueriesApi.
    * @alias module:datakiosk_v2023_11_15/api/QueriesApi
    * @class
    * @param {module:datakiosk_v2023_11_15/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:datakiosk_v2023_11_15/ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
    this.initializeDefaultRateLimiterMap()
  }

  /**
     * Initialize rate limiters for API operations
     */
  initializeDefaultRateLimiterMap () {
    this.#defaultRateLimiterMap = new Map()
    const defaultRateLimitFetcher = new DefaultRateLimitFetcher()
    const operations = [
      'QueriesApi-cancelQuery',
      'QueriesApi-createQuery',
      'QueriesApi-getDocument',
      'QueriesApi-getQueries',
      'QueriesApi-getQuery'
    ]

    for (const operation of operations) {
      const config = defaultRateLimitFetcher.getLimit(operation)
      this.#defaultRateLimiterMap.set(operation, new SuperagentRateLimiter(config))
    }
  }

  /**
     * Get rate limiter for a specific operation
     * @param {String} operation name
     */
  getRateLimiter (operation) {
    return this.#defaultRateLimiterMap.get(operation)
  }

  /**
     * Cancels the query specified by the &#x60;queryId&#x60; parameter. Only queries with a non-terminal &#x60;processingStatus&#x60; (&#x60;IN_QUEUE&#x60;, &#x60;IN_PROGRESS&#x60;) can be cancelled. Cancelling a query that already has a &#x60;processingStatus&#x60; of &#x60;CANCELLED&#x60; will no-op. Cancelled queries are returned in subsequent calls to the &#x60;getQuery&#x60; and &#x60;getQueries&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  cancelQueryWithHttpInfo (queryId) {
    const postBody = null

    // verify the required parameter 'queryId' is set
    if (queryId === undefined || queryId === null) {
      throw new Error("Missing the required parameter 'queryId' when calling cancelQuery")
    }

    const pathParams = {
      queryId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = null

    return this.apiClient.callApi('QueriesApi-cancelQuery',
      '/dataKiosk/2023-11-15/queries/{queryId}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('QueriesApi-cancelQuery')
    )
  }

  /**
     * Cancels the query specified by the &#x60;queryId&#x60; parameter. Only queries with a non-terminal &#x60;processingStatus&#x60; (&#x60;IN_QUEUE&#x60;, &#x60;IN_PROGRESS&#x60;) can be cancelled. Cancelling a query that already has a &#x60;processingStatus&#x60; of &#x60;CANCELLED&#x60; will no-op. Cancelled queries are returned in subsequent calls to the &#x60;getQuery&#x60; and &#x60;getQueries&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  cancelQuery (queryId) {
    return this.cancelQueryWithHttpInfo(queryId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a &#x60;@resultRetention&#x60; directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query&#39;s resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:datakiosk_v2023_11_15/model/CreateQuerySpecification} body The body of the request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:datakiosk_v2023_11_15/model/CreateQueryResponse} and HTTP response
     */
  createQueryWithHttpInfo (body) {
    const postBody = body

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createQuery")
    }

    const pathParams = {
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = ['application/json']
    const accepts = ['application/json']
    const returnType = CreateQueryResponse

    return this.apiClient.callApi('QueriesApi-createQuery',
      '/dataKiosk/2023-11-15/queries', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('QueriesApi-createQuery')
    )
  }

  /**
     * Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a &#x60;@resultRetention&#x60; directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query&#39;s resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:datakiosk_v2023_11_15/model/CreateQuerySpecification} body The body of the request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:datakiosk_v2023_11_15/model/CreateQueryResponse}
     */
  createQuery (body) {
    return this.createQueryWithHttpInfo(body)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns the information required for retrieving a Data Kiosk document&#39;s contents. See the &#x60;createQuery&#x60; operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} documentId The identifier for the Data Kiosk document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:datakiosk_v2023_11_15/model/GetDocumentResponse} and HTTP response
     */
  getDocumentWithHttpInfo (documentId) {
    const postBody = null

    // verify the required parameter 'documentId' is set
    if (documentId === undefined || documentId === null) {
      throw new Error("Missing the required parameter 'documentId' when calling getDocument")
    }

    const pathParams = {
      documentId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = GetDocumentResponse

    return this.apiClient.callApi('QueriesApi-getDocument',
      '/dataKiosk/2023-11-15/documents/{documentId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('QueriesApi-getDocument')
    )
  }

  /**
     * Returns the information required for retrieving a Data Kiosk document&#39;s contents. See the &#x60;createQuery&#x60; operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} documentId The identifier for the Data Kiosk document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:datakiosk_v2023_11_15/model/GetDocumentResponse}
     */
  getDocument (documentId) {
    return this.getDocumentWithHttpInfo(documentId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns details for the Data Kiosk queries that match the specified filters. See the &#x60;createQuery&#x60; operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {Array.<module:datakiosk_v2023_11_15/model/String>} opts.processingStatuses A list of processing statuses used to filter queries.
     * @param {Number} opts.pageSize The maximum number of queries to return in a single call. (default to 10)
     * @param {Date} opts.createdSince The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
     * @param {Date} opts.createdUntil The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the &#x60;getQueries&#x60; request.
     * @param {String} opts.paginationToken A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the &#x60;pagination.nextToken&#x60; field returned in the &#x60;GetQueriesResponse&#x60; object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of &#x60;pageSize&#x60; which can be modified between calls to &#x60;getQueries&#x60;. In the absence of this token value, &#x60;getQueries&#x60; returns the first page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:datakiosk_v2023_11_15/model/GetQueriesResponse} and HTTP response
     */
  getQueriesWithHttpInfo (opts) {
    opts = opts || {}
    const postBody = null

    const pathParams = {
    }
    const queryParams = {
      processingStatuses: this.apiClient.buildCollectionParam(opts.processingStatuses, 'csv'),
      pageSize: opts.pageSize,
      createdSince: opts.createdSince,
      createdUntil: opts.createdUntil,
      paginationToken: opts.paginationToken
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = GetQueriesResponse

    return this.apiClient.callApi('QueriesApi-getQueries',
      '/dataKiosk/2023-11-15/queries', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('QueriesApi-getQueries')
    )
  }

  /**
     * Returns details for the Data Kiosk queries that match the specified filters. See the &#x60;createQuery&#x60; operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {Array.<module:datakiosk_v2023_11_15/model/String>} opts.processingStatuses A list of processing statuses used to filter queries.
     * @param {Number} opts.pageSize The maximum number of queries to return in a single call. (default to 10)
     * @param {Date} opts.createdSince The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
     * @param {Date} opts.createdUntil The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the &#x60;getQueries&#x60; request.
     * @param {String} opts.paginationToken A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the &#x60;pagination.nextToken&#x60; field returned in the &#x60;GetQueriesResponse&#x60; object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of &#x60;pageSize&#x60; which can be modified between calls to &#x60;getQueries&#x60;. In the absence of this token value, &#x60;getQueries&#x60; returns the first page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:datakiosk_v2023_11_15/model/GetQueriesResponse}
     */
  getQueries (opts) {
    return this.getQueriesWithHttpInfo(opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns query details for the query specified by the &#x60;queryId&#x60; parameter. See the &#x60;createQuery&#x60; operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The query identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:datakiosk_v2023_11_15/model/Query} and HTTP response
     */
  getQueryWithHttpInfo (queryId) {
    const postBody = null

    // verify the required parameter 'queryId' is set
    if (queryId === undefined || queryId === null) {
      throw new Error("Missing the required parameter 'queryId' when calling getQuery")
    }

    const pathParams = {
      queryId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = Query

    return this.apiClient.callApi('QueriesApi-getQuery',
      '/dataKiosk/2023-11-15/queries/{queryId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('QueriesApi-getQuery')
    )
  }

  /**
     * Returns query details for the query specified by the &#x60;queryId&#x60; parameter. See the &#x60;createQuery&#x60; operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The query identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:datakiosk_v2023_11_15/model/Query}
     */
  getQuery (queryId) {
    return this.getQueryWithHttpInfo(queryId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}

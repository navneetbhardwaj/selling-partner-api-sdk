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
import { ErrorList } from '../model/ErrorList.js'
import { GetSellingPartnerMetricsRequest } from '../model/GetSellingPartnerMetricsRequest.js'
import { GetSellingPartnerMetricsResponse } from '../model/GetSellingPartnerMetricsResponse.js'
import { SuperagentRateLimiter } from '../../../helper/SuperagentRateLimiter.mjs'
import { DefaultRateLimitFetcher } from '../../../helper/DefaultRateLimitFetcher.mjs'

/**
* Sellingpartners service.
* @module replenishment_v2022_11_07/api/SellingpartnersApi
* @version 2022-11-07
*/
export class SellingpartnersApi {
  // Private memeber stores the default rate limiters
  #defaultRateLimiterMap

  /**
    * Constructs a new SellingpartnersApi.
    * @alias module:replenishment_v2022_11_07/api/SellingpartnersApi
    * @class
    * @param {module:replenishment_v2022_11_07/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:replenishment_v2022_11_07/ApiClient#instance} if unspecified.
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
      'SellingpartnersApi-getSellingPartnerMetrics'
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
     * Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:replenishment_v2022_11_07/model/GetSellingPartnerMetricsRequest} opts.body The request body for the &#x60;getSellingPartnerMetrics&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:replenishment_v2022_11_07/model/GetSellingPartnerMetricsResponse} and HTTP response
     */
  getSellingPartnerMetricsWithHttpInfo (opts) {
    opts = opts || {}
    const postBody = opts.body

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
    const returnType = GetSellingPartnerMetricsResponse

    return this.apiClient.callApi('SellingpartnersApi-getSellingPartnerMetrics',
      '/replenishment/2022-11-07/sellingPartners/metrics/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('SellingpartnersApi-getSellingPartnerMetrics')
    )
  }

  /**
     * Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:replenishment_v2022_11_07/model/GetSellingPartnerMetricsRequest} opts.body The request body for the &#x60;getSellingPartnerMetrics&#x60; operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:replenishment_v2022_11_07/model/GetSellingPartnerMetricsResponse}
     */
  getSellingPartnerMetrics (opts) {
    return this.getSellingPartnerMetricsWithHttpInfo(opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}

/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { CompetitiveSummaryBatchRequest } from '../model/CompetitiveSummaryBatchRequest.js'
import { CompetitiveSummaryBatchResponse } from '../model/CompetitiveSummaryBatchResponse.js'
import { Errors } from '../model/Errors.js'
import { GetFeaturedOfferExpectedPriceBatchRequest } from '../model/GetFeaturedOfferExpectedPriceBatchRequest.js'
import { GetFeaturedOfferExpectedPriceBatchResponse } from '../model/GetFeaturedOfferExpectedPriceBatchResponse.js'
import { SuperagentRateLimiter } from '../../../helper/SuperagentRateLimiter.mjs'
import { DefaultRateLimitFetcher } from '../../../helper/DefaultRateLimitFetcher.mjs'

/**
* ProductPricing service.
* @module pricing_v2022_05_01/api/ProductPricingApi
* @version 2022-05-01
*/
export class ProductPricingApi {
  // Private memeber stores the default rate limiters
  #defaultRateLimiterMap

  /**
    * Constructs a new ProductPricingApi.
    * @alias module:pricing_v2022_05_01/api/ProductPricingApi
    * @class
    * @param {module:pricing_v2022_05_01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:pricing_v2022_05_01/ApiClient#instance} if unspecified.
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
      'ProductPricingApi-getCompetitiveSummary',
      'ProductPricingApi-getFeaturedOfferExpectedPriceBatch'
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
     * Returns the competitive summary response, including featured buying options for the ASIN and &#x60;marketplaceId&#x60; combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
     * @param {module:pricing_v2022_05_01/model/CompetitiveSummaryBatchRequest} requests The batch of &#x60;getCompetitiveSummary&#x60; requests.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:pricing_v2022_05_01/model/CompetitiveSummaryBatchResponse} and HTTP response
     */
  getCompetitiveSummaryWithHttpInfo (requests) {
    const postBody = requests

    // verify the required parameter 'requests' is set
    if (requests === undefined || requests === null) {
      throw new Error("Missing the required parameter 'requests' when calling getCompetitiveSummary")
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
    const returnType = CompetitiveSummaryBatchResponse

    return this.apiClient.callApi('ProductPricingApi-getCompetitiveSummary',
      '/batches/products/pricing/2022-05-01/items/competitiveSummary', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('ProductPricingApi-getCompetitiveSummary')
    )
  }

  /**
     * Returns the competitive summary response, including featured buying options for the ASIN and &#x60;marketplaceId&#x60; combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
     * @param {module:pricing_v2022_05_01/model/CompetitiveSummaryBatchRequest} requests The batch of &#x60;getCompetitiveSummary&#x60; requests.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:pricing_v2022_05_01/model/CompetitiveSummaryBatchResponse}
     */
  getCompetitiveSummary (requests) {
    return this.getCompetitiveSummaryWithHttpInfo(requests)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
     * @param {module:pricing_v2022_05_01/model/GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:pricing_v2022_05_01/model/GetFeaturedOfferExpectedPriceBatchResponse} and HTTP response
     */
  getFeaturedOfferExpectedPriceBatchWithHttpInfo (getFeaturedOfferExpectedPriceBatchRequestBody) {
    const postBody = getFeaturedOfferExpectedPriceBatchRequestBody

    // verify the required parameter 'getFeaturedOfferExpectedPriceBatchRequestBody' is set
    if (getFeaturedOfferExpectedPriceBatchRequestBody === undefined || getFeaturedOfferExpectedPriceBatchRequestBody === null) {
      throw new Error("Missing the required parameter 'getFeaturedOfferExpectedPriceBatchRequestBody' when calling getFeaturedOfferExpectedPriceBatch")
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
    const returnType = GetFeaturedOfferExpectedPriceBatchResponse

    return this.apiClient.callApi('ProductPricingApi-getFeaturedOfferExpectedPriceBatch',
      '/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('ProductPricingApi-getFeaturedOfferExpectedPriceBatch')
    )
  }

  /**
     * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
     * @param {module:pricing_v2022_05_01/model/GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:pricing_v2022_05_01/model/GetFeaturedOfferExpectedPriceBatchResponse}
     */
  getFeaturedOfferExpectedPriceBatch (getFeaturedOfferExpectedPriceBatchRequestBody) {
    return this.getFeaturedOfferExpectedPriceBatchWithHttpInfo(getFeaturedOfferExpectedPriceBatchRequestBody)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}

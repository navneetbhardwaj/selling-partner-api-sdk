/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import { FeesEstimateByIdRequest } from '../model/FeesEstimateByIdRequest.js'
import { FeesEstimateResult } from '../model/FeesEstimateResult.js'
import { GetMyFeesEstimateRequest } from '../model/GetMyFeesEstimateRequest.js'
import { GetMyFeesEstimateResponse } from '../model/GetMyFeesEstimateResponse.js'
import { GetMyFeesEstimatesErrorList } from '../model/GetMyFeesEstimatesErrorList.js'
import { SuperagentRateLimiter } from '../../../helper/SuperagentRateLimiter.mjs'
import { DefaultRateLimitFetcher } from '../../../helper/DefaultRateLimitFetcher.mjs'

/**
* Fees service.
* @module productfees_v0/api/FeesApi
* @version v0
*/
export class FeesApi {
  // Private memeber stores the default rate limiters
  #defaultRateLimiterMap

  /**
    * Constructs a new FeesApi.
    * @alias module:productfees_v0/api/FeesApi
    * @class
    * @param {module:productfees_v0/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:productfees_v0/ApiClient#instance} if unspecified.
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
      'FeesApi-getMyFeesEstimateForASIN',
      'FeesApi-getMyFeesEstimateForSKU',
      'FeesApi-getMyFeesEstimates'
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
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee estimates might be different. This is because these estimates use the item&#39;s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {module:productfees_v0/model/GetMyFeesEstimateRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:productfees_v0/model/GetMyFeesEstimateResponse} and HTTP response
     */
  getMyFeesEstimateForASINWithHttpInfo (asin, body) {
    const postBody = body

    // verify the required parameter 'asin' is set
    if (asin === undefined || asin === null) {
      throw new Error("Missing the required parameter 'asin' when calling getMyFeesEstimateForASIN")
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling getMyFeesEstimateForASIN")
    }

    const pathParams = {
      Asin: asin
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = ['application/json']
    const accepts = ['application/json']
    const returnType = GetMyFeesEstimateResponse

    return this.apiClient.callApi('FeesApi-getMyFeesEstimateForASIN',
      '/products/fees/v0/items/{Asin}/feesEstimate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('FeesApi-getMyFeesEstimateForASIN')
    )
  }

  /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee estimates might be different. This is because these estimates use the item&#39;s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {module:productfees_v0/model/GetMyFeesEstimateRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:productfees_v0/model/GetMyFeesEstimateResponse}
     */
  getMyFeesEstimateForASIN (asin, body) {
    return this.getMyFeesEstimateForASINWithHttpInfo(asin, body)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on real item measurements, but only after they&#39;ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit.
     * @param {module:productfees_v0/model/GetMyFeesEstimateRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:productfees_v0/model/GetMyFeesEstimateResponse} and HTTP response
     */
  getMyFeesEstimateForSKUWithHttpInfo (sellerSKU, body) {
    const postBody = body

    // verify the required parameter 'sellerSKU' is set
    if (sellerSKU === undefined || sellerSKU === null) {
      throw new Error("Missing the required parameter 'sellerSKU' when calling getMyFeesEstimateForSKU")
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling getMyFeesEstimateForSKU")
    }

    const pathParams = {
      SellerSKU: sellerSKU
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = ['application/json']
    const accepts = ['application/json']
    const returnType = GetMyFeesEstimateResponse

    return this.apiClient.callApi('FeesApi-getMyFeesEstimateForSKU',
      '/products/fees/v0/listings/{SellerSKU}/feesEstimate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('FeesApi-getMyFeesEstimateForSKU')
    )
  }

  /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets the item&#39;s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on real item measurements, but only after they&#39;ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit.
     * @param {module:productfees_v0/model/GetMyFeesEstimateRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:productfees_v0/model/GetMyFeesEstimateResponse}
     */
  getMyFeesEstimateForSKU (sellerSKU, body) {
    return this.getMyFeesEstimateForSKUWithHttpInfo(sellerSKU, body)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<module:productfees_v0/model/FeesEstimateByIdRequest>} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:productfees_v0/model/FeesEstimateResult>} and HTTP response
     */
  getMyFeesEstimatesWithHttpInfo (body) {
    const postBody = body

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling getMyFeesEstimates")
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
    const returnType = [FeesEstimateResult]

    return this.apiClient.callApi('FeesApi-getMyFeesEstimates',
      '/products/fees/v0/feesEstimate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('FeesApi-getMyFeesEstimates')
    )
  }

  /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<module:productfees_v0/model/FeesEstimateByIdRequest>} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:productfees_v0/model/FeesEstimateResult>}
     */
  getMyFeesEstimates (body) {
    return this.getMyFeesEstimatesWithHttpInfo(body)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}

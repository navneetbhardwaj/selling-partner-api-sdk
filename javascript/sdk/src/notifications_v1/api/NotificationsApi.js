/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
import { CreateDestinationRequest } from '../model/CreateDestinationRequest.js'
import { CreateDestinationResponse } from '../model/CreateDestinationResponse.js'
import { CreateSubscriptionRequest } from '../model/CreateSubscriptionRequest.js'
import { CreateSubscriptionResponse } from '../model/CreateSubscriptionResponse.js'
import { DeleteDestinationResponse } from '../model/DeleteDestinationResponse.js'
import { DeleteSubscriptionByIdResponse } from '../model/DeleteSubscriptionByIdResponse.js'
import { GetDestinationResponse } from '../model/GetDestinationResponse.js'
import { GetDestinationsResponse } from '../model/GetDestinationsResponse.js'
import { GetSubscriptionByIdResponse } from '../model/GetSubscriptionByIdResponse.js'
import { GetSubscriptionResponse } from '../model/GetSubscriptionResponse.js'
import { SuperagentRateLimiter } from '../../../helper/SuperagentRateLimiter.mjs'
import { DefaultRateLimitFetcher } from '../../../helper/DefaultRateLimitFetcher.mjs'

/**
* Notifications service.
* @module notifications_v1/api/NotificationsApi
* @version v1
*/
export class NotificationsApi {
  // Private memeber stores the default rate limiters
  #defaultRateLimiterMap

  /**
    * Constructs a new NotificationsApi.
    * @alias module:notifications_v1/api/NotificationsApi
    * @class
    * @param {module:notifications_v1/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:notifications_v1/ApiClient#instance} if unspecified.
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
      'NotificationsApi-createDestination',
      'NotificationsApi-createSubscription',
      'NotificationsApi-deleteDestination',
      'NotificationsApi-deleteSubscriptionById',
      'NotificationsApi-getDestination',
      'NotificationsApi-getDestinations',
      'NotificationsApi-getSubscription',
      'NotificationsApi-getSubscriptionById'
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
     * Creates a destination resource to receive notifications. The &#x60;createDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:notifications_v1/model/CreateDestinationRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/CreateDestinationResponse} and HTTP response
     */
  createDestinationWithHttpInfo (body) {
    const postBody = body

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createDestination")
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
    const accepts = ['application/json', 'Successful Response']
    const returnType = CreateDestinationResponse

    return this.apiClient.callApi('NotificationsApi-createDestination',
      '/notifications/v1/destinations', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-createDestination')
    )
  }

  /**
     * Creates a destination resource to receive notifications. The &#x60;createDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:notifications_v1/model/CreateDestinationRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/CreateDestinationResponse}
     */
  createDestination (body) {
    return this.createDestinationWithHttpInfo(body)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the &#x60;createDestination&#x60; operation. In cases where the specified notification type supports multiple payload versions, you can utilize this API to subscribe to a different payload version if you already have an existing subscription for a different payload version.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @param {module:notifications_v1/model/CreateSubscriptionRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/CreateSubscriptionResponse} and HTTP response
     */
  createSubscriptionWithHttpInfo (notificationType, body) {
    const postBody = body

    // verify the required parameter 'notificationType' is set
    if (notificationType === undefined || notificationType === null) {
      throw new Error("Missing the required parameter 'notificationType' when calling createSubscription")
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createSubscription")
    }

    const pathParams = {
      notificationType
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = ['application/json']
    const accepts = ['application/json', 'Successful Response']
    const returnType = CreateSubscriptionResponse

    return this.apiClient.callApi('NotificationsApi-createSubscription',
      '/notifications/v1/subscriptions/{notificationType}', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-createSubscription')
    )
  }

  /**
     * Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the &#x60;createDestination&#x60; operation. In cases where the specified notification type supports multiple payload versions, you can utilize this API to subscribe to a different payload version if you already have an existing subscription for a different payload version.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @param {module:notifications_v1/model/CreateSubscriptionRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/CreateSubscriptionResponse}
     */
  createSubscription (notificationType, body) {
    return this.createSubscriptionWithHttpInfo(notificationType, body)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Deletes the destination that you specify. The &#x60;deleteDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} destinationId The identifier for the destination that you want to delete.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/DeleteDestinationResponse} and HTTP response
     */
  deleteDestinationWithHttpInfo (destinationId) {
    const postBody = null

    // verify the required parameter 'destinationId' is set
    if (destinationId === undefined || destinationId === null) {
      throw new Error("Missing the required parameter 'destinationId' when calling deleteDestination")
    }

    const pathParams = {
      destinationId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json', 'Successful Response']
    const returnType = DeleteDestinationResponse

    return this.apiClient.callApi('NotificationsApi-deleteDestination',
      '/notifications/v1/destinations/{destinationId}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-deleteDestination')
    )
  }

  /**
     * Deletes the destination that you specify. The &#x60;deleteDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} destinationId The identifier for the destination that you want to delete.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/DeleteDestinationResponse}
     */
  deleteDestination (destinationId) {
    return this.deleteDestinationWithHttpInfo(destinationId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The &#x60;deleteSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} subscriptionId The identifier for the subscription that you want to delete.
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/DeleteSubscriptionByIdResponse} and HTTP response
     */
  deleteSubscriptionByIdWithHttpInfo (subscriptionId, notificationType) {
    const postBody = null

    // verify the required parameter 'subscriptionId' is set
    if (subscriptionId === undefined || subscriptionId === null) {
      throw new Error("Missing the required parameter 'subscriptionId' when calling deleteSubscriptionById")
    }

    // verify the required parameter 'notificationType' is set
    if (notificationType === undefined || notificationType === null) {
      throw new Error("Missing the required parameter 'notificationType' when calling deleteSubscriptionById")
    }

    const pathParams = {
      subscriptionId,
      notificationType
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json', 'Successful Operation Response']
    const returnType = DeleteSubscriptionByIdResponse

    return this.apiClient.callApi('NotificationsApi-deleteSubscriptionById',
      '/notifications/v1/subscriptions/{notificationType}/{subscriptionId}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-deleteSubscriptionById')
    )
  }

  /**
     * Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The &#x60;deleteSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} subscriptionId The identifier for the subscription that you want to delete.
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/DeleteSubscriptionByIdResponse}
     */
  deleteSubscriptionById (subscriptionId, notificationType) {
    return this.deleteSubscriptionByIdWithHttpInfo(subscriptionId, notificationType)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns information about the destination that you specify. The &#x60;getDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} destinationId The identifier generated when you created the destination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/GetDestinationResponse} and HTTP response
     */
  getDestinationWithHttpInfo (destinationId) {
    const postBody = null

    // verify the required parameter 'destinationId' is set
    if (destinationId === undefined || destinationId === null) {
      throw new Error("Missing the required parameter 'destinationId' when calling getDestination")
    }

    const pathParams = {
      destinationId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json', 'Successful Response']
    const returnType = GetDestinationResponse

    return this.apiClient.callApi('NotificationsApi-getDestination',
      '/notifications/v1/destinations/{destinationId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-getDestination')
    )
  }

  /**
     * Returns information about the destination that you specify. The &#x60;getDestination&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} destinationId The identifier generated when you created the destination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/GetDestinationResponse}
     */
  getDestination (destinationId) {
    return this.getDestinationWithHttpInfo(destinationId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns information about all destinations. The &#x60;getDestinations&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/GetDestinationsResponse} and HTTP response
     */
  getDestinationsWithHttpInfo () {
    const postBody = null

    const pathParams = {
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json', 'Successful Response']
    const returnType = GetDestinationsResponse

    return this.apiClient.callApi('NotificationsApi-getDestinations',
      '/notifications/v1/destinations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-getDestinations')
    )
  }

  /**
     * Returns information about all destinations. The &#x60;getDestinations&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/GetDestinationsResponse}
     */
  getDestinations () {
    return this.getDestinationsWithHttpInfo()
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns information about subscription of the specified notification type and payload version. &#x60;payloadVersion&#x60; is an optional parameter. When &#x60;payloadVersion&#x60; is not provided, it will return latest payload version subscription&#39;s information. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @param {Object} opts Optional parameters
     * @param {String} opts.payloadVersion The version of the payload object to be used in the notification.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/GetSubscriptionResponse} and HTTP response
     */
  getSubscriptionWithHttpInfo (notificationType, opts) {
    opts = opts || {}
    const postBody = null

    // verify the required parameter 'notificationType' is set
    if (notificationType === undefined || notificationType === null) {
      throw new Error("Missing the required parameter 'notificationType' when calling getSubscription")
    }

    const pathParams = {
      notificationType
    }
    const queryParams = {
      payloadVersion: opts.payloadVersion
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json', 'Successful Response']
    const returnType = GetSubscriptionResponse

    return this.apiClient.callApi('NotificationsApi-getSubscription',
      '/notifications/v1/subscriptions/{notificationType}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-getSubscription')
    )
  }

  /**
     * Returns information about subscription of the specified notification type and payload version. &#x60;payloadVersion&#x60; is an optional parameter. When &#x60;payloadVersion&#x60; is not provided, it will return latest payload version subscription&#39;s information. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @param {Object} opts Optional parameters
     * @param {String} opts.payloadVersion The version of the payload object to be used in the notification.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/GetSubscriptionResponse}
     */
  getSubscription (notificationType, opts) {
    return this.getSubscriptionWithHttpInfo(notificationType, opts)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Returns information about a subscription for the specified notification type. The &#x60;getSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} subscriptionId The identifier for the subscription that you want to get.
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:notifications_v1/model/GetSubscriptionByIdResponse} and HTTP response
     */
  getSubscriptionByIdWithHttpInfo (subscriptionId, notificationType) {
    const postBody = null

    // verify the required parameter 'subscriptionId' is set
    if (subscriptionId === undefined || subscriptionId === null) {
      throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscriptionById")
    }

    // verify the required parameter 'notificationType' is set
    if (notificationType === undefined || notificationType === null) {
      throw new Error("Missing the required parameter 'notificationType' when calling getSubscriptionById")
    }

    const pathParams = {
      subscriptionId,
      notificationType
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json', 'Successful Response']
    const returnType = GetSubscriptionByIdResponse

    return this.apiClient.callApi('NotificationsApi-getSubscriptionById',
      '/notifications/v1/subscriptions/{notificationType}/{subscriptionId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('NotificationsApi-getSubscriptionById')
    )
  }

  /**
     * Returns information about a subscription for the specified notification type. The &#x60;getSubscriptionById&#x60; operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} subscriptionId The identifier for the subscription that you want to get.
     * @param {String} notificationType The type of notification.   For more information about notification types, refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:notifications_v1/model/GetSubscriptionByIdResponse}
     */
  getSubscriptionById (subscriptionId, notificationType) {
    return this.getSubscriptionByIdWithHttpInfo(subscriptionId, notificationType)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}

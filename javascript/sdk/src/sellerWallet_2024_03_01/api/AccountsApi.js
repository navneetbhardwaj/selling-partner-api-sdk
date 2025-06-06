/**
 * The Selling Partner API for Amazon Seller Wallet Open Banking API
 * The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller's Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.
 *
 * The version of the OpenAPI document: 2024-03-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { BalanceListing } from '../model/BalanceListing.js'
import { BankAccount } from '../model/BankAccount.js'
import { BankAccountListing } from '../model/BankAccountListing.js'
import { ErrorList } from '../model/ErrorList.js'
import { SuperagentRateLimiter } from '../../../helper/SuperagentRateLimiter.mjs'
import { DefaultRateLimitFetcher } from '../../../helper/DefaultRateLimitFetcher.mjs'

/**
* Accounts service.
* @module sellerWallet_2024_03_01/api/AccountsApi
* @version 2024-03-01
*/
export class AccountsApi {
  // Private memeber stores the default rate limiters
  #defaultRateLimiterMap

  /**
    * Constructs a new AccountsApi.
    * @alias module:sellerWallet_2024_03_01/api/AccountsApi
    * @class
    * @param {module:sellerWallet_2024_03_01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sellerWallet_2024_03_01/ApiClient#instance} if unspecified.
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
      'AccountsApi-getAccount',
      'AccountsApi-listAccountBalances',
      'AccountsApi-listAccounts'
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
     * Find particular Amazon Seller Wallet account by Amazon account identifier
     * Retrieve an Amazon Seller Wallet bank account by Amazon account identifier.
     * @param {String} accountId The ID of the Amazon Seller Wallet account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sellerWallet_2024_03_01/model/BankAccount} and HTTP response
     */
  getAccountWithHttpInfo (accountId) {
    const postBody = null

    // verify the required parameter 'accountId' is set
    if (accountId === undefined || accountId === null) {
      throw new Error("Missing the required parameter 'accountId' when calling getAccount")
    }

    const pathParams = {
      accountId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = BankAccount

    return this.apiClient.callApi('AccountsApi-getAccount',
      '/finances/transfers/wallet/2024-03-01/accounts/{accountId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('AccountsApi-getAccount')
    )
  }

  /**
     * Find particular Amazon Seller Wallet account by Amazon account identifier
     * Retrieve an Amazon Seller Wallet bank account by Amazon account identifier.
     * @param {String} accountId The ID of the Amazon Seller Wallet account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sellerWallet_2024_03_01/model/BankAccount}
     */
  getAccount (accountId) {
    return this.getAccountWithHttpInfo(accountId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Find balance in particular Amazon Seller Wallet account by Amazon account identifier
     * Retrieve the balance in a given Amazon Seller Wallet bank account.
     * @param {String} accountId The ID of the Amazon Seller Wallet account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sellerWallet_2024_03_01/model/BalanceListing} and HTTP response
     */
  listAccountBalancesWithHttpInfo (accountId) {
    const postBody = null

    // verify the required parameter 'accountId' is set
    if (accountId === undefined || accountId === null) {
      throw new Error("Missing the required parameter 'accountId' when calling listAccountBalances")
    }

    const pathParams = {
      accountId
    }
    const queryParams = {
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = BalanceListing

    return this.apiClient.callApi('AccountsApi-listAccountBalances',
      '/finances/transfers/wallet/2024-03-01/accounts/{accountId}/balance', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('AccountsApi-listAccountBalances')
    )
  }

  /**
     * Find balance in particular Amazon Seller Wallet account by Amazon account identifier
     * Retrieve the balance in a given Amazon Seller Wallet bank account.
     * @param {String} accountId The ID of the Amazon Seller Wallet account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sellerWallet_2024_03_01/model/BalanceListing}
     */
  listAccountBalances (accountId) {
    return this.listAccountBalancesWithHttpInfo(accountId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }

  /**
     * Get all Amazon Seller Wallet accounts for the seller
     * Get all Seller Wallet accounts for a given seller.
     * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sellerWallet_2024_03_01/model/BankAccountListing} and HTTP response
     */
  listAccountsWithHttpInfo (marketplaceId) {
    const postBody = null

    // verify the required parameter 'marketplaceId' is set
    if (marketplaceId === undefined || marketplaceId === null) {
      throw new Error("Missing the required parameter 'marketplaceId' when calling listAccounts")
    }

    const pathParams = {
    }
    const queryParams = {
      marketplaceId
    }
    const headerParams = {
    }
    const formParams = {
    }

    const contentTypes = []
    const accepts = ['application/json']
    const returnType = BankAccountListing

    return this.apiClient.callApi('AccountsApi-listAccounts',
      '/finances/transfers/wallet/2024-03-01/accounts', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      contentTypes, accepts, returnType, this.getRateLimiter('AccountsApi-listAccounts')
    )
  }

  /**
     * Get all Amazon Seller Wallet accounts for the seller
     * Get all Seller Wallet accounts for a given seller.
     * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sellerWallet_2024_03_01/model/BankAccountListing}
     */
  listAccounts (marketplaceId) {
    return this.listAccountsWithHttpInfo(marketplaceId)
      .then(function (response_and_data) {
        return response_and_data.data
      })
  }
}

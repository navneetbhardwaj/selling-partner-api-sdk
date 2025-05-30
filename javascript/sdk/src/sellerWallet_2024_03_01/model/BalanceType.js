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

/**
* Enum class BalanceType.
* @enum {}
* @readonly
*/
export class BalanceType {
  /**
         * value: "AVAILABLE"
         * @const
         */
  'AVAILABLE' = 'AVAILABLE'

  /**
         * value: "LOCKED_IN"
         * @const
         */
  'LOCKED_IN' = 'LOCKED_IN'

  /**
         * value: "LOCKED_OUT"
         * @const
         */
  'LOCKED_OUT' = 'LOCKED_OUT'

  /**
         * value: "TOTAL"
         * @const
         */
  'TOTAL' = 'TOTAL'

  /**
    * Returns a <code>BalanceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sellerWallet_2024_03_01/model/BalanceType} The enum <code>BalanceType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

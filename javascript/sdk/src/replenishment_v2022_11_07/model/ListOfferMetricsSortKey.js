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

/**
* Enum class ListOfferMetricsSortKey.
* @enum {}
* @readonly
*/
export class ListOfferMetricsSortKey {
  /**
         * value: "SHIPPED_SUBSCRIPTION_UNITS"
         * @const
         */
  'SHIPPED_SUBSCRIPTION_UNITS' = 'SHIPPED_SUBSCRIPTION_UNITS'

  /**
         * value: "TOTAL_SUBSCRIPTIONS_REVENUE"
         * @const
         */
  'TOTAL_SUBSCRIPTIONS_REVENUE' = 'TOTAL_SUBSCRIPTIONS_REVENUE'

  /**
         * value: "ACTIVE_SUBSCRIPTIONS"
         * @const
         */
  'ACTIVE_SUBSCRIPTIONS' = 'ACTIVE_SUBSCRIPTIONS'

  /**
         * value: "NEXT_90DAYS_SHIPPED_SUBSCRIPTION_UNITS"
         * @const
         */
  'NEXT_90DAYS_SHIPPED_SUBSCRIPTION_UNITS' = 'NEXT_90DAYS_SHIPPED_SUBSCRIPTION_UNITS'

  /**
         * value: "NEXT_60DAYS_SHIPPED_SUBSCRIPTION_UNITS"
         * @const
         */
  'NEXT_60DAYS_SHIPPED_SUBSCRIPTION_UNITS' = 'NEXT_60DAYS_SHIPPED_SUBSCRIPTION_UNITS'

  /**
         * value: "NEXT_30DAYS_SHIPPED_SUBSCRIPTION_UNITS"
         * @const
         */
  'NEXT_30DAYS_SHIPPED_SUBSCRIPTION_UNITS' = 'NEXT_30DAYS_SHIPPED_SUBSCRIPTION_UNITS'

  /**
         * value: "NEXT_90DAYS_TOTAL_SUBSCRIPTIONS_REVENUE"
         * @const
         */
  'NEXT_90DAYS_TOTAL_SUBSCRIPTIONS_REVENUE' = 'NEXT_90DAYS_TOTAL_SUBSCRIPTIONS_REVENUE'

  /**
         * value: "NEXT_60DAYS_TOTAL_SUBSCRIPTIONS_REVENUE"
         * @const
         */
  'NEXT_60DAYS_TOTAL_SUBSCRIPTIONS_REVENUE' = 'NEXT_60DAYS_TOTAL_SUBSCRIPTIONS_REVENUE'

  /**
         * value: "NEXT_30DAYS_TOTAL_SUBSCRIPTIONS_REVENUE"
         * @const
         */
  'NEXT_30DAYS_TOTAL_SUBSCRIPTIONS_REVENUE' = 'NEXT_30DAYS_TOTAL_SUBSCRIPTIONS_REVENUE'

  /**
    * Returns a <code>ListOfferMetricsSortKey</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:replenishment_v2022_11_07/model/ListOfferMetricsSortKey} The enum <code>ListOfferMetricsSortKey</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
* Enum class SupplySourceStatusReadOnly.
* @enum {}
* @readonly
*/
export class SupplySourceStatusReadOnly {
  /**
         * value: "Active"
         * @const
         */
  'Active' = 'Active'

  /**
         * value: "Inactive"
         * @const
         */
  'Inactive' = 'Inactive'

  /**
         * value: "Archived"
         * @const
         */
  'Archived' = 'Archived'

  /**
    * Returns a <code>SupplySourceStatusReadOnly</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:supplysources_v2020_07_01/model/SupplySourceStatusReadOnly} The enum <code>SupplySourceStatusReadOnly</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

/**
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
* Enum class VehicleStatusInCatalog.
* @enum {}
* @readonly
*/
export class VehicleStatusInCatalog {
  /**
         * value: "ACTIVE"
         * @const
         */
  'ACTIVE' = 'ACTIVE'

  /**
         * value: "DELETED"
         * @const
         */
  'DELETED' = 'DELETED'

  /**
    * Returns a <code>VehicleStatusInCatalog</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:vehicles_v2024_11_01/model/VehicleStatusInCatalog} The enum <code>VehicleStatusInCatalog</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

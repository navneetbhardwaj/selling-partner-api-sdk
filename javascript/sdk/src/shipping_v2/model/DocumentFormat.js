/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
* Enum class DocumentFormat.
* @enum {}
* @readonly
*/
export class DocumentFormat {
  /**
         * value: "PDF"
         * @const
         */
  'PDF' = 'PDF'

  /**
         * value: "PNG"
         * @const
         */
  'PNG' = 'PNG'

  /**
         * value: "ZPL"
         * @const
         */
  'ZPL' = 'ZPL'

  /**
    * Returns a <code>DocumentFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:shipping_v2/model/DocumentFormat} The enum <code>DocumentFormat</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

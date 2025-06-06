/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
* Enum class PositionType.
* @enum {}
* @readonly
*/
export class PositionType {
  /**
         * value: "LEFT"
         * @const
         */
  'LEFT' = 'LEFT'

  /**
         * value: "RIGHT"
         * @const
         */
  'RIGHT' = 'RIGHT'

  /**
    * Returns a <code>PositionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:apluscontent_v2020_11_01/model/PositionType} The enum <code>PositionType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

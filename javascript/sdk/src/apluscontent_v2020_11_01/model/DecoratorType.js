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
* Enum class DecoratorType.
* @enum {}
* @readonly
*/
export class DecoratorType {
  /**
         * value: "LIST_ITEM"
         * @const
         */
  'LIST_ITEM' = 'LIST_ITEM'

  /**
         * value: "LIST_ORDERED"
         * @const
         */
  'LIST_ORDERED' = 'LIST_ORDERED'

  /**
         * value: "LIST_UNORDERED"
         * @const
         */
  'LIST_UNORDERED' = 'LIST_UNORDERED'

  /**
         * value: "STYLE_BOLD"
         * @const
         */
  'STYLE_BOLD' = 'STYLE_BOLD'

  /**
         * value: "STYLE_ITALIC"
         * @const
         */
  'STYLE_ITALIC' = 'STYLE_ITALIC'

  /**
         * value: "STYLE_LINEBREAK"
         * @const
         */
  'STYLE_LINEBREAK' = 'STYLE_LINEBREAK'

  /**
         * value: "STYLE_PARAGRAPH"
         * @const
         */
  'STYLE_PARAGRAPH' = 'STYLE_PARAGRAPH'

  /**
         * value: "STYLE_UNDERLINE"
         * @const
         */
  'STYLE_UNDERLINE' = 'STYLE_UNDERLINE'

  /**
    * Returns a <code>DecoratorType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:apluscontent_v2020_11_01/model/DecoratorType} The enum <code>DecoratorType</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}

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
import { PlainTextItem } from './PlainTextItem.js'
import { StandardComparisonProductBlock } from './StandardComparisonProductBlock.js'

/**
 * The StandardComparisonTableModule model module.
 * @module apluscontent_v2020_11_01/model/StandardComparisonTableModule
 * @version 2020-11-01
 */
export class StandardComparisonTableModule {
  /**
   * Constructs a new <code>StandardComparisonTableModule</code>.
   * The standard product comparison table.
   * @alias module:apluscontent_v2020_11_01/model/StandardComparisonTableModule
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>StandardComparisonTableModule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/StandardComparisonTableModule} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/StandardComparisonTableModule} The populated <code>StandardComparisonTableModule</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      switch (typeof data) {
        case 'string':
          obj = String(data)
          break
        case 'number':
          obj = Number(data)
          break
        case 'boolean':
          obj = Boolean(data)
          break
      }
      obj = obj || new StandardComparisonTableModule()
      if (data.hasOwnProperty('productColumns')) { obj.productColumns = ApiClient.convertToType(data.productColumns, [StandardComparisonProductBlock]) }
      if (data.hasOwnProperty('metricRowLabels')) { obj.metricRowLabels = ApiClient.convertToType(data.metricRowLabels, [PlainTextItem]) }
    }
    return obj
  }
}

/**
 * @member {Array.<module:apluscontent_v2020_11_01/model/StandardComparisonProductBlock>} productColumns
 */
StandardComparisonTableModule.prototype.productColumns = undefined

/**
 * @member {Array.<module:apluscontent_v2020_11_01/model/PlainTextItem>} metricRowLabels
 */
StandardComparisonTableModule.prototype.metricRowLabels = undefined

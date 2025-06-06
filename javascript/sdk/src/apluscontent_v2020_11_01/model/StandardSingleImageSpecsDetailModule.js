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
import { ImageComponent } from './ImageComponent.js'
import { StandardHeaderTextListBlock } from './StandardHeaderTextListBlock.js'
import { StandardTextBlock } from './StandardTextBlock.js'
import { TextComponent } from './TextComponent.js'

/**
 * The StandardSingleImageSpecsDetailModule model module.
 * @module apluscontent_v2020_11_01/model/StandardSingleImageSpecsDetailModule
 * @version 2020-11-01
 */
export class StandardSingleImageSpecsDetailModule {
  /**
   * Constructs a new <code>StandardSingleImageSpecsDetailModule</code>.
   * A standard image with paragraphs, a bulleted list, and extra space for technical details.
   * @alias module:apluscontent_v2020_11_01/model/StandardSingleImageSpecsDetailModule
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>StandardSingleImageSpecsDetailModule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/StandardSingleImageSpecsDetailModule} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/StandardSingleImageSpecsDetailModule} The populated <code>StandardSingleImageSpecsDetailModule</code> instance.
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
      obj = obj || new StandardSingleImageSpecsDetailModule()
      if (data.hasOwnProperty('headline')) { obj.headline = TextComponent.constructFromObject(data.headline) }
      if (data.hasOwnProperty('image')) { obj.image = ImageComponent.constructFromObject(data.image) }
      if (data.hasOwnProperty('descriptionHeadline')) { obj.descriptionHeadline = TextComponent.constructFromObject(data.descriptionHeadline) }
      if (data.hasOwnProperty('descriptionBlock1')) { obj.descriptionBlock1 = StandardTextBlock.constructFromObject(data.descriptionBlock1) }
      if (data.hasOwnProperty('descriptionBlock2')) { obj.descriptionBlock2 = StandardTextBlock.constructFromObject(data.descriptionBlock2) }
      if (data.hasOwnProperty('specificationHeadline')) { obj.specificationHeadline = TextComponent.constructFromObject(data.specificationHeadline) }
      if (data.hasOwnProperty('specificationListBlock')) { obj.specificationListBlock = StandardHeaderTextListBlock.constructFromObject(data.specificationListBlock) }
      if (data.hasOwnProperty('specificationTextBlock')) { obj.specificationTextBlock = StandardTextBlock.constructFromObject(data.specificationTextBlock) }
    }
    return obj
  }
}

/**
 * @member {module:apluscontent_v2020_11_01/model/TextComponent} headline
 */
StandardSingleImageSpecsDetailModule.prototype.headline = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/ImageComponent} image
 */
StandardSingleImageSpecsDetailModule.prototype.image = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/TextComponent} descriptionHeadline
 */
StandardSingleImageSpecsDetailModule.prototype.descriptionHeadline = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardTextBlock} descriptionBlock1
 */
StandardSingleImageSpecsDetailModule.prototype.descriptionBlock1 = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardTextBlock} descriptionBlock2
 */
StandardSingleImageSpecsDetailModule.prototype.descriptionBlock2 = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/TextComponent} specificationHeadline
 */
StandardSingleImageSpecsDetailModule.prototype.specificationHeadline = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardHeaderTextListBlock} specificationListBlock
 */
StandardSingleImageSpecsDetailModule.prototype.specificationListBlock = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardTextBlock} specificationTextBlock
 */
StandardSingleImageSpecsDetailModule.prototype.specificationTextBlock = undefined

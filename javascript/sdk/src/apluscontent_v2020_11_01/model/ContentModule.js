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
import { ContentModuleType } from './ContentModuleType.js'
import { StandardCompanyLogoModule } from './StandardCompanyLogoModule.js'
import { StandardComparisonTableModule } from './StandardComparisonTableModule.js'
import { StandardFourImageTextModule } from './StandardFourImageTextModule.js'
import { StandardFourImageTextQuadrantModule } from './StandardFourImageTextQuadrantModule.js'
import { StandardHeaderImageTextModule } from './StandardHeaderImageTextModule.js'
import { StandardImageSidebarModule } from './StandardImageSidebarModule.js'
import { StandardImageTextOverlayModule } from './StandardImageTextOverlayModule.js'
import { StandardMultipleImageTextModule } from './StandardMultipleImageTextModule.js'
import { StandardProductDescriptionModule } from './StandardProductDescriptionModule.js'
import { StandardSingleImageHighlightsModule } from './StandardSingleImageHighlightsModule.js'
import { StandardSingleImageSpecsDetailModule } from './StandardSingleImageSpecsDetailModule.js'
import { StandardSingleSideImageModule } from './StandardSingleSideImageModule.js'
import { StandardTechSpecsModule } from './StandardTechSpecsModule.js'
import { StandardTextModule } from './StandardTextModule.js'
import { StandardThreeImageTextModule } from './StandardThreeImageTextModule.js'

/**
 * The ContentModule model module.
 * @module apluscontent_v2020_11_01/model/ContentModule
 * @version 2020-11-01
 */
export class ContentModule {
  /**
   * Constructs a new <code>ContentModule</code>.
   * An A+ Content module. An A+ Content document is composed of content modules. The &#x60;contentModuleType&#x60; property selects which content module types to use.
   * @alias module:apluscontent_v2020_11_01/model/ContentModule
   * @class
   * @param contentModuleType {module:apluscontent_v2020_11_01/model/ContentModuleType}
   */
  constructor (contentModuleType) {
    this.contentModuleType = contentModuleType
  }

  /**
   * Constructs a <code>ContentModule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/ContentModule} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/ContentModule} The populated <code>ContentModule</code> instance.
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
      obj = obj || new ContentModule()
      if (data.hasOwnProperty('contentModuleType')) { obj.contentModuleType = ContentModuleType.constructFromObject(data.contentModuleType) }
      if (data.hasOwnProperty('standardCompanyLogo')) { obj.standardCompanyLogo = StandardCompanyLogoModule.constructFromObject(data.standardCompanyLogo) }
      if (data.hasOwnProperty('standardComparisonTable')) { obj.standardComparisonTable = StandardComparisonTableModule.constructFromObject(data.standardComparisonTable) }
      if (data.hasOwnProperty('standardFourImageText')) { obj.standardFourImageText = StandardFourImageTextModule.constructFromObject(data.standardFourImageText) }
      if (data.hasOwnProperty('standardFourImageTextQuadrant')) { obj.standardFourImageTextQuadrant = StandardFourImageTextQuadrantModule.constructFromObject(data.standardFourImageTextQuadrant) }
      if (data.hasOwnProperty('standardHeaderImageText')) { obj.standardHeaderImageText = StandardHeaderImageTextModule.constructFromObject(data.standardHeaderImageText) }
      if (data.hasOwnProperty('standardImageSidebar')) { obj.standardImageSidebar = StandardImageSidebarModule.constructFromObject(data.standardImageSidebar) }
      if (data.hasOwnProperty('standardImageTextOverlay')) { obj.standardImageTextOverlay = StandardImageTextOverlayModule.constructFromObject(data.standardImageTextOverlay) }
      if (data.hasOwnProperty('standardMultipleImageText')) { obj.standardMultipleImageText = StandardMultipleImageTextModule.constructFromObject(data.standardMultipleImageText) }
      if (data.hasOwnProperty('standardProductDescription')) { obj.standardProductDescription = StandardProductDescriptionModule.constructFromObject(data.standardProductDescription) }
      if (data.hasOwnProperty('standardSingleImageHighlights')) { obj.standardSingleImageHighlights = StandardSingleImageHighlightsModule.constructFromObject(data.standardSingleImageHighlights) }
      if (data.hasOwnProperty('standardSingleImageSpecsDetail')) { obj.standardSingleImageSpecsDetail = StandardSingleImageSpecsDetailModule.constructFromObject(data.standardSingleImageSpecsDetail) }
      if (data.hasOwnProperty('standardSingleSideImage')) { obj.standardSingleSideImage = StandardSingleSideImageModule.constructFromObject(data.standardSingleSideImage) }
      if (data.hasOwnProperty('standardTechSpecs')) { obj.standardTechSpecs = StandardTechSpecsModule.constructFromObject(data.standardTechSpecs) }
      if (data.hasOwnProperty('standardText')) { obj.standardText = StandardTextModule.constructFromObject(data.standardText) }
      if (data.hasOwnProperty('standardThreeImageText')) { obj.standardThreeImageText = StandardThreeImageTextModule.constructFromObject(data.standardThreeImageText) }
    }
    return obj
  }
}

/**
 * @member {module:apluscontent_v2020_11_01/model/ContentModuleType} contentModuleType
 */
ContentModule.prototype.contentModuleType = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardCompanyLogoModule} standardCompanyLogo
 */
ContentModule.prototype.standardCompanyLogo = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardComparisonTableModule} standardComparisonTable
 */
ContentModule.prototype.standardComparisonTable = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardFourImageTextModule} standardFourImageText
 */
ContentModule.prototype.standardFourImageText = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardFourImageTextQuadrantModule} standardFourImageTextQuadrant
 */
ContentModule.prototype.standardFourImageTextQuadrant = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardHeaderImageTextModule} standardHeaderImageText
 */
ContentModule.prototype.standardHeaderImageText = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardImageSidebarModule} standardImageSidebar
 */
ContentModule.prototype.standardImageSidebar = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardImageTextOverlayModule} standardImageTextOverlay
 */
ContentModule.prototype.standardImageTextOverlay = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardMultipleImageTextModule} standardMultipleImageText
 */
ContentModule.prototype.standardMultipleImageText = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardProductDescriptionModule} standardProductDescription
 */
ContentModule.prototype.standardProductDescription = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardSingleImageHighlightsModule} standardSingleImageHighlights
 */
ContentModule.prototype.standardSingleImageHighlights = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardSingleImageSpecsDetailModule} standardSingleImageSpecsDetail
 */
ContentModule.prototype.standardSingleImageSpecsDetail = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardSingleSideImageModule} standardSingleSideImage
 */
ContentModule.prototype.standardSingleSideImage = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardTechSpecsModule} standardTechSpecs
 */
ContentModule.prototype.standardTechSpecs = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardTextModule} standardText
 */
ContentModule.prototype.standardText = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/StandardThreeImageTextModule} standardThreeImageText
 */
ContentModule.prototype.standardThreeImageText = undefined

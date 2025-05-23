/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { ContainerLabel } from './ContainerLabel.js'

/**
 * The CreateContainerLabelResponse model module.
 * @module vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse
 * @version 2021-12-28
 */
export class CreateContainerLabelResponse {
  /**
   * Constructs a new <code>CreateContainerLabelResponse</code>.
   * The response schema for the &#x60;createContainerLabel&#x60; operation.
   * @alias module:vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse
   * @class
   * @param containerLabel {module:vendordfshipping_v2021_12_28/model/ContainerLabel}
   */
  constructor (containerLabel) {
    this.containerLabel = containerLabel
  }

  /**
   * Constructs a <code>CreateContainerLabelResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse} obj Optional instance to populate.
   * @return {module:vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse} The populated <code>CreateContainerLabelResponse</code> instance.
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
      obj = obj || new CreateContainerLabelResponse()
      if (data.hasOwnProperty('containerLabel')) { obj.containerLabel = ContainerLabel.constructFromObject(data.containerLabel) }
    }
    return obj
  }
}

/**
 * @member {module:vendordfshipping_v2021_12_28/model/ContainerLabel} containerLabel
 */
CreateContainerLabelResponse.prototype.containerLabel = undefined

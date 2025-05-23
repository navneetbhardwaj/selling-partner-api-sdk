/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The SellerFeedbackType model module.
 * @module pricing_v0/model/SellerFeedbackType
 * @version v0
 */
export class SellerFeedbackType {
  /**
   * Constructs a new <code>SellerFeedbackType</code>.
   * Information about the seller&#39;s feedback, including the percentage of positive feedback, and the total number of ratings received.
   * @alias module:pricing_v0/model/SellerFeedbackType
   * @class
   * @param feedbackCount {Number} The number of ratings received about the seller.
   */
  constructor (feedbackCount) {
    this.feedbackCount = feedbackCount
  }

  /**
   * Constructs a <code>SellerFeedbackType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/SellerFeedbackType} obj Optional instance to populate.
   * @return {module:pricing_v0/model/SellerFeedbackType} The populated <code>SellerFeedbackType</code> instance.
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
      obj = obj || new SellerFeedbackType()
      if (data.hasOwnProperty('SellerPositiveFeedbackRating')) { obj.sellerPositiveFeedbackRating = ApiClient.convertToType(data.SellerPositiveFeedbackRating, 'Number') }
      if (data.hasOwnProperty('FeedbackCount')) { obj.feedbackCount = ApiClient.convertToType(data.FeedbackCount, 'Number') }
    }
    return obj
  }
}

/**
 * The percentage of positive feedback for the seller in the past 365 days.
 * @member {Number} sellerPositiveFeedbackRating
 */
SellerFeedbackType.prototype.sellerPositiveFeedbackRating = undefined

/**
 * The number of ratings received about the seller.
 * @member {Number} feedbackCount
 */
SellerFeedbackType.prototype.feedbackCount = undefined

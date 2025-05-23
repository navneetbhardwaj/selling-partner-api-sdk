/**
 * Selling Partner API for Tokens
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The CreateRestrictedDataTokenResponse model module.
 * @module tokens_v2021_03_01/model/CreateRestrictedDataTokenResponse
 * @version 2021-03-01
 */
export class CreateRestrictedDataTokenResponse {
  /**
   * Constructs a new <code>CreateRestrictedDataTokenResponse</code>.
   * The response schema for the createRestrictedDataToken operation.
   * @alias module:tokens_v2021_03_01/model/CreateRestrictedDataTokenResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>CreateRestrictedDataTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:tokens_v2021_03_01/model/CreateRestrictedDataTokenResponse} obj Optional instance to populate.
   * @return {module:tokens_v2021_03_01/model/CreateRestrictedDataTokenResponse} The populated <code>CreateRestrictedDataTokenResponse</code> instance.
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
      obj = obj || new CreateRestrictedDataTokenResponse()
      if (data.hasOwnProperty('restrictedDataToken')) { obj.restrictedDataToken = ApiClient.convertToType(data.restrictedDataToken, 'String') }
      if (data.hasOwnProperty('expiresIn')) { obj.expiresIn = ApiClient.convertToType(data.expiresIn, 'Number') }
    }
    return obj
  }
}

/**
 * A Restricted Data Token (RDT). This is a short-lived access token that authorizes calls to restricted operations. Pass this value with the x-amz-access-token header when making subsequent calls to these restricted resources.
 * @member {String} restrictedDataToken
 */
CreateRestrictedDataTokenResponse.prototype.restrictedDataToken = undefined

/**
 * The lifetime of the Restricted Data Token, in seconds.
 * @member {Number} expiresIn
 */
CreateRestrictedDataTokenResponse.prototype.expiresIn = undefined

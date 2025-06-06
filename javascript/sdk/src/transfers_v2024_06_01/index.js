/**
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * The version of the OpenAPI document: 2024-06-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from './ApiClient.js'
import { AssignmentType } from './model/AssignmentType.js'
import { Error } from './model/Error.js'
import { ErrorList } from './model/ErrorList.js'
import { ExpiryDate } from './model/ExpiryDate.js'
import { GetPaymentMethodsResponse } from './model/GetPaymentMethodsResponse.js'
import { InitiatePayoutRequest } from './model/InitiatePayoutRequest.js'
import { InitiatePayoutResponse } from './model/InitiatePayoutResponse.js'
import { PaymentMethodDetails } from './model/PaymentMethodDetails.js'
import { PaymentMethodType } from './model/PaymentMethodType.js'
import { DefaultApi } from './api/DefaultApi.js'

/**
* The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module transfers_v2024_06_01/index
* @version 2024-06-01
*/
export {
  /**
     * The ApiClient constructor.
     * @property {module:transfers_v2024_06_01/ApiClient}
     */
  ApiClient,

  /**
     * The AssignmentType model constructor.
     * @property {module:transfers_v2024_06_01/model/AssignmentType}
     */
  AssignmentType,

  /**
     * The Error model constructor.
     * @property {module:transfers_v2024_06_01/model/Error}
     */
  Error,

  /**
     * The ErrorList model constructor.
     * @property {module:transfers_v2024_06_01/model/ErrorList}
     */
  ErrorList,

  /**
     * The ExpiryDate model constructor.
     * @property {module:transfers_v2024_06_01/model/ExpiryDate}
     */
  ExpiryDate,

  /**
     * The GetPaymentMethodsResponse model constructor.
     * @property {module:transfers_v2024_06_01/model/GetPaymentMethodsResponse}
     */
  GetPaymentMethodsResponse,

  /**
     * The InitiatePayoutRequest model constructor.
     * @property {module:transfers_v2024_06_01/model/InitiatePayoutRequest}
     */
  InitiatePayoutRequest,

  /**
     * The InitiatePayoutResponse model constructor.
     * @property {module:transfers_v2024_06_01/model/InitiatePayoutResponse}
     */
  InitiatePayoutResponse,

  /**
     * The PaymentMethodDetails model constructor.
     * @property {module:transfers_v2024_06_01/model/PaymentMethodDetails}
     */
  PaymentMethodDetails,

  /**
     * The PaymentMethodType model constructor.
     * @property {module:transfers_v2024_06_01/model/PaymentMethodType}
     */
  PaymentMethodType,

  /**
    * The DefaultApi service constructor.
    * @property {module:transfers_v2024_06_01/api/DefaultApi}
    */
  DefaultApi
}

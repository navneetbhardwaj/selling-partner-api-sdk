/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from './ApiClient.js'
import { CreateProductReviewAndSellerFeedbackSolicitationResponse } from './model/CreateProductReviewAndSellerFeedbackSolicitationResponse.js'
import { Error } from './model/Error.js'
import { GetSchemaResponse } from './model/GetSchemaResponse.js'
import { GetSchemaResponseLinks } from './model/GetSchemaResponseLinks.js'
import { GetSolicitationActionResponse } from './model/GetSolicitationActionResponse.js'
import { GetSolicitationActionResponseEmbedded } from './model/GetSolicitationActionResponseEmbedded.js'
import { GetSolicitationActionResponseLinks } from './model/GetSolicitationActionResponseLinks.js'
import { GetSolicitationActionsForOrderResponse } from './model/GetSolicitationActionsForOrderResponse.js'
import { GetSolicitationActionsForOrderResponseEmbedded } from './model/GetSolicitationActionsForOrderResponseEmbedded.js'
import { GetSolicitationActionsForOrderResponseLinks } from './model/GetSolicitationActionsForOrderResponseLinks.js'
import { LinkObject } from './model/LinkObject.js'
import { SolicitationsAction } from './model/SolicitationsAction.js'
import { SolicitationsApi } from './api/SolicitationsApi.js'

/**
* With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient&#39;s Message Center. The Solicitations API returns responses that are formed according to the &lt;a href&#x3D;https://tools.ietf.org/html/draft-kelly-json-hal-08&gt;JSON Hypertext Application Language&lt;/a&gt; (HAL) standard..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module solicitations_v1/index
* @version v1
*/
export {
  /**
     * The ApiClient constructor.
     * @property {module:solicitations_v1/ApiClient}
     */
  ApiClient,

  /**
     * The CreateProductReviewAndSellerFeedbackSolicitationResponse model constructor.
     * @property {module:solicitations_v1/model/CreateProductReviewAndSellerFeedbackSolicitationResponse}
     */
  CreateProductReviewAndSellerFeedbackSolicitationResponse,

  /**
     * The Error model constructor.
     * @property {module:solicitations_v1/model/Error}
     */
  Error,

  /**
     * The GetSchemaResponse model constructor.
     * @property {module:solicitations_v1/model/GetSchemaResponse}
     */
  GetSchemaResponse,

  /**
     * The GetSchemaResponseLinks model constructor.
     * @property {module:solicitations_v1/model/GetSchemaResponseLinks}
     */
  GetSchemaResponseLinks,

  /**
     * The GetSolicitationActionResponse model constructor.
     * @property {module:solicitations_v1/model/GetSolicitationActionResponse}
     */
  GetSolicitationActionResponse,

  /**
     * The GetSolicitationActionResponseEmbedded model constructor.
     * @property {module:solicitations_v1/model/GetSolicitationActionResponseEmbedded}
     */
  GetSolicitationActionResponseEmbedded,

  /**
     * The GetSolicitationActionResponseLinks model constructor.
     * @property {module:solicitations_v1/model/GetSolicitationActionResponseLinks}
     */
  GetSolicitationActionResponseLinks,

  /**
     * The GetSolicitationActionsForOrderResponse model constructor.
     * @property {module:solicitations_v1/model/GetSolicitationActionsForOrderResponse}
     */
  GetSolicitationActionsForOrderResponse,

  /**
     * The GetSolicitationActionsForOrderResponseEmbedded model constructor.
     * @property {module:solicitations_v1/model/GetSolicitationActionsForOrderResponseEmbedded}
     */
  GetSolicitationActionsForOrderResponseEmbedded,

  /**
     * The GetSolicitationActionsForOrderResponseLinks model constructor.
     * @property {module:solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks}
     */
  GetSolicitationActionsForOrderResponseLinks,

  /**
     * The LinkObject model constructor.
     * @property {module:solicitations_v1/model/LinkObject}
     */
  LinkObject,

  /**
     * The SolicitationsAction model constructor.
     * @property {module:solicitations_v1/model/SolicitationsAction}
     */
  SolicitationsAction,

  /**
    * The SolicitationsApi service constructor.
    * @property {module:solicitations_v1/api/SolicitationsApi}
    */
  SolicitationsApi
}

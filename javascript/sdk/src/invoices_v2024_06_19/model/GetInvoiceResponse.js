/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * The version of the OpenAPI document: 2024-06-19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Invoice } from './Invoice.js'

/**
 * The GetInvoiceResponse model module.
 * @module invoices_v2024_06_19/model/GetInvoiceResponse
 * @version 2024-06-19
 */
export class GetInvoiceResponse {
  /**
   * Constructs a new <code>GetInvoiceResponse</code>.
   * Success.
   * @alias module:invoices_v2024_06_19/model/GetInvoiceResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>GetInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoices_v2024_06_19/model/GetInvoiceResponse} obj Optional instance to populate.
   * @return {module:invoices_v2024_06_19/model/GetInvoiceResponse} The populated <code>GetInvoiceResponse</code> instance.
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
      obj = obj || new GetInvoiceResponse()
      if (data.hasOwnProperty('invoice')) { obj.invoice = Invoice.constructFromObject(data.invoice) }
    }
    return obj
  }
}

/**
 * @member {module:invoices_v2024_06_19/model/Invoice} invoice
 */
GetInvoiceResponse.prototype.invoice = undefined

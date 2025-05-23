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
import { AttributeOption } from './AttributeOption.js'

/**
 * The InvoicesAttributes model module.
 * @module invoices_v2024_06_19/model/InvoicesAttributes
 * @version 2024-06-19
 */
export class InvoicesAttributes {
  /**
   * Constructs a new <code>InvoicesAttributes</code>.
   * An object that contains the invoice attributes definition.
   * @alias module:invoices_v2024_06_19/model/InvoicesAttributes
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>InvoicesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:invoices_v2024_06_19/model/InvoicesAttributes} obj Optional instance to populate.
   * @return {module:invoices_v2024_06_19/model/InvoicesAttributes} The populated <code>InvoicesAttributes</code> instance.
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
      obj = obj || new InvoicesAttributes()
      if (data.hasOwnProperty('invoiceStatusOptions')) { obj.invoiceStatusOptions = ApiClient.convertToType(data.invoiceStatusOptions, [AttributeOption]) }
      if (data.hasOwnProperty('invoiceTypeOptions')) { obj.invoiceTypeOptions = ApiClient.convertToType(data.invoiceTypeOptions, [AttributeOption]) }
      if (data.hasOwnProperty('transactionIdentifierNameOptions')) { obj.transactionIdentifierNameOptions = ApiClient.convertToType(data.transactionIdentifierNameOptions, [AttributeOption]) }
      if (data.hasOwnProperty('transactionTypeOptions')) { obj.transactionTypeOptions = ApiClient.convertToType(data.transactionTypeOptions, [AttributeOption]) }
    }
    return obj
  }
}

/**
 * A list of all the options that are available for the invoice status attribute.
 * @member {Array.<module:invoices_v2024_06_19/model/AttributeOption>} invoiceStatusOptions
 */
InvoicesAttributes.prototype.invoiceStatusOptions = undefined

/**
 * A list of all the options that are available for the invoice type attribute.
 * @member {Array.<module:invoices_v2024_06_19/model/AttributeOption>} invoiceTypeOptions
 */
InvoicesAttributes.prototype.invoiceTypeOptions = undefined

/**
 * A list of all the options that are available for the transaction identifier name attribute.
 * @member {Array.<module:invoices_v2024_06_19/model/AttributeOption>} transactionIdentifierNameOptions
 */
InvoicesAttributes.prototype.transactionIdentifierNameOptions = undefined

/**
 * A list of all the options that are available for the transaction type attribute.
 * @member {Array.<module:invoices_v2024_06_19/model/AttributeOption>} transactionTypeOptions
 */
InvoicesAttributes.prototype.transactionTypeOptions = undefined

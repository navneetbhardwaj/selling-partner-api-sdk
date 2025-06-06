/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { AdditionalDetails } from './AdditionalDetails.js'
import { AllowanceDetails } from './AllowanceDetails.js'
import { ChargeDetails } from './ChargeDetails.js'
import { InvoiceItem } from './InvoiceItem.js'
import { Money } from './Money.js'
import { PartyIdentification } from './PartyIdentification.js'
import { PaymentTerms } from './PaymentTerms.js'
import { TaxDetails } from './TaxDetails.js'

/**
 * The Invoice model module.
 * @module vendorinvoices_v1/model/Invoice
 * @version v1
 */
export class Invoice {
  /**
   * Constructs a new <code>Invoice</code>.
   * Represents an invoice or credit note document with details about the transaction, parties involved, and line items.
   * @alias module:vendorinvoices_v1/model/Invoice
   * @class
   * @param invoiceType {module:vendorinvoices_v1/model/Invoice.InvoiceTypeEnum} Identifies the type of invoice.
   * @param id {String} Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.
   * @param date {Date} Defines a date and time according to ISO8601.
   * @param remitToParty {module:vendorinvoices_v1/model/PartyIdentification}
   * @param invoiceTotal {module:vendorinvoices_v1/model/Money}
   */
  constructor (invoiceType, id, date, remitToParty, invoiceTotal) {
    this.invoiceType = invoiceType
    this.id = id
    this.date = date
    this.remitToParty = remitToParty
    this.invoiceTotal = invoiceTotal
  }

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorinvoices_v1/model/Invoice} obj Optional instance to populate.
   * @return {module:vendorinvoices_v1/model/Invoice} The populated <code>Invoice</code> instance.
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
      obj = obj || new Invoice()
      if (data.hasOwnProperty('invoiceType')) { obj.invoiceType = ApiClient.convertToType(data.invoiceType, 'String') }
      if (data.hasOwnProperty('id')) { obj.id = ApiClient.convertToType(data.id, 'String') }
      if (data.hasOwnProperty('referenceNumber')) { obj.referenceNumber = ApiClient.convertToType(data.referenceNumber, 'String') }
      if (data.hasOwnProperty('date')) { obj.date = ApiClient.convertToType(data.date, 'Date') }
      if (data.hasOwnProperty('remitToParty')) { obj.remitToParty = PartyIdentification.constructFromObject(data.remitToParty) }
      if (data.hasOwnProperty('shipToParty')) { obj.shipToParty = PartyIdentification.constructFromObject(data.shipToParty) }
      if (data.hasOwnProperty('shipFromParty')) { obj.shipFromParty = PartyIdentification.constructFromObject(data.shipFromParty) }
      if (data.hasOwnProperty('billToParty')) { obj.billToParty = PartyIdentification.constructFromObject(data.billToParty) }
      if (data.hasOwnProperty('paymentTerms')) { obj.paymentTerms = PaymentTerms.constructFromObject(data.paymentTerms) }
      if (data.hasOwnProperty('invoiceTotal')) { obj.invoiceTotal = Money.constructFromObject(data.invoiceTotal) }
      if (data.hasOwnProperty('taxDetails')) { obj.taxDetails = ApiClient.convertToType(data.taxDetails, [TaxDetails]) }
      if (data.hasOwnProperty('additionalDetails')) { obj.additionalDetails = ApiClient.convertToType(data.additionalDetails, [AdditionalDetails]) }
      if (data.hasOwnProperty('chargeDetails')) { obj.chargeDetails = ApiClient.convertToType(data.chargeDetails, [ChargeDetails]) }
      if (data.hasOwnProperty('allowanceDetails')) { obj.allowanceDetails = ApiClient.convertToType(data.allowanceDetails, [AllowanceDetails]) }
      if (data.hasOwnProperty('items')) { obj.items = ApiClient.convertToType(data.items, [InvoiceItem]) }
    }
    return obj
  }
}

/**
 * Allowed values for the <code>invoiceType</code> property.
 * @enum {String}
 * @readonly
 */
Invoice.InvoiceTypeEnum = {

  /**
     * value: "Invoice"
     * @const
     */
  Invoice: 'Invoice',

  /**
     * value: "CreditNote"
     * @const
     */
  CreditNote: 'CreditNote'
}

/**
 * Identifies the type of invoice.
 * @member {module:vendorinvoices_v1/model/Invoice.InvoiceTypeEnum} invoiceType
 */
Invoice.prototype.invoiceType = undefined

/**
 * Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.
 * @member {String} id
 */
Invoice.prototype.id = undefined

/**
 * An additional unique reference number used for regulatory or other purposes.
 * @member {String} referenceNumber
 */
Invoice.prototype.referenceNumber = undefined

/**
 * Defines a date and time according to ISO8601.
 * @member {Date} date
 */
Invoice.prototype.date = undefined

/**
 * @member {module:vendorinvoices_v1/model/PartyIdentification} remitToParty
 */
Invoice.prototype.remitToParty = undefined

/**
 * @member {module:vendorinvoices_v1/model/PartyIdentification} shipToParty
 */
Invoice.prototype.shipToParty = undefined

/**
 * @member {module:vendorinvoices_v1/model/PartyIdentification} shipFromParty
 */
Invoice.prototype.shipFromParty = undefined

/**
 * @member {module:vendorinvoices_v1/model/PartyIdentification} billToParty
 */
Invoice.prototype.billToParty = undefined

/**
 * @member {module:vendorinvoices_v1/model/PaymentTerms} paymentTerms
 */
Invoice.prototype.paymentTerms = undefined

/**
 * @member {module:vendorinvoices_v1/model/Money} invoiceTotal
 */
Invoice.prototype.invoiceTotal = undefined

/**
 * Total tax amount details for all line items.
 * @member {Array.<module:vendorinvoices_v1/model/TaxDetails>} taxDetails
 */
Invoice.prototype.taxDetails = undefined

/**
 * Additional details provided by the selling party, for tax related or other purposes.
 * @member {Array.<module:vendorinvoices_v1/model/AdditionalDetails>} additionalDetails
 */
Invoice.prototype.additionalDetails = undefined

/**
 * Total charge amount details for all line items.
 * @member {Array.<module:vendorinvoices_v1/model/ChargeDetails>} chargeDetails
 */
Invoice.prototype.chargeDetails = undefined

/**
 * Total allowance amount details for all line items.
 * @member {Array.<module:vendorinvoices_v1/model/AllowanceDetails>} allowanceDetails
 */
Invoice.prototype.allowanceDetails = undefined

/**
 * The list of invoice items.
 * @member {Array.<module:vendorinvoices_v1/model/InvoiceItem>} items
 */
Invoice.prototype.items = undefined

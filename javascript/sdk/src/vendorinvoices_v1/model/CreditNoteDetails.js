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

/**
 * The CreditNoteDetails model module.
 * @module vendorinvoices_v1/model/CreditNoteDetails
 * @version v1
 */
export class CreditNoteDetails {
  /**
   * Constructs a new <code>CreditNoteDetails</code>.
   * References required in order to process a credit note. This information is required only if InvoiceType is CreditNote.
   * @alias module:vendorinvoices_v1/model/CreditNoteDetails
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>CreditNoteDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorinvoices_v1/model/CreditNoteDetails} obj Optional instance to populate.
   * @return {module:vendorinvoices_v1/model/CreditNoteDetails} The populated <code>CreditNoteDetails</code> instance.
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
      obj = obj || new CreditNoteDetails()
      if (data.hasOwnProperty('referenceInvoiceNumber')) { obj.referenceInvoiceNumber = ApiClient.convertToType(data.referenceInvoiceNumber, 'String') }
      if (data.hasOwnProperty('debitNoteNumber')) { obj.debitNoteNumber = ApiClient.convertToType(data.debitNoteNumber, 'String') }
      if (data.hasOwnProperty('returnsReferenceNumber')) { obj.returnsReferenceNumber = ApiClient.convertToType(data.returnsReferenceNumber, 'String') }
      if (data.hasOwnProperty('goodsReturnDate')) { obj.goodsReturnDate = ApiClient.convertToType(data.goodsReturnDate, 'Date') }
      if (data.hasOwnProperty('rmaId')) { obj.rmaId = ApiClient.convertToType(data.rmaId, 'String') }
      if (data.hasOwnProperty('coopReferenceNumber')) { obj.coopReferenceNumber = ApiClient.convertToType(data.coopReferenceNumber, 'String') }
      if (data.hasOwnProperty('consignorsReferenceNumber')) { obj.consignorsReferenceNumber = ApiClient.convertToType(data.consignorsReferenceNumber, 'String') }
    }
    return obj
  }
}

/**
 * Original Invoice Number when sending a credit note relating to an existing invoice. One Invoice only to be processed per Credit Note. This is mandatory for AP Credit Notes.
 * @member {String} referenceInvoiceNumber
 */
CreditNoteDetails.prototype.referenceInvoiceNumber = undefined

/**
 * Debit Note Number as generated by Amazon. Recommended for Returns and COOP Credit Notes.
 * @member {String} debitNoteNumber
 */
CreditNoteDetails.prototype.debitNoteNumber = undefined

/**
 * Identifies the Returns Notice Number. Mandatory for all Returns Credit Notes.
 * @member {String} returnsReferenceNumber
 */
CreditNoteDetails.prototype.returnsReferenceNumber = undefined

/**
 * Defines a date and time according to ISO8601.
 * @member {Date} goodsReturnDate
 */
CreditNoteDetails.prototype.goodsReturnDate = undefined

/**
 * Identifies the Returned Merchandise Authorization ID, if generated.
 * @member {String} rmaId
 */
CreditNoteDetails.prototype.rmaId = undefined

/**
 * Identifies the COOP reference used for COOP agreement. Failure to provide the COOP reference number or the Debit Note number may lead to a rejection of the Credit Note.
 * @member {String} coopReferenceNumber
 */
CreditNoteDetails.prototype.coopReferenceNumber = undefined

/**
 * Identifies the consignor reference number (VRET number), if generated by Amazon.
 * @member {String} consignorsReferenceNumber
 */
CreditNoteDetails.prototype.consignorsReferenceNumber = undefined

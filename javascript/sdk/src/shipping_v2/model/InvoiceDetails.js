/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The InvoiceDetails model module.
 * @module shipping_v2/model/InvoiceDetails
 * @version v2
 */
export class InvoiceDetails {
  /**
   * Constructs a new <code>InvoiceDetails</code>.
   * The invoice details for charges associated with the goods in the package. Only applies to certain regions.
   * @alias module:shipping_v2/model/InvoiceDetails
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>InvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/InvoiceDetails} obj Optional instance to populate.
   * @return {module:shipping_v2/model/InvoiceDetails} The populated <code>InvoiceDetails</code> instance.
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
      obj = obj || new InvoiceDetails()
      if (data.hasOwnProperty('invoiceNumber')) { obj.invoiceNumber = ApiClient.convertToType(data.invoiceNumber, 'String') }
      if (data.hasOwnProperty('invoiceDate')) { obj.invoiceDate = ApiClient.convertToType(data.invoiceDate, 'Date') }
    }
    return obj
  }
}

/**
 * The invoice number of the item.
 * @member {String} invoiceNumber
 */
InvoiceDetails.prototype.invoiceNumber = undefined

/**
 * The invoice date of the item in ISO 8061 format.
 * @member {Date} invoiceDate
 */
InvoiceDetails.prototype.invoiceDate = undefined

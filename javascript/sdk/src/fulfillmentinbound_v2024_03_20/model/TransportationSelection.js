/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { ContactInformation } from './ContactInformation.js'

/**
 * The TransportationSelection model module.
 * @module fulfillmentinbound_v2024_03_20/model/TransportationSelection
 * @version 2024-03-20
 */
export class TransportationSelection {
  /**
   * Constructs a new <code>TransportationSelection</code>.
   * The transportation option selected to confirm.
   * @alias module:fulfillmentinbound_v2024_03_20/model/TransportationSelection
   * @class
   * @param shipmentId {String} Shipment ID that the transportation Option is for.
   * @param transportationOptionId {String} Transportation option being selected for the provided shipment.
   */
  constructor (shipmentId, transportationOptionId) {
    this.shipmentId = shipmentId
    this.transportationOptionId = transportationOptionId
  }

  /**
   * Constructs a <code>TransportationSelection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/TransportationSelection} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/TransportationSelection} The populated <code>TransportationSelection</code> instance.
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
      obj = obj || new TransportationSelection()
      if (data.hasOwnProperty('contactInformation')) { obj.contactInformation = ContactInformation.constructFromObject(data.contactInformation) }
      if (data.hasOwnProperty('shipmentId')) { obj.shipmentId = ApiClient.convertToType(data.shipmentId, 'String') }
      if (data.hasOwnProperty('transportationOptionId')) { obj.transportationOptionId = ApiClient.convertToType(data.transportationOptionId, 'String') }
    }
    return obj
  }
}

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/ContactInformation} contactInformation
 */
TransportationSelection.prototype.contactInformation = undefined

/**
 * Shipment ID that the transportation Option is for.
 * @member {String} shipmentId
 */
TransportationSelection.prototype.shipmentId = undefined

/**
 * Transportation option being selected for the provided shipment.
 * @member {String} transportationOptionId
 */
TransportationSelection.prototype.transportationOptionId = undefined

/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'invoicing_v0', 'index.js');
const SellingPartnerApiForShipmentInvoicing = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForShipmentInvoicing.SubmitInvoiceRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForShipmentInvoicing.SubmitInvoiceRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('SubmitInvoiceRequest', () => {
  it('should create an instance of SubmitInvoiceRequest', () => {
    expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.SubmitInvoiceRequest);
  });

  it('should have the property invoiceContent', () => {
    // verify property exists
    expect(instance).to.have.property('invoiceContent');

    // set and verify value
    const expectedValue = generateMockData('Blob');
    instance.invoiceContent = expectedValue;
    expect(instance.invoiceContent).to.equal(expectedValue);
  });

  it('should have the property marketplaceId', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.marketplaceId = expectedValue;
    expect(instance.marketplaceId).to.equal(expectedValue);
  });

  it('should have the property contentMD5Value', () => {
    // verify property exists
    expect(instance).to.have.property('contentMD5Value');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.contentMD5Value = expectedValue;
    expect(instance.contentMD5Value).to.equal(expectedValue);
  });

});

// Helper function to generate random test data
function generateMockData(dataType, isArray = false) {
  if (!dataType) return {};

  // Handle array types
  if (isArray) {
    return [generateMockData(dataType), generateMockData(dataType)];
  }

  switch(dataType) {
    case 'String':
      return 'mock-' + Math.random().toString(36).substring(2, 10);
    case 'Number':
      return Math.floor(Math.random() * 1000);
    case 'Boolean':
      return Math.random() > 0.5;
    case 'Date':
      return new Date().toISOString();
    default:
      try {
        const ModelClass = SellingPartnerApiForShipmentInvoicing[dataType];
        if (ModelClass) {
          const instance = Object.create(ModelClass.prototype);
          return instance;
        }
      } catch (e) {
        console.error("Error creating instance of", dataType);
        return {};
      }
      return {};
  }
}

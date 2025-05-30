/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendordfpayments_v1', 'index.js');
const SellingPartnerApiForDirectFulfillmentPayments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentPayments.TaxDetail();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentPayments.TaxDetail.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('TaxDetail', () => {
  it('should create an instance of TaxDetail', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.TaxDetail);
  });

  it('should have the property taxType', () => {
    // verify property exists
    expect(instance).to.have.property('taxType');

    // set and verify value
    const expectedValue = ['CGST', 'SGST', 'CESS', 'UTGST', 'IGST', 'MwSt.', 'PST', 'TVA', 'VAT', 'GST', 'ST', 'Consumption', 'MutuallyDefined', 'DomesticVAT', ][0];
    instance.taxType = expectedValue;
    expect(instance.taxType).to.equal(expectedValue);
  });

  it('should have the property taxRate', () => {
    // verify property exists
    expect(instance).to.have.property('taxRate');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.taxRate = expectedValue;
    expect(instance.taxRate).to.equal(expectedValue);
  });

  it('should have the property taxAmount', () => {
    // verify property exists
    expect(instance).to.have.property('taxAmount');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.taxAmount = expectedValue;
    expect(instance.taxAmount).to.equal(expectedValue);
  });

  it('should have the property taxableAmount', () => {
    // verify property exists
    expect(instance).to.have.property('taxableAmount');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.taxableAmount = expectedValue;
    expect(instance.taxableAmount).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentPayments[dataType];
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

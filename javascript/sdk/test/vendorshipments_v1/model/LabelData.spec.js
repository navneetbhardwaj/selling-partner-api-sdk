/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

const modulePath = join(process.cwd(), 'src', 'vendorshipments_v1', 'index.js');
const SellingPartnerApiForRetailProcurementShipments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementShipments.LabelData.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('LabelData', () => {
  it('should create an instance of LabelData', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.LabelData);
  });

  it('should have the property labelSequenceNumber', () => {
    // verify property exists
    expect(instance).to.have.property('labelSequenceNumber');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.labelSequenceNumber = expectedValue;
    expect(instance.labelSequenceNumber).to.equal(expectedValue);
  });

  it('should have the property labelFormat', () => {
    // verify property exists
    expect(instance).to.have.property('labelFormat');

    // set and verify value
    const expectedValue = ['PDF', ][0];
    instance.labelFormat = expectedValue;
    expect(instance.labelFormat).to.equal(expectedValue);
  });

  it('should have the property carrierCode', () => {
    // verify property exists
    expect(instance).to.have.property('carrierCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.carrierCode = expectedValue;
    expect(instance.carrierCode).to.equal(expectedValue);
  });

  it('should have the property trackingId', () => {
    // verify property exists
    expect(instance).to.have.property('trackingId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.trackingId = expectedValue;
    expect(instance.trackingId).to.equal(expectedValue);
  });

  it('should have the property label', () => {
    // verify property exists
    expect(instance).to.have.property('label');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.label = expectedValue;
    expect(instance.label).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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

/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentoutbound_v2020_07_01', 'index.js');
const SellingPartnerApisForFulfillmentOutbound = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('FulfillmentShipment', () => {
  it('should create an instance of FulfillmentShipment', () => {
    expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment);
  });

  it('should have the property amazonShipmentId', () => {
    // verify property exists
    expect(instance).to.have.property('amazonShipmentId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.amazonShipmentId = expectedValue;
    expect(instance.amazonShipmentId).to.equal(expectedValue);
  });

  it('should have the property fulfillmentCenterId', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentCenterId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.fulfillmentCenterId = expectedValue;
    expect(instance.fulfillmentCenterId).to.equal(expectedValue);
  });

  it('should have the property fulfillmentShipmentStatus', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentShipmentStatus');

    // set and verify value
    const expectedValue = ['PENDING', 'SHIPPED', 'CANCELLED_BY_FULFILLER', 'CANCELLED_BY_SELLER', ][0];
    instance.fulfillmentShipmentStatus = expectedValue;
    expect(instance.fulfillmentShipmentStatus).to.equal(expectedValue);
  });

  it('should have the property shippingDate', () => {
    // verify property exists
    expect(instance).to.have.property('shippingDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.shippingDate = expectedValue;
    expect(instance.shippingDate).to.equal(expectedValue);
  });

  it('should have the property estimatedArrivalDate', () => {
    // verify property exists
    expect(instance).to.have.property('estimatedArrivalDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.estimatedArrivalDate = expectedValue;
    expect(instance.estimatedArrivalDate).to.equal(expectedValue);
  });

  it('should have the property shippingNotes', () => {
    // verify property exists
    expect(instance).to.have.property('shippingNotes');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.shippingNotes = expectedValue;
    expect(instance.shippingNotes).to.equal(expectedValue);
  });

  it('should have the property fulfillmentShipmentItem', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentShipmentItem');

    // set and verify value
    const expectedValue = generateMockData('FulfillmentShipmentItem', true);
    instance.fulfillmentShipmentItem = expectedValue;
    expect(instance.fulfillmentShipmentItem).to.equal(expectedValue);
  });

  it('should have the property fulfillmentShipmentPackage', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentShipmentPackage');

    // set and verify value
    const expectedValue = generateMockData('FulfillmentShipmentPackage', true);
    instance.fulfillmentShipmentPackage = expectedValue;
    expect(instance.fulfillmentShipmentPackage).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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

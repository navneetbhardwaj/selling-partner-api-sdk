/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendordforders_v2021_12_28', 'index.js');
const SellingPartnerApiForDirectFulfillmentOrders = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentOrders.OrderDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OrderDetails', () => {
  it('should create an instance of OrderDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.OrderDetails);
  });

  it('should have the property customerOrderNumber', () => {
    // verify property exists
    expect(instance).to.have.property('customerOrderNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.customerOrderNumber = expectedValue;
    expect(instance.customerOrderNumber).to.equal(expectedValue);
  });

  it('should have the property orderDate', () => {
    // verify property exists
    expect(instance).to.have.property('orderDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.orderDate = expectedValue;
    expect(instance.orderDate).to.equal(expectedValue);
  });

  it('should have the property orderStatus', () => {
    // verify property exists
    expect(instance).to.have.property('orderStatus');

    // set and verify value
    const expectedValue = ['NEW', 'SHIPPED', 'ACCEPTED', 'CANCELLED', ][0];
    instance.orderStatus = expectedValue;
    expect(instance.orderStatus).to.equal(expectedValue);
  });

  it('should have the property shipmentDetails', () => {
    // verify property exists
    expect(instance).to.have.property('shipmentDetails');

    // set and verify value
    const expectedValue = generateMockData('ShipmentDetails');
    instance.shipmentDetails = expectedValue;
    expect(instance.shipmentDetails).to.equal(expectedValue);
  });

  it('should have the property taxTotal', () => {
    // verify property exists
    expect(instance).to.have.property('taxTotal');

    // set and verify value
    const expectedValue = generateMockData('TaxItemDetails');
    instance.taxTotal = expectedValue;
    expect(instance.taxTotal).to.equal(expectedValue);
  });

  it('should have the property sellingParty', () => {
    // verify property exists
    expect(instance).to.have.property('sellingParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.sellingParty = expectedValue;
    expect(instance.sellingParty).to.equal(expectedValue);
  });

  it('should have the property shipFromParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipFromParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipFromParty = expectedValue;
    expect(instance.shipFromParty).to.equal(expectedValue);
  });

  it('should have the property shipToParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipToParty');

    // set and verify value
    const expectedValue = generateMockData('Address');
    instance.shipToParty = expectedValue;
    expect(instance.shipToParty).to.equal(expectedValue);
  });

  it('should have the property billToParty', () => {
    // verify property exists
    expect(instance).to.have.property('billToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.billToParty = expectedValue;
    expect(instance.billToParty).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('OrderItem', true);
    instance.items = expectedValue;
    expect(instance.items).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentOrders[dataType];
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

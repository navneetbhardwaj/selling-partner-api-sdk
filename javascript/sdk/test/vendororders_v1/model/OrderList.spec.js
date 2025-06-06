/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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

const modulePath = join(process.cwd(), 'src', 'vendororders_v1', 'index.js');
const SellingPartnerApiForRetailProcurementOrders = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementOrders.OrderList();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementOrders.OrderList.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OrderList', () => {
  it('should create an instance of OrderList', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderList);
  });

  it('should have the property pagination', () => {
    // verify property exists
    expect(instance).to.have.property('pagination');

    // set and verify value
    const expectedValue = generateMockData('Pagination');
    instance.pagination = expectedValue;
    expect(instance.pagination).to.equal(expectedValue);
  });

  it('should have the property orders', () => {
    // verify property exists
    expect(instance).to.have.property('orders');

    // set and verify value
    const expectedValue = generateMockData('Order', true);
    instance.orders = expectedValue;
    expect(instance.orders).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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

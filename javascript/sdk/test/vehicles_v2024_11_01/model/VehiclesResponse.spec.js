/**
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vehicles_v2024_11_01', 'index.js');
const TheSellingPartnerApiForAutomotive = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForAutomotive.VehiclesResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForAutomotive.VehiclesResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('VehiclesResponse', () => {
  it('should create an instance of VehiclesResponse', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForAutomotive.VehiclesResponse);
  });

  it('should have the property pagination', () => {
    // verify property exists
    expect(instance).to.have.property('pagination');

    // set and verify value
    const expectedValue = generateMockData('Pagination');
    instance.pagination = expectedValue;
    expect(instance.pagination).to.equal(expectedValue);
  });

  it('should have the property vehicles', () => {
    // verify property exists
    expect(instance).to.have.property('vehicles');

    // set and verify value
    const expectedValue = generateMockData('Vehicle', true);
    instance.vehicles = expectedValue;
    expect(instance.vehicles).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForAutomotive[dataType];
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

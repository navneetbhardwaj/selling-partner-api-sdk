/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
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

const modulePath = join(process.cwd(), 'src', 'supplysources_v2020_07_01', 'index.js');
const SellingPartnerApiForSupplySources = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForSupplySources.CurbsidePickupConfiguration();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForSupplySources.CurbsidePickupConfiguration.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('CurbsidePickupConfiguration', () => {
  it('should create an instance of CurbsidePickupConfiguration', () => {
    expect(instance).to.be.a(SellingPartnerApiForSupplySources.CurbsidePickupConfiguration);
  });

  it('should have the property isSupported', () => {
    // verify property exists
    expect(instance).to.have.property('isSupported');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isSupported = expectedValue;
    expect(instance.isSupported).to.equal(expectedValue);
  });

  it('should have the property operationalConfiguration', () => {
    // verify property exists
    expect(instance).to.have.property('operationalConfiguration');

    // set and verify value
    const expectedValue = generateMockData('OperationalConfiguration');
    instance.operationalConfiguration = expectedValue;
    expect(instance.operationalConfiguration).to.equal(expectedValue);
  });

  it('should have the property parkingWithAddressConfiguration', () => {
    // verify property exists
    expect(instance).to.have.property('parkingWithAddressConfiguration');

    // set and verify value
    const expectedValue = generateMockData('ParkingWithAddressConfiguration');
    instance.parkingWithAddressConfiguration = expectedValue;
    expect(instance.parkingWithAddressConfiguration).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForSupplySources[dataType];
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

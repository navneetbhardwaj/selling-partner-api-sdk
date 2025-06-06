/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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

const modulePath = join(process.cwd(), 'src', 'pricing_v0', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForPricing.ASINIdentifier();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.ASINIdentifier.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ASINIdentifier', () => {
  it('should create an instance of ASINIdentifier', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.ASINIdentifier);
  });

  it('should have the property marketplaceId', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.marketplaceId = expectedValue;
    expect(instance.marketplaceId).to.equal(expectedValue);
  });

  it('should have the property ASIN', () => {
    // verify property exists
    expect(instance).to.have.property('ASIN');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.ASIN = expectedValue;
    expect(instance.ASIN).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForPricing[dataType];
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

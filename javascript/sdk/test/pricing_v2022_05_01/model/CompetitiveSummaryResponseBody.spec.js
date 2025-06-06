/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'pricing_v2022_05_01', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForPricing.CompetitiveSummaryResponseBody();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.CompetitiveSummaryResponseBody.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('CompetitiveSummaryResponseBody', () => {
  it('should create an instance of CompetitiveSummaryResponseBody', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.CompetitiveSummaryResponseBody);
  });

  it('should have the property asin', () => {
    // verify property exists
    expect(instance).to.have.property('asin');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.asin = expectedValue;
    expect(instance.asin).to.equal(expectedValue);
  });

  it('should have the property marketplaceId', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.marketplaceId = expectedValue;
    expect(instance.marketplaceId).to.equal(expectedValue);
  });

  it('should have the property featuredBuyingOptions', () => {
    // verify property exists
    expect(instance).to.have.property('featuredBuyingOptions');

    // set and verify value
    const expectedValue = generateMockData('FeaturedBuyingOption', true);
    instance.featuredBuyingOptions = expectedValue;
    expect(instance.featuredBuyingOptions).to.equal(expectedValue);
  });

  it('should have the property lowestPricedOffers', () => {
    // verify property exists
    expect(instance).to.have.property('lowestPricedOffers');

    // set and verify value
    const expectedValue = generateMockData('LowestPricedOffer', true);
    instance.lowestPricedOffers = expectedValue;
    expect(instance.lowestPricedOffers).to.equal(expectedValue);
  });

  it('should have the property referencePrices', () => {
    // verify property exists
    expect(instance).to.have.property('referencePrices');

    // set and verify value
    const expectedValue = generateMockData('ReferencePrice', true);
    instance.referencePrices = expectedValue;
    expect(instance.referencePrices).to.equal(expectedValue);
  });

  it('should have the property errors', () => {
    // verify property exists
    expect(instance).to.have.property('errors');

    // set and verify value
    const expectedValue = generateMockData('Error', true);
    instance.errors = expectedValue;
    expect(instance.errors).to.equal(expectedValue);
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

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
    instance = new SellingPartnerApiForPricing.OfferType();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.OfferType.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OfferType', () => {
  it('should create an instance of OfferType', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.OfferType);
  });

  it('should have the property offerType', () => {
    // verify property exists
    expect(instance).to.have.property('offerType');

    // set and verify value
    const expectedValue = generateMockData('OfferCustomerType');
    instance.offerType = expectedValue;
    expect(instance.offerType).to.equal(expectedValue);
  });

  it('should have the property buyingPrice', () => {
    // verify property exists
    expect(instance).to.have.property('buyingPrice');

    // set and verify value
    const expectedValue = generateMockData('PriceType');
    instance.buyingPrice = expectedValue;
    expect(instance.buyingPrice).to.equal(expectedValue);
  });

  it('should have the property regularPrice', () => {
    // verify property exists
    expect(instance).to.have.property('regularPrice');

    // set and verify value
    const expectedValue = generateMockData('MoneyType');
    instance.regularPrice = expectedValue;
    expect(instance.regularPrice).to.equal(expectedValue);
  });

  it('should have the property businessPrice', () => {
    // verify property exists
    expect(instance).to.have.property('businessPrice');

    // set and verify value
    const expectedValue = generateMockData('MoneyType');
    instance.businessPrice = expectedValue;
    expect(instance.businessPrice).to.equal(expectedValue);
  });

  it('should have the property quantityDiscountPrices', () => {
    // verify property exists
    expect(instance).to.have.property('quantityDiscountPrices');

    // set and verify value
    const expectedValue = generateMockData('QuantityDiscountPriceType', true);
    instance.quantityDiscountPrices = expectedValue;
    expect(instance.quantityDiscountPrices).to.equal(expectedValue);
  });

  it('should have the property fulfillmentChannel', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentChannel');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.fulfillmentChannel = expectedValue;
    expect(instance.fulfillmentChannel).to.equal(expectedValue);
  });

  it('should have the property itemCondition', () => {
    // verify property exists
    expect(instance).to.have.property('itemCondition');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.itemCondition = expectedValue;
    expect(instance.itemCondition).to.equal(expectedValue);
  });

  it('should have the property itemSubCondition', () => {
    // verify property exists
    expect(instance).to.have.property('itemSubCondition');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.itemSubCondition = expectedValue;
    expect(instance.itemSubCondition).to.equal(expectedValue);
  });

  it('should have the property sellerSKU', () => {
    // verify property exists
    expect(instance).to.have.property('sellerSKU');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerSKU = expectedValue;
    expect(instance.sellerSKU).to.equal(expectedValue);
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

/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'catalogitems_v2022_04_01', 'index.js');
const SellingPartnerApiForCatalogItems = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ItemVendorDetailsByMarketplace', () => {
  it('should create an instance of ItemVendorDetailsByMarketplace', () => {
    expect(instance).to.be.a(SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace);
  });

  it('should have the property marketplaceId', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.marketplaceId = expectedValue;
    expect(instance.marketplaceId).to.equal(expectedValue);
  });

  it('should have the property brandCode', () => {
    // verify property exists
    expect(instance).to.have.property('brandCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.brandCode = expectedValue;
    expect(instance.brandCode).to.equal(expectedValue);
  });

  it('should have the property manufacturerCode', () => {
    // verify property exists
    expect(instance).to.have.property('manufacturerCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.manufacturerCode = expectedValue;
    expect(instance.manufacturerCode).to.equal(expectedValue);
  });

  it('should have the property manufacturerCodeParent', () => {
    // verify property exists
    expect(instance).to.have.property('manufacturerCodeParent');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.manufacturerCodeParent = expectedValue;
    expect(instance.manufacturerCodeParent).to.equal(expectedValue);
  });

  it('should have the property productCategory', () => {
    // verify property exists
    expect(instance).to.have.property('productCategory');

    // set and verify value
    const expectedValue = generateMockData('ItemVendorDetailsCategory');
    instance.productCategory = expectedValue;
    expect(instance.productCategory).to.equal(expectedValue);
  });

  it('should have the property productGroup', () => {
    // verify property exists
    expect(instance).to.have.property('productGroup');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.productGroup = expectedValue;
    expect(instance.productGroup).to.equal(expectedValue);
  });

  it('should have the property productSubcategory', () => {
    // verify property exists
    expect(instance).to.have.property('productSubcategory');

    // set and verify value
    const expectedValue = generateMockData('ItemVendorDetailsCategory');
    instance.productSubcategory = expectedValue;
    expect(instance.productSubcategory).to.equal(expectedValue);
  });

  it('should have the property replenishmentCategory', () => {
    // verify property exists
    expect(instance).to.have.property('replenishmentCategory');

    // set and verify value
    const expectedValue = ['ALLOCATED', 'BASIC_REPLENISHMENT', 'IN_SEASON', 'LIMITED_REPLENISHMENT', 'MANUFACTURER_OUT_OF_STOCK', 'NEW_PRODUCT', 'NON_REPLENISHABLE', 'NON_STOCKUPABLE', 'OBSOLETE', 'PLANNED_REPLENISHMENT', ][0];
    instance.replenishmentCategory = expectedValue;
    expect(instance.replenishmentCategory).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForCatalogItems[dataType];
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

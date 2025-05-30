/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'replenishment_v2022_11_07', 'index.js');
const SellingPartnerApiForReplenishment = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForReplenishment.ListOfferMetricsResponseOffer();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForReplenishment.ListOfferMetricsResponseOffer.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ListOfferMetricsResponseOffer', () => {
  it('should create an instance of ListOfferMetricsResponseOffer', () => {
    expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOfferMetricsResponseOffer);
  });

  it('should have the property asin', () => {
    // verify property exists
    expect(instance).to.have.property('asin');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.asin = expectedValue;
    expect(instance.asin).to.equal(expectedValue);
  });

  it('should have the property notDeliveredDueToOOS', () => {
    // verify property exists
    expect(instance).to.have.property('notDeliveredDueToOOS');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.notDeliveredDueToOOS = expectedValue;
    expect(instance.notDeliveredDueToOOS).to.equal(expectedValue);
  });

  it('should have the property totalSubscriptionsRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('totalSubscriptionsRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.totalSubscriptionsRevenue = expectedValue;
    expect(instance.totalSubscriptionsRevenue).to.equal(expectedValue);
  });

  it('should have the property shippedSubscriptionUnits', () => {
    // verify property exists
    expect(instance).to.have.property('shippedSubscriptionUnits');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.shippedSubscriptionUnits = expectedValue;
    expect(instance.shippedSubscriptionUnits).to.equal(expectedValue);
  });

  it('should have the property activeSubscriptions', () => {
    // verify property exists
    expect(instance).to.have.property('activeSubscriptions');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.activeSubscriptions = expectedValue;
    expect(instance.activeSubscriptions).to.equal(expectedValue);
  });

  it('should have the property revenuePenetration', () => {
    // verify property exists
    expect(instance).to.have.property('revenuePenetration');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenuePenetration = expectedValue;
    expect(instance.revenuePenetration).to.equal(expectedValue);
  });

  it('should have the property lostRevenueDueToOOS', () => {
    // verify property exists
    expect(instance).to.have.property('lostRevenueDueToOOS');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.lostRevenueDueToOOS = expectedValue;
    expect(instance.lostRevenueDueToOOS).to.equal(expectedValue);
  });

  it('should have the property couponsRevenuePenetration', () => {
    // verify property exists
    expect(instance).to.have.property('couponsRevenuePenetration');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.couponsRevenuePenetration = expectedValue;
    expect(instance.couponsRevenuePenetration).to.equal(expectedValue);
  });

  it('should have the property shareOfCouponSubscriptions', () => {
    // verify property exists
    expect(instance).to.have.property('shareOfCouponSubscriptions');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.shareOfCouponSubscriptions = expectedValue;
    expect(instance.shareOfCouponSubscriptions).to.equal(expectedValue);
  });

  it('should have the property next30DayTotalSubscriptionsRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('next30DayTotalSubscriptionsRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.next30DayTotalSubscriptionsRevenue = expectedValue;
    expect(instance.next30DayTotalSubscriptionsRevenue).to.equal(expectedValue);
  });

  it('should have the property next60DayTotalSubscriptionsRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('next60DayTotalSubscriptionsRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.next60DayTotalSubscriptionsRevenue = expectedValue;
    expect(instance.next60DayTotalSubscriptionsRevenue).to.equal(expectedValue);
  });

  it('should have the property next90DayTotalSubscriptionsRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('next90DayTotalSubscriptionsRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.next90DayTotalSubscriptionsRevenue = expectedValue;
    expect(instance.next90DayTotalSubscriptionsRevenue).to.equal(expectedValue);
  });

  it('should have the property next30DayShippedSubscriptionUnits', () => {
    // verify property exists
    expect(instance).to.have.property('next30DayShippedSubscriptionUnits');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.next30DayShippedSubscriptionUnits = expectedValue;
    expect(instance.next30DayShippedSubscriptionUnits).to.equal(expectedValue);
  });

  it('should have the property next60DayShippedSubscriptionUnits', () => {
    // verify property exists
    expect(instance).to.have.property('next60DayShippedSubscriptionUnits');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.next60DayShippedSubscriptionUnits = expectedValue;
    expect(instance.next60DayShippedSubscriptionUnits).to.equal(expectedValue);
  });

  it('should have the property next90DayShippedSubscriptionUnits', () => {
    // verify property exists
    expect(instance).to.have.property('next90DayShippedSubscriptionUnits');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.next90DayShippedSubscriptionUnits = expectedValue;
    expect(instance.next90DayShippedSubscriptionUnits).to.equal(expectedValue);
  });

  it('should have the property timeInterval', () => {
    // verify property exists
    expect(instance).to.have.property('timeInterval');

    // set and verify value
    const expectedValue = generateMockData('TimeInterval');
    instance.timeInterval = expectedValue;
    expect(instance.timeInterval).to.equal(expectedValue);
  });

  it('should have the property currencyCode', () => {
    // verify property exists
    expect(instance).to.have.property('currencyCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.currencyCode = expectedValue;
    expect(instance.currencyCode).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForReplenishment[dataType];
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

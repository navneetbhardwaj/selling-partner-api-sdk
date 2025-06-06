/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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

const modulePath = join(process.cwd(), 'src', 'notifications_v1', 'index.js');
const SellingPartnerApiForNotifications = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForNotifications.ProcessingDirective();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForNotifications.ProcessingDirective.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ProcessingDirective', () => {
  it('should create an instance of ProcessingDirective', () => {
    expect(instance).to.be.a(SellingPartnerApiForNotifications.ProcessingDirective);
  });

  it('should have the property eventFilter', () => {
    // verify property exists
    expect(instance).to.have.property('eventFilter');

    // set and verify value
    const expectedValue = generateMockData('EventFilter');
    instance.eventFilter = expectedValue;
    expect(instance.eventFilter).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForNotifications[dataType];
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

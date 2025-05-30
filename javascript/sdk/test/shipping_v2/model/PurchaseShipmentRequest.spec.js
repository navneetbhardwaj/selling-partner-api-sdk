/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'shipping_v2', 'index.js');
const AmazonShippingApi = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new AmazonShippingApi.PurchaseShipmentRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.PurchaseShipmentRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PurchaseShipmentRequest', () => {
  it('should create an instance of PurchaseShipmentRequest', () => {
    expect(instance).to.be.a(AmazonShippingApi.PurchaseShipmentRequest);
  });

  it('should have the property requestToken', () => {
    // verify property exists
    expect(instance).to.have.property('requestToken');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.requestToken = expectedValue;
    expect(instance.requestToken).to.equal(expectedValue);
  });

  it('should have the property rateId', () => {
    // verify property exists
    expect(instance).to.have.property('rateId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.rateId = expectedValue;
    expect(instance.rateId).to.equal(expectedValue);
  });

  it('should have the property requestedDocumentSpecification', () => {
    // verify property exists
    expect(instance).to.have.property('requestedDocumentSpecification');

    // set and verify value
    const expectedValue = generateMockData('RequestedDocumentSpecification');
    instance.requestedDocumentSpecification = expectedValue;
    expect(instance.requestedDocumentSpecification).to.equal(expectedValue);
  });

  it('should have the property requestedValueAddedServices', () => {
    // verify property exists
    expect(instance).to.have.property('requestedValueAddedServices');

    // set and verify value
    const expectedValue = generateMockData('RequestedValueAddedService', true);
    instance.requestedValueAddedServices = expectedValue;
    expect(instance.requestedValueAddedServices).to.equal(expectedValue);
  });

  it('should have the property additionalInputs', () => {
    // verify property exists
    expect(instance).to.have.property('additionalInputs');

    // set and verify value
    const expectedValue = generateMockData('{String: Object}');
    instance.additionalInputs = expectedValue;
    expect(instance.additionalInputs).to.equal(expectedValue);
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
        const ModelClass = AmazonShippingApi[dataType];
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

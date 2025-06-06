/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'invoices_v2024_06_19', 'index.js');
const TheSellingPartnerApiForInvoices = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForInvoices.Invoice();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForInvoices.Invoice.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Invoice', () => {
  it('should create an instance of Invoice', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForInvoices.Invoice);
  });

  it('should have the property date', () => {
    // verify property exists
    expect(instance).to.have.property('date');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.date = expectedValue;
    expect(instance.date).to.equal(expectedValue);
  });

  it('should have the property errorCode', () => {
    // verify property exists
    expect(instance).to.have.property('errorCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.errorCode = expectedValue;
    expect(instance.errorCode).to.equal(expectedValue);
  });

  it('should have the property externalInvoiceId', () => {
    // verify property exists
    expect(instance).to.have.property('externalInvoiceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.externalInvoiceId = expectedValue;
    expect(instance.externalInvoiceId).to.equal(expectedValue);
  });

  it('should have the property govResponse', () => {
    // verify property exists
    expect(instance).to.have.property('govResponse');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.govResponse = expectedValue;
    expect(instance.govResponse).to.equal(expectedValue);
  });

  it('should have the property id', () => {
    // verify property exists
    expect(instance).to.have.property('id');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.id = expectedValue;
    expect(instance.id).to.equal(expectedValue);
  });

  it('should have the property invoiceType', () => {
    // verify property exists
    expect(instance).to.have.property('invoiceType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.invoiceType = expectedValue;
    expect(instance.invoiceType).to.equal(expectedValue);
  });

  it('should have the property series', () => {
    // verify property exists
    expect(instance).to.have.property('series');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.series = expectedValue;
    expect(instance.series).to.equal(expectedValue);
  });

  it('should have the property status', () => {
    // verify property exists
    expect(instance).to.have.property('status');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.status = expectedValue;
    expect(instance.status).to.equal(expectedValue);
  });

  it('should have the property transactionIds', () => {
    // verify property exists
    expect(instance).to.have.property('transactionIds');

    // set and verify value
    const expectedValue = generateMockData('TransactionIdentifier', true);
    instance.transactionIds = expectedValue;
    expect(instance.transactionIds).to.equal(expectedValue);
  });

  it('should have the property transactionType', () => {
    // verify property exists
    expect(instance).to.have.property('transactionType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.transactionType = expectedValue;
    expect(instance.transactionType).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForInvoices[dataType];
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

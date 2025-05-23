/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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

const modulePath = join(process.cwd(), 'src', 'vendorinvoices_v1', 'index.js');
const SellingPartnerApiForRetailProcurementPayments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementPayments.Invoice.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Invoice', () => {
  it('should create an instance of Invoice', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.Invoice);
  });

  it('should have the property invoiceType', () => {
    // verify property exists
    expect(instance).to.have.property('invoiceType');

    // set and verify value
    const expectedValue = ['Invoice', 'CreditNote', ][0];
    instance.invoiceType = expectedValue;
    expect(instance.invoiceType).to.equal(expectedValue);
  });

  it('should have the property id', () => {
    // verify property exists
    expect(instance).to.have.property('id');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.id = expectedValue;
    expect(instance.id).to.equal(expectedValue);
  });

  it('should have the property referenceNumber', () => {
    // verify property exists
    expect(instance).to.have.property('referenceNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.referenceNumber = expectedValue;
    expect(instance.referenceNumber).to.equal(expectedValue);
  });

  it('should have the property date', () => {
    // verify property exists
    expect(instance).to.have.property('date');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.date = expectedValue;
    expect(instance.date).to.equal(expectedValue);
  });

  it('should have the property remitToParty', () => {
    // verify property exists
    expect(instance).to.have.property('remitToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.remitToParty = expectedValue;
    expect(instance.remitToParty).to.equal(expectedValue);
  });

  it('should have the property shipToParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipToParty = expectedValue;
    expect(instance.shipToParty).to.equal(expectedValue);
  });

  it('should have the property shipFromParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipFromParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipFromParty = expectedValue;
    expect(instance.shipFromParty).to.equal(expectedValue);
  });

  it('should have the property billToParty', () => {
    // verify property exists
    expect(instance).to.have.property('billToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.billToParty = expectedValue;
    expect(instance.billToParty).to.equal(expectedValue);
  });

  it('should have the property paymentTerms', () => {
    // verify property exists
    expect(instance).to.have.property('paymentTerms');

    // set and verify value
    const expectedValue = generateMockData('PaymentTerms');
    instance.paymentTerms = expectedValue;
    expect(instance.paymentTerms).to.equal(expectedValue);
  });

  it('should have the property invoiceTotal', () => {
    // verify property exists
    expect(instance).to.have.property('invoiceTotal');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.invoiceTotal = expectedValue;
    expect(instance.invoiceTotal).to.equal(expectedValue);
  });

  it('should have the property taxDetails', () => {
    // verify property exists
    expect(instance).to.have.property('taxDetails');

    // set and verify value
    const expectedValue = generateMockData('TaxDetails', true);
    instance.taxDetails = expectedValue;
    expect(instance.taxDetails).to.equal(expectedValue);
  });

  it('should have the property additionalDetails', () => {
    // verify property exists
    expect(instance).to.have.property('additionalDetails');

    // set and verify value
    const expectedValue = generateMockData('AdditionalDetails', true);
    instance.additionalDetails = expectedValue;
    expect(instance.additionalDetails).to.equal(expectedValue);
  });

  it('should have the property chargeDetails', () => {
    // verify property exists
    expect(instance).to.have.property('chargeDetails');

    // set and verify value
    const expectedValue = generateMockData('ChargeDetails', true);
    instance.chargeDetails = expectedValue;
    expect(instance.chargeDetails).to.equal(expectedValue);
  });

  it('should have the property allowanceDetails', () => {
    // verify property exists
    expect(instance).to.have.property('allowanceDetails');

    // set and verify value
    const expectedValue = generateMockData('AllowanceDetails', true);
    instance.allowanceDetails = expectedValue;
    expect(instance.allowanceDetails).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('InvoiceItem', true);
    instance.items = expectedValue;
    expect(instance.items).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementPayments[dataType];
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

/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import sinon from 'sinon';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendorshipments_v1', 'index.js');
const SellingPartnerApiForRetailProcurementShipments = await import(modulePath);

let instance;
let sandbox;
const testEndpoint = 'https://localhost:3000';
const testAccessToken = "testAccessToken";

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
        const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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

// Generate mock requests and responses for each operation
const mockgetShipmentDetailsData = {
  request: {
  },
  response: {
    data: generateMockData('GetShipmentDetailsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentLabelsData = {
  request: {
  },
  response: {
    data: generateMockData('GetShipmentLabels'),
    statusCode: 200,
    headers: {}
  }
};
const mocksubmitShipmentConfirmationsData = {
  request: {
    'body': generateMockData('SubmitShipmentConfirmationsRequest')
  },
  response: {
    data: generateMockData('SubmitShipmentConfirmationsResponse'),
    statusCode: 202,
    headers: {}
  }
};
const mocksubmitShipmentsData = {
  request: {
    'body': generateMockData('SubmitShipments')
  },
  response: {
    data: generateMockData('SubmitShipmentConfirmationsResponse'),
    statusCode: 202,
    headers: {}
  }
};

describe('VendorShippingApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForRetailProcurementShipments.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getShipmentDetails', () => {
    it('should successfully call getShipmentDetails', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentDetailsData.response);

      const params = [
      ];
      const data = await instance.getShipmentDetails(...params);

      expect(data instanceof SellingPartnerApiForRetailProcurementShipments.GetShipmentDetailsResponse).to.be.true;
      expect(data).to.equal(mockgetShipmentDetailsData.response.data);
    });

    it('should successfully call getShipmentDetailsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentDetailsData.response);

      const params = [
      ];
      const response = await instance.getShipmentDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetShipmentDetailsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetShipmentDetailsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
        ];
        await instance.getShipmentDetails(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getShipmentLabels', () => {
    it('should successfully call getShipmentLabels', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentLabelsData.response);

      const params = [
      ];
      const data = await instance.getShipmentLabels(...params);

      expect(data instanceof SellingPartnerApiForRetailProcurementShipments.GetShipmentLabels).to.be.true;
      expect(data).to.equal(mockgetShipmentLabelsData.response.data);
    });

    it('should successfully call getShipmentLabelsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentLabelsData.response);

      const params = [
      ];
      const response = await instance.getShipmentLabelsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetShipmentLabelsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetShipmentLabelsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
        ];
        await instance.getShipmentLabels(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('submitShipmentConfirmations', () => {
    it('should successfully call submitShipmentConfirmations', async () => {
      instance.apiClient.callApi.resolves(mocksubmitShipmentConfirmationsData.response);

      const params = [
        mocksubmitShipmentConfirmationsData.request['body']
      ];
      const data = await instance.submitShipmentConfirmations(...params);

      expect(data instanceof SellingPartnerApiForRetailProcurementShipments.SubmitShipmentConfirmationsResponse).to.be.true;
      expect(data).to.equal(mocksubmitShipmentConfirmationsData.response.data);
    });

    it('should successfully call submitShipmentConfirmationsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksubmitShipmentConfirmationsData.response);

      const params = [
        mocksubmitShipmentConfirmationsData.request['body']
      ];
      const response = await instance.submitShipmentConfirmationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksubmitShipmentConfirmationsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocksubmitShipmentConfirmationsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocksubmitShipmentConfirmationsData.request['body']
        ];
        await instance.submitShipmentConfirmations(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('submitShipments', () => {
    it('should successfully call submitShipments', async () => {
      instance.apiClient.callApi.resolves(mocksubmitShipmentsData.response);

      const params = [
        mocksubmitShipmentsData.request['body']
      ];
      const data = await instance.submitShipments(...params);

      expect(data instanceof SellingPartnerApiForRetailProcurementShipments.SubmitShipmentConfirmationsResponse).to.be.true;
      expect(data).to.equal(mocksubmitShipmentsData.response.data);
    });

    it('should successfully call submitShipmentsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksubmitShipmentsData.response);

      const params = [
        mocksubmitShipmentsData.request['body']
      ];
      const response = await instance.submitShipmentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksubmitShipmentsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocksubmitShipmentsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocksubmitShipmentsData.request['body']
        ];
        await instance.submitShipments(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForRetailProcurementShipments.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForRetailProcurementShipments.ApiClient();
      const customInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});

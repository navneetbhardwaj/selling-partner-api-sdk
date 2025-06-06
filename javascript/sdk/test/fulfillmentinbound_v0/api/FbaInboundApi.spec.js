/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import sinon from 'sinon';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v0', 'index.js');
const SellingPartnerApiForFulfillmentInbound = await import(modulePath);

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
        const ModelClass = SellingPartnerApiForFulfillmentInbound[dataType];
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
const mockgetBillOfLadingData = {
  request: {
    'shipmentId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetBillOfLadingResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetLabelsData = {
  request: {
    'shipmentId': generateMockData('String'),
    'pageType': generateMockData('String'),
    'labelType': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetLabelsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetPrepInstructionsData = {
  request: {
    'shipToCountryCode': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetPrepInstructionsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentItemsData = {
  request: {
    'queryType': generateMockData('String'),
    'marketplaceId': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetShipmentItemsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentItemsByShipmentIdData = {
  request: {
    'shipmentId': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetShipmentItemsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentsData = {
  request: {
    'queryType': generateMockData('String'),
    'marketplaceId': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetShipmentsResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('FbaInboundApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForFulfillmentInbound.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getBillOfLading', () => {
    it('should successfully call getBillOfLading', async () => {
      instance.apiClient.callApi.resolves(mockgetBillOfLadingData.response);

      const params = [
        mockgetBillOfLadingData.request['shipmentId']
      ];
      const data = await instance.getBillOfLading(...params);

      expect(data instanceof SellingPartnerApiForFulfillmentInbound.GetBillOfLadingResponse).to.be.true;
      expect(data).to.equal(mockgetBillOfLadingData.response.data);
    });

    it('should successfully call getBillOfLadingWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetBillOfLadingData.response);

      const params = [
        mockgetBillOfLadingData.request['shipmentId']
      ];
      const response = await instance.getBillOfLadingWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetBillOfLadingData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetBillOfLadingData.response.data)
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
          mockgetBillOfLadingData.request['shipmentId']
        ];
        await instance.getBillOfLading(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getLabels', () => {
    it('should successfully call getLabels', async () => {
      instance.apiClient.callApi.resolves(mockgetLabelsData.response);

      const params = [
        mockgetLabelsData.request['shipmentId'],
        mockgetLabelsData.request['pageType'],
        mockgetLabelsData.request['labelType'],
      ];
      const data = await instance.getLabels(...params);

      expect(data instanceof SellingPartnerApiForFulfillmentInbound.GetLabelsResponse).to.be.true;
      expect(data).to.equal(mockgetLabelsData.response.data);
    });

    it('should successfully call getLabelsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetLabelsData.response);

      const params = [
        mockgetLabelsData.request['shipmentId'],
        mockgetLabelsData.request['pageType'],
        mockgetLabelsData.request['labelType'],
      ];
      const response = await instance.getLabelsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetLabelsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetLabelsData.response.data)
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
          mockgetLabelsData.request['shipmentId'],
          mockgetLabelsData.request['pageType'],
          mockgetLabelsData.request['labelType'],
        ];
        await instance.getLabels(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getPrepInstructions', () => {
    it('should successfully call getPrepInstructions', async () => {
      instance.apiClient.callApi.resolves(mockgetPrepInstructionsData.response);

      const params = [
        mockgetPrepInstructionsData.request['shipToCountryCode'],
      ];
      const data = await instance.getPrepInstructions(...params);

      expect(data instanceof SellingPartnerApiForFulfillmentInbound.GetPrepInstructionsResponse).to.be.true;
      expect(data).to.equal(mockgetPrepInstructionsData.response.data);
    });

    it('should successfully call getPrepInstructionsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetPrepInstructionsData.response);

      const params = [
        mockgetPrepInstructionsData.request['shipToCountryCode'],
      ];
      const response = await instance.getPrepInstructionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetPrepInstructionsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetPrepInstructionsData.response.data)
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
          mockgetPrepInstructionsData.request['shipToCountryCode'],
        ];
        await instance.getPrepInstructions(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getShipmentItems', () => {
    it('should successfully call getShipmentItems', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentItemsData.response);

      const params = [
        mockgetShipmentItemsData.request['queryType'],
        mockgetShipmentItemsData.request['marketplaceId'],
      ];
      const data = await instance.getShipmentItems(...params);

      expect(data instanceof SellingPartnerApiForFulfillmentInbound.GetShipmentItemsResponse).to.be.true;
      expect(data).to.equal(mockgetShipmentItemsData.response.data);
    });

    it('should successfully call getShipmentItemsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentItemsData.response);

      const params = [
        mockgetShipmentItemsData.request['queryType'],
        mockgetShipmentItemsData.request['marketplaceId'],
      ];
      const response = await instance.getShipmentItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetShipmentItemsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetShipmentItemsData.response.data)
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
          mockgetShipmentItemsData.request['queryType'],
          mockgetShipmentItemsData.request['marketplaceId'],
        ];
        await instance.getShipmentItems(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getShipmentItemsByShipmentId', () => {
    it('should successfully call getShipmentItemsByShipmentId', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentItemsByShipmentIdData.response);

      const params = [
        mockgetShipmentItemsByShipmentIdData.request['shipmentId'],
      ];
      const data = await instance.getShipmentItemsByShipmentId(...params);

      expect(data instanceof SellingPartnerApiForFulfillmentInbound.GetShipmentItemsResponse).to.be.true;
      expect(data).to.equal(mockgetShipmentItemsByShipmentIdData.response.data);
    });

    it('should successfully call getShipmentItemsByShipmentIdWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentItemsByShipmentIdData.response);

      const params = [
        mockgetShipmentItemsByShipmentIdData.request['shipmentId'],
      ];
      const response = await instance.getShipmentItemsByShipmentIdWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetShipmentItemsByShipmentIdData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetShipmentItemsByShipmentIdData.response.data)
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
          mockgetShipmentItemsByShipmentIdData.request['shipmentId'],
        ];
        await instance.getShipmentItemsByShipmentId(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getShipments', () => {
    it('should successfully call getShipments', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentsData.response);

      const params = [
        mockgetShipmentsData.request['queryType'],
        mockgetShipmentsData.request['marketplaceId'],
      ];
      const data = await instance.getShipments(...params);

      expect(data instanceof SellingPartnerApiForFulfillmentInbound.GetShipmentsResponse).to.be.true;
      expect(data).to.equal(mockgetShipmentsData.response.data);
    });

    it('should successfully call getShipmentsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentsData.response);

      const params = [
        mockgetShipmentsData.request['queryType'],
        mockgetShipmentsData.request['marketplaceId'],
      ];
      const response = await instance.getShipmentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetShipmentsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetShipmentsData.response.data)
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
          mockgetShipmentsData.request['queryType'],
          mockgetShipmentsData.request['marketplaceId'],
        ];
        await instance.getShipments(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForFulfillmentInbound.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForFulfillmentInbound.ApiClient();
      const customInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});

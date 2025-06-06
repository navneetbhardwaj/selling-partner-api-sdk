# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.seller_wallet_2024_03_01.accounts_api import AccountsApi

import spapi.models.seller_wallet_2024_03_01 as models

class TestAccountsApi(unittest.TestCase):
    """AccountsApi unit test stubs"""

    def setUp(self):
        # Tests Mock Server
        self.mock_server_endpoint = "http://localhost:3000"
        self.mock_server_endpoint_oauth = "http://localhost:3000/auth/o2/token"
        config = SPAPIConfig(
            client_id="clientId",
            client_secret="clientSecret",
            refresh_token="refreshToken",
            region="NA",
            scope = None
        )
        client = SPAPIClient(config, self.mock_server_endpoint_oauth, self.mock_server_endpoint)
        self.api = AccountsApi(client.api_client)

    def tearDown(self):
        pass

    def test_get_account(self):
        account_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("get_account"), "200")
        response = self.api.get_account_with_http_info(account_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_account_balances(self):
        account_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("list_account_balances"), "200")
        response = self.api.list_account_balances_with_http_info(account_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_accounts(self):
        marketplace_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("list_accounts"), "200")
        response = self.api.list_accounts_with_http_info(marketplace_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass


    def instruct_backend_mock(self, response: str, code: str) -> None:
        url = f"{self.mock_server_endpoint}/response/{response}/code/{code}"
        ## handle same api operation name exceptions
        if "vendor" in "api.seller_wallet_2024_03_01" and response == "getOrder":
            url += f"?qualifier=Vendor"
        if "fulfillment_inbound" in "api.seller_wallet_2024_03_01" and response == "getShipment":
            url += f"?qualifier=FbaInbound"
        if "seller_wallet" in "api.seller_wallet_2024_03_01" and response == "getAccount":
            url += f"?qualifier=SellerWallet"
        if "seller_wallet" in "api.seller_wallet_2024_03_01" and response == "getTransaction":
            url += f"?qualifier=SellerWallet"
        requests.post(url)

    def _get_random_value(self, data_type, pattern=None):
        if pattern:
            return rstr.xeger(pattern)

        basic_types = {
            'str': "test_string",
            'string': "test_string",
            'int': 123,
            'integer': 123,
            'float': 123.45,
            'bool': True,
            'boolean': True
        }

        return basic_types.get(data_type.lower(), {})

    def assert_valid_response_payload(self, status_code: int, body: any) -> None:
        if status_code != 204:
            self.assertIsNotNone(body)

    def to_camel_case(self, snake_str):
        components = snake_str.split('_')
        return components[0] + ''.join(x.title() for x in components[1:])

if __name__ == '__main__':
    unittest.main()
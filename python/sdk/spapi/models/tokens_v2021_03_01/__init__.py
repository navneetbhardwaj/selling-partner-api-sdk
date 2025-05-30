# coding: utf-8

# flake8: noqa
"""
    Selling Partner API for Tokens 

    The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).

    The version of the OpenAPI document: 2021-03-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


# import models into model package
from spapi.models.tokens_v2021_03_01.create_restricted_data_token_request import CreateRestrictedDataTokenRequest
from spapi.models.tokens_v2021_03_01.create_restricted_data_token_response import CreateRestrictedDataTokenResponse
from spapi.models.tokens_v2021_03_01.error import Error
from spapi.models.tokens_v2021_03_01.error_list import ErrorList
from spapi.models.tokens_v2021_03_01.restricted_resource import RestrictedResource

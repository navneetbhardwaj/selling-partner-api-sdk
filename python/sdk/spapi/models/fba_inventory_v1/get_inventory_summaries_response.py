# coding: utf-8

"""
    Selling Partner API for FBA Inventory

    The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class GetInventorySummariesResponse(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'payload': 'GetInventorySummariesResult',
        'pagination': 'Pagination',
        'errors': 'List[Error]',
    }

    attribute_map = {
        'payload': 'payload',
        'pagination': 'pagination',
        'errors': 'errors',
    }

    def __init__(self, payload=None, pagination=None, errors=None, _configuration=None):  # noqa: E501
        """GetInventorySummariesResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._payload = None
        self._pagination = None
        self._errors = None
        self.discriminator = None

        if payload is not None:
            self.payload = payload
        if pagination is not None:
            self.pagination = pagination
        if errors is not None:
            self.errors = errors

    @property
    def payload(self):
        """Gets the payload of this GetInventorySummariesResponse.  # noqa: E501


        :return: The payload of this GetInventorySummariesResponse.  # noqa: E501
        :rtype: GetInventorySummariesResult
        """
        return self._payload

    @payload.setter
    def payload(self, payload):
        """Sets the payload of this GetInventorySummariesResponse.


        :param payload: The payload of this GetInventorySummariesResponse.  # noqa: E501
        :type: GetInventorySummariesResult
        """

        self._payload = payload

    @property
    def pagination(self):
        """Gets the pagination of this GetInventorySummariesResponse.  # noqa: E501


        :return: The pagination of this GetInventorySummariesResponse.  # noqa: E501
        :rtype: Pagination
        """
        return self._pagination

    @pagination.setter
    def pagination(self, pagination):
        """Sets the pagination of this GetInventorySummariesResponse.


        :param pagination: The pagination of this GetInventorySummariesResponse.  # noqa: E501
        :type: Pagination
        """

        self._pagination = pagination

    @property
    def errors(self):
        """Gets the errors of this GetInventorySummariesResponse.  # noqa: E501

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :return: The errors of this GetInventorySummariesResponse.  # noqa: E501
        :rtype: List[Error]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this GetInventorySummariesResponse.

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :param errors: The errors of this GetInventorySummariesResponse.  # noqa: E501
        :type: List[Error]
        """

        self._errors = errors

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(GetInventorySummariesResponse, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, GetInventorySummariesResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, GetInventorySummariesResponse):
            return True

        return self.to_dict() != other.to_dict()

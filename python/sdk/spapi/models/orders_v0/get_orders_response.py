# coding: utf-8

"""
    Selling Partner API for Orders

    Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class GetOrdersResponse(object):
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
        'payload': 'OrdersList',
        'errors': 'List[Error]',
    }

    attribute_map = {
        'payload': 'payload',
        'errors': 'errors',
    }

    def __init__(self, payload=None, errors=None, _configuration=None):  # noqa: E501
        """GetOrdersResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._payload = None
        self._errors = None
        self.discriminator = None

        if payload is not None:
            self.payload = payload
        if errors is not None:
            self.errors = errors

    @property
    def payload(self):
        """Gets the payload of this GetOrdersResponse.  # noqa: E501


        :return: The payload of this GetOrdersResponse.  # noqa: E501
        :rtype: OrdersList
        """
        return self._payload

    @payload.setter
    def payload(self, payload):
        """Sets the payload of this GetOrdersResponse.


        :param payload: The payload of this GetOrdersResponse.  # noqa: E501
        :type: OrdersList
        """

        self._payload = payload

    @property
    def errors(self):
        """Gets the errors of this GetOrdersResponse.  # noqa: E501

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :return: The errors of this GetOrdersResponse.  # noqa: E501
        :rtype: List[Error]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this GetOrdersResponse.

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :param errors: The errors of this GetOrdersResponse.  # noqa: E501
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
        if issubclass(GetOrdersResponse, dict):
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
        if not isinstance(other, GetOrdersResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, GetOrdersResponse):
            return True

        return self.to_dict() != other.to_dict()

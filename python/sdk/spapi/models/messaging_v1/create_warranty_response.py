# coding: utf-8

"""
    Selling Partner API for Messaging

    With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CreateWarrantyResponse(object):
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
        'errors': 'List[Error]',
    }

    attribute_map = {
        'errors': 'errors',
    }

    def __init__(self, errors=None, _configuration=None):  # noqa: E501
        """CreateWarrantyResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._errors = None
        self.discriminator = None

        if errors is not None:
            self.errors = errors

    @property
    def errors(self):
        """Gets the errors of this CreateWarrantyResponse.  # noqa: E501

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :return: The errors of this CreateWarrantyResponse.  # noqa: E501
        :rtype: List[Error]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this CreateWarrantyResponse.

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :param errors: The errors of this CreateWarrantyResponse.  # noqa: E501
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
        if issubclass(CreateWarrantyResponse, dict):
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
        if not isinstance(other, CreateWarrantyResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateWarrantyResponse):
            return True

        return self.to_dict() != other.to_dict()

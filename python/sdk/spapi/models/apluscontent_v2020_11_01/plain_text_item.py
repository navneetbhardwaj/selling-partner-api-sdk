# coding: utf-8

"""
    Selling Partner API for A+ Content Management

    Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.

    The version of the OpenAPI document: 2020-11-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class PlainTextItem(object):
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
        'position': 'int',
        'value': 'str',
    }

    attribute_map = {
        'position': 'position',
        'value': 'value',
    }

    def __init__(self, position=None, value=None, _configuration=None):  # noqa: E501
        """PlainTextItem - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._position = None
        self._value = None
        self.discriminator = None

        self.position = position
        self.value = value

    @property
    def position(self):
        """Gets the position of this PlainTextItem.  # noqa: E501

        The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.  # noqa: E501

        :return: The position of this PlainTextItem.  # noqa: E501
        :rtype: int
        """
        return self._position

    @position.setter
    def position(self, position):
        """Sets the position of this PlainTextItem.

        The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.  # noqa: E501

        :param position: The position of this PlainTextItem.  # noqa: E501
        :type: int
        """
        if self._configuration.client_side_validation and position is None:
            raise ValueError("Invalid value for `position`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                position is not None and position > 100):  # noqa: E501
            raise ValueError("Invalid value for `position`, must be a value less than or equal to `100`")  # noqa: E501
        if (self._configuration.client_side_validation and
                position is not None and position < 1):  # noqa: E501
            raise ValueError("Invalid value for `position`, must be a value greater than or equal to `1`")  # noqa: E501

        self._position = position

    @property
    def value(self):
        """Gets the value of this PlainTextItem.  # noqa: E501

        The actual plain text.  # noqa: E501

        :return: The value of this PlainTextItem.  # noqa: E501
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this PlainTextItem.

        The actual plain text.  # noqa: E501

        :param value: The value of this PlainTextItem.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                value is not None and len(value) > 250):
            raise ValueError("Invalid value for `value`, length must be less than or equal to `250`")  # noqa: E501
        if (self._configuration.client_side_validation and
                value is not None and len(value) < 1):
            raise ValueError("Invalid value for `value`, length must be greater than or equal to `1`")  # noqa: E501

        self._value = value

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
        if issubclass(PlainTextItem, dict):
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
        if not isinstance(other, PlainTextItem):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PlainTextItem):
            return True

        return self.to_dict() != other.to_dict()

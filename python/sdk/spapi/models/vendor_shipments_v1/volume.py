# coding: utf-8

"""
    Selling Partner API for Retail Procurement Shipments

    The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class Volume(object):
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
        'unit_of_measure': 'str',
        'value': 'str',
    }

    attribute_map = {
        'unit_of_measure': 'unitOfMeasure',
        'value': 'value',
    }

    def __init__(self, unit_of_measure=None, value=None, _configuration=None):  # noqa: E501
        """Volume - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._unit_of_measure = None
        self._value = None
        self.discriminator = None

        self.unit_of_measure = unit_of_measure
        self.value = value

    @property
    def unit_of_measure(self):
        """Gets the unit_of_measure of this Volume.  # noqa: E501

        The unit of measurement.  # noqa: E501

        :return: The unit_of_measure of this Volume.  # noqa: E501
        :rtype: str
        """
        return self._unit_of_measure

    @unit_of_measure.setter
    def unit_of_measure(self, unit_of_measure):
        """Sets the unit_of_measure of this Volume.

        The unit of measurement.  # noqa: E501

        :param unit_of_measure: The unit_of_measure of this Volume.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and unit_of_measure is None:
            raise ValueError("Invalid value for `unit_of_measure`, must not be `None`")  # noqa: E501
        allowed_values = ["CuFt", "CuIn", "CuM", "CuY"]  # noqa: E501
        if (self._configuration.client_side_validation and
                unit_of_measure not in allowed_values):
            raise ValueError(
                "Invalid value for `unit_of_measure` ({0}), must be one of {1}"  # noqa: E501
                .format(unit_of_measure, allowed_values)
            )

        self._unit_of_measure = unit_of_measure

    @property
    def value(self):
        """Gets the value of this Volume.  # noqa: E501

        A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.  # noqa: E501

        :return: The value of this Volume.  # noqa: E501
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this Volume.

        A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.  # noqa: E501

        :param value: The value of this Volume.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501

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
        if issubclass(Volume, dict):
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
        if not isinstance(other, Volume):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Volume):
            return True

        return self.to_dict() != other.to_dict()

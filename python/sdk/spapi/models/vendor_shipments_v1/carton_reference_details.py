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


class CartonReferenceDetails(object):
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
        'carton_count': 'int',
        'carton_reference_numbers': 'List[str]',
    }

    attribute_map = {
        'carton_count': 'cartonCount',
        'carton_reference_numbers': 'cartonReferenceNumbers',
    }

    def __init__(self, carton_count=None, carton_reference_numbers=None, _configuration=None):  # noqa: E501
        """CartonReferenceDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._carton_count = None
        self._carton_reference_numbers = None
        self.discriminator = None

        if carton_count is not None:
            self.carton_count = carton_count
        self.carton_reference_numbers = carton_reference_numbers

    @property
    def carton_count(self):
        """Gets the carton_count of this CartonReferenceDetails.  # noqa: E501

        Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet.  # noqa: E501

        :return: The carton_count of this CartonReferenceDetails.  # noqa: E501
        :rtype: int
        """
        return self._carton_count

    @carton_count.setter
    def carton_count(self, carton_count):
        """Sets the carton_count of this CartonReferenceDetails.

        Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet.  # noqa: E501

        :param carton_count: The carton_count of this CartonReferenceDetails.  # noqa: E501
        :type: int
        """

        self._carton_count = carton_count

    @property
    def carton_reference_numbers(self):
        """Gets the carton_reference_numbers of this CartonReferenceDetails.  # noqa: E501

        Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the 'cartons' segment to refer to that carton's details here.  # noqa: E501

        :return: The carton_reference_numbers of this CartonReferenceDetails.  # noqa: E501
        :rtype: List[str]
        """
        return self._carton_reference_numbers

    @carton_reference_numbers.setter
    def carton_reference_numbers(self, carton_reference_numbers):
        """Sets the carton_reference_numbers of this CartonReferenceDetails.

        Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the 'cartons' segment to refer to that carton's details here.  # noqa: E501

        :param carton_reference_numbers: The carton_reference_numbers of this CartonReferenceDetails.  # noqa: E501
        :type: List[str]
        """
        if self._configuration.client_side_validation and carton_reference_numbers is None:
            raise ValueError("Invalid value for `carton_reference_numbers`, must not be `None`")  # noqa: E501

        self._carton_reference_numbers = carton_reference_numbers

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
        if issubclass(CartonReferenceDetails, dict):
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
        if not isinstance(other, CartonReferenceDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CartonReferenceDetails):
            return True

        return self.to_dict() != other.to_dict()

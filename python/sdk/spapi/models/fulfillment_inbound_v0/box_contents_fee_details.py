# coding: utf-8

"""
    Selling Partner API for Fulfillment Inbound

    The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class BoxContentsFeeDetails(object):
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
        'total_units': 'int',
        'fee_per_unit': 'Amount',
        'total_fee': 'Amount',
    }

    attribute_map = {
        'total_units': 'TotalUnits',
        'fee_per_unit': 'FeePerUnit',
        'total_fee': 'TotalFee',
    }

    def __init__(self, total_units=None, fee_per_unit=None, total_fee=None, _configuration=None):  # noqa: E501
        """BoxContentsFeeDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._total_units = None
        self._fee_per_unit = None
        self._total_fee = None
        self.discriminator = None

        if total_units is not None:
            self.total_units = total_units
        if fee_per_unit is not None:
            self.fee_per_unit = fee_per_unit
        if total_fee is not None:
            self.total_fee = total_fee

    @property
    def total_units(self):
        """Gets the total_units of this BoxContentsFeeDetails.  # noqa: E501

        The item quantity.  # noqa: E501

        :return: The total_units of this BoxContentsFeeDetails.  # noqa: E501
        :rtype: int
        """
        return self._total_units

    @total_units.setter
    def total_units(self, total_units):
        """Sets the total_units of this BoxContentsFeeDetails.

        The item quantity.  # noqa: E501

        :param total_units: The total_units of this BoxContentsFeeDetails.  # noqa: E501
        :type: int
        """

        self._total_units = total_units

    @property
    def fee_per_unit(self):
        """Gets the fee_per_unit of this BoxContentsFeeDetails.  # noqa: E501


        :return: The fee_per_unit of this BoxContentsFeeDetails.  # noqa: E501
        :rtype: Amount
        """
        return self._fee_per_unit

    @fee_per_unit.setter
    def fee_per_unit(self, fee_per_unit):
        """Sets the fee_per_unit of this BoxContentsFeeDetails.


        :param fee_per_unit: The fee_per_unit of this BoxContentsFeeDetails.  # noqa: E501
        :type: Amount
        """

        self._fee_per_unit = fee_per_unit

    @property
    def total_fee(self):
        """Gets the total_fee of this BoxContentsFeeDetails.  # noqa: E501


        :return: The total_fee of this BoxContentsFeeDetails.  # noqa: E501
        :rtype: Amount
        """
        return self._total_fee

    @total_fee.setter
    def total_fee(self, total_fee):
        """Sets the total_fee of this BoxContentsFeeDetails.


        :param total_fee: The total_fee of this BoxContentsFeeDetails.  # noqa: E501
        :type: Amount
        """

        self._total_fee = total_fee

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
        if issubclass(BoxContentsFeeDetails, dict):
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
        if not isinstance(other, BoxContentsFeeDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BoxContentsFeeDetails):
            return True

        return self.to_dict() != other.to_dict()

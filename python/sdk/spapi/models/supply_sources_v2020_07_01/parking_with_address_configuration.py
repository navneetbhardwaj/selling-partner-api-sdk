# coding: utf-8

"""
    Selling Partner API for Supply Sources

    Manage configurations and capabilities of seller supply sources.

    The version of the OpenAPI document: 2020-07-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class ParkingWithAddressConfiguration(object):
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
        'parking_cost_type': 'ParkingCostType',
        'parking_spot_identification_type': 'ParkingSpotIdentificationType',
        'number_of_parking_spots': 'int',
        'address': 'Address',
    }

    attribute_map = {
        'parking_cost_type': 'parkingCostType',
        'parking_spot_identification_type': 'parkingSpotIdentificationType',
        'number_of_parking_spots': 'numberOfParkingSpots',
        'address': 'address',
    }

    def __init__(self, parking_cost_type=None, parking_spot_identification_type=None, number_of_parking_spots=None, address=None, _configuration=None):  # noqa: E501
        """ParkingWithAddressConfiguration - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._parking_cost_type = None
        self._parking_spot_identification_type = None
        self._number_of_parking_spots = None
        self._address = None
        self.discriminator = None

        if parking_cost_type is not None:
            self.parking_cost_type = parking_cost_type
        if parking_spot_identification_type is not None:
            self.parking_spot_identification_type = parking_spot_identification_type
        if number_of_parking_spots is not None:
            self.number_of_parking_spots = number_of_parking_spots
        if address is not None:
            self.address = address

    @property
    def parking_cost_type(self):
        """Gets the parking_cost_type of this ParkingWithAddressConfiguration.  # noqa: E501


        :return: The parking_cost_type of this ParkingWithAddressConfiguration.  # noqa: E501
        :rtype: ParkingCostType
        """
        return self._parking_cost_type

    @parking_cost_type.setter
    def parking_cost_type(self, parking_cost_type):
        """Sets the parking_cost_type of this ParkingWithAddressConfiguration.


        :param parking_cost_type: The parking_cost_type of this ParkingWithAddressConfiguration.  # noqa: E501
        :type: ParkingCostType
        """

        self._parking_cost_type = parking_cost_type

    @property
    def parking_spot_identification_type(self):
        """Gets the parking_spot_identification_type of this ParkingWithAddressConfiguration.  # noqa: E501


        :return: The parking_spot_identification_type of this ParkingWithAddressConfiguration.  # noqa: E501
        :rtype: ParkingSpotIdentificationType
        """
        return self._parking_spot_identification_type

    @parking_spot_identification_type.setter
    def parking_spot_identification_type(self, parking_spot_identification_type):
        """Sets the parking_spot_identification_type of this ParkingWithAddressConfiguration.


        :param parking_spot_identification_type: The parking_spot_identification_type of this ParkingWithAddressConfiguration.  # noqa: E501
        :type: ParkingSpotIdentificationType
        """

        self._parking_spot_identification_type = parking_spot_identification_type

    @property
    def number_of_parking_spots(self):
        """Gets the number_of_parking_spots of this ParkingWithAddressConfiguration.  # noqa: E501

        An unsigned integer that can be only positive or zero.  # noqa: E501

        :return: The number_of_parking_spots of this ParkingWithAddressConfiguration.  # noqa: E501
        :rtype: int
        """
        return self._number_of_parking_spots

    @number_of_parking_spots.setter
    def number_of_parking_spots(self, number_of_parking_spots):
        """Sets the number_of_parking_spots of this ParkingWithAddressConfiguration.

        An unsigned integer that can be only positive or zero.  # noqa: E501

        :param number_of_parking_spots: The number_of_parking_spots of this ParkingWithAddressConfiguration.  # noqa: E501
        :type: int
        """
        if (self._configuration.client_side_validation and
                number_of_parking_spots is not None and number_of_parking_spots < 0):  # noqa: E501
            raise ValueError("Invalid value for `number_of_parking_spots`, must be a value greater than or equal to `0`")  # noqa: E501

        self._number_of_parking_spots = number_of_parking_spots

    @property
    def address(self):
        """Gets the address of this ParkingWithAddressConfiguration.  # noqa: E501


        :return: The address of this ParkingWithAddressConfiguration.  # noqa: E501
        :rtype: Address
        """
        return self._address

    @address.setter
    def address(self, address):
        """Sets the address of this ParkingWithAddressConfiguration.


        :param address: The address of this ParkingWithAddressConfiguration.  # noqa: E501
        :type: Address
        """

        self._address = address

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
        if issubclass(ParkingWithAddressConfiguration, dict):
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
        if not isinstance(other, ParkingWithAddressConfiguration):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ParkingWithAddressConfiguration):
            return True

        return self.to_dict() != other.to_dict()

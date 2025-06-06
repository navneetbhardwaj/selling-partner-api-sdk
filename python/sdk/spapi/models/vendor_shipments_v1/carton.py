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


class Carton(object):
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
        'carton_identifiers': 'List[ContainerIdentification]',
        'carton_sequence_number': 'str',
        'dimensions': 'Dimensions',
        'weight': 'Weight',
        'tracking_number': 'str',
        'items': 'List[ContainerItem]',
    }

    attribute_map = {
        'carton_identifiers': 'cartonIdentifiers',
        'carton_sequence_number': 'cartonSequenceNumber',
        'dimensions': 'dimensions',
        'weight': 'weight',
        'tracking_number': 'trackingNumber',
        'items': 'items',
    }

    def __init__(self, carton_identifiers=None, carton_sequence_number=None, dimensions=None, weight=None, tracking_number=None, items=None, _configuration=None):  # noqa: E501
        """Carton - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._carton_identifiers = None
        self._carton_sequence_number = None
        self._dimensions = None
        self._weight = None
        self._tracking_number = None
        self._items = None
        self.discriminator = None

        if carton_identifiers is not None:
            self.carton_identifiers = carton_identifiers
        self.carton_sequence_number = carton_sequence_number
        if dimensions is not None:
            self.dimensions = dimensions
        if weight is not None:
            self.weight = weight
        if tracking_number is not None:
            self.tracking_number = tracking_number
        self.items = items

    @property
    def carton_identifiers(self):
        """Gets the carton_identifiers of this Carton.  # noqa: E501

        A list of carton identifiers.  # noqa: E501

        :return: The carton_identifiers of this Carton.  # noqa: E501
        :rtype: List[ContainerIdentification]
        """
        return self._carton_identifiers

    @carton_identifiers.setter
    def carton_identifiers(self, carton_identifiers):
        """Sets the carton_identifiers of this Carton.

        A list of carton identifiers.  # noqa: E501

        :param carton_identifiers: The carton_identifiers of this Carton.  # noqa: E501
        :type: List[ContainerIdentification]
        """

        self._carton_identifiers = carton_identifiers

    @property
    def carton_sequence_number(self):
        """Gets the carton_sequence_number of this Carton.  # noqa: E501

        Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level.  # noqa: E501

        :return: The carton_sequence_number of this Carton.  # noqa: E501
        :rtype: str
        """
        return self._carton_sequence_number

    @carton_sequence_number.setter
    def carton_sequence_number(self, carton_sequence_number):
        """Sets the carton_sequence_number of this Carton.

        Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level.  # noqa: E501

        :param carton_sequence_number: The carton_sequence_number of this Carton.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and carton_sequence_number is None:
            raise ValueError("Invalid value for `carton_sequence_number`, must not be `None`")  # noqa: E501

        self._carton_sequence_number = carton_sequence_number

    @property
    def dimensions(self):
        """Gets the dimensions of this Carton.  # noqa: E501


        :return: The dimensions of this Carton.  # noqa: E501
        :rtype: Dimensions
        """
        return self._dimensions

    @dimensions.setter
    def dimensions(self, dimensions):
        """Sets the dimensions of this Carton.


        :param dimensions: The dimensions of this Carton.  # noqa: E501
        :type: Dimensions
        """

        self._dimensions = dimensions

    @property
    def weight(self):
        """Gets the weight of this Carton.  # noqa: E501


        :return: The weight of this Carton.  # noqa: E501
        :rtype: Weight
        """
        return self._weight

    @weight.setter
    def weight(self, weight):
        """Sets the weight of this Carton.


        :param weight: The weight of this Carton.  # noqa: E501
        :type: Weight
        """

        self._weight = weight

    @property
    def tracking_number(self):
        """Gets the tracking_number of this Carton.  # noqa: E501

        This is required to be provided for every carton in the small parcel shipments.  # noqa: E501

        :return: The tracking_number of this Carton.  # noqa: E501
        :rtype: str
        """
        return self._tracking_number

    @tracking_number.setter
    def tracking_number(self, tracking_number):
        """Sets the tracking_number of this Carton.

        This is required to be provided for every carton in the small parcel shipments.  # noqa: E501

        :param tracking_number: The tracking_number of this Carton.  # noqa: E501
        :type: str
        """

        self._tracking_number = tracking_number

    @property
    def items(self):
        """Gets the items of this Carton.  # noqa: E501

        A list of container item details.  # noqa: E501

        :return: The items of this Carton.  # noqa: E501
        :rtype: List[ContainerItem]
        """
        return self._items

    @items.setter
    def items(self, items):
        """Sets the items of this Carton.

        A list of container item details.  # noqa: E501

        :param items: The items of this Carton.  # noqa: E501
        :type: List[ContainerItem]
        """
        if self._configuration.client_side_validation and items is None:
            raise ValueError("Invalid value for `items`, must not be `None`")  # noqa: E501

        self._items = items

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
        if issubclass(Carton, dict):
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
        if not isinstance(other, Carton):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Carton):
            return True

        return self.to_dict() != other.to_dict()

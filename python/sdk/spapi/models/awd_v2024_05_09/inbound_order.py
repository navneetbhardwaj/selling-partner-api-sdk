# coding: utf-8

"""
    The Selling Partner API for Amazon Warehousing and Distribution

    The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.

    The version of the OpenAPI document: 2024-05-09
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class InboundOrder(object):
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
        'created_at': 'datetime',
        'destination_details': 'DestinationDetails',
        'external_reference_id': 'str',
        'order_id': 'str',
        'order_status': 'InboundStatus',
        'origin_address': 'Address',
        'packages_to_inbound': 'List[DistributionPackageQuantity]',
        'preferences': 'InboundPreferences',
        'updated_at': 'datetime',
    }

    attribute_map = {
        'created_at': 'createdAt',
        'destination_details': 'destinationDetails',
        'external_reference_id': 'externalReferenceId',
        'order_id': 'orderId',
        'order_status': 'orderStatus',
        'origin_address': 'originAddress',
        'packages_to_inbound': 'packagesToInbound',
        'preferences': 'preferences',
        'updated_at': 'updatedAt',
    }

    def __init__(self, created_at=None, destination_details=None, external_reference_id=None, order_id=None, order_status=None, origin_address=None, packages_to_inbound=None, preferences=None, updated_at=None, _configuration=None):  # noqa: E501
        """InboundOrder - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._created_at = None
        self._destination_details = None
        self._external_reference_id = None
        self._order_id = None
        self._order_status = None
        self._origin_address = None
        self._packages_to_inbound = None
        self._preferences = None
        self._updated_at = None
        self.discriminator = None

        self.created_at = created_at
        if destination_details is not None:
            self.destination_details = destination_details
        if external_reference_id is not None:
            self.external_reference_id = external_reference_id
        self.order_id = order_id
        self.order_status = order_status
        self.origin_address = origin_address
        self.packages_to_inbound = packages_to_inbound
        if preferences is not None:
            self.preferences = preferences
        if updated_at is not None:
            self.updated_at = updated_at

    @property
    def created_at(self):
        """Gets the created_at of this InboundOrder.  # noqa: E501

        Date when this order was created.  # noqa: E501

        :return: The created_at of this InboundOrder.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this InboundOrder.

        Date when this order was created.  # noqa: E501

        :param created_at: The created_at of this InboundOrder.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and created_at is None:
            raise ValueError("Invalid value for `created_at`, must not be `None`")  # noqa: E501

        self._created_at = created_at

    @property
    def destination_details(self):
        """Gets the destination_details of this InboundOrder.  # noqa: E501


        :return: The destination_details of this InboundOrder.  # noqa: E501
        :rtype: DestinationDetails
        """
        return self._destination_details

    @destination_details.setter
    def destination_details(self, destination_details):
        """Sets the destination_details of this InboundOrder.


        :param destination_details: The destination_details of this InboundOrder.  # noqa: E501
        :type: DestinationDetails
        """

        self._destination_details = destination_details

    @property
    def external_reference_id(self):
        """Gets the external_reference_id of this InboundOrder.  # noqa: E501

        Reference ID that can be used to correlate the order with partner resources.  # noqa: E501

        :return: The external_reference_id of this InboundOrder.  # noqa: E501
        :rtype: str
        """
        return self._external_reference_id

    @external_reference_id.setter
    def external_reference_id(self, external_reference_id):
        """Sets the external_reference_id of this InboundOrder.

        Reference ID that can be used to correlate the order with partner resources.  # noqa: E501

        :param external_reference_id: The external_reference_id of this InboundOrder.  # noqa: E501
        :type: str
        """

        self._external_reference_id = external_reference_id

    @property
    def order_id(self):
        """Gets the order_id of this InboundOrder.  # noqa: E501

        Inbound order ID.  # noqa: E501

        :return: The order_id of this InboundOrder.  # noqa: E501
        :rtype: str
        """
        return self._order_id

    @order_id.setter
    def order_id(self, order_id):
        """Sets the order_id of this InboundOrder.

        Inbound order ID.  # noqa: E501

        :param order_id: The order_id of this InboundOrder.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and order_id is None:
            raise ValueError("Invalid value for `order_id`, must not be `None`")  # noqa: E501

        self._order_id = order_id

    @property
    def order_status(self):
        """Gets the order_status of this InboundOrder.  # noqa: E501


        :return: The order_status of this InboundOrder.  # noqa: E501
        :rtype: InboundStatus
        """
        return self._order_status

    @order_status.setter
    def order_status(self, order_status):
        """Sets the order_status of this InboundOrder.


        :param order_status: The order_status of this InboundOrder.  # noqa: E501
        :type: InboundStatus
        """
        if self._configuration.client_side_validation and order_status is None:
            raise ValueError("Invalid value for `order_status`, must not be `None`")  # noqa: E501

        self._order_status = order_status

    @property
    def origin_address(self):
        """Gets the origin_address of this InboundOrder.  # noqa: E501


        :return: The origin_address of this InboundOrder.  # noqa: E501
        :rtype: Address
        """
        return self._origin_address

    @origin_address.setter
    def origin_address(self, origin_address):
        """Sets the origin_address of this InboundOrder.


        :param origin_address: The origin_address of this InboundOrder.  # noqa: E501
        :type: Address
        """
        if self._configuration.client_side_validation and origin_address is None:
            raise ValueError("Invalid value for `origin_address`, must not be `None`")  # noqa: E501

        self._origin_address = origin_address

    @property
    def packages_to_inbound(self):
        """Gets the packages_to_inbound of this InboundOrder.  # noqa: E501

        List of packages to be inbounded.  # noqa: E501

        :return: The packages_to_inbound of this InboundOrder.  # noqa: E501
        :rtype: List[DistributionPackageQuantity]
        """
        return self._packages_to_inbound

    @packages_to_inbound.setter
    def packages_to_inbound(self, packages_to_inbound):
        """Sets the packages_to_inbound of this InboundOrder.

        List of packages to be inbounded.  # noqa: E501

        :param packages_to_inbound: The packages_to_inbound of this InboundOrder.  # noqa: E501
        :type: List[DistributionPackageQuantity]
        """
        if self._configuration.client_side_validation and packages_to_inbound is None:
            raise ValueError("Invalid value for `packages_to_inbound`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                packages_to_inbound is not None and len(packages_to_inbound) < 1):
            raise ValueError("Invalid value for `packages_to_inbound`, number of items must be greater than or equal to `1`")  # noqa: E501

        self._packages_to_inbound = packages_to_inbound

    @property
    def preferences(self):
        """Gets the preferences of this InboundOrder.  # noqa: E501


        :return: The preferences of this InboundOrder.  # noqa: E501
        :rtype: InboundPreferences
        """
        return self._preferences

    @preferences.setter
    def preferences(self, preferences):
        """Sets the preferences of this InboundOrder.


        :param preferences: The preferences of this InboundOrder.  # noqa: E501
        :type: InboundPreferences
        """

        self._preferences = preferences

    @property
    def updated_at(self):
        """Gets the updated_at of this InboundOrder.  # noqa: E501

        Date when this order was last updated.  # noqa: E501

        :return: The updated_at of this InboundOrder.  # noqa: E501
        :rtype: datetime
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this InboundOrder.

        Date when this order was last updated.  # noqa: E501

        :param updated_at: The updated_at of this InboundOrder.  # noqa: E501
        :type: datetime
        """

        self._updated_at = updated_at

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
        if issubclass(InboundOrder, dict):
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
        if not isinstance(other, InboundOrder):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, InboundOrder):
            return True

        return self.to_dict() != other.to_dict()

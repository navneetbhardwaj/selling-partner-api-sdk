# coding: utf-8

"""
    Selling Partner APIs for Fulfillment Outbound

    The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.

    The version of the OpenAPI document: 2020-07-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class FulfillmentPreviewShipment(object):
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
        'earliest_ship_date': 'datetime',
        'latest_ship_date': 'datetime',
        'earliest_arrival_date': 'datetime',
        'latest_arrival_date': 'datetime',
        'shipping_notes': 'List[str]',
        'fulfillment_preview_items': 'List[FulfillmentPreviewItem]',
    }

    attribute_map = {
        'earliest_ship_date': 'earliestShipDate',
        'latest_ship_date': 'latestShipDate',
        'earliest_arrival_date': 'earliestArrivalDate',
        'latest_arrival_date': 'latestArrivalDate',
        'shipping_notes': 'shippingNotes',
        'fulfillment_preview_items': 'fulfillmentPreviewItems',
    }

    def __init__(self, earliest_ship_date=None, latest_ship_date=None, earliest_arrival_date=None, latest_arrival_date=None, shipping_notes=None, fulfillment_preview_items=None, _configuration=None):  # noqa: E501
        """FulfillmentPreviewShipment - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._earliest_ship_date = None
        self._latest_ship_date = None
        self._earliest_arrival_date = None
        self._latest_arrival_date = None
        self._shipping_notes = None
        self._fulfillment_preview_items = None
        self.discriminator = None

        if earliest_ship_date is not None:
            self.earliest_ship_date = earliest_ship_date
        if latest_ship_date is not None:
            self.latest_ship_date = latest_ship_date
        if earliest_arrival_date is not None:
            self.earliest_arrival_date = earliest_arrival_date
        if latest_arrival_date is not None:
            self.latest_arrival_date = latest_arrival_date
        if shipping_notes is not None:
            self.shipping_notes = shipping_notes
        self.fulfillment_preview_items = fulfillment_preview_items

    @property
    def earliest_ship_date(self):
        """Gets the earliest_ship_date of this FulfillmentPreviewShipment.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The earliest_ship_date of this FulfillmentPreviewShipment.  # noqa: E501
        :rtype: datetime
        """
        return self._earliest_ship_date

    @earliest_ship_date.setter
    def earliest_ship_date(self, earliest_ship_date):
        """Sets the earliest_ship_date of this FulfillmentPreviewShipment.

        Date timestamp  # noqa: E501

        :param earliest_ship_date: The earliest_ship_date of this FulfillmentPreviewShipment.  # noqa: E501
        :type: datetime
        """

        self._earliest_ship_date = earliest_ship_date

    @property
    def latest_ship_date(self):
        """Gets the latest_ship_date of this FulfillmentPreviewShipment.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The latest_ship_date of this FulfillmentPreviewShipment.  # noqa: E501
        :rtype: datetime
        """
        return self._latest_ship_date

    @latest_ship_date.setter
    def latest_ship_date(self, latest_ship_date):
        """Sets the latest_ship_date of this FulfillmentPreviewShipment.

        Date timestamp  # noqa: E501

        :param latest_ship_date: The latest_ship_date of this FulfillmentPreviewShipment.  # noqa: E501
        :type: datetime
        """

        self._latest_ship_date = latest_ship_date

    @property
    def earliest_arrival_date(self):
        """Gets the earliest_arrival_date of this FulfillmentPreviewShipment.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The earliest_arrival_date of this FulfillmentPreviewShipment.  # noqa: E501
        :rtype: datetime
        """
        return self._earliest_arrival_date

    @earliest_arrival_date.setter
    def earliest_arrival_date(self, earliest_arrival_date):
        """Sets the earliest_arrival_date of this FulfillmentPreviewShipment.

        Date timestamp  # noqa: E501

        :param earliest_arrival_date: The earliest_arrival_date of this FulfillmentPreviewShipment.  # noqa: E501
        :type: datetime
        """

        self._earliest_arrival_date = earliest_arrival_date

    @property
    def latest_arrival_date(self):
        """Gets the latest_arrival_date of this FulfillmentPreviewShipment.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The latest_arrival_date of this FulfillmentPreviewShipment.  # noqa: E501
        :rtype: datetime
        """
        return self._latest_arrival_date

    @latest_arrival_date.setter
    def latest_arrival_date(self, latest_arrival_date):
        """Sets the latest_arrival_date of this FulfillmentPreviewShipment.

        Date timestamp  # noqa: E501

        :param latest_arrival_date: The latest_arrival_date of this FulfillmentPreviewShipment.  # noqa: E501
        :type: datetime
        """

        self._latest_arrival_date = latest_arrival_date

    @property
    def shipping_notes(self):
        """Gets the shipping_notes of this FulfillmentPreviewShipment.  # noqa: E501

        Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed.  # noqa: E501

        :return: The shipping_notes of this FulfillmentPreviewShipment.  # noqa: E501
        :rtype: List[str]
        """
        return self._shipping_notes

    @shipping_notes.setter
    def shipping_notes(self, shipping_notes):
        """Sets the shipping_notes of this FulfillmentPreviewShipment.

        Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed.  # noqa: E501

        :param shipping_notes: The shipping_notes of this FulfillmentPreviewShipment.  # noqa: E501
        :type: List[str]
        """

        self._shipping_notes = shipping_notes

    @property
    def fulfillment_preview_items(self):
        """Gets the fulfillment_preview_items of this FulfillmentPreviewShipment.  # noqa: E501

        An array of fulfillment preview item information.  # noqa: E501

        :return: The fulfillment_preview_items of this FulfillmentPreviewShipment.  # noqa: E501
        :rtype: List[FulfillmentPreviewItem]
        """
        return self._fulfillment_preview_items

    @fulfillment_preview_items.setter
    def fulfillment_preview_items(self, fulfillment_preview_items):
        """Sets the fulfillment_preview_items of this FulfillmentPreviewShipment.

        An array of fulfillment preview item information.  # noqa: E501

        :param fulfillment_preview_items: The fulfillment_preview_items of this FulfillmentPreviewShipment.  # noqa: E501
        :type: List[FulfillmentPreviewItem]
        """
        if self._configuration.client_side_validation and fulfillment_preview_items is None:
            raise ValueError("Invalid value for `fulfillment_preview_items`, must not be `None`")  # noqa: E501

        self._fulfillment_preview_items = fulfillment_preview_items

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
        if issubclass(FulfillmentPreviewShipment, dict):
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
        if not isinstance(other, FulfillmentPreviewShipment):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, FulfillmentPreviewShipment):
            return True

        return self.to_dict() != other.to_dict()

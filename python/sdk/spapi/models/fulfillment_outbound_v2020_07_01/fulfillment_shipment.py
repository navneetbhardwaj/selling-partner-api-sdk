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


class FulfillmentShipment(object):
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
        'amazon_shipment_id': 'str',
        'fulfillment_center_id': 'str',
        'fulfillment_shipment_status': 'str',
        'shipping_date': 'datetime',
        'estimated_arrival_date': 'datetime',
        'shipping_notes': 'List[str]',
        'fulfillment_shipment_item': 'List[FulfillmentShipmentItem]',
        'fulfillment_shipment_package': 'List[FulfillmentShipmentPackage]',
    }

    attribute_map = {
        'amazon_shipment_id': 'amazonShipmentId',
        'fulfillment_center_id': 'fulfillmentCenterId',
        'fulfillment_shipment_status': 'fulfillmentShipmentStatus',
        'shipping_date': 'shippingDate',
        'estimated_arrival_date': 'estimatedArrivalDate',
        'shipping_notes': 'shippingNotes',
        'fulfillment_shipment_item': 'fulfillmentShipmentItem',
        'fulfillment_shipment_package': 'fulfillmentShipmentPackage',
    }

    def __init__(self, amazon_shipment_id=None, fulfillment_center_id=None, fulfillment_shipment_status=None, shipping_date=None, estimated_arrival_date=None, shipping_notes=None, fulfillment_shipment_item=None, fulfillment_shipment_package=None, _configuration=None):  # noqa: E501
        """FulfillmentShipment - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._amazon_shipment_id = None
        self._fulfillment_center_id = None
        self._fulfillment_shipment_status = None
        self._shipping_date = None
        self._estimated_arrival_date = None
        self._shipping_notes = None
        self._fulfillment_shipment_item = None
        self._fulfillment_shipment_package = None
        self.discriminator = None

        self.amazon_shipment_id = amazon_shipment_id
        self.fulfillment_center_id = fulfillment_center_id
        self.fulfillment_shipment_status = fulfillment_shipment_status
        if shipping_date is not None:
            self.shipping_date = shipping_date
        if estimated_arrival_date is not None:
            self.estimated_arrival_date = estimated_arrival_date
        if shipping_notes is not None:
            self.shipping_notes = shipping_notes
        self.fulfillment_shipment_item = fulfillment_shipment_item
        if fulfillment_shipment_package is not None:
            self.fulfillment_shipment_package = fulfillment_shipment_package

    @property
    def amazon_shipment_id(self):
        """Gets the amazon_shipment_id of this FulfillmentShipment.  # noqa: E501

        A shipment identifier assigned by Amazon.  # noqa: E501

        :return: The amazon_shipment_id of this FulfillmentShipment.  # noqa: E501
        :rtype: str
        """
        return self._amazon_shipment_id

    @amazon_shipment_id.setter
    def amazon_shipment_id(self, amazon_shipment_id):
        """Sets the amazon_shipment_id of this FulfillmentShipment.

        A shipment identifier assigned by Amazon.  # noqa: E501

        :param amazon_shipment_id: The amazon_shipment_id of this FulfillmentShipment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and amazon_shipment_id is None:
            raise ValueError("Invalid value for `amazon_shipment_id`, must not be `None`")  # noqa: E501

        self._amazon_shipment_id = amazon_shipment_id

    @property
    def fulfillment_center_id(self):
        """Gets the fulfillment_center_id of this FulfillmentShipment.  # noqa: E501

        An identifier for the fulfillment center that the shipment will be sent from.  # noqa: E501

        :return: The fulfillment_center_id of this FulfillmentShipment.  # noqa: E501
        :rtype: str
        """
        return self._fulfillment_center_id

    @fulfillment_center_id.setter
    def fulfillment_center_id(self, fulfillment_center_id):
        """Sets the fulfillment_center_id of this FulfillmentShipment.

        An identifier for the fulfillment center that the shipment will be sent from.  # noqa: E501

        :param fulfillment_center_id: The fulfillment_center_id of this FulfillmentShipment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and fulfillment_center_id is None:
            raise ValueError("Invalid value for `fulfillment_center_id`, must not be `None`")  # noqa: E501

        self._fulfillment_center_id = fulfillment_center_id

    @property
    def fulfillment_shipment_status(self):
        """Gets the fulfillment_shipment_status of this FulfillmentShipment.  # noqa: E501

        The current status of the shipment.  # noqa: E501

        :return: The fulfillment_shipment_status of this FulfillmentShipment.  # noqa: E501
        :rtype: str
        """
        return self._fulfillment_shipment_status

    @fulfillment_shipment_status.setter
    def fulfillment_shipment_status(self, fulfillment_shipment_status):
        """Sets the fulfillment_shipment_status of this FulfillmentShipment.

        The current status of the shipment.  # noqa: E501

        :param fulfillment_shipment_status: The fulfillment_shipment_status of this FulfillmentShipment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and fulfillment_shipment_status is None:
            raise ValueError("Invalid value for `fulfillment_shipment_status`, must not be `None`")  # noqa: E501
        allowed_values = ["PENDING", "SHIPPED", "CANCELLED_BY_FULFILLER", "CANCELLED_BY_SELLER"]  # noqa: E501
        if (self._configuration.client_side_validation and
                fulfillment_shipment_status not in allowed_values):
            raise ValueError(
                "Invalid value for `fulfillment_shipment_status` ({0}), must be one of {1}"  # noqa: E501
                .format(fulfillment_shipment_status, allowed_values)
            )

        self._fulfillment_shipment_status = fulfillment_shipment_status

    @property
    def shipping_date(self):
        """Gets the shipping_date of this FulfillmentShipment.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The shipping_date of this FulfillmentShipment.  # noqa: E501
        :rtype: datetime
        """
        return self._shipping_date

    @shipping_date.setter
    def shipping_date(self, shipping_date):
        """Sets the shipping_date of this FulfillmentShipment.

        Date timestamp  # noqa: E501

        :param shipping_date: The shipping_date of this FulfillmentShipment.  # noqa: E501
        :type: datetime
        """

        self._shipping_date = shipping_date

    @property
    def estimated_arrival_date(self):
        """Gets the estimated_arrival_date of this FulfillmentShipment.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The estimated_arrival_date of this FulfillmentShipment.  # noqa: E501
        :rtype: datetime
        """
        return self._estimated_arrival_date

    @estimated_arrival_date.setter
    def estimated_arrival_date(self, estimated_arrival_date):
        """Sets the estimated_arrival_date of this FulfillmentShipment.

        Date timestamp  # noqa: E501

        :param estimated_arrival_date: The estimated_arrival_date of this FulfillmentShipment.  # noqa: E501
        :type: datetime
        """

        self._estimated_arrival_date = estimated_arrival_date

    @property
    def shipping_notes(self):
        """Gets the shipping_notes of this FulfillmentShipment.  # noqa: E501

        Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren't available.  # noqa: E501

        :return: The shipping_notes of this FulfillmentShipment.  # noqa: E501
        :rtype: List[str]
        """
        return self._shipping_notes

    @shipping_notes.setter
    def shipping_notes(self, shipping_notes):
        """Sets the shipping_notes of this FulfillmentShipment.

        Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren't available.  # noqa: E501

        :param shipping_notes: The shipping_notes of this FulfillmentShipment.  # noqa: E501
        :type: List[str]
        """

        self._shipping_notes = shipping_notes

    @property
    def fulfillment_shipment_item(self):
        """Gets the fulfillment_shipment_item of this FulfillmentShipment.  # noqa: E501

        An array of fulfillment shipment item information.  # noqa: E501

        :return: The fulfillment_shipment_item of this FulfillmentShipment.  # noqa: E501
        :rtype: List[FulfillmentShipmentItem]
        """
        return self._fulfillment_shipment_item

    @fulfillment_shipment_item.setter
    def fulfillment_shipment_item(self, fulfillment_shipment_item):
        """Sets the fulfillment_shipment_item of this FulfillmentShipment.

        An array of fulfillment shipment item information.  # noqa: E501

        :param fulfillment_shipment_item: The fulfillment_shipment_item of this FulfillmentShipment.  # noqa: E501
        :type: List[FulfillmentShipmentItem]
        """
        if self._configuration.client_side_validation and fulfillment_shipment_item is None:
            raise ValueError("Invalid value for `fulfillment_shipment_item`, must not be `None`")  # noqa: E501

        self._fulfillment_shipment_item = fulfillment_shipment_item

    @property
    def fulfillment_shipment_package(self):
        """Gets the fulfillment_shipment_package of this FulfillmentShipment.  # noqa: E501

        An array of fulfillment shipment package information.  # noqa: E501

        :return: The fulfillment_shipment_package of this FulfillmentShipment.  # noqa: E501
        :rtype: List[FulfillmentShipmentPackage]
        """
        return self._fulfillment_shipment_package

    @fulfillment_shipment_package.setter
    def fulfillment_shipment_package(self, fulfillment_shipment_package):
        """Sets the fulfillment_shipment_package of this FulfillmentShipment.

        An array of fulfillment shipment package information.  # noqa: E501

        :param fulfillment_shipment_package: The fulfillment_shipment_package of this FulfillmentShipment.  # noqa: E501
        :type: List[FulfillmentShipmentPackage]
        """

        self._fulfillment_shipment_package = fulfillment_shipment_package

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
        if issubclass(FulfillmentShipment, dict):
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
        if not isinstance(other, FulfillmentShipment):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, FulfillmentShipment):
            return True

        return self.to_dict() != other.to_dict()

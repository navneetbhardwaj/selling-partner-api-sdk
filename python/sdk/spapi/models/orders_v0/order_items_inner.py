# coding: utf-8

"""
    Selling Partner API for Orders

    Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class OrderItemsInner(object):
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
        'order_item_id': 'str',
        'quantity': 'int',
    }

    attribute_map = {
        'order_item_id': 'orderItemId',
        'quantity': 'quantity',
    }

    def __init__(self, order_item_id=None, quantity=None, _configuration=None):  # noqa: E501
        """OrderItemsInner - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._order_item_id = None
        self._quantity = None
        self.discriminator = None

        if order_item_id is not None:
            self.order_item_id = order_item_id
        if quantity is not None:
            self.quantity = quantity

    @property
    def order_item_id(self):
        """Gets the order_item_id of this OrderItemsInner.  # noqa: E501

        The order item's unique identifier.  # noqa: E501

        :return: The order_item_id of this OrderItemsInner.  # noqa: E501
        :rtype: str
        """
        return self._order_item_id

    @order_item_id.setter
    def order_item_id(self, order_item_id):
        """Sets the order_item_id of this OrderItemsInner.

        The order item's unique identifier.  # noqa: E501

        :param order_item_id: The order_item_id of this OrderItemsInner.  # noqa: E501
        :type: str
        """

        self._order_item_id = order_item_id

    @property
    def quantity(self):
        """Gets the quantity of this OrderItemsInner.  # noqa: E501

        The quantity for which to update the shipment status.  # noqa: E501

        :return: The quantity of this OrderItemsInner.  # noqa: E501
        :rtype: int
        """
        return self._quantity

    @quantity.setter
    def quantity(self, quantity):
        """Sets the quantity of this OrderItemsInner.

        The quantity for which to update the shipment status.  # noqa: E501

        :param quantity: The quantity of this OrderItemsInner.  # noqa: E501
        :type: int
        """

        self._quantity = quantity

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
        if issubclass(OrderItemsInner, dict):
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
        if not isinstance(other, OrderItemsInner):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OrderItemsInner):
            return True

        return self.to_dict() != other.to_dict()

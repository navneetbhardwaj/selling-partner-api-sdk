# coding: utf-8

"""
    Selling Partner API for Pricing

    The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class LowestPriceType(object):
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
        'condition': 'str',
        'fulfillment_channel': 'str',
        'offer_type': 'OfferCustomerType',
        'quantity_tier': 'int',
        'quantity_discount_type': 'QuantityDiscountType',
        'landed_price': 'MoneyType',
        'listing_price': 'MoneyType',
        'shipping': 'MoneyType',
        'points': 'Points',
    }

    attribute_map = {
        'condition': 'condition',
        'fulfillment_channel': 'fulfillmentChannel',
        'offer_type': 'offerType',
        'quantity_tier': 'quantityTier',
        'quantity_discount_type': 'quantityDiscountType',
        'landed_price': 'LandedPrice',
        'listing_price': 'ListingPrice',
        'shipping': 'Shipping',
        'points': 'Points',
    }

    def __init__(self, condition=None, fulfillment_channel=None, offer_type=None, quantity_tier=None, quantity_discount_type=None, landed_price=None, listing_price=None, shipping=None, points=None, _configuration=None):  # noqa: E501
        """LowestPriceType - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._condition = None
        self._fulfillment_channel = None
        self._offer_type = None
        self._quantity_tier = None
        self._quantity_discount_type = None
        self._landed_price = None
        self._listing_price = None
        self._shipping = None
        self._points = None
        self.discriminator = None

        self.condition = condition
        self.fulfillment_channel = fulfillment_channel
        if offer_type is not None:
            self.offer_type = offer_type
        if quantity_tier is not None:
            self.quantity_tier = quantity_tier
        if quantity_discount_type is not None:
            self.quantity_discount_type = quantity_discount_type
        if landed_price is not None:
            self.landed_price = landed_price
        self.listing_price = listing_price
        if shipping is not None:
            self.shipping = shipping
        if points is not None:
            self.points = points

    @property
    def condition(self):
        """Gets the condition of this LowestPriceType.  # noqa: E501

        Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.  # noqa: E501

        :return: The condition of this LowestPriceType.  # noqa: E501
        :rtype: str
        """
        return self._condition

    @condition.setter
    def condition(self, condition):
        """Sets the condition of this LowestPriceType.

        Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.  # noqa: E501

        :param condition: The condition of this LowestPriceType.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and condition is None:
            raise ValueError("Invalid value for `condition`, must not be `None`")  # noqa: E501

        self._condition = condition

    @property
    def fulfillment_channel(self):
        """Gets the fulfillment_channel of this LowestPriceType.  # noqa: E501

        Indicates whether the item is fulfilled by Amazon or by the seller.  # noqa: E501

        :return: The fulfillment_channel of this LowestPriceType.  # noqa: E501
        :rtype: str
        """
        return self._fulfillment_channel

    @fulfillment_channel.setter
    def fulfillment_channel(self, fulfillment_channel):
        """Sets the fulfillment_channel of this LowestPriceType.

        Indicates whether the item is fulfilled by Amazon or by the seller.  # noqa: E501

        :param fulfillment_channel: The fulfillment_channel of this LowestPriceType.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and fulfillment_channel is None:
            raise ValueError("Invalid value for `fulfillment_channel`, must not be `None`")  # noqa: E501

        self._fulfillment_channel = fulfillment_channel

    @property
    def offer_type(self):
        """Gets the offer_type of this LowestPriceType.  # noqa: E501


        :return: The offer_type of this LowestPriceType.  # noqa: E501
        :rtype: OfferCustomerType
        """
        return self._offer_type

    @offer_type.setter
    def offer_type(self, offer_type):
        """Sets the offer_type of this LowestPriceType.


        :param offer_type: The offer_type of this LowestPriceType.  # noqa: E501
        :type: OfferCustomerType
        """

        self._offer_type = offer_type

    @property
    def quantity_tier(self):
        """Gets the quantity_tier of this LowestPriceType.  # noqa: E501

        Indicates at what quantity this price becomes active.  # noqa: E501

        :return: The quantity_tier of this LowestPriceType.  # noqa: E501
        :rtype: int
        """
        return self._quantity_tier

    @quantity_tier.setter
    def quantity_tier(self, quantity_tier):
        """Sets the quantity_tier of this LowestPriceType.

        Indicates at what quantity this price becomes active.  # noqa: E501

        :param quantity_tier: The quantity_tier of this LowestPriceType.  # noqa: E501
        :type: int
        """

        self._quantity_tier = quantity_tier

    @property
    def quantity_discount_type(self):
        """Gets the quantity_discount_type of this LowestPriceType.  # noqa: E501


        :return: The quantity_discount_type of this LowestPriceType.  # noqa: E501
        :rtype: QuantityDiscountType
        """
        return self._quantity_discount_type

    @quantity_discount_type.setter
    def quantity_discount_type(self, quantity_discount_type):
        """Sets the quantity_discount_type of this LowestPriceType.


        :param quantity_discount_type: The quantity_discount_type of this LowestPriceType.  # noqa: E501
        :type: QuantityDiscountType
        """

        self._quantity_discount_type = quantity_discount_type

    @property
    def landed_price(self):
        """Gets the landed_price of this LowestPriceType.  # noqa: E501


        :return: The landed_price of this LowestPriceType.  # noqa: E501
        :rtype: MoneyType
        """
        return self._landed_price

    @landed_price.setter
    def landed_price(self, landed_price):
        """Sets the landed_price of this LowestPriceType.


        :param landed_price: The landed_price of this LowestPriceType.  # noqa: E501
        :type: MoneyType
        """

        self._landed_price = landed_price

    @property
    def listing_price(self):
        """Gets the listing_price of this LowestPriceType.  # noqa: E501


        :return: The listing_price of this LowestPriceType.  # noqa: E501
        :rtype: MoneyType
        """
        return self._listing_price

    @listing_price.setter
    def listing_price(self, listing_price):
        """Sets the listing_price of this LowestPriceType.


        :param listing_price: The listing_price of this LowestPriceType.  # noqa: E501
        :type: MoneyType
        """
        if self._configuration.client_side_validation and listing_price is None:
            raise ValueError("Invalid value for `listing_price`, must not be `None`")  # noqa: E501

        self._listing_price = listing_price

    @property
    def shipping(self):
        """Gets the shipping of this LowestPriceType.  # noqa: E501


        :return: The shipping of this LowestPriceType.  # noqa: E501
        :rtype: MoneyType
        """
        return self._shipping

    @shipping.setter
    def shipping(self, shipping):
        """Sets the shipping of this LowestPriceType.


        :param shipping: The shipping of this LowestPriceType.  # noqa: E501
        :type: MoneyType
        """

        self._shipping = shipping

    @property
    def points(self):
        """Gets the points of this LowestPriceType.  # noqa: E501


        :return: The points of this LowestPriceType.  # noqa: E501
        :rtype: Points
        """
        return self._points

    @points.setter
    def points(self, points):
        """Sets the points of this LowestPriceType.


        :param points: The points of this LowestPriceType.  # noqa: E501
        :type: Points
        """

        self._points = points

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
        if issubclass(LowestPriceType, dict):
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
        if not isinstance(other, LowestPriceType):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, LowestPriceType):
            return True

        return self.to_dict() != other.to_dict()

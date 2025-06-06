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


class ListingOffersRequestParams(object):
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
        'marketplace_id': 'str',
        'item_condition': 'ItemCondition',
        'customer_type': 'CustomerType',
        'seller_sku': 'str',
    }

    attribute_map = {
        'marketplace_id': 'MarketplaceId',
        'item_condition': 'ItemCondition',
        'customer_type': 'CustomerType',
        'seller_sku': 'SellerSKU',
    }

    def __init__(self, marketplace_id=None, item_condition=None, customer_type=None, seller_sku=None, _configuration=None):  # noqa: E501
        """ListingOffersRequestParams - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._marketplace_id = None
        self._item_condition = None
        self._customer_type = None
        self._seller_sku = None
        self.discriminator = None

        self.marketplace_id = marketplace_id
        self.item_condition = item_condition
        if customer_type is not None:
            self.customer_type = customer_type
        self.seller_sku = seller_sku

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this ListingOffersRequestParams.  # noqa: E501

        A marketplace identifier. Specifies the marketplace for which prices are returned.  # noqa: E501

        :return: The marketplace_id of this ListingOffersRequestParams.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this ListingOffersRequestParams.

        A marketplace identifier. Specifies the marketplace for which prices are returned.  # noqa: E501

        :param marketplace_id: The marketplace_id of this ListingOffersRequestParams.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and marketplace_id is None:
            raise ValueError("Invalid value for `marketplace_id`, must not be `None`")  # noqa: E501

        self._marketplace_id = marketplace_id

    @property
    def item_condition(self):
        """Gets the item_condition of this ListingOffersRequestParams.  # noqa: E501


        :return: The item_condition of this ListingOffersRequestParams.  # noqa: E501
        :rtype: ItemCondition
        """
        return self._item_condition

    @item_condition.setter
    def item_condition(self, item_condition):
        """Sets the item_condition of this ListingOffersRequestParams.


        :param item_condition: The item_condition of this ListingOffersRequestParams.  # noqa: E501
        :type: ItemCondition
        """
        if self._configuration.client_side_validation and item_condition is None:
            raise ValueError("Invalid value for `item_condition`, must not be `None`")  # noqa: E501

        self._item_condition = item_condition

    @property
    def customer_type(self):
        """Gets the customer_type of this ListingOffersRequestParams.  # noqa: E501


        :return: The customer_type of this ListingOffersRequestParams.  # noqa: E501
        :rtype: CustomerType
        """
        return self._customer_type

    @customer_type.setter
    def customer_type(self, customer_type):
        """Sets the customer_type of this ListingOffersRequestParams.


        :param customer_type: The customer_type of this ListingOffersRequestParams.  # noqa: E501
        :type: CustomerType
        """

        self._customer_type = customer_type

    @property
    def seller_sku(self):
        """Gets the seller_sku of this ListingOffersRequestParams.  # noqa: E501

        The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.  # noqa: E501

        :return: The seller_sku of this ListingOffersRequestParams.  # noqa: E501
        :rtype: str
        """
        return self._seller_sku

    @seller_sku.setter
    def seller_sku(self, seller_sku):
        """Sets the seller_sku of this ListingOffersRequestParams.

        The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.  # noqa: E501

        :param seller_sku: The seller_sku of this ListingOffersRequestParams.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and seller_sku is None:
            raise ValueError("Invalid value for `seller_sku`, must not be `None`")  # noqa: E501

        self._seller_sku = seller_sku

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
        if issubclass(ListingOffersRequestParams, dict):
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
        if not isinstance(other, ListingOffersRequestParams):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ListingOffersRequestParams):
            return True

        return self.to_dict() != other.to_dict()

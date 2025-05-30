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


class GetOffersResult(object):
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
        'asin': 'str',
        'sku': 'str',
        'item_condition': 'ConditionType',
        'status': 'str',
        'identifier': 'ItemIdentifier',
        'summary': 'Summary',
        'offers': 'List[OfferDetail]',
    }

    attribute_map = {
        'marketplace_id': 'MarketplaceID',
        'asin': 'ASIN',
        'sku': 'SKU',
        'item_condition': 'ItemCondition',
        'status': 'status',
        'identifier': 'Identifier',
        'summary': 'Summary',
        'offers': 'Offers',
    }

    def __init__(self, marketplace_id=None, asin=None, sku=None, item_condition=None, status=None, identifier=None, summary=None, offers=None, _configuration=None):  # noqa: E501
        """GetOffersResult - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._marketplace_id = None
        self._asin = None
        self._sku = None
        self._item_condition = None
        self._status = None
        self._identifier = None
        self._summary = None
        self._offers = None
        self.discriminator = None

        self.marketplace_id = marketplace_id
        if asin is not None:
            self.asin = asin
        if sku is not None:
            self.sku = sku
        self.item_condition = item_condition
        self.status = status
        self.identifier = identifier
        self.summary = summary
        self.offers = offers

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this GetOffersResult.  # noqa: E501

        A marketplace identifier.  # noqa: E501

        :return: The marketplace_id of this GetOffersResult.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this GetOffersResult.

        A marketplace identifier.  # noqa: E501

        :param marketplace_id: The marketplace_id of this GetOffersResult.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and marketplace_id is None:
            raise ValueError("Invalid value for `marketplace_id`, must not be `None`")  # noqa: E501

        self._marketplace_id = marketplace_id

    @property
    def asin(self):
        """Gets the asin of this GetOffersResult.  # noqa: E501

        The Amazon Standard Identification Number (ASIN) of the item.  # noqa: E501

        :return: The asin of this GetOffersResult.  # noqa: E501
        :rtype: str
        """
        return self._asin

    @asin.setter
    def asin(self, asin):
        """Sets the asin of this GetOffersResult.

        The Amazon Standard Identification Number (ASIN) of the item.  # noqa: E501

        :param asin: The asin of this GetOffersResult.  # noqa: E501
        :type: str
        """

        self._asin = asin

    @property
    def sku(self):
        """Gets the sku of this GetOffersResult.  # noqa: E501

        The stock keeping unit (SKU) of the item.  # noqa: E501

        :return: The sku of this GetOffersResult.  # noqa: E501
        :rtype: str
        """
        return self._sku

    @sku.setter
    def sku(self, sku):
        """Sets the sku of this GetOffersResult.

        The stock keeping unit (SKU) of the item.  # noqa: E501

        :param sku: The sku of this GetOffersResult.  # noqa: E501
        :type: str
        """

        self._sku = sku

    @property
    def item_condition(self):
        """Gets the item_condition of this GetOffersResult.  # noqa: E501


        :return: The item_condition of this GetOffersResult.  # noqa: E501
        :rtype: ConditionType
        """
        return self._item_condition

    @item_condition.setter
    def item_condition(self, item_condition):
        """Sets the item_condition of this GetOffersResult.


        :param item_condition: The item_condition of this GetOffersResult.  # noqa: E501
        :type: ConditionType
        """
        if self._configuration.client_side_validation and item_condition is None:
            raise ValueError("Invalid value for `item_condition`, must not be `None`")  # noqa: E501

        self._item_condition = item_condition

    @property
    def status(self):
        """Gets the status of this GetOffersResult.  # noqa: E501

        The status of the operation.  # noqa: E501

        :return: The status of this GetOffersResult.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this GetOffersResult.

        The status of the operation.  # noqa: E501

        :param status: The status of this GetOffersResult.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501

        self._status = status

    @property
    def identifier(self):
        """Gets the identifier of this GetOffersResult.  # noqa: E501


        :return: The identifier of this GetOffersResult.  # noqa: E501
        :rtype: ItemIdentifier
        """
        return self._identifier

    @identifier.setter
    def identifier(self, identifier):
        """Sets the identifier of this GetOffersResult.


        :param identifier: The identifier of this GetOffersResult.  # noqa: E501
        :type: ItemIdentifier
        """
        if self._configuration.client_side_validation and identifier is None:
            raise ValueError("Invalid value for `identifier`, must not be `None`")  # noqa: E501

        self._identifier = identifier

    @property
    def summary(self):
        """Gets the summary of this GetOffersResult.  # noqa: E501


        :return: The summary of this GetOffersResult.  # noqa: E501
        :rtype: Summary
        """
        return self._summary

    @summary.setter
    def summary(self, summary):
        """Sets the summary of this GetOffersResult.


        :param summary: The summary of this GetOffersResult.  # noqa: E501
        :type: Summary
        """
        if self._configuration.client_side_validation and summary is None:
            raise ValueError("Invalid value for `summary`, must not be `None`")  # noqa: E501

        self._summary = summary

    @property
    def offers(self):
        """Gets the offers of this GetOffersResult.  # noqa: E501

        A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less.  # noqa: E501

        :return: The offers of this GetOffersResult.  # noqa: E501
        :rtype: List[OfferDetail]
        """
        return self._offers

    @offers.setter
    def offers(self, offers):
        """Sets the offers of this GetOffersResult.

        A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less.  # noqa: E501

        :param offers: The offers of this GetOffersResult.  # noqa: E501
        :type: List[OfferDetail]
        """
        if self._configuration.client_side_validation and offers is None:
            raise ValueError("Invalid value for `offers`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                offers is not None and len(offers) > 20):
            raise ValueError("Invalid value for `offers`, number of items must be less than or equal to `20`")  # noqa: E501

        self._offers = offers

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
        if issubclass(GetOffersResult, dict):
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
        if not isinstance(other, GetOffersResult):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, GetOffersResult):
            return True

        return self.to_dict() != other.to_dict()

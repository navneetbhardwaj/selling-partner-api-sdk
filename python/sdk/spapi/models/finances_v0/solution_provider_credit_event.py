# coding: utf-8

"""
    Selling Partner API for Finances

    The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class SolutionProviderCreditEvent(object):
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
        'provider_transaction_type': 'str',
        'seller_order_id': 'str',
        'marketplace_id': 'str',
        'marketplace_country_code': 'str',
        'seller_id': 'str',
        'seller_store_name': 'str',
        'provider_id': 'str',
        'provider_store_name': 'str',
        'transaction_amount': 'Currency',
        'transaction_creation_date': 'datetime',
    }

    attribute_map = {
        'provider_transaction_type': 'ProviderTransactionType',
        'seller_order_id': 'SellerOrderId',
        'marketplace_id': 'MarketplaceId',
        'marketplace_country_code': 'MarketplaceCountryCode',
        'seller_id': 'SellerId',
        'seller_store_name': 'SellerStoreName',
        'provider_id': 'ProviderId',
        'provider_store_name': 'ProviderStoreName',
        'transaction_amount': 'TransactionAmount',
        'transaction_creation_date': 'TransactionCreationDate',
    }

    def __init__(self, provider_transaction_type=None, seller_order_id=None, marketplace_id=None, marketplace_country_code=None, seller_id=None, seller_store_name=None, provider_id=None, provider_store_name=None, transaction_amount=None, transaction_creation_date=None, _configuration=None):  # noqa: E501
        """SolutionProviderCreditEvent - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._provider_transaction_type = None
        self._seller_order_id = None
        self._marketplace_id = None
        self._marketplace_country_code = None
        self._seller_id = None
        self._seller_store_name = None
        self._provider_id = None
        self._provider_store_name = None
        self._transaction_amount = None
        self._transaction_creation_date = None
        self.discriminator = None

        if provider_transaction_type is not None:
            self.provider_transaction_type = provider_transaction_type
        if seller_order_id is not None:
            self.seller_order_id = seller_order_id
        if marketplace_id is not None:
            self.marketplace_id = marketplace_id
        if marketplace_country_code is not None:
            self.marketplace_country_code = marketplace_country_code
        if seller_id is not None:
            self.seller_id = seller_id
        if seller_store_name is not None:
            self.seller_store_name = seller_store_name
        if provider_id is not None:
            self.provider_id = provider_id
        if provider_store_name is not None:
            self.provider_store_name = provider_store_name
        if transaction_amount is not None:
            self.transaction_amount = transaction_amount
        if transaction_creation_date is not None:
            self.transaction_creation_date = transaction_creation_date

    @property
    def provider_transaction_type(self):
        """Gets the provider_transaction_type of this SolutionProviderCreditEvent.  # noqa: E501

        The transaction type.  # noqa: E501

        :return: The provider_transaction_type of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._provider_transaction_type

    @provider_transaction_type.setter
    def provider_transaction_type(self, provider_transaction_type):
        """Sets the provider_transaction_type of this SolutionProviderCreditEvent.

        The transaction type.  # noqa: E501

        :param provider_transaction_type: The provider_transaction_type of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._provider_transaction_type = provider_transaction_type

    @property
    def seller_order_id(self):
        """Gets the seller_order_id of this SolutionProviderCreditEvent.  # noqa: E501

        A seller-defined identifier for an order.  # noqa: E501

        :return: The seller_order_id of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._seller_order_id

    @seller_order_id.setter
    def seller_order_id(self, seller_order_id):
        """Sets the seller_order_id of this SolutionProviderCreditEvent.

        A seller-defined identifier for an order.  # noqa: E501

        :param seller_order_id: The seller_order_id of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._seller_order_id = seller_order_id

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this SolutionProviderCreditEvent.  # noqa: E501

        The identifier of the marketplace where the order was placed.  # noqa: E501

        :return: The marketplace_id of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this SolutionProviderCreditEvent.

        The identifier of the marketplace where the order was placed.  # noqa: E501

        :param marketplace_id: The marketplace_id of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._marketplace_id = marketplace_id

    @property
    def marketplace_country_code(self):
        """Gets the marketplace_country_code of this SolutionProviderCreditEvent.  # noqa: E501

        The two-letter country code of the country associated with the marketplace where the order was placed.  # noqa: E501

        :return: The marketplace_country_code of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_country_code

    @marketplace_country_code.setter
    def marketplace_country_code(self, marketplace_country_code):
        """Sets the marketplace_country_code of this SolutionProviderCreditEvent.

        The two-letter country code of the country associated with the marketplace where the order was placed.  # noqa: E501

        :param marketplace_country_code: The marketplace_country_code of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._marketplace_country_code = marketplace_country_code

    @property
    def seller_id(self):
        """Gets the seller_id of this SolutionProviderCreditEvent.  # noqa: E501

        The Amazon-defined identifier of the seller.  # noqa: E501

        :return: The seller_id of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._seller_id

    @seller_id.setter
    def seller_id(self, seller_id):
        """Sets the seller_id of this SolutionProviderCreditEvent.

        The Amazon-defined identifier of the seller.  # noqa: E501

        :param seller_id: The seller_id of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._seller_id = seller_id

    @property
    def seller_store_name(self):
        """Gets the seller_store_name of this SolutionProviderCreditEvent.  # noqa: E501

        The store name where the payment event occurred.  # noqa: E501

        :return: The seller_store_name of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._seller_store_name

    @seller_store_name.setter
    def seller_store_name(self, seller_store_name):
        """Sets the seller_store_name of this SolutionProviderCreditEvent.

        The store name where the payment event occurred.  # noqa: E501

        :param seller_store_name: The seller_store_name of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._seller_store_name = seller_store_name

    @property
    def provider_id(self):
        """Gets the provider_id of this SolutionProviderCreditEvent.  # noqa: E501

        The Amazon-defined identifier of the solution provider.  # noqa: E501

        :return: The provider_id of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._provider_id

    @provider_id.setter
    def provider_id(self, provider_id):
        """Sets the provider_id of this SolutionProviderCreditEvent.

        The Amazon-defined identifier of the solution provider.  # noqa: E501

        :param provider_id: The provider_id of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._provider_id = provider_id

    @property
    def provider_store_name(self):
        """Gets the provider_store_name of this SolutionProviderCreditEvent.  # noqa: E501

        The store name where the payment event occurred.  # noqa: E501

        :return: The provider_store_name of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: str
        """
        return self._provider_store_name

    @provider_store_name.setter
    def provider_store_name(self, provider_store_name):
        """Sets the provider_store_name of this SolutionProviderCreditEvent.

        The store name where the payment event occurred.  # noqa: E501

        :param provider_store_name: The provider_store_name of this SolutionProviderCreditEvent.  # noqa: E501
        :type: str
        """

        self._provider_store_name = provider_store_name

    @property
    def transaction_amount(self):
        """Gets the transaction_amount of this SolutionProviderCreditEvent.  # noqa: E501


        :return: The transaction_amount of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: Currency
        """
        return self._transaction_amount

    @transaction_amount.setter
    def transaction_amount(self, transaction_amount):
        """Sets the transaction_amount of this SolutionProviderCreditEvent.


        :param transaction_amount: The transaction_amount of this SolutionProviderCreditEvent.  # noqa: E501
        :type: Currency
        """

        self._transaction_amount = transaction_amount

    @property
    def transaction_creation_date(self):
        """Gets the transaction_creation_date of this SolutionProviderCreditEvent.  # noqa: E501

        Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).  # noqa: E501

        :return: The transaction_creation_date of this SolutionProviderCreditEvent.  # noqa: E501
        :rtype: datetime
        """
        return self._transaction_creation_date

    @transaction_creation_date.setter
    def transaction_creation_date(self, transaction_creation_date):
        """Sets the transaction_creation_date of this SolutionProviderCreditEvent.

        Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).  # noqa: E501

        :param transaction_creation_date: The transaction_creation_date of this SolutionProviderCreditEvent.  # noqa: E501
        :type: datetime
        """

        self._transaction_creation_date = transaction_creation_date

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
        if issubclass(SolutionProviderCreditEvent, dict):
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
        if not isinstance(other, SolutionProviderCreditEvent):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SolutionProviderCreditEvent):
            return True

        return self.to_dict() != other.to_dict()

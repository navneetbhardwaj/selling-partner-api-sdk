# coding: utf-8

"""
    The Selling Partner API for Amazon Seller Wallet Open Banking API

    The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller's Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.

    The version of the OpenAPI document: 2024-03-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class TransactionInstrumentDetails(object):
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
        'bank_account': 'BankAccount',
        'bank_account_number': 'str',
    }

    attribute_map = {
        'bank_account': 'bankAccount',
        'bank_account_number': 'bankAccountNumber',
    }

    def __init__(self, bank_account=None, bank_account_number=None, _configuration=None):  # noqa: E501
        """TransactionInstrumentDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._bank_account = None
        self._bank_account_number = None
        self.discriminator = None

        self.bank_account = bank_account
        self.bank_account_number = bank_account_number

    @property
    def bank_account(self):
        """Gets the bank_account of this TransactionInstrumentDetails.  # noqa: E501


        :return: The bank_account of this TransactionInstrumentDetails.  # noqa: E501
        :rtype: BankAccount
        """
        return self._bank_account

    @bank_account.setter
    def bank_account(self, bank_account):
        """Sets the bank_account of this TransactionInstrumentDetails.


        :param bank_account: The bank_account of this TransactionInstrumentDetails.  # noqa: E501
        :type: BankAccount
        """
        if self._configuration.client_side_validation and bank_account is None:
            raise ValueError("Invalid value for `bank_account`, must not be `None`")  # noqa: E501

        self._bank_account = bank_account

    @property
    def bank_account_number(self):
        """Gets the bank_account_number of this TransactionInstrumentDetails.  # noqa: E501

        The bank account number of the destination payment method.  **Note:** This field is encrypted before Amazon receives it, so should not be used to generate `destAccountDigitalSignature`, and should not be included in the request signature.  # noqa: E501

        :return: The bank_account_number of this TransactionInstrumentDetails.  # noqa: E501
        :rtype: str
        """
        return self._bank_account_number

    @bank_account_number.setter
    def bank_account_number(self, bank_account_number):
        """Sets the bank_account_number of this TransactionInstrumentDetails.

        The bank account number of the destination payment method.  **Note:** This field is encrypted before Amazon receives it, so should not be used to generate `destAccountDigitalSignature`, and should not be included in the request signature.  # noqa: E501

        :param bank_account_number: The bank_account_number of this TransactionInstrumentDetails.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and bank_account_number is None:
            raise ValueError("Invalid value for `bank_account_number`, must not be `None`")  # noqa: E501

        self._bank_account_number = bank_account_number

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
        if issubclass(TransactionInstrumentDetails, dict):
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
        if not isinstance(other, TransactionInstrumentDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TransactionInstrumentDetails):
            return True

        return self.to_dict() != other.to_dict()

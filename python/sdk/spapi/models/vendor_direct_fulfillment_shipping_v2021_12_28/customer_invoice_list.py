# coding: utf-8

"""
    Selling Partner API for Direct Fulfillment Shipping

    Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.

    The version of the OpenAPI document: 2021-12-28
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CustomerInvoiceList(object):
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
        'pagination': 'Pagination',
        'customer_invoices': 'List[CustomerInvoice]',
    }

    attribute_map = {
        'pagination': 'pagination',
        'customer_invoices': 'customerInvoices',
    }

    def __init__(self, pagination=None, customer_invoices=None, _configuration=None):  # noqa: E501
        """CustomerInvoiceList - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._pagination = None
        self._customer_invoices = None
        self.discriminator = None

        if pagination is not None:
            self.pagination = pagination
        if customer_invoices is not None:
            self.customer_invoices = customer_invoices

    @property
    def pagination(self):
        """Gets the pagination of this CustomerInvoiceList.  # noqa: E501


        :return: The pagination of this CustomerInvoiceList.  # noqa: E501
        :rtype: Pagination
        """
        return self._pagination

    @pagination.setter
    def pagination(self, pagination):
        """Sets the pagination of this CustomerInvoiceList.


        :param pagination: The pagination of this CustomerInvoiceList.  # noqa: E501
        :type: Pagination
        """

        self._pagination = pagination

    @property
    def customer_invoices(self):
        """Gets the customer_invoices of this CustomerInvoiceList.  # noqa: E501

        Represents a customer invoice within the `CustomerInvoiceList`.  # noqa: E501

        :return: The customer_invoices of this CustomerInvoiceList.  # noqa: E501
        :rtype: List[CustomerInvoice]
        """
        return self._customer_invoices

    @customer_invoices.setter
    def customer_invoices(self, customer_invoices):
        """Sets the customer_invoices of this CustomerInvoiceList.

        Represents a customer invoice within the `CustomerInvoiceList`.  # noqa: E501

        :param customer_invoices: The customer_invoices of this CustomerInvoiceList.  # noqa: E501
        :type: List[CustomerInvoice]
        """

        self._customer_invoices = customer_invoices

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
        if issubclass(CustomerInvoiceList, dict):
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
        if not isinstance(other, CustomerInvoiceList):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CustomerInvoiceList):
            return True

        return self.to_dict() != other.to_dict()

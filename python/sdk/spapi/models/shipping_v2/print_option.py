# coding: utf-8

"""
    Amazon Shipping API

    The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.

    The version of the OpenAPI document: v2
    Contact: swa-api-core@amazon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class PrintOption(object):
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
        'supported_dpis': 'List[int]',
        'supported_page_layouts': 'List[str]',
        'supported_file_joining_options': 'List[bool]',
        'supported_document_details': 'List[SupportedDocumentDetail]',
    }

    attribute_map = {
        'supported_dpis': 'supportedDPIs',
        'supported_page_layouts': 'supportedPageLayouts',
        'supported_file_joining_options': 'supportedFileJoiningOptions',
        'supported_document_details': 'supportedDocumentDetails',
    }

    def __init__(self, supported_dpis=None, supported_page_layouts=None, supported_file_joining_options=None, supported_document_details=None, _configuration=None):  # noqa: E501
        """PrintOption - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._supported_dpis = None
        self._supported_page_layouts = None
        self._supported_file_joining_options = None
        self._supported_document_details = None
        self.discriminator = None

        if supported_dpis is not None:
            self.supported_dpis = supported_dpis
        self.supported_page_layouts = supported_page_layouts
        self.supported_file_joining_options = supported_file_joining_options
        self.supported_document_details = supported_document_details

    @property
    def supported_dpis(self):
        """Gets the supported_dpis of this PrintOption.  # noqa: E501

        A list of the supported DPI options for a document.  # noqa: E501

        :return: The supported_dpis of this PrintOption.  # noqa: E501
        :rtype: List[int]
        """
        return self._supported_dpis

    @supported_dpis.setter
    def supported_dpis(self, supported_dpis):
        """Sets the supported_dpis of this PrintOption.

        A list of the supported DPI options for a document.  # noqa: E501

        :param supported_dpis: The supported_dpis of this PrintOption.  # noqa: E501
        :type: List[int]
        """

        self._supported_dpis = supported_dpis

    @property
    def supported_page_layouts(self):
        """Gets the supported_page_layouts of this PrintOption.  # noqa: E501

        A list of the supported page layout options for a document.  # noqa: E501

        :return: The supported_page_layouts of this PrintOption.  # noqa: E501
        :rtype: List[str]
        """
        return self._supported_page_layouts

    @supported_page_layouts.setter
    def supported_page_layouts(self, supported_page_layouts):
        """Sets the supported_page_layouts of this PrintOption.

        A list of the supported page layout options for a document.  # noqa: E501

        :param supported_page_layouts: The supported_page_layouts of this PrintOption.  # noqa: E501
        :type: List[str]
        """
        if self._configuration.client_side_validation and supported_page_layouts is None:
            raise ValueError("Invalid value for `supported_page_layouts`, must not be `None`")  # noqa: E501

        self._supported_page_layouts = supported_page_layouts

    @property
    def supported_file_joining_options(self):
        """Gets the supported_file_joining_options of this PrintOption.  # noqa: E501

        A list of the supported needFileJoining boolean values for a document.  # noqa: E501

        :return: The supported_file_joining_options of this PrintOption.  # noqa: E501
        :rtype: List[bool]
        """
        return self._supported_file_joining_options

    @supported_file_joining_options.setter
    def supported_file_joining_options(self, supported_file_joining_options):
        """Sets the supported_file_joining_options of this PrintOption.

        A list of the supported needFileJoining boolean values for a document.  # noqa: E501

        :param supported_file_joining_options: The supported_file_joining_options of this PrintOption.  # noqa: E501
        :type: List[bool]
        """
        if self._configuration.client_side_validation and supported_file_joining_options is None:
            raise ValueError("Invalid value for `supported_file_joining_options`, must not be `None`")  # noqa: E501

        self._supported_file_joining_options = supported_file_joining_options

    @property
    def supported_document_details(self):
        """Gets the supported_document_details of this PrintOption.  # noqa: E501

        A list of the supported documented details.  # noqa: E501

        :return: The supported_document_details of this PrintOption.  # noqa: E501
        :rtype: List[SupportedDocumentDetail]
        """
        return self._supported_document_details

    @supported_document_details.setter
    def supported_document_details(self, supported_document_details):
        """Sets the supported_document_details of this PrintOption.

        A list of the supported documented details.  # noqa: E501

        :param supported_document_details: The supported_document_details of this PrintOption.  # noqa: E501
        :type: List[SupportedDocumentDetail]
        """
        if self._configuration.client_side_validation and supported_document_details is None:
            raise ValueError("Invalid value for `supported_document_details`, must not be `None`")  # noqa: E501

        self._supported_document_details = supported_document_details

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
        if issubclass(PrintOption, dict):
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
        if not isinstance(other, PrintOption):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PrintOption):
            return True

        return self.to_dict() != other.to_dict()

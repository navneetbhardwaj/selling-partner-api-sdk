# coding: utf-8

"""
    Selling Partner API for Retail Procurement Orders

    The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class SubmitAcknowledgementRequest(object):
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
        'acknowledgements': 'List[OrderAcknowledgement]',
    }

    attribute_map = {
        'acknowledgements': 'acknowledgements',
    }

    def __init__(self, acknowledgements=None, _configuration=None):  # noqa: E501
        """SubmitAcknowledgementRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._acknowledgements = None
        self.discriminator = None

        if acknowledgements is not None:
            self.acknowledgements = acknowledgements

    @property
    def acknowledgements(self):
        """Gets the acknowledgements of this SubmitAcknowledgementRequest.  # noqa: E501

        An array of order acknowledgements to be submitted.  # noqa: E501

        :return: The acknowledgements of this SubmitAcknowledgementRequest.  # noqa: E501
        :rtype: List[OrderAcknowledgement]
        """
        return self._acknowledgements

    @acknowledgements.setter
    def acknowledgements(self, acknowledgements):
        """Sets the acknowledgements of this SubmitAcknowledgementRequest.

        An array of order acknowledgements to be submitted.  # noqa: E501

        :param acknowledgements: The acknowledgements of this SubmitAcknowledgementRequest.  # noqa: E501
        :type: List[OrderAcknowledgement]
        """

        self._acknowledgements = acknowledgements

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
        if issubclass(SubmitAcknowledgementRequest, dict):
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
        if not isinstance(other, SubmitAcknowledgementRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SubmitAcknowledgementRequest):
            return True

        return self.to_dict() != other.to_dict()

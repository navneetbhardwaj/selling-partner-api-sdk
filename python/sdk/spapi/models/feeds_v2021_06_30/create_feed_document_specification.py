# coding: utf-8

"""
    Selling Partner API for Feeds

    The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.

    The version of the OpenAPI document: 2021-06-30
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CreateFeedDocumentSpecification(object):
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
        'content_type': 'str',
    }

    attribute_map = {
        'content_type': 'contentType',
    }

    def __init__(self, content_type=None, _configuration=None):  # noqa: E501
        """CreateFeedDocumentSpecification - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._content_type = None
        self.discriminator = None

        self.content_type = content_type

    @property
    def content_type(self):
        """Gets the content_type of this CreateFeedDocumentSpecification.  # noqa: E501

        The content type of the feed.  # noqa: E501

        :return: The content_type of this CreateFeedDocumentSpecification.  # noqa: E501
        :rtype: str
        """
        return self._content_type

    @content_type.setter
    def content_type(self, content_type):
        """Sets the content_type of this CreateFeedDocumentSpecification.

        The content type of the feed.  # noqa: E501

        :param content_type: The content_type of this CreateFeedDocumentSpecification.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and content_type is None:
            raise ValueError("Invalid value for `content_type`, must not be `None`")  # noqa: E501

        self._content_type = content_type

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
        if issubclass(CreateFeedDocumentSpecification, dict):
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
        if not isinstance(other, CreateFeedDocumentSpecification):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateFeedDocumentSpecification):
            return True

        return self.to_dict() != other.to_dict()

# coding: utf-8

"""
    Selling Partner API for A+ Content Management

    Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.

    The version of the OpenAPI document: 2020-11-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class StandardImageTextBlock(object):
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
        'image': 'ImageComponent',
        'headline': 'TextComponent',
        'body': 'ParagraphComponent',
    }

    attribute_map = {
        'image': 'image',
        'headline': 'headline',
        'body': 'body',
    }

    def __init__(self, image=None, headline=None, body=None, _configuration=None):  # noqa: E501
        """StandardImageTextBlock - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._image = None
        self._headline = None
        self._body = None
        self.discriminator = None

        if image is not None:
            self.image = image
        if headline is not None:
            self.headline = headline
        if body is not None:
            self.body = body

    @property
    def image(self):
        """Gets the image of this StandardImageTextBlock.  # noqa: E501


        :return: The image of this StandardImageTextBlock.  # noqa: E501
        :rtype: ImageComponent
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this StandardImageTextBlock.


        :param image: The image of this StandardImageTextBlock.  # noqa: E501
        :type: ImageComponent
        """

        self._image = image

    @property
    def headline(self):
        """Gets the headline of this StandardImageTextBlock.  # noqa: E501


        :return: The headline of this StandardImageTextBlock.  # noqa: E501
        :rtype: TextComponent
        """
        return self._headline

    @headline.setter
    def headline(self, headline):
        """Sets the headline of this StandardImageTextBlock.


        :param headline: The headline of this StandardImageTextBlock.  # noqa: E501
        :type: TextComponent
        """

        self._headline = headline

    @property
    def body(self):
        """Gets the body of this StandardImageTextBlock.  # noqa: E501


        :return: The body of this StandardImageTextBlock.  # noqa: E501
        :rtype: ParagraphComponent
        """
        return self._body

    @body.setter
    def body(self, body):
        """Sets the body of this StandardImageTextBlock.


        :param body: The body of this StandardImageTextBlock.  # noqa: E501
        :type: ParagraphComponent
        """

        self._body = body

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
        if issubclass(StandardImageTextBlock, dict):
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
        if not isinstance(other, StandardImageTextBlock):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, StandardImageTextBlock):
            return True

        return self.to_dict() != other.to_dict()

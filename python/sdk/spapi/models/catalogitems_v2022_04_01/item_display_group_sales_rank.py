# coding: utf-8

"""
    Selling Partner API for Catalog Items

    Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).

    The version of the OpenAPI document: 2022-04-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class ItemDisplayGroupSalesRank(object):
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
        'website_display_group': 'str',
        'title': 'str',
        'link': 'str',
        'rank': 'int',
    }

    attribute_map = {
        'website_display_group': 'websiteDisplayGroup',
        'title': 'title',
        'link': 'link',
        'rank': 'rank',
    }

    def __init__(self, website_display_group=None, title=None, link=None, rank=None, _configuration=None):  # noqa: E501
        """ItemDisplayGroupSalesRank - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._website_display_group = None
        self._title = None
        self._link = None
        self._rank = None
        self.discriminator = None

        self.website_display_group = website_display_group
        self.title = title
        if link is not None:
            self.link = link
        self.rank = rank

    @property
    def website_display_group(self):
        """Gets the website_display_group of this ItemDisplayGroupSalesRank.  # noqa: E501

        Name of the website display group that is associated with the sales rank  # noqa: E501

        :return: The website_display_group of this ItemDisplayGroupSalesRank.  # noqa: E501
        :rtype: str
        """
        return self._website_display_group

    @website_display_group.setter
    def website_display_group(self, website_display_group):
        """Sets the website_display_group of this ItemDisplayGroupSalesRank.

        Name of the website display group that is associated with the sales rank  # noqa: E501

        :param website_display_group: The website_display_group of this ItemDisplayGroupSalesRank.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and website_display_group is None:
            raise ValueError("Invalid value for `website_display_group`, must not be `None`")  # noqa: E501

        self._website_display_group = website_display_group

    @property
    def title(self):
        """Gets the title of this ItemDisplayGroupSalesRank.  # noqa: E501

        Name of the sales rank.  # noqa: E501

        :return: The title of this ItemDisplayGroupSalesRank.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this ItemDisplayGroupSalesRank.

        Name of the sales rank.  # noqa: E501

        :param title: The title of this ItemDisplayGroupSalesRank.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and title is None:
            raise ValueError("Invalid value for `title`, must not be `None`")  # noqa: E501

        self._title = title

    @property
    def link(self):
        """Gets the link of this ItemDisplayGroupSalesRank.  # noqa: E501

        Corresponding Amazon retail website URL for the sales rank.  # noqa: E501

        :return: The link of this ItemDisplayGroupSalesRank.  # noqa: E501
        :rtype: str
        """
        return self._link

    @link.setter
    def link(self, link):
        """Sets the link of this ItemDisplayGroupSalesRank.

        Corresponding Amazon retail website URL for the sales rank.  # noqa: E501

        :param link: The link of this ItemDisplayGroupSalesRank.  # noqa: E501
        :type: str
        """

        self._link = link

    @property
    def rank(self):
        """Gets the rank of this ItemDisplayGroupSalesRank.  # noqa: E501

        Sales rank.  # noqa: E501

        :return: The rank of this ItemDisplayGroupSalesRank.  # noqa: E501
        :rtype: int
        """
        return self._rank

    @rank.setter
    def rank(self, rank):
        """Sets the rank of this ItemDisplayGroupSalesRank.

        Sales rank.  # noqa: E501

        :param rank: The rank of this ItemDisplayGroupSalesRank.  # noqa: E501
        :type: int
        """
        if self._configuration.client_side_validation and rank is None:
            raise ValueError("Invalid value for `rank`, must not be `None`")  # noqa: E501

        self._rank = rank

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
        if issubclass(ItemDisplayGroupSalesRank, dict):
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
        if not isinstance(other, ItemDisplayGroupSalesRank):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ItemDisplayGroupSalesRank):
            return True

        return self.to_dict() != other.to_dict()

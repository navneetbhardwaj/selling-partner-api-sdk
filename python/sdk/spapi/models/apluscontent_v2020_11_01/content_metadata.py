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


class ContentMetadata(object):
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
        'name': 'str',
        'marketplace_id': 'str',
        'status': 'ContentStatus',
        'badge_set': 'List[ContentBadge]',
        'update_time': 'datetime',
    }

    attribute_map = {
        'name': 'name',
        'marketplace_id': 'marketplaceId',
        'status': 'status',
        'badge_set': 'badgeSet',
        'update_time': 'updateTime',
    }

    def __init__(self, name=None, marketplace_id=None, status=None, badge_set=None, update_time=None, _configuration=None):  # noqa: E501
        """ContentMetadata - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._name = None
        self._marketplace_id = None
        self._status = None
        self._badge_set = None
        self._update_time = None
        self.discriminator = None

        self.name = name
        self.marketplace_id = marketplace_id
        self.status = status
        self.badge_set = badge_set
        self.update_time = update_time

    @property
    def name(self):
        """Gets the name of this ContentMetadata.  # noqa: E501

        The A+ Content document's name.  # noqa: E501

        :return: The name of this ContentMetadata.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ContentMetadata.

        The A+ Content document's name.  # noqa: E501

        :param name: The name of this ContentMetadata.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                name is not None and len(name) > 100):
            raise ValueError("Invalid value for `name`, length must be less than or equal to `100`")  # noqa: E501
        if (self._configuration.client_side_validation and
                name is not None and len(name) < 1):
            raise ValueError("Invalid value for `name`, length must be greater than or equal to `1`")  # noqa: E501

        self._name = name

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this ContentMetadata.  # noqa: E501

        The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :return: The marketplace_id of this ContentMetadata.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this ContentMetadata.

        The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :param marketplace_id: The marketplace_id of this ContentMetadata.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and marketplace_id is None:
            raise ValueError("Invalid value for `marketplace_id`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                marketplace_id is not None and len(marketplace_id) < 1):
            raise ValueError("Invalid value for `marketplace_id`, length must be greater than or equal to `1`")  # noqa: E501

        self._marketplace_id = marketplace_id

    @property
    def status(self):
        """Gets the status of this ContentMetadata.  # noqa: E501


        :return: The status of this ContentMetadata.  # noqa: E501
        :rtype: ContentStatus
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this ContentMetadata.


        :param status: The status of this ContentMetadata.  # noqa: E501
        :type: ContentStatus
        """
        if self._configuration.client_side_validation and status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501

        self._status = status

    @property
    def badge_set(self):
        """Gets the badge_set of this ContentMetadata.  # noqa: E501

        The set of content badges.  # noqa: E501

        :return: The badge_set of this ContentMetadata.  # noqa: E501
        :rtype: List[ContentBadge]
        """
        return self._badge_set

    @badge_set.setter
    def badge_set(self, badge_set):
        """Sets the badge_set of this ContentMetadata.

        The set of content badges.  # noqa: E501

        :param badge_set: The badge_set of this ContentMetadata.  # noqa: E501
        :type: List[ContentBadge]
        """
        if self._configuration.client_side_validation and badge_set is None:
            raise ValueError("Invalid value for `badge_set`, must not be `None`")  # noqa: E501

        self._badge_set = badge_set

    @property
    def update_time(self):
        """Gets the update_time of this ContentMetadata.  # noqa: E501

        The approximate age of the A+ Content document and metadata.  # noqa: E501

        :return: The update_time of this ContentMetadata.  # noqa: E501
        :rtype: datetime
        """
        return self._update_time

    @update_time.setter
    def update_time(self, update_time):
        """Sets the update_time of this ContentMetadata.

        The approximate age of the A+ Content document and metadata.  # noqa: E501

        :param update_time: The update_time of this ContentMetadata.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and update_time is None:
            raise ValueError("Invalid value for `update_time`, must not be `None`")  # noqa: E501

        self._update_time = update_time

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
        if issubclass(ContentMetadata, dict):
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
        if not isinstance(other, ContentMetadata):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ContentMetadata):
            return True

        return self.to_dict() != other.to_dict()

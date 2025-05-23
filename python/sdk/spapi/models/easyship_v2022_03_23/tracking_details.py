# coding: utf-8

"""
    Selling Partner API for Easy Ship

    Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).

    The version of the OpenAPI document: 2022-03-23
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class TrackingDetails(object):
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
        'tracking_id': 'str',
    }

    attribute_map = {
        'tracking_id': 'trackingId',
    }

    def __init__(self, tracking_id=None, _configuration=None):  # noqa: E501
        """TrackingDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._tracking_id = None
        self.discriminator = None

        if tracking_id is not None:
            self.tracking_id = tracking_id

    @property
    def tracking_id(self):
        """Gets the tracking_id of this TrackingDetails.  # noqa: E501

        A string of up to 255 characters.  # noqa: E501

        :return: The tracking_id of this TrackingDetails.  # noqa: E501
        :rtype: str
        """
        return self._tracking_id

    @tracking_id.setter
    def tracking_id(self, tracking_id):
        """Sets the tracking_id of this TrackingDetails.

        A string of up to 255 characters.  # noqa: E501

        :param tracking_id: The tracking_id of this TrackingDetails.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                tracking_id is not None and len(tracking_id) > 255):
            raise ValueError("Invalid value for `tracking_id`, length must be less than or equal to `255`")  # noqa: E501
        if (self._configuration.client_side_validation and
                tracking_id is not None and len(tracking_id) < 1):
            raise ValueError("Invalid value for `tracking_id`, length must be greater than or equal to `1`")  # noqa: E501

        self._tracking_id = tracking_id

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
        if issubclass(TrackingDetails, dict):
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
        if not isinstance(other, TrackingDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TrackingDetails):
            return True

        return self.to_dict() != other.to_dict()

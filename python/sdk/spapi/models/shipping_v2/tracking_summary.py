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


class TrackingSummary(object):
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
        'status': 'Status',
        'tracking_detail_codes': 'TrackingDetailCodes',
    }

    attribute_map = {
        'status': 'status',
        'tracking_detail_codes': 'trackingDetailCodes',
    }

    def __init__(self, status=None, tracking_detail_codes=None, _configuration=None):  # noqa: E501
        """TrackingSummary - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._status = None
        self._tracking_detail_codes = None
        self.discriminator = None

        if status is not None:
            self.status = status
        if tracking_detail_codes is not None:
            self.tracking_detail_codes = tracking_detail_codes

    @property
    def status(self):
        """Gets the status of this TrackingSummary.  # noqa: E501


        :return: The status of this TrackingSummary.  # noqa: E501
        :rtype: Status
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this TrackingSummary.


        :param status: The status of this TrackingSummary.  # noqa: E501
        :type: Status
        """

        self._status = status

    @property
    def tracking_detail_codes(self):
        """Gets the tracking_detail_codes of this TrackingSummary.  # noqa: E501


        :return: The tracking_detail_codes of this TrackingSummary.  # noqa: E501
        :rtype: TrackingDetailCodes
        """
        return self._tracking_detail_codes

    @tracking_detail_codes.setter
    def tracking_detail_codes(self, tracking_detail_codes):
        """Sets the tracking_detail_codes of this TrackingSummary.


        :param tracking_detail_codes: The tracking_detail_codes of this TrackingSummary.  # noqa: E501
        :type: TrackingDetailCodes
        """

        self._tracking_detail_codes = tracking_detail_codes

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
        if issubclass(TrackingSummary, dict):
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
        if not isinstance(other, TrackingSummary):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TrackingSummary):
            return True

        return self.to_dict() != other.to_dict()

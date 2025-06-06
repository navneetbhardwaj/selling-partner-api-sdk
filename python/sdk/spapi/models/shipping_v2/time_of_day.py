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


class TimeOfDay(object):
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
        'hour_of_day': 'int',
        'minute_of_hour': 'int',
        'second_of_minute': 'int',
    }

    attribute_map = {
        'hour_of_day': 'hourOfDay',
        'minute_of_hour': 'minuteOfHour',
        'second_of_minute': 'secondOfMinute',
    }

    def __init__(self, hour_of_day=None, minute_of_hour=None, second_of_minute=None, _configuration=None):  # noqa: E501
        """TimeOfDay - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._hour_of_day = None
        self._minute_of_hour = None
        self._second_of_minute = None
        self.discriminator = None

        if hour_of_day is not None:
            self.hour_of_day = hour_of_day
        if minute_of_hour is not None:
            self.minute_of_hour = minute_of_hour
        if second_of_minute is not None:
            self.second_of_minute = second_of_minute

    @property
    def hour_of_day(self):
        """Gets the hour_of_day of this TimeOfDay.  # noqa: E501

        Denotes hour of the day, used for defining opening or closing time of access points  # noqa: E501

        :return: The hour_of_day of this TimeOfDay.  # noqa: E501
        :rtype: int
        """
        return self._hour_of_day

    @hour_of_day.setter
    def hour_of_day(self, hour_of_day):
        """Sets the hour_of_day of this TimeOfDay.

        Denotes hour of the day, used for defining opening or closing time of access points  # noqa: E501

        :param hour_of_day: The hour_of_day of this TimeOfDay.  # noqa: E501
        :type: int
        """

        self._hour_of_day = hour_of_day

    @property
    def minute_of_hour(self):
        """Gets the minute_of_hour of this TimeOfDay.  # noqa: E501

        Denotes minute of the hour, used for defining opening or closing time of access points  # noqa: E501

        :return: The minute_of_hour of this TimeOfDay.  # noqa: E501
        :rtype: int
        """
        return self._minute_of_hour

    @minute_of_hour.setter
    def minute_of_hour(self, minute_of_hour):
        """Sets the minute_of_hour of this TimeOfDay.

        Denotes minute of the hour, used for defining opening or closing time of access points  # noqa: E501

        :param minute_of_hour: The minute_of_hour of this TimeOfDay.  # noqa: E501
        :type: int
        """

        self._minute_of_hour = minute_of_hour

    @property
    def second_of_minute(self):
        """Gets the second_of_minute of this TimeOfDay.  # noqa: E501

        Denotes second of the minute, used for defining opening or closing time of access points  # noqa: E501

        :return: The second_of_minute of this TimeOfDay.  # noqa: E501
        :rtype: int
        """
        return self._second_of_minute

    @second_of_minute.setter
    def second_of_minute(self, second_of_minute):
        """Sets the second_of_minute of this TimeOfDay.

        Denotes second of the minute, used for defining opening or closing time of access points  # noqa: E501

        :param second_of_minute: The second_of_minute of this TimeOfDay.  # noqa: E501
        :type: int
        """

        self._second_of_minute = second_of_minute

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
        if issubclass(TimeOfDay, dict):
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
        if not isinstance(other, TimeOfDay):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TimeOfDay):
            return True

        return self.to_dict() != other.to_dict()

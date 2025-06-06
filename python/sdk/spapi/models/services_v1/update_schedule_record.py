# coding: utf-8

"""
    Selling Partner API for Services

    With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class UpdateScheduleRecord(object):
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
        'availability': 'AvailabilityRecord',
        'warnings': 'List[Warning]',
        'errors': 'List[Error]',
    }

    attribute_map = {
        'availability': 'availability',
        'warnings': 'warnings',
        'errors': 'errors',
    }

    def __init__(self, availability=None, warnings=None, errors=None, _configuration=None):  # noqa: E501
        """UpdateScheduleRecord - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._availability = None
        self._warnings = None
        self._errors = None
        self.discriminator = None

        if availability is not None:
            self.availability = availability
        if warnings is not None:
            self.warnings = warnings
        if errors is not None:
            self.errors = errors

    @property
    def availability(self):
        """Gets the availability of this UpdateScheduleRecord.  # noqa: E501


        :return: The availability of this UpdateScheduleRecord.  # noqa: E501
        :rtype: AvailabilityRecord
        """
        return self._availability

    @availability.setter
    def availability(self, availability):
        """Sets the availability of this UpdateScheduleRecord.


        :param availability: The availability of this UpdateScheduleRecord.  # noqa: E501
        :type: AvailabilityRecord
        """

        self._availability = availability

    @property
    def warnings(self):
        """Gets the warnings of this UpdateScheduleRecord.  # noqa: E501

        A list of warnings returned in the sucessful execution response of an API request.  # noqa: E501

        :return: The warnings of this UpdateScheduleRecord.  # noqa: E501
        :rtype: List[Warning]
        """
        return self._warnings

    @warnings.setter
    def warnings(self, warnings):
        """Sets the warnings of this UpdateScheduleRecord.

        A list of warnings returned in the sucessful execution response of an API request.  # noqa: E501

        :param warnings: The warnings of this UpdateScheduleRecord.  # noqa: E501
        :type: List[Warning]
        """

        self._warnings = warnings

    @property
    def errors(self):
        """Gets the errors of this UpdateScheduleRecord.  # noqa: E501

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :return: The errors of this UpdateScheduleRecord.  # noqa: E501
        :rtype: List[Error]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this UpdateScheduleRecord.

        A list of error responses returned when a request is unsuccessful.  # noqa: E501

        :param errors: The errors of this UpdateScheduleRecord.  # noqa: E501
        :type: List[Error]
        """

        self._errors = errors

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
        if issubclass(UpdateScheduleRecord, dict):
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
        if not isinstance(other, UpdateScheduleRecord):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpdateScheduleRecord):
            return True

        return self.to_dict() != other.to_dict()

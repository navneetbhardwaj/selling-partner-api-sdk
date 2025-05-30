# coding: utf-8

"""
    Selling Partner API for Notifications

    The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CreateSubscriptionRequest(object):
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
        'payload_version': 'str',
        'destination_id': 'str',
        'processing_directive': 'ProcessingDirective',
    }

    attribute_map = {
        'payload_version': 'payloadVersion',
        'destination_id': 'destinationId',
        'processing_directive': 'processingDirective',
    }

    def __init__(self, payload_version=None, destination_id=None, processing_directive=None, _configuration=None):  # noqa: E501
        """CreateSubscriptionRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._payload_version = None
        self._destination_id = None
        self._processing_directive = None
        self.discriminator = None

        self.payload_version = payload_version
        self.destination_id = destination_id
        if processing_directive is not None:
            self.processing_directive = processing_directive

    @property
    def payload_version(self):
        """Gets the payload_version of this CreateSubscriptionRequest.  # noqa: E501

        The version of the payload object to be used in the notification.  # noqa: E501

        :return: The payload_version of this CreateSubscriptionRequest.  # noqa: E501
        :rtype: str
        """
        return self._payload_version

    @payload_version.setter
    def payload_version(self, payload_version):
        """Sets the payload_version of this CreateSubscriptionRequest.

        The version of the payload object to be used in the notification.  # noqa: E501

        :param payload_version: The payload_version of this CreateSubscriptionRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payload_version is None:
            raise ValueError("Invalid value for `payload_version`, must not be `None`")  # noqa: E501

        self._payload_version = payload_version

    @property
    def destination_id(self):
        """Gets the destination_id of this CreateSubscriptionRequest.  # noqa: E501

        The identifier for the destination where notifications will be delivered.  # noqa: E501

        :return: The destination_id of this CreateSubscriptionRequest.  # noqa: E501
        :rtype: str
        """
        return self._destination_id

    @destination_id.setter
    def destination_id(self, destination_id):
        """Sets the destination_id of this CreateSubscriptionRequest.

        The identifier for the destination where notifications will be delivered.  # noqa: E501

        :param destination_id: The destination_id of this CreateSubscriptionRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and destination_id is None:
            raise ValueError("Invalid value for `destination_id`, must not be `None`")  # noqa: E501

        self._destination_id = destination_id

    @property
    def processing_directive(self):
        """Gets the processing_directive of this CreateSubscriptionRequest.  # noqa: E501


        :return: The processing_directive of this CreateSubscriptionRequest.  # noqa: E501
        :rtype: ProcessingDirective
        """
        return self._processing_directive

    @processing_directive.setter
    def processing_directive(self, processing_directive):
        """Sets the processing_directive of this CreateSubscriptionRequest.


        :param processing_directive: The processing_directive of this CreateSubscriptionRequest.  # noqa: E501
        :type: ProcessingDirective
        """

        self._processing_directive = processing_directive

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
        if issubclass(CreateSubscriptionRequest, dict):
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
        if not isinstance(other, CreateSubscriptionRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateSubscriptionRequest):
            return True

        return self.to_dict() != other.to_dict()

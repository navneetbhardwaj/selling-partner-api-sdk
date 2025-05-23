# coding: utf-8

"""
    The Selling Partner API for third party application integrations.

    With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.

    The version of the OpenAPI document: 2024-04-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class DeleteNotificationsRequest(object):
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
        'template_id': 'str',
        'deletion_reason': 'str',
    }

    attribute_map = {
        'template_id': 'templateId',
        'deletion_reason': 'deletionReason',
    }

    def __init__(self, template_id=None, deletion_reason=None, _configuration=None):  # noqa: E501
        """DeleteNotificationsRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._template_id = None
        self._deletion_reason = None
        self.discriminator = None

        self.template_id = template_id
        self.deletion_reason = deletion_reason

    @property
    def template_id(self):
        """Gets the template_id of this DeleteNotificationsRequest.  # noqa: E501

        The unique identifier of the notification template you used to onboard your application.  # noqa: E501

        :return: The template_id of this DeleteNotificationsRequest.  # noqa: E501
        :rtype: str
        """
        return self._template_id

    @template_id.setter
    def template_id(self, template_id):
        """Sets the template_id of this DeleteNotificationsRequest.

        The unique identifier of the notification template you used to onboard your application.  # noqa: E501

        :param template_id: The template_id of this DeleteNotificationsRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and template_id is None:
            raise ValueError("Invalid value for `template_id`, must not be `None`")  # noqa: E501

        self._template_id = template_id

    @property
    def deletion_reason(self):
        """Gets the deletion_reason of this DeleteNotificationsRequest.  # noqa: E501

        The unique identifier that maps each notification status to a reason code.  # noqa: E501

        :return: The deletion_reason of this DeleteNotificationsRequest.  # noqa: E501
        :rtype: str
        """
        return self._deletion_reason

    @deletion_reason.setter
    def deletion_reason(self, deletion_reason):
        """Sets the deletion_reason of this DeleteNotificationsRequest.

        The unique identifier that maps each notification status to a reason code.  # noqa: E501

        :param deletion_reason: The deletion_reason of this DeleteNotificationsRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and deletion_reason is None:
            raise ValueError("Invalid value for `deletion_reason`, must not be `None`")  # noqa: E501
        allowed_values = ["INCORRECT_CONTENT", "INCORRECT_RECIPIENT"]  # noqa: E501
        if (self._configuration.client_side_validation and
                deletion_reason not in allowed_values):
            raise ValueError(
                "Invalid value for `deletion_reason` ({0}), must be one of {1}"  # noqa: E501
                .format(deletion_reason, allowed_values)
            )

        self._deletion_reason = deletion_reason

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
        if issubclass(DeleteNotificationsRequest, dict):
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
        if not isinstance(other, DeleteNotificationsRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, DeleteNotificationsRequest):
            return True

        return self.to_dict() != other.to_dict()

# coding: utf-8

"""
    The Selling Partner API for FBA inbound operations.

    The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.

    The version of the OpenAPI document: 2024-03-20
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class UpdateShipmentTrackingDetailsRequest(object):
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
        'tracking_details': 'TrackingDetailsInput',
    }

    attribute_map = {
        'tracking_details': 'trackingDetails',
    }

    def __init__(self, tracking_details=None, _configuration=None):  # noqa: E501
        """UpdateShipmentTrackingDetailsRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._tracking_details = None
        self.discriminator = None

        self.tracking_details = tracking_details

    @property
    def tracking_details(self):
        """Gets the tracking_details of this UpdateShipmentTrackingDetailsRequest.  # noqa: E501


        :return: The tracking_details of this UpdateShipmentTrackingDetailsRequest.  # noqa: E501
        :rtype: TrackingDetailsInput
        """
        return self._tracking_details

    @tracking_details.setter
    def tracking_details(self, tracking_details):
        """Sets the tracking_details of this UpdateShipmentTrackingDetailsRequest.


        :param tracking_details: The tracking_details of this UpdateShipmentTrackingDetailsRequest.  # noqa: E501
        :type: TrackingDetailsInput
        """
        if self._configuration.client_side_validation and tracking_details is None:
            raise ValueError("Invalid value for `tracking_details`, must not be `None`")  # noqa: E501

        self._tracking_details = tracking_details

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
        if issubclass(UpdateShipmentTrackingDetailsRequest, dict):
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
        if not isinstance(other, UpdateShipmentTrackingDetailsRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpdateShipmentTrackingDetailsRequest):
            return True

        return self.to_dict() != other.to_dict()

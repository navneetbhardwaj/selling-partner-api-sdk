# coding: utf-8

"""
    Selling Partner API for Direct Fulfillment Shipping

    Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.

    The version of the OpenAPI document: 2021-12-28
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CreateShippingLabelsRequest(object):
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
        'selling_party': 'PartyIdentification',
        'ship_from_party': 'PartyIdentification',
        'containers': 'List[Container]',
    }

    attribute_map = {
        'selling_party': 'sellingParty',
        'ship_from_party': 'shipFromParty',
        'containers': 'containers',
    }

    def __init__(self, selling_party=None, ship_from_party=None, containers=None, _configuration=None):  # noqa: E501
        """CreateShippingLabelsRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._selling_party = None
        self._ship_from_party = None
        self._containers = None
        self.discriminator = None

        self.selling_party = selling_party
        self.ship_from_party = ship_from_party
        if containers is not None:
            self.containers = containers

    @property
    def selling_party(self):
        """Gets the selling_party of this CreateShippingLabelsRequest.  # noqa: E501


        :return: The selling_party of this CreateShippingLabelsRequest.  # noqa: E501
        :rtype: PartyIdentification
        """
        return self._selling_party

    @selling_party.setter
    def selling_party(self, selling_party):
        """Sets the selling_party of this CreateShippingLabelsRequest.


        :param selling_party: The selling_party of this CreateShippingLabelsRequest.  # noqa: E501
        :type: PartyIdentification
        """
        if self._configuration.client_side_validation and selling_party is None:
            raise ValueError("Invalid value for `selling_party`, must not be `None`")  # noqa: E501

        self._selling_party = selling_party

    @property
    def ship_from_party(self):
        """Gets the ship_from_party of this CreateShippingLabelsRequest.  # noqa: E501


        :return: The ship_from_party of this CreateShippingLabelsRequest.  # noqa: E501
        :rtype: PartyIdentification
        """
        return self._ship_from_party

    @ship_from_party.setter
    def ship_from_party(self, ship_from_party):
        """Sets the ship_from_party of this CreateShippingLabelsRequest.


        :param ship_from_party: The ship_from_party of this CreateShippingLabelsRequest.  # noqa: E501
        :type: PartyIdentification
        """
        if self._configuration.client_side_validation and ship_from_party is None:
            raise ValueError("Invalid value for `ship_from_party`, must not be `None`")  # noqa: E501

        self._ship_from_party = ship_from_party

    @property
    def containers(self):
        """Gets the containers of this CreateShippingLabelsRequest.  # noqa: E501

        A list of the packages in this shipment.  # noqa: E501

        :return: The containers of this CreateShippingLabelsRequest.  # noqa: E501
        :rtype: List[Container]
        """
        return self._containers

    @containers.setter
    def containers(self, containers):
        """Sets the containers of this CreateShippingLabelsRequest.

        A list of the packages in this shipment.  # noqa: E501

        :param containers: The containers of this CreateShippingLabelsRequest.  # noqa: E501
        :type: List[Container]
        """

        self._containers = containers

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
        if issubclass(CreateShippingLabelsRequest, dict):
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
        if not isinstance(other, CreateShippingLabelsRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateShippingLabelsRequest):
            return True

        return self.to_dict() != other.to_dict()

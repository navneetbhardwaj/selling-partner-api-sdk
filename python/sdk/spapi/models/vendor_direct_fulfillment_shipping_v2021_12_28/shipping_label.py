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


class ShippingLabel(object):
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
        'purchase_order_number': 'str',
        'selling_party': 'PartyIdentification',
        'ship_from_party': 'PartyIdentification',
        'label_format': 'str',
        'label_data': 'List[LabelData]',
    }

    attribute_map = {
        'purchase_order_number': 'purchaseOrderNumber',
        'selling_party': 'sellingParty',
        'ship_from_party': 'shipFromParty',
        'label_format': 'labelFormat',
        'label_data': 'labelData',
    }

    def __init__(self, purchase_order_number=None, selling_party=None, ship_from_party=None, label_format=None, label_data=None, _configuration=None):  # noqa: E501
        """ShippingLabel - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._purchase_order_number = None
        self._selling_party = None
        self._ship_from_party = None
        self._label_format = None
        self._label_data = None
        self.discriminator = None

        self.purchase_order_number = purchase_order_number
        self.selling_party = selling_party
        self.ship_from_party = ship_from_party
        self.label_format = label_format
        self.label_data = label_data

    @property
    def purchase_order_number(self):
        """Gets the purchase_order_number of this ShippingLabel.  # noqa: E501

        This field will contain the Purchase Order Number for this order.  # noqa: E501

        :return: The purchase_order_number of this ShippingLabel.  # noqa: E501
        :rtype: str
        """
        return self._purchase_order_number

    @purchase_order_number.setter
    def purchase_order_number(self, purchase_order_number):
        """Sets the purchase_order_number of this ShippingLabel.

        This field will contain the Purchase Order Number for this order.  # noqa: E501

        :param purchase_order_number: The purchase_order_number of this ShippingLabel.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and purchase_order_number is None:
            raise ValueError("Invalid value for `purchase_order_number`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                purchase_order_number is not None and not re.search(r'^[a-zA-Z0-9]+$', purchase_order_number)):  # noqa: E501
            raise ValueError(r"Invalid value for `purchase_order_number`, must be a follow pattern or equal to `/^[a-zA-Z0-9]+$/`")  # noqa: E501

        self._purchase_order_number = purchase_order_number

    @property
    def selling_party(self):
        """Gets the selling_party of this ShippingLabel.  # noqa: E501


        :return: The selling_party of this ShippingLabel.  # noqa: E501
        :rtype: PartyIdentification
        """
        return self._selling_party

    @selling_party.setter
    def selling_party(self, selling_party):
        """Sets the selling_party of this ShippingLabel.


        :param selling_party: The selling_party of this ShippingLabel.  # noqa: E501
        :type: PartyIdentification
        """
        if self._configuration.client_side_validation and selling_party is None:
            raise ValueError("Invalid value for `selling_party`, must not be `None`")  # noqa: E501

        self._selling_party = selling_party

    @property
    def ship_from_party(self):
        """Gets the ship_from_party of this ShippingLabel.  # noqa: E501


        :return: The ship_from_party of this ShippingLabel.  # noqa: E501
        :rtype: PartyIdentification
        """
        return self._ship_from_party

    @ship_from_party.setter
    def ship_from_party(self, ship_from_party):
        """Sets the ship_from_party of this ShippingLabel.


        :param ship_from_party: The ship_from_party of this ShippingLabel.  # noqa: E501
        :type: PartyIdentification
        """
        if self._configuration.client_side_validation and ship_from_party is None:
            raise ValueError("Invalid value for `ship_from_party`, must not be `None`")  # noqa: E501

        self._ship_from_party = ship_from_party

    @property
    def label_format(self):
        """Gets the label_format of this ShippingLabel.  # noqa: E501

        Format of the label.  # noqa: E501

        :return: The label_format of this ShippingLabel.  # noqa: E501
        :rtype: str
        """
        return self._label_format

    @label_format.setter
    def label_format(self, label_format):
        """Sets the label_format of this ShippingLabel.

        Format of the label.  # noqa: E501

        :param label_format: The label_format of this ShippingLabel.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and label_format is None:
            raise ValueError("Invalid value for `label_format`, must not be `None`")  # noqa: E501
        allowed_values = ["PNG", "ZPL"]  # noqa: E501
        if (self._configuration.client_side_validation and
                label_format not in allowed_values):
            raise ValueError(
                "Invalid value for `label_format` ({0}), must be one of {1}"  # noqa: E501
                .format(label_format, allowed_values)
            )

        self._label_format = label_format

    @property
    def label_data(self):
        """Gets the label_data of this ShippingLabel.  # noqa: E501

        Provides the details of the packages in this shipment.  # noqa: E501

        :return: The label_data of this ShippingLabel.  # noqa: E501
        :rtype: List[LabelData]
        """
        return self._label_data

    @label_data.setter
    def label_data(self, label_data):
        """Sets the label_data of this ShippingLabel.

        Provides the details of the packages in this shipment.  # noqa: E501

        :param label_data: The label_data of this ShippingLabel.  # noqa: E501
        :type: List[LabelData]
        """
        if self._configuration.client_side_validation and label_data is None:
            raise ValueError("Invalid value for `label_data`, must not be `None`")  # noqa: E501

        self._label_data = label_data

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
        if issubclass(ShippingLabel, dict):
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
        if not isinstance(other, ShippingLabel):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ShippingLabel):
            return True

        return self.to_dict() != other.to_dict()

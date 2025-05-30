# coding: utf-8

"""
    Selling Partner API for Merchant Fulfillment

    With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class DangerousGoodsDetails(object):
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
        'united_nations_regulatory_id': 'str',
        'transportation_regulatory_class': 'str',
        'packing_group': 'str',
        'packing_instruction': 'str',
    }

    attribute_map = {
        'united_nations_regulatory_id': 'UnitedNationsRegulatoryId',
        'transportation_regulatory_class': 'TransportationRegulatoryClass',
        'packing_group': 'PackingGroup',
        'packing_instruction': 'PackingInstruction',
    }

    def __init__(self, united_nations_regulatory_id=None, transportation_regulatory_class=None, packing_group=None, packing_instruction=None, _configuration=None):  # noqa: E501
        """DangerousGoodsDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._united_nations_regulatory_id = None
        self._transportation_regulatory_class = None
        self._packing_group = None
        self._packing_instruction = None
        self.discriminator = None

        if united_nations_regulatory_id is not None:
            self.united_nations_regulatory_id = united_nations_regulatory_id
        if transportation_regulatory_class is not None:
            self.transportation_regulatory_class = transportation_regulatory_class
        if packing_group is not None:
            self.packing_group = packing_group
        if packing_instruction is not None:
            self.packing_instruction = packing_instruction

    @property
    def united_nations_regulatory_id(self):
        """Gets the united_nations_regulatory_id of this DangerousGoodsDetails.  # noqa: E501

        The specific UNID of the item being shipped.  # noqa: E501

        :return: The united_nations_regulatory_id of this DangerousGoodsDetails.  # noqa: E501
        :rtype: str
        """
        return self._united_nations_regulatory_id

    @united_nations_regulatory_id.setter
    def united_nations_regulatory_id(self, united_nations_regulatory_id):
        """Sets the united_nations_regulatory_id of this DangerousGoodsDetails.

        The specific UNID of the item being shipped.  # noqa: E501

        :param united_nations_regulatory_id: The united_nations_regulatory_id of this DangerousGoodsDetails.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                united_nations_regulatory_id is not None and not re.search(r'^(UN|ID|NA)[0-9]{4}$', united_nations_regulatory_id)):  # noqa: E501
            raise ValueError(r"Invalid value for `united_nations_regulatory_id`, must be a follow pattern or equal to `/^(UN|ID|NA)[0-9]{4}$/`")  # noqa: E501

        self._united_nations_regulatory_id = united_nations_regulatory_id

    @property
    def transportation_regulatory_class(self):
        """Gets the transportation_regulatory_class of this DangerousGoodsDetails.  # noqa: E501

        The specific regulatory class of the shipped item.  # noqa: E501

        :return: The transportation_regulatory_class of this DangerousGoodsDetails.  # noqa: E501
        :rtype: str
        """
        return self._transportation_regulatory_class

    @transportation_regulatory_class.setter
    def transportation_regulatory_class(self, transportation_regulatory_class):
        """Sets the transportation_regulatory_class of this DangerousGoodsDetails.

        The specific regulatory class of the shipped item.  # noqa: E501

        :param transportation_regulatory_class: The transportation_regulatory_class of this DangerousGoodsDetails.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                transportation_regulatory_class is not None and not re.search(r'^[1-9](\.[1-9])?$', transportation_regulatory_class)):  # noqa: E501
            raise ValueError(r"Invalid value for `transportation_regulatory_class`, must be a follow pattern or equal to `/^[1-9](\.[1-9])?$/`")  # noqa: E501

        self._transportation_regulatory_class = transportation_regulatory_class

    @property
    def packing_group(self):
        """Gets the packing_group of this DangerousGoodsDetails.  # noqa: E501

        The specific packaging group of the item being shipped.  # noqa: E501

        :return: The packing_group of this DangerousGoodsDetails.  # noqa: E501
        :rtype: str
        """
        return self._packing_group

    @packing_group.setter
    def packing_group(self, packing_group):
        """Sets the packing_group of this DangerousGoodsDetails.

        The specific packaging group of the item being shipped.  # noqa: E501

        :param packing_group: The packing_group of this DangerousGoodsDetails.  # noqa: E501
        :type: str
        """
        allowed_values = ["I", "II", "III"]  # noqa: E501
        if (self._configuration.client_side_validation and
                packing_group not in allowed_values):
            raise ValueError(
                "Invalid value for `packing_group` ({0}), must be one of {1}"  # noqa: E501
                .format(packing_group, allowed_values)
            )

        self._packing_group = packing_group

    @property
    def packing_instruction(self):
        """Gets the packing_instruction of this DangerousGoodsDetails.  # noqa: E501

        The specific packing instruction of the item being shipped.  # noqa: E501

        :return: The packing_instruction of this DangerousGoodsDetails.  # noqa: E501
        :rtype: str
        """
        return self._packing_instruction

    @packing_instruction.setter
    def packing_instruction(self, packing_instruction):
        """Sets the packing_instruction of this DangerousGoodsDetails.

        The specific packing instruction of the item being shipped.  # noqa: E501

        :param packing_instruction: The packing_instruction of this DangerousGoodsDetails.  # noqa: E501
        :type: str
        """
        allowed_values = ["PI965_SECTION_IA", "PI965_SECTION_IB", "PI965_SECTION_II", "PI966_SECTION_I", "PI966_SECTION_II", "PI967_SECTION_I", "PI967_SECTION_II", "PI968_SECTION_IA", "PI968_SECTION_IB", "PI969_SECTION_I", "PI969_SECTION_II", "PI970_SECTION_I", "PI970_SECTION_II"]  # noqa: E501
        if (self._configuration.client_side_validation and
                packing_instruction not in allowed_values):
            raise ValueError(
                "Invalid value for `packing_instruction` ({0}), must be one of {1}"  # noqa: E501
                .format(packing_instruction, allowed_values)
            )

        self._packing_instruction = packing_instruction

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
        if issubclass(DangerousGoodsDetails, dict):
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
        if not isinstance(other, DangerousGoodsDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, DangerousGoodsDetails):
            return True

        return self.to_dict() != other.to_dict()

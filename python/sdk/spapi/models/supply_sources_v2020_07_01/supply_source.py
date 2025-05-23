# coding: utf-8

"""
    Selling Partner API for Supply Sources

    Manage configurations and capabilities of seller supply sources.

    The version of the OpenAPI document: 2020-07-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class SupplySource(object):
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
        'supply_source_id': 'str',
        'supply_source_code': 'str',
        'alias': 'str',
        'status': 'SupplySourceStatusReadOnly',
        'address': 'Address',
        'configuration': 'SupplySourceConfiguration',
        'capabilities': 'SupplySourceCapabilities',
        'created_at': 'str',
        'updated_at': 'str',
    }

    attribute_map = {
        'supply_source_id': 'supplySourceId',
        'supply_source_code': 'supplySourceCode',
        'alias': 'alias',
        'status': 'status',
        'address': 'address',
        'configuration': 'configuration',
        'capabilities': 'capabilities',
        'created_at': 'createdAt',
        'updated_at': 'updatedAt',
    }

    def __init__(self, supply_source_id=None, supply_source_code=None, alias=None, status=None, address=None, configuration=None, capabilities=None, created_at=None, updated_at=None, _configuration=None):  # noqa: E501
        """SupplySource - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._supply_source_id = None
        self._supply_source_code = None
        self._alias = None
        self._status = None
        self._address = None
        self._configuration = None
        self._capabilities = None
        self._created_at = None
        self._updated_at = None
        self.discriminator = None

        if supply_source_id is not None:
            self.supply_source_id = supply_source_id
        if supply_source_code is not None:
            self.supply_source_code = supply_source_code
        if alias is not None:
            self.alias = alias
        if status is not None:
            self.status = status
        if address is not None:
            self.address = address
        if configuration is not None:
            self.configuration = configuration
        if capabilities is not None:
            self.capabilities = capabilities
        if created_at is not None:
            self.created_at = created_at
        if updated_at is not None:
            self.updated_at = updated_at

    @property
    def supply_source_id(self):
        """Gets the supply_source_id of this SupplySource.  # noqa: E501

        An Amazon generated unique supply source ID.  # noqa: E501

        :return: The supply_source_id of this SupplySource.  # noqa: E501
        :rtype: str
        """
        return self._supply_source_id

    @supply_source_id.setter
    def supply_source_id(self, supply_source_id):
        """Sets the supply_source_id of this SupplySource.

        An Amazon generated unique supply source ID.  # noqa: E501

        :param supply_source_id: The supply_source_id of this SupplySource.  # noqa: E501
        :type: str
        """

        self._supply_source_id = supply_source_id

    @property
    def supply_source_code(self):
        """Gets the supply_source_code of this SupplySource.  # noqa: E501

        The seller-provided unique supply source code.  # noqa: E501

        :return: The supply_source_code of this SupplySource.  # noqa: E501
        :rtype: str
        """
        return self._supply_source_code

    @supply_source_code.setter
    def supply_source_code(self, supply_source_code):
        """Sets the supply_source_code of this SupplySource.

        The seller-provided unique supply source code.  # noqa: E501

        :param supply_source_code: The supply_source_code of this SupplySource.  # noqa: E501
        :type: str
        """

        self._supply_source_code = supply_source_code

    @property
    def alias(self):
        """Gets the alias of this SupplySource.  # noqa: E501

        The custom alias for this supply source  # noqa: E501

        :return: The alias of this SupplySource.  # noqa: E501
        :rtype: str
        """
        return self._alias

    @alias.setter
    def alias(self, alias):
        """Sets the alias of this SupplySource.

        The custom alias for this supply source  # noqa: E501

        :param alias: The alias of this SupplySource.  # noqa: E501
        :type: str
        """

        self._alias = alias

    @property
    def status(self):
        """Gets the status of this SupplySource.  # noqa: E501


        :return: The status of this SupplySource.  # noqa: E501
        :rtype: SupplySourceStatusReadOnly
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this SupplySource.


        :param status: The status of this SupplySource.  # noqa: E501
        :type: SupplySourceStatusReadOnly
        """

        self._status = status

    @property
    def address(self):
        """Gets the address of this SupplySource.  # noqa: E501


        :return: The address of this SupplySource.  # noqa: E501
        :rtype: Address
        """
        return self._address

    @address.setter
    def address(self, address):
        """Sets the address of this SupplySource.


        :param address: The address of this SupplySource.  # noqa: E501
        :type: Address
        """

        self._address = address

    @property
    def configuration(self):
        """Gets the configuration of this SupplySource.  # noqa: E501


        :return: The configuration of this SupplySource.  # noqa: E501
        :rtype: SupplySourceConfiguration
        """
        return self._configuration

    @configuration.setter
    def configuration(self, configuration):
        """Sets the configuration of this SupplySource.


        :param configuration: The configuration of this SupplySource.  # noqa: E501
        :type: SupplySourceConfiguration
        """

        self._configuration = configuration

    @property
    def capabilities(self):
        """Gets the capabilities of this SupplySource.  # noqa: E501


        :return: The capabilities of this SupplySource.  # noqa: E501
        :rtype: SupplySourceCapabilities
        """
        return self._capabilities

    @capabilities.setter
    def capabilities(self, capabilities):
        """Sets the capabilities of this SupplySource.


        :param capabilities: The capabilities of this SupplySource.  # noqa: E501
        :type: SupplySourceCapabilities
        """

        self._capabilities = capabilities

    @property
    def created_at(self):
        """Gets the created_at of this SupplySource.  # noqa: E501

        A date and time in the rfc3339 format.  # noqa: E501

        :return: The created_at of this SupplySource.  # noqa: E501
        :rtype: str
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this SupplySource.

        A date and time in the rfc3339 format.  # noqa: E501

        :param created_at: The created_at of this SupplySource.  # noqa: E501
        :type: str
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this SupplySource.  # noqa: E501

        A date and time in the rfc3339 format.  # noqa: E501

        :return: The updated_at of this SupplySource.  # noqa: E501
        :rtype: str
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this SupplySource.

        A date and time in the rfc3339 format.  # noqa: E501

        :param updated_at: The updated_at of this SupplySource.  # noqa: E501
        :type: str
        """

        self._updated_at = updated_at

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
        if issubclass(SupplySource, dict):
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
        if not isinstance(other, SupplySource):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SupplySource):
            return True

        return self.to_dict() != other.to_dict()

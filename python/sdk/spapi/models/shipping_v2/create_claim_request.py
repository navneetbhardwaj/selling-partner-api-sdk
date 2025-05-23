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


class CreateClaimRequest(object):
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
        'tracking_id': 'str',
        'declared_value': 'Currency',
        'claim_reason': 'ClaimReason',
        'is_replacement_package_sent': 'bool',
        'proofs': 'List[str]',
        'settlement_type': 'SettlementType',
    }

    attribute_map = {
        'tracking_id': 'trackingId',
        'declared_value': 'declaredValue',
        'claim_reason': 'claimReason',
        'is_replacement_package_sent': 'isReplacementPackageSent',
        'proofs': 'proofs',
        'settlement_type': 'settlementType',
    }

    def __init__(self, tracking_id=None, declared_value=None, claim_reason=None, is_replacement_package_sent=None, proofs=None, settlement_type=None, _configuration=None):  # noqa: E501
        """CreateClaimRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._tracking_id = None
        self._declared_value = None
        self._claim_reason = None
        self._is_replacement_package_sent = None
        self._proofs = None
        self._settlement_type = None
        self.discriminator = None

        self.tracking_id = tracking_id
        if declared_value is not None:
            self.declared_value = declared_value
        self.claim_reason = claim_reason
        if is_replacement_package_sent is not None:
            self.is_replacement_package_sent = is_replacement_package_sent
        if proofs is not None:
            self.proofs = proofs
        self.settlement_type = settlement_type

    @property
    def tracking_id(self):
        """Gets the tracking_id of this CreateClaimRequest.  # noqa: E501

        The carrier generated identifier for a package in a purchased shipment.  # noqa: E501

        :return: The tracking_id of this CreateClaimRequest.  # noqa: E501
        :rtype: str
        """
        return self._tracking_id

    @tracking_id.setter
    def tracking_id(self, tracking_id):
        """Sets the tracking_id of this CreateClaimRequest.

        The carrier generated identifier for a package in a purchased shipment.  # noqa: E501

        :param tracking_id: The tracking_id of this CreateClaimRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and tracking_id is None:
            raise ValueError("Invalid value for `tracking_id`, must not be `None`")  # noqa: E501

        self._tracking_id = tracking_id

    @property
    def declared_value(self):
        """Gets the declared_value of this CreateClaimRequest.  # noqa: E501


        :return: The declared_value of this CreateClaimRequest.  # noqa: E501
        :rtype: Currency
        """
        return self._declared_value

    @declared_value.setter
    def declared_value(self, declared_value):
        """Sets the declared_value of this CreateClaimRequest.


        :param declared_value: The declared_value of this CreateClaimRequest.  # noqa: E501
        :type: Currency
        """

        self._declared_value = declared_value

    @property
    def claim_reason(self):
        """Gets the claim_reason of this CreateClaimRequest.  # noqa: E501


        :return: The claim_reason of this CreateClaimRequest.  # noqa: E501
        :rtype: ClaimReason
        """
        return self._claim_reason

    @claim_reason.setter
    def claim_reason(self, claim_reason):
        """Sets the claim_reason of this CreateClaimRequest.


        :param claim_reason: The claim_reason of this CreateClaimRequest.  # noqa: E501
        :type: ClaimReason
        """
        if self._configuration.client_side_validation and claim_reason is None:
            raise ValueError("Invalid value for `claim_reason`, must not be `None`")  # noqa: E501

        self._claim_reason = claim_reason

    @property
    def is_replacement_package_sent(self):
        """Gets the is_replacement_package_sent of this CreateClaimRequest.  # noqa: E501

        Applicable for only On Amazon shipments to identify if replacement was sent  # noqa: E501

        :return: The is_replacement_package_sent of this CreateClaimRequest.  # noqa: E501
        :rtype: bool
        """
        return self._is_replacement_package_sent

    @is_replacement_package_sent.setter
    def is_replacement_package_sent(self, is_replacement_package_sent):
        """Sets the is_replacement_package_sent of this CreateClaimRequest.

        Applicable for only On Amazon shipments to identify if replacement was sent  # noqa: E501

        :param is_replacement_package_sent: The is_replacement_package_sent of this CreateClaimRequest.  # noqa: E501
        :type: bool
        """

        self._is_replacement_package_sent = is_replacement_package_sent

    @property
    def proofs(self):
        """Gets the proofs of this CreateClaimRequest.  # noqa: E501

        A list of proof URLs for a claim. Basic URL validation will happen for each URLs present in the list  # noqa: E501

        :return: The proofs of this CreateClaimRequest.  # noqa: E501
        :rtype: List[str]
        """
        return self._proofs

    @proofs.setter
    def proofs(self, proofs):
        """Sets the proofs of this CreateClaimRequest.

        A list of proof URLs for a claim. Basic URL validation will happen for each URLs present in the list  # noqa: E501

        :param proofs: The proofs of this CreateClaimRequest.  # noqa: E501
        :type: List[str]
        """

        self._proofs = proofs

    @property
    def settlement_type(self):
        """Gets the settlement_type of this CreateClaimRequest.  # noqa: E501


        :return: The settlement_type of this CreateClaimRequest.  # noqa: E501
        :rtype: SettlementType
        """
        return self._settlement_type

    @settlement_type.setter
    def settlement_type(self, settlement_type):
        """Sets the settlement_type of this CreateClaimRequest.


        :param settlement_type: The settlement_type of this CreateClaimRequest.  # noqa: E501
        :type: SettlementType
        """
        if self._configuration.client_side_validation and settlement_type is None:
            raise ValueError("Invalid value for `settlement_type`, must not be `None`")  # noqa: E501

        self._settlement_type = settlement_type

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
        if issubclass(CreateClaimRequest, dict):
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
        if not isinstance(other, CreateClaimRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateClaimRequest):
            return True

        return self.to_dict() != other.to_dict()

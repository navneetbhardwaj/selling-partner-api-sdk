# coding: utf-8

"""
    Selling Partner API for Finances

    The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CouponPaymentEvent(object):
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
        'posted_date': 'datetime',
        'coupon_id': 'str',
        'seller_coupon_description': 'str',
        'clip_or_redemption_count': 'int',
        'payment_event_id': 'str',
        'fee_component': 'FeeComponent',
        'charge_component': 'ChargeComponent',
        'total_amount': 'Currency',
    }

    attribute_map = {
        'posted_date': 'PostedDate',
        'coupon_id': 'CouponId',
        'seller_coupon_description': 'SellerCouponDescription',
        'clip_or_redemption_count': 'ClipOrRedemptionCount',
        'payment_event_id': 'PaymentEventId',
        'fee_component': 'FeeComponent',
        'charge_component': 'ChargeComponent',
        'total_amount': 'TotalAmount',
    }

    def __init__(self, posted_date=None, coupon_id=None, seller_coupon_description=None, clip_or_redemption_count=None, payment_event_id=None, fee_component=None, charge_component=None, total_amount=None, _configuration=None):  # noqa: E501
        """CouponPaymentEvent - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._posted_date = None
        self._coupon_id = None
        self._seller_coupon_description = None
        self._clip_or_redemption_count = None
        self._payment_event_id = None
        self._fee_component = None
        self._charge_component = None
        self._total_amount = None
        self.discriminator = None

        if posted_date is not None:
            self.posted_date = posted_date
        if coupon_id is not None:
            self.coupon_id = coupon_id
        if seller_coupon_description is not None:
            self.seller_coupon_description = seller_coupon_description
        if clip_or_redemption_count is not None:
            self.clip_or_redemption_count = clip_or_redemption_count
        if payment_event_id is not None:
            self.payment_event_id = payment_event_id
        if fee_component is not None:
            self.fee_component = fee_component
        if charge_component is not None:
            self.charge_component = charge_component
        if total_amount is not None:
            self.total_amount = total_amount

    @property
    def posted_date(self):
        """Gets the posted_date of this CouponPaymentEvent.  # noqa: E501

        Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).  # noqa: E501

        :return: The posted_date of this CouponPaymentEvent.  # noqa: E501
        :rtype: datetime
        """
        return self._posted_date

    @posted_date.setter
    def posted_date(self, posted_date):
        """Sets the posted_date of this CouponPaymentEvent.

        Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).  # noqa: E501

        :param posted_date: The posted_date of this CouponPaymentEvent.  # noqa: E501
        :type: datetime
        """

        self._posted_date = posted_date

    @property
    def coupon_id(self):
        """Gets the coupon_id of this CouponPaymentEvent.  # noqa: E501

        A coupon identifier.  # noqa: E501

        :return: The coupon_id of this CouponPaymentEvent.  # noqa: E501
        :rtype: str
        """
        return self._coupon_id

    @coupon_id.setter
    def coupon_id(self, coupon_id):
        """Sets the coupon_id of this CouponPaymentEvent.

        A coupon identifier.  # noqa: E501

        :param coupon_id: The coupon_id of this CouponPaymentEvent.  # noqa: E501
        :type: str
        """

        self._coupon_id = coupon_id

    @property
    def seller_coupon_description(self):
        """Gets the seller_coupon_description of this CouponPaymentEvent.  # noqa: E501

        The description provided by the seller when they created the coupon.  # noqa: E501

        :return: The seller_coupon_description of this CouponPaymentEvent.  # noqa: E501
        :rtype: str
        """
        return self._seller_coupon_description

    @seller_coupon_description.setter
    def seller_coupon_description(self, seller_coupon_description):
        """Sets the seller_coupon_description of this CouponPaymentEvent.

        The description provided by the seller when they created the coupon.  # noqa: E501

        :param seller_coupon_description: The seller_coupon_description of this CouponPaymentEvent.  # noqa: E501
        :type: str
        """

        self._seller_coupon_description = seller_coupon_description

    @property
    def clip_or_redemption_count(self):
        """Gets the clip_or_redemption_count of this CouponPaymentEvent.  # noqa: E501

        The number of coupon clips or redemptions.  # noqa: E501

        :return: The clip_or_redemption_count of this CouponPaymentEvent.  # noqa: E501
        :rtype: int
        """
        return self._clip_or_redemption_count

    @clip_or_redemption_count.setter
    def clip_or_redemption_count(self, clip_or_redemption_count):
        """Sets the clip_or_redemption_count of this CouponPaymentEvent.

        The number of coupon clips or redemptions.  # noqa: E501

        :param clip_or_redemption_count: The clip_or_redemption_count of this CouponPaymentEvent.  # noqa: E501
        :type: int
        """

        self._clip_or_redemption_count = clip_or_redemption_count

    @property
    def payment_event_id(self):
        """Gets the payment_event_id of this CouponPaymentEvent.  # noqa: E501

        A payment event identifier.  # noqa: E501

        :return: The payment_event_id of this CouponPaymentEvent.  # noqa: E501
        :rtype: str
        """
        return self._payment_event_id

    @payment_event_id.setter
    def payment_event_id(self, payment_event_id):
        """Sets the payment_event_id of this CouponPaymentEvent.

        A payment event identifier.  # noqa: E501

        :param payment_event_id: The payment_event_id of this CouponPaymentEvent.  # noqa: E501
        :type: str
        """

        self._payment_event_id = payment_event_id

    @property
    def fee_component(self):
        """Gets the fee_component of this CouponPaymentEvent.  # noqa: E501


        :return: The fee_component of this CouponPaymentEvent.  # noqa: E501
        :rtype: FeeComponent
        """
        return self._fee_component

    @fee_component.setter
    def fee_component(self, fee_component):
        """Sets the fee_component of this CouponPaymentEvent.


        :param fee_component: The fee_component of this CouponPaymentEvent.  # noqa: E501
        :type: FeeComponent
        """

        self._fee_component = fee_component

    @property
    def charge_component(self):
        """Gets the charge_component of this CouponPaymentEvent.  # noqa: E501


        :return: The charge_component of this CouponPaymentEvent.  # noqa: E501
        :rtype: ChargeComponent
        """
        return self._charge_component

    @charge_component.setter
    def charge_component(self, charge_component):
        """Sets the charge_component of this CouponPaymentEvent.


        :param charge_component: The charge_component of this CouponPaymentEvent.  # noqa: E501
        :type: ChargeComponent
        """

        self._charge_component = charge_component

    @property
    def total_amount(self):
        """Gets the total_amount of this CouponPaymentEvent.  # noqa: E501


        :return: The total_amount of this CouponPaymentEvent.  # noqa: E501
        :rtype: Currency
        """
        return self._total_amount

    @total_amount.setter
    def total_amount(self, total_amount):
        """Sets the total_amount of this CouponPaymentEvent.


        :param total_amount: The total_amount of this CouponPaymentEvent.  # noqa: E501
        :type: Currency
        """

        self._total_amount = total_amount

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
        if issubclass(CouponPaymentEvent, dict):
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
        if not isinstance(other, CouponPaymentEvent):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CouponPaymentEvent):
            return True

        return self.to_dict() != other.to_dict()

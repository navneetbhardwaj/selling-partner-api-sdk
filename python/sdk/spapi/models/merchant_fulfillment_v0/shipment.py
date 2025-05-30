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


class Shipment(object):
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
        'shipment_id': 'str',
        'amazon_order_id': 'str',
        'seller_order_id': 'str',
        'item_list': 'List[Item]',
        'ship_from_address': 'Address',
        'ship_to_address': 'Address',
        'package_dimensions': 'PackageDimensions',
        'weight': 'Weight',
        'insurance': 'CurrencyAmount',
        'shipping_service': 'ShippingService',
        'label': 'Label',
        'status': 'ShipmentStatus',
        'tracking_id': 'str',
        'created_date': 'datetime',
        'last_updated_date': 'datetime',
    }

    attribute_map = {
        'shipment_id': 'ShipmentId',
        'amazon_order_id': 'AmazonOrderId',
        'seller_order_id': 'SellerOrderId',
        'item_list': 'ItemList',
        'ship_from_address': 'ShipFromAddress',
        'ship_to_address': 'ShipToAddress',
        'package_dimensions': 'PackageDimensions',
        'weight': 'Weight',
        'insurance': 'Insurance',
        'shipping_service': 'ShippingService',
        'label': 'Label',
        'status': 'Status',
        'tracking_id': 'TrackingId',
        'created_date': 'CreatedDate',
        'last_updated_date': 'LastUpdatedDate',
    }

    def __init__(self, shipment_id=None, amazon_order_id=None, seller_order_id=None, item_list=None, ship_from_address=None, ship_to_address=None, package_dimensions=None, weight=None, insurance=None, shipping_service=None, label=None, status=None, tracking_id=None, created_date=None, last_updated_date=None, _configuration=None):  # noqa: E501
        """Shipment - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._shipment_id = None
        self._amazon_order_id = None
        self._seller_order_id = None
        self._item_list = None
        self._ship_from_address = None
        self._ship_to_address = None
        self._package_dimensions = None
        self._weight = None
        self._insurance = None
        self._shipping_service = None
        self._label = None
        self._status = None
        self._tracking_id = None
        self._created_date = None
        self._last_updated_date = None
        self.discriminator = None

        self.shipment_id = shipment_id
        self.amazon_order_id = amazon_order_id
        if seller_order_id is not None:
            self.seller_order_id = seller_order_id
        self.item_list = item_list
        self.ship_from_address = ship_from_address
        self.ship_to_address = ship_to_address
        self.package_dimensions = package_dimensions
        self.weight = weight
        self.insurance = insurance
        self.shipping_service = shipping_service
        self.label = label
        self.status = status
        if tracking_id is not None:
            self.tracking_id = tracking_id
        self.created_date = created_date
        if last_updated_date is not None:
            self.last_updated_date = last_updated_date

    @property
    def shipment_id(self):
        """Gets the shipment_id of this Shipment.  # noqa: E501

        An Amazon-defined shipment identifier.  # noqa: E501

        :return: The shipment_id of this Shipment.  # noqa: E501
        :rtype: str
        """
        return self._shipment_id

    @shipment_id.setter
    def shipment_id(self, shipment_id):
        """Sets the shipment_id of this Shipment.

        An Amazon-defined shipment identifier.  # noqa: E501

        :param shipment_id: The shipment_id of this Shipment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and shipment_id is None:
            raise ValueError("Invalid value for `shipment_id`, must not be `None`")  # noqa: E501

        self._shipment_id = shipment_id

    @property
    def amazon_order_id(self):
        """Gets the amazon_order_id of this Shipment.  # noqa: E501

        An Amazon-defined order identifier, in 3-7-7 format.  # noqa: E501

        :return: The amazon_order_id of this Shipment.  # noqa: E501
        :rtype: str
        """
        return self._amazon_order_id

    @amazon_order_id.setter
    def amazon_order_id(self, amazon_order_id):
        """Sets the amazon_order_id of this Shipment.

        An Amazon-defined order identifier, in 3-7-7 format.  # noqa: E501

        :param amazon_order_id: The amazon_order_id of this Shipment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and amazon_order_id is None:
            raise ValueError("Invalid value for `amazon_order_id`, must not be `None`")  # noqa: E501

        self._amazon_order_id = amazon_order_id

    @property
    def seller_order_id(self):
        """Gets the seller_order_id of this Shipment.  # noqa: E501

        A seller-defined order identifier.  # noqa: E501

        :return: The seller_order_id of this Shipment.  # noqa: E501
        :rtype: str
        """
        return self._seller_order_id

    @seller_order_id.setter
    def seller_order_id(self, seller_order_id):
        """Sets the seller_order_id of this Shipment.

        A seller-defined order identifier.  # noqa: E501

        :param seller_order_id: The seller_order_id of this Shipment.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                seller_order_id is not None and len(seller_order_id) > 64):
            raise ValueError("Invalid value for `seller_order_id`, length must be less than or equal to `64`")  # noqa: E501

        self._seller_order_id = seller_order_id

    @property
    def item_list(self):
        """Gets the item_list of this Shipment.  # noqa: E501

        The list of items you want to include in a shipment.  # noqa: E501

        :return: The item_list of this Shipment.  # noqa: E501
        :rtype: List[Item]
        """
        return self._item_list

    @item_list.setter
    def item_list(self, item_list):
        """Sets the item_list of this Shipment.

        The list of items you want to include in a shipment.  # noqa: E501

        :param item_list: The item_list of this Shipment.  # noqa: E501
        :type: List[Item]
        """
        if self._configuration.client_side_validation and item_list is None:
            raise ValueError("Invalid value for `item_list`, must not be `None`")  # noqa: E501

        self._item_list = item_list

    @property
    def ship_from_address(self):
        """Gets the ship_from_address of this Shipment.  # noqa: E501


        :return: The ship_from_address of this Shipment.  # noqa: E501
        :rtype: Address
        """
        return self._ship_from_address

    @ship_from_address.setter
    def ship_from_address(self, ship_from_address):
        """Sets the ship_from_address of this Shipment.


        :param ship_from_address: The ship_from_address of this Shipment.  # noqa: E501
        :type: Address
        """
        if self._configuration.client_side_validation and ship_from_address is None:
            raise ValueError("Invalid value for `ship_from_address`, must not be `None`")  # noqa: E501

        self._ship_from_address = ship_from_address

    @property
    def ship_to_address(self):
        """Gets the ship_to_address of this Shipment.  # noqa: E501


        :return: The ship_to_address of this Shipment.  # noqa: E501
        :rtype: Address
        """
        return self._ship_to_address

    @ship_to_address.setter
    def ship_to_address(self, ship_to_address):
        """Sets the ship_to_address of this Shipment.


        :param ship_to_address: The ship_to_address of this Shipment.  # noqa: E501
        :type: Address
        """
        if self._configuration.client_side_validation and ship_to_address is None:
            raise ValueError("Invalid value for `ship_to_address`, must not be `None`")  # noqa: E501

        self._ship_to_address = ship_to_address

    @property
    def package_dimensions(self):
        """Gets the package_dimensions of this Shipment.  # noqa: E501


        :return: The package_dimensions of this Shipment.  # noqa: E501
        :rtype: PackageDimensions
        """
        return self._package_dimensions

    @package_dimensions.setter
    def package_dimensions(self, package_dimensions):
        """Sets the package_dimensions of this Shipment.


        :param package_dimensions: The package_dimensions of this Shipment.  # noqa: E501
        :type: PackageDimensions
        """
        if self._configuration.client_side_validation and package_dimensions is None:
            raise ValueError("Invalid value for `package_dimensions`, must not be `None`")  # noqa: E501

        self._package_dimensions = package_dimensions

    @property
    def weight(self):
        """Gets the weight of this Shipment.  # noqa: E501


        :return: The weight of this Shipment.  # noqa: E501
        :rtype: Weight
        """
        return self._weight

    @weight.setter
    def weight(self, weight):
        """Sets the weight of this Shipment.


        :param weight: The weight of this Shipment.  # noqa: E501
        :type: Weight
        """
        if self._configuration.client_side_validation and weight is None:
            raise ValueError("Invalid value for `weight`, must not be `None`")  # noqa: E501

        self._weight = weight

    @property
    def insurance(self):
        """Gets the insurance of this Shipment.  # noqa: E501


        :return: The insurance of this Shipment.  # noqa: E501
        :rtype: CurrencyAmount
        """
        return self._insurance

    @insurance.setter
    def insurance(self, insurance):
        """Sets the insurance of this Shipment.


        :param insurance: The insurance of this Shipment.  # noqa: E501
        :type: CurrencyAmount
        """
        if self._configuration.client_side_validation and insurance is None:
            raise ValueError("Invalid value for `insurance`, must not be `None`")  # noqa: E501

        self._insurance = insurance

    @property
    def shipping_service(self):
        """Gets the shipping_service of this Shipment.  # noqa: E501


        :return: The shipping_service of this Shipment.  # noqa: E501
        :rtype: ShippingService
        """
        return self._shipping_service

    @shipping_service.setter
    def shipping_service(self, shipping_service):
        """Sets the shipping_service of this Shipment.


        :param shipping_service: The shipping_service of this Shipment.  # noqa: E501
        :type: ShippingService
        """
        if self._configuration.client_side_validation and shipping_service is None:
            raise ValueError("Invalid value for `shipping_service`, must not be `None`")  # noqa: E501

        self._shipping_service = shipping_service

    @property
    def label(self):
        """Gets the label of this Shipment.  # noqa: E501


        :return: The label of this Shipment.  # noqa: E501
        :rtype: Label
        """
        return self._label

    @label.setter
    def label(self, label):
        """Sets the label of this Shipment.


        :param label: The label of this Shipment.  # noqa: E501
        :type: Label
        """
        if self._configuration.client_side_validation and label is None:
            raise ValueError("Invalid value for `label`, must not be `None`")  # noqa: E501

        self._label = label

    @property
    def status(self):
        """Gets the status of this Shipment.  # noqa: E501


        :return: The status of this Shipment.  # noqa: E501
        :rtype: ShipmentStatus
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Shipment.


        :param status: The status of this Shipment.  # noqa: E501
        :type: ShipmentStatus
        """
        if self._configuration.client_side_validation and status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501

        self._status = status

    @property
    def tracking_id(self):
        """Gets the tracking_id of this Shipment.  # noqa: E501

        The shipment tracking identifier provided by the carrier.  # noqa: E501

        :return: The tracking_id of this Shipment.  # noqa: E501
        :rtype: str
        """
        return self._tracking_id

    @tracking_id.setter
    def tracking_id(self, tracking_id):
        """Sets the tracking_id of this Shipment.

        The shipment tracking identifier provided by the carrier.  # noqa: E501

        :param tracking_id: The tracking_id of this Shipment.  # noqa: E501
        :type: str
        """

        self._tracking_id = tracking_id

    @property
    def created_date(self):
        """Gets the created_date of this Shipment.  # noqa: E501

        Date-time formatted timestamp.  # noqa: E501

        :return: The created_date of this Shipment.  # noqa: E501
        :rtype: datetime
        """
        return self._created_date

    @created_date.setter
    def created_date(self, created_date):
        """Sets the created_date of this Shipment.

        Date-time formatted timestamp.  # noqa: E501

        :param created_date: The created_date of this Shipment.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and created_date is None:
            raise ValueError("Invalid value for `created_date`, must not be `None`")  # noqa: E501

        self._created_date = created_date

    @property
    def last_updated_date(self):
        """Gets the last_updated_date of this Shipment.  # noqa: E501

        Date-time formatted timestamp.  # noqa: E501

        :return: The last_updated_date of this Shipment.  # noqa: E501
        :rtype: datetime
        """
        return self._last_updated_date

    @last_updated_date.setter
    def last_updated_date(self, last_updated_date):
        """Sets the last_updated_date of this Shipment.

        Date-time formatted timestamp.  # noqa: E501

        :param last_updated_date: The last_updated_date of this Shipment.  # noqa: E501
        :type: datetime
        """

        self._last_updated_date = last_updated_date

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
        if issubclass(Shipment, dict):
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
        if not isinstance(other, Shipment):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Shipment):
            return True

        return self.to_dict() != other.to_dict()

/**
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Money } from './Money.js'

/**
 * The OrderMetricsInterval model module.
 * @module sales_v1/model/OrderMetricsInterval
 * @version v1
 */
export class OrderMetricsInterval {
  /**
   * Constructs a new <code>OrderMetricsInterval</code>.
   * Contains order metrics.
   * @alias module:sales_v1/model/OrderMetricsInterval
   * @class
   * @param interval {String} The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn't align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z--2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data).
   * @param unitCount {Number} The number of units in orders based on the specified filters.
   * @param orderItemCount {Number} The number of order items based on the specified filters.
   * @param orderCount {Number} The number of orders based on the specified filters.
   * @param averageUnitPrice {module:sales_v1/model/Money}
   * @param totalSales {module:sales_v1/model/Money}
   */
  constructor (interval, unitCount, orderItemCount, orderCount, averageUnitPrice, totalSales) {
    this.interval = interval
    this.unitCount = unitCount
    this.orderItemCount = orderItemCount
    this.orderCount = orderCount
    this.averageUnitPrice = averageUnitPrice
    this.totalSales = totalSales
  }

  /**
   * Constructs a <code>OrderMetricsInterval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sales_v1/model/OrderMetricsInterval} obj Optional instance to populate.
   * @return {module:sales_v1/model/OrderMetricsInterval} The populated <code>OrderMetricsInterval</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      switch (typeof data) {
        case 'string':
          obj = String(data)
          break
        case 'number':
          obj = Number(data)
          break
        case 'boolean':
          obj = Boolean(data)
          break
      }
      obj = obj || new OrderMetricsInterval()
      if (data.hasOwnProperty('interval')) { obj.interval = ApiClient.convertToType(data.interval, 'String') }
      if (data.hasOwnProperty('unitCount')) { obj.unitCount = ApiClient.convertToType(data.unitCount, 'Number') }
      if (data.hasOwnProperty('orderItemCount')) { obj.orderItemCount = ApiClient.convertToType(data.orderItemCount, 'Number') }
      if (data.hasOwnProperty('orderCount')) { obj.orderCount = ApiClient.convertToType(data.orderCount, 'Number') }
      if (data.hasOwnProperty('averageUnitPrice')) { obj.averageUnitPrice = Money.constructFromObject(data.averageUnitPrice) }
      if (data.hasOwnProperty('totalSales')) { obj.totalSales = Money.constructFromObject(data.totalSales) }
    }
    return obj
  }
}

/**
 * The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn't align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z--2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data).
 * @member {String} interval
 */
OrderMetricsInterval.prototype.interval = undefined

/**
 * The number of units in orders based on the specified filters.
 * @member {Number} unitCount
 */
OrderMetricsInterval.prototype.unitCount = undefined

/**
 * The number of order items based on the specified filters.
 * @member {Number} orderItemCount
 */
OrderMetricsInterval.prototype.orderItemCount = undefined

/**
 * The number of orders based on the specified filters.
 * @member {Number} orderCount
 */
OrderMetricsInterval.prototype.orderCount = undefined

/**
 * @member {module:sales_v1/model/Money} averageUnitPrice
 */
OrderMetricsInterval.prototype.averageUnitPrice = undefined

/**
 * @member {module:sales_v1/model/Money} totalSales
 */
OrderMetricsInterval.prototype.totalSales = undefined

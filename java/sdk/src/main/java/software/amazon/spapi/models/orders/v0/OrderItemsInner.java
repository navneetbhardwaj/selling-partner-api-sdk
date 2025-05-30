/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.orders.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** OrderItemsInner */
public class OrderItemsInner {
    @SerializedName("orderItemId")
    private String orderItemId = null;

    @SerializedName("quantity")
    private Integer quantity = null;

    public OrderItemsInner orderItemId(String orderItemId) {
        this.orderItemId = orderItemId;
        return this;
    }

    /**
     * The order item&#x27;s unique identifier.
     *
     * @return orderItemId
     */
    @Schema(description = "The order item's unique identifier.")
    public String getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(String orderItemId) {
        this.orderItemId = orderItemId;
    }

    public OrderItemsInner quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    /**
     * The quantity for which to update the shipment status.
     *
     * @return quantity
     */
    @Schema(description = "The quantity for which to update the shipment status.")
    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OrderItemsInner orderItemsInner = (OrderItemsInner) o;
        return Objects.equals(this.orderItemId, orderItemsInner.orderItemId)
                && Objects.equals(this.quantity, orderItemsInner.quantity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderItemId, quantity);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OrderItemsInner {\n");

        sb.append("    orderItemId: ").append(toIndentedString(orderItemId)).append("\n");
        sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /** Convert the given object to string with each line indented by 4 spaces (except the first line). */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}

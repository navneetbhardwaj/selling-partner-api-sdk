/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.services.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** Information about an item associated with the service job. */
@Schema(description = "Information about an item associated with the service job.")
public class AssociatedItem {
    @SerializedName("asin")
    private String asin = null;

    @SerializedName("title")
    private String title = null;

    @SerializedName("quantity")
    private Integer quantity = null;

    @SerializedName("orderId")
    private String orderId = null;

    /** The status of the item. */
    @JsonAdapter(ItemStatusEnum.Adapter.class)
    public enum ItemStatusEnum {
        @SerializedName("ACTIVE")
        ACTIVE("ACTIVE"),
        @SerializedName("CANCELLED")
        CANCELLED("CANCELLED"),
        @SerializedName("SHIPPED")
        SHIPPED("SHIPPED"),
        @SerializedName("DELIVERED")
        DELIVERED("DELIVERED");

        private String value;

        ItemStatusEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static ItemStatusEnum fromValue(String input) {
            for (ItemStatusEnum b : ItemStatusEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<ItemStatusEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final ItemStatusEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public ItemStatusEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return ItemStatusEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("itemStatus")
    private ItemStatusEnum itemStatus = null;

    @SerializedName("brandName")
    private String brandName = null;

    @SerializedName("itemDelivery")
    private ItemDelivery itemDelivery = null;

    public AssociatedItem asin(String asin) {
        this.asin = asin;
        return this;
    }

    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     *
     * @return asin
     */
    @Schema(description = "The Amazon Standard Identification Number (ASIN) of the item.")
    public String getAsin() {
        return asin;
    }

    public void setAsin(String asin) {
        this.asin = asin;
    }

    public AssociatedItem title(String title) {
        this.title = title;
        return this;
    }

    /**
     * The title of the item.
     *
     * @return title
     */
    @Schema(description = "The title of the item.")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public AssociatedItem quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    /**
     * The total number of items included in the order.
     *
     * @return quantity
     */
    @Schema(description = "The total number of items included in the order.")
    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public AssociatedItem orderId(String orderId) {
        this.orderId = orderId;
        return this;
    }

    /**
     * Get orderId
     *
     * @return orderId
     */
    @Schema(description = "")
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public AssociatedItem itemStatus(ItemStatusEnum itemStatus) {
        this.itemStatus = itemStatus;
        return this;
    }

    /**
     * The status of the item.
     *
     * @return itemStatus
     */
    @Schema(description = "The status of the item.")
    public ItemStatusEnum getItemStatus() {
        return itemStatus;
    }

    public void setItemStatus(ItemStatusEnum itemStatus) {
        this.itemStatus = itemStatus;
    }

    public AssociatedItem brandName(String brandName) {
        this.brandName = brandName;
        return this;
    }

    /**
     * The brand name of the item.
     *
     * @return brandName
     */
    @Schema(description = "The brand name of the item.")
    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public AssociatedItem itemDelivery(ItemDelivery itemDelivery) {
        this.itemDelivery = itemDelivery;
        return this;
    }

    /**
     * Get itemDelivery
     *
     * @return itemDelivery
     */
    @Schema(description = "")
    public ItemDelivery getItemDelivery() {
        return itemDelivery;
    }

    public void setItemDelivery(ItemDelivery itemDelivery) {
        this.itemDelivery = itemDelivery;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        AssociatedItem associatedItem = (AssociatedItem) o;
        return Objects.equals(this.asin, associatedItem.asin)
                && Objects.equals(this.title, associatedItem.title)
                && Objects.equals(this.quantity, associatedItem.quantity)
                && Objects.equals(this.orderId, associatedItem.orderId)
                && Objects.equals(this.itemStatus, associatedItem.itemStatus)
                && Objects.equals(this.brandName, associatedItem.brandName)
                && Objects.equals(this.itemDelivery, associatedItem.itemDelivery);
    }

    @Override
    public int hashCode() {
        return Objects.hash(asin, title, quantity, orderId, itemStatus, brandName, itemDelivery);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class AssociatedItem {\n");

        sb.append("    asin: ").append(toIndentedString(asin)).append("\n");
        sb.append("    title: ").append(toIndentedString(title)).append("\n");
        sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
        sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
        sb.append("    itemStatus: ").append(toIndentedString(itemStatus)).append("\n");
        sb.append("    brandName: ").append(toIndentedString(brandName)).append("\n");
        sb.append("    itemDelivery: ").append(toIndentedString(itemDelivery)).append("\n");
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

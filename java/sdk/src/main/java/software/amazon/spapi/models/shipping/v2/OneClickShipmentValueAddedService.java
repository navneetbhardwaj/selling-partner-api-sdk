/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** A value-added service to be applied to a shipping service purchase. */
@Schema(description = "A value-added service to be applied to a shipping service purchase.")
public class OneClickShipmentValueAddedService {
    @SerializedName("id")
    private String id = null;

    @SerializedName("amount")
    private Currency amount = null;

    public OneClickShipmentValueAddedService id(String id) {
        this.id = id;
        return this;
    }

    /**
     * The identifier of the selected value-added service.
     *
     * @return id
     */
    @Schema(required = true, description = "The identifier of the selected value-added service.")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public OneClickShipmentValueAddedService amount(Currency amount) {
        this.amount = amount;
        return this;
    }

    /**
     * Get amount
     *
     * @return amount
     */
    @Schema(description = "")
    public Currency getAmount() {
        return amount;
    }

    public void setAmount(Currency amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OneClickShipmentValueAddedService oneClickShipmentValueAddedService = (OneClickShipmentValueAddedService) o;
        return Objects.equals(this.id, oneClickShipmentValueAddedService.id)
                && Objects.equals(this.amount, oneClickShipmentValueAddedService.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, amount);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OneClickShipmentValueAddedService {\n");

        sb.append("    id: ").append(toIndentedString(id)).append("\n");
        sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
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

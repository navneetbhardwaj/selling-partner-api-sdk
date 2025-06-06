/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.outbound.v2020_07_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The response schema for the &#x60;getFulfillmentPreview&#x60; operation. */
@Schema(description = "The response schema for the `getFulfillmentPreview` operation.")
public class GetFulfillmentPreviewResponse {
    @SerializedName("payload")
    private GetFulfillmentPreviewResult payload = null;

    @SerializedName("errors")
    private ErrorList errors = null;

    public GetFulfillmentPreviewResponse payload(GetFulfillmentPreviewResult payload) {
        this.payload = payload;
        return this;
    }

    /**
     * Get payload
     *
     * @return payload
     */
    @Schema(description = "")
    public GetFulfillmentPreviewResult getPayload() {
        return payload;
    }

    public void setPayload(GetFulfillmentPreviewResult payload) {
        this.payload = payload;
    }

    public GetFulfillmentPreviewResponse errors(ErrorList errors) {
        this.errors = errors;
        return this;
    }

    /**
     * Get errors
     *
     * @return errors
     */
    @Schema(description = "")
    public ErrorList getErrors() {
        return errors;
    }

    public void setErrors(ErrorList errors) {
        this.errors = errors;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GetFulfillmentPreviewResponse getFulfillmentPreviewResponse = (GetFulfillmentPreviewResponse) o;
        return Objects.equals(this.payload, getFulfillmentPreviewResponse.payload)
                && Objects.equals(this.errors, getFulfillmentPreviewResponse.errors);
    }

    @Override
    public int hashCode() {
        return Objects.hash(payload, errors);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class GetFulfillmentPreviewResponse {\n");

        sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
        sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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

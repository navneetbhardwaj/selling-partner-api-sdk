/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.pricing.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The response associated with the &#x60;getItemOffersBatch&#x60; API call. */
@Schema(description = "The response associated with the `getItemOffersBatch` API call.")
public class GetItemOffersBatchResponse {
    @SerializedName("responses")
    private ItemOffersResponseList responses = null;

    public GetItemOffersBatchResponse responses(ItemOffersResponseList responses) {
        this.responses = responses;
        return this;
    }

    /**
     * Get responses
     *
     * @return responses
     */
    @Schema(description = "")
    public ItemOffersResponseList getResponses() {
        return responses;
    }

    public void setResponses(ItemOffersResponseList responses) {
        this.responses = responses;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GetItemOffersBatchResponse getItemOffersBatchResponse = (GetItemOffersBatchResponse) o;
        return Objects.equals(this.responses, getItemOffersBatchResponse.responses);
    }

    @Override
    public int hashCode() {
        return Objects.hash(responses);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class GetItemOffersBatchResponse {\n");

        sb.append("    responses: ").append(toIndentedString(responses)).append("\n");
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

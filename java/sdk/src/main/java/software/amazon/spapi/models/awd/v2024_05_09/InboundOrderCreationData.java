/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * OpenAPI spec version: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.awd.v2024_05_09;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** Payload for creating an inbound order. */
@Schema(description = "Payload for creating an inbound order.")
public class InboundOrderCreationData {
    @SerializedName("externalReferenceId")
    private String externalReferenceId = null;

    @SerializedName("originAddress")
    private Address originAddress = null;

    @SerializedName("packagesToInbound")
    private List<DistributionPackageQuantity> packagesToInbound = new ArrayList<DistributionPackageQuantity>();

    @SerializedName("preferences")
    private InboundPreferences preferences = null;

    public InboundOrderCreationData externalReferenceId(String externalReferenceId) {
        this.externalReferenceId = externalReferenceId;
        return this;
    }

    /**
     * Reference ID that can be used to correlate the order with partner resources.
     *
     * @return externalReferenceId
     */
    @Schema(
            example = "TestReferenceId",
            description = "Reference ID that can be used to correlate the order with partner resources.")
    public String getExternalReferenceId() {
        return externalReferenceId;
    }

    public void setExternalReferenceId(String externalReferenceId) {
        this.externalReferenceId = externalReferenceId;
    }

    public InboundOrderCreationData originAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }

    /**
     * Get originAddress
     *
     * @return originAddress
     */
    @Schema(required = true, description = "")
    public Address getOriginAddress() {
        return originAddress;
    }

    public void setOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
    }

    public InboundOrderCreationData packagesToInbound(List<DistributionPackageQuantity> packagesToInbound) {
        this.packagesToInbound = packagesToInbound;
        return this;
    }

    public InboundOrderCreationData addPackagesToInboundItem(DistributionPackageQuantity packagesToInboundItem) {
        this.packagesToInbound.add(packagesToInboundItem);
        return this;
    }

    /**
     * List of packages to be inbounded.
     *
     * @return packagesToInbound
     */
    @Schema(
            example =
                    "[{\"count\":1,\"distributionPackage\":{\"contents\":{\"products\":[{\"quantity\":1,\"sku\":\"testPen\"}]},\"measurements\":{\"dimensions\":{\"height\":1,\"length\":1,\"unitOfMeasurement\":\"INCHES\",\"width\":1},\"volume\":{\"unitOfMeasurement\":\"CUIN\",\"volume\":1},\"weight\":{\"unitOfMeasurement\":\"POUNDS\",\"weight\":1}},\"type\":\"CASE\"}}]",
            required = true,
            description = "List of packages to be inbounded.")
    public List<DistributionPackageQuantity> getPackagesToInbound() {
        return packagesToInbound;
    }

    public void setPackagesToInbound(List<DistributionPackageQuantity> packagesToInbound) {
        this.packagesToInbound = packagesToInbound;
    }

    public InboundOrderCreationData preferences(InboundPreferences preferences) {
        this.preferences = preferences;
        return this;
    }

    /**
     * Get preferences
     *
     * @return preferences
     */
    @Schema(description = "")
    public InboundPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(InboundPreferences preferences) {
        this.preferences = preferences;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InboundOrderCreationData inboundOrderCreationData = (InboundOrderCreationData) o;
        return Objects.equals(this.externalReferenceId, inboundOrderCreationData.externalReferenceId)
                && Objects.equals(this.originAddress, inboundOrderCreationData.originAddress)
                && Objects.equals(this.packagesToInbound, inboundOrderCreationData.packagesToInbound)
                && Objects.equals(this.preferences, inboundOrderCreationData.preferences);
    }

    @Override
    public int hashCode() {
        return Objects.hash(externalReferenceId, originAddress, packagesToInbound, preferences);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class InboundOrderCreationData {\n");

        sb.append("    externalReferenceId: ")
                .append(toIndentedString(externalReferenceId))
                .append("\n");
        sb.append("    originAddress: ").append(toIndentedString(originAddress)).append("\n");
        sb.append("    packagesToInbound: ")
                .append(toIndentedString(packagesToInbound))
                .append("\n");
        sb.append("    preferences: ").append(toIndentedString(preferences)).append("\n");
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

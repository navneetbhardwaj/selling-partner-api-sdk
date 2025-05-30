/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/**
 * Contains information about a pallet that is used in the inbound plan. The pallet is a container that holds multiple
 * items or boxes.
 */
@Schema(
        description =
                "Contains information about a pallet that is used in the inbound plan. The pallet is a container that holds multiple items or boxes.")
public class Pallet {
    @SerializedName("dimensions")
    private Dimensions dimensions = null;

    @SerializedName("packageId")
    private String packageId = null;

    @SerializedName("quantity")
    private Integer quantity = null;

    @SerializedName("stackability")
    private Stackability stackability = null;

    @SerializedName("weight")
    private Weight weight = null;

    public Pallet dimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }

    /**
     * Get dimensions
     *
     * @return dimensions
     */
    @Schema(description = "")
    public Dimensions getDimensions() {
        return dimensions;
    }

    public void setDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
    }

    public Pallet packageId(String packageId) {
        this.packageId = packageId;
        return this;
    }

    /**
     * Primary key to uniquely identify a Package (Box or Pallet).
     *
     * @return packageId
     */
    @Schema(required = true, description = "Primary key to uniquely identify a Package (Box or Pallet).")
    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public Pallet quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    /**
     * The number of containers where all other properties like weight or dimensions are identical. minimum: 1 maximum:
     * 10000
     *
     * @return quantity
     */
    @Schema(
            description =
                    "The number of containers where all other properties like weight or dimensions are identical.")
    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Pallet stackability(Stackability stackability) {
        this.stackability = stackability;
        return this;
    }

    /**
     * Get stackability
     *
     * @return stackability
     */
    @Schema(description = "")
    public Stackability getStackability() {
        return stackability;
    }

    public void setStackability(Stackability stackability) {
        this.stackability = stackability;
    }

    public Pallet weight(Weight weight) {
        this.weight = weight;
        return this;
    }

    /**
     * Get weight
     *
     * @return weight
     */
    @Schema(description = "")
    public Weight getWeight() {
        return weight;
    }

    public void setWeight(Weight weight) {
        this.weight = weight;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Pallet pallet = (Pallet) o;
        return Objects.equals(this.dimensions, pallet.dimensions)
                && Objects.equals(this.packageId, pallet.packageId)
                && Objects.equals(this.quantity, pallet.quantity)
                && Objects.equals(this.stackability, pallet.stackability)
                && Objects.equals(this.weight, pallet.weight);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dimensions, packageId, quantity, stackability, weight);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Pallet {\n");

        sb.append("    dimensions: ").append(toIndentedString(dimensions)).append("\n");
        sb.append("    packageId: ").append(toIndentedString(packageId)).append("\n");
        sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
        sb.append("    stackability: ").append(toIndentedString(stackability)).append("\n");
        sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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

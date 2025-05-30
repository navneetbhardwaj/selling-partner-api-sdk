/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.supplysources.v2020_07_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The parking configuration with the address. */
@Schema(description = "The parking configuration with the address.")
public class ParkingWithAddressConfiguration extends ParkingConfiguration {
    @SerializedName("address")
    private Address address = null;

    public ParkingWithAddressConfiguration address(Address address) {
        this.address = address;
        return this;
    }

    /**
     * Get address
     *
     * @return address
     */
    @Schema(description = "")
    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ParkingWithAddressConfiguration parkingWithAddressConfiguration = (ParkingWithAddressConfiguration) o;
        return Objects.equals(this.address, parkingWithAddressConfiguration.address) && super.equals(o);
    }

    @Override
    public int hashCode() {
        return Objects.hash(address, super.hashCode());
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ParkingWithAddressConfiguration {\n");
        sb.append("    ").append(toIndentedString(super.toString())).append("\n");
        sb.append("    address: ").append(toIndentedString(address)).append("\n");
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

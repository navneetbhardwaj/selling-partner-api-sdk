/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.shipping.v2021_12_28;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** The name, address, and tax details of a party. */
@Schema(description = "The name, address, and tax details of a party.")
public class PartyIdentification {
    @SerializedName("partyId")
    private String partyId = null;

    @SerializedName("address")
    private Address address = null;

    @SerializedName("taxRegistrationDetails")
    private List<TaxRegistrationDetails> taxRegistrationDetails = null;

    public PartyIdentification partyId(String partyId) {
        this.partyId = partyId;
        return this;
    }

    /**
     * The identifier of the party.
     *
     * @return partyId
     */
    @Schema(required = true, description = "The identifier of the party.")
    public String getPartyId() {
        return partyId;
    }

    public void setPartyId(String partyId) {
        this.partyId = partyId;
    }

    public PartyIdentification address(Address address) {
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

    public PartyIdentification taxRegistrationDetails(List<TaxRegistrationDetails> taxRegistrationDetails) {
        this.taxRegistrationDetails = taxRegistrationDetails;
        return this;
    }

    public PartyIdentification addTaxRegistrationDetailsItem(TaxRegistrationDetails taxRegistrationDetailsItem) {
        if (this.taxRegistrationDetails == null) {
            this.taxRegistrationDetails = new ArrayList<TaxRegistrationDetails>();
        }
        this.taxRegistrationDetails.add(taxRegistrationDetailsItem);
        return this;
    }

    /**
     * The tax registration details of the party.
     *
     * @return taxRegistrationDetails
     */
    @Schema(description = "The tax registration details of the party.")
    public List<TaxRegistrationDetails> getTaxRegistrationDetails() {
        return taxRegistrationDetails;
    }

    public void setTaxRegistrationDetails(List<TaxRegistrationDetails> taxRegistrationDetails) {
        this.taxRegistrationDetails = taxRegistrationDetails;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PartyIdentification partyIdentification = (PartyIdentification) o;
        return Objects.equals(this.partyId, partyIdentification.partyId)
                && Objects.equals(this.address, partyIdentification.address)
                && Objects.equals(this.taxRegistrationDetails, partyIdentification.taxRegistrationDetails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(partyId, address, taxRegistrationDetails);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PartyIdentification {\n");

        sb.append("    partyId: ").append(toIndentedString(partyId)).append("\n");
        sb.append("    address: ").append(toIndentedString(address)).append("\n");
        sb.append("    taxRegistrationDetails: ")
                .append(toIndentedString(taxRegistrationDetails))
                .append("\n");
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

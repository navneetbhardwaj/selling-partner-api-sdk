/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.shipments.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** A list of carton identifiers. */
@Schema(description = "A list of carton identifiers.")
public class ContainerIdentification {
    /** The container identification type. */
    @JsonAdapter(ContainerIdentificationTypeEnum.Adapter.class)
    public enum ContainerIdentificationTypeEnum {
        @SerializedName("SSCC")
        SSCC("SSCC"),
        @SerializedName("AMZNCC")
        AMZNCC("AMZNCC"),
        @SerializedName("GTIN")
        GTIN("GTIN"),
        @SerializedName("BPS")
        BPS("BPS"),
        @SerializedName("CID")
        CID("CID");

        private String value;

        ContainerIdentificationTypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static ContainerIdentificationTypeEnum fromValue(String input) {
            for (ContainerIdentificationTypeEnum b : ContainerIdentificationTypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<ContainerIdentificationTypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final ContainerIdentificationTypeEnum enumeration)
                    throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public ContainerIdentificationTypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return ContainerIdentificationTypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("containerIdentificationType")
    private ContainerIdentificationTypeEnum containerIdentificationType = null;

    @SerializedName("containerIdentificationNumber")
    private String containerIdentificationNumber = null;

    public ContainerIdentification containerIdentificationType(
            ContainerIdentificationTypeEnum containerIdentificationType) {
        this.containerIdentificationType = containerIdentificationType;
        return this;
    }

    /**
     * The container identification type.
     *
     * @return containerIdentificationType
     */
    @Schema(required = true, description = "The container identification type.")
    public ContainerIdentificationTypeEnum getContainerIdentificationType() {
        return containerIdentificationType;
    }

    public void setContainerIdentificationType(ContainerIdentificationTypeEnum containerIdentificationType) {
        this.containerIdentificationType = containerIdentificationType;
    }

    public ContainerIdentification containerIdentificationNumber(String containerIdentificationNumber) {
        this.containerIdentificationNumber = containerIdentificationNumber;
        return this;
    }

    /**
     * Container identification number that adheres to the definition of the container identification type.
     *
     * @return containerIdentificationNumber
     */
    @Schema(
            required = true,
            description =
                    "Container identification number that adheres to the definition of the container identification type.")
    public String getContainerIdentificationNumber() {
        return containerIdentificationNumber;
    }

    public void setContainerIdentificationNumber(String containerIdentificationNumber) {
        this.containerIdentificationNumber = containerIdentificationNumber;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ContainerIdentification containerIdentification = (ContainerIdentification) o;
        return Objects.equals(this.containerIdentificationType, containerIdentification.containerIdentificationType)
                && Objects.equals(
                        this.containerIdentificationNumber, containerIdentification.containerIdentificationNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(containerIdentificationType, containerIdentificationNumber);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ContainerIdentification {\n");

        sb.append("    containerIdentificationType: ")
                .append(toIndentedString(containerIdentificationType))
                .append("\n");
        sb.append("    containerIdentificationNumber: ")
                .append(toIndentedString(containerIdentificationNumber))
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

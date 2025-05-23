/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.payments.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** A field where the selling party can provide additional information for tax-related or any other purposes. */
@Schema(
        description =
                "A field where the selling party can provide additional information for tax-related or any other purposes.")
public class AdditionalDetails {
    /** The type of the additional information provided by the selling party. */
    @JsonAdapter(TypeEnum.Adapter.class)
    public enum TypeEnum {
        @SerializedName("SUR")
        SUR("SUR"),
        @SerializedName("OCR")
        OCR("OCR");

        private String value;

        TypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static TypeEnum fromValue(String input) {
            for (TypeEnum b : TypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<TypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final TypeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public TypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return TypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("type")
    private TypeEnum type = null;

    @SerializedName("detail")
    private String detail = null;

    @SerializedName("languageCode")
    private String languageCode = null;

    public AdditionalDetails type(TypeEnum type) {
        this.type = type;
        return this;
    }

    /**
     * The type of the additional information provided by the selling party.
     *
     * @return type
     */
    @Schema(required = true, description = "The type of the additional information provided by the selling party.")
    public TypeEnum getType() {
        return type;
    }

    public void setType(TypeEnum type) {
        this.type = type;
    }

    public AdditionalDetails detail(String detail) {
        this.detail = detail;
        return this;
    }

    /**
     * The detail of the additional information provided by the selling party.
     *
     * @return detail
     */
    @Schema(required = true, description = "The detail of the additional information provided by the selling party.")
    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public AdditionalDetails languageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }

    /**
     * The language code of the additional information detail.
     *
     * @return languageCode
     */
    @Schema(description = "The language code of the additional information detail.")
    public String getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        AdditionalDetails additionalDetails = (AdditionalDetails) o;
        return Objects.equals(this.type, additionalDetails.type)
                && Objects.equals(this.detail, additionalDetails.detail)
                && Objects.equals(this.languageCode, additionalDetails.languageCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, detail, languageCode);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class AdditionalDetails {\n");

        sb.append("    type: ").append(toIndentedString(type)).append("\n");
        sb.append("    detail: ").append(toIndentedString(detail)).append("\n");
        sb.append("    languageCode: ").append(toIndentedString(languageCode)).append("\n");
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

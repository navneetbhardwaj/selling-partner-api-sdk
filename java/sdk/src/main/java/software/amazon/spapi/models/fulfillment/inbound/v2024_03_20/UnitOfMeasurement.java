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

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Unit of linear measure. */
@JsonAdapter(UnitOfMeasurement.Adapter.class)
public enum UnitOfMeasurement {
    @SerializedName("IN")
    IN("IN"),
    @SerializedName("CM")
    CM("CM");

    private String value;

    UnitOfMeasurement(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static UnitOfMeasurement fromValue(String input) {
        for (UnitOfMeasurement b : UnitOfMeasurement.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<UnitOfMeasurement> {
        @Override
        public void write(final JsonWriter jsonWriter, final UnitOfMeasurement enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public UnitOfMeasurement read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return UnitOfMeasurement.fromValue((String) (value));
        }
    }
}

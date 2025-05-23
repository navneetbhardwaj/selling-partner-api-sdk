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

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The condition of the return item when received by an Amazon fulfillment center. */
@JsonAdapter(ReturnItemDisposition.Adapter.class)
public enum ReturnItemDisposition {
    @SerializedName("Sellable")
    SELLABLE("Sellable"),
    @SerializedName("Defective")
    DEFECTIVE("Defective"),
    @SerializedName("CustomerDamaged")
    CUSTOMERDAMAGED("CustomerDamaged"),
    @SerializedName("CarrierDamaged")
    CARRIERDAMAGED("CarrierDamaged"),
    @SerializedName("FulfillerDamaged")
    FULFILLERDAMAGED("FulfillerDamaged");

    private String value;

    ReturnItemDisposition(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static ReturnItemDisposition fromValue(String input) {
        for (ReturnItemDisposition b : ReturnItemDisposition.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<ReturnItemDisposition> {
        @Override
        public void write(final JsonWriter jsonWriter, final ReturnItemDisposition enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public ReturnItemDisposition read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return ReturnItemDisposition.fromValue((String) (value));
        }
    }
}

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

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The owner of the preparations, if special preparations are required. */
@JsonAdapter(PrepOwner.Adapter.class)
public enum PrepOwner {
    @SerializedName("AMAZON")
    AMAZON("AMAZON"),
    @SerializedName("SELF")
    SELF("SELF");

    private String value;

    PrepOwner(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static PrepOwner fromValue(String input) {
        for (PrepOwner b : PrepOwner.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<PrepOwner> {
        @Override
        public void write(final JsonWriter jsonWriter, final PrepOwner enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public PrepOwner read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return PrepOwner.fromValue((String) (value));
        }
    }
}

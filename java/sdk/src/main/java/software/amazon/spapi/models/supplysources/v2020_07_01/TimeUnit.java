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

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The time unit */
@JsonAdapter(TimeUnit.Adapter.class)
public enum TimeUnit {
    @SerializedName("Hours")
    HOURS("Hours"),
    @SerializedName("Minutes")
    MINUTES("Minutes"),
    @SerializedName("Days")
    DAYS("Days");

    private String value;

    TimeUnit(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static TimeUnit fromValue(String input) {
        for (TimeUnit b : TimeUnit.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<TimeUnit> {
        @Override
        public void write(final JsonWriter jsonWriter, final TimeUnit enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public TimeUnit read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return TimeUnit.fromValue((String) (value));
        }
    }
}

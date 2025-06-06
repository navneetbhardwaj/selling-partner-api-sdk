/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.pricing.v2022_05_01;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The supported data types in the &#x60;getCompetitiveSummary&#x60; API. */
@JsonAdapter(CompetitiveSummaryIncludedData.Adapter.class)
public enum CompetitiveSummaryIncludedData {
    @SerializedName("featuredBuyingOptions")
    FEATUREDBUYINGOPTIONS("featuredBuyingOptions"),
    @SerializedName("referencePrices")
    REFERENCEPRICES("referencePrices"),
    @SerializedName("lowestPricedOffers")
    LOWESTPRICEDOFFERS("lowestPricedOffers");

    private String value;

    CompetitiveSummaryIncludedData(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static CompetitiveSummaryIncludedData fromValue(String input) {
        for (CompetitiveSummaryIncludedData b : CompetitiveSummaryIncludedData.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<CompetitiveSummaryIncludedData> {
        @Override
        public void write(final JsonWriter jsonWriter, final CompetitiveSummaryIncludedData enumeration)
                throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public CompetitiveSummaryIncludedData read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return CompetitiveSummaryIncludedData.fromValue((String) (value));
        }
    }
}

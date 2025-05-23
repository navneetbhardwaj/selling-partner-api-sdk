/*
 * The Selling Partner API for Amazon Seller Wallet Open Banking API
 * The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller's Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.
 *
 * OpenAPI spec version: 2024-03-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.sellerwallet.v2024_03_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.math.BigDecimal;
import java.util.Objects;

/** Foreign exchange rate details. */
@Schema(description = "Foreign exchange rate details.")
public class FxRateDetails {
    @SerializedName("fxRateId")
    private String fxRateId = null;

    @SerializedName("baseRate")
    private BigDecimal baseRate = null;

    @SerializedName("effectiveFxRate")
    private BigDecimal effectiveFxRate = null;

    @SerializedName("rateDirection")
    private RateDirection rateDirection = null;

    public FxRateDetails fxRateId(String fxRateId) {
        this.fxRateId = fxRateId;
        return this;
    }

    /**
     * The unique identifier assigned to the fees / foreign exchange rate of a transaction.
     *
     * @return fxRateId
     */
    @Schema(
            required = true,
            description = "The unique identifier assigned to the fees / foreign exchange rate of a transaction.")
    public String getFxRateId() {
        return fxRateId;
    }

    public void setFxRateId(String fxRateId) {
        this.fxRateId = fxRateId;
    }

    public FxRateDetails baseRate(BigDecimal baseRate) {
        this.baseRate = baseRate;
        return this;
    }

    /**
     * Get baseRate
     *
     * @return baseRate
     */
    @Schema(required = true, description = "")
    public BigDecimal getBaseRate() {
        return baseRate;
    }

    public void setBaseRate(BigDecimal baseRate) {
        this.baseRate = baseRate;
    }

    public FxRateDetails effectiveFxRate(BigDecimal effectiveFxRate) {
        this.effectiveFxRate = effectiveFxRate;
        return this;
    }

    /**
     * Get effectiveFxRate
     *
     * @return effectiveFxRate
     */
    @Schema(required = true, description = "")
    public BigDecimal getEffectiveFxRate() {
        return effectiveFxRate;
    }

    public void setEffectiveFxRate(BigDecimal effectiveFxRate) {
        this.effectiveFxRate = effectiveFxRate;
    }

    public FxRateDetails rateDirection(RateDirection rateDirection) {
        this.rateDirection = rateDirection;
        return this;
    }

    /**
     * Get rateDirection
     *
     * @return rateDirection
     */
    @Schema(required = true, description = "")
    public RateDirection getRateDirection() {
        return rateDirection;
    }

    public void setRateDirection(RateDirection rateDirection) {
        this.rateDirection = rateDirection;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        FxRateDetails fxRateDetails = (FxRateDetails) o;
        return Objects.equals(this.fxRateId, fxRateDetails.fxRateId)
                && Objects.equals(this.baseRate, fxRateDetails.baseRate)
                && Objects.equals(this.effectiveFxRate, fxRateDetails.effectiveFxRate)
                && Objects.equals(this.rateDirection, fxRateDetails.rateDirection);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fxRateId, baseRate, effectiveFxRate, rateDirection);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class FxRateDetails {\n");

        sb.append("    fxRateId: ").append(toIndentedString(fxRateId)).append("\n");
        sb.append("    baseRate: ").append(toIndentedString(baseRate)).append("\n");
        sb.append("    effectiveFxRate: ")
                .append(toIndentedString(effectiveFxRate))
                .append("\n");
        sb.append("    rateDirection: ").append(toIndentedString(rateDirection)).append("\n");
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

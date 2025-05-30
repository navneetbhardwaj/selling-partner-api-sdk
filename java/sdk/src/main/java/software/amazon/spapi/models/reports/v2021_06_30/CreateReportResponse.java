/*
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2021-06-30
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.reports.v2021_06_30;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The response schema. */
@Schema(description = "The response schema.")
public class CreateReportResponse {
    @SerializedName("reportId")
    private String reportId = null;

    public CreateReportResponse reportId(String reportId) {
        this.reportId = reportId;
        return this;
    }

    /**
     * The identifier for the report. This identifier is unique only in combination with a seller ID.
     *
     * @return reportId
     */
    @Schema(
            required = true,
            description =
                    "The identifier for the report. This identifier is unique only in combination with a seller ID.")
    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CreateReportResponse createReportResponse = (CreateReportResponse) o;
        return Objects.equals(this.reportId, createReportResponse.reportId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(reportId);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CreateReportResponse {\n");

        sb.append("    reportId: ").append(toIndentedString(reportId)).append("\n");
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

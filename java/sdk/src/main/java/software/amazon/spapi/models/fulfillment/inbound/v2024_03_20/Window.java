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

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** Contains a start and end DateTime representing a time range. */
@Schema(description = "Contains a start and end DateTime representing a time range.")
public class Window {
    @SerializedName("editableUntil")
    private OffsetDateTime editableUntil = null;

    @SerializedName("end")
    private OffsetDateTime end = null;

    @SerializedName("start")
    private OffsetDateTime start = null;

    public Window editableUntil(OffsetDateTime editableUntil) {
        this.editableUntil = editableUntil;
        return this;
    }

    /**
     * The timestamp at which this Window can no longer be edited.
     *
     * @return editableUntil
     */
    @Schema(description = "The timestamp at which this Window can no longer be edited.")
    public OffsetDateTime getEditableUntil() {
        return editableUntil;
    }

    public void setEditableUntil(OffsetDateTime editableUntil) {
        this.editableUntil = editableUntil;
    }

    public Window end(OffsetDateTime end) {
        this.end = end;
        return this;
    }

    /**
     * The end timestamp of the window.
     *
     * @return end
     */
    @Schema(required = true, description = "The end timestamp of the window.")
    public OffsetDateTime getEnd() {
        return end;
    }

    public void setEnd(OffsetDateTime end) {
        this.end = end;
    }

    public Window start(OffsetDateTime start) {
        this.start = start;
        return this;
    }

    /**
     * The start timestamp of the window.
     *
     * @return start
     */
    @Schema(required = true, description = "The start timestamp of the window.")
    public OffsetDateTime getStart() {
        return start;
    }

    public void setStart(OffsetDateTime start) {
        this.start = start;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Window window = (Window) o;
        return Objects.equals(this.editableUntil, window.editableUntil)
                && Objects.equals(this.end, window.end)
                && Objects.equals(this.start, window.start);
    }

    @Override
    public int hashCode() {
        return Objects.hash(editableUntil, end, start);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Window {\n");

        sb.append("    editableUntil: ").append(toIndentedString(editableUntil)).append("\n");
        sb.append("    end: ").append(toIndentedString(end)).append("\n");
        sb.append("    start: ").append(toIndentedString(start)).append("\n");
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

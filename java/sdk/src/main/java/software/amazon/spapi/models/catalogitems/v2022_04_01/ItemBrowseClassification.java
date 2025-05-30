/*
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.catalogitems.v2022_04_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** Classification (browse node) for an Amazon catalog item. */
@Schema(description = "Classification (browse node) for an Amazon catalog item.")
public class ItemBrowseClassification {
    @SerializedName("displayName")
    private String displayName = null;

    @SerializedName("classificationId")
    private String classificationId = null;

    @SerializedName("parent")
    private ItemBrowseClassification parent = null;

    public ItemBrowseClassification displayName(String displayName) {
        this.displayName = displayName;
        return this;
    }

    /**
     * Display name for the classification.
     *
     * @return displayName
     */
    @Schema(required = true, description = "Display name for the classification.")
    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public ItemBrowseClassification classificationId(String classificationId) {
        this.classificationId = classificationId;
        return this;
    }

    /**
     * Identifier of the classification.
     *
     * @return classificationId
     */
    @Schema(required = true, description = "Identifier of the classification.")
    public String getClassificationId() {
        return classificationId;
    }

    public void setClassificationId(String classificationId) {
        this.classificationId = classificationId;
    }

    public ItemBrowseClassification parent(ItemBrowseClassification parent) {
        this.parent = parent;
        return this;
    }

    /**
     * Get parent
     *
     * @return parent
     */
    @Schema(description = "")
    public ItemBrowseClassification getParent() {
        return parent;
    }

    public void setParent(ItemBrowseClassification parent) {
        this.parent = parent;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemBrowseClassification itemBrowseClassification = (ItemBrowseClassification) o;
        return Objects.equals(this.displayName, itemBrowseClassification.displayName)
                && Objects.equals(this.classificationId, itemBrowseClassification.classificationId)
                && Objects.equals(this.parent, itemBrowseClassification.parent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(displayName, classificationId, parent);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemBrowseClassification {\n");

        sb.append("    displayName: ").append(toIndentedString(displayName)).append("\n");
        sb.append("    classificationId: ")
                .append(toIndentedString(classificationId))
                .append("\n");
        sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
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

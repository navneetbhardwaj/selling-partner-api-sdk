/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if
 * the specified document specifications are not among those returned in the response to the getRates operation.
 */
@Schema(
        description =
                "The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation.")
public class RequestedDocumentSpecification {
    @SerializedName("format")
    private DocumentFormat format = null;

    @SerializedName("size")
    private DocumentSize size = null;

    @SerializedName("dpi")
    private Integer dpi = null;

    @SerializedName("pageLayout")
    private String pageLayout = null;

    @SerializedName("needFileJoining")
    private Boolean needFileJoining = null;

    @SerializedName("requestedDocumentTypes")
    private List<DocumentType> requestedDocumentTypes = new ArrayList<DocumentType>();

    @SerializedName("requestedLabelCustomization")
    private RequestedLabelCustomization requestedLabelCustomization = null;

    public RequestedDocumentSpecification format(DocumentFormat format) {
        this.format = format;
        return this;
    }

    /**
     * Get format
     *
     * @return format
     */
    @Schema(required = true, description = "")
    public DocumentFormat getFormat() {
        return format;
    }

    public void setFormat(DocumentFormat format) {
        this.format = format;
    }

    public RequestedDocumentSpecification size(DocumentSize size) {
        this.size = size;
        return this;
    }

    /**
     * Get size
     *
     * @return size
     */
    @Schema(required = true, description = "")
    public DocumentSize getSize() {
        return size;
    }

    public void setSize(DocumentSize size) {
        this.size = size;
    }

    public RequestedDocumentSpecification dpi(Integer dpi) {
        this.dpi = dpi;
        return this;
    }

    /**
     * Get dpi
     *
     * @return dpi
     */
    @Schema(description = "")
    public Integer getDpi() {
        return dpi;
    }

    public void setDpi(Integer dpi) {
        this.dpi = dpi;
    }

    public RequestedDocumentSpecification pageLayout(String pageLayout) {
        this.pageLayout = pageLayout;
        return this;
    }

    /**
     * Get pageLayout
     *
     * @return pageLayout
     */
    @Schema(description = "")
    public String getPageLayout() {
        return pageLayout;
    }

    public void setPageLayout(String pageLayout) {
        this.pageLayout = pageLayout;
    }

    public RequestedDocumentSpecification needFileJoining(Boolean needFileJoining) {
        this.needFileJoining = needFileJoining;
        return this;
    }

    /**
     * Get needFileJoining
     *
     * @return needFileJoining
     */
    @Schema(required = true, description = "")
    public Boolean getNeedFileJoining() {
        return needFileJoining;
    }

    public void setNeedFileJoining(Boolean needFileJoining) {
        this.needFileJoining = needFileJoining;
    }

    public RequestedDocumentSpecification requestedDocumentTypes(List<DocumentType> requestedDocumentTypes) {
        this.requestedDocumentTypes = requestedDocumentTypes;
        return this;
    }

    public RequestedDocumentSpecification addRequestedDocumentTypesItem(DocumentType requestedDocumentTypesItem) {
        this.requestedDocumentTypes.add(requestedDocumentTypesItem);
        return this;
    }

    /**
     * A list of the document types requested.
     *
     * @return requestedDocumentTypes
     */
    @Schema(required = true, description = "A list of the document types requested.")
    public List<DocumentType> getRequestedDocumentTypes() {
        return requestedDocumentTypes;
    }

    public void setRequestedDocumentTypes(List<DocumentType> requestedDocumentTypes) {
        this.requestedDocumentTypes = requestedDocumentTypes;
    }

    public RequestedDocumentSpecification requestedLabelCustomization(
            RequestedLabelCustomization requestedLabelCustomization) {
        this.requestedLabelCustomization = requestedLabelCustomization;
        return this;
    }

    /**
     * Get requestedLabelCustomization
     *
     * @return requestedLabelCustomization
     */
    @Schema(description = "")
    public RequestedLabelCustomization getRequestedLabelCustomization() {
        return requestedLabelCustomization;
    }

    public void setRequestedLabelCustomization(RequestedLabelCustomization requestedLabelCustomization) {
        this.requestedLabelCustomization = requestedLabelCustomization;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RequestedDocumentSpecification requestedDocumentSpecification = (RequestedDocumentSpecification) o;
        return Objects.equals(this.format, requestedDocumentSpecification.format)
                && Objects.equals(this.size, requestedDocumentSpecification.size)
                && Objects.equals(this.dpi, requestedDocumentSpecification.dpi)
                && Objects.equals(this.pageLayout, requestedDocumentSpecification.pageLayout)
                && Objects.equals(this.needFileJoining, requestedDocumentSpecification.needFileJoining)
                && Objects.equals(this.requestedDocumentTypes, requestedDocumentSpecification.requestedDocumentTypes)
                && Objects.equals(
                        this.requestedLabelCustomization, requestedDocumentSpecification.requestedLabelCustomization);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                format, size, dpi, pageLayout, needFileJoining, requestedDocumentTypes, requestedLabelCustomization);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class RequestedDocumentSpecification {\n");

        sb.append("    format: ").append(toIndentedString(format)).append("\n");
        sb.append("    size: ").append(toIndentedString(size)).append("\n");
        sb.append("    dpi: ").append(toIndentedString(dpi)).append("\n");
        sb.append("    pageLayout: ").append(toIndentedString(pageLayout)).append("\n");
        sb.append("    needFileJoining: ")
                .append(toIndentedString(needFileJoining))
                .append("\n");
        sb.append("    requestedDocumentTypes: ")
                .append(toIndentedString(requestedDocumentTypes))
                .append("\n");
        sb.append("    requestedLabelCustomization: ")
                .append(toIndentedString(requestedLabelCustomization))
                .append("\n");
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

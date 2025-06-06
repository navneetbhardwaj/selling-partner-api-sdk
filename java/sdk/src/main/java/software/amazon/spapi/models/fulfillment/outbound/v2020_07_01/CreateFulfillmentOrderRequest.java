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

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** The request body schema for the &#x60;createFulfillmentOrder&#x60; operation. */
@Schema(description = "The request body schema for the `createFulfillmentOrder` operation.")
public class CreateFulfillmentOrderRequest {
    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    @SerializedName("sellerFulfillmentOrderId")
    private String sellerFulfillmentOrderId = null;

    @SerializedName("displayableOrderId")
    private String displayableOrderId = null;

    @SerializedName("displayableOrderDate")
    private OffsetDateTime displayableOrderDate = null;

    @SerializedName("displayableOrderComment")
    private String displayableOrderComment = null;

    @SerializedName("shippingSpeedCategory")
    private ShippingSpeedCategory shippingSpeedCategory = null;

    @SerializedName("deliveryWindow")
    private DeliveryWindow deliveryWindow = null;

    @SerializedName("destinationAddress")
    private Address destinationAddress = null;

    @SerializedName("deliveryPreferences")
    private DeliveryPreferences deliveryPreferences = null;

    @SerializedName("fulfillmentAction")
    private FulfillmentAction fulfillmentAction = null;

    @SerializedName("fulfillmentPolicy")
    private FulfillmentPolicy fulfillmentPolicy = null;

    @SerializedName("codSettings")
    private CODSettings codSettings = null;

    @SerializedName("shipFromCountryCode")
    private String shipFromCountryCode = null;

    @SerializedName("notificationEmails")
    private NotificationEmailList notificationEmails = null;

    @SerializedName("featureConstraints")
    private List<FeatureSettings> featureConstraints = null;

    @SerializedName("items")
    private CreateFulfillmentOrderItemList items = null;

    @SerializedName("paymentInformation")
    private PaymentInformationList paymentInformation = null;

    public CreateFulfillmentOrderRequest marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * The marketplace the fulfillment order is placed against.
     *
     * @return marketplaceId
     */
    @Schema(description = "The marketplace the fulfillment order is placed against.")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public CreateFulfillmentOrderRequest sellerFulfillmentOrderId(String sellerFulfillmentOrderId) {
        this.sellerFulfillmentOrderId = sellerFulfillmentOrderId;
        return this;
    }

    /**
     * A fulfillment order identifier that the seller creates to track their fulfillment order. The
     * &#x60;SellerFulfillmentOrderId&#x60; must be unique for each fulfillment order that a seller creates. If the
     * seller&#x27;s system already creates unique order identifiers, then these might be good values for them to use.
     *
     * @return sellerFulfillmentOrderId
     */
    @Schema(
            required = true,
            description =
                    "A fulfillment order identifier that the seller creates to track their fulfillment order. The `SellerFulfillmentOrderId` must be unique for each fulfillment order that a seller creates. If the seller's system already creates unique order identifiers, then these might be good values for them to use.")
    public String getSellerFulfillmentOrderId() {
        return sellerFulfillmentOrderId;
    }

    public void setSellerFulfillmentOrderId(String sellerFulfillmentOrderId) {
        this.sellerFulfillmentOrderId = sellerFulfillmentOrderId;
    }

    public CreateFulfillmentOrderRequest displayableOrderId(String displayableOrderId) {
        this.displayableOrderId = displayableOrderId;
        return this;
    }

    /**
     * A fulfillment order identifier that the seller creates. This value displays as the order identifier in
     * recipient-facing materials such as the outbound shipment packing slip. The value of
     * &#x60;DisplayableOrderId&#x60; should match the order identifier that the seller provides to the recipient. The
     * seller can use the &#x60;SellerFulfillmentOrderId&#x60; for this value or they can specify an alternate value if
     * they want the recipient to reference an alternate order identifier. The value must be an alpha-numeric or ISO
     * 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and
     * trailing white space is removed.
     *
     * @return displayableOrderId
     */
    @Schema(
            required = true,
            description =
                    "A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of `DisplayableOrderId` should match the order identifier that the seller provides to the recipient. The seller can use the `SellerFulfillmentOrderId` for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed.")
    public String getDisplayableOrderId() {
        return displayableOrderId;
    }

    public void setDisplayableOrderId(String displayableOrderId) {
        this.displayableOrderId = displayableOrderId;
    }

    public CreateFulfillmentOrderRequest displayableOrderDate(OffsetDateTime displayableOrderDate) {
        this.displayableOrderDate = displayableOrderDate;
        return this;
    }

    /**
     * Get displayableOrderDate
     *
     * @return displayableOrderDate
     */
    @Schema(required = true, description = "")
    public OffsetDateTime getDisplayableOrderDate() {
        return displayableOrderDate;
    }

    public void setDisplayableOrderDate(OffsetDateTime displayableOrderDate) {
        this.displayableOrderDate = displayableOrderDate;
    }

    public CreateFulfillmentOrderRequest displayableOrderComment(String displayableOrderComment) {
        this.displayableOrderComment = displayableOrderComment;
        return this;
    }

    /**
     * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     *
     * @return displayableOrderComment
     */
    @Schema(
            required = true,
            description =
                    "Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.")
    public String getDisplayableOrderComment() {
        return displayableOrderComment;
    }

    public void setDisplayableOrderComment(String displayableOrderComment) {
        this.displayableOrderComment = displayableOrderComment;
    }

    public CreateFulfillmentOrderRequest shippingSpeedCategory(ShippingSpeedCategory shippingSpeedCategory) {
        this.shippingSpeedCategory = shippingSpeedCategory;
        return this;
    }

    /**
     * Get shippingSpeedCategory
     *
     * @return shippingSpeedCategory
     */
    @Schema(required = true, description = "")
    public ShippingSpeedCategory getShippingSpeedCategory() {
        return shippingSpeedCategory;
    }

    public void setShippingSpeedCategory(ShippingSpeedCategory shippingSpeedCategory) {
        this.shippingSpeedCategory = shippingSpeedCategory;
    }

    public CreateFulfillmentOrderRequest deliveryWindow(DeliveryWindow deliveryWindow) {
        this.deliveryWindow = deliveryWindow;
        return this;
    }

    /**
     * Get deliveryWindow
     *
     * @return deliveryWindow
     */
    @Schema(description = "")
    public DeliveryWindow getDeliveryWindow() {
        return deliveryWindow;
    }

    public void setDeliveryWindow(DeliveryWindow deliveryWindow) {
        this.deliveryWindow = deliveryWindow;
    }

    public CreateFulfillmentOrderRequest destinationAddress(Address destinationAddress) {
        this.destinationAddress = destinationAddress;
        return this;
    }

    /**
     * Get destinationAddress
     *
     * @return destinationAddress
     */
    @Schema(required = true, description = "")
    public Address getDestinationAddress() {
        return destinationAddress;
    }

    public void setDestinationAddress(Address destinationAddress) {
        this.destinationAddress = destinationAddress;
    }

    public CreateFulfillmentOrderRequest deliveryPreferences(DeliveryPreferences deliveryPreferences) {
        this.deliveryPreferences = deliveryPreferences;
        return this;
    }

    /**
     * Get deliveryPreferences
     *
     * @return deliveryPreferences
     */
    @Schema(description = "")
    public DeliveryPreferences getDeliveryPreferences() {
        return deliveryPreferences;
    }

    public void setDeliveryPreferences(DeliveryPreferences deliveryPreferences) {
        this.deliveryPreferences = deliveryPreferences;
    }

    public CreateFulfillmentOrderRequest fulfillmentAction(FulfillmentAction fulfillmentAction) {
        this.fulfillmentAction = fulfillmentAction;
        return this;
    }

    /**
     * Get fulfillmentAction
     *
     * @return fulfillmentAction
     */
    @Schema(description = "")
    public FulfillmentAction getFulfillmentAction() {
        return fulfillmentAction;
    }

    public void setFulfillmentAction(FulfillmentAction fulfillmentAction) {
        this.fulfillmentAction = fulfillmentAction;
    }

    public CreateFulfillmentOrderRequest fulfillmentPolicy(FulfillmentPolicy fulfillmentPolicy) {
        this.fulfillmentPolicy = fulfillmentPolicy;
        return this;
    }

    /**
     * Get fulfillmentPolicy
     *
     * @return fulfillmentPolicy
     */
    @Schema(description = "")
    public FulfillmentPolicy getFulfillmentPolicy() {
        return fulfillmentPolicy;
    }

    public void setFulfillmentPolicy(FulfillmentPolicy fulfillmentPolicy) {
        this.fulfillmentPolicy = fulfillmentPolicy;
    }

    public CreateFulfillmentOrderRequest codSettings(CODSettings codSettings) {
        this.codSettings = codSettings;
        return this;
    }

    /**
     * Get codSettings
     *
     * @return codSettings
     */
    @Schema(description = "")
    public CODSettings getCodSettings() {
        return codSettings;
    }

    public void setCodSettings(CODSettings codSettings) {
        this.codSettings = codSettings;
    }

    public CreateFulfillmentOrderRequest shipFromCountryCode(String shipFromCountryCode) {
        this.shipFromCountryCode = shipFromCountryCode;
        return this;
    }

    /**
     * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1
     * alpha-2 format.
     *
     * @return shipFromCountryCode
     */
    @Schema(
            description =
                    "The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.")
    public String getShipFromCountryCode() {
        return shipFromCountryCode;
    }

    public void setShipFromCountryCode(String shipFromCountryCode) {
        this.shipFromCountryCode = shipFromCountryCode;
    }

    public CreateFulfillmentOrderRequest notificationEmails(NotificationEmailList notificationEmails) {
        this.notificationEmails = notificationEmails;
        return this;
    }

    /**
     * Get notificationEmails
     *
     * @return notificationEmails
     */
    @Schema(description = "")
    public NotificationEmailList getNotificationEmails() {
        return notificationEmails;
    }

    public void setNotificationEmails(NotificationEmailList notificationEmails) {
        this.notificationEmails = notificationEmails;
    }

    public CreateFulfillmentOrderRequest featureConstraints(List<FeatureSettings> featureConstraints) {
        this.featureConstraints = featureConstraints;
        return this;
    }

    public CreateFulfillmentOrderRequest addFeatureConstraintsItem(FeatureSettings featureConstraintsItem) {
        if (this.featureConstraints == null) {
            this.featureConstraints = new ArrayList<FeatureSettings>();
        }
        this.featureConstraints.add(featureConstraintsItem);
        return this;
    }

    /**
     * A list of features and their fulfillment policies to apply to the order.
     *
     * @return featureConstraints
     */
    @Schema(description = "A list of features and their fulfillment policies to apply to the order.")
    public List<FeatureSettings> getFeatureConstraints() {
        return featureConstraints;
    }

    public void setFeatureConstraints(List<FeatureSettings> featureConstraints) {
        this.featureConstraints = featureConstraints;
    }

    public CreateFulfillmentOrderRequest items(CreateFulfillmentOrderItemList items) {
        this.items = items;
        return this;
    }

    /**
     * Get items
     *
     * @return items
     */
    @Schema(required = true, description = "")
    public CreateFulfillmentOrderItemList getItems() {
        return items;
    }

    public void setItems(CreateFulfillmentOrderItemList items) {
        this.items = items;
    }

    public CreateFulfillmentOrderRequest paymentInformation(PaymentInformationList paymentInformation) {
        this.paymentInformation = paymentInformation;
        return this;
    }

    /**
     * Get paymentInformation
     *
     * @return paymentInformation
     */
    @Schema(description = "")
    public PaymentInformationList getPaymentInformation() {
        return paymentInformation;
    }

    public void setPaymentInformation(PaymentInformationList paymentInformation) {
        this.paymentInformation = paymentInformation;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CreateFulfillmentOrderRequest createFulfillmentOrderRequest = (CreateFulfillmentOrderRequest) o;
        return Objects.equals(this.marketplaceId, createFulfillmentOrderRequest.marketplaceId)
                && Objects.equals(this.sellerFulfillmentOrderId, createFulfillmentOrderRequest.sellerFulfillmentOrderId)
                && Objects.equals(this.displayableOrderId, createFulfillmentOrderRequest.displayableOrderId)
                && Objects.equals(this.displayableOrderDate, createFulfillmentOrderRequest.displayableOrderDate)
                && Objects.equals(this.displayableOrderComment, createFulfillmentOrderRequest.displayableOrderComment)
                && Objects.equals(this.shippingSpeedCategory, createFulfillmentOrderRequest.shippingSpeedCategory)
                && Objects.equals(this.deliveryWindow, createFulfillmentOrderRequest.deliveryWindow)
                && Objects.equals(this.destinationAddress, createFulfillmentOrderRequest.destinationAddress)
                && Objects.equals(this.deliveryPreferences, createFulfillmentOrderRequest.deliveryPreferences)
                && Objects.equals(this.fulfillmentAction, createFulfillmentOrderRequest.fulfillmentAction)
                && Objects.equals(this.fulfillmentPolicy, createFulfillmentOrderRequest.fulfillmentPolicy)
                && Objects.equals(this.codSettings, createFulfillmentOrderRequest.codSettings)
                && Objects.equals(this.shipFromCountryCode, createFulfillmentOrderRequest.shipFromCountryCode)
                && Objects.equals(this.notificationEmails, createFulfillmentOrderRequest.notificationEmails)
                && Objects.equals(this.featureConstraints, createFulfillmentOrderRequest.featureConstraints)
                && Objects.equals(this.items, createFulfillmentOrderRequest.items)
                && Objects.equals(this.paymentInformation, createFulfillmentOrderRequest.paymentInformation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                marketplaceId,
                sellerFulfillmentOrderId,
                displayableOrderId,
                displayableOrderDate,
                displayableOrderComment,
                shippingSpeedCategory,
                deliveryWindow,
                destinationAddress,
                deliveryPreferences,
                fulfillmentAction,
                fulfillmentPolicy,
                codSettings,
                shipFromCountryCode,
                notificationEmails,
                featureConstraints,
                items,
                paymentInformation);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CreateFulfillmentOrderRequest {\n");

        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    sellerFulfillmentOrderId: ")
                .append(toIndentedString(sellerFulfillmentOrderId))
                .append("\n");
        sb.append("    displayableOrderId: ")
                .append(toIndentedString(displayableOrderId))
                .append("\n");
        sb.append("    displayableOrderDate: ")
                .append(toIndentedString(displayableOrderDate))
                .append("\n");
        sb.append("    displayableOrderComment: ")
                .append(toIndentedString(displayableOrderComment))
                .append("\n");
        sb.append("    shippingSpeedCategory: ")
                .append(toIndentedString(shippingSpeedCategory))
                .append("\n");
        sb.append("    deliveryWindow: ")
                .append(toIndentedString(deliveryWindow))
                .append("\n");
        sb.append("    destinationAddress: ")
                .append(toIndentedString(destinationAddress))
                .append("\n");
        sb.append("    deliveryPreferences: ")
                .append(toIndentedString(deliveryPreferences))
                .append("\n");
        sb.append("    fulfillmentAction: ")
                .append(toIndentedString(fulfillmentAction))
                .append("\n");
        sb.append("    fulfillmentPolicy: ")
                .append(toIndentedString(fulfillmentPolicy))
                .append("\n");
        sb.append("    codSettings: ").append(toIndentedString(codSettings)).append("\n");
        sb.append("    shipFromCountryCode: ")
                .append(toIndentedString(shipFromCountryCode))
                .append("\n");
        sb.append("    notificationEmails: ")
                .append(toIndentedString(notificationEmails))
                .append("\n");
        sb.append("    featureConstraints: ")
                .append(toIndentedString(featureConstraints))
                .append("\n");
        sb.append("    items: ").append(toIndentedString(items)).append("\n");
        sb.append("    paymentInformation: ")
                .append(toIndentedString(paymentInformation))
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

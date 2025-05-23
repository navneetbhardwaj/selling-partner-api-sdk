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
import java.util.Objects;

/** Details of the bank account involved in transaction. */
@Schema(description = "Details of the bank account involved in transaction.")
public class TransactionAccount {
    @SerializedName("accountId")
    private String accountId = null;

    @SerializedName("bankAccountHolderName")
    private String bankAccountHolderName = null;

    @SerializedName("bankName")
    private String bankName = null;

    @SerializedName("bankAccountNumberFormat")
    private BankAccountNumberFormat bankAccountNumberFormat = null;

    @SerializedName("bankAccountNumberTail")
    private String bankAccountNumberTail = null;

    @SerializedName("bankAccountCountryCode")
    private String bankAccountCountryCode = null;

    @SerializedName("bankAccountCurrency")
    private String bankAccountCurrency = null;

    public TransactionAccount accountId(String accountId) {
        this.accountId = accountId;
        return this;
    }

    /**
     * The unique identifier provided by Amazon to identify the account.
     *
     * @return accountId
     */
    @Schema(description = "The unique identifier provided by Amazon to identify the account.")
    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public TransactionAccount bankAccountHolderName(String bankAccountHolderName) {
        this.bankAccountHolderName = bankAccountHolderName;
        return this;
    }

    /**
     * The account holder&#x27;s name.
     *
     * @return bankAccountHolderName
     */
    @Schema(required = true, description = "The account holder's name.")
    public String getBankAccountHolderName() {
        return bankAccountHolderName;
    }

    public void setBankAccountHolderName(String bankAccountHolderName) {
        this.bankAccountHolderName = bankAccountHolderName;
    }

    public TransactionAccount bankName(String bankName) {
        this.bankName = bankName;
        return this;
    }

    /**
     * The name of the bank.
     *
     * @return bankName
     */
    @Schema(required = true, description = "The name of the bank.")
    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public TransactionAccount bankAccountNumberFormat(BankAccountNumberFormat bankAccountNumberFormat) {
        this.bankAccountNumberFormat = bankAccountNumberFormat;
        return this;
    }

    /**
     * Get bankAccountNumberFormat
     *
     * @return bankAccountNumberFormat
     */
    @Schema(required = true, description = "")
    public BankAccountNumberFormat getBankAccountNumberFormat() {
        return bankAccountNumberFormat;
    }

    public void setBankAccountNumberFormat(BankAccountNumberFormat bankAccountNumberFormat) {
        this.bankAccountNumberFormat = bankAccountNumberFormat;
    }

    public TransactionAccount bankAccountNumberTail(String bankAccountNumberTail) {
        this.bankAccountNumberTail = bankAccountNumberTail;
        return this;
    }

    /**
     * The last three digits of the bank account number.
     *
     * @return bankAccountNumberTail
     */
    @Schema(description = "The last three digits of the bank account number.")
    public String getBankAccountNumberTail() {
        return bankAccountNumberTail;
    }

    public void setBankAccountNumberTail(String bankAccountNumberTail) {
        this.bankAccountNumberTail = bankAccountNumberTail;
    }

    public TransactionAccount bankAccountCountryCode(String bankAccountCountryCode) {
        this.bankAccountCountryCode = bankAccountCountryCode;
        return this;
    }

    /**
     * The two-digit country code, in ISO 3166 format. This field is optional for &#x60;transactionSourceAccount&#x60;,
     * but is mandatory for &#x60;transactionDestinationAccount&#x60;.
     *
     * @return bankAccountCountryCode
     */
    @Schema(
            description =
                    "The two-digit country code, in ISO 3166 format. This field is optional for `transactionSourceAccount`, but is mandatory for `transactionDestinationAccount`.")
    public String getBankAccountCountryCode() {
        return bankAccountCountryCode;
    }

    public void setBankAccountCountryCode(String bankAccountCountryCode) {
        this.bankAccountCountryCode = bankAccountCountryCode;
    }

    public TransactionAccount bankAccountCurrency(String bankAccountCurrency) {
        this.bankAccountCurrency = bankAccountCurrency;
        return this;
    }

    /**
     * The currency code in ISO 4217 format.
     *
     * @return bankAccountCurrency
     */
    @Schema(required = true, description = "The currency code in ISO 4217 format.")
    public String getBankAccountCurrency() {
        return bankAccountCurrency;
    }

    public void setBankAccountCurrency(String bankAccountCurrency) {
        this.bankAccountCurrency = bankAccountCurrency;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TransactionAccount transactionAccount = (TransactionAccount) o;
        return Objects.equals(this.accountId, transactionAccount.accountId)
                && Objects.equals(this.bankAccountHolderName, transactionAccount.bankAccountHolderName)
                && Objects.equals(this.bankName, transactionAccount.bankName)
                && Objects.equals(this.bankAccountNumberFormat, transactionAccount.bankAccountNumberFormat)
                && Objects.equals(this.bankAccountNumberTail, transactionAccount.bankAccountNumberTail)
                && Objects.equals(this.bankAccountCountryCode, transactionAccount.bankAccountCountryCode)
                && Objects.equals(this.bankAccountCurrency, transactionAccount.bankAccountCurrency);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                accountId,
                bankAccountHolderName,
                bankName,
                bankAccountNumberFormat,
                bankAccountNumberTail,
                bankAccountCountryCode,
                bankAccountCurrency);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TransactionAccount {\n");

        sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
        sb.append("    bankAccountHolderName: ")
                .append(toIndentedString(bankAccountHolderName))
                .append("\n");
        sb.append("    bankName: ").append(toIndentedString(bankName)).append("\n");
        sb.append("    bankAccountNumberFormat: ")
                .append(toIndentedString(bankAccountNumberFormat))
                .append("\n");
        sb.append("    bankAccountNumberTail: ")
                .append(toIndentedString(bankAccountNumberTail))
                .append("\n");
        sb.append("    bankAccountCountryCode: ")
                .append(toIndentedString(bankAccountCountryCode))
                .append("\n");
        sb.append("    bankAccountCurrency: ")
                .append(toIndentedString(bankAccountCurrency))
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

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

package software.amazon.spapi.api.sellerwallet.v2024_03_01;

import static org.junit.jupiter.api.Assertions.*;

import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.junit.jupiter.api.Test;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.models.sellerwallet.v2024_03_01.Transaction;
import software.amazon.spapi.models.sellerwallet.v2024_03_01.TransactionInitiationRequest;
import software.amazon.spapi.models.sellerwallet.v2024_03_01.TransactionListing;

public class TransactionsApiTest {

    private static final String endpoint = "http://localhost:3000";
    private static final String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static final LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final TransactionsApi api = new TransactionsApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void createTransactionTest() throws Exception {
        instructBackendMock("createTransaction", "200");
        TransactionInitiationRequest body = easyRandom.nextObject(TransactionInitiationRequest.class);
        String destAccountDigitalSignature = easyRandom.nextObject(String.class);
        String amountDigitalSignature = easyRandom.nextObject(String.class);

        ApiResponse<Transaction> response =
                api.createTransactionWithHttpInfo(body, destAccountDigitalSignature, amountDigitalSignature);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getTransactionTest() throws Exception {
        instructBackendMock("getTransaction", "200");
        String transactionId = easyRandom.nextObject(String.class);

        ApiResponse<Transaction> response = api.getTransactionWithHttpInfo(transactionId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void listAccountTransactionsTest() throws Exception {
        instructBackendMock("listAccountTransactions", "200");
        String accountId = easyRandom.nextObject(String.class);

        ApiResponse<TransactionListing> response = api.listAccountTransactionsWithHttpInfo(accountId, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    private void instructBackendMock(String response, String code) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI(endpoint + "/response/" + response + "/code/" + code))
                .POST(HttpRequest.BodyPublishers.noBody())
                .build();

        HttpClient.newHttpClient().send(request, BodyHandlers.discarding());
    }

    private static void assertValidResponsePayload(int statusCode, Object body) {
        if (statusCode != 204) assertNotNull(body);
    }
}

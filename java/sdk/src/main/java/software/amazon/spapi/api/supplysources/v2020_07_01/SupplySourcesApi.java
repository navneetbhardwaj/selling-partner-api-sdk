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

package software.amazon.spapi.api.supplysources.v2020_07_01;

import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCache;
import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCacheImpl;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationSigner;
import com.amazon.SellingPartnerAPIAA.LWAException;
import com.google.gson.reflect.TypeToken;
import io.github.bucket4j.Bucket;
import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import software.amazon.spapi.ApiCallback;
import software.amazon.spapi.ApiClient;
import software.amazon.spapi.ApiException;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.Configuration;
import software.amazon.spapi.Pair;
import software.amazon.spapi.ProgressRequestBody;
import software.amazon.spapi.StringUtil;
import software.amazon.spapi.models.supplysources.v2020_07_01.CreateSupplySourceRequest;
import software.amazon.spapi.models.supplysources.v2020_07_01.CreateSupplySourceResponse;
import software.amazon.spapi.models.supplysources.v2020_07_01.ErrorList;
import software.amazon.spapi.models.supplysources.v2020_07_01.GetSupplySourcesResponse;
import software.amazon.spapi.models.supplysources.v2020_07_01.SupplySource;
import software.amazon.spapi.models.supplysources.v2020_07_01.UpdateSupplySourceRequest;
import software.amazon.spapi.models.supplysources.v2020_07_01.UpdateSupplySourceStatusRequest;

public class SupplySourcesApi {
    private ApiClient apiClient;
    private Boolean disableRateLimiting;

    public SupplySourcesApi(ApiClient apiClient, Boolean disableRateLimiting) {
        this.apiClient = apiClient;
        this.disableRateLimiting = disableRateLimiting;
    }

    private final Configuration config = Configuration.get();

    public final Bucket archiveSupplySourceBucket = Bucket.builder()
            .addLimit(config.getLimit("SupplySourcesApi-archiveSupplySource"))
            .build();

    public final Bucket createSupplySourceBucket = Bucket.builder()
            .addLimit(config.getLimit("SupplySourcesApi-createSupplySource"))
            .build();

    public final Bucket getSupplySourceBucket = Bucket.builder()
            .addLimit(config.getLimit("SupplySourcesApi-getSupplySource"))
            .build();

    public final Bucket getSupplySourcesBucket = Bucket.builder()
            .addLimit(config.getLimit("SupplySourcesApi-getSupplySources"))
            .build();

    public final Bucket updateSupplySourceBucket = Bucket.builder()
            .addLimit(config.getLimit("SupplySourcesApi-updateSupplySource"))
            .build();

    public final Bucket updateSupplySourceStatusBucket = Bucket.builder()
            .addLimit(config.getLimit("SupplySourcesApi-updateSupplySourceStatus"))
            .build();

    /**
     * Build call for archiveSupplySource
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    private okhttp3.Call archiveSupplySourceCall(
            String supplySourceId, final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/supplySources/2020-07-01/supplySources/{supplySourceId}"
                .replaceAll("\\{" + "supplySourceId" + "\\}", apiClient.escapeString(supplySourceId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {};

        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        return apiClient.buildCall(
                localVarPath,
                "DELETE",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                progressRequestListener);
    }

    private okhttp3.Call archiveSupplySourceValidateBeforeCall(
            String supplySourceId, final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'supplySourceId' is set
        if (supplySourceId == null) {
            throw new ApiException(
                    "Missing the required parameter 'supplySourceId' when calling archiveSupplySource(Async)");
        }

        return archiveSupplySourceCall(supplySourceId, progressRequestListener);
    }

    /**
     * Archive a supply source, making it inactive. Cannot be undone.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @return ErrorList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ErrorList archiveSupplySource(String supplySourceId) throws ApiException, LWAException {
        ApiResponse<ErrorList> resp = archiveSupplySourceWithHttpInfo(supplySourceId);
        return resp.getData();
    }

    /**
     * Archive a supply source, making it inactive. Cannot be undone.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @return ApiResponse&lt;ErrorList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<ErrorList> archiveSupplySourceWithHttpInfo(String supplySourceId)
            throws ApiException, LWAException {
        okhttp3.Call call = archiveSupplySourceValidateBeforeCall(supplySourceId, null);
        if (disableRateLimiting || archiveSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ErrorList>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("archiveSupplySource operation exceeds rate limit");
    }

    /**
     * (asynchronously) Archive a supply source, making it inactive. Cannot be undone.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call archiveSupplySourceAsync(String supplySourceId, final ApiCallback<ErrorList> callback)
            throws ApiException, LWAException {

        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = archiveSupplySourceValidateBeforeCall(supplySourceId, progressRequestListener);
        if (disableRateLimiting || archiveSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ErrorList>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("archiveSupplySource operation exceeds rate limit");
    }
    /**
     * Build call for createSupplySource
     *
     * @param body A request to create a supply source. (required)
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    private okhttp3.Call createSupplySourceCall(
            CreateSupplySourceRequest body, final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/supplySources/2020-07-01/supplySources";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {"application/json"};
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        return apiClient.buildCall(
                localVarPath,
                "POST",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                progressRequestListener);
    }

    private okhttp3.Call createSupplySourceValidateBeforeCall(
            CreateSupplySourceRequest body, final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling createSupplySource(Async)");
        }

        return createSupplySourceCall(body, progressRequestListener);
    }

    /**
     * Create a new supply source.
     *
     * @param body A request to create a supply source. (required)
     * @return CreateSupplySourceResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public CreateSupplySourceResponse createSupplySource(CreateSupplySourceRequest body)
            throws ApiException, LWAException {
        ApiResponse<CreateSupplySourceResponse> resp = createSupplySourceWithHttpInfo(body);
        return resp.getData();
    }

    /**
     * Create a new supply source.
     *
     * @param body A request to create a supply source. (required)
     * @return ApiResponse&lt;CreateSupplySourceResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<CreateSupplySourceResponse> createSupplySourceWithHttpInfo(CreateSupplySourceRequest body)
            throws ApiException, LWAException {
        okhttp3.Call call = createSupplySourceValidateBeforeCall(body, null);
        if (disableRateLimiting || createSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<CreateSupplySourceResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("createSupplySource operation exceeds rate limit");
    }

    /**
     * (asynchronously) Create a new supply source.
     *
     * @param body A request to create a supply source. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call createSupplySourceAsync(
            CreateSupplySourceRequest body, final ApiCallback<CreateSupplySourceResponse> callback)
            throws ApiException, LWAException {

        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = createSupplySourceValidateBeforeCall(body, progressRequestListener);
        if (disableRateLimiting || createSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<CreateSupplySourceResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("createSupplySource operation exceeds rate limit");
    }
    /**
     * Build call for getSupplySource
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    private okhttp3.Call getSupplySourceCall(
            String supplySourceId, final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/supplySources/2020-07-01/supplySources/{supplySourceId}"
                .replaceAll("\\{" + "supplySourceId" + "\\}", apiClient.escapeString(supplySourceId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {};

        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        return apiClient.buildCall(
                localVarPath,
                "GET",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                progressRequestListener);
    }

    private okhttp3.Call getSupplySourceValidateBeforeCall(
            String supplySourceId, final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'supplySourceId' is set
        if (supplySourceId == null) {
            throw new ApiException(
                    "Missing the required parameter 'supplySourceId' when calling getSupplySource(Async)");
        }

        return getSupplySourceCall(supplySourceId, progressRequestListener);
    }

    /**
     * Retrieve a supply source.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @return SupplySource
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public SupplySource getSupplySource(String supplySourceId) throws ApiException, LWAException {
        ApiResponse<SupplySource> resp = getSupplySourceWithHttpInfo(supplySourceId);
        return resp.getData();
    }

    /**
     * Retrieve a supply source.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @return ApiResponse&lt;SupplySource&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<SupplySource> getSupplySourceWithHttpInfo(String supplySourceId)
            throws ApiException, LWAException {
        okhttp3.Call call = getSupplySourceValidateBeforeCall(supplySourceId, null);
        if (disableRateLimiting || getSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<SupplySource>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getSupplySource operation exceeds rate limit");
    }

    /**
     * (asynchronously) Retrieve a supply source.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getSupplySourceAsync(String supplySourceId, final ApiCallback<SupplySource> callback)
            throws ApiException, LWAException {

        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = getSupplySourceValidateBeforeCall(supplySourceId, progressRequestListener);
        if (disableRateLimiting || getSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<SupplySource>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getSupplySource operation exceeds rate limit");
    }
    /**
     * Build call for getSupplySources
     *
     * @param nextPageToken The pagination token to retrieve a specific page of results. (optional)
     * @param pageSize The number of supply sources to return per paginated request. (optional, default to 10.0)
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    private okhttp3.Call getSupplySourcesCall(
            String nextPageToken,
            BigDecimal pageSize,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/supplySources/2020-07-01/supplySources";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (nextPageToken != null)
            localVarQueryParams.addAll(apiClient.parameterToPair("nextPageToken", nextPageToken));
        if (pageSize != null) localVarQueryParams.addAll(apiClient.parameterToPair("pageSize", pageSize));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {};

        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        return apiClient.buildCall(
                localVarPath,
                "GET",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                progressRequestListener);
    }

    private okhttp3.Call getSupplySourcesValidateBeforeCall(
            String nextPageToken,
            BigDecimal pageSize,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {

        return getSupplySourcesCall(nextPageToken, pageSize, progressRequestListener);
    }

    /**
     * The path to retrieve paginated supply sources.
     *
     * @param nextPageToken The pagination token to retrieve a specific page of results. (optional)
     * @param pageSize The number of supply sources to return per paginated request. (optional, default to 10.0)
     * @return GetSupplySourcesResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public GetSupplySourcesResponse getSupplySources(String nextPageToken, BigDecimal pageSize)
            throws ApiException, LWAException {
        ApiResponse<GetSupplySourcesResponse> resp = getSupplySourcesWithHttpInfo(nextPageToken, pageSize);
        return resp.getData();
    }

    /**
     * The path to retrieve paginated supply sources.
     *
     * @param nextPageToken The pagination token to retrieve a specific page of results. (optional)
     * @param pageSize The number of supply sources to return per paginated request. (optional, default to 10.0)
     * @return ApiResponse&lt;GetSupplySourcesResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<GetSupplySourcesResponse> getSupplySourcesWithHttpInfo(String nextPageToken, BigDecimal pageSize)
            throws ApiException, LWAException {
        okhttp3.Call call = getSupplySourcesValidateBeforeCall(nextPageToken, pageSize, null);
        if (disableRateLimiting || getSupplySourcesBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetSupplySourcesResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getSupplySources operation exceeds rate limit");
    }

    /**
     * (asynchronously) The path to retrieve paginated supply sources.
     *
     * @param nextPageToken The pagination token to retrieve a specific page of results. (optional)
     * @param pageSize The number of supply sources to return per paginated request. (optional, default to 10.0)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getSupplySourcesAsync(
            String nextPageToken, BigDecimal pageSize, final ApiCallback<GetSupplySourcesResponse> callback)
            throws ApiException, LWAException {

        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = getSupplySourcesValidateBeforeCall(nextPageToken, pageSize, progressRequestListener);
        if (disableRateLimiting || getSupplySourcesBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetSupplySourcesResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getSupplySources operation exceeds rate limit");
    }
    /**
     * Build call for updateSupplySource
     *
     * @param supplySourceId The unique identitier of a supply source. (required)
     * @param body (optional)
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    private okhttp3.Call updateSupplySourceCall(
            String supplySourceId,
            UpdateSupplySourceRequest body,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/supplySources/2020-07-01/supplySources/{supplySourceId}"
                .replaceAll("\\{" + "supplySourceId" + "\\}", apiClient.escapeString(supplySourceId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {"application/json"};
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        return apiClient.buildCall(
                localVarPath,
                "PUT",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                progressRequestListener);
    }

    private okhttp3.Call updateSupplySourceValidateBeforeCall(
            String supplySourceId,
            UpdateSupplySourceRequest body,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'supplySourceId' is set
        if (supplySourceId == null) {
            throw new ApiException(
                    "Missing the required parameter 'supplySourceId' when calling updateSupplySource(Async)");
        }

        return updateSupplySourceCall(supplySourceId, body, progressRequestListener);
    }

    /**
     * Update the configuration and capabilities of a supply source.
     *
     * @param supplySourceId The unique identitier of a supply source. (required)
     * @param body (optional)
     * @return ErrorList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ErrorList updateSupplySource(String supplySourceId, UpdateSupplySourceRequest body)
            throws ApiException, LWAException {
        ApiResponse<ErrorList> resp = updateSupplySourceWithHttpInfo(supplySourceId, body);
        return resp.getData();
    }

    /**
     * Update the configuration and capabilities of a supply source.
     *
     * @param supplySourceId The unique identitier of a supply source. (required)
     * @param body (optional)
     * @return ApiResponse&lt;ErrorList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<ErrorList> updateSupplySourceWithHttpInfo(String supplySourceId, UpdateSupplySourceRequest body)
            throws ApiException, LWAException {
        okhttp3.Call call = updateSupplySourceValidateBeforeCall(supplySourceId, body, null);
        if (disableRateLimiting || updateSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ErrorList>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("updateSupplySource operation exceeds rate limit");
    }

    /**
     * (asynchronously) Update the configuration and capabilities of a supply source.
     *
     * @param supplySourceId The unique identitier of a supply source. (required)
     * @param body (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call updateSupplySourceAsync(
            String supplySourceId, UpdateSupplySourceRequest body, final ApiCallback<ErrorList> callback)
            throws ApiException, LWAException {

        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = updateSupplySourceValidateBeforeCall(supplySourceId, body, progressRequestListener);
        if (disableRateLimiting || updateSupplySourceBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ErrorList>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("updateSupplySource operation exceeds rate limit");
    }
    /**
     * Build call for updateSupplySourceStatus
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param body (optional)
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    private okhttp3.Call updateSupplySourceStatusCall(
            String supplySourceId,
            UpdateSupplySourceStatusRequest body,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/supplySources/2020-07-01/supplySources/{supplySourceId}/status"
                .replaceAll("\\{" + "supplySourceId" + "\\}", apiClient.escapeString(supplySourceId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {"application/json"};
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        return apiClient.buildCall(
                localVarPath,
                "PUT",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                progressRequestListener);
    }

    private okhttp3.Call updateSupplySourceStatusValidateBeforeCall(
            String supplySourceId,
            UpdateSupplySourceStatusRequest body,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'supplySourceId' is set
        if (supplySourceId == null) {
            throw new ApiException(
                    "Missing the required parameter 'supplySourceId' when calling updateSupplySourceStatus(Async)");
        }

        return updateSupplySourceStatusCall(supplySourceId, body, progressRequestListener);
    }

    /**
     * Update the status of a supply source.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param body (optional)
     * @return ErrorList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ErrorList updateSupplySourceStatus(String supplySourceId, UpdateSupplySourceStatusRequest body)
            throws ApiException, LWAException {
        ApiResponse<ErrorList> resp = updateSupplySourceStatusWithHttpInfo(supplySourceId, body);
        return resp.getData();
    }

    /**
     * Update the status of a supply source.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param body (optional)
     * @return ApiResponse&lt;ErrorList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<ErrorList> updateSupplySourceStatusWithHttpInfo(
            String supplySourceId, UpdateSupplySourceStatusRequest body) throws ApiException, LWAException {
        okhttp3.Call call = updateSupplySourceStatusValidateBeforeCall(supplySourceId, body, null);
        if (disableRateLimiting || updateSupplySourceStatusBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ErrorList>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("updateSupplySourceStatus operation exceeds rate limit");
    }

    /**
     * (asynchronously) Update the status of a supply source.
     *
     * @param supplySourceId The unique identifier of a supply source. (required)
     * @param body (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call updateSupplySourceStatusAsync(
            String supplySourceId, UpdateSupplySourceStatusRequest body, final ApiCallback<ErrorList> callback)
            throws ApiException, LWAException {

        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = updateSupplySourceStatusValidateBeforeCall(supplySourceId, body, progressRequestListener);
        if (disableRateLimiting || updateSupplySourceStatusBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ErrorList>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("updateSupplySourceStatus operation exceeds rate limit");
    }

    public static class Builder {
        private LWAAuthorizationCredentials lwaAuthorizationCredentials;
        private String endpoint;
        private LWAAccessTokenCache lwaAccessTokenCache;
        private Boolean disableAccessTokenCache = false;
        private Boolean disableRateLimiting = false;

        public Builder lwaAuthorizationCredentials(LWAAuthorizationCredentials lwaAuthorizationCredentials) {
            this.lwaAuthorizationCredentials = lwaAuthorizationCredentials;
            return this;
        }

        public Builder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        public Builder lwaAccessTokenCache(LWAAccessTokenCache lwaAccessTokenCache) {
            this.lwaAccessTokenCache = lwaAccessTokenCache;
            return this;
        }

        public Builder disableAccessTokenCache() {
            this.disableAccessTokenCache = true;
            return this;
        }

        public Builder disableRateLimiting() {
            this.disableRateLimiting = true;
            return this;
        }

        public SupplySourcesApi build() {
            if (lwaAuthorizationCredentials == null) {
                throw new RuntimeException("LWAAuthorizationCredentials not set");
            }

            if (StringUtil.isEmpty(endpoint)) {
                throw new RuntimeException("Endpoint not set");
            }

            LWAAuthorizationSigner lwaAuthorizationSigner = null;
            if (disableAccessTokenCache) {
                lwaAuthorizationSigner = new LWAAuthorizationSigner(lwaAuthorizationCredentials);
            } else {
                if (lwaAccessTokenCache == null) {
                    lwaAccessTokenCache = new LWAAccessTokenCacheImpl();
                }
                lwaAuthorizationSigner = new LWAAuthorizationSigner(lwaAuthorizationCredentials, lwaAccessTokenCache);
            }

            return new SupplySourcesApi(
                    new ApiClient()
                            .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                            .setBasePath(endpoint),
                    disableRateLimiting);
        }
    }
}

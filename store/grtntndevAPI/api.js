import axios from "axios"
const grtntndevAPI = axios.create({
  baseURL: "https://grtntn-dev-131827.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return grtntndevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function newconnectorsp657_get_testing_golmal_read(payload) {
  return grtntndevAPI.get(
    `/api/v1/connectors/newconnectorsp657/testing/golmal/`
  )
}
function api_v1_dcom_list(payload) {
  return grtntndevAPI.get(`/api/v1/dcom/`)
}
function api_v1_dcom_create(payload) {
  return grtntndevAPI.post(`/api/v1/dcom/`, payload)
}
function api_v1_dcom_retrieve(payload) {
  return grtntndevAPI.get(`/api/v1/dcom/${payload.id}/`)
}
function api_v1_dcom_update(payload) {
  return grtntndevAPI.put(`/api/v1/dcom/${payload.id}/`, payload)
}
function api_v1_dcom_partial_update(payload) {
  return grtntndevAPI.patch(`/api/v1/dcom/${payload.id}/`, payload)
}
function api_v1_dcom_destroy(payload) {
  return grtntndevAPI.delete(`/api/v1/dcom/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return grtntndevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return grtntndevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return grtntndevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return grtntndevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return grtntndevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return grtntndevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return grtntndevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return grtntndevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return grtntndevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return grtntndevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return grtntndevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return grtntndevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return grtntndevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  newconnectorsp657_get_testing_golmal_read,
  api_v1_dcom_list,
  api_v1_dcom_create,
  api_v1_dcom_retrieve,
  api_v1_dcom_update,
  api_v1_dcom_partial_update,
  api_v1_dcom_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

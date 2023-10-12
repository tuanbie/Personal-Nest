export const REQUEST_ID_TOKEN_HEADER = 'x-request-id';

export const FORWARDED_FOR_TOKEN_HEADER = 'x-forwarded-for';

export const MESSAGES = {
  GET_SUCCEED: 'get_succeed',
  CREATED_SUCCEED: 'created_model_succeed',
  DELETE_SUCCEED: 'delete_succeed',
  UPDATE_SUCCEED: 'update_succeed',
  UPDATE_OR_CREATE_SUCCEED: 'update_or_create_succeed',
  CANNOT_GET_DATA: 'cannot_get_data',
  CANNOT_CREATE: 'cannot_create_new_model',
  CANNOT_DELETE: 'Không thể xóa',
  CANNOT_UPDATE: 'Không thể cập nhật',
  CANNOT_UPDATE_OR_CREATE: 'Không thể thêm hoặc cập nhật',
  INSERT_SUCCEED: 'Thêm mới thành công',
  OK: 'ok',
  WRONG_PASSWORD: 'wrong_password',
  PERMISSION_DENIED: 'permission_denied',
  UNAUTHORIZED: 'Xác thực thất bại!',
  INVALID_TOKEN: 'invalid_token',
  CANNOT_UPLOAD_IMAGE: 'cannot_upload_image',
  INVALID_QUERY: 'invalid_query',
  INVALID_PARAM: 'invalid_param',
  UNAUTHORIZED_ADMIN: 'unauthorized_admin_request',
  NOT_FOUND_USER: 'Không tìm thấy tàu khoản',
  NOT_FOUND: 'Không tìm thấy',
  INVALID_CODE: 'invalid_code',
  VERIFY_SUCCESS: 'Xác thực thành công',
  CONFIRMED_ACCOUNT: 'Kích hoạt tài khoản thành công',
  UNCONFIRMED_ACCOUNT: 'Tài khoản chưa được kích hoạt',
  ROLE_NOT_FOUND: 'role_not_found',
  EMAIL_EXISTS: 'Email đã tồn tại',
  RESEND_SUCCESS: 'Gửi lại mã xác thực thành công',
  SENT_EMAIL_TO_RECOVER_PASSWORD: 'Đã gửi mail để khôi phục mật khẩu',
  USERNAME_EXISTS: 'Username đã tồn tại',
};

export const MAIL_TEMPLATE = {
  VERIFY_EMAIL_TEMPLATE: 'verify-email',
  FORGOT_PASSWORD_TEMPLATE: 'forgot-password',
  UPDATE_EMAIL_TEMPLATE: 'update-email',
};

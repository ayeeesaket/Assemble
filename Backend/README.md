# User Controller

### UNPROTECTED ROUTES
- REGISTER - `/api/users/register` ✅
    - VERIFY CODE - `/api/users/verifyCode` ✅
- LOGIN - `/api/users/login` ✅
- FORGOT USERNAME - `/api/users/forgotUsername` ✅
- FORGOT PASSWORD - `/api/users/forgotPasswordVerificationEmail` ✅
    - VERIFY CODE - `/api/users/forgotPasswordVerificationCode` ✅
    - RESET PASSWORD - `/api/users/forgotPassword` ✅

### PROTECTED ROUTES
- LOGOUT - `/api/users/logout` ✅
- ADD DETAILS - `/api/users/addDetails` ✅
- CHANGE EMAIL - `/api/users/changeEmail` ✅
    - VERIFY EMAIL - `/api/users/verifyNewEmail` ✅
- CHANGE USERNAME - `/api/users/changeUsername` ✅
- CHANGE PASSWORD - `/api/users/changePassword` ✅

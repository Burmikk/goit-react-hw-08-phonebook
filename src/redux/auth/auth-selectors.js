export const selectorLogin = state => state.auth.isLogin;
export const selectorUser = state => state.auth.users.name;
export const selectorToken = state => state.auth.token;
export const selectorError = state => state.auth.error;
export const selectorLoading = state => state.auth.loading;
export const selectorEmail = state => state.auth.users.email;

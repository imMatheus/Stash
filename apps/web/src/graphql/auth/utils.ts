export function setAuthToken(token: string) {
  localStorage.setItem("auth-token", token);
}

export function removeAuthToken() {
  localStorage.removeItem("auth-token");
}

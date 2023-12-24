const getTokenFromLocalStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const getToken = localStorage.getItem("token")
export const config = {
  headers: {
    Authorization: `Bearer ${getToken}`,
    Accept: "application/json",
  },
};
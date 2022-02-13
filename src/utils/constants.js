function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export const Authors = {
  human: getCookie('userEmail'),
  bot: "bot",
};
export const apiUrl = "https://www.boredapi.com/api/activity";

export const REQUEST_STATUS = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAIL: 3,
};

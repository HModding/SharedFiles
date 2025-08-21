if (typeof global === "undefined") global = window;
global.sleep = async function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

global.sanitizeUsername = function (username, forceLength = true) {
  // Remove all non-alphanumeric characters and replace spaces with underscores & 3-20 characters
  const sanitized = username.replace(/[^a-zA-Z0-9_]/g, '').replace(/\s+/g, '_');
  if (forceLength) {
    return sanitized.length < 3 ? 'user' : sanitized.length > 20 ? sanitized.substring(0, 20) : sanitized;
  } else { return sanitized; }
};

global.isUsernameValid = function (username) {
  // Check if the username is between 3 and 20 characters long and contains only alphanumeric characters and underscores
  const regex = /^[a-zA-Z0-9_]{3,20}$/;
  return regex.test(username);
};
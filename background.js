chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (
      details.type !== "main_frame" ||
      !details.url ||
      details.url.indexOf("twitter") === -1
    ) {
      return {};
    }

    const url = new URL(details.url);

    if (url.host === "mobile.twitter.com") {
      return {};
    }

    url.protocol = "https";
    url.host = "mobile.twitter.com";

    return { redirectUrl: url.toJSON() };
  },
  { urls: ["*://*.twitter.com/*", "*://twitter.com/*"] },
  ["blocking"]
);
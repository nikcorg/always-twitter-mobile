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

    if (
      url.host === "mobile.twitter.com" ||
      url.host === "blog.twitter.com" ||
      url.host === "developer.twitter.com"
    ) {
      return {};
    }

    url.protocol = "https";
    url.host = "mobile.twitter.com";

    if (url.pathname === "/intent/tweet" || url.pathname === "/share") {
      url.pathname = "/compose/tweet";
    }

    return { redirectUrl: url.toString() };
  },
  { urls: ["*://*.twitter.com/*", "*://twitter.com/*"] },
  ["blocking"]
);

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
      url.pathname.startsWith("/oauth") ||
      url.pathname.startsWith(
        "/account/personalization/download_advertiser_list.pdf"
      )
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
  { urls: ["*://www.twitter.com/*", "*://twitter.com/*"] },
  ["blocking"]
);

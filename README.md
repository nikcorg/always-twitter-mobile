# Always Twitter Mobile

The [mobile.twitter.com](https://mobile.twitter.com) website is the superior way for consuming Twitter. This browser extension ensures you will never have to suffer the poorer UX of the desktop website.

## Installing

Install the _Always Twitter Mobile_ browser extension:

- [Chrome](https://chrome.google.com/webstore/detail/always-twitter-mobile/hlllkhnplkipaaaiiebbahkigjkdepmk)
- [Firefox Addon](https://addons.mozilla.org/en-GB/firefox/addon/always-twitter-mobile/)

## Changelog

### 1.10

- Feature: strip some common tracking parameters

### 1.9

- Permissions: limit host permission to `twitter.com` and `www.twitter.com` only
- Refactor: remove host check in plugin code entirely

### 1.8

- Refactor: opt-out host check (match only `www.twitter.com` and `twitter.com`) instead of opt-in, which required maintaining list of known hosts

### 1.7

- Bugfix: allow requests to [Request Advertiser List](https://mobile.twitter.com/settings/your_twitter_data/audiences)

### 1.6

- Bugfix: allow requests to `/oauth`

### 1.5

- Bugfix: allow requests to `help.twitter.com`

### 1.4

- Bugfix: allow requests to `support.twitter.com`

### 1.3

- Bugfix: handle linking to `/share`
- Bugfix: allow request to some Twitter hosts
  - `developer.twitter.com`
  - `blog.twitter.com`

### 1.2

- Bugfix: direct linking to Compose Tweet has a different path on mobile

### 1.1

- Bugfix: don't rely on [`URL.toJSON()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/toJSON)

### 1.0

- Initial release

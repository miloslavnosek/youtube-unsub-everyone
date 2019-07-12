// ==UserScript==
// @name YTUnsubEveryone
// @namespace YouTube
// @match https://www.youtube.com/subscription_manager
// @grant none
// ==/UserScript==

window.unsub = init;

function getHeaders(yt) {
    return {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "X-YouTube-Client-Name": yt.config.get('INNERTUBE_CONTEXT_CLIENT_NAME'),
        "X-YouTube-Client-Version": yt.config.get('INNERTUBE_CONTEXT_CLIENT_VERSION'),
        "X-Youtube-Identity-Token": yt.config.get('ID_TOKEN'),
        "X-YouTube-Page-CL": yt.config.get('PAGE_CL'),
        "X-YouTube-Page-Label": yt.config.get('PAGE_BUILD_LABEL'),
        "X-YouTube-Variants-Checksum": yt.config.get('VARIANTS_CHECKSUM'),
        "X-YouTube-Utc-Offset": "120",
        "Content-Type": "application/x-www-form-urlencoded"
      };
}

function getBody(btn, sessionToken) {
    const data = btn.dataset;

    return `c=${data['channelExternalId']}&${data['clicktracking']}&session_token=${sessionToken}`;
}

function sendRequest(headers, body, channelId) {
    return fetch(`https://www.youtube.com/subscription_ajax?action_remove_subscriptions=1&c=${channelId}`, {
        "credentials": "include",
        "headers": headers,
        "referrer": "https://www.youtube.com/subscription_manager",
        "body": body,
        "method": "POST",
        "mode": "cors"
    });
}

function init() {
    const btns = document.querySelectorAll('.yt-uix-button.yt-uix-button-size-default.yt-uix-button-subscribed-branded');
    const sessionToken = document.querySelector("input[name='session_token']").value;

    btns.forEach((btn) => {
        const channelId = btn.dataset['channelExternalId'];
        const headers = getHeaders(window.yt);
        const body = getBody(btn, sessionToken);

        sendRequest(headers, body, channelId);
    });

}



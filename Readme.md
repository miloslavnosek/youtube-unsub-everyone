# youtube-unsub-everyone

This tiny script will help you unsubscribe channels in bulk and start over with clean sheet
or simply reduce the number of channels you subscribed to.
This solution relies on unsubscribe buttons shown on page so sadly, you can only unsubscribe one page at a time.

## Installation
### Convenient
- get userscript manager plugin for your browser such as TamperMonkey, ViolentMonkey etc..
- copypaste contents of js file in there

### Inconvenient
- copypaste contents of js file in your browser devtools console every time you want to use it
(you will need to do this on every refresh and browser location change)

## Usage
- go to https://www.youtube.com/subscription_manager
- open up your browser devtools (most browser have it bound to F12)
- go to console tab
- type `unsub()`
- wait couple of seconds depending on your connection
- refresh the page or use pagination on the bottom of the page to show next page,
- type `unsub()` again and repeat the steps until you have number of subscriptions you are happy with

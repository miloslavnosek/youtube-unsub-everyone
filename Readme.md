# youtube-unsub-everyone

This tiny script will help you unsubscribe channels in bulk and start over with clean sheet
or simply reduce the number of channels you subscribed to.
Small caveat: this solution relies on unsubscribe buttons so you can only unsubscribe channels shown on webpage when you start the script which shouldn't be a big problem since youtube shows dozens at a time.

## Installation
### The easy way
- get userscript manager plugin for your browser such as TamperMonkey, ViolentMonkey etc..
- create a new userscript with code from js file in this repository

### The hard way
- copypaste contents of js file in your browser devtools console every time you want to use it
(you will need to do this on every refresh and browser location change)

## Usage
- go to https://www.youtube.com/subscription_manager
- open up your browser devtools (most browsers have it bound to F12)
- go to console tab
- type `unsub()`
- wait couple of seconds depending on your connection
- refresh the page or use pagination on the bottom of the page to show next page,
- type `unsub()` again and repeat the steps until you have number of subscriptions you are happy with

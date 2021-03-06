## Getting Started

Follow these steps to run NauTab in Google Chrome as a developer.

- Open the url chrome://extensions/ in Google Chrome.
- Click to enable *Developer mode* so that you see developer options.
- Click the "Load unpackaged extensions..."
- Browse to the location where iChrome repo is installed, and select the sub-directory `app` as the extension source.
- When you make change to the code for the tab page, just reload the tab.

## The Code

This is a side project that I want to experience again the beauty of Vanilla JS, HTML & CSS. I decided to write everything using pure JS (with some ES6 syntax), HTML and CSS without any kind of processor, compiler or bundler.

No compilation process involved, so the browsers need to support basic ES6 syntax and new API. Some noteworthy ES6 API used in the code:

- Arrow functions
- Template strings
- New block scope variable keywords (let, const)
- ES6 Array & String API
- __Fetch API__


### Minimum supported browser:

- Chrome 42 (install from [here](https://chrome.google.com/webstore/detail/nau-tab/pimockeojlggmlnknhicajgckmlggifa?hl=en))
- Opera 29 (install from [here](https://chrome.google.com/webstore/detail/nau-tab/pimockeojlggmlnknhicajgckmlggifa?hl=en))
- Firefox 45 (get the installable .xpi files [here](https://github.com/trongthanh/nau-chrome-tab/releases).)
- Edge 14 (as home page, point to [here](https://naustud.io/start/))
- Safari 10.1 (as home page, point to [here](https://naustud.io/start/))

### Build and Package

The gulpfile and build scripts were generated by Yeoman. While they are not being used. I will keep them in case parts of the process needs automation.

## License

Copyright 2016 Thanh Tran - Int3ractive.com. Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)


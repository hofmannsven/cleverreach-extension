# CleverReach WordPress Extension 

[![WordPress](https://img.shields.io/wordpress/v/github/hofmannsven/cleverreach-extension.svg?style=flat-square)](https://wordpress.org/plugins/cleverreach-extension/)
[![GitHub license](https://img.shields.io/badge/license-GPLv3-blue.svg?style=flat-square)](https://raw.githubusercontent.com/hofmannsven/cleverreach-extension/master/LICENSE.md)
[![Code Climate](https://img.shields.io/codeclimate/github/hofmannsven/cleverreach-extension.svg?style=flat-square)](https://codeclimate.com/github/hofmannsven/cleverreach-extension)

The [CleverReach Extension for WordPress](https://wordpress.org/plugins/cleverreach-extension/) provides an easy way to embed your CleverReach sign-up form anywhere on your website.

It's a simple interface for [CleverReach](https://www.cleverreach.com/) newsletter software using the [official CleverReach SOAP API](https://api.cleverreach.com/soap/doc/5.0/).

### Features
* Embed your CleverReach sign-up form anywhere on your website
* Smooth form submission using ajax (no page reload required)
* Double opt-in according to your CleverReach configuration
* Extremely lightweight plugin
* Many hooks for developers to customize forms, selectors, response messages and ajax requests

Further documentation can be found on the [Wiki](https://github.com/hofmannsven/cleverreach-extension/wiki).

### Integrations
* [Contact Form 7](https://github.com/hofmannsven/cleverreach-extension/wiki/Contact-Form-7)
* [Visual Composer](https://vc.wpbakery.com/)

### Languages
* Dutch
* English
* French
* German
* Luxembourgish
* Russian
* Spanish (incomplete)

### Looking ahead
* Support for WordPress widgets
* Support for [CleverReach REST API](https://rest.cleverreach.com/explorer/)


*** 


## Installation

### Requirements
Using the latest version of WordPress and PHP is highly recommended.

* WordPress 4.0 or newer
* PHP 5.3.0 or newer (also tested with PHP 7)
* PHP SOAP extension
* CleverReach API key

### Using WP-CLI
1. Install and activate: `wp plugin install cleverreach-extension --activate`

### Using Composer
1. Install: `composer require hofmannsven/cleverreach-extension`
2. Activate the plugin on the plugin dashboard

### Using WordPress
1. Navigate to the plugins dashboard and select _Add New_
2. Search for _CleverReach Extension_
3. Click _Install Now_
4. Activate the plugin on the plugin dashboard

### Using SFTP
1. Unzip the download package
2. Upload `cleverreach-extension` folder to your plugins directory
3. Activate the plugin on the plugin dashboard


*** 


## Support

Always feel free to [raise an issue](https://github.com/hofmannsven/cleverreach-extension/issues) on GitHub.

If you discover a security issue, please contact me directly via email.
My GPG fingerprint/key is available on [keybase](https://keybase.io/hofmannsven).


*** 


## Frequently Asked Questions

#### Why would I use the API instead of the source code provided within my CleverReach account?
Using the API will allow you to push and pull data from CleverReach. 
This allows things like smooth form submission via Ajax and custom error handling.

#### Is it secure?
We heavily rely on the security of CleverReach which is [tested and verified](https://www.cleverreach.com/security) according to German standards.
No customer data is stored within your WordPress database.

#### Having problems with the PHP SOAP Extension?
Check the [PHP SOAP wiki page](https://github.com/hofmannsven/cleverreach-extension/wiki/PHP-SOAP-Extension) for further information.

#### How can I customize the sign-up form or the error messages?
Check the [Wiki](https://github.com/hofmannsven/cleverreach-extension/wiki) for further information.


*** 


## License

According to WordPress the plugin license is [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt) (or later).

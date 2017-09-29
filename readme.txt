=== CleverReach Extension ===

Contributors: hofmannsven
Tags: cleverreach, email, newsletter, sign-up, opt-in, form, ajax

Requires at least: 4.0
Tested up to: 4.5
Requires PHP: 5.6
Stable tag: 0.3.0

License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.txt

Simple interface for CleverReach newsletter software using the official CleverReach SOAP API.


== Description ==

The CleverReach Extension for WordPress provides an easy way to embed your [CleverReach](https://www.cleverreach.com/) sign-up form anywhere on your website.

= Features =
* Embed your CleverReach sign-up form anywhere on your website
* Smooth form submission using ajax (no page reload required)
* Double opt-in according to your CleverReach configuration
* Extremely lightweight plugin
* Many hooks for developers to customize forms, selectors, response messages and ajax requests

Further documentation can be found on the [Wiki](https://github.com/hofmannsven/cleverreach-extension/wiki).

= Integrations =
* [Contact Form 7](https://github.com/hofmannsven/cleverreach-extension/wiki/Contact-Form-7)
* [Visual Composer](https://vc.wpbakery.com/)

= Languages =
* Dutch
* English
* French
* German
* Luxembourgish
* Russian
* Spanish (incomplete)

= Looking ahead =
* Support for WordPress widgets
* Support for [CleverReach REST API](https://rest.cleverreach.com/explorer/)


== Installation ==

= Requirements =
Using the latest version of WordPress and PHP is highly recommended.

* WordPress 4.0 or newer
* PHP 5.3.0 or newer (also tested with PHP 7)
* PHP SOAP extension
* CleverReach API key

= Using WP-CLI =
1. Install and activate: `wp plugin install cleverreach-extension --activate`

= Using Composer =
1. Install: `composer require hofmannsven/cleverreach-extension:dev-master`
2. Activate the plugin on the plugin dashboard

= Using the WordPress dashboard =
1. Navigate to the plugins dashboard and select _Add New_
2. Search for _CleverReach Extension_
3. Click _Install Now_
4. Activate the plugin on the plugin dashboard

= Using SFTP =
1. Unzip the download package
2. Upload `cleverreach-extension` folder to your plugins directory
3. Activate the plugin on the plugin dashboard


== Support ==

Always feel free to [raise an issue](https://github.com/hofmannsven/cleverreach-extension/issues) on GitHub.

If discover a security issue, please contact me directly via email.
My GPG fingerprint/key is available on [keybase](https://keybase.io/hofmannsven).


== Frequently Asked Questions ==

= Why would I use the API instead of the source code provided within my CleverReach account? =
Using the API will allow you to push and pull data from CleverReach.
This allows things like smooth form submission via Ajax and custom error handling.

= Is it secure? =
We heavily rely on the security of CleverReach which is [tested and verified](https://www.cleverreach.com/security) according to German standards.
No customer data is stored within your WordPress database.

= Having problems with the PHP SOAP Extension? =
Check the [PHP SOAP wiki page](https://github.com/hofmannsven/cleverreach-extension/wiki/PHP-SOAP-Extension) for further information.

= How can I customize the sign-up form or the error messages? =
Check the [Wiki](https://github.com/hofmannsven/cleverreach-extension/wiki) for further information.

= I'm having issues getting the plugin to work what should I do? =
See [CleverReach Extension on GitHub](https://github.com/hofmannsven/cleverreach-extension) for a detailed rundown of common issues.

= Where can I get more information and support for this plugin? =
Follow [CleverReach Extension on GitHub](https://github.com/hofmannsven/cleverreach-extension)


== Screenshots ==

1. Animated screenshot of the plugin admin settings page


== Changelog ==

= 0.3.0 =
* Supports multiple forms on one page
* Supports [custom ajax requests](https://github.com/hofmannsven/cleverreach-extension/wiki/Custom-ajax-requests)
* Loads scripts only if needed
* Cached API calls
* Contact Form 7 plugin integration
* Even better admin interaction and shortcode preview
* Option to toggle ajax usage for default forms
* Code cleanup and even better [documentation](https://github.com/hofmannsven/cleverreach-extension/wiki)
* [Integration test suite](https://github.com/hofmannsven/cleverreach-extension/blob/master/tests/README.md)

= 0.2.0 =
* Reworked admin interaction
* Adds Spanish & Russian translation
* Visual Composer plugin integration
* Better file handling, code cleanup and documentation

= 0.1.0 =
* [Initial release](https://code64.de/visionerdy/cleverreach-extension-wordpress/)

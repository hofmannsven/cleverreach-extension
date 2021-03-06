# CleverReach Extension Test Suite

[![PHP](https://img.shields.io/badge/php-%3E%3D%205.6-8892BF.svg?style=flat-square)](https://php.net)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/hofmannsven/cleverreach-extension.svg?style=flat-square)](https://codeclimate.com/github/hofmannsven/cleverreach-extension/coverage)

## Requirements

Using the latest version of WordPress and PHP is highly recommended.
PHPUnit 5.3 is supported on PHP 5.6 and PHP 7.


## Up and running

1. Provide your own testing environment variables within your `phpunit.xml` file based on `phpunit.xml.dist`
2. Install composer dependencies: `composer install`
3. Run unit and integration tests: `phpunit`


## Testsuites & Groups

It's also possible to only run specific tests.


### Testsuites

Currently there is one test suite that can be run via the `--testsuite` option:

- `--testsuite Integration`


### Groups

Groups are available via the `--group` option for tested objects.


## Testdox

Testdox can be viewed via the `--testdox` option.


## Coverage

Test coverage can be generated ([Xdebug](https://xdebug.org/) extension required) via the `--coverage-html` option.
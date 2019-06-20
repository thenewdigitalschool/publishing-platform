[trello]: https://trello.com/b/PaEUhd0e/publishing-platform
[build-page]: https://semaphoreci.com/justo/publishing-platform
[production]: https://thenewdigitalschool.github.io/publishing-platform/

# Publishing Platform

[![Build Status](https://semaphoreci.com/api/v1/justo/publishing-platform/branches/master/badge.svg)](https://semaphoreci.com/justo/publishing-platform)

- [Trello][trello]
- [Build Page][build-page]
- [Production](https://tndsblog.netlify.com)

Platform to publish TNDS student's case studies

**Table of Contents**

- [Installation](#installation)
- [Setup](#setup)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [About](#about)

## Installation

Before starting, make sure you have the following dependencies installed on your system:

- Node.js version 9.5 or above;
- Yarn;

if you have `node` and `npm` you can install `yarn` by running:

```bash
npm i -g yarn
```

## Setup

First, clone & setup the repository:

```bash
git clone git@github.com:thenewdigitalschool/publishing-platform.git
cd publishing-platform
yarn start
```

## Development

To start your development environment run:

```bash
yarn develop
```

This will start the gatsby application.
This project uses gatsby to watch and compile assets.
To build the assets only once, not watching for changes, run:

```bash
yarn build
```

## Testing

To run the test suit run:

```bash
yarn test
```

## Deployment

This project has automatic deploys enabled on branch master. Check [build page][build-page] for manual deploys or run:

```bash
yarn deploy
```

## Contribution Guidelines

Contributions must follow [Airbnb's guides](https://github.com/airbnb/javascript).

## About

Publishing Platform is maintained by [TNDS](http://thenewdigitalschool.com/).

[![TNDS](http://thenewdigitalschool.com/template/assets/images/tnds_logo_white.svg)](http://thenewdigitalschool.com)

If you need to contact the maintainer, you may <a href="mailto:hi@thenewdigitalschool.com">reach out to us</a>

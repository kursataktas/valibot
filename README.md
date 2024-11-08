# Valibot Library

[![Build Status](https://travis-ci.org/username/valibot.svg?branch=master)](https://travis-ci.org/username/valibot) [![Coverage Status](https://coveralls.io/repos/github/username/valibot/badge.svg?branch=master)](https://coveralls.io/github/username/valibot?branch=master) [![Gurubase](https://img.shields.io/badge/Gurubase-Ask%20Valibot%20Guru-006BFF)](https://gurubase.io/g/valibot)

Valibot is a powerful validation library for JavaScript applications. It provides a simple and intuitive API to validate data structures and ensure data integrity.

## Features

- Easy to use and integrate
- Supports complex data structures
- Customizable validation rules
- Lightweight and fast

## Installation

You can install Valibot using npm:

```bash
npm install valibot
```

## Usage

Here's a simple example of how to use Valibot:

```javascript
const valibot = require('valibot');

const schema = valibot.object({
  name: valibot.string().required(),
  age: valibot.number().min(18)
});

const data = {
  name: 'John Doe',
  age: 25
};

const result = schema.validate(data);

if (result.isValid) {
  console.log('Data is valid!');
} else {
  console.log('Validation errors:', result.errors);
}
```

## Documentation

For more information about how to get started with Valibot, check our official documentation. Resources for JavaScript developers can be found in the Valibot documentation. You can also ask [Valibot Guru](https://gurubase.io/g/valibot), it is a Valibot-focused AI to answer your questions.

## Contributing

We welcome contributions to Valibot! Please see our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

Valibot is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
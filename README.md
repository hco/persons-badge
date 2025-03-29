# Persons Badge

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![Open your Home Assistant instance and add this repository to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=hco&repository=persons-badge&category=dashboard)

A custom badge for Home Assistant that displays profile pictures of persons who are currently at home.

## Features

- Shows profile pictures of persons who are currently at home
- Click on a person's picture to show more information
- Hover effect to enlarge the picture
- Automatically updates when person states change

## Installation

**Prerequisites**: You need to have [HACS](https://hacs.xyz/) installed in your Home Assistant instance.

### HACS (Recommended)

1. Click on the button above to open HACS, or manually add this repository: `hco/persons-badge`
2. Search for "Persons Badge" in the Frontend section
3. Click Install
4. Add the badge to your dashboard (see Usage below)
5. Restart Home Assistant

### Manual Installation

1. Download the `persons-badge.js` file from the latest release
2. Copy it to `config/www/community/persons-badge/` directory
3. Add the following to your `configuration.yaml`:

```yaml
frontend:
  extra_module_url:
    - /local/community/persons-badge/persons-badge.js
```

4. Restart Home Assistant

## Usage

Add this to your dashboard configuration:

```yaml
badges:
  - type: "custom:persons-badge"
```

## Options

| Name | Type   | Required | Default | Description                    |
| ---- | ------ | -------- | ------- | ------------------------------ |
| type | string | yes      | -       | Must be `custom:persons-badge` |

## Screenshots

![Persons Badge Screenshot](docs/images/screenshot.png)

## Credits

Created by [Your Name]

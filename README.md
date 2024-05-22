# Supersite Starter

This is a starter to create a future project. This repo will be sync and evaluate after one project is done.

This repo is use CloudCannon as the backend.

## Files

### data
Data is a place for site config.

### public
Public for assets so can access it by browser. Images, favicon, robot live in this directory.

### schemas
Control field for post type (just like CPT in WordPress's term). All fields here should be match with `src/content/config.ts`

### src/layout
All files under layout should be here. Like header, footer, and other layout.

### Tailwind
This starter is using Tailwind CSS, located in `src/styles/tailwind.css`

### CloudCannon
All field is configured via `cloudcannon.config.yml`. The documentation is here https://cloudcannon.com/documentation/articles/boolean-inputs/


## How
- Clone this repo
- `rm -R .git` to remove git directory
- `git init` to create a new git initilzatio
- start developing

## What need to change
- tailwind.config.cjs to change color theme
- data
- Google analytic


## Todo
- [ ] Find alternative analytic plugin, the current one have unresolve issue https://github.com/Destiner/astro-analytics/issues/29

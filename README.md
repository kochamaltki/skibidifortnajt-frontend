# Project Setup
### Installing Dependencies
To install all the required dependencies run the following commands in the project's root directory:
```sh
npm install
```

### Rendering the Website
To locally host the website run the following commands:
```sh
npm run dev
```

# Contributing
### Create a branch for the feature you want to add and name it accordingly
Make sure you have the newest code to minimize conflicts by first pulling the most recent code from the main branch.
```sh
git pull origin main
git branch -b your_branch_name
```
Alternatively you can use the script provided by the repo which pulls the most recent main version and creates a new branch from that:
```sh
./new-feature your_branch_name
```

### Commit all your changes
Make sure you commit your changes frequently. Ideally commit all major changes separately.
```sh
git add .
git commit -m "commit message"
```

### Push your updates to github
You can also delete your branch locally as it is no longer needed (unless you want to further develop said branch).
```sh
git push origin your_branch_name
```
```sh
git branch --delete your_branch_name
```

### Merge your branch on github
If your feature is done and production-ready you can merge your developement branch with the main one on github.

# Testing
### To make sure your component works remember to write a test for it
To create a test for your component create a `Component.test.ts` in the component's directory. An example test checking if the component renders would look like this:
```ts
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import Component from './Component.svelte'

describe('Component.svelte', () => {
	it('check if the component renders', () => {
		const { container } = render(Profile);
		expect(container).toBeTruthy();
	})
})
```

# Epik prodżekt na informatik in Staszyc
![screenshot](./.github/screenshot.png)

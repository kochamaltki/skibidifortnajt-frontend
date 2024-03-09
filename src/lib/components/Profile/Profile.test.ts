import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/svelte'
import Profile from './Profile.svelte'

describe('Profile.svelte', () => {
	afterEach(() => cleanup())

	let name: string = "Test Name";
	it('mounts', () => {
		const { container } = render(Profile, {
			displayName: name
		});
		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain(name);
	})
})

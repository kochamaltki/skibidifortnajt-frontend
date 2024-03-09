import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import Profile from './Profile.svelte'

describe('Profile.svelte', () => {
	let name: string = "Test Name";
	it('renders and has proper values', () => {
		const { container } = render(Profile, {
			displayName: name
		});
		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain(name);
	})
})

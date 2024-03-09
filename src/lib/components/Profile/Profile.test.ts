import { afterEach, describe, it } from 'vitest'
import { cleanup, render } from '@testing-library/svelte'
import Profile from './Profile.svelte'

describe('Profile.svelte', () => {
	afterEach(() => cleanup())

	it('mounts', () => {
		render(Profile)
	})
})

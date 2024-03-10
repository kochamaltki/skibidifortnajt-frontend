import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import Post from './Post.svelte'

describe('Profile.svelte', () => {
	it('renders and has proper values', () => {
		const { container } = render(Post)
		expect(container).toBeTruthy();
	})
})

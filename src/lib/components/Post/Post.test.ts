import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import Post from './Post.svelte'

describe('Profile.svelte', () => {
	let posted: number = new Date() - 5*60*1000;

	it('renders and has proper values', () => {
		const { container } = render(Post, {
			timePosted: posted
		})
		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain("5 minutes ago")
	})
})

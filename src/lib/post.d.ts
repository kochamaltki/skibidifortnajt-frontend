export interface Post {
	datePosted: number;
	content: string;
	likeCount: number;
	postId: number;
	displayName: string;
	userId: number;
	images: Array<string>;
	profilePicture: string;
	username: string;
}

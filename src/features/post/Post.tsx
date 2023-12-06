import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import styles from "./Post.module.css";
import { fetchPosts } from "./postFetch";
import TruncatedH2 from "../../utils/TruncatedH2";

//The Post component renders all the tiles with the correct data fetched from the Reddit API, via postFetch.ts
export function Post() {
	const dispatch = useAppDispatch();
	const posts = useAppSelector((state) => state.post.data);
	const loading = useAppSelector((state) => state.post.loading);
	const error = useAppSelector((state) => state.post.error);
	const selectedSubreddit = useAppSelector((state) => state.input.selectedSubreddit);
	const term = useAppSelector((state) => state.search.searchTerm);
	const filteredPosts = posts.filter((post: any) => post.title.toLowerCase().includes(term.toLowerCase()));

	useEffect(() => {
		dispatch(fetchPosts(undefined, selectedSubreddit));
	}, [dispatch, selectedSubreddit]);

	//Initial loading state has an animation to show something is happening
	if (loading) {
		return (
			<div>
				<img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="Loading..." />
			</div>
		);
	};
	
	//Animation, for example when wrong subreddit is input
	if (error) {
		return (
			<div>
				<p>Something seems to be wrong... Try changing the subreddit.</p>
				<img src="https://i.giphy.com/media/Vu7FU5T4RJPo1esgna/giphy.webp" alt="An Error has occurred..." />
			</div>
		);
	}

	//Configuration of the displayed date 
	const options: any = {
		year: '2-digit',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
	};

	//To check in the browser console if API call was successfull. Not necessary, can be deleted
	console.log(posts);

	return (
		<div className={styles["outer-container"]}>
			{filteredPosts.map((post: any) => (
				<div className={styles.container} key={post.id}>
					<div className={styles.arrows}>
						<span role="img" aria-label="Arrow Up">
							⬆️
						</span>
						{post.ups}
						<span role="img" aria-label="Arrow Down">
							⬇️
						</span>
					</div>
					<div className={styles.headline}>
						<a
							key={post.id}
							href={post.url}
							target="_blank">
							<TruncatedH2 text={post.title} maxChars={58} />
						</a>
					</div>
					<div className={styles.image}>
						{/* Makes sure that the reddit fallback logo is shown when the thumbnail is not a URL. There probably is a more elegant way to solve it*/}
						{post.thumbnail !== "self" && post.thumbnail !== "defaul" && post.thumbnail !== "image" && !post.thumbnail.includes("external") &&
						 post.thumbnail !== "nsfw" && post.thumbnail !== "" && post.thumbnail !== "spoiler" ? (
							<img src={post.thumbnail} alt="Thumbnail" />
						) : (
							<img src="https://www.redditinc.com/assets/images/site/Reddit_Icon_FullColor-1_2023-11-29-161416_munx.jpg" alt="Fallback Thumbnail" />
						)}
					</div>
					<div className={styles.subline}>
						<p>Creator: {post.author}</p>
						<p>Posted: {new Date(post.created_utc * 1000).toLocaleString(undefined, options)}</p>
						<p>Comments: {post.num_comments}</p>
					</div>
				</div>
			))}
		</div>
	);
}


import { fetchPostRequest, fetchPostSuccess, fetchPostFailure } from "./postSlice";



// This is the implementation of the JSON API
export const fetchPosts = (limit = 15, subreddit = "popular") => {
    return async (dispatch: any) => {
      dispatch(fetchPostRequest());
  
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=${limit}`);
        const data = await response.json();
        const posts = data.data.children.map((post: any) => post.data);
  
        dispatch(fetchPostSuccess(posts));
      } catch (error) {
        dispatch(fetchPostFailure((error as Error).message));
      }
    };
  };




/*
//This is the implementation of the OAuth API

// Replace 'YOUR_CLIENT_ID' and 'YOUR_CLIENT_SECRET' with your actual Reddit app credentials
const CLIENT_ID = 'XXXXX';
const CLIENT_SECRET = 'XXXX';
const REDDIT_API_URL = 'https://oauth.reddit.com';

export const fetchPosts = (limit = 5) => {
  return async (dispatch: any) => {
    dispatch(fetchPostRequest());

    try {
      // Step 1: Obtain OAuth token
      const tokenResponse = await fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: 'grant_type=client_credentials',
      });

      const tokenData = await tokenResponse.json();

      // Step 2: Make authenticated API request
      const response = await fetch(`${REDDIT_API_URL}/r/popular.json?limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
        },
      });

      const data = await response.json();

      console.log(data); // Log the data to inspect its structure

      const posts = data.data.children.map((post: any) => post.data);

      dispatch(fetchPostSuccess(posts));
    } catch (error) {
      dispatch(fetchPostFailure((error as Error).message));
    }
  };
};
*/

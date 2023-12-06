import { render, screen } from "@testing-library/react";
import { fetchPosts } from "./features/post/postFetch";
import { Post } from "./features/post/Post";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
} from "./features/post/postSlice";
import { Provider } from "react-redux";
import { store } from "./app/store";

//Some tests; need some fleshing out

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Post component', () => {
  test('renders loading state', () => {
    render(
      <Provider store={store}>
        <Post />
      </Provider>
    );

  });
});


describe('postSlice actions', () => {
  test('fetchPostRequest action', () => {
    const expectedAction = {
      type: 'post/fetchPostRequest',
    };
    expect(fetchPostRequest()).toEqual(expectedAction);
  });

  test('fetchPostSuccess action', () => {
    const payload = [{ /* insert post data */ }];
    const expectedAction = {
      type: 'post/fetchPostSuccess',
      payload,
    };
    expect(fetchPostSuccess(payload)).toEqual(expectedAction);
  });

  test('fetchPostFailure action', () => {
    const error = { message: 'Error message' };
    const expectedAction = {
      type: 'post/fetchPostFailure',
      payload: error,
    };
    expect(fetchPostFailure(error)).toEqual(expectedAction);
  });

});

describe('postSlice async actions', () => {
  test('async action fetchPosts', async () => {
    const store = mockStore({ post: { data: [], loading: false, error: null } });

    const responseData = [{ /* insert post data */ }];

    const asyncAction: any = fetchPosts();

    await store.dispatch(asyncAction);

    const expectedActions = [
      { type: 'post/fetchPostRequest' },
      { type: 'post/fetchPostSuccess', payload: responseData },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

});
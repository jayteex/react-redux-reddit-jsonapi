import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSelectedSubreddit } from "./inputSlice";
import "../../App.css";

//Input field, that lets the user type the subreddit that want to display in the app 
export function Input() {
    const selectedSubreddit = useAppSelector((state) => state.input.selectedSubreddit);
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState(selectedSubreddit);

    const handleSubredditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setSelectedSubreddit(inputValue));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="subreddit">Select Subreddit: </label>
                <input
                    type="text"
                    id="subreddit"
                    value={inputValue}
                    onChange={handleSubredditChange}
                    placeholder="Enter subreddit name..."
                />
            </div>
            <p>Some other popular subreddits are: funny, gaming, movies, news, programming, etc.</p>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );

}
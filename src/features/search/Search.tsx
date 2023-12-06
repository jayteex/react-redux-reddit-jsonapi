import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSearchTerm } from "./searchSlice";
import "../../App.css";

//Search component, that lets the user search the headlines of the posts that have been fetched from Reddit
export function Search() {
    const searchTerm = useAppSelector((state) => state.search.searchTerm);
    const dispatch = useAppDispatch();

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    };





    return (

        <form>
            <div>
                <label htmlFor="search">Search by headline: </label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder="Enter search term..."
                />
            </div>
        </form>

    );

}
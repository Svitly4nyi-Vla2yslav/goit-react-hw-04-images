
import React, { Component } from 'react'
import { ImSearch } from 'react-icons/im'
// import { toast } from 'react-toastify'
import Notiflix from 'notiflix';
import './Searchbar.css'
export class Searchbar extends Component {
    state = {
        searchQuery: '',
    }
    handleChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.searchQuery.trim() === '') {
            Notiflix.Notify.failure('Please enter your search query!🙏')
            return;
        }
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' })
    }

    render() {

        return (
            <header onSubmit={this.handleSubmit} className="searchbar">
                <form className="form">
                    <button
                        type="submit"
                        className="Search-button"
                    >
                        <ImSearch style={{ marginRight: 8 }} />
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        name='search'
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
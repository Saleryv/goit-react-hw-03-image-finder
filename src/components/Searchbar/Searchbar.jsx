import { Component } from "react";
import css from "../Searchbar/Searchbar.module.css"

export class Searchbar extends Component{
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.query === ''){
            return;
        }

        this.props.onSubmit(this.state.query);
        this.setState({
            query: '',
        });
    }

render(){
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                    <span 
                    className={css.SearchFormLabel}>Search...</span>
                </button>
                <input onInput={this.handleChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            />
            </form>
        </header>
    )

}





}

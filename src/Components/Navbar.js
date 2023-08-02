import React from 'react'
import { handleMovieSearch } from '../action';
 class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:'',
        };
    }
    handleSearch = () =>{

       const {searchText} =this.state;
        this.props.dispatch(handleMovieSearch(searchText));

    }
    handleChange = (e) => {
        this.setState({
            searchText:e.target.value
        })
    }

    render(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="w-100 d-flex align-items-center justify-content-center">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search"  onChange={this.handleChange} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSearch}>Search</button>
                </form>
                </div>
            </nav>
        </>
    )
}
}

export default Navbar;
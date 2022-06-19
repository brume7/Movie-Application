const SearchBox = (props) => {

    return(
        <div style={{border: 'none', marginLeft: '-35%', padding: '0%'}} className="col col-sm-4">
            <input
            className="form-control"
            value={props.value}
            onChange={ (event) => props.setSearchValue(event.target.value)}
            placeholder="Type to search...."
            />
        </div>
    )
}

export default SearchBox;
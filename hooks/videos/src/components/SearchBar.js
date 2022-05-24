import React from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = React.useState([''])
 


    return (
      <div className="search-bar ui segment">
        <form onSubmit={()=>{onFormSubmit(term)}} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={(event)=>{setTerm(event.target.value)}}
            />
          </div>
        </form>
      </div>
    );

}

export default SearchBar;

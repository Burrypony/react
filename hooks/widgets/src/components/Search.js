import React, { useEffect } from "react";

const Search = () =>{
    const [term, setTerm ] = React.useState('')

    

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label >Enter Search Term</label>
                    <input value={term} onChange = {e => setTerm(e.target.value)} className="input" type="text" />
                </div>
            </div>
        </div>
    )
}

export default Search
import React, { useEffect } from "react";

const Dropdown = ({options, selected, onSelectedChange}) =>{
    const [open, setOpen] = React.useState(false)

    useEffect(()=>{
        document.body.addEventListener('click',() =>{
            setOpen(!open)
        })
    },[])

    const renderedOptions = options.map((option) =>{

        if(option.value === selected.value){
            return null;
        }

        return(
            <div key={option.value} className="item" onClick={()=>onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })


    return (
        <div className="ui form">
            <div className="field">
                <label className="lable">Select a Color</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open?'visisble active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${open?'visible transition':''}`}>
                         {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
export default function Numbers(props){
    console.log(props)
    const numberElements = props.data.map(el =>(
        <button key={el.id} onClick={() => props.setActiveNumber(el.id)} className={el.active?'active':'passive'}>
            {el.value}
        </button>
    ))

    return (<div className="App-Numbers">{numberElements}</div>)
}
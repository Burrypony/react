export default function FirstPage({className,setOpenSecondPage}){
    return(
        <section className={`${className} firstPage`}>
            <h1 className="firstPageH1">Quizzical</h1>
            <h3 className="firstPageH3">Some description if needed</h3>
            <button className="firstPageButton" onClick={()=>setOpenSecondPage(true)}>Start quiz</button>
        </section>
        
    )
}
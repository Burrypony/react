
// const h1 = document.createElement("h1")
// h1.textContent = "Test"
// document.getElementById("root").append(h1)
// console.log(h1);



// const element = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )


const nav = (
    <nav>
        <h1>Brand Name</h1>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>   
)
ReactDOM.render(nav, document.getElementById("root"))

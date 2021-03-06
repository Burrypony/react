import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {

    return (
        <div>
            <h1>Header!</h1>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit' component={StreamEdit} />
                    <Route path='/streams/delete' component={StreamDelete} />
                    <Route path='/streams/show' component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
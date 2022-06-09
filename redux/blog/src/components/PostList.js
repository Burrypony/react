import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = (props) => {
    
    useEffect(()=>{
        props.fetchPostsAndUsers()},
        []
    )

    function renderList(){
        return props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    
    return <div className="ui relaxed divided list">{renderList()}</div>
}

const mapStateToProps = (ownProps) => {
    return { posts: ownProps.posts}
} 

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { id, title, body } = blog
    return (
        <div className='${'>
        <h1>{title}</h1>
        <p>{body}</p>
        <br />
        <Link to="/blogs">Back to Blogs</Link>
        </div>
    )
    }

const mapStateToProps = (state, ownProps) => {
    const blog = state.blogs.find(blog => blog.id === +ownProps.match.params.blogId)
    if (blog) {
        return { blog }
    } else {
        return { blog: {} }
    }
}

export default connect(mapStateToProps)(Blog)
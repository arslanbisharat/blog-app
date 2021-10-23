import React, { Component } from 'react'

class PostListItem extends Component {
    render() {
        const { post } = this.props
        return (
            <div>
                <article>
                    <h2> {post.title} </h2>
                    <p>
                        {post.content} by {post.author}
                    </p>
                </article>
            </div>
        )
    }
}

export default PostListItem
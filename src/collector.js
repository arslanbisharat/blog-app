import React from 'react';
import PostList from './components/PostList'
import Post from './components/Post'
import NewPost from './components/NewPost'

class Collector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        new Post(1, 'First Post', 'This is the first post !', 'Papi'),
        new Post(2, 'Second Post', 'This is the second post !', 'PapiHack'),
        new Post(3, 'Third Post', 'This is the third post !', 'MrD3c0d3R'),
      ]
    }
  }

  addPost = post => {
    post.id = this.state.posts.length + 1
    this.setState(
      (prevState) => {
        return {
          posts: prevState.posts.concat(post) 
        }
      }
    )
  }

  removePost = post => {
    this.setState(
      (prevState) => {
        let previousPosts = prevState.posts.filter(p => p.id !== post.id)
        return {
          posts: previousPosts
        }
      }
    )
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>All Posts ({this.state.posts.length}).</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PostList posts={this.state.posts} />
          </div>
          <div className="col-lg-6">
            <NewPost onAdd={this.addPost} />
          </div>
        </div>
      </div>
    )
  }
}

export default Collector

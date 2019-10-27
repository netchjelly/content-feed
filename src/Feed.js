import React from 'react';


  
  function Post(props) {
    return (
      <div className="blurb">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    )
}



class Feed extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    posts: []
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => this.setState({posts: posts}));
}



render () {
  const posts_list = this.state.posts.map(function(post) {
    return <Post title={post.title} body={post.body} key={post.id}/>;
  })
  return posts_list;
}
}


      
      
export default Feed;
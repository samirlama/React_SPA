import React  , {Component} from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//connect is a function and used to make higher order function

class Home extends Component{
 /* state = {
        posts : []
    }
    componentDidMount(){
        axios.get("http://www.somaku.com/posts")
        .then( res => {
            console.log(res.data.slice(0 , 10));
            var posts = res.data.slice(0 , 10);
            this.setState({
                posts
            })
        });
    }
    */
    render(){
        //const { posts } = this.state;
        console.log(this.props);
        const { posts } = this.props;
        return(
            <div>
                <div class="panel-group">
                {posts.length === 0 ? (<div>NO any contents</div>) :(
                    posts.map(post => {
                        return (
                            <div class="panel panel-success" key = {post.id}>
                            <div class="panel-heading"><Link to = {"/" + post.id}>{post.title}</Link></div>
                            <div class="panel-body">{post.body}</div>
                        
                            
                        </div> 
                        )
                       
                    }
                        
                    )
                )
                }
                </div>
            
            </div>
        )
    }
}
const mapStateToProps  = (state) => {
    return {
        posts: state.posts
    }
}
 

export default connect(mapStateToProps)(Home);
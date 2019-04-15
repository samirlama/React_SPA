import React , {Component} from 'react';
import axios from 'axios';
class ShowPost extends Component{
    state = {
        post : []
    }
    componentDidMount(){
        var id = this.props.match.params.post_id
        axios.get(`http://www.somaku.com/posts/${id}`)
        .then(res => {
               this.setState({
                   post: res.data
               }) 
        });
    }
    render(){
        const { post } = this.state;
        console.log(this.props);
        return(
            <div class="panel panel-success" >
                <div class="panel-heading">{post.title}</div>
                <div class="panel-body">{post.body}</div>
            </div>    

        )
       
    }
}
export default ShowPost;

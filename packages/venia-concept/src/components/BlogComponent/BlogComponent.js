import React, { Component } from 'react';
import { connect } from 'src/drivers';
import { getPosts } from 'src/actions/blog';

class BlogComponent extends Component {
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const { blogPosts } = this.props
        return (
            <div>
                
                {
                    blogPosts.posts ? 
                    blogPosts.posts.map(post =>
                        <li key={post.id}>
                            {post.title.rendered}
                        </li>
                    ) : <div>loading</div>

                }
            </div>
        );
    }
}

const mapStateToProps = ({ blogPosts }) => ({
    blogPosts
});


const mapDispatchToProps = {
    getPosts
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogComponent);


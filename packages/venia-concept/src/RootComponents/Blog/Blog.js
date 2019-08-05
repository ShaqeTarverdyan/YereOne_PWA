import React from 'react';

import Blog_Component from 'src/components/./Blog_Component/./Blog_Component'
class Blog extends React.Component {
   
    render() {
   
        return (
            <div>
                <Blog_Component />
                {/* {
                    posts.map(post => 
                        <p>{post.id}</p>
                        )
                } */}
            </div>
        );
    }

}


export default Blog;
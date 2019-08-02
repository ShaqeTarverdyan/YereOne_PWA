import React from 'react';
import { RestApi  } from '@magento/peregrine';
const { request } = RestApi.Magento2;

class Blog extends React.Component {
    getBlogData = () => {
        const blogUrl = '/wp-json/wp/v2/posts';
        const response =  request(blogUrl, {
            method: 'GET'
        }).then(function(response){
            return JSON.parse(response.data);
        });
        return response;
    }
    render() {
        const posts = this.getBlogData();
        console.log(posts);
        return (
            <div>
                <h2>This is Bliog Root Component</h2>

            </div>
        );
    }

}

export default Blog;
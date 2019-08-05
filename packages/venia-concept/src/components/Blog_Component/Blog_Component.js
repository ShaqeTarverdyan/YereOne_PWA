import React, {Component} from './node_modules/react';
import { RestApi  } from './node_modules/@magento/peregrine';
const { request } = RestApi.Magento2;


class Blog_Component extends Component {
    getBlogData = () => {
        const blogUrl = '/wp-json/wp/v2/posts';
        const response =  request(blogUrl, {
            method: 'GET'
        }).then(function(response){
            return JSON.parse(response.data);
        }).catch(function(err) {
                return err
        })
        return response
    }
    render() {
        const posts = this.getBlogData();
        console.log('posts',posts)
        return(
            <div>
                blog page
            </div>
        );
    }
}

export default Blog_Component;
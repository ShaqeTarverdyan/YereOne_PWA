import React from 'react';
import getTestimonial from 'src/queries/getTestimonials.graphql';
import { Query } from 'src/drivers';
import TestimonialSlider from './TestimonialSlider';
import defaultClasses from './Testimonial.css';
 

const Testimonial = () => {
    return (
        <div className={defaultClasses.testimonial}> 
            <h3>Here is what our clients think about us and our work</h3>
         <small>
                <Query
                    query={getTestimonial}                    
                >
                 {({ loading, error, data }) => {
                     console.log(data, error)
                         if (error) {
                             return (
                                 <span>
                                     Data Fetch Error:{' '}
                                     <pre>{error.message}</pre>
                                 </span>
                             );
                         }
                         if (loading) {
                             return (
                                 <span>
                                     Fetching Data
                                 </span>
                             );
                         }
                         console.log(data.testimonials.items, 'testimonial')
                         const { items } = data.testimonials
                     return (
                         <div >
                            <TestimonialSlider items={items}/>
                         </div>
                     )
                     }}
                </Query>
            </small>
        </div>
    )
}
export default Testimonial;
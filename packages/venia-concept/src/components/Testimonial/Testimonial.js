import React from 'react';
import getTestimonial from 'src/queries/getTestimonials.graphql';
import { Query } from 'src/drivers';
//import TestimonialSliderAlice from './TestimonialSliderAlice';
import defaultClasses from './Testimonial.css';
import CarouselOwl from './owlCarousel';
 
const Testimonial = () => {
    return (
        <div className={defaultClasses.testimonial}> 
            <h3>Here is what our clients think about us and our work</h3>
         <small>
                <Query
                    query={getTestimonial}                    
                >
                 {({ loading, error, data }) => {
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
                         const { items } = data.testimonials
                     return (
                         <div >
                          {/* <TestimonialSliderAlice items={items}/> */}
                          <CarouselOwl items={items}/>
                         </div>
                     )
                     }}
                </Query>
            </small>
        </div>
    )
}
export default Testimonial;
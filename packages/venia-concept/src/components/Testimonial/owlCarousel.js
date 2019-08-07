import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import defaultClasses from './TestimonialSlider.css';
const CarouselOwl = ({ items }) => {
    console.log(items)
    return (
       
        <div>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={1}
                mouseDrag
            >
                {items.map(item =>
                     <div 
                     key={item.id} 
                     className={defaultClasses.slideTestimonial}
                 >
                     <img 
                         src={item.image}
                         alt="images"
                     />
                     <div className={defaultClasses.name_review}>
                         <h3>
                             {item.author}
                             <span>
                                 <img 
                                     src={item.flag}
                                     alt="flag"
                                     style={{width:'5%'}}
                                 />
                             </span>
                         </h3>
                         <p>{item.job}</p>
                         <p>{item.testimonial_content}</p>
                     </div>
                 </div> 
                )}
            </OwlCarousel>
        </div>
    );
}
export default CarouselOwl;
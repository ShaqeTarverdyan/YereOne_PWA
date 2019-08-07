import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import  "react-alice-carousel/lib/alice-carousel.css";
import defaultClasses from './TestimonialSlider.css';

const TestimonialSliderAlice = ( {items} ) => {
    const handleOnDragStart = e => e.preventDefault();
    const item =   {
        0: {
            items: 1
        },
        768: {
            items:1
        },
        1024: {
            items: 3
        }
    }

    return (
        <div className={defaultClasses.root}>
            <AliceCarousel
                mouseDragEnabled responsive={item}   
            >
                {
                    items.map((item => (
                        <div 
                            key={item.id} 
                            className={defaultClasses.slideTestimonial}
                            onDragStart={handleOnDragStart}
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
                                        />
                                    </span>
                                </h3>
                                <p>{item.job}</p>
                                <p>{item.testimonial_content}</p>
                            </div>
                        </div> 
                    )))
                }
            </AliceCarousel>
        </div>
    )
}
export default TestimonialSliderAlice;
import React, { useEffect } from 'react'
import $ from 'jquery'

export default function ProjectSlider() {
    useEffect(() => {
        $(document).ready(function() {
            $('.projects-slider').not('.slick-initialized').slick({
                slidesToShow: 2,
                slidesToScroll: 1,

                infinite: true,
                arrows: true,
                swipeToSlide: true,

                prevArrow:'<div class="slider-arrow prev"><div class="icon arrow-left"></div></div>',
                nextArrow:'<div class="slider-arrow next"><div class="icon arrow-right"></div></div>',
            });
        });
    }, []);
    return (
        <section className="section section-team project-team">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <div className="projects-slider">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

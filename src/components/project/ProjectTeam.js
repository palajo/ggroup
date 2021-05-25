/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'

import $ from 'jquery'

import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'

import Member1 from '../../assets/images/team/member-1.png'
import Member2 from '../../assets/images/team/member-2.png'
import Member3 from '../../assets/images/team/member-3.png'
import Member4 from '../../assets/images/team/member-4.png'
import Member5 from '../../assets/images/team/member-5.png'
import Member6 from '../../assets/images/team/member-6.png'

export function MemberBlock(props) {
    return(
        <div className="member-block">
            <div className="member-image">
                <img src={props.image} />
            </div>
            <div className="member-about">
                <div className="member-name">
                    {props.name}
                </div>
                <div className="member-position">
                    {props.position}
                </div>
            </div>
        </div>

    )
}

export default function ProjectTeam() {

    useEffect(() => {
        $(document).ready(function() {
            $('.team-slider').not('.slick-initialized').slick({
                slidesToShow: 6,
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
                        <h2 className="container-title">
                            Team
                        </h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis 
                        </p>
                        <div className="team-slider">
                            <MemberBlock 
                                image={Member1}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                            <MemberBlock 
                                image={Member2}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                            <MemberBlock 
                                image={Member3}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                            <MemberBlock 
                                image={Member4}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                            <MemberBlock 
                                image={Member5}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                            <MemberBlock 
                                image={Member6}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                            <MemberBlock 
                                image={Member6}
                                name="Pavlova Irina"
                                position="CEO"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

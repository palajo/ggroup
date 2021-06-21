import React, { useEffect } from 'react'
import $ from 'jquery'

import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'

import TeamMember1 from '../../assets/images/team/member-1.png'
import TeamMember2 from '../../assets/images/team/member-2.png'
import TeamMember3 from '../../assets/images/team/member-3.png'
import TeamMember4 from '../../assets/images/team/member-4.png'
import TeamMember5 from '../../assets/images/team/member-5.png'
import TeamMember6 from '../../assets/images/team/member-6.png'

export default function TeamSlider() {
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

                responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                      }
                    },
                ]
            });
        });
    }, []);
    return (
        <div className="team-slider">
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember1} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember2} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember3} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember4} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember5} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember6} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember1} alt="Globarch Team Member 1" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
            <div className="member-block">
                <div className="member-image">
                    <img src={TeamMember2} alt="Globarch Team Member 6" />
                </div>
                <div className="member-about">
                    <div className="member-name">
                        Pavlova Irina
                    </div>
                    <div className="member-position">
                        CEO
                    </div>
                </div>
            </div>
        </div>
    )
}

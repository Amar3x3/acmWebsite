import React, { Component } from 'react';
import '../styles/main.css';
import Text from './Text';
import Img from './Img';
export default class About extends Component {
    render() {
        return (
            <>
                <div className='uni-up-margin'></div>

                {/* About Us Section */}

                <div className="flex flex-col items-center justify-center mt-[55px] md:px-5 w-1/4 md:w-full mx-auto">
                    <Text
                        className="text-center sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5 flex items-center justify-center"
                        size="txtInterMedium50Gray900b5"
                    >
                        About Us
                    </Text>
                    <div className="bg-light_blue-500 h-2 w-full"></div>
                </div>


                <div className="relative flex md:flex-col flex-row md:gap-[49px] items-start justify-between w-[100%] md:px-5">
                    {/* First Section */}
                    <div className="md:h-[524px] h-[674px] relative w-[92%] md:w-full">
                        {/* Content for the first section */}
                        <Img
                            className="absolute h-[300px] w-[200px] left-[0] top-[0]"
                            src="images/img_rectangle17.svg"
                            alt="rectangleSeventeen"
                        />

                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[83%]">
                            <Img
                                className="h-[500px] w-[500px] md:h-auto object-cover"
                                src="images/img_acmback21.png"
                                alt="acmbackTwentyOne"
                            />
                        </div>
                    </div>
                    <div className="bg-blue_gray-100 h-[696px] md:mt-0 mt-[75px] rounded w-[2%]"></div>
                    {/* Third Section */}
                    <div className="  relative md:h-[500px] h-[674px]  w-[90%] md:w-full items-end right-[-5%] mt-40">
                        {/* Content for the third section */}
                        <Img
                            className="absolute bottom-[0] h-[322px] right-[0]"
                            src="images/img_rectangle21.svg"
                            alt="rectangleTwentyOne"
                        />
                        <Text
                            className="absolute left-[0] sm:text-[23px] md:text-[25px] text-[27px] text-black-900 top-[0] w-[84%] sm:w-full"
                            size="txtInterMedium27"
                        >
                            <span className="text-black-900 font-inter text-left font-medium">
                                ACM is the world's largest educational and scientific computing society,
                                aimed at increasing the level and visibility of ACM activities across the
                                globe. ACM is a society of dedicated professionals, academicians, and
                                research scientists, who contribute towards the growth of technological
                                innovations. The purpose of Society is to inculcate computational thinking
                                aiding in career development and a lifelong learning experience.
                            </span>
                            <span className="text-light_blue-500 font-inter text-left font-medium">
                                Read More..
                            </span>
                        </Text>
                    </div>
                </div>


                <Img
                    className="absolute bottom-1/4 h-[363px] left-[3%] object-cover top-[20%] w-[8%]"
                    src="images/img_acmoverlay01.png"
                    alt="acmoverlayOne"
                />
                <Img
                    className="absolute h-[400px] object-cover right-[3%] top-[100%] w-[8%]"
                    src="images/img_acmoverlay02.png"
                    alt="acmoverlayTwo"
                />



            </>
        )
    }
}
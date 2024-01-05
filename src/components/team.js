import React, { Component } from 'react';
import '../styles/main.css';
import List from './List';
import Text from './Text';
import Img from './Img';
export default class OurTeam extends Component {
    render() {
        return (
            <>
                <div className='uni-up-margin'></div>
                {/* Events Section */}
                <div className="flex flex-col items-center justify-center mt-[55px] md:px-5 w-1/4 md:w-full mx-auto">
                    <Text
                        className="text-center sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5 flex items-center justify-center"
                        size="txtInterMedium50Gray900b5"
                    >
                        Our Team
                    </Text>
                    <div className="bg-light_blue-500 h-2 w-full"></div>
                </div>

                <List
                className="sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1200px] mt-[88px] md:px-5 w-full mx-auto"
                orientation="horizontal "
            >
                    {/* Team Member 1 */}
                    <div className="bg-light_blue-300 flex flex-col items-end justify-end mb-0.5 sm:ml-[0] pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
                        <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
                        <Text
                            className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                            size="txtInterSemiBold36"
                        >
                            Name
                        </Text>
                        <Text
                            className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterMedium21WhiteA700"
                        >
                            Role
                        </Text>
                        {/* LinkedIn Logo */}
                        <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_linkedinlogo1.png"
                            alt="linkedinlogoOne"
                        />
                        <Text
                            className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                            size="txtInterMedium21WhiteA700"
                        >
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </div>
                     {/* Team Member 2 */}
                    <div className="bg-light_blue-300 flex flex-col items-end justify-end sm:ml-[0] sm:mt-0 mt-0.5 pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
                        <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
                        <Text
                            className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                            size="txtInterSemiBold36"
                        >
                            Name
                        </Text>
                        <Text
                            className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterMedium21WhiteA700"
                        >
                            Role
                        </Text>
                        {/* LinkedIn Logo */}
                        <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_linkedinlogo1.png"
                            alt="linkedinlogoOne"
                        />
                        <Text
                            className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                            size="txtInterMedium21WhiteA700"
                        >
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </div>
                     {/* Team Member 3*/}
                     <div className="bg-light_blue-300 flex flex-col items-end justify-end mb-0.5 sm:ml-[0] pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
                        <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
                        <Text
                            className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                            size="txtInterSemiBold36"
                        >
                            Name
                        </Text>
                        <Text
                            className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterMedium21WhiteA700"
                        >
                            Role
                        </Text>
                        {/* LinkedIn Logo */}
                        <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_linkedinlogo1.png"
                            alt="linkedinlogoOne"
                        />
                        <Text
                            className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                            size="txtInterMedium21WhiteA700"
                        >
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </div>
                     {/* Team Member 4 */}
                    <div className="bg-light_blue-300 flex flex-col items-end justify-end sm:ml-[0] sm:mt-0 mt-0.5 pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
                        <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
                        <Text
                            className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                            size="txtInterSemiBold36"
                        >
                            Name
                        </Text>
                        <Text
                            className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterMedium21WhiteA700"
                        >
                            Role
                        </Text>
                        {/* LinkedIn Logo */}
                        <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_linkedinlogo1.png"
                            alt="linkedinlogoOne"
                        />
                        <Text
                            className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                            size="txtInterMedium21WhiteA700"
                        >
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </div>
                     {/* Team Member 5 */}
                     <div className="bg-light_blue-300 flex flex-col items-end justify-end mb-0.5 sm:ml-[0] pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
                        <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
                        <Text
                            className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                            size="txtInterSemiBold36"
                        >
                            Name
                        </Text>
                        <Text
                            className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterMedium21WhiteA700"
                        >
                            Role
                        </Text>
                        {/* LinkedIn Logo */}
                        <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_linkedinlogo1.png"
                            alt="linkedinlogoOne"
                        />
                        <Text
                            className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                            size="txtInterMedium21WhiteA700"
                        >
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </div>
                     {/* Team Member 6 */}
                    <div className="bg-light_blue-300 flex flex-col items-end justify-end sm:ml-[0] sm:mt-0 mt-0.5 pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
                        <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
                        <Text
                            className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                            size="txtInterSemiBold36"
                        >
                            Name
                        </Text>
                        <Text
                            className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterMedium21WhiteA700"
                        >
                            Role
                        </Text>
                        {/* LinkedIn Logo */}
                        <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_linkedinlogo1.png"
                            alt="linkedinlogoOne"
                        />
                        <Text
                            className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                            size="txtInterMedium21WhiteA700"
                        >
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </div>
                </List>
            </>
        )
    }
}
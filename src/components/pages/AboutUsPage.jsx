// React
import React from "react";
// Media Files
import picture from "../../assets/images/about-us.png";
const AboutUsPage = () => {
    // team
    const teamMembers = [
        {
            name: "Ranganathan Srinivasan",
            designation: "Founder & CEO",
            profile_img: picture,
            message:
                "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
        },
        // 3215
        {
            name: "Rajlaxmi Shivram",
            designation: "Head of Product Development",
            profile_img: picture,
            message:
                "Ex-Portfolio head in the Ecommerce vertical in HDFC Bank and has an overall experience of around 20 years. She loves dabbling in new ideas. Being a mother of a toddler, she has been trying hard to get her hands on healthy options in the market and aims to bridge that gap through Realvedic products. ",
        },
        // 3215
    ];
    return (
        <div className="poppins">
            {/* Our story */}
            <div>
                <div className="w-fit mx-auto pt-10">
                    <h1 className="font-extrabold text-2xl md:text-3xl text-center">
                        Our Story
                    </h1>
                    <div className="w-full mx-auto h-[1px] sm:h-[2px] md:h-[3px] lg:h-[4px] bg-black mt-2 md:mt-5 mb-10"></div>
                </div>

                <p className="text-center md:text-xl md:leading-[40px] w-[85%] lg:w-[70%] xl:w-[65%] mx-auto text-[#5B5B5B]">
                    A healthy life is what we all strive for. Just having right food is
                    not enough though. Right combination and proportion of food is also
                    important for an individual. We at RealVedic aim to provide the
                    wholesome nutrition in the right amount through guidance and carefully
                    curated products.
                </p>
                <h3 className="font-semibold text-center mt-20 mb-2 text-2xl md:text-3xl  w-[85%] lg:w-[60%] xl:w-[55%] md:w-[70%] mx-auto">
                    A Shloka from the ancient book Sushrutasamhita, Sutrasthan
                </h3>
                <p className="mb-14 text-center text-[#5B5B5B] font-extrabold w-[85%] lg:w-[60%] md:w-[70%] mx-auto ">
                    (Chapter 15, Shloka 10)
                </p>
                <h3 className="font-[400px] text-center  mb-14 italic text-2xl md:text-3xl w-[85%] lg:w-[60%] md:w-[70%] xl:w-[55%] mx-auto">
                    ''Samadosha, Samagnischa, Samadhatumalkriyah- Prasannatmendriyamanah,
                    Swasth- a iti abhidhiyate"
                </h3>

                <p className="text-center md:text-xl md:leading-[40px] w-[85%] lg:w-[70%] xl:w-[65%] mx-auto text-[#5B5B5B] mb-20">
                    He whose doshas are in balance, appetite is good, all tissues of the
                    body and all natural urges are functioning properly, and whose
                    mind,body and spirit are cheerful or full of bliss, he is a healthy
                    person.
                </p>
            </div>

            {/* Our Products */}
            <div>
                <div className="w-fit mx-auto ">
                    <h1 className="font-extrabold text-2xl md:text-3xl mt-[100px] text-center">
                        Our Products
                    </h1>
                    <div className="w-full  mx-auto h-[1px] sm:h-[2px] md:h-[3px] lg:h-[4px] bg-black mt-2 md:mt-5 mb-10"></div>
                </div>

                <p className="text-center md:text-xl md:leading-[40px] w-[85%] lg:w-[70%] xl:w-[65%] mx-auto text-[#5B5B5B]">
                    We at RealVedic, understand the gap between the ancient way of living
                    and the modern lifestyle and we intend to bridge the gap. Products we
                    believe in are the products we offer enabling healthy living. Our
                    products have the essence of Ayurveda.
                </p>
            </div>

            {/* Our Team */}
            <div>
                <div className="w-fit mx-auto ">
                    <h1 className="font-extrabold text-2xl md:text-3xl mt-[100px] text-center">
                        Our Team
                    </h1>
                    <div className="w-full  mx-auto h-[1px] sm:h-[2px] md:h-[3px] lg:h-[4px] bg-black mt-2 md:mt-5 mb-10"></div>
                </div>

                {/* Team members */}
                <div className="pt-5 pb-20 ">
                    {teamMembers?.map((data, index) => {
                        return (
                            <div key={index} className="my-20">
                                <div
                                    className={` flex justify-between items-center w-[85%] sm:w-[75%] xl:w-[70%] mx-auto gap-5 md:gap-10  ${(index + 1) % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                        } `}
                                >
                                    <div className="in-w-[70%]">
                                        <h1 className=" font-bold text-lg md:text-xl xl:text-2xl ">
                                            {data?.name}
                                        </h1>
                                        <h1 className=" font-bold text-lg md:text-xl xl:text-2xl">
                                            {data?.designation}
                                        </h1>
                                        <p className="text-[#5B5B5B] text-sm md:text-base xl:text-lg mt-2">
                                            {data?.message}
                                        </p>
                                    </div>

                                    <div className=" min-w-[30%] ">
                                        <img
                                            src={picture}
                                            alt={data?.name}
                                            className={`aspect-square rounded-full w-full max-w-[250px] ${(index + 1) % 2 === 0 ? "ml-auto" : "mr-auto"
                                                } `}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default AboutUsPage;

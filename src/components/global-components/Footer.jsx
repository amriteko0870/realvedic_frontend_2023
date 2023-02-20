// React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Media Files
import arrow from "../../assets/icons/down-arrow-thin.svg";
import facebook from "../../assets/icons/facebook-white.svg";
import instagram from "../../assets/icons/instagram-white.svg";
const Footer = () => {
  // Footer data
  const footerData = [
    {
      heading: "ABOUT",
      contents: [
        {
          linkName: "The Realvedic Story",
          linkTo: "/about-us",
        },
        {
          linkName: "Shop By Category ",
          linkTo: "/all-products/0",
        },
        // {
        //   linkName: "Online Doctor Appointment",
        // },
    
        // {
        //   linkName: "Privacy Policy",
        // },
      ],
    },
    {
      heading: "POLICY",
      contents: [
        {
          linkName: "Return, Refund and Cancellation Policy",
          linkTo: "/cancellation-policy",
        },
        {
          linkName: "Terms  & Conditions",
          linkTo: "/terms-conditions",
        },
      ],
    },

    {
      heading: "GET IN TOUCH",
      contents: [
        {
          linkName: "info@realvedic.com",
          linkTo: '/'
        },
        {
          linkName: "+91-8860227160",
          linkTo: '/'
        },
        {
          linkName: facebook,
          linkTo: 'https://www.facebook.com/realvedic1',
          linkTo_2: 'https://www.instagram.com/realvedic1/',
          linkName2: instagram,
        },
        {
          linkName: instagram,
          linkTo: 'https://www.instagram.com/realvedic1/'
        },
      ],
    },
  ];

  // Local variable
  const [selectedHeading, setSelectedHeading] = useState(null);

  // #C57963 extra color option footer from old project

  return (
    <footer className="bg-[color:var(--primary-color)] pt-10 text-[#555555]">


      {/* Mobile & Tablet footer */}
      <div className="mx-auto w-[85%] pb-3 md:hidden">
        {footerData?.map((data, index) => {
          return (
            <div key={index} className="">
              <div
                onClick={() => {
                  selectedHeading === data?.heading
                    ? setSelectedHeading(null)
                    : setSelectedHeading(data?.heading);
                }}
                className=" border-b border-b-gray-400 transition-all cursor-pointer "
              >
                <div className="flex justify-between items-center py-5 ">
                  <h1 className="font-semibold">{data?.heading}</h1>
                  <img
                    src={arrow}
                    alt="..."
                    className={` grayscale ${selectedHeading === data?.heading ? "rotate-180" : ""
                      } `}
                  />
                </div>
              </div>

              <div
                className={`overflow-y-hidden transition-all duration-300 ${selectedHeading === data?.heading
                  ? "accordian_open ease-in border-b   border-b-gray-400"
                  : "accordian_close ease-out"
                  }  `}
              >
                <div className="h-fit py-4">
                  {data?.contents?.map((links, index) => {
                    return (
                      <div key={index} className="py-1">
                        {links?.linkName === facebook ||
                          links?.linkName === instagram ? (
                          <div>
                            {
                              links?.linkName === facebook &&
                              <a href='https://www.facebook.com/realvedic1' target='_blank' rel="noreferrer">
                                <img
                                  src={links?.linkName}
                                  alt={links?.linkName}
                                  className="w-[40px] my-1 cursor-pointer"
                                />
                              </a>
                            }

                            {
                              links?.linkName === instagram &&
                              <a href='https://www.instagram.com/realvedic1/' target='_blank' rel="noreferrer">
                                <img
                                  src={links?.linkName}
                                  alt={links?.linkName}
                                  className="w-[40px] my-1 cursor-pointer"
                                />
                              </a>
                            }
                          </div>
                        ) : (
                          <h1 className="hover:underline underline-offset-4 cursor-pointer transition">
                            {links?.linkTo ? (
                              <Link to={links?.linkTo}>{links?.linkName}</Link>
                            ) : (
                              links?.linkName
                            )}
                          </h1>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-end h-[200px] w-full ">
          <h1 className="opacity-[35%] text-xs text-[#555555]">
            © {new Date().getFullYear()} Realvedic Powered by Ekoinfomatics
          </h1>
        </div>
      </div>



      {/* PC footer */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 justify-items-center w-[85%] mx-auto ">
          {footerData?.map((data, index) => {
            return (
              <div key={index}>
                <h1 className="font-bold mb-5">{data?.heading}</h1>

                <div>
                  {data?.contents?.map((links, index) => {
                    return (
                      <div key={index} className="">
                        {links?.linkName === facebook ||
                          links?.linkName2 === instagram ? (
                          <div className="flex gap-2 items-center mb-1">
                            <a target='_blank' rel="noreferrer" href={links?.linkTo_2}>
                              <img
                                src={links?.linkName2}
                                alt={links?.linkName2}
                                className="w-[40px] my-1 cursor-pointer  "
                              />
                            </a>

                            <a target='_blank' rel="noreferrer" href={links?.linkTo}>
                              <img
                                src={links?.linkName}
                                alt={links?.linkName}
                                className="w-[40px] my-1 cursor-pointer  "
                              />
                            </a>

                          </div>
                        ) : (
                          <div className="mb-1">
                            <div className="hover:underline underline-offset-4 cursor-pointer transition">
                              {links?.linkName === instagram ? (
                                " "
                              ) : links?.linkTo ? (
                                <Link to={links?.linkTo}>
                                  {links?.linkName}
                                </Link>
                              ) : (
                                links?.linkName
                              )}



                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 mx-auto w-[85%]">
          <h1 className="text-xs text-center pb-5 text-[#555555]">
            © {new Date().getFullYear()}, Realvedic Powered by Ekoinfomatics
          </h1>
        </div>

        <div className="bg-[#7B4E41] h-[50px]"></div>
      </div>


    </footer>
  );
};

export default Footer;

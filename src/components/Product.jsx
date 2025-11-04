import React from "react";
// import product_img from "../../public/img/product-1.svg"
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="product_cont mt-0 mb-60 md:mt-120">
            <div className="product_head flex">
              <div className="w-1/12 flex flex-col items-center">
                <div className="kane_ai_line"></div>
              </div>
              <div className="w-11/12">
                <h2 className="text-[50px]">Introducing KaneAI</h2>
                <h3>Reimagining end to end testing in AI era</h3>
              </div>
            </div>
            <div className="product_main">
              <div className="border-1 border-blue-200 rounded-2xl flex flex-col md:flex-row justify-baseline relative  bg-blue-50 overflow-hidden p-50">
                <div className="w-full md:w-7/12 h-[350px] md:h-auto">
                  <p className="text-[20px]">
                    Traditional 222 CRMs are too slow and complex for today's
                    fast-paced business landscape. Linq's mobile-first CRM is
                    fast and simple, letting you can focus on customers, not
                    clunky tools.
                  </p>
                  <a href="#" className="anc_tag2 mt-10 block">
                    Try now
                  </a>
                </div>
                <div className="absolute w-full md:w-5/12 right-0 bottom-0 border-2 border-t-blue-400 border-l-blue-400 border-transparent rounded-tl-[20px] bg-white p-40">
                  <p>
                    <strong>AI 222 Test Case Generation & evolution</strong> by
                    transforming various input formats such as text, JIRA
                    tickets, PDFs, images, audio, videos, and spreadsheets, or
                    manually author tests using natural language inputs.
                  </p>
                  <div className="text_tag mt-10">
                    <p>onboarding flow dev changes.doc</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row mt-20 gap-4">
                <div className="w-full md:w-1/2 border-1 border-amber-200 rounded-2xl">
                  <p className="p-64 pb-10 text-[22px]">
                    <b>Multi-Language Code Export</b> Convert your automated
                    tests in all major languages and frameworks.
                  </p>
                  <img src="/img/product-1.svg" alt="" />
                </div>
                <div className="w-full md:w-1/2 border-1 border-purple-300 rounded-2xl">
                  <p className="p-64 pb-10 text-[22px]">
                    <strong>Intelligent Test Planner</strong> Automatically
                    generate and automate test steps using high level
                    objectives.
                  </p>
                  <img src="/img/testPlanner.svg" alt="" />
                </div>
              </div>

              <div className="mt-10">
                <div className="w-1/12 flex flex-col items-center">
                  <div className="kane_ai_line2"></div>
                </div>
              </div>

              <div className="flex mt-40 gap-2">
                <div className="w-1/12 flex flex-col items-center">
                  <div className="bg-red-50 p-15 mb-30 rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.828 19.6375L13.0016 14.2578C13.185 13.417 12.5328 12.6263 11.6725 12.6464L6.65958 12.7637L12.6855 4.3625L11.512 9.74223C11.3286 10.583 11.9807 11.3737 12.841 11.3536L17.854 11.2363L11.828 19.6375Z"
                        fill="#E76509"
                        stroke="#E76509"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="kane_ai_line"></div>
                  </div>
                </div>
                <div className="w-11/12">
                  <h4 className="text-[22px] mt-10">Execute & Schedule 2</h4>
                  <h3 className="grade_text text-4xl md:text-[60px]">
                    Run scheduled tests on HyperExecute
                  </h3>
                  <h4 className="text-[30px] text-gray-500">
                    Accelerate test execution up to 70% than traditional cloud.
                  </h4>
                </div>
              </div>

              <div className="flex mt-40 gap-2">
                <div className="w-1/12 flex flex-col items-center">
                  <div className="bg-red-50 p-15 mb-30 rounded-full">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_708_13594)">
                        <path
                          d="M21.7767 1.2002H15.6656C14.9906 1.2002 14.4434 1.7474 14.4434 2.42242V8.53353C14.4434 9.20854 14.9906 9.75575 15.6656 9.75575H21.7767C22.4517 9.75575 22.9989 9.20854 22.9989 8.53353V2.42242C22.9989 1.7474 22.4517 1.2002 21.7767 1.2002Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21.7767 1.2002H15.6656C14.9906 1.2002 14.4434 1.7474 14.4434 2.42242V8.53353C14.4434 9.20854 14.9906 9.75575 15.6656 9.75575H21.7767C22.4517 9.75575 22.9989 9.20854 22.9989 8.53353V2.42242C22.9989 1.7474 22.4517 1.2002 21.7767 1.2002Z"
                          stroke="#E76509"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.55556 23.2V7.31109C9.55556 6.98694 9.42679 6.67606 9.19757 6.44685C8.96836 6.21764 8.65749 6.08887 8.33333 6.08887H2.22222C1.89807 6.08887 1.58719 6.21764 1.35798 6.44685C1.12877 6.67606 1 6.98694 1 7.31109V21.9778C1 22.3019 1.12877 22.6128 1.35798 22.842C1.58719 23.0712 1.89807 23.2 2.22222 23.2H16.8889C17.213 23.2 17.5239 23.0712 17.7531 22.842C17.9823 22.6128 18.1111 22.3019 18.1111 21.9778V15.8666C18.1111 15.5425 17.9823 15.2316 17.7531 15.0024C17.5239 14.7732 17.213 14.6444 16.8889 14.6444H1"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.55556 23.2V7.31109C9.55556 6.98694 9.42679 6.67606 9.19757 6.44685C8.96836 6.21764 8.65749 6.08887 8.33333 6.08887H2.22222C1.89807 6.08887 1.58719 6.21764 1.35798 6.44685C1.12877 6.67606 1 6.98694 1 7.31109V21.9778C1 22.3019 1.12877 22.6128 1.35798 22.842C1.58719 23.0712 1.89807 23.2 2.22222 23.2H16.8889C17.213 23.2 17.5239 23.0712 17.7531 22.842C17.9823 22.6128 18.1111 22.3019 18.1111 21.9778V15.8666C18.1111 15.5425 17.9823 15.2316 17.7531 15.0024C17.5239 14.7732 17.213 14.6444 16.8889 14.6444H1"
                          stroke="#E76509"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_708_13594">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="kane_ai_line"></div>
                  </div>
                </div>
                <div className="w-11/12 ">
                  <h4 className="text-[22px] mt-10">Integrate</h4>
                  <h3 className="grade_text_2 text-4xl md:text-[60px] ">
                    Seamless integrate KaneAI in your workflow
                  </h3>
                  <h4 className="text-[30px] text-gray-500">
                    Tag KaneAI wherever you go
                  </h4>
                </div>
              </div>

              <div className="border-1 border-blue-200 rounded-2xl flex flex-col md:flex-row justify-baseline relative  bg-blue-50 overflow-hidden p-50">
                <div className="w-full md:w-7/12 h-[350px] md:h-auto">
                  <p className="text-[20px]">
                    Seamless integration across JIRA, Azure DevOps, and more.  
                    Wherever you describe your tests KaneAI will follow.
                  </p>
                  <Link to="/components/doc" className="anc_tag3 mt-10 inline-block">
                    Avail Now
                  </Link>
                </div>
                <div className="absolute w-full md:w-5/12 right-0 bottom-0 border-2 border-t-blue-400 border-l-blue-400 border-transparent rounded-tl-[20px] bg-white p-40">
                  <img src="/img/integrationList.svg" />
                </div>
              </div>

              <div className="flex items-center mt-120">
                <div className="w-full md:w-6/12 ">
                  <h3 className="text-6xl">Leads to Million</h3>
                  <p className="mt-10">
                    Leaders at Lime on the conversations that <br /> bring value
                    and drive business
                  </p>
                  <Link to="/components/doc" className="anc_tag4 mt-10 font-medium">
                    Brochure
                  </Link>
                </div> 
                <div className="w-6/12 hidden md:block ">
                  <img src="/img/million.png" className="w-[80%]" />
                </div>
              </div>

              <div>
                <h3 className="text-center text-5xl mt-120">
                  Real ROI from <span className="grade_text">Real Brands</span>
                </h3>
                <div className="flex items-center gap-10 mt-70">
                  <div className="w-6/12 flex flex-col items-end gap-4">
                    <p className="w-[50%]">
                      "Using Lime {" "}
                      <span className="text-2xl font-medium">
                        boosted retention by 12% {" "}
                      </span>
                      in the first 60 days."
                    </p>
                    <p>The interactive Company of California</p>
                  </div>
                  <div className="w-6/12 flex justify-start">
                    <img src="/img/roi.png" className="w-auto md:w-[40%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

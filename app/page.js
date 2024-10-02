"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black h-screen">
        {/* navbar goes here */}
        <nav className="w-full h-14 bg-white flex items-center justify-between px-4 md:px-4">
          <div className=" flex items-center">
            <img
              src="/assets/img/logob.png"
              alt="logo"
              className="h-12 w-auto hover:cursor-pointer"
            ></img>
          </div>
          <ul className="md:flex hidden font-semibold">
            <li className="mx-[10px] cursor-pointer">BRANDS</li>
            <li
              className="mx-[10px] cursor-pointer nav-link dropdown-toggle"
              href="/division"
            >
              DIVISION
            </li>
            <li
              id="dropdown"
              className="mx-[10px] cursor-pointer nav-link dropdown-toggle"
              role="button"
            >
              CATEGORY
            </li>
            <li className="mx-[10px] cursor-pointer">CONNECT</li>
            <li className="mx-[10px] cursor-pointer">BROCHURE</li>
            <li className="mx-[10px] cursor-pointer">GROUP</li>
          </ul>
          <div className="md:hidden ml-auto">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </nav>
        {/* navbar ends here  */}
        <section>
          <Carousel>
            <div>
              <img src="/assets/img/prgpharma.jpg" alt="carousel"></img>
            </div>
            <div>
              <img src="/assets/img/prgpharma2.jpg" alt="carousel2"></img>
            </div>
            <div>
              <img src="/assets/img/prgpharma3.jpg" alt="carousel3"></img>
            </div>
          </Carousel>
        </section>
        {/* Explore The Divisions Starts Here*/}
        <section>
          <div className="bg-white text-center text-black text-4xl w-full h-auto">
            <h1 className="font-semibold">Explore The Divisions</h1>
            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>
            <div>
              <div>
                <ul className="flex flex-row space-x-8 text-xl mt-4 justify-center">
                  <li className="cursor-pointer hover:text-red-500" href="#">
                    Fdf Formulation
                  </li>
                  <li className="cursor-pointer hover:text-red-500" href="#">
                    Nutra & Functional
                  </li>
                  <li className="cursor-pointer hover:text-red-500" href="#">
                    Api & Chemicals
                  </li>
                  <li className="cursor-pointer hover:text-red-500" href="#">
                    Surgical & Consumer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url('/assets/img/bg-image.jpg')`,
          }}
          className="w-full bg-cover bg-center bg-no-repeat pt-10 pb-10"
        >
          <div className="w-full flex flex-wrap justify-center text-white">
            {/* First Image Block */}
            <div className="w-60 relative flex flex-col items-center mb-12 mx-6 group">
              <img src="/assets/img/img1.jpg" alt="img1" className="mb-4"></img>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-semibold">Speciality</h2>
                <p className="text-sm">Fdf Formulation</p>
                <button
                  type="button"
                  className="info text-red-500 hover:text-red-600 mt-2"
                >
                  Read more
                </button>
              </div>
            </div>

            {/* Second Image Block */}
            <div className="w-60 relative flex flex-col items-center mb-12 mx-6 group">
              <img src="/assets/img/bg1.jpg" alt="img1" className="mb-4"></img>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-semibold">Generics</h2>
                <p className="text-sm">Fdf Formulation</p>
                <button
                  type="button"
                  className="info text-red-500 hover:text-red-600 mt-2"
                >
                  Read more
                </button>
              </div>
            </div>

            {/* Third Image Block */}
            <div className="w-60 relative flex flex-col items-center mb-12 mx-6 group">
              <img src="/assets/img/bg2.jpg" alt="img1" className="mb-4"></img>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-semibold">Rare Diseases</h2>
                <p className="text-sm">Fdf Formulation</p>
                <button
                  type="button"
                  className="info text-red-500 hover:text-red-600 mt-2"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url('/assets/img/imageGIF.jpg')`,
          }}
          className="w-full bg-cover bg-center bg-no-repeat pt-10 pb-10 min-h-[500px]"
        >
          <div className="bg-white text-center text-black text-4xl w-full h-auto">
            <h1 className="font-semibold">
              PATENTED PRODUCTS ACROSS THE GLOBE
            </h1>
            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>
            <div className="relative z-10">
              <Carousel>
                <div>
                  <img src="/assets/img/p1.jpg" alt="carousel"></img>
                </div>
                <div>
                  <img src="/assets/img/p2.jpg" alt="carousel2"></img>
                </div>
                <div>
                  <img src="/assets/img/p3.jpg" alt="carousel3"></img>
                </div>
                <div>
                  <img src="/assets/img/p4.jpg" alt="carousel3"></img>
                </div>
                <div>
                  <img src="/assets/img/p5.jpg" alt="carousel3"></img>
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white text-center text-black text-4xl w-full h-auto">
            <h1 className="font-semibold">Product Showcase</h1>

            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>
            <div className="w-full flex flex-wrap justify-center text-white">
              <div className="w-60 flex flex-col items-center mb-12 mx-6">
                <img
                  src="/assets/img/tablet.jpg"
                  alt="tablet"
                  className="mb-4"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">Speciality</h2>
                  <p className="text-sm">Fdf Formulation</p>
                  <a
                    className="info text-black hover:text-blue-600 mt-2"
                    href="#"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url('/assets/img/our-client.jpg')`,
          }}
          className="w-full bg-cover bg-center bg-no-repeat"
        >
          <div className="bg-white text-center text-black text-4xl w-full h-auto pt-6 pb-10">
            <h2 className="font-semibold mb-8 flex items-center justify-center space-x-3">
              <span>Our Brands</span>
            </h2>
            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>

            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="hover:cursor-pointer" href="#">
                <img src="/assets/img/b1.png" alt="b1"></img>
              </SwiperSlide>
              <SwiperSlide className="hover:cursor-pointer" href="#">
                <img src="/assets/img/b2.png" alt="b2"></img>
              </SwiperSlide>
              <SwiperSlide className="hover:cursor-pointer" href="#">
                <img src="/assets/img/b3.png" alt="b3"></img>
              </SwiperSlide>
              <SwiperSlide className="hover:cursor-pointer" href="#">
                <img src="/assets/img/b4.png" alt="b4"></img>
              </SwiperSlide>
              <SwiperSlide className="hover:cursor-pointer" href="#">
                <img src="/assets/img/b5.png" alt="b5"></img>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url('/assets/img/our-client.jpg')`,
          }}
          className="w-full bg-cover bg-center bg-no-repeat"
        >
          <div className="bg-white text-center text-black text-4xl w-full h-auto pt-6 pb-10">
            <h2 className="font-semibold mb-8 flex items-center justify-center space-x-3">
              <img
                src="/assets/img/logob.png"
                alt="logo"
                className="h-12 w-auto"
              />
              <span>Group Companies</span>
            </h2>
            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>

            <div className="flex flex-wrap justify-center space-x-6">
              <div className="hover:cursor-pointer">
                <img
                  src="/assets/img/logob.png"
                  alt="logo"
                  className="h-48 w-auto mb-4"
                />
                <a href="#"></a>
              </div>

              <div className="hover:cursor-pointer">
                <img
                  src="/assets/img/ark.png"
                  alt="ark"
                  className="h-48 w-auto mb-4"
                />
                <a href="#"></a>
              </div>

              <div className="hover:cursor-pointer">
                <img
                  src="/assets/img/metallurgy.png"
                  alt="metallurgy"
                  className="h-48 w-auto mb-4"
                />
                <a href="#"></a>
              </div>

              <div className="hover:cursor-pointer">
                <img
                  src="/assets/img/mg.png"
                  alt="mg"
                  className="h-48 w-auto mb-4"
                />
                <a href="#"></a>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url('/assets/img/our principle.jpg')`,
          }}
          className="w-full bg-cover bg-center bg-no-repeat "
        >
          <div className="text-center text-black text-4xl w-full h-auto pt-6">
            <h2 className="font-semibold ">Our Principle</h2>
            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>
            <div className="w-full flex flex-wrap justify-center text-white">
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p1.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p2.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p3.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p4.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p5.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p6.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p7.png" alt="tablet" className="mb-4" />
              </div>
              <div className="w-60 flex flex-col items-center mb-12 mx-6 hover:cursor-pointer">
                <img src="/assets/img/p8.png" alt="tablet" className="mb-4" />
              </div>
            </div>
          </div>
        </section>
        {/* Footer section starts here */}
        <section>
          <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
            <div>
              <img
                className="w-40 h-16"
                src="/assets/img/logob.png"
                alt="logo"
              ></img>
            </div>
            <div>
              <h2 className="font-bold text-xl text-red-500 mt-4">Company</h2>
              <div className="w-32 h-1 border-b-2 border-red-500 rounded-3xl my-2"></div>
              <div>
                <p>Plants</p>
                <p>Products</p>
                <p>International Business</p>
                <p>Contact Us</p>
                <p>CRS Policy</p>
                <p>Download Product List</p>
                <p>News</p>
                <p>Career</p>
                <p>Enquiry</p>
                <p>Login</p>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl text-red-500 mt-4">
                Connect With Us
              </h2>
              <div className="w-32 h-1 border-b-2 border-red-500 rounded-3xl my-2"></div>
              <div>
                <p className="font-bold">For Product & General Enquiry</p>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl text-red-500 mt-4">
                Scan Product List
              </h2>
              <div className="w-32 h-1 border-b-2 border-red-500 rounded-3xl my-2"></div>
              <div>
                <img
                  className="w-60 h-60"
                  src="assets/img/barcode.png"
                  alt=""
                ></img>
              </div>
            </div>
          </footer>
        </section>
        {/* Footer section ends here */}
        <section>
          <div className="bg-white text-center text-black text-4xl w-full h-auto">
            <h1 className="font-semibold">PRG Pharma Worldwide</h1>
            <div className="w-32 h-1 border-b-4 border-red-600 mt-2 md:mt-4 mb-12 mx-auto"></div>
            <div className="w-full text-black">
              <div className="">
                {/* Africa */}
                <h2 className="text-xl mb-2">Africa</h2>
                <p className="mb-4 countryList">
                  Mauritania, Mauritius, Morocco, Mozambique, Namibia, Niger,
                  Nigeria, Republic-Of-Congo, Rwanda, Sao-Tome-And-Principe,
                  Senegal, Seychelles, Sierra-Leone, Somalia, South-Africa,
                  Sudan, Swaziland, Tanzania, The-Gambia, Togo, Tunisia, Uganda,
                  Zambia, Zimbabwe
                </p>

                {/* Asia Pacific */}
                <h2 className="text-xl mb-2">Asia Pacific</h2>
                <p className="mb-4 countryList">
                  Australia, Brunei, Burma, Cambodia, China, East-Timor, Fiji,
                  Indonesia, Japan, Kazakhstan, Kiribati, Kyrgyzstan, Laos,
                  Malaysia, Marshall-Islands, Micronesia, Mongolia, Nauru,
                  New-Zealand, North-Korea, Palau, Papua-New-Guinea, Samoa,
                  Singapore, Solomon-Islands, South-Korea, Taiwan, Tajikistan,
                  Thailand, The-Philippines, Tonga, Turkmenistan, Tuvalu,
                  Uzbekistan, Vanuatu, Vietnam
                </p>

                {/* Americas */}
                <h2 className="text-xl mb-2">America</h2>
                <p className="mb-4 countryList">
                  Antigua-And-Barbuda, Argentina, Bahamas, Barbados, Belize,
                  Bolivia, Brazil, Canada, Chile, Colombia, Costa-Rica, Cuba,
                  Dominica, Dominican-Republic, Ecuador, El-Salvador, Grenada,
                  Guatemala, Guyana, Haiti, Honduras, Jamaica, Mexico,
                  Nicaragua, Panama, Paraguay, Peru, St-Kitts-And-Nevis,
                  St-Lucia, St-Vincent-And-The-Grenadines, Suriname,
                  Trinidad-And-Tobago, United-States-Of-America, Uruguay,
                  Venezuela
                </p>

                {/* Europe */}
                <h2 className="text-xl mb-2">Europe</h2>
                <p className="mb-4 countryList">
                  Albania, Andorra, Armenia, Austria, Azerbaijan, Belarus,
                  Belgium, Bosnia-Hercegovina, Bulgaria, Croatia, Cyprus,
                  Czech-Republic, Denmark, Estonia, Finland, France, Georgia,
                  Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta,
                  Moldova, Monaco, Montenegro, Norway, Poland, Portugal, Russia,
                  San-Marino, Serbia, Slovakia, Slovenia, Spain, Sweden,
                  Switzerland, The-Netherlands, Turkey, Ukraine, United-Kingdom,
                  Vatican
                </p>

                {/* Middle East */}
                <h2 className="text-xl mb-2">Middle East</h2>
                <p className="mb-4 countryList">
                  Algeria, Egypt, Iran, Iraq,
                  Israel-And-Palestinian-Territories, Jordan, Kuwait, Lebanon,
                  Libya, Oman, Qatar, Saudi-Arabia, Sudan, Syria, Tunisia,
                  United-Arab-Emirates, Yemen
                </p>

                {/* South Asia */}
                <h2 className="text-xl mb-2">South Asia</h2>
                <p className="mb-4 countryList">
                  Afghanistan, Bangladesh, Bhutan, India, Nepal, Pakistan,
                  Sri-Lanka, The-Maldives
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

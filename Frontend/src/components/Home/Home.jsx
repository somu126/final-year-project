import React from 'react'
import  aboutImg from '../images/about.png';
const Home = () => {
    return (
        <div>
            <section class="py-2 hero-bg" style={{height:'100vh'}}>
        <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-inner pt-4">
                <div class="carousel-item active">
                    <section class="py-5">
                        <div class="container-fluid">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-5 text-center text-sm-start aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                                    <h1 class="text-white fw-bold" >
                                        Transform Your Data into Instant Impact
                                    </h1>
                                    <p class="py-2 text-white fs-5">
                                        Discover valuable insights and make data-driven decisions to take your business
                                        to new heights. Experience the future of efficiency today.
                                    </p>
                                    <div class="my-3">
                                        <a href="/Login" class="btn btn-light px-4 py-2 rounded-pill border-0">Reach Now</a>
                                    </div>
                                </div>
                               
                                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center text-sm-start aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                                    <img src="https://www.integraldataanalytics.com/assest/images/slider-1.png" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    </section>
    <section class="py-5 ">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='text-starts'>
                        <h2 class="text-dar">
                        Welcome to Integral Analytics Solutions

                        </h2>
                        <p class="text-dark">
                            At Chart Info Graphics solutions, we stand behind our services and your satisfaction is our top priority
                        </p>

                        <p className='text-dark py-2'>
                        This method guarantees our customers receive not only the benefits of the latest technology but also the confidence that all of our offerings are built on a solid ethical basis and offer them the most beneficial of both worlds when they take their first steps on a data-driven path to success.
                        </p>
                        <div>
                            <a href="/sign-up" class="btn btn-outline-primary  px-4 py-2 border-0 rounded-pill">Reach Us</a>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div className='my-2'>
                        <img src='https://i0.wp.com/www.yellowfinbi.com/assets/files/2022/02/dashboard_design_tips_yellowfin_bi.jpg?fit=1200%2C628&ssl=1' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 bg-white bg-con">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <div>
                        <h2 class="text-white">
                        Why Choose Chart Info Graphics Analytics For Your Data Needs
                        </h2>
                        <p class="text-white">
                            At integral Analytics solutions, we stand behind our services and your satisfaction is our top priority
                        </p>
                        <div>
                            <a href="/sign-up" class="btn btn-light px-4 py-2 border-0 rounded-pill">Reach Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
          
           
           
     
        </div>
    )
}


export default Home;
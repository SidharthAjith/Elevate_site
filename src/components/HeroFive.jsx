import React from 'react'

const HeroFive = () => {
    return (
        <section className='bg-dark2'>
            <div
                className="hero-wrapper hero-5"
                id="hero"
                // style={{ backgroundImage: "url(assets/img/hero/hero_bg_5_1.png)", backgroundSize: 'cover' }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-style5 !pt-[150px] text-center">
                                <h1 className="hero-title text-white">
                                <span className='md:text-[60px] text-[40px]'> Your Gateway to</span><br/>
                                    <span className="text-theme2 sm:max-md:text-[40px] "> Engineering Success!</span><br/> <span className='md:text-[60px] text-[40px]'>Join Top Companies</span>
                                </h1>
                                <p className="hero-text text-white">
                                We connect skilled professionals and freshers with top engineering companies, offering exclusive jobs, career growth, and hands-on training in<span className='font-bold'> manufacturing, assembly lines, and maintenance engineering.</span> 

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="hero-thumb5-1">
                                <img src="assets/img/hero/banner.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroFive

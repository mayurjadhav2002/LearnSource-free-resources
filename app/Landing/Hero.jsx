
export default function Hero() {
    return (
        <section>

            {/* Illustration behind hero content */}
            <div className="absolute flex right-1/2 lg:right-0 left-0 lg:left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" 
            aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>
            

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1 class=" text-blue-900 text-4xl sm:text-5xl 
           xl:text-7xl dark:text-white leading-relaxed font-bold" data-aos="zoom-y-out">
                            Unlock a World of Free <br />
                            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500 dark:from-blue-400">
                                Software,
                            </span>
                            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 dark:from-blue-400
           dark:to-orange-300"> Internships,</span>
                            <span className='text-gray-800'> &</span>
                            <span class="relative bg-clip-text bg-gradient-to-r text-purple-600 
           dark:text-purple-300"> Learning Resources. </span></h1>
                        <div className="max-w-3xl mx-auto">
                        <div className="py-2 " data-aos="zoom-y-out" data-aos-delay="300">
                        <div class="flex items-center mt-4 w-full bg-red-100">
                        <div class="relative w-full bg-slate-50">
                        
                        <input type="email" className="h-14 w-full pl-4 pr-24 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Your Email..." />
                        <div class="absolute top-2 right-2">
                        
                        <button class="h-10 w-24 px-2 font-semibold text-white rounded-lg bg-blue-500 hover:bg-blue-600">Subscribe</button>
                        
                        </div>
                        </div>
                        </div>
                        <p className="text-left text-sm">Subscribe the newsletter to Stay updated!</p>
                            </div>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4" data-aos="zoom-y-out" data-aos-delay="300">
                                <div class="dark:text-gray-300">
                                    <div class="grid grid-cols-3 gap-auto space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                        <a aria-label="add to slack" href="#" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                            <div class="flex justify-center space-x-4">
                                                <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png" alt="slack logo" loading="lazy" width="128" height="128" />
                                                <span class="hidden font-medium md:block dark:text-white">Slack</span>
                                            </div>
                                        </a>
                                        <a aria-label="add to chat" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                                            <div class="flex justify-center space-x-4">
                                                <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png" alt="chat logo" loading="lazy" width="128" height="128" />
                                                <span class="hidden font-medium md:block dark:text-white">Google Chat</span>
                                            </div>
                                        </a>
                                        <a aria-label="add to zoom" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                                            <div class="flex justify-center space-x-4">
                                                <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128" />
                                                <span class="hidden font-medium md:block dark:text-white">Zoom</span>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
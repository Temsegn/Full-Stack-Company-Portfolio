import react from 'react'

function Vision() {
    return(
        <section className="bg-white px-10">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-extrabold text-orange-600 sm:text-4xl">Vision </h2>
                    <p className="mt-4 text-gray-600 text-lg">At Dream More Company, we envision a world where innovation, creativity, and ambition converge to create transformative experiences for businesses and individuals alike. We strive to empower our clients to reach beyond the ordinary, fostering an environment where dreams are nurtured and brought to life. Through our commitment to excellence, cutting-edge solutions, and unwavering integrity, we aim to inspire a future where growth, sustainability, and success are limitless. Together, we will push boundaries, challenge norms, and help our partners turn their most ambitious dreams into reality.</p>
                    <div className="mt-8">
                        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                            <span className="ml-2">&#8594;</span></a>
                    </div>
                </div>
                <div className="mt-12 md:mt-0">
                    <img src="/visiont.png" className='w-200 h-200 transform transition-transform duration-1000 ease-in-out hover:translate-x-16 hover:translate-y-8 hover:rotate-180' />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Vision;

import react from 'react'

function Mission() {
    return(
        <section className="bg-white px-10">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-extrabold text-orange-600 sm:text-4xl">Mission </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                    The mission of Dream More Company is to inspire innovation and creativity through our exceptional products and services. We aim to empower individuals and businesses to reach their full potential by providing cutting-edge solutions. Our commitment to excellence drives us to deliver high-quality experiences with a focus on sustainability. We strive to foster a culture of collaboration, inclusivity, and growth within every project we undertake. Dream More Company is dedicated to creating lasting impacts, turning visionary ideas into reality.</p>
                    <div className="mt-8">
                        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                            <span className="ml-2">&#8594;</span></a>
                    </div>
                </div>
                <div className="mt-12 md:mt-0">
                    <img src="/vision2.png" className='w-200 h-200 transform transition-transform duration-1000 ease-in-out hover:translate-x-16 hover:translate-y-8 hover:rotate-180' />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Mission;

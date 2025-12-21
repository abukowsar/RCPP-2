import React from 'react';

const ImpactStatistics = () => {
    return (
        <div className="py-12 bg-white text-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-extrabold mb-2 tracking-tight text-gray-900">Our Impact in Numbers</h2>
                    <p className="text-lg text-green-700 max-w-3xl mx-auto leading-relaxed">
                        Real results in the fight against cybercrime
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    {/* Statistic Item */}
                    <div className="text-center p-3 bg-white bg-opacity-20 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="text-4xl font-extrabold mb-2 animate__animated animate__fadeInUp">
                            <span className="text-green-500">50K+</span>
                        </div>
                        <div className="text-green-700 text-base">Incidents Reported</div>
                        <div className="text-gray-500 text-xs mt-1">This year alone</div>
                    </div>

                    {/* Statistic Item */}
                    <div className="text-center p-3 bg-white bg-opacity-20 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="text-4xl font-extrabold mb-2 animate__animated animate__fadeInUp">
                            <span className="text-green-500">98%</span>
                        </div>
                        <div className="text-green-700 text-base">Resolution Rate</div>
                        <div className="text-gray-500 text-xs mt-1">Average response time: 2 hours</div>
                    </div>

                    {/* Statistic Item */}
                    <div className="text-center p-3 bg-white bg-opacity-20 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="text-4xl font-extrabold mb-2 animate__animated animate__fadeInUp">
                            <span className="text-green-500">1M+</span>
                        </div>
                        <div className="text-green-700 text-base">People Trained</div>
                        <div className="text-gray-500 text-xs mt-1">Through our awareness programs</div>
                    </div>

                    {/* Statistic Item */}
                    <div className="text-center p-3 bg-white bg-opacity-20 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="text-4xl font-extrabold mb-2 animate__animated animate__fadeInUp">
                            <span className="text-green-500">24/7</span>
                        </div>
                        <div className="text-green-700 text-base">Expert Support</div>
                        <div className="text-gray-500 text-xs mt-1">365 days a year</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactStatistics;

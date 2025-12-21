import { Button } from '@/components/ui/button';
import { AlertTriangle, Badge, BookOpen } from 'lucide-react';
import React from 'react';

const ComprehensiveSection = () => {
    return (
        <>
            <div className="px-6 py-16 bg-cover bg-center" style={{
                backgroundImage:
                    "linear-gradient(to right, rgba(255 255 255 / 90%), rgba(255 255 255 / 90%)), url('https://img.freepik.com/free-vector/perspective-grid-pattern_1409-1826.jpg')",
            }}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Cyber Protection</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Everything you need to stay safe in the digital world
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="p-4 bg-red-100 rounded-lg mr-6">
                                    <AlertTriangle className="h-10 w-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Incident Reporting & Response</h3>
                            </div>
                            <p className="text-gray-600 mb-6 text-lg">
                                Fast, secure, and anonymous reporting system with real-time tracking and expert response coordination.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Anonymous reporting options</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Real-time case tracking</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Digital evidence management</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Law enforcement coordination</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                                    <span className="font-medium text-red-800">High Priority Cases</span>
                                    <Badge className="bg-red-600">24</Badge>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                                    <span className="font-medium text-amber-800">Under Investigation</span>
                                    <Badge className="bg-amber-600">156</Badge>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                    <span className="font-medium text-green-800">Resolved This Week</span>
                                    <Badge className="bg-green-600">89</Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-gray-900">Popular Courses</h4>
                                        <span className="text-sm text-gray-500">Completion Rate</span>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Password Security</span>
                                                <span className="text-sm text-gray-500">94%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "94%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Phishing Awareness</span>
                                                <span className="text-sm text-gray-500">87%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "87%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Social Media Safety</span>
                                                <span className="text-sm text-gray-500">91%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "91%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                                    <BookOpen className="h-10 w-10 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Training & Awareness</h3>
                            </div>
                            <p className="text-gray-600 mb-6 text-lg">
                                Comprehensive educational resources to build cyber resilience and prevent future incidents.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Interactive video courses</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Quiz-based certifications</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Progress tracking</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                                    <span className="text-gray-700">Regular updates on new threats</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Current Threats Alert */}
           
        </>
    );
};

export default ComprehensiveSection;

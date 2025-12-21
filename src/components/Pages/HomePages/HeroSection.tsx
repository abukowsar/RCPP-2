import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, MessageCircle, BookOpen, MapPin, Users } from 'lucide-react';
import React from 'react';
import Link from "next/link";

const HeroSection = () => {
    return (
        <div
            className="px-6 py-16 bg-cover bg-center"
            style={{
                backgroundImage: "linear-gradient(to right, rgba(255 253 253), rgba(0, 0, 0, 0)), url('https://www.rangtech.com/assets/img/photos/Cybersecurity_header_image.jpg')",
            }}
        /* style="background-image: linear-gradient(to right, rgb(255 253 253), rgba(0, 0, 0, 0)), url(https://www.rangtech.com/assets/img/photos/Cybersecurity_header_image.jpg);" */
        >          <div className="container mx-auto  grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                            <Shield className="h-3 w-3 mr-1" />
                            Rapid Cyber Prevention Program
                        </Badge>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Protecting You in the <span className="text-emerald-600">Digital World</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Promoting safe internet use and preventing cybercrime through real-time response, expert assistance, and
                            comprehensive awareness programs. Your digital safety is our priority.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={`/report`}>
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                                <AlertTriangle className="h-5 w-5 mr-2" />
                                Report Incident
                            </Button>
                        </Link>

                        <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Get Help Now
                        </Button>
                    </div>


                </div>

                {/* Right Column - Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="p-2 md:p-4 hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500">
                        <CardContent className="p-0 md:p-2">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <AlertTriangle className="h-5 w-5 text-emerald-600" />
                                </div>
                                <Link href={`/report`}>
                                    <h3 className="font-semibold text-gray-900">Report Incidents</h3>
                                </Link>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Submit reports on hacking, online harassment, and other cyber incidents quickly and securely.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-2 md:p-4 hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
                        <CardContent className="p-0 md:p-2">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <MessageCircle className="h-5 w-5 text-amber-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">Cyber Help Desk</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Get assistance and advice from our 24/7 cyber help desk with live chat and AI support.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-2 md:p-4 hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                        <CardContent className="p-0 md:p-2">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <BookOpen className="h-5 w-5 text-purple-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">Training & Resources</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Access courses, videos, and materials on cyber safety and best practices with certification.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-2 md:p-4 hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                        <CardContent className="p-0 md:p-2">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <MapPin className="h-5 w-5 text-red-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">Threat Intelligence</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Stay informed about emerging cyber threats with our AI-powered monitoring and alerts system.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

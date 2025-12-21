"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Shield,
    AlertTriangle,
    Users,
    BookOpen,
    BarChart3,
    ChevronDown,
    CheckCircle,
    Target,
    Globe,
    Zap,
} from "lucide-react"

const InfoSection = () => {
    const [active, setActive] = useState<string | null>(null)

    const toggleAccordion = (id: string) => {
        setActive(active === id ? null : id)
    }

    const accordionItems = [
        {
            id: "report-cyber-crime",
            title: "How to report cyber crimes",
            content:
                "Learn how to securely report cyber crimes through our advanced RCPP platform with real-time tracking and anonymous options.",
            icon: AlertTriangle,
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
        },
        {
            id: "cyber-awareness",
            title: "Cyber crime awareness",
            content:
                "Discover comprehensive resources, latest threat intelligence, and prevention measures to stay protected online.",
            icon: Shield,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-200",
        },
        {
            id: "law-enforcement-tools",
            title: "Law enforcement tools",
            content:
                "Access specialized investigation tools, case management systems, and digital evidence handling resources.",
            icon: Users,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
        },
        {
            id: "training-modules",
            title: "Training modules for internet safety",
            content:
                "Explore interactive courses, certification programs, and hands-on training materials for all skill levels.",
            icon: BookOpen,
            color: "text-amber-600",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
        },
        {
            id: "threat-dashboard",
            title: "Dynamic threat visualization dashboard",
            content:
                "Monitor cyber threats in real-time with AI-powered analytics, geographic mapping, and predictive insights.",
            icon: BarChart3,
            color: "text-cyan-600",
            bgColor: "bg-cyan-50",
            borderColor: "border-cyan-200",
        },
    ]

    const features = [
        { icon: Target, text: "Real-time incident tracking" },
        { icon: Globe, text: "Global threat intelligence" },
        { icon: Zap, text: "Rapid response protocols" },
        { icon: CheckCircle, text: "24/7 expert support" },
    ]

    return (
        <div className=" py-6 md:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className=" container mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 mb-4">
                        <Shield className="h-3 w-3 mr-1" />
                        About RCPP
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Rapid Cyber Prevention Program</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Leading the fight against cybercrime through innovation, education, and rapid response
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left side: About the Program */}
                    <div className="lg:col-span-2">
                        <Card className="p-8 shadow-lg border-0 bg-white">
                            <CardContent className="p-0">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center">
                                        <Shield className="h-6 w-6 mr-2" />
                                        Cyber Crime Awareness and Prevention
                                    </h3>

                                    <div className="space-y-6 text-gray-700 leading-relaxed">
                                        <p className="text-lg">
                                            The Rapid Cyber Prevention Program (RCPP) is a comprehensive initiative designed to
                                            <strong className="text-gray-900"> tackle cyber crimes and enhance online safety</strong> through
                                            cutting-edge technology, expert guidance, and community collaboration.
                                        </p>

                                        <p className="text-lg">
                                            Our platform empowers users to report cyber incidents securely, provides real-time threat
                                            intelligence, and offers educational resources while supporting law enforcement agencies with
                                            advanced investigation tools.
                                        </p>

                                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
                                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                                <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                                                Key Capabilities
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {features.map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-3">
                                                        <div className="p-2 bg-emerald-100 rounded-lg">
                                                            <feature.icon className="h-4 w-4 text-emerald-600" />
                                                        </div>
                                                        <span className="text-gray-700 font-medium">{feature.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mt-8 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <Shield className="h-8 w-8 mx-auto mb-3 text-emerald-100" />
                                        <h5 className="font-bold text-lg mb-2">Ready to Get Started?</h5>
                                        <p className="text-emerald-100 text-sm mb-4">
                                            Join thousands of users protecting themselves online
                                        </p>
                                        <button className="w-full bg-white text-emerald-600 font-semibold py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors">
                                            Explore Platform
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                    </div>

                    {/* Right side: Modern Accordion */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <BookOpen className="h-6 w-6 text-emerald-600 mr-2" />
                                What You Need to Know
                            </h4>

                            <div className="space-y-4">
                                {accordionItems.map((item) => {
                                    const Icon = item.icon
                                    const isActive = active === item.id

                                    return (
                                        <Card
                                            key={item.id}
                                            className={`overflow-hidden transition-all duration-300 hover:shadow-md ${isActive ? "shadow-lg ring-2 ring-emerald-200" : "shadow-sm"
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggleAccordion(item.id)}
                                                className="w-full text-left p-6 focus:outline-none focus:ring-2 "
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className={`p-2 rounded-lg ${item.bgColor}`}>
                                                            <Icon className={`h-5 w-5 ${item.color}`} />
                                                        </div>
                                                        <span className="font-semibold text-gray-900 text-sm leading-tight">{item.title}</span>
                                                    </div>
                                                    <ChevronDown
                                                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isActive ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </div>
                                            </button>

                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                                    } overflow-hidden`}
                                            >
                                                <div className={`p-6 pt-0 border-t ${item.borderColor} ${item.bgColor} bg-opacity-30`}>
                                                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })}
                            </div>

                            {/* Call to Action */}
                            
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default InfoSection

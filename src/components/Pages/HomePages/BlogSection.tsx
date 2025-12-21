import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function NewsSection() {
    const trendsData = {
        trends: [
            {
                id: 1,
                title: "Rising Cybersecurity Threats in 2024",
                date: "January 15, 2024",
                description: "As we enter 2024, new forms of cyberattacks are emerging, with increased sophistication. Learn how to stay ahead of these threats and secure your digital presence.",
                image: "/assets/cybersecurity-threats.jpg",
            },
            {
                id: 2,
                title: "How to Protect Your Business from Ransomware Attacks",
                date: "January 10, 2024",
                description: "Ransomware continues to rise as a major threat. In this article, we explore effective strategies for preventing and responding to ransomware attacks.",
                image: "/assets/ransomware.jpg",
            },
            {
                id: 3,
                title: "The Role of AI in Cybercrime Prevention",
                date: "January 5, 2024",
                description: "AI and machine learning are changing the cybersecurity landscape. Discover how these technologies are being used to detect and prevent cybercrime.",
                image: "/assets/ai-cybercrime.jpg",
            },
        ],
    };

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <div className="bg-[#e7483d] text-white text-sm px-4 py-1 inline-block mb-4 rounded">
                        Blogs
                    </div>
                    <h2 className="text-4xl max-w-2xl font-bold">
                        The Latest in Cybersecurity: Trends & Insights
                    </h2>
                </div>
                <Link href={"/blog"}>
                    <Button variant="default" className="bg-primary hover:bg-[#005580]">
                        Learn More →
                    </Button>
                </Link>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Featured Article */}
                <div className="space-y-4 shadow-sm">
                    <Image
                        src="https://www.dataguard.com/hubfs/240326_Blogpost_CybersecurityMeasures%20%281%29.webp"
                        alt="Cybersecurity"
                        width={600}
                        height={400}
                        className="w-full rounded-lg object-cover h-[400px]"
                    />
                    <div className="p-3 shadow-sm">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span></span>
                            <div className="flex items-center gap-2">
                                <Heart size={16} /> 102
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageSquare size={16} /> 45
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Understanding Cybersecurity in 2024: Key Trends to Watch
                        </h3>
                        <p className="text-gray-600 mt-2">
                            As cyber threats continue to evolve, understanding the latest trends in cybersecurity is essential. This article explores what businesses and individuals need to watch out for in 2024.
                        </p>
                       
                        <div className="flex justify-between items-center pt-4">
                            <span className="text-gray-600">By Sarah Lee</span>
                            <Link href={`/news/5?id=5`}>
                                <Button variant="link" className="text-primary">
                                    Read More →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side Articles */}
                <div className="space-y-8">
                    {trendsData?.trends.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 shadow-sm p-1">
                            <Image
                                src="https://www.dataguard.com/hubfs/240326_Blogpost_CybersecurityMeasures%20%281%29.webp"
                                alt="Cybersecurity news"
                                width={200}
                                height={150}
                                className="rounded-lg object-cover w-[200px] h-[150px]"
                            />
                            <div className="space-y-2">
                                <span className="text-sm text-gray-600">{item.date}</span>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                <Link href={`/news/${item.id}?id=${item.id}`}>
                                    <button className="text-primary hover:text-black mt-3">
                                        Learn more ...
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

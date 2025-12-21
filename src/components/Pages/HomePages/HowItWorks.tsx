import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export default function HowItWorks() {
  return (
    <section className="relative px-6  py-6 md:py-12 bg-[#f8f9fa]">
  
      {/* Content Section */}
      <div className="container mx-auto relative z-10 my-2 md:my-10">
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-16 lg:gap-24">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://cdn.technologyadvice.com/wp-content/uploads/2023/07/ad-hoc-reporting.jpeg"
                alt="Cyber Incident Response"
                width={500}
                height={600}
                className="object-cover w-full h-full relative z-10"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 relative">
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-14 h-14 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"></div>

            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              How RCPP Works
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary/40 rounded-full"></span>
            </Badge>

            <p className="mb-6 text-lg text-gray-900 relative z-10">
              Our streamlined process ensures rapid response and effective resolution of cyber incidents.
            </p>

            {/* Steps Section */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start">
                <div className="w-5 h-5 bg-primary rounded-full mr-4"></div>
                <p className="text-lg text-gray-700">
                  <strong>Report:</strong> Submit your cyber incident through our secure reporting system.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-primary rounded-full mr-4"></div>
                <p className="text-lg text-gray-700">
                  <strong>Assess:</strong> Our experts analyze and prioritize your case for immediate action.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-primary rounded-full mr-4"></div>
                <p className="text-lg text-gray-700">
                  <strong>Respond:</strong> Coordinated response with law enforcement and cybersecurity teams.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-primary rounded-full mr-4"></div>
                <p className="text-lg text-gray-700">
                  <strong>Prevent:</strong> Receive guidance and training to prevent future incidents.
                </p>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-red-50 border-l-4 border-primary p-6 my-6 rounded-lg relative overflow-hidden">
              <div className="absolute -top-6 -right-6 text-primary/20 w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 006.75-6.75c0-2.89-1.682-5.373-4.113-6.63a.75.75 0 01-.314-.974l1.45-3.365a.75.75 0 00-.88-1.001 42.902 42.902 0 00-7.634 3.241c-.35.192-.69.384-1.022.577a.75.75 0 00-.335.986l1.56 3.362a.75.75 0 01-.416.961 6.647 6.647 0 00-3.059 5.505c0 2.968 1.9 5.5 4.563 6.396a.75.75 0 01.407.974l-1.518 3.496a.75.75 0 00.937 1.002c.774-.258 1.527-.552 2.26-.878a.75.75 0 01.818.16l1.881 1.88a.75.75 0 001.28-.531v-7.36a.75.75 0 00-.704-.738z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-800 relative z-10 text-base">
                With a commitment to trust, authenticity, and personalized cybersecurity measures, we provide a seamless experience that ensures protection. Whether you're dealing with local or global threats, RCPP is here to support you at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

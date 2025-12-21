import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import React from 'react';

const CurrentThreats = () => {
    return (
        <div>
            <div className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between flex-wrap gap-8">
                        <div className="flex items-center">
                            <div className="p-4 bg-red-500 rounded-lg mr-6">
                                <AlertTriangle className="h-10 w-10 text-white animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-1">Current Threat Alert</h3>
                                <p className="text-red-100">New phishing campaign targeting banking customers detected</p>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <Button
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
                            >
                                View Details
                            </Button>
                            <Button className="bg-white text-red-600 hover:bg-red-50">Report Similar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentThreats;
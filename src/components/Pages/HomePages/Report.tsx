"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Shield,
    AlertTriangle,
    Upload,
    FileText,
    Phone,
    Mail,
    Clock,
    CheckCircle,
    X,
    Eye,
    EyeOff,
    Lock,
    Globe,
    Smartphone,
    CreditCard,
    MessageSquare,
    Wifi,
} from "lucide-react"

interface UploadedFile {
    name: string;
    size: number;
    type: string;
    file: File;
}


const ReportIncident = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        incidentType: "",
        urgency: "",
        title: "",
        description: "",
        dateOccurred: "",
        timeOccurred: "",
        isOngoing: false,
        affectedSystems: [],
        evidenceFiles: [],
        reporterName: "",
        reporterEmail: "",
        reporterPhone: "",
        isAnonymous: false,
        agreeToTerms: false,
    })
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [ticketNumber, setTicketNumber] = useState("")

    const incidentTypes = [
        {
            id: "phishing",
            name: "Phishing & Email Scams",
            description: "Suspicious emails, fake websites, or identity theft attempts",
            icon: Mail,
            color: "text-red-600",
            bgColor: "bg-red-50",
        },
        {
            id: "malware",
            name: "Malware & Viruses",
            description: "Computer infections, ransomware, or suspicious software",
            icon: AlertTriangle,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            id: "hacking",
            name: "Hacking & Unauthorized Access",
            description: "Account breaches, unauthorized system access, or data theft",
            icon: Lock,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            id: "online-harassment",
            name: "Online Harassment & Cyberbullying",
            description: "Threats, stalking, or abusive behavior online",
            icon: MessageSquare,
            color: "text-pink-600",
            bgColor: "bg-pink-50",
        },
        {
            id: "financial-fraud",
            name: "Financial Fraud & Scams",
            description: "Credit card fraud, investment scams, or fake transactions",
            icon: CreditCard,
            color: "text-green-600",
            bgColor: "bg-green-50",
        },
        {
            id: "social-media",
            name: "Social Media Incidents",
            description: "Fake profiles, account takeovers, or privacy violations",
            icon: Globe,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            id: "mobile-security",
            name: "Mobile Device Security",
            description: "Smartphone/tablet security issues or malicious apps",
            icon: Smartphone,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
        },
        {
            id: "network-security",
            name: "Network & WiFi Security",
            description: "Unauthorized network access or WiFi security issues",
            icon: Wifi,
            color: "text-cyan-600",
            bgColor: "bg-cyan-50",
        },
        {
            id: "other",
            name: "Other Cyber Incident",
            description: "Any other cybersecurity-related incident",
            icon: Shield,
            color: "text-gray-600",
            bgColor: "bg-gray-50",
        },
    ]

    const urgencyLevels = [
        { value: "low", label: "Low - No immediate threat", color: "text-green-600" },
        { value: "medium", label: "Medium - Potential security risk", color: "text-amber-600" },
        { value: "high", label: "High - Active threat or ongoing incident", color: "text-red-600" },
        { value: "critical", label: "Critical - Immediate response required", color: "text-red-800" },
    ]

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 5MB limit

        setUploadedFiles((prev) => [
            ...prev,
            ...validFiles.map((file) => ({
                name: file.name,
                size: file.size,
                type: file.type,
                file: file,
            })),
        ]);
    };

    const removeFile = (index: any) => {
        setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const formatFileSize = (bytes: any) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Generate ticket number
        const ticket = `RCPP-${Date.now().toString().slice(-6)}`
        setTicketNumber(ticket)
        setShowSuccess(true)
        setIsSubmitting(false)
    }

    const getStepProgress = () => {
        return (currentStep / 4) * 100
    }

    if (showSuccess) {
        return (
            <div className="min-h-screen bg-gray-50">
                

                {/* Success Page */}
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="h-12 w-12 text-green-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Report Submitted Successfully</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Your incident report has been received and is being processed by our security team.
                        </p>

                        <Card className="max-w-2xl mx-auto mb-8">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Ticket Number</h2>
                                    <div className="text-3xl font-mono font-bold text-emerald-600 bg-emerald-50 py-4 px-6 rounded-lg">
                                        {ticketNumber}
                                    </div>
                                    <p className="text-gray-600 mt-2">Save this number for tracking your report</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 text-left">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                                Initial review within 2 hours
                                            </li>
                                            <li className="flex items-center">
                                                <Clock className="h-4 w-4 text-amber-600 mr-2" />
                                                Investigation begins within 24 hours
                                            </li>
                                            <li className="flex items-center">
                                                <Mail className="h-4 w-4 text-blue-600 mr-2" />
                                                Regular updates via email
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Need immediate help?</h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 text-emerald-600 mr-2" />
                                                Emergency: 1-800-CYBER-HELP
                                            </div>
                                            <div className="flex items-center">
                                                <MessageSquare className="h-4 w-4 text-emerald-600 mr-2" />
                                                Live Chat: Available 24/7
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                Track Your Report
                            </Button>
                            <Button variant="outline" size="lg">
                                Submit Another Report
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
         

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-12">
                <div className=" container mx-auto px-6">
                    <div className="text-center">
                        <Badge variant="secondary" className="bg-emerald-500 text-white mb-4">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Incident Reporting
                        </Badge>
                        <h1 className="text-4xl font-bold mb-4">Report a Cyber Incident</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                            Help us protect the community by reporting cybersecurity incidents. Your report will be handled
                            confidentially by our expert security team.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" container mx-auto px-6 py-12">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Step {currentStep} of 4</h2>
                        <span className="text-sm text-gray-600">{Math.round(getStepProgress())}% Complete</span>
                    </div>
                    <Progress value={getStepProgress()} className="h-2" />

                    <div className="flex justify-between mt-4 text-sm">
                        <span className={currentStep >= 1 ? "text-emerald-600 font-medium" : "text-gray-400"}>Incident Type</span>
                        <span className={currentStep >= 2 ? "text-emerald-600 font-medium" : "text-gray-400"}>Details</span>
                        <span className={currentStep >= 3 ? "text-emerald-600 font-medium" : "text-gray-400"}>Evidence</span>
                        <span className={currentStep >= 4 ? "text-emerald-600 font-medium" : "text-gray-400"}>Contact Info</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <Card className=" p-2 md:p-4 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Shield className="h-5 w-5 text-emerald-600 mr-2" />
                                    {currentStep === 1 && "Select Incident Type"}
                                    {currentStep === 2 && "Incident Details"}
                                    {currentStep === 3 && "Upload Evidence"}
                                    {currentStep === 4 && "Contact Information"}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className=" p-2 md:p-3 space-y-6">
                                {/* Step 1: Incident Type */}
                                {currentStep === 1 && (
                                    <div className="space-y-4">
                                        <div>
                                            <Label className="text-base font-medium">What type of cyber incident are you reporting?</Label>
                                            <p className="text-sm text-gray-600 mb-4">
                                                Select the category that best describes your incident
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {incidentTypes.map((type) => {
                                                const Icon = type.icon
                                                return (
                                                    <Card
                                                        key={type.id}
                                                        className={`cursor-pointer transition-all hover:shadow-sm ${formData.incidentType === type.id
                                                            ? "ring-2 ring-emerald-500 bg-emerald-50"
                                                            : "hover:bg-gray-50"
                                                            }`}
                                                        onClick={() => setFormData({ ...formData, incidentType: type.id })}
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex items-start space-x-3">
                                                                <div className={`p-2 rounded-lg ${type.bgColor}`}>
                                                                    <Icon className={`h-5 w-5 ${type.color}`} />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                                                                    <p className="text-sm text-gray-600">{type.description}</p>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )
                                            })}
                                        </div>

                                        <div className="space-y-4">
                                            <Label className="text-base font-medium">How urgent is this incident?</Label>
                                            <Select
                                                value={formData.urgency}
                                                onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select urgency level" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {urgencyLevels.map((level) => (
                                                        <SelectItem key={level.value} value={level.value}>
                                                            <span className={level.color}>{level.label}</span>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Incident Details */}
                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="title" className="text-base font-medium">
                                                Incident Title *
                                            </Label>
                                            <Input
                                                id="title"
                                                placeholder="Brief summary of the incident"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="description" className="text-base font-medium">
                                                Detailed Description *
                                            </Label>
                                            <Textarea
                                                id="description"
                                                placeholder="Please provide as much detail as possible about what happened, when it occurred, and any steps you've already taken..."
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                className="mt-2 min-h-32"
                                            />
                                            <p className="text-sm text-gray-500 mt-1">
                                                Include URLs, email addresses, or other relevant information
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="date" className="text-base font-medium">
                                                    When did this occur? *
                                                </Label>
                                                <Input
                                                    id="date"
                                                    type="date"
                                                    value={formData.dateOccurred}
                                                    onChange={(e) => setFormData({ ...formData, dateOccurred: e.target.value })}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="time" className="text-base font-medium">
                                                    Approximate Time
                                                </Label>
                                                <Input
                                                    id="time"
                                                    type="time"
                                                    value={formData.timeOccurred}
                                                    onChange={(e) => setFormData({ ...formData, timeOccurred: e.target.value })}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            {/* <Checkbox
                                                id="ongoing"
                                                checked={formData.isOngoing}
                                                onCheckedChange={(checked) => setFormData({ ...formData, isOngoing: checked })}
                                            /> */}
                                            <Label htmlFor="ongoing" className="text-sm">
                                                This incident is still ongoing
                                            </Label>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Evidence Upload */}
                                {currentStep === 3 && (
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="text-base font-medium">Upload Evidence (Optional)</Label>
                                            <p className="text-sm text-gray-600 mb-4">
                                                Upload screenshots, emails, documents, or other evidence related to the incident
                                            </p>
                                        </div>

                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors">
                                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                            <div className="space-y-2">
                                                <p className="text-lg font-medium text-gray-900">Drop files here or click to upload</p>
                                                <p className="text-sm text-gray-600">
                                                    Supported formats: PDF, DOC, JPG, PNG, TXT (Max 5MB per file)
                                                </p>
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.eml"
                                                    onChange={handleFileUpload}
                                                    className="hidden"
                                                    id="file-upload"
                                                />
                                                <Button
                                                    variant="outline"
                                                    // onClick={() => document.getElementById("file-upload").click()}
                                                    className="mt-4"
                                                >
                                                    <Upload className="h-4 w-4 mr-2" />
                                                    Choose Files
                                                </Button>
                                            </div>
                                        </div>

                                        {uploadedFiles.length > 0 && (
                                            <div className="space-y-3">
                                                <Label className="text-base font-medium">Uploaded Files ({uploadedFiles.length})</Label>
                                                {uploadedFiles.map((file, index) => (
                                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                        <div className="flex items-center space-x-3">
                                                            <FileText className="h-5 w-5 text-gray-500" />
                                                            <div>
                                                                <p className="font-medium text-gray-900">{file.name}</p>
                                                                <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => removeFile(index)}
                                                            className="text-red-600 hover:text-red-700"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Step 4: Contact Information */}
                                {currentStep === 4 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label className="text-base font-medium">Contact Information</Label>
                                                <p className="text-sm text-gray-600">
                                                    Provide your contact details so we can follow up on your report
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                {/* <Checkbox
                                                    id="anonymous"
                                                    checked={formData.isAnonymous}
                                                    onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked })}
                                                /> */}
                                                <Label htmlFor="anonymous" className="text-sm">
                                                    Submit anonymously
                                                </Label>
                                            </div>
                                        </div>

                                        {!formData.isAnonymous && (
                                            <div className="space-y-4">
                                                <div>
                                                    <Label htmlFor="name" className="text-base font-medium">
                                                        Full Name
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Your full name"
                                                        value={formData.reporterName}
                                                        onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="email" className="text-base font-medium">
                                                        Email Address *
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="your.email@example.com"
                                                        value={formData.reporterEmail}
                                                        onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                                                        className="mt-2"
                                                    />
                                                    <p className="text-sm text-gray-500 mt-1">We'll use this to send updates about your report</p>
                                                </div>

                                                <div>
                                                    <Label htmlFor="phone" className="text-base font-medium">
                                                        Phone Number (Optional)
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="+1 (555) 123-4567"
                                                        value={formData.reporterPhone}
                                                        onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {formData.isAnonymous && (
                                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                                <div className="flex items-start space-x-3">
                                                    <EyeOff className="h-5 w-5 text-amber-600 mt-0.5" />
                                                    <div>
                                                        <h3 className="font-medium text-amber-800">Anonymous Reporting</h3>
                                                        <p className="text-sm text-amber-700 mt-1">
                                                            Your report will be submitted anonymously. You won't receive updates, but you can track
                                                            the status using the ticket number we'll provide.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="terms"
                                                checked={formData.agreeToTerms}
                                            // onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked })}
                                            />
                                            <Label htmlFor="terms" className="text-sm">
                                                I agree to the{" "}
                                                <a href="#" className="text-emerald-600 hover:underline">
                                                    Terms of Service
                                                </a>{" "}
                                                and{" "}
                                                <a href="#" className="text-emerald-600 hover:underline">
                                                    Privacy Policy
                                                </a>
                                            </Label>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between pt-6 border-t">
                                    <Button
                                        variant="outline"
                                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                                        disabled={currentStep === 1}
                                    >
                                        Previous
                                    </Button>

                                    {currentStep < 4 ? (
                                        <Button
                                            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                                            disabled={
                                                (currentStep === 1 && (!formData.incidentType || !formData.urgency)) ||
                                                (currentStep === 2 && (!formData.title || !formData.description || !formData.dateOccurred))
                                            }
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            Next Step
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={
                                                isSubmitting || !formData.agreeToTerms || (!formData.isAnonymous && !formData.reporterEmail)
                                            }
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit Report"}
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Security Notice */}
                        <Card className=" p-2 md:p-4 shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <Lock className="h-6 w-6 text-emerald-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Secure & Confidential</h3>
                                        <p className="text-sm text-gray-600">
                                            All reports are encrypted and handled confidentially by our security experts. Your information is
                                            protected.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Response Time */}
                        <Card className=" p-2 md:p-4 shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <Clock className="h-6 w-6 text-amber-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Response Times</h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex justify-between">
                                                <span>Critical:</span>
                                                <span className="font-medium">15 minutes</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>High:</span>
                                                <span className="font-medium">2 hours</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Medium:</span>
                                                <span className="font-medium">24 hours</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Low:</span>
                                                <span className="font-medium">72 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contact */}
                        <Card className="bg-red-50 border-red-200">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-red-800 mb-2">Emergency?</h3>
                                        <p className="text-sm text-red-700 mb-3">
                                            If you're experiencing an active cyber attack, call our emergency hotline immediately.
                                        </p>
                                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                                            <Phone className="h-4 w-4 mr-2" />
                                            1-800-CYBER-HELP
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Help & Support */}
                        <Card className=" p-2 md:p-4 shadow-sm">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                                <div className="space-y-3">
                                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        Live Chat Support
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Reporting Guidelines
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                                        <Eye className="h-4 w-4 mr-2" />
                                        Track Existing Report
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportIncident

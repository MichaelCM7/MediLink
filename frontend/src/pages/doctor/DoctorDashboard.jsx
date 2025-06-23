import { Button } from "@/components/ui/button";
import { Calendar, FileText, TrendingUp, Settings } from "lucide-react";

function DoctorHome() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">+</span>
                                </div>
                                <span className="ml-2 text-sm font-medium text-gray-700">MEDILINK</span>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-900 font-medium">Home</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">Manage appointments</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">Patient records</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">Monitor ratings</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm">Profile</Button>
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Logout</Button>
                            <Settings className="w-5 h-5 text-gray-500" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Boost Your Practice & Connect with Patients Instantly
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Enhance your practice and connect with patients instantly. Schedule appointments, offer urgent care, and
                                provide personalized support—all in one seamless platform.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                                Manage Appointments
                            </Button>
                            <Button size="lg" variant="outline" className="px-8">
                                Patient Records
                            </Button>
                        </div>

                        <p className="text-sm text-gray-500 italic">Saving Time. Saving Lives</p>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative">
                        <img src="/doctor-hero.png" alt="Doctor illustration" className="w-full h-auto" />
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center space-y-3">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <Calendar className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Manage</h3>
                                <p className="text-sm text-gray-600">Appointments</p>
                            </div>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <FileText className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Patient</h3>
                                <p className="text-sm text-gray-600">Records</p>
                            </div>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <TrendingUp className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Monitoring</h3>
                                <p className="text-sm text-gray-600">Ratings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DoctorHome;

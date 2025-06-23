import { Settings, User } from "lucide-react"
import "./styles.css"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-blue-600">MEDILINK</span>
              </div>

              <nav className="flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Patient Records
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Appointments
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Ratings
                </a>
              </nav>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">Profile</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
                Logout
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium">
              Edit profile
            </button>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {/* Hospital Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">ABC Hospital</h2>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Staff Id */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Staff Id</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Specialization */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Date Joined */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Joined</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Biography</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter your biography..."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

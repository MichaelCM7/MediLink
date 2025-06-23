import "./styles.css"
import { Settings } from 'lucide-react';

export default function SettingsPage() {

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
                  Services
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Ratings & Review
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  History
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
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
          {/* Settings Header */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">SETTINGS</h1>

          {/* Settings Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {/* Notification Preferences */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>

              {/* New Appointments */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">New Appointments</h3>
                  <p className="text-sm text-gray-600">Get notified when patients book appointments</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 `}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>

              {/* Appointment Reminders */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Appointment Reminders</h3>
                  <p className="text-sm text-gray-600">Reminders for upcoming appointments</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>
            </div>

            {/* Change Password */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h2>

              <div className="space-y-4">
                {/* Current Password */}
                <div>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>

                {/* New Password */}
                <div>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>

                {/* Confirm New Password */}
                <div>
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button
                    className={`px-6 py-2 rounded-md font-medium transition-colors }`}
                  >
                    Update Password
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

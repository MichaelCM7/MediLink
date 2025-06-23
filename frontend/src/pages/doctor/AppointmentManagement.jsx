import { Settings, Phone, Eye } from "lucide-react"

export default function Appointments() {
  const upcomingAppointments = [
    {
      id: "1",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "14:10 - 14:00",
    },
    {
      id: "2",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "15:10 - 16:00",
    },
    {
      id: "3",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "16:10 - 16:00",
    },
  ]

  const pendingAppointments = [
    {
      id: "4",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "First Time Patient",
      status: "pending",
    },
    {
      id: "5",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "First Time Patient",
      status: "pending",
    },
    {
      id: "6",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "First Time Patient",
      status: "pending",
    },
    {
      id: "7",
      patientName: "Jane Doe",
      phoneNumber: "0712345678",
      date: "27th September 2025",
      time: "First Time Patient",
      status: "pending",
    },
  ]

  const handleApprove = (appointmentId) => {
    console.log(`Approved appointment ${appointmentId}`)
  }

  const handleCancel = (appointmentId) => {
    console.log(`Cancelled appointment ${appointmentId}`)
  }

  const handleCallPatient = (phoneNumber) => {
    console.log(`Calling patient at ${phoneNumber}`)
  }

  const handleSeeDetails = (appointmentId) => {
    console.log(`Viewing details for appointment ${appointmentId}`)
  }

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
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium border-b-2 border-blue-600 pb-1">
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
                Login
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
        <div className="max-w-7xl mx-auto">
          {/* Greeting */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Good Morning Dr.Doe!</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Visits For Today Card */}
              <div className="bg-blue-100 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Visits For Today</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">20</div>
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-xl font-semibold text-gray-900">10</div>
                      <div className="text-sm text-gray-600">New patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-gray-900">10</div>
                      <div className="text-sm text-gray-600">Old patients</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="bg-blue-50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Patient Name: {appointment.patientName}</div>
                          <div className="text-sm text-gray-600">Phone Number: {appointment.phoneNumber}</div>
                          <div className="text-sm text-gray-600">Date: {appointment.date}</div>
                          <div className="text-sm text-gray-600">Time: {appointment.time}</div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <button
                            onClick={() => handleCallPatient(appointment.phoneNumber)}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex items-center space-x-1"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Call Patient</span>
                          </button>
                          <button
                            onClick={() => handleSeeDetails(appointment.id)}
                            className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 flex items-center space-x-1"
                          >
                            <Eye className="w-3 h-3" />
                            <span>See Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Yet-To-Approve Appointments */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Yet-To-Approve Appointments</h2>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {pendingAppointments.map((appointment) => (
                    <div key={appointment.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Patient Name: {appointment.patientName}</div>
                          <div className="text-sm text-gray-600">Phone Number: {appointment.phoneNumber}</div>
                          <div className="text-sm text-gray-600">Date: {appointment.date}</div>
                          <div className="text-sm text-gray-600">Time: {appointment.time}</div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <button
                            onClick={() => handleApprove(appointment.id)}
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleCancel(appointment.id)}
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

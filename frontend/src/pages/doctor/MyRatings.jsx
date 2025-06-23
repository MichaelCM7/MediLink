// import { Star, TrendingUp, Settings } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// export default function RatingsPage() {
//     const reviews = [
//         {
//             id: 1,
//             description:
//                 "Dr. Patel truly changed my life. I came in feeling hopeless after months of misdiagnoses, and she listened carefully, explained everything with patience, and got me the right treatment. I'm now finally on the path to healing. Thank you for your compassion and brilliance.",
//         },
//         {
//             id: 2,
//             description:
//                 "Very professional, knowledgeable, and kind. The appointment was on time, and all my concerns were addressed. Highly recommend!",
//         },
//         {
//             id: 3,
//             description:
//                 "I appreciated the thoroughness of the examination. It's clear Dr. Patel has a lot of experience, though the interaction felt more clinical than personal. Some people may prefer that style.",
//         },
//         {
//             id: 4,
//             description:
//                 "It took a little while to feel comfortable, but by the end of the visit I felt more informed. Not every part of the experience went smoothly, but I believe Dr. Patel had good intentions throughout.",
//         },
//         {
//             id: 5,
//             description:
//                 "Excellent bedside manner and very thorough in explaining the diagnosis and treatment options. Dr. Patel made me feel at ease during a stressful time.",
//         },
//         {
//             id: 6,
//             description:
//                 "The wait time was longer than expected, but the quality of care made up for it. Dr. Patel is clearly dedicated to her patients' wellbeing.",
//         },
//     ]

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
//             <header className="bg-white shadow-sm">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="flex items-center">
//                             <div className="flex items-center">
//                                 <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
//                                     <span className="text-white text-sm font-bold">+</span>
//                                 </div>
//                                 <span className="ml-2 text-sm font-medium text-gray-700">MEDILINK</span>
//                             </div>
//                         </div>

//                         <nav className="hidden md:flex space-x-8">
//                             <a href="#" className="text-gray-500 hover:text-gray-900">
//                                 Home
//                             </a>
//                             <a href="#" className="text-gray-500 hover:text-gray-900">
//                                 Manage appointments
//                             </a>
//                             <a href="#" className="text-gray-500 hover:text-gray-900">
//                                 Patient records
//                             </a>
//                             <a href="#" className="text-gray-900 font-medium">
//                                 Monitor ratings
//                             </a>
//                             <a href="#" className="text-gray-500 hover:text-gray-900">
//                                 About
//                             </a>
//                         </nav>

//                         <div className="flex items-center space-x-4">
//                             <Button variant="outline" size="sm">
//                                 Profile
//                             </Button>
//                             <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
//                                 Logout
//                             </Button>
//                             <Settings className="w-5 h-5 text-gray-500" />
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 {/* Ratings Header */}
//                 <div className="mb-8">
//                     <h1 className="text-3xl font-bold text-gray-900 mb-6">RATINGS</h1>

//                     <div className="flex gap-4 mb-8">
//                         <Card className="bg-blue-500 text-white">
//                             <CardContent className="p-6">
//                                 <div className="flex items-center gap-3">
//                                     <Star className="w-8 h-8 fill-current" />
//                                     <div>
//                                         <p className="text-sm opacity-90">Patient Rating</p>
//                                         <p className="text-2xl font-bold">4.8</p>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>

//                         <Card className="bg-blue-500 text-white">
//                             <CardContent className="p-6">
//                                 <div className="flex items-center gap-3">
//                                     <TrendingUp className="w-8 h-8" />
//                                     <div>
//                                         <p className="text-sm opacity-90">Reviews</p>
//                                         <p className="text-2xl font-bold">379</p>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>

//                 {/* Reviews Section */}
//                 <div className="mb-6">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-6">REVIEWS</h2>

//                     {/* Scrollable Reviews Container */}
//                     <Card className="border-2 border-gray-300 rounded-2xl">
//                         <CardContent className="p-6">
//                             <div className="h-96 overflow-y-auto space-y-4 pr-2">
//                                 {reviews.map((review) => (
//                                     <Card key={review.id} className="border border-gray-200 rounded-lg">
//                                         <CardContent className="p-4">
//                                             <p className="text-sm font-medium text-gray-700 mb-2">Description</p>
//                                             <p className="text-sm text-gray-600 leading-relaxed">{review.description}</p>
//                                         </CardContent>
//                                     </Card>
//                                 ))}
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </main>
//         </div>
//     )
// }

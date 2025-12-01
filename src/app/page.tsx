"use client"

import { useState } from "react"
import ProfileOwnerView from "@/components/profile-owner-view"
import ProfileViewerView from "@/components/profile-viewer-view"
import { User, Eye } from "lucide-react"

export default function HomePage() {
  const [viewType, setViewType] = useState<"home" | "owner" | "viewer">("home")

  if (viewType === "owner") {
    return <ProfileOwnerView onBack={() => setViewType("home")} />
  }

  if (viewType === "viewer") {
    return <ProfileViewerView onBack={() => setViewType("home")} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Profile View Demo</h1>
          <p className="text-lg text-slate-600">Choose a view to see how different users experience profiles</p>
        </div>

        {/* View Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Owner View Card */}
          <button
            onClick={() => setViewType("owner")}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Profile Owner</h2>
                <p className="text-slate-600 text-sm">
                  View your own profile with full editing capabilities, feedback management, and all features
                </p>
              </div>
              <div className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg group-hover:bg-blue-600 transition-colors">
                View as Owner
              </div>
            </div>
          </button>

          {/* Viewer View Card */}
          <button
            onClick={() => setViewType("viewer")}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-2 border-transparent hover:border-slate-400"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Profile Viewer</h2>
                <p className="text-slate-600 text-sm">
                  View someone else's profile with limited interaction: send feedback, poke for help, or send a message
                </p>
              </div>
              <div className="mt-4 inline-block px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg group-hover:bg-slate-600 transition-colors">
                View as Visitor
              </div>
            </div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            This demo showcases different profile views based on user permissions and relationships
          </p>
        </div>
      </div>
    </div>
  )
}

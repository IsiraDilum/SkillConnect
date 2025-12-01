"use client"

import type React from "react"
import { useState } from "react"
import {
  Home,
  MessageCircle,
  Bell,
  User,
  Search,
  Github,
  Linkedin,
  Globe,
  Star,
  FlaskConical,
  MoreHorizontal,
  ThumbsUp,
  Share2,
  Handshake,
  Send,
  ArrowLeft,
} from "lucide-react"

export default function ProfileViewerView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Search */}
          <div className="flex items-center gap-4 flex-1">
            <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg transition-colors mr-2">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-white">v0</span>
            </div>
            <div className="relative w-full max-w-sm hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search (Skills / Name)"
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Nav Icons */}
          <nav className="flex items-center gap-8 ml-8">
            <NavItem icon={<Home className="w-5 h-5" />} label="Home" />
            <NavItem icon={<MessageCircle className="w-5 h-5" />} label="Messaging" />
            <NavItem icon={<Bell className="w-5 h-5" />} label="Notifications" />
            <NavItem icon={<User className="w-5 h-5" />} label="Me" />
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex-1 min-w-0">
            {/* --- Profile Card --- */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
              {/* Cover Image */}
              <div className="h-40 bg-gradient-to-r from-slate-400 to-slate-500 relative" />

              <div className="px-6 pb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Info */}
                  <div className="flex-1">
                    {/* Avatar */}
                    <div className="relative -mt-20 mb-4 inline-block z-10">
                      <div className="w-32 h-32 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden flex items-center justify-center shadow-lg">
                        <img src="/diverse-profile-avatars.png" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold text-slate-900">Person Name</h1>
                        <span className="text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-medium">
                          ✓ Verified
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-700">Product Manager / Student</p>
                      <p className="text-sm text-slate-500">University Name</p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Passionate about creating innovative solutions. Interested in product management, full-stack
                        development, and building great user experiences.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center gap-2 border border-slate-300 py-2.5 rounded-lg hover:bg-slate-50 font-medium text-sm transition-colors text-slate-700">
                        <Handshake className="w-4 h-4" />
                        Poke for Help
                      </button>
                      <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-medium text-sm transition-colors">
                        Send Message
                      </button>
                    </div>
                  </div>

                  {/* Skills Sidebar */}
                  <div className="md:w-72 pt-8 md:pt-0">
                    <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                      <h3 className="font-bold text-sm text-slate-900 mb-5 uppercase tracking-wide">Skills</h3>
                      <div className="space-y-5">
                        <SkillItem
                          icon={<FlaskConical className="w-4 h-4" />}
                          title="Web App Development"
                          sub="React, Next.js"
                          stars={4}
                        />
                        <SkillItem
                          icon={<FlaskConical className="w-4 h-4" />}
                          title="Mobile Development"
                          sub="Kotlin, Swift"
                          stars={3}
                        />
                        <SkillItem
                          icon={<FlaskConical className="w-4 h-4" />}
                          title="Programming"
                          sub="Python, Java, JavaScript"
                          stars={4}
                        />
                      </div>
                      <button className="mt-5 w-full px-3 py-2 text-xs border border-slate-300 rounded-lg text-slate-600 hover:bg-white font-medium transition-colors">
                        See More Skills
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Feed Posts - Viewer can only see, not post --- */}
            <div className="space-y-5">
              <PostCard name="Alex Johnson" time="3d ago" />
              <PostCard name="Sarah Davis" time="5d ago" />
            </div>
          </div>

          {/* ================= RIGHT COLUMN (SIDEBAR) ================= */}
          <div className="w-full lg:w-80 space-y-6">
            {/* --- Portfolio Links --- */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-5 uppercase tracking-wide text-sm">Portfolio Links</h3>
              <div className="space-y-3">
                <PortfolioLink icon={<Github className="w-5 h-5" />} title="GITHUB" url="github.com/username" />
                <PortfolioLink
                  icon={<Linkedin className="w-5 h-5" />}
                  title="LINKEDIN"
                  url="linkedin.com/in/username"
                />
                <PortfolioLink icon={<Globe className="w-5 h-5" />} title="PORTFOLIO" url="mywebsite.com" />
              </div>
              <div className="mt-4 flex justify-center border-t border-slate-200 pt-4">
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* --- Feedback - Viewers can only add feedback --- */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-900 rounded-full text-white">
                    <Star className="w-3 h-3 fill-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Feedback</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 mb-1">Avg rating</p>
                  <div className="flex gap-1 justify-end">
                    {[1, 2, 3, 3.5, 4].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-slate-400 text-slate-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-5 p-4 bg-slate-50 rounded-lg text-center">
                <p className="text-sm text-slate-600 font-medium">Share your feedback to help this person improve!</p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <FeedbackInput />
              </div>
            </div>

            {/* --- Similar Profiles --- */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-5 uppercase tracking-wide">Other Similar Profiles</h3>
              <div className="space-y-4">
                <SimilarProfile name="Alex Johnson" role="Senior Product Designer" />
                <SimilarProfile name="Jamie Smith" role="UX Research Lead" />
                <SimilarProfile name="Chris Brown" role="Head of Product" />
                <SimilarProfile name="Dana Lee" role="Chief Usability Officer" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

/* ================= HELPER COMPONENTS ================= */

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-[10px] font-medium text-slate-500">{label}</span>
    </button>
  )
}

function SkillItem({
  icon,
  title,
  sub,
  stars,
}: {
  icon: React.ReactNode
  title: string
  sub: string
  stars: number
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <div className="p-1.5 border border-slate-300 rounded bg-white text-slate-600">{icon}</div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-900">{title}</p>
          <p className="text-[11px] text-slate-500">{sub}</p>
        </div>
      </div>
      <div className="flex gap-1 pl-7">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-3.5 h-3.5 border border-slate-300 rounded-sm flex items-center justify-center ${
              i <= stars ? "bg-slate-700" : "bg-white"
            }`}
          >
            <Star className={`w-2 h-2 ${i <= stars ? "fill-white text-white" : "text-transparent"}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">
      {icon}
      <span>{label}</span>
    </button>
  )
}

function PostCard({ name, time }: { name: string; time: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white flex-shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-900">{name}</h4>
            <p className="text-xs text-slate-500">{time}</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition-colors p-1">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-slate-700 mb-4 leading-relaxed">
        Excited to share that I just completed an amazing project! Looking forward to the next challenge and
        collaborating with talented teams.
      </p>
      <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-4"></div>
      <div className="flex gap-2 border-t border-slate-100 pt-3">
        <button className="flex-1 flex items-center justify-center gap-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-xs font-medium py-2 rounded transition-colors">
          <ThumbsUp className="w-4 h-4" /> Like
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-xs font-medium py-2 rounded transition-colors">
          <MessageCircle className="w-4 h-4" /> Comment
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 text-xs font-medium py-2 rounded transition-colors">
          <Share2 className="w-4 h-4" /> Share
        </button>
      </div>
    </div>
  )
}

function PortfolioLink({
  icon,
  title,
  url,
}: {
  icon: React.ReactNode
  title: string
  url: string
}) {
  return (
    <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
      <div className="text-slate-700 flex-shrink-0">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase text-slate-900">{title}</p>
        <p className="text-xs text-slate-500 truncate">{url}</p>
      </div>
    </button>
  )
}

function FeedbackInput() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = () => {
    if (feedback.trim()) {
      console.log(`Feedback: ${feedback}, Rating: ${rating}`)
      setFeedback("")
      setRating(0)
    }
  }

  return (
    <div>
      <p className="text-xs font-semibold text-slate-700 mb-2">Your Rating:</p>
      <div className="flex gap-1 mb-3 justify-start">
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} onClick={() => setRating(i)} className="hover:scale-110 transition-transform">
            <Star
              className={`w-4 h-4 cursor-pointer transition-colors ${
                i <= rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300 hover:text-yellow-300"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your feedback..."
          className="w-full border border-slate-300 rounded-lg pl-3 pr-10 py-2.5 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 text-slate-400 hover:text-blue-600 transition-colors p-1"
          title="Submit feedback"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function SimilarProfile({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-start gap-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex-shrink-0"></div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-slate-900">{name}</p>
        <p className="text-[11px] text-slate-500 truncate">{role}</p>
      </div>
      <button className="text-blue-600 hover:text-blue-700 transition-colors text-xs font-medium flex-shrink-0">
        View
      </button>
    </div>
  )
}

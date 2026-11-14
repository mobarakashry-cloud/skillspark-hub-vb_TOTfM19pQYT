"use client"

import { useState } from "react"
import { Dashboard } from "@/app/components/dashboard/Dashboard"
import { SectionView } from "@/app/components/sections/SectionView"
import { BranchView } from "@/app/components/branches/BranchView"
import { ProfileSection } from "@/app/components/profile/ProfileSection"
import { CommunitySection } from "@/app/components/community/CommunitySection"
import { Button } from "@/components/ui/button"
import { AIAssistant } from "@/components/ai-assistant"
import { ContentPublisher } from "@/components/content-publisher"
import { UserSuggestions } from "@/components/user-suggestions"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { SmartRecommendations } from "@/components/smart-recommendations"
import { AdvancedSearch } from "@/components/advanced-search"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { TermsConditions } from "@/components/terms-conditions"
import {
  Home, Bot, Plus, UsersIcon, Lightbulb, User, ArrowLeft,
} from "lucide-react"

export default function SkillSparkHubFinal() {
  const [activeTab, setActiveTab] = useState("home")
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeBranch, setActiveBranch] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [userBalance] = useState(2347)
  const [showAI, setShowAI] = useState(false)
  const [showPublisher, setShowPublisher] = useState(false)

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-blue-800 to-indigo-900" dir="rtl">
      <DarkModeToggle />

      <div className="max-w-4xl mx-auto bg-background min-h-screen shadow-2xl transition-colors duration-300">
        <div className="pb-28">
          <div className="p-5">
            {activeTab === "privacy" ? (
              <div className="space-y-4">
                <Button variant="ghost" onClick={() => setActiveTab("profile")} className="mb-4">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  العودة للملف الشخصي
                </Button>
                <PrivacyPolicy />
              </div>
            ) : activeTab === "terms" ? (
              <div className="space-y-4">
                <Button variant="ghost" onClick={() => setActiveTab("profile")} className="mb-4">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  العودة للملف الشخصي
                </Button>
                <TermsConditions />
              </div>
            ) : activeTab === "ai" ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">مساعد الذكاء الاصطناعي</h2>
                <AIAssistant context="عام" sectionName="SkillSpark Hub" />
              </div>
            ) : activeTab === "publish" ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">نشر محتوى جديد</h2>
                <ContentPublisher />
              </div>
            ) : activeTab === "suggestions" ? (
              <UserSuggestions />
            ) : activeTab === "profile" ? (
              <ProfileSection onNavigate={setActiveTab} />
            ) : activeTab === "community" ? (
              <CommunitySection />
            ) : activeBranch !== null ? (
              <BranchView
                sectionId={activeSection}
                branchId={activeBranch}
                showAI={showAI}
                showPublisher={showPublisher}
                onToggleAI={() => setShowAI(!showAI)}
                onTogglePublish={() => setShowPublisher(!showPublisher)}
                onToggleBookmark={toggleBookmark}
              />
            ) : activeSection !== null ? (
              <SectionView sectionId={activeSection} />
            ) : (
              <>
                <Dashboard userBalance={userBalance} searchQuery={searchQuery} onSearch={setSearchQuery} />
                <div className="mt-6">
                  <SmartRecommendations />
                </div>
                <div className="mt-6">
                  <AdvancedSearch />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-card border-t-2 border-border shadow-2xl">
          <div className="grid grid-cols-6 gap-1 py-3 px-2">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "home"
                  ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
                  : "text-muted-foreground hover:text-emerald-600"
              }`}
              onClick={() => {
                setActiveTab("home")
                setActiveSection(null)
                setActiveBranch(null)
              }}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="font-bold">الرئيسية</span>
            </Button>

            <Button
              variant={activeTab === "ai" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "ai"
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white"
                  : "text-muted-foreground hover:text-purple-600"
              }`}
              onClick={() => setActiveTab("ai")}
            >
              <Bot className="w-5 h-5 mb-1" />
              <span className="font-bold">AI</span>
            </Button>

            <Button
              variant={activeTab === "publish" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "publish"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  : "text-muted-foreground hover:text-green-600"
              }`}
              onClick={() => setActiveTab("publish")}
            >
              <Plus className="w-5 h-5 mb-1" />
              <span className="font-bold">نشر</span>
            </Button>

            <Button
              variant={activeTab === "community" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "community"
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                  : "text-muted-foreground hover:text-orange-600"
              }`}
              onClick={() => setActiveTab("community")}
            >
              <UsersIcon className="w-5 h-5 mb-1" />
              <span className="font-bold">المجتمع</span>
            </Button>

            <Button
              variant={activeTab === "suggestions" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "suggestions"
                  ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white"
                  : "text-muted-foreground hover:text-yellow-600"
              }`}
              onClick={() => setActiveTab("suggestions")}
            >
              <Lightbulb className="w-5 h-5 mb-1" />
              <span className="font-bold">اقتراحات</span>
            </Button>

            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "profile"
                  ? "bg-gradient-to-r from-gray-600 to-slate-600 text-white"
                  : "text-muted-foreground hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="w-5 h-5 mb-1" />
              <span className="font-bold">الملف</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

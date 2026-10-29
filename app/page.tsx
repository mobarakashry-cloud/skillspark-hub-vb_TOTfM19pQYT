"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ContentCard } from "@/components/content-card"
import { EarningPlatforms } from "@/components/earning-platforms"
import { AIAssistant } from "@/components/ai-assistant"
import { ContentPublisher } from "@/components/content-publisher"
import { UserSuggestions } from "@/components/user-suggestions"
import { ProgressTracker } from "@/components/progress-tracker"
import { IslamicContentHub } from "@/components/islamic-content-hub"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { SmartRecommendations } from "@/components/smart-recommendations"
import { PiIntegration } from "@/components/pi-integration"
import { CreatorDashboard } from "@/components/creator-dashboard"
import { AdvancedSearch } from "@/components/advanced-search"
import { CommunityFeatures } from "@/components/community-features"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { TermsConditions } from "@/components/terms-conditions"
import { Search, Play, Star, Users, Coins, CheckCircle, Video, BookOpen, Code, Wrench, Home, Bot, Sparkles, ArrowLeft, User, Target, TrendingUp, Eye, Hammer, Zap, MessageCircle, Upload, Lightbulb, Plus, Briefcase, UsersIcon, Shield, FileText, Settings } from 'lucide-react'

// Complete App Data Structure
const appData = {
  appName: "SkillSpark Hub",
  الأقسام_الرئيسية: [
    {
      id: "religious",
      اسم_القسم: "📖 التعليم الديني",
      icon: BookOpen,
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      الفروع: [
        {
          id: "quran",
          اسم_الفرع: "القرآن الكريم",
          icon: BookOpen,
          الوصف: "تلاوة وتفسير وحفظ",
          عناصر: [
            {
              عنوان: "تفسير سورة الفاتحة - الآية الأولى",
              المدرب: "الشيخ أحمد محمد",
              مدة: "25 min",
              مشاهدات: "15.2K",
              تقييم: 4.9,
              نوع: "مجاني",
            },
            {
              عنوان: "أحكام التلاوة والتجويد",
              المدرب: "الشيخ محمد علي",
              مدة: "35 min",
              مشاهدات: "12.8K",
              تقييم: 4.8,
              نوع: "مجاني",
            },
            {
              عنوان: "حفظ القرآن الكريم - طرق وأساليب",
              المدرب: "الشيخ خالد أحمد",
              مدة: "42 min",
              مشاهدات: "18.5K",
              تقييم: 4.9,
              نوع: "مجاني",
            },
          ],
          مواقع_مربحة: [
            { اسم: "Upwork", حالة: "حلال 100%" },
            { اسم: "Fiverr", حالة: "حلال 100%" },
          ],
        },
        {
          id: "sunnah",
          اسم_الفرع: "السنة الصحيحة",
          icon: BookOpen,
          الوصف: "الأحاديث النبوية الصحيحة",
          عناصر: [
            {
              عنوان: "صحيح البخاري - كتاب الإيمان",
              المدرب: "الشيخ عبدالله حسن",
              مدة: "40 min",
              مشاهدات: "10.5K",
              تقييم: 4.9,
              نوع: "مجاني",
            },
          ],
          مواقع_مربحة: [
            { اسم: "Upwork", حالة: "حلال 100%" },
            { اسم: "Fiverr", حالة: "حلال 100%" },
          ],
        },
        {
          id: "hadith",
          اسم_الفرع: "تفسير الأحاديث النبوية",
          icon: MessageCircle,
          الوصف: "شرح وتفسير الأحاديث",
          عناصر: [],
          مواقع_مربحة: [
            { اسم: "Upwork", حالة: "حلال 100%" },
            { اسم: "Fiverr", حالة: "حلال 100%" },
          ],
        },
        {
          id: "sahaba",
          اسم_الفرع: "سيرة الصحابة",
          icon: Users,
          الوصف: "قصص وسير الصحابة الكرام",
          عناصر: [],
          مواقع_مربحة: [
            { اسم: "Upwork", حالة: "حلال 100%" },
            { اسم: "Fiverr", حالة: "حلال 100%" },
          ],
        },
      ],
    },
    {
      id: "digital",
      اسم_القسم: "💻 المهارات الرقمية",
      icon: Code,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      الفروع: [
        {
          id: "programming",
          اسم_الفرع: "البرمجة",
          icon: Code,
          الوصف: "Web, Mobile, Python...",
          عناصر: [
            {
              عنوان: "مقدمة في JavaScript",
              مدرب: "أحمد حسن",
              مدة: "45 min",
              مشاهدات: "8.9K",
              تقييم: 4.7,
              ربح: "15 π",
            },
            {
              عنوان: "تطوير تطبيقات React",
              مدرب: "سارة أحمد",
              مدة: "60 min",
              مشاهدات: "12.3K",
              تقييم: 4.9,
              ربح: "25 π",
            },
            {
              عنوان: "Python للمبتدئين - الأساسيات",
              مدرب: "محمد علي",
              مدة: "50 min",
              مشاهدات: "15.6K",
              تقييم: 4.8,
              ربح: "20 π",
            },
          ],
          مواقع_مربحة: [
            { اسم: "Upwork", حالة: "حلال 100%" },
            { اسم: "Fiverr", حالة: "حلال 100%" },
            { اسم: "Freelancer", حالة: "حلال 100%" },
          ],
        },
        {
          id: "design",
          اسم_الفرع: "التصميم",
          icon: Sparkles,
          الوصف: "Photoshop, Illustrator",
          عناصر: [
            {
              عنوان: "أساسيات Photoshop للمبتدئين",
              مدرب: "فاطمة خالد",
              مدة: "55 min",
              مشاهدات: "9.2K",
              تقييم: 4.6,
              ربح: "18 π",
            },
          ],
          مواقع_مربحة: [
            { اسم: "Upwork", حالة: "حلال 100%" },
            { اسم: "Fiverr", حالة: "حلال 100%" },
            { اسم: "99designs", حالة: "حلال 100%" },
          ],
        },
      ],
    },
    {
      id: "crafts",
      اسم_القسم: "🧰 الحرف اليدوية",
      icon: Wrench,
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
      الفروع: [
        {
          id: "plumbing",
          اسم_الفرع: "سباكة",
          icon: Wrench,
          الوصف: "تعلم الحرف اليدوية للسباكة",
          عناصر: [
            {
              عنوان: "أساسيات السباكة المنزلية",
              مدرب: "عمر محمود",
              مدة: "35 min",
              مشاهدات: "6.8K",
              تقييم: 4.5,
              نوع: "مجاني",
            },
          ],
          مواقع_مربحة: [
            { اسم: "TaskRabbit", حالة: "حلال 100%" },
            { اسم: "Thumbtack", حالة: "حلال 100%" },
          ],
        },
        {
          id: "carpentry",
          اسم_الفرع: "نجارة",
          icon: Hammer,
          الوصف: "تعلم النجارة والصناعة اليدوية",
          عناصر: [],
          مواقع_مربحة: [
            { اسم: "TaskRabbit", حالة: "حلال 100%" },
            { اسم: "Thumbtack", حالة: "حلال 100%" },
          ],
        },
        {
          id: "electrical",
          اسم_الفرع: "كهرباء",
          icon: Zap,
          الوصف: "تعلم الكهرباء والصيانة",
          عناصر: [],
          مواقع_مربحة: [
            { اسم: "TaskRabbit", حالة: "حلال 100%" },
            { اسم: "Thumbtack", حالة: "حلال 100%" },
          ],
        },
      ],
    },
  ],
}

export default function SkillSparkHubFinal() {
  const [activeTab, setActiveTab] = useState("home")
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeBranch, setActiveBranch] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [userBalance] = useState(2347)
  const [showAI, setShowAI] = useState(false)
  const [showPublisher, setShowPublisher] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const getCurrentSection = () => {
    return appData.الأقسام_الرئيسية.find((s) => s.id === activeSection)
  }

  const getCurrentBranch = () => {
    const section = getCurrentSection()
    return section?.الفروع.find((b) => b.id === activeBranch)
  }

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      {/* App Header */}
      <div className="text-center py-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl shadow-lg">
        <div className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {appData.appName}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-5 py-2 text-lg">
            <Coins className="w-5 h-5 mr-2" />
            {userBalance.toLocaleString()} π
          </Badge>
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-5 py-2 text-lg">
            <CheckCircle className="w-5 h-5 mr-2" />
            موثق ✅
          </Badge>
        </div>
      </div>

      {/* Smart Search */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 shadow-lg">
        <CardContent className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-7 h-7 text-purple-600" />
            <h3 className="font-bold text-lg text-purple-700">🔎 البحث الذكي بالذكاء الاصطناعي</h3>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="ابحث عن أي شيء... دروس، دورات، فيديوهات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-12 text-lg"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-6">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Button className="w-full h-24 text-2xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-2xl">
        <Play className="w-8 h-8 mr-3" />🚀 ابدأ التعلم الآن
      </Button>

      {/* Main Sections */}
      <div>
        <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
          <Target className="w-7 h-7 text-blue-600" />📚 الأقسام الرئيسية
        </h3>
        <div className="grid grid-cols-2 gap-5">
          {appData.الأقسام_الرئيسية.map((section) => {
            const SectionIcon = section.icon
            return (
              <Card
                key={section.id}
                className={`hover:shadow-2xl transition-all cursor-pointer hover:scale-105 bg-${section.color}-50 border-${section.color}-200`}
                onClick={() => {
                  setActiveSection(section.id)
                  setActiveTab("section")
                }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div
                      className={`p-5 bg-gradient-to-r ${section.gradient} rounded-2xl mb-4 mx-auto w-fit shadow-xl`}
                    >
                      <SectionIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`font-bold text-base text-${section.color}-700 mb-2`}>{section.اسم_القسم}</div>
                    <div className="text-sm text-gray-600">{section.الفروع.length} فرع</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Trending Content */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="w-6 h-6 text-orange-600" />🔥 الأكثر مشاهدة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: "تفسير سورة الفاتحة", views: "15.2K", rating: 4.9, color: "emerald" },
              { title: "تطوير تطبيقات React", views: "12.3K", rating: 4.9, color: "blue" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 bg-${item.color}-50 rounded-xl border border-${item.color}-200`}
              >
                <div className={`p-4 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl`}>
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </span>
                  </div>
                </div>
                <Button size="sm" className={`bg-${item.color}-600 hover:bg-${item.color}-700`}>
                  <Play className="w-4 h-4 mr-1" />
                  ▶️
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Section View Component
  const SectionView = () => {
    const section = getCurrentSection()
    if (!section) return <Dashboard />

    const SectionIcon = section.icon

    return (
      <div className="space-y-6">
        {/* Section Header */}
        <div className={`bg-${section.color}-50 border-${section.color}-200 p-6 rounded-2xl border-2 shadow-lg`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`p-5 bg-gradient-to-r ${section.gradient} rounded-2xl shadow-xl`}>
                <SectionIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className={`text-3xl font-bold text-${section.color}-700`}>{section.اسم_القسم}</h2>
                <p className="text-gray-600 text-lg">{section.الفروع.length} فرع متاح</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveSection(null)
                setActiveTab("home")
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              العودة
            </Button>
          </div>

          {/* Search within section */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder={`البحث في ${section.اسم_القسم}...`} className="pl-12 bg-white h-12" />
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 gap-5">
          {section.الفروع.map((branch) => {
            const BranchIcon = branch.icon
            return (
              <Card
                key={branch.id}
                className="hover:shadow-2xl transition-all cursor-pointer hover:scale-102 border-2"
                onClick={() => setActiveBranch(branch.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-5">
                    <div className={`p-5 bg-${section.color}-100 rounded-2xl`}>
                      <BranchIcon className={`w-8 h-8 text-${section.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-2xl text-${section.color}-700 mb-2`}>{branch.اسم_الفرع}</h3>
                      <p className="text-gray-600 mb-3">{branch.الوصف}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-sm px-3 py-1">
                          {branch.عناصر.length} محتوى
                        </Badge>
                        {branch.مواقع_مربحة && branch.مواقع_مربحة.length > 0 && (
                          <Badge className="bg-green-100 text-green-700 text-sm px-3 py-1">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {branch.مواقع_مربحة.length} فرصة ربح
                          </Badge>
                        )}
                      </div>
                    </div>
                    <ArrowLeft className={`w-7 h-7 text-${section.color}-400`} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  // Branch View Component - Enhanced with Islamic Content Hub
  const BranchView = () => {
    const section = getCurrentSection()
    const branch = getCurrentBranch()
    if (!section || !branch) return <SectionView />

    const BranchIcon = branch.icon
    const isIslamicContent = section.id === "religious"

    return (
      <div className="space-y-6">
        {/* Branch Header */}
        <div
          className={`bg-gradient-to-r from-${section.color}-50 to-${section.color}-100 border-${section.color}-200 p-6 rounded-2xl border-2 shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-5 bg-gradient-to-r ${section.gradient} rounded-2xl shadow-xl`}>
                <BranchIcon className="w-9 h-9 text-white" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold text-${section.color}-700`}>{branch.اسم_الفرع}</h3>
                <p className="text-gray-600 text-lg">{branch.الوصف}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveBranch(null)}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              العودة
            </Button>
          </div>
        </div>

        {/* Progress Tracker */}
        <ProgressTracker
          branchName={branch.اسم_الفرع}
          totalLessons={branch.عناصر?.length || 0}
          completedLessons={Math.floor((branch.عناصر?.length || 0) * 0.3)}
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => setShowAI(!showAI)}
            className="h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Bot className="w-6 h-6 mr-2" />
            مساعد AI
          </Button>
          <Button
            onClick={() => setShowPublisher(!showPublisher)}
            className="h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
          >
            <Upload className="w-6 h-6 mr-2" />
            نشر محتوى
          </Button>
        </div>

        {/* Islamic Content Hub */}
        {isIslamicContent && <IslamicContentHub branchName={branch.اسم_الفرع} content={branch.عناصر || []} />}

        {/* AI Assistant */}
        {showAI && <AIAssistant context={branch.اسم_الفرع} sectionName={branch.اسم_الفرع} />}

        {/* Content Publisher */}
        {showPublisher && <ContentPublisher />}

        {/* Content Grid */}
        {branch.عناصر && branch.عناصر.length > 0 && (
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Video className="w-6 h-6 text-blue-600" />
              المحتوى المتاح ({branch.عناصر.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {branch.عناصر.map((item, index) => (
                <ContentCard
                  key={index}
                  item={item}
                  sectionColor={section.color}
                  onBookmark={() => toggleBookmark(`${branch.id}-${index}`)}
                  isBookmarked={bookmarks.includes(`${branch.id}-${index}`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Earning Platforms */}
        {branch.مواقع_مربحة && branch.مواقع_مربحة.length > 0 && (
          <EarningPlatforms platforms={branch.مواقع_مربحة} branchName={branch.اسم_الفرع} />
        )}
      </div>
    )
  }

  const ProfileSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">ملفي الشخصي</h2>

      {/* Pi Integration */}
      <PiIntegration />

      {/* Creator Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            لوحة التحكم للمنشئين
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CreatorDashboard />
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-gray-600" />
            الإعدادات القانونية
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start h-14 text-lg"
            onClick={() => setActiveTab("privacy")}
          >
            <Shield className="w-5 h-5 mr-3 text-emerald-600" />
            سياسة الخصوصية
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start h-14 text-lg"
            onClick={() => setActiveTab("terms")}
          >
            <FileText className="w-5 h-5 mr-3 text-blue-600" />
            الشروط والأحكام
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  // Community section
  const CommunitySection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">المجتمع والتحديات</h2>
      <CommunityFeatures />
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-blue-800 to-indigo-900" dir="rtl">
      <DarkModeToggle />

      <div className="max-w-4xl mx-auto bg-background min-h-screen shadow-2xl transition-colors duration-300">
        <div className="pb-28">
          <div className="p-5">
            {activeTab === "privacy" ? (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab("profile")}
                  className="mb-4"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  العودة للملف الشخصي
                </Button>
                <PrivacyPolicy />
              </div>
            ) : activeTab === "terms" ? (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab("profile")}
                  className="mb-4"
                >
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
              <ProfileSection />
            ) : activeTab === "community" ? (
              <CommunitySection />
            ) : activeBranch ? (
              <BranchView />
            ) : activeSection ? (
              <SectionView />
            ) : (
              <>
                <Dashboard />
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
              variant={activeTab === "profile" || activeTab === "privacy" || activeTab === "terms" ? "default" : "ghost"}
              size="sm"
              className={`flex-col h-auto py-2 px-1 text-xs ${
                activeTab === "profile" || activeTab === "privacy" || activeTab === "terms"
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

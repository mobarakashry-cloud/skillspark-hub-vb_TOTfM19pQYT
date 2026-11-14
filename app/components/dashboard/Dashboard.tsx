// Dashboard tab of the SkillSpark Hub. Receives the pieces of parent state
// it renders (balance + search), keeping UI decoupled from routing state.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Coins, TrendingUp, CheckCircle, Play, Search, Star, Target, Sparkles, Bot, Eye } from "lucide-react"
import { appData } from "@/app/lib/app-data"

interface Props {
  userBalance: number
  searchQuery: string
  onSearch: (q: string) => void
}

export function Dashboard({ userBalance, searchQuery, onSearch }: Props) {
  return (
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
              onChange={(e) => onSearch(e.target.value)}
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
          {appData.mainSections.map((section) => {
            const SectionIcon = section.icon
            return (
              <Card
                key={section.id}
                className={`hover:shadow-2xl transition-all cursor-pointer hover:scale-105 bg-${section.color}-50 border-${section.color}-200`}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div
                      className={`p-5 bg-gradient-to-r ${section.gradient} rounded-2xl mb-4 mx-auto w-fit shadow-xl`}
                    >
                      <SectionIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`font-bold text-base text-${section.color}-700 mb-2`}>{section.name}</div>
                    <div className="text-sm text-gray-600">{section.branches.length} فرع</div>
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
}

// BranchView tab: shows one lesson branch within a section.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SectionView } from "@/app/components/sections/SectionView"
import { ProgressTracker } from "@/components/progress-tracker"
import { IslamicContentHub } from "@/components/islamic-content-hub"
import { AIAssistant } from "@/components/ai-assistant"
import { ContentPublisher } from "@/components/content-publisher"
import { ContentCard } from "@/components/content-card"
import { EarningPlatforms } from "@/components/earning-platforms"
import {
  TrendingUp,
  Video,
  Star,
  Play,
  Eye,
  ArrowLeft,
  Search,
  Bot,
  Upload,
} from "lucide-react"
import { appData, type MainSection } from "@/app/lib/app-data"

interface Props {
  sectionId: string | null
  branchId: string | null
  showAI: boolean
  showPublisher: boolean
  onToggleAI: () => void
  onTogglePublish: () => void
  onToggleBookmark: (id: string) => void
}

export function BranchView({
  sectionId,
  branchId,
  showAI,
  showPublisher,
  onToggleAI,
  onTogglePublish,
  onToggleBookmark,
}: Props) {
  const section = sectionId ? appData.mainSections.find((s) => s.id === sectionId) : undefined
  const branch = section?.branches.find((b) => b.id === branchId)

  if (!section || !branch) return <SectionView sectionId={sectionId} />

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
              <h3 className={`text-2xl font-bold text-${section.color}-700`}>{branch.name}</h3>
              <p className="text-gray-600 text-lg">{branch.description}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {}}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            العودة
          </Button>
        </div>
      </div>

      {/* Progress Tracker */}
      <ProgressTracker
        branchName={branch.name}
        totalLessons={branch.lessons.length || 0}
        completedLessons={Math.floor((branch.lessons.length || 0) * 0.3)}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={onToggleAI}
          className="h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          <Bot className="w-6 h-6 mr-2" />
          مساعد AI
        </Button>
        <Button
          onClick={onTogglePublish}
          className="h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
        >
          <Upload className="w-6 h-6 mr-2" />
          نشر محتوى
        </Button>
      </div>

      {/* Islamic Content Hub */}
      {isIslamicContent && (
        <IslamicContentHub branchName={branch.name} content={branch.lessons || []} />
      )}

      {/* AI Assistant */}
      {showAI && <AIAssistant context={branch.name} sectionName={branch.name} />}

      {/* Content Publisher */}
      {showPublisher && <ContentPublisher />}

      {/* Content Grid */}
      {branch.lessons.length > 0 && (
        <div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Video className="w-6 h-6 text-blue-600" />
            المحتوى المتاح ({branch.lessons.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {branch.lessons.map((item, index) => (
              <ContentCard
                key={index}
                item={item}
                sectionColor={section.color}
                onBookmark={onToggleBookmark}
                isBookmarked={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Earning Platforms */}
      {branch.earningSites && branch.earningSites.length > 0 && (
        <EarningPlatforms platforms={branch.earningSites} branchName={branch.name} />
      )}
    </div>
  )
}


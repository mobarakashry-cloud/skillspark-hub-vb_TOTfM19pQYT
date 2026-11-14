// SectionView tab: shows one main section (its branches) inside the hub.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Badge, TrendingUp, Users } from "lucide-react"
import { appData, type MainSection } from "@/app/lib/app-data"

interface Props {
  sectionId: string | null
}

export function SectionView({ sectionId }: Props) {
  const section = sectionId ? appData.mainSections.find((s) => s.id === sectionId) : undefined
  if (!section) return null

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
              <h2 className={`text-3xl font-bold text-${section.color}-700`}>{section.name}</h2>
              <p className="text-gray-600 text-lg">{section.branches.length} فرع متاح</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              // handled by parent router; no-op here
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
          <Input placeholder={`البحث في ${section.name}...`} className="pl-12 bg-white h-12" />
        </div>
      </div>

      {/* Branches Grid */}
      <div className="grid grid-cols-1 gap-5">
        {section.branches.map((branch) => {
          const BranchIcon = branch.icon
          return (
            <Card
              key={branch.id}
              className="hover:shadow-2xl transition-all cursor-pointer hover:scale-102 border-2"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-5">
                  <div className={`p-5 bg-${section.color}-100 rounded-2xl`}>
                    <BranchIcon className={`w-8 h-8 text-${section.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-2xl text-${section.color}-700 mb-2`}>{branch.name}</h3>
                    <p className="text-gray-600 mb-3">{branch.description}</p>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-sm px-3 py-1">
                        {branch.lessons.length} محتوى
                      </Badge>
                      {branch.earningSites && branch.earningSites.length > 0 && (
                        <Badge className="bg-green-100 text-green-700 text-sm px-3 py-1">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {branch.earningSites.length} فرصة ربح
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

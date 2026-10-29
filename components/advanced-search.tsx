"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, BookOpen, Code, Wrench, Video, FileText, Coins } from "lucide-react"

export function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: "religious", name: "التعليم الديني", icon: BookOpen, color: "emerald" },
    { id: "digital", name: "المهارات الرقمية", icon: Code, color: "blue" },
    { id: "crafts", name: "الحرف اليدوية", icon: Wrench, color: "amber" },
  ]

  const contentTypes = [
    { id: "video", name: "فيديو", icon: Video },
    { id: "text", name: "نص", icon: FileText },
    { id: "free", name: "مجاني", icon: Coins },
  ]

  const levels = [
    { id: "beginner", name: "مبتدئ", color: "green" },
    { id: "intermediate", name: "متوسط", color: "yellow" },
    { id: "advanced", name: "متقدم", color: "red" },
  ]

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedType(null)
    setSelectedLevel(null)
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="ابحث عن دروس، دورات، فيديوهات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 h-12 text-base"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-12 px-4 bg-transparent"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5 mr-2" />
              فلاتر
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      {showFilters && (
        <Card className="shadow-lg bg-gradient-to-r from-gray-50 to-blue-50">
          <CardContent className="p-4 space-y-4">
            {/* Categories */}
            <div>
              <h4 className="font-bold text-sm mb-2">القسم:</h4>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <Button
                      key={cat.id}
                      variant={selectedCategory === cat.id ? "default" : "outline"}
                      size="sm"
                      className={selectedCategory === cat.id ? `bg-${cat.color}-600 hover:bg-${cat.color}-700` : ""}
                      onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                    >
                      <Icon className="w-4 h-4 mr-1" />
                      {cat.name}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Content Type */}
            <div>
              <h4 className="font-bold text-sm mb-2">نوع المحتوى:</h4>
              <div className="flex gap-2 flex-wrap">
                {contentTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <Button
                      key={type.id}
                      variant={selectedType === type.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                    >
                      <Icon className="w-4 h-4 mr-1" />
                      {type.name}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Level */}
            <div>
              <h4 className="font-bold text-sm mb-2">المستوى:</h4>
              <div className="flex gap-2 flex-wrap">
                {levels.map((level) => (
                  <Button
                    key={level.id}
                    variant={selectedLevel === level.id ? "default" : "outline"}
                    size="sm"
                    className={selectedLevel === level.id ? `bg-${level.color}-600 hover:bg-${level.color}-700` : ""}
                    onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
                  >
                    {level.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory || selectedType || selectedLevel) && (
              <Button variant="ghost" size="sm" className="w-full" onClick={clearFilters}>
                <X className="w-4 h-4 mr-2" />
                إزالة جميع الفلاتر
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Active Filters Display */}
      {(selectedCategory || selectedType || selectedLevel) && (
        <div className="flex gap-2 flex-wrap">
          {selectedCategory && (
            <Badge className="bg-blue-600 text-white px-3 py-1">
              {categories.find((c) => c.id === selectedCategory)?.name}
              <X className="w-3 h-3 mr-1 cursor-pointer" onClick={() => setSelectedCategory(null)} />
            </Badge>
          )}
          {selectedType && (
            <Badge className="bg-purple-600 text-white px-3 py-1">
              {contentTypes.find((t) => t.id === selectedType)?.name}
              <X className="w-3 h-3 mr-1 cursor-pointer" onClick={() => setSelectedType(null)} />
            </Badge>
          )}
          {selectedLevel && (
            <Badge className="bg-orange-600 text-white px-3 py-1">
              {levels.find((l) => l.id === selectedLevel)?.name}
              <X className="w-3 h-3 mr-1 cursor-pointer" onClick={() => setSelectedLevel(null)} />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}

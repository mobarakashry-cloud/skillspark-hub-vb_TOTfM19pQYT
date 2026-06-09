"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Eye, Star, Bookmark, Share2, Coins } from "lucide-react"

interface ContentItem {
  عنوان: string
  المدرب?: string
  مدرب?: string
  مدة: string
  مشاهدات: string
  تقييم: number
  نوع?: string
  ربح?: string
}

interface ContentCardProps {
  item: ContentItem
  sectionColor: string
  onBookmark?: () => void
  isBookmarked?: boolean
}

export function ContentCard({ item, sectionColor, onBookmark, isBookmarked }: ContentCardProps) {
  const instructor = item.المدرب || item.مدرب || "مدرس"
  const isFree = item.نوع === "مجاني" || !item.ربح

  return (
    <Card className="hover:shadow-xl transition-all cursor-pointer hover:scale-102">
      <CardContent className="p-0">
        {/* Video Thumbnail */}
        <div className={`relative h-40 bg-gradient-to-br from-${sectionColor}-100 to-${sectionColor}-200 rounded-t-lg`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`p-6 bg-gradient-to-r from-${sectionColor}-500 to-${sectionColor}-600 rounded-full shadow-lg`}
            >
              <Play className="w-10 h-10 text-white" />
            </div>
          </div>
          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {item.مدة}
          </div>
          {/* Type Badge */}
          <div className="absolute top-3 right-3">
            {isFree ? (
              <Badge className="bg-green-500 text-white px-3 py-1 text-sm">🎁 مجاني</Badge>
            ) : (
              <Badge className="bg-yellow-500 text-white px-3 py-1 text-sm">
                <Coins className="w-4 h-4 mr-1" />
                {item.ربح}
              </Badge>
            )}
          </div>
        </div>

        {/* Content Info */}
        <div className="p-4">
          <h4 className="font-bold text-lg mb-2 line-clamp-2">{item.عنوان}</h4>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{instructor[0]}</span>
            </div>
            <span className="text-sm text-gray-600">{instructor}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {item.مشاهدات}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {item.تقييم}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              className={`flex-1 bg-gradient-to-r from-${sectionColor}-600 to-${sectionColor}-700 hover:from-${sectionColor}-700 hover:to-${sectionColor}-800`}
            >
              <Play className="w-4 h-4 mr-2" />
              {isFree ? "مشاهدة" : "شراء وشاهد"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation()
                onBookmark?.()
              }}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current text-yellow-500" : ""}`} />
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

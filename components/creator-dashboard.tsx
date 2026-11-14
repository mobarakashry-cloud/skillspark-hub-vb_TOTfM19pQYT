"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Eye, ThumbsUp, MessageCircle, Coins, TrendingUp, Video, Award } from "lucide-react"

export function CreatorDashboard() {
  const stats = {
    totalViews: 45230,
    totalLikes: 8930,
    totalComments: 1240,
    totalEarnings: 3450,
    thisMonthEarnings: 780,
    contentPublished: 24,
    avgRating: 4.7,
  }

  const topContent = [
    {
      title: "تطوير تطبيقات React",
      views: 12300,
      earnings: 850,
      engagement: 92,
    },
    {
      title: "أساسيات Python",
      views: 8900,
      earnings: 620,
      engagement: 88,
    },
    {
      title: "تصميم UI/UX",
      views: 6500,
      earnings: 450,
      engagement: 85,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-90">إجمالي المشاهدات</p>
                <p className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-90">الأرباح الكلية</p>
                <p className="text-2xl font-bold">{stats.totalEarnings} π</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-90">الإعجابات</p>
                <p className="text-2xl font-bold">{stats.totalLikes.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-90">التعليقات</p>
                <p className="text-2xl font-bold">{stats.totalComments.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            تقدم هذا الشهر
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">هدف الأرباح الشهري (1000 π)</span>
              <span className="text-sm font-bold text-green-600">{stats.thisMonthEarnings} π</span>
            </div>
            <Progress value={(stats.thisMonthEarnings / 1000) * 100} className="h-3" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Badge className="bg-blue-100 text-blue-700 py-2 justify-center">
              <Video className="w-4 h-4 mr-1" />
              {stats.contentPublished} محتوى
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-700 py-2 justify-center">
              <Award className="w-4 h-4 mr-1" />
              {stats.avgRating} تقييم
            </Badge>
            <Badge className="bg-green-100 text-green-700 py-2 justify-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {((stats.thisMonthEarnings / 1000) * 100).toFixed(0)}%
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-600" />
            المحتوى الأكثر نجاحًا
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topContent.map((content, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">{content.title}</h4>
                <Badge className="bg-yellow-600 text-white">
                  <Coins className="w-4 h-4 mr-1" />
                  {content.earnings} π
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {content.views.toLocaleString()} مشاهدة
                </span>
                <span>معدل التفاعل: {content.engagement}%</span>
              </div>
              <Progress value={content.engagement} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

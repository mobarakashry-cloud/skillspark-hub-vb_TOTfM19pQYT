"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Clock, Star, Play } from "lucide-react"

export function SmartRecommendations({ userInterests }: { userInterests?: string[] }) {
  const recommendations = [
    {
      title: "تطوير تطبيقات الويب الحديثة",
      category: "البرمجة",
      reason: "بناءً على اهتمامك بـ JavaScript",
      duration: "2.5 ساعة",
      rating: 4.8,
      color: "blue",
    },
    {
      title: "تفسير سورة البقرة - الجزء الأول",
      category: "التعليم الديني",
      reason: "محتوى إسلامي أساسي",
      duration: "45 دقيقة",
      rating: 4.9,
      color: "emerald",
    },
    {
      title: "التصميم الجرافيكي للمبتدئين",
      category: "التصميم",
      reason: "مهارة مطلوبة في سوق العمل",
      duration: "1.5 ساعة",
      rating: 4.7,
      color: "purple",
    },
  ]

  return (
    <Card className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-2 border-purple-200 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-xl font-bold">توصيات ذكية لك</div>
            <div className="text-sm font-normal text-gray-600">مختارة بعناية بواسطة AI</div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <Card key={index} className={`border-2 border-${rec.color}-200 hover:shadow-lg transition-all`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 bg-gradient-to-r from-${rec.color}-500 to-${rec.color}-600 rounded-xl flex-shrink-0`}
                >
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2">{rec.title}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`bg-${rec.color}-100 text-${rec.color}-700 text-xs`}>{rec.category}</Badge>
                    <span className="flex items-center gap-1 text-yellow-600 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      {rec.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {rec.reason}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {rec.duration}
                  </p>
                </div>
                <Button size="sm" className={`bg-${rec.color}-600 hover:bg-${rec.color}-700`}>
                  ابدأ
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

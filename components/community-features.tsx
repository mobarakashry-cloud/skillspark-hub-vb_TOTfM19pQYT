"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Users, MessageCircle, Trophy, Calendar, ThumbsUp, Send } from "lucide-react"

export function CommunityFeatures() {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null)

  const weeklyChallenge = {
    title: "تحدي الأسبوع: تعلم 5 دروس جديدة",
    description: "أكمل 5 دروس من أي قسم وأحصل على 100 π",
    progress: 3,
    total: 5,
    timeLeft: "3 أيام متبقية",
    reward: "100 π",
  }

  const forums = [
    { title: "أسئلة البرمجة", posts: 145, members: 1240, color: "blue" },
    { title: "الدراسات الإسلامية", posts: 89, members: 890, color: "emerald" },
    { title: "الحرف اليدوية", posts: 67, members: 450, color: "amber" },
  ]

  const discussions = [
    {
      user: "أحمد محمد",
      title: "كيف أبدأ في تعلم React؟",
      replies: 12,
      likes: 24,
      time: "منذ ساعتين",
    },
    {
      user: "فاطمة علي",
      title: "نصائح لحفظ القرآن بسرعة",
      replies: 8,
      likes: 31,
      time: "منذ 4 ساعات",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Weekly Challenge */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-7 h-7" />
            {weeklyChallenge.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm opacity-90">{weeklyChallenge.description}</p>

          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="font-bold">
                {weeklyChallenge.progress} / {weeklyChallenge.total} مكتمل
              </span>
              <Badge className="bg-yellow-500 text-white">{weeklyChallenge.reward}</Badge>
            </div>
            <div className="h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all"
                style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.total) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{weeklyChallenge.timeLeft}</span>
          </div>
        </CardContent>
      </Card>

      {/* Forums */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            المنتديات والمجموعات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {forums.map((forum, index) => (
            <div
              key={index}
              className={`p-4 bg-${forum.color}-50 border-2 border-${forum.color}-200 rounded-lg hover:shadow-lg transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">{forum.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {forum.posts} منشور
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {forum.members} عضو
                    </span>
                  </div>
                </div>
                <Button size="sm" className={`bg-${forum.color}-600 hover:bg-${forum.color}-700`}>
                  دخول
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Discussions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-green-600" />
            نقاشات حديثة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {discussions.map((discussion, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {discussion.user[0]}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{discussion.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    بواسطة {discussion.user} • {discussion.time}
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-blue-600">
                      <MessageCircle className="w-4 h-4" />
                      {discussion.replies} رد
                    </span>
                    <span className="flex items-center gap-1 text-red-600">
                      <ThumbsUp className="w-4 h-4" />
                      {discussion.likes} إعجاب
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Post */}
      <Card>
        <CardHeader>
          <CardTitle>شارك سؤالك أو فكرتك</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="اكتب سؤالك أو مشاركتك هنا..." className="mb-3" rows={4} />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4 mr-2" />
            نشر
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Send, ThumbsUp, MessageCircle, CheckCircle, TrendingUp, Star, Sparkles } from "lucide-react"

export function UserSuggestions() {
  const [suggestion, setSuggestion] = useState("")
  const [category, setCategory] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const suggestionCategories = [
    { id: "feature", name: "ميزة جديدة", icon: Sparkles, color: "purple" },
    { id: "content", name: "محتوى مقترح", icon: Lightbulb, color: "yellow" },
    { id: "improvement", name: "تحسين", icon: TrendingUp, color: "blue" },
    { id: "bug", name: "مشكلة تقنية", icon: MessageCircle, color: "red" },
  ]

  const topSuggestions = [
    {
      id: 1,
      text: "إضافة دورات في الذكاء الاصطناعي",
      author: "أحمد محمد",
      votes: 234,
      status: "قيد التنفيذ",
      category: "محتوى",
    },
    {
      id: 2,
      text: "تطبيق للهاتف المحمول",
      author: "فاطمة علي",
      votes: 189,
      status: "قيد الدراسة",
      category: "ميزة",
    },
    {
      id: 3,
      text: "نظام شهادات معتمدة",
      author: "محمد حسن",
      votes: 156,
      status: "مقبول",
      category: "ميزة",
    },
  ]

  const handleSubmit = () => {
    if (!suggestion.trim() || !category) return
    setSubmitted(true)
    setTimeout(() => {
      setSuggestion("")
      setCategory("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      {/* Submit Suggestion */}
      <Card className="shadow-2xl border-2 border-yellow-200">
        <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xl font-bold">شارك اقتراحك</div>
              <div className="text-sm font-normal opacity-90">ساعدنا في تطوير المنصة</div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          {!submitted ? (
            <div className="space-y-5">
              <div>
                <label className="block font-bold mb-3">نوع الاقتراح:</label>
                <div className="grid grid-cols-2 gap-3">
                  {suggestionCategories.map((cat) => {
                    const Icon = cat.icon
                    return (
                      <Button
                        key={cat.id}
                        variant={category === cat.id ? "default" : "outline"}
                        className={`h-16 flex-col ${
                          category === cat.id ? `bg-${cat.color}-600 hover:bg-${cat.color}-700` : ""
                        }`}
                        onClick={() => setCategory(cat.id)}
                      >
                        <Icon className="w-5 h-5 mb-1" />
                        <span className="text-sm">{cat.name}</span>
                      </Button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block font-bold mb-2">اقتراحك:</label>
                <Textarea
                  placeholder="اكتب اقتراحك بالتفصيل..."
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  rows={5}
                  className="text-base"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!suggestion.trim() || !category}
                className="w-full h-12 text-lg bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
              >
                <Send className="w-5 h-5 mr-2" />
                إرسال الاقتراح
              </Button>

              <Card className="bg-blue-50 border-2 border-blue-200">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700">
                    💡 <strong>نصيحة:</strong> الاقتراحات التي تحصل على أكثر الأصوات يتم تنفيذها أولاً!
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">شكراً لك!</h3>
              <p className="text-gray-600 text-lg">تم إرسال اقتراحك بنجاح</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Suggestions */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-600" />
            أفضل الاقتراحات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topSuggestions.map((sug) => (
            <Card key={sug.id} className="hover:shadow-lg transition-all">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="text-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-col h-auto py-2 px-3 bg-gradient-to-r from-blue-50 to-indigo-50"
                    >
                      <ThumbsUp className="w-5 h-5 mb-1 text-blue-600" />
                      <span className="font-bold text-blue-600">{sug.votes}</span>
                    </Button>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">{sug.text}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {sug.category}
                      </Badge>
                      <Badge
                        className={`text-xs ${
                          sug.status === "قيد التنفيذ"
                            ? "bg-green-100 text-green-700"
                            : sug.status === "قيد الدراسة"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {sug.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">بواسطة: {sug.author}</p>
                  </div>

                  <Button size="sm" variant="outline" className="bg-blue-50">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Development Stats */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            إحصائيات التطوير
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl font-bold text-green-600">45</div>
              <div className="text-sm text-gray-600">تم التنفيذ</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">23</div>
              <div className="text-sm text-gray-600">قيد التنفيذ</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">إجمالي الاقتراحات</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

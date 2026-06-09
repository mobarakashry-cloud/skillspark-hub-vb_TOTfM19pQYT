"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Play, CheckCircle, Trophy, Star, Clock } from "lucide-react"

interface IslamicContentHubProps {
  branchName: string
  content: Array<any>
}

export function IslamicContentHub({ branchName, content }: IslamicContentHubProps) {
  const [selectedContent, setSelectedContent] = useState<any>(null)
  const [quizMode, setQuizMode] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  // Sample quiz questions for Islamic content
  const quizQuestions = [
    {
      question: "كم عدد سور القرآن الكريم؟",
      options: ["110", "114", "120", "100"],
      correct: 1,
    },
    {
      question: "ما هي أول سورة في القرآن الكريم؟",
      options: ["البقرة", "الفاتحة", "الناس", "الإخلاص"],
      correct: 1,
    },
    {
      question: "في أي سنة هجرية نزل الوحي على الرسول صلى الله عليه وسلم؟",
      options: ["قبل الهجرة", "السنة الأولى", "السنة العاشرة", "السنة الخامسة"],
      correct: 0,
    },
  ]

  const handleQuizAnswer = (selectedOption: number) => {
    if (selectedOption === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed
      setQuizMode(false)
      alert(
        `أحسنت! نتيجتك: ${score + (selectedOption === quizQuestions[currentQuestion].correct ? 1 : 0)} من ${quizQuestions.length}`,
      )
      setCurrentQuestion(0)
      setScore(0)
    }
  }

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xl font-bold">مركز المحتوى الإسلامي</div>
            <div className="text-sm font-normal opacity-90">{branchName}</div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            onClick={() => setQuizMode(true)}
          >
            <Trophy className="w-5 h-5 mr-2" />
            اختبار تفاعلي
          </Button>
          <Button className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Star className="w-5 h-5 mr-2" />
            نماذج عملية
          </Button>
        </div>

        {/* Quiz Mode */}
        {quizMode && (
          <Card className="bg-white border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm">
                    السؤال {currentQuestion + 1} من {quizQuestions.length}
                  </span>
                  <Badge className="bg-blue-600">
                    <Trophy className="w-4 h-4 mr-1" />
                    النتيجة: {score}
                  </Badge>
                </div>
                <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-blue-700">{quizQuestions[currentQuestion].question}</h3>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full h-14 text-lg justify-start hover:bg-blue-50 hover:border-blue-400 bg-transparent"
                    onClick={() => handleQuizAnswer(index)}
                  >
                    <span className="font-bold mr-3 bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </Button>
                ))}
              </div>

              <Button
                variant="ghost"
                className="w-full mt-4"
                onClick={() => {
                  setQuizMode(false)
                  setCurrentQuestion(0)
                  setScore(0)
                }}
              >
                إلغاء الاختبار
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Content List */}
        {!quizMode && content && content.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Play className="w-5 h-5 text-emerald-600" />
              الدروس المتاحة
            </h4>
            {content.slice(0, 3).map((item: any, index: number) => (
              <Card key={index} className="border-2 border-emerald-200 hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-base mb-2">{item.عنوان}</h5>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {item.المدرب || item.مدرب}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.مدة}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                          {item.نوع || "مجاني"}
                        </Badge>
                        <div className="flex items-center gap-1 text-yellow-600">
                          <Star className="w-4 h-4 fill-yellow-400" />
                          <span className="font-bold text-sm">{item.تقييم}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <Play className="w-4 h-4 mr-1" />
                      ابدأ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Achievements */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
          <CardContent className="p-4">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              الإنجازات والشارات
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-medium">متعلم نشط</p>
              </div>
              <div className="text-center opacity-50">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-xs font-medium">مجتهد</p>
              </div>
              <div className="text-center opacity-50">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-xs font-medium">متميز</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

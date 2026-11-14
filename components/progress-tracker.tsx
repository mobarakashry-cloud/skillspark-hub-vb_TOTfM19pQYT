"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Lock, Star, Trophy, Target } from "lucide-react"

interface ProgressTrackerProps {
  branchName: string
  totalLessons: number
  completedLessons?: number
}

export function ProgressTracker({ branchName, totalLessons, completedLessons = 0 }: ProgressTrackerProps) {
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
  const level = progress >= 80 ? "متقدم" : progress >= 50 ? "متوسط" : progress >= 20 ? "مبتدئ" : "جديد"
  const levelColor = progress >= 80 ? "purple" : progress >= 50 ? "blue" : progress >= 20 ? "green" : "gray"

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">تقدمك في {branchName}</h3>
              <p className="text-sm text-gray-600">استمر في التعلم!</p>
            </div>
          </div>
          <Badge className={`bg-${levelColor}-100 text-${levelColor}-700 px-4 py-2 text-base`}>
            <Star className="w-4 h-4 mr-1" />
            {level}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-5">
          <div className="flex justify-between text-sm font-medium">
            <span>
              {completedLessons} من {totalLessons} درس
            </span>
            <span className="text-blue-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-white rounded-lg border-2 border-green-200">
            <CheckCircle className="w-6 h-6 mx-auto text-green-600 mb-1" />
            <div className="font-bold text-green-600">{completedLessons}</div>
            <div className="text-xs text-gray-600">مكتمل</div>
          </div>

          <div className="text-center p-3 bg-white rounded-lg border-2 border-yellow-200">
            <Clock className="w-6 h-6 mx-auto text-yellow-600 mb-1" />
            <div className="font-bold text-yellow-600">{totalLessons - completedLessons}</div>
            <div className="text-xs text-gray-600">متبقي</div>
          </div>

          <div className="text-center p-3 bg-white rounded-lg border-2 border-purple-200">
            <Trophy className="w-6 h-6 mx-auto text-purple-600 mb-1" />
            <div className="font-bold text-purple-600">{Math.floor(progress / 10)}</div>
            <div className="text-xs text-gray-600">إنجازات</div>
          </div>
        </div>

        {/* Next Lesson */}
        {completedLessons < totalLessons && (
          <div className="mt-5 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border-2 border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-emerald-700">الدرس التالي</div>
                <div className="text-sm text-gray-600">أكمل الدرس الحالي لفتح المزيد</div>
              </div>
            </div>
          </div>
        )}

        {/* Completion Message */}
        {progress === 100 && (
          <div className="mt-5 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200 text-center">
            <Trophy className="w-12 h-12 mx-auto text-purple-600 mb-2" />
            <div className="font-bold text-lg text-purple-700">مبروك! أكملت جميع الدروس</div>
            <div className="text-sm text-gray-600 mt-1">حان الوقت للانتقال إلى المستوى التالي</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

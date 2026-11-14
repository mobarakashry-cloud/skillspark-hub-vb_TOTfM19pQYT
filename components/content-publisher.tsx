"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  Video,
  FileText,
  ImageIcon,
  Volume2,
  CheckCircle,
  Coins,
  Eye,
  Clock,
  Sparkles,
  AlertCircle,
} from "lucide-react"

export function ContentPublisher() {
  const [step, setStep] = useState(1)
  const [contentType, setContentType] = useState<"video" | "audio" | "document" | "image">("video")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [isPaid, setIsPaid] = useState(false)
  const [price, setPrice] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const contentTypes = [
    { type: "video" as const, icon: Video, label: "فيديو", color: "blue" },
    { type: "audio" as const, icon: Volume2, label: "صوتي", color: "purple" },
    { type: "document" as const, icon: FileText, label: "مستند", color: "green" },
    { type: "image" as const, icon: ImageIcon, label: "صورة", color: "orange" },
  ]

  const categories = [
    { id: "religious", name: "التعليم الديني", color: "emerald" },
    { id: "digital", name: "المهارات الرقمية", color: "blue" },
    { id: "crafts", name: "الحرف اليدوية", color: "amber" },
    { id: "science", name: "العلوم", color: "green" },
    { id: "languages", name: "اللغات", color: "purple" },
  ]

  const handleUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setStep(3)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <Card className="shadow-2xl border-2 border-blue-200">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <Upload className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xl font-bold">نشر محتوى جديد</div>
            <div className="text-sm font-normal opacity-90">شارك معرفتك واربح من محتواك</div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        {/* Progress Steps */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && <div className={`w-20 h-1 ${step > s ? "bg-blue-600" : "bg-gray-200"}`}></div>}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>نوع المحتوى</span>
            <span>التفاصيل</span>
            <span>النشر</span>
          </div>
        </div>

        {/* Step 1: Content Type */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">اختر نوع المحتوى:</h3>
              <div className="grid grid-cols-2 gap-4">
                {contentTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <Button
                      key={type.type}
                      variant={contentType === type.type ? "default" : "outline"}
                      className={`h-24 flex-col ${
                        contentType === type.type ? `bg-gradient-to-r from-${type.color}-600 to-${type.color}-700` : ""
                      }`}
                      onClick={() => setContentType(type.type)}
                    >
                      <Icon className="w-8 h-8 mb-2" />
                      <span className="text-base">{type.label}</span>
                    </Button>
                  )
                })}
              </div>
            </div>

            <Button onClick={() => setStep(2)} className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
              التالي
            </Button>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block font-bold mb-2">العنوان</label>
              <Input
                placeholder="عنوان جذاب للمحتوى..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">الوصف</label>
              <Textarea
                placeholder="وصف تفصيلي للمحتوى..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="text-base"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">القسم</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border-2 rounded-lg text-base"
              >
                <option value="">اختر القسم...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
              <Upload className="w-16 h-16 mx-auto text-gray-400 mb-3" />
              <p className="text-base text-gray-600 mb-2">اسحب الملف هنا أو اضغط للاختيار</p>
              <p className="text-sm text-gray-500">الحد الأقصى: 500 MB</p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <label className="font-bold">محتوى مدفوع؟</label>
                <Button
                  variant={isPaid ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsPaid(!isPaid)}
                  className={isPaid ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                >
                  {isPaid ? "نعم" : "لا"}
                </Button>
              </div>

              {isPaid && (
                <div>
                  <label className="block text-sm font-medium mb-2">السعر (π)</label>
                  <Input
                    type="number"
                    placeholder="50"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="h-10"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-12">
                السابق
              </Button>
              <Button onClick={handleUpload} className="flex-1 h-12 bg-blue-600 hover:bg-blue-700">
                رفع ونشر
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">تم النشر بنجاح!</h3>
              <p className="text-gray-600 text-lg">محتواك الآن متاح للمشاهدة</p>
            </div>

            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <CardContent className="p-5">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Coins className="w-6 h-6 text-yellow-600" />
                  توقعات الأرباح
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">نصيبك من كل مشاهدة:</span>
                    <span className="font-bold text-green-600 text-lg">
                      {isPaid ? Math.round(Number(price) * 0.7) : "0.5"} π
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">نصيب المنصة:</span>
                    <span className="font-bold text-blue-600 text-lg">
                      {isPaid ? Math.round(Number(price) * 0.3) : "0.2"} π
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              <Badge className="bg-blue-100 text-blue-700 py-3 justify-center text-sm">
                <Eye className="w-4 h-4 mr-1" />
                قيد المراجعة
              </Badge>
              <Badge className="bg-green-100 text-green-700 py-3 justify-center text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                جودة عالية
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 py-3 justify-center text-sm">
                <Sparkles className="w-4 h-4 mr-1" />
                AI محسّن
              </Badge>
            </div>

            <Button
              onClick={() => {
                setStep(1)
                setTitle("")
                setDescription("")
                setCategory("")
                setIsPaid(false)
                setPrice("")
              }}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700"
            >
              نشر محتوى آخر
            </Button>
          </div>
        )}

        {/* Upload Progress */}
        {isUploading && (
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span>جاري الرفع...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-3" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 animate-spin" />
              <span>الوقت المتبقي: {Math.round((100 - uploadProgress) / 10)} ثانية</span>
            </div>
          </div>
        )}

        {/* Info Box */}
        {step === 1 && (
          <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">معلومات مهمة:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• المحتوى يخضع للمراجعة قبل النشر</li>
                    <li>• تأكد من جودة المحتوى والالتزام بالمعايير الإسلامية</li>
                    <li>• ستحصل على 70% من الأرباح</li>
                    <li>• يمكنك تتبع أداء محتواك من لوحة التحكم</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

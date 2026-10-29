"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Play,
  Download,
  Share2,
  Star,
  Clock,
  Users,
  Coins,
  CheckCircle,
  MessageCircle,
  Video,
  Mic,
  FileText,
  Upload,
  Edit,
  Volume2,
  ImageIcon,
  Award,
  TrendingUp,
  Filter,
  Eye,
} from "lucide-react"

// Enhanced Quiz Component
export function InteractiveQuiz({ topic }: { topic: string }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: `ما هو أهم مبدأ في ${topic}؟`,
      options: ["الممارسة المستمرة", "الحفظ فقط", "المشاهدة فقط", "لا أعرف"],
      correct: 0,
    },
    {
      question: `كيف تطبق ${topic} عملياً؟`,
      options: ["بالتجربة", "بالقراءة فقط", "بالمشاهدة فقط", "لا حاجة للتطبيق"],
      correct: 0,
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  if (showResult) {
    return (
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-6 text-center">
          <Award className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-green-700 mb-2">🎉 تهانينا!</h3>
          <p className="text-lg mb-4">
            نتيجتك: {score}/{questions.length}
          </p>
          <div className="space-y-2">
            <Progress value={(score / questions.length) * 100} className="w-full" />
            <p className="text-sm text-gray-600">
              {score === questions.length
                ? "ممتاز! أتقنت الموضوع"
                : score >= questions.length / 2
                  ? "جيد! يمكنك التحسن أكثر"
                  : "تحتاج لمراجعة الموضوع"}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Share2 className="w-4 h-4 mr-2" />
              شارك النتيجة
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              <Play className="w-4 h-4 mr-2" />
              إعادة الاختبار
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>📝 اختبار: {topic}</span>
          <Badge variant="outline">
            {currentQuestion + 1}/{questions.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-4">
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full" />
        </div>

        <h3 className="font-semibold text-lg mb-4">{questions[currentQuestion].question}</h3>

        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className={`w-full text-right justify-start p-4 h-auto ${
                selectedAnswer === index
                  ? index === questions[currentQuestion].correct
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                  : "bg-transparent"
              }`}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="ml-2 font-bold">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Enhanced Live Room Component
export function LiveRoomInterface({ roomType }: { roomType: "voice" | "video" }) {
  const [isJoined, setIsJoined] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [participants] = useState([
    { id: 1, name: "أحمد محمد", role: "مدرس", speaking: true },
    { id: 2, name: "فاطمة علي", role: "طالب", speaking: false },
    { id: 3, name: "محمد حسن", role: "طالب", speaking: false },
  ])

  return (
    <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          {roomType === "voice" ? <Mic className="w-5 h-5" /> : <Video className="w-5 h-5" />}
          غرفة {roomType === "voice" ? "صوتية" : "فيديو"} مباشرة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Room Info */}
        <div className="bg-white p-3 rounded-lg border">
          <h4 className="font-semibold mb-2">🎓 ورشة تعلم البرمجة</h4>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {participants.length} مشارك
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              45 دقيقة
            </span>
          </div>
        </div>

        {/* Participants */}
        <div className="space-y-2">
          <h5 className="font-semibold text-sm">المشاركون:</h5>
          {participants.map((participant) => (
            <div key={participant.id} className="flex items-center gap-3 p-2 bg-white rounded border">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">{participant.name[0]}</span>
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{participant.name}</div>
                <div className="text-xs text-gray-600">{participant.role}</div>
              </div>
              {participant.speaking && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600">يتحدث</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        {isJoined ? (
          <div className="flex gap-2">
            <Button
              variant={isMuted ? "destructive" : "outline"}
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              className="flex-1"
            >
              <Mic className={`w-4 h-4 mr-1 ${isMuted ? "line-through" : ""}`} />
              {isMuted ? "إلغاء كتم" : "كتم"}
            </Button>
            {roomType === "video" && (
              <Button
                variant={isVideoOff ? "destructive" : "outline"}
                size="sm"
                onClick={() => setIsVideoOff(!isVideoOff)}
                className="flex-1"
              >
                <Video className={`w-4 h-4 mr-1 ${isVideoOff ? "line-through" : ""}`} />
                {isVideoOff ? "تشغيل الكاميرا" : "إيقاف الكاميرا"}
              </Button>
            )}
            <Button variant="destructive" size="sm" onClick={() => setIsJoined(false)} className="flex-1">
              مغادرة
            </Button>
          </div>
        ) : (
          <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => setIsJoined(true)}>
            <Users className="w-4 h-4 mr-2" />
            انضمام للغرفة
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

// Enhanced Content Rating Component
export function ContentRating({ contentId }: { contentId: string }) {
  const [rating, setRating] = useState(0)
  const [hasRated, setHasRated] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [review, setReview] = useState("")

  const handleRating = (stars: number) => {
    setRating(stars)
    setHasRated(true)
    setShowReview(true)
  }

  return (
    <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
      <CardContent className="p-4">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-600" />⭐ قيّم هذا المحتوى
        </h4>

        {!hasRated ? (
          <div className="space-y-3">
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRating(star)}
                  className="p-1 hover:bg-yellow-100"
                >
                  <Star className={`w-6 h-6 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                </Button>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600">اضغط على النجوم للتقييم</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-green-600 font-semibold">شكراً لك على التقييم!</p>
            </div>

            {showReview && (
              <div className="space-y-2">
                <Textarea
                  placeholder="اكتب مراجعة (اختياري)..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={3}
                />
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  إرسال المراجعة
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Rating Stats */}
        <div className="mt-4 pt-3 border-t">
          <div className="flex items-center justify-between text-sm">
            <span>متوسط التقييم:</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-500">(247 تقييم)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Enhanced Search Component
export function SmartSearch() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)

  const searchResults = [
    {
      id: 1,
      title: "تعلم Python من الصفر",
      type: "video",
      category: "البرمجة",
      rating: 4.9,
      views: 1234,
      duration: "2:30:00",
      free: true,
    },
    {
      id: 2,
      title: "إصلاح الهواتف المحمولة",
      type: "course",
      category: "الصيانة",
      rating: 4.7,
      views: 856,
      duration: "1:45:00",
      free: false,
      price: 50,
    },
    {
      id: 3,
      title: "أحكام الصلاة",
      type: "audio",
      category: "الدين",
      rating: 5.0,
      views: 2341,
      duration: "45:00",
      free: true,
    },
  ]

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="ابحث عن أي شيء... دروس، دورات، مقالات..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-4 h-12 text-lg"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">نوع المحتوى</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="all">الكل</option>
                  <option value="video">فيديو</option>
                  <option value="course">دورة</option>
                  <option value="audio">صوتي</option>
                  <option value="file">ملف</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ترتيب حسب</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="relevance">الأكثر صلة</option>
                  <option value="rating">التقييم</option>
                  <option value="views">المشاهدات</option>
                  <option value="date">الأحدث</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Results */}
      <div className="space-y-3">
        {searchResults.map((result) => (
          <Card key={result.id} className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                  {result.type === "video" && <Video className="w-6 h-6 text-gray-400" />}
                  {result.type === "course" && <FileText className="w-6 h-6 text-gray-400" />}
                  {result.type === "audio" && <Volume2 className="w-6 h-6 text-gray-400" />}
                  {result.type === "image" && <ImageIcon className="w-6 h-6 text-gray-400" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{result.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                    <Badge variant="outline">{result.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {result.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {result.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {result.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {result.free ? (
                      <Badge className="bg-green-100 text-green-700">مجاني</Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-700">{result.price} π</Badge>
                    )}
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Play className="w-3 h-3 mr-1" />
                      مشاهدة
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Enhanced Earnings Dashboard
export function EarningsDashboard() {
  const [timeframe, setTimeframe] = useState("month")
  const [earningsData] = useState({
    total: 2347,
    thisMonth: 456,
    pending: 123,
    withdrawn: 1768,
  })

  return (
    <div className="space-y-6">
      {/* Earnings Overview */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-green-600" />💰 لوحة الأرباح
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <Coins className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-700">{earningsData.total} π</div>
              <div className="text-sm text-gray-600">إجمالي الأرباح</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <TrendingUp className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-700">{earningsData.thisMonth} π</div>
              <div className="text-sm text-gray-600">هذا الشهر</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Clock className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
              <div className="text-2xl font-bold text-yellow-700">{earningsData.pending} π</div>
              <div className="text-sm text-gray-600">في الانتظار</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <CheckCircle className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-700">{earningsData.withdrawn} π</div>
              <div className="text-sm text-gray-600">تم السحب</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earnings Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>📊 تطور الأرباح</span>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="text-sm border rounded px-2 py-1"
            >
              <option value="week">هذا الأسبوع</option>
              <option value="month">هذا الشهر</option>
              <option value="year">هذا العام</option>
            </select>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-end justify-around p-4">
            {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-blue-600 to-green-600 rounded-t"
                style={{ height: `${height}%`, width: "12%" }}
              ></div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Withdrawal Options */}
      <Card>
        <CardHeader>
          <CardTitle>💳 خيارات السحب</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Pi Wallet</span>
              <Badge className="bg-green-100 text-green-700">متاح</Badge>
            </div>
            <p className="text-sm text-gray-600">الحد الأدنى: 100 π</p>
          </div>
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Vodafone Cash</span>
              <Badge className="bg-blue-100 text-blue-700">متاح</Badge>
            </div>
            <p className="text-sm text-gray-600">رسوم: 2% • الحد الأدنى: 50 π</p>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            طلب سحب
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// Enhanced Content Upload Component
export function ContentUploadForm() {
  const [contentType, setContentType] = useState("video")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [isPaid, setIsPaid] = useState(false)
  const [price, setPrice] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />📤 رفع محتوى جديد
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Content Type Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">نوع المحتوى</label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { type: "video", icon: Video, label: "فيديو" },
              { type: "audio", icon: Volume2, label: "صوتي" },
              { type: "image", icon: ImageIcon, label: "صورة" },
              { type: "file", icon: FileText, label: "ملف" },
            ].map((item) => (
              <Button
                key={item.type}
                variant={contentType === item.type ? "default" : "outline"}
                onClick={() => setContentType(item.type)}
                className="h-16 flex-col"
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Basic Info */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">العنوان</label>
            <Input placeholder="عنوان المحتوى..." value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">الوصف</label>
            <Textarea
              placeholder="وصف مفصل للمحتوى..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">القسم</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">اختر القسم...</option>
              <option value="digital">المهارات الرقمية</option>
              <option value="crafts">الحرف والمهن</option>
              <option value="science">العلوم والمعرفة</option>
              <option value="culture">الثقافة واللغات</option>
              <option value="religious">المحتوى الديني</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">الكلمات المفتاحية</label>
            <Input placeholder="برمجة، python، تعليم..." value={tags} onChange={(e) => setTags(e.target.value)} />
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">محتوى مدفوع</label>
            <Switch checked={isPaid} onCheckedChange={setIsPaid} />
          </div>

          {isPaid && (
            <div>
              <label className="block text-sm font-medium mb-1">السعر (π)</label>
              <Input type="number" placeholder="50" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          )}
        </div>

        {/* File Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
          <p className="text-sm text-gray-600 mb-2">اسحب الملف هنا أو اضغط للاختيار</p>
          <p className="text-xs text-gray-500">الحد الأقصى: 500 MB</p>
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>جاري الرفع...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="w-full" />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={handleUpload} disabled={isUploading}>
            {isUploading ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                جاري الرفع...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                نشر المحتوى
              </>
            )}
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Edit className="w-4 h-4 mr-2" />
            حفظ كمسودة
          </Button>
        </div>

        {/* Revenue Info */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">💰 معلومات الأرباح</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>نصيبك من الأرباح:</span>
              <span className="font-semibold text-green-600">70%</span>
            </div>
            <div className="flex justify-between">
              <span>نصيب المنصة:</span>
              <span className="font-semibold text-blue-600">30%</span>
            </div>
            {isPaid && price && (
              <div className="flex justify-between pt-2 border-t border-green-200">
                <span>أرباحك المتوقعة لكل مشاهدة:</span>
                <span className="font-bold text-green-700">{Math.round(Number(price) * 0.7)} π</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  Users,
  Video,
  PieChart,
  Shield,
  Eye,
  CheckCircle,
  XCircle,
  TrendingUp,
  AlertTriangle,
  Filter,
  Search,
  Edit,
  MessageSquare,
  Star,
  Coins,
  BarChart3,
  Globe,
} from "lucide-react"

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("overview")

  const pendingVideos = [
    {
      id: 1,
      title: "تفسير سورة البقرة - الجزء الأول",
      creator: "الشيخ محمد أحمد",
      category: "islamic",
      duration: "45 min",
      uploadDate: "2024-01-15",
      status: "pending",
      views: 0,
      flagged: false,
    },
    {
      id: 2,
      title: "Python للمبتدئين - المتغيرات",
      creator: "سارة علي",
      category: "programming",
      duration: "30 min",
      uploadDate: "2024-01-14",
      status: "pending",
      views: 0,
      flagged: true,
    },
  ]

  const systemStats = {
    totalUsers: 125430,
    activeCreators: 3456,
    totalVideos: 8934,
    pendingReviews: 23,
    totalRevenue: 45678,
    monthlyGrowth: 23.5,
    averageRating: 4.8,
    reportedContent: 5,
  }

  const OverviewContent = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-600">إجمالي المستخدمين</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">{systemStats.totalVideos.toLocaleString()}</div>
                <div className="text-sm text-gray-600">إجمالي الفيديوهات</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold">{systemStats.totalRevenue.toLocaleString()} π</div>
                <div className="text-sm text-gray-600">إجمالي الأرباح</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">+{systemStats.monthlyGrowth}%</div>
                <div className="text-sm text-gray-600">النمو الشهري</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="w-5 h-5" />
            تنبيهات تحتاج انتباه
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-white rounded">
              <span className="text-sm">{systemStats.pendingReviews} فيديو في انتظار المراجعة</span>
              <Button size="sm" variant="outline">
                مراجعة
              </Button>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded">
              <span className="text-sm">{systemStats.reportedContent} محتوى مُبلغ عنه</span>
              <Button size="sm" variant="outline">
                فحص
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>إجراءات سريعة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-16 flex-col">
              <Eye className="w-6 h-6 mb-1" />
              مراجعة المحتوى
            </Button>
            <Button variant="outline" className="h-16 flex-col bg-transparent">
              <Settings className="w-6 h-6 mb-1" />
              إعدادات النظام
            </Button>
            <Button variant="outline" className="h-16 flex-col bg-transparent">
              <BarChart3 className="w-6 h-6 mb-1" />
              تقارير مفصلة
            </Button>
            <Button variant="outline" className="h-16 flex-col bg-transparent">
              <MessageSquare className="w-6 h-6 mb-1" />
              رسائل المستخدمين
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ContentReviewContent = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="البحث في المحتوى المعلق..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Filter className="w-4 h-4 mr-1" />
            فلترة
          </Button>
          <Badge variant="secondary">{pendingVideos.length} في الانتظار</Badge>
        </div>
      </div>

      {/* Pending Videos */}
      <div className="space-y-4">
        {pendingVideos.map((video) => (
          <Card key={video.id} className={video.flagged ? "border-red-200 bg-red-50" : ""}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-20 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <Video className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{video.title}</h3>
                  <div className="text-xs text-gray-600 mb-2">
                    بواسطة: {video.creator} • {video.duration} • {video.uploadDate}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{video.category}</Badge>
                    {video.flagged && (
                      <Badge variant="destructive" className="text-xs">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        مُبلغ عنه
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      موافقة
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      طلب تعديل
                    </Button>
                    <Button size="sm" variant="destructive">
                      <XCircle className="w-4 h-4 mr-1" />
                      رفض
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

  const AnalyticsContent = () => (
    <div className="space-y-6">
      {/* Revenue Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="w-5 h-5" />
            تحليل الأرباح
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">32,145 π</div>
              <div className="text-sm text-gray-600">أرباح المنصة (30%)</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">75,005 π</div>
              <div className="text-sm text-gray-600">أرباح المنشئين (70%)</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>العلوم الشرعية</span>
              <span>35% من الأرباح</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>البرمجة</span>
              <span>28% من الأرباح</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>الحرف اليدوية</span>
              <span>15% من الأرباح</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: "15%" }}></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Engagement */}
      <Card>
        <CardHeader>
          <CardTitle>إحصائيات المستخدمين</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 mx-auto text-blue-600 mb-1" />
              <div className="font-bold">3,456</div>
              <div className="text-xs text-gray-600">منشئين نشطين</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <Star className="w-6 h-6 mx-auto text-green-600 mb-1" />
              <div className="font-bold">4.8</div>
              <div className="text-xs text-gray-600">متوسط التقييم</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Eye className="w-6 h-6 mx-auto text-purple-600 mb-1" />
              <div className="font-bold">2.3M</div>
              <div className="text-xs text-gray-600">مشاهدة شهرية</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Creators */}
      <Card>
        <CardHeader>
          <CardTitle>أفضل المنشئين</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">1</span>
                </div>
                <div>
                  <div className="font-medium text-sm">الشيخ أحمد محمد</div>
                  <div className="text-xs text-gray-600">العلوم الشرعية</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">1,245 π</div>
                <div className="text-xs text-gray-600">هذا الشهر</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">2</span>
                </div>
                <div>
                  <div className="font-medium text-sm">سارة أحمد</div>
                  <div className="text-xs text-gray-600">البرمجة</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">987 π</div>
                <div className="text-xs text-gray-600">هذا الشهر</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const SettingsContent = () => (
    <div className="space-y-6">
      {/* Platform Settings */}
      <Card>
        <CardHeader>
          <CardTitle>إعدادات المنصة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">مراجعة المحتوى التلقائية</div>
              <div className="text-sm text-gray-600">تفعيل الذكاء الاصطناعي لفلترة المحتوى</div>
            </div>
            <Button size="sm" variant="outline">
              تفعيل
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">دعم اللغات المتعددة</div>
              <div className="text-sm text-gray-600">إضافة ترجمة تلقائية للمحتوى</div>
            </div>
            <Button size="sm" variant="outline">
              إعداد
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">نظام المكافآت</div>
              <div className="text-sm text-gray-600">تحديد نسب الأرباح والمكافآت</div>
            </div>
            <Button size="sm" variant="outline">
              تعديل
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Settings */}
      <Card>
        <CardHeader>
          <CardTitle>إعدادات الأرباح</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">نسبة المنشئ (%)</label>
            <Input type="number" defaultValue="70" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">نسبة المنصة (%)</label>
            <Input type="number" defaultValue="30" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">الحد الأدنى للسحب (π)</label>
            <Input type="number" defaultValue="100" className="w-full" />
          </div>
          <Button className="w-full">حفظ التغييرات</Button>
        </CardContent>
      </Card>

      {/* Content Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>إرشادات المحتوى</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Edit className="w-4 h-4 mr-2" />
            تحديث إرشادات المحتوى الإسلامي
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Shield className="w-4 h-4 mr-2" />
            إعدادات فلترة المحتوى
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Globe className="w-4 h-4 mr-2" />
            إدارة المحتوى متعدد اللغات
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">لوحة تحكم المدير</h1>
          <p className="text-gray-600">إدارة شاملة لمنصة SkillSpark Hub</p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="content">مراجعة المحتوى</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <OverviewContent />
          </TabsContent>

          <TabsContent value="content" className="mt-6">
            <ContentReviewContent />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsContent />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <SettingsContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Settings,
  Users,
  Video,
  PieChart,
  CheckCircle,
  Edit,
  Coins,
  BarChart3,
  Palette,
  Bot,
  Share2,
  Wallet,
  Sparkles,
  Upload,
  Download,
  RefreshCw,
  Zap,
  Target,
  Award,
  Heart,
  Layers,
  ImageIcon,
  BookOpen,
  Code,
  Monitor,
} from "lucide-react"

export default function EnhancedAdminPanel() {
  const [activeTab, setActiveTab] = useState("overview")
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [primaryColor, setPrimaryColor] = useState("#10b981")
  const [secondaryColor, setSecondaryColor] = useState("#3b82f6")

  const systemStats = {
    totalUsers: 125430,
    activeCreators: 3456,
    totalVideos: 8934,
    pendingReviews: 23,
    totalRevenue: 45678,
    monthlyGrowth: 23.5,
    averageRating: 4.8,
    reportedContent: 5,
    aiProcessedContent: 7234,
    socialShares: 45678,
    partnerInstitutions: 12,
  }

  const colorThemes = [
    { name: "الأخضر الإسلامي", primary: "#10b981", secondary: "#059669", accent: "#34d399" },
    { name: "الأزرق التقني", primary: "#3b82f6", secondary: "#2563eb", accent: "#60a5fa" },
    { name: "البنفسجي الذكي", primary: "#8b5cf6", secondary: "#7c3aed", accent: "#a78bfa" },
    { name: "البرتقالي الإبداعي", primary: "#f59e0b", secondary: "#d97706", accent: "#fbbf24" },
  ]

  const paymentMethods = [
    { id: "pi", name: "Pi Wallet", enabled: true, transactions: 12450 },
    { id: "vodafone", name: "Vodafone Cash", enabled: true, transactions: 8900 },
    { id: "etisalat", name: "Etisalat Cash", enabled: true, transactions: 6700 },
    { id: "binance", name: "Binance", enabled: false, transactions: 0 },
    { id: "usdt", name: "USDT", enabled: true, transactions: 3400 },
  ]

  const OverviewContent = () => (
    <div className="space-y-6">
      {/* Enhanced Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-emerald-600" />
              <div>
                <div className="text-2xl font-bold text-emerald-700">{systemStats.totalUsers.toLocaleString()}</div>
                <div className="text-sm text-emerald-600">إجمالي المستخدمين</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-700">{systemStats.totalVideos.toLocaleString()}</div>
                <div className="text-sm text-blue-600">إجمالي الفيديوهات</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-yellow-700">{systemStats.totalRevenue.toLocaleString()} π</div>
                <div className="text-sm text-yellow-600">إجمالي الأرباح</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-purple-700">
                  {systemStats.aiProcessedContent.toLocaleString()}
                </div>
                <div className="text-sm text-purple-600">محتوى مُحسن بالذكاء الاصطناعي</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Performance Metrics */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-600" />
            أداء الذكاء الاصطناعي
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white rounded-lg">
              <Zap className="w-6 h-6 mx-auto text-purple-600 mb-1" />
              <div className="text-xl font-bold text-purple-700">94%</div>
              <div className="text-sm text-gray-600">دقة التصنيف</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <Target className="w-6 h-6 mx-auto text-blue-600 mb-1" />
              <div className="text-xl font-bold text-blue-700">87%</div>
              <div className="text-sm text-gray-600">دقة الاقتراحات</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <RefreshCw className="w-6 h-6 mx-auto text-green-600 mb-1" />
              <div className="text-xl font-bold text-green-700">2.3s</div>
              <div className="text-sm text-gray-600">متوسط المعالجة</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            أداء وسائل التواصل الاجتماعي
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  TT
                </div>
                <span className="font-medium">TikTok</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-600">15.2K مشاركة</div>
                <div className="text-xs text-gray-600">+23% هذا الأسبوع</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  TG
                </div>
                <span className="font-medium">Telegram</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-600">8.7K مشاركة</div>
                <div className="text-xs text-gray-600">+18% هذا الأسبوع</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partner Institutions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            المؤسسات الشريكة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="font-medium text-emerald-700">جامعة الأزهر الشريف</div>
              <div className="text-xs text-gray-600">العلوم الشرعية</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-medium text-blue-700">معهد التقنية المتقدمة</div>
              <div className="text-xs text-gray-600">البرمجة والذكاء الاصطناعي</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="font-medium text-purple-700">أكاديمية الحرف التراثية</div>
              <div className="text-xs text-gray-600">الصناعات اليدوية</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="font-medium text-green-700">مركز الزراعة المستدامة</div>
              <div className="text-xs text-gray-600">الزراعة والإنتاج</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" className="bg-transparent">
              <ImageIcon className="w-4 h-4 mr-2" />
              إضافة مؤسسة شريكة جديدة
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const BrandingContent = () => (
    <div className="space-y-6">
      {/* Logo Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            إدارة الشعار (اللوجو)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">الشعار الحالي</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  رفع شعار جديد
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  تعديل
                </Button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              يمكنك تغيير شعار التطبيق في أي وقت. الأحجام المدعومة: PNG, SVG (512x512px)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Color Theme Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            إدارة الألوان والثيمات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {colorThemes.map((theme, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                style={{ borderColor: theme.primary }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.secondary }}></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.accent }}></div>
                </div>
                <div className="font-medium text-sm">{theme.name}</div>
                <Button size="sm" className="mt-2 w-full" style={{ backgroundColor: theme.primary }}>
                  تطبيق الثيم
                </Button>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">تخصيص الألوان</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">اللون الأساسي</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-12 h-10 rounded border"
                  />
                  <Input value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="flex-1" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">اللون الثانوي</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-12 h-10 rounded border"
                  />
                  <Input
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
            <Button className="mt-4 w-full">حفظ الألوان المخصصة</Button>
          </div>
        </CardContent>
      </Card>

      {/* Section Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            إدارة الأقسام
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">العلوم الشرعية</span>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="font-medium">البرمجة والتقنية</span>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-purple-600" />
                <span className="font-medium">الذكاء الاصطناعي</span>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <ImageIcon className="w-4 h-4 mr-2" />
            إضافة قسم جديد
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const PaymentContent = () => (
    <div className="space-y-6">
      {/* Payment Methods Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            إدارة طرق الدفع
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold">
                  {method.name[0]}
                </div>
                <div>
                  <div className="font-medium">{method.name}</div>
                  <div className="text-sm text-gray-600">{method.transactions.toLocaleString()} معاملة</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={method.enabled ? "default" : "secondary"}>{method.enabled ? "مفعل" : "معطل"}</Badge>
                <Switch checked={method.enabled} />
                <Button size="sm" variant="outline">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full bg-transparent">
            <ImageIcon className="w-4 h-4 mr-2" />
            إضافة طريقة دفع جديدة
          </Button>
        </CardContent>
      </Card>

      {/* Revenue Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="w-5 h-5" />
            إعدادات توزيع الأرباح
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">نسبة المنشئ (%)</label>
              <Input type="number" defaultValue="70" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">نسبة المنصة (%)</label>
              <Input type="number" defaultValue="30" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">الحد الأدنى للسحب (π)</label>
              <Input type="number" defaultValue="100" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">رسوم المعاملة (%)</label>
              <Input type="number" defaultValue="2.5" />
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">معاينة التوزيع</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>إجمالي الإيرادات:</span>
                <span className="font-semibold">100 π</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>نصيب المنشئ:</span>
                <span className="font-semibold">70 π</span>
              </div>
              <div className="flex justify-between text-blue-600">
                <span>نصيب المنصة:</span>
                <span className="font-semibold">30 π</span>
              </div>
            </div>
          </div>

          <Button className="w-full">حفظ إعدادات الأرباح</Button>
        </CardContent>
      </Card>
    </div>
  )

  const AIContent = () => (
    <div className="space-y-6">
      {/* AI Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            إعدادات الذكاء الاصطناعي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">التصنيف التلقائي للمحتوى</div>
                <div className="text-sm text-gray-600">تصنيف الفيديوهات تلقائياً حسب المحتوى</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">الاقتراحات الذكية</div>
                <div className="text-sm text-gray-600">تقديم اقتراحات مخصصة للمستخدمين</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">مراقبة جودة المحتوى</div>
                <div className="text-sm text-gray-600">فحص جودة الفيديوهات تلقائياً</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">الترجمة التلقائية</div>
                <div className="text-sm text-gray-600">ترجمة المحتوى بين العربية والإنجليزية</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">تحسين الصور والفيديو</div>
                <div className="text-sm text-gray-600">تحسين جودة المحتوى المرئي تلقائياً</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Performance Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            مراقبة أداء الذكاء الاصطناعي
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="font-medium">دقة التصنيف</span>
              </div>
              <div className="text-2xl font-bold text-purple-700">94.2%</div>
              <div className="text-sm text-gray-600">+2.1% من الأسبوع الماضي</div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-medium">سرعة المعالجة</span>
              </div>
              <div className="text-2xl font-bold text-blue-700">2.3s</div>
              <div className="text-sm text-gray-600">متوسط وقت الاستجابة</div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">المحتوى المعالج</span>
              </div>
              <div className="text-2xl font-bold text-green-700">7,234</div>
              <div className="text-sm text-gray-600">فيديو هذا الشهر</div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-orange-600" />
                <span className="font-medium">رضا المستخدمين</span>
              </div>
              <div className="text-2xl font-bold text-orange-700">4.8/5</div>
              <div className="text-sm text-gray-600">تقييم الاقتراحات</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Training Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            بيانات تدريب الذكاء الاصطناعي
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>العلوم الشرعية</span>
                <span>2,456 فيديو</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>البرمجة والتقنية</span>
                <span>1,987 فيديو</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>الذكاء الاصطناعي</span>
                <span>1,234 فيديو</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "18%" }}></div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4 bg-transparent">
            <RefreshCw className="w-4 h-4 mr-2" />
            إعادة تدريب النموذج
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50" dir="rtl">
      <div className="max-w-6xl mx-auto p-4">
        {/* Enhanced Header */}
        <div className="mb-6 bg-white rounded-xl p-6 shadow-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  لوحة التحكم الشاملة
                </h1>
                <p className="text-gray-600">إدارة متقدمة لمنصة SkillSpark Hub</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                تصدير البيانات
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600">
                <RefreshCw className="w-4 h-4 mr-2" />
                تحديث
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              نظرة عامة
            </TabsTrigger>
            <TabsTrigger value="branding" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              العلامة التجارية
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              المدفوعات
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              الذكاء الاصطناعي
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              الإعدادات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <OverviewContent />
          </TabsContent>

          <TabsContent value="branding" className="mt-6">
            <BrandingContent />
          </TabsContent>

          <TabsContent value="payment" className="mt-6">
            <PaymentContent />
          </TabsContent>

          <TabsContent value="ai" className="mt-6">
            <AIContent />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="text-center py-12">
              <Settings className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">إعدادات النظام</h3>
              <p className="text-gray-500">قريباً - إعدادات متقدمة للنظام</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

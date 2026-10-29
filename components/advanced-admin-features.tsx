"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  UserCheck,
  UserX,
  MessageSquare,
  Flag,
  TrendingUp,
  BarChart3,
  Palette,
  Upload,
  Edit,
  Search,
  Clock,
  Star,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"

// Advanced User Management
export function UserManagementPanel() {
  const [users] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      role: "creator",
      status: "active",
      joinDate: "2024-01-15",
      content: 23,
      earnings: 1250,
      violations: 0,
      lastActive: "منذ ساعة",
    },
    {
      id: 2,
      name: "فاطمة علي",
      email: "fatima@example.com",
      role: "user",
      status: "active",
      joinDate: "2024-02-20",
      content: 0,
      earnings: 0,
      violations: 0,
      lastActive: "منذ يوم",
    },
    {
      id: 3,
      name: "محمد حسن",
      email: "mohamed@example.com",
      role: "creator",
      status: "suspended",
      joinDate: "2024-01-10",
      content: 45,
      earnings: 2100,
      violations: 2,
      lastActive: "منذ أسبوع",
    },
  ])

  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "suspended":
        return "bg-red-100 text-red-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "creator":
        return "bg-blue-100 text-blue-700"
      case "admin":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* User Management Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />👤 إدارة المستخدمين المتقدمة
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="البحث عن مستخدم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border rounded"
            >
              <option value="all">جميع الحالات</option>
              <option value="active">نشط</option>
              <option value="suspended">محظور</option>
              <option value="pending">في الانتظار</option>
            </select>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="flex gap-2 mb-4 p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium">{selectedUsers.length} مستخدم محدد:</span>
              <Button size="sm" variant="outline" className="bg-transparent">
                <MessageSquare className="w-3 h-3 mr-1" />
                إرسال رسالة
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-red-200 text-red-600">
                <UserX className="w-3 h-3 mr-1" />
                حظر
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent">
                <UserCheck className="w-3 h-3 mr-1" />
                إلغاء الحظر
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Users List */}
      <div className="space-y-3">
        {users.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleUserSelection(user.id)}
                  className="mt-1"
                />
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">{user.name[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{user.name}</h4>
                    <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                    <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    {user.violations > 0 && (
                      <Badge variant="destructive">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {user.violations} مخالفة
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">تاريخ الانضمام:</span>
                      <div className="font-medium">{user.joinDate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">المحتوى:</span>
                      <div className="font-medium">{user.content} عنصر</div>
                    </div>
                    <div>
                      <span className="text-gray-500">الأرباح:</span>
                      <div className="font-medium">{user.earnings} π</div>
                    </div>
                    <div>
                      <span className="text-gray-500">آخر نشاط:</span>
                      <div className="font-medium">{user.lastActive}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Eye className="w-3 h-3 mr-1" />
                    عرض
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Edit className="w-3 h-3 mr-1" />
                    تعديل
                  </Button>
                  {user.status === "active" ? (
                    <Button size="sm" variant="outline" className="bg-transparent border-red-200 text-red-600">
                      <UserX className="w-3 h-3 mr-1" />
                      حظر
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="bg-transparent border-green-200 text-green-600">
                      <UserCheck className="w-3 h-3 mr-1" />
                      إلغاء الحظر
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* User Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>📊 إحصائيات المستخدمين</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <Users className="w-6 h-6 mx-auto text-green-600 mb-1" />
              <div className="font-bold text-green-700">1,234</div>
              <div className="text-xs text-gray-600">إجمالي المستخدمين</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <UserCheck className="w-6 h-6 mx-auto text-blue-600 mb-1" />
              <div className="font-bold text-blue-700">1,156</div>
              <div className="text-xs text-gray-600">نشط</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Star className="w-6 h-6 mx-auto text-purple-600 mb-1" />
              <div className="font-bold text-purple-700">234</div>
              <div className="text-xs text-gray-600">منشئ محتوى</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <UserX className="w-6 h-6 mx-auto text-red-600 mb-1" />
              <div className="font-bold text-red-700">12</div>
              <div className="text-xs text-gray-600">محظور</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Advanced Content Moderation
export function ContentModerationPanel() {
  const [pendingContent] = useState([
    {
      id: 1,
      title: "دورة تعلم Python المتقدمة",
      creator: "أحمد محمد",
      type: "video",
      category: "البرمجة",
      uploadDate: "2024-01-20",
      duration: "2:30:00",
      size: "1.2 GB",
      status: "pending",
      reports: 0,
      aiScore: 95,
      religiousCheck: true,
    },
    {
      id: 2,
      title: "إصلاح الهواتف المكسورة",
      creator: "محمد علي",
      type: "video",
      category: "الصيانة",
      uploadDate: "2024-01-19",
      duration: "45:00",
      size: "800 MB",
      status: "flagged",
      reports: 2,
      aiScore: 78,
      religiousCheck: true,
    },
  ])

  const [selectedContent, setSelectedContent] = useState<number[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700"
      case "rejected":
        return "bg-red-100 text-red-700"
      case "flagged":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-blue-100 text-blue-700"
    }
  }

  const getAIScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Moderation Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            🛡️ مراجعة المحتوى المتقدمة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 mx-auto text-blue-600 mb-1" />
              <div className="font-bold text-blue-700">23</div>
              <div className="text-xs text-gray-600">في الانتظار</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <Flag className="w-6 h-6 mx-auto text-yellow-600 mb-1" />
              <div className="font-bold text-yellow-700">5</div>
              <div className="text-xs text-gray-600">مُبلغ عنه</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto text-green-600 mb-1" />
              <div className="font-bold text-green-700">156</div>
              <div className="text-xs text-gray-600">موافق عليه اليوم</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <XCircle className="w-6 h-6 mx-auto text-red-600 mb-1" />
              <div className="font-bold text-red-700">8</div>
              <div className="text-xs text-gray-600">مرفوض اليوم</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content List */}
      <div className="space-y-4">
        {pendingContent.map((content) => (
          <Card key={content.id} className="hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedContent.includes(content.id)}
                  onChange={() =>
                    setSelectedContent((prev) =>
                      prev.includes(content.id) ? prev.filter((id) => id !== content.id) : [...prev, content.id],
                    )
                  }
                  className="mt-1"
                />
                <div className="w-20 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">معاينة</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{content.title}</h4>
                    <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                    {content.reports > 0 && (
                      <Badge variant="destructive">
                        <Flag className="w-3 h-3 mr-1" />
                        {content.reports} بلاغ
                      </Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">المنشئ:</span>
                      <div className="font-medium">{content.creator}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">القسم:</span>
                      <div className="font-medium">{content.category}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">المدة:</span>
                      <div className="font-medium">{content.duration}</div>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">🤖 تحليل الذكاء الاصطناعي:</h5>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">نقاط الجودة:</span>
                        <div className={`font-bold ${getAIScoreColor(content.aiScore)}`}>{content.aiScore}/100</div>
                      </div>
                      <div>
                        <span className="text-gray-500">المراجعة الدينية:</span>
                        <div className="flex items-center gap-1">
                          {content.religiousCheck ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                          <span className={content.religiousCheck ? "text-green-600" : "text-red-600"}>
                            {content.religiousCheck ? "مطابق" : "يحتاج مراجعة"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">التصنيف التلقائي:</span>
                        <div className="font-medium text-blue-600">{content.category}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Eye className="w-3 h-3 mr-1" />
                    معاينة
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    موافقة
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Edit className="w-3 h-3 mr-1" />
                    طلب تعديل
                  </Button>
                  <Button size="sm" variant="destructive">
                    <XCircle className="w-3 h-3 mr-1" />
                    رفض
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bulk Actions */}
      {selectedContent.length > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">{selectedContent.length} عنصر محدد:</span>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="w-3 h-3 mr-1" />
                موافقة على الكل
              </Button>
              <Button size="sm" variant="destructive">
                <XCircle className="w-3 h-3 mr-1" />
                رفض الكل
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent">
                <MessageSquare className="w-3 h-3 mr-1" />
                إرسال ملاحظة
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Advanced Analytics Dashboard
export function AdvancedAnalytics() {
  const [timeframe, setTimeframe] = useState("month")
  const [analyticsData] = useState({
    totalUsers: 125430,
    activeUsers: 89234,
    newUsers: 5678,
    totalContent: 8934,
    totalViews: 2340000,
    totalEarnings: 456789,
    topCategories: [
      { name: "البرمجة", views: 450000, earnings: 89000 },
      { name: "الصيانة", views: 380000, earnings: 76000 },
      { name: "العلوم الشرعية", views: 320000, earnings: 64000 },
    ],
  })

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />📊 التحليلات المتقدمة
            </div>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="text-sm border rounded px-3 py-1"
            >
              <option value="week">هذا الأسبوع</option>
              <option value="month">هذا الشهر</option>
              <option value="quarter">هذا الربع</option>
              <option value="year">هذا العام</option>
            </select>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-700">{analyticsData.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">إجمالي المستخدمين</div>
              <div className="text-xs text-green-600 mt-1">+12% من الشهر الماضي</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <Eye className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-700">{analyticsData.totalViews.toLocaleString()}</div>
              <div className="text-sm text-gray-600">إجمالي المشاهدات</div>
              <div className="text-xs text-green-600 mt-1">+8% من الشهر الماضي</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <Star className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-700">{analyticsData.totalContent.toLocaleString()}</div>
              <div className="text-sm text-gray-600">إجمالي المحتوى</div>
              <div className="text-xs text-green-600 mt-1">+15% من الشهر الماضي</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
              <TrendingUp className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
              <div className="text-2xl font-bold text-yellow-700">{analyticsData.totalEarnings.toLocaleString()} π</div>
              <div className="text-sm text-gray-600">إجمالي الأرباح</div>
              <div className="text-xs text-green-600 mt-1">+23% من الشهر الماضي</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Categories */}
      <Card>
        <CardHeader>
          <CardTitle>🏆 أفضل الأقسام</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.topCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{category.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{category.views.toLocaleString()} مشاهدة</span>
                    <span>{category.earnings.toLocaleString()} π أرباح</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">
                    {((category.views / analyticsData.totalViews) * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-500">من إجمالي المشاهدات</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>📱 تحليل الأجهزة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Smartphone className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-xl font-bold text-blue-700">78%</div>
              <div className="text-sm text-gray-600">هاتف محمول</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Tablet className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-xl font-bold text-green-700">15%</div>
              <div className="text-sm text-gray-600">تابلت</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Monitor className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-xl font-bold text-purple-700">7%</div>
              <div className="text-sm text-gray-600">كمبيوتر</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>💰 تحليل الأرباح التفصيلي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">أرباح المنشئين (70%)</h4>
                <div className="text-2xl font-bold text-green-700">319,752 π</div>
                <div className="text-sm text-gray-600">من إجمالي الأرباح</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">أرباح المنصة (30%)</h4>
                <div className="text-2xl font-bold text-blue-700">137,037 π</div>
                <div className="text-sm text-gray-600">من إجمالي الأرباح</div>
              </div>
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="h-40 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-end justify-around p-4">
              <div className="text-center">
                <div
                  className="w-8 bg-gradient-to-t from-blue-600 to-green-600 rounded-t mb-2"
                  style={{ height: "60px" }}
                ></div>
                <span className="text-xs">يناير</span>
              </div>
              <div className="text-center">
                <div
                  className="w-8 bg-gradient-to-t from-blue-600 to-green-600 rounded-t mb-2"
                  style={{ height: "80px" }}
                ></div>
                <span className="text-xs">فبراير</span>
              </div>
              <div className="text-center">
                <div
                  className="w-8 bg-gradient-to-t from-blue-600 to-green-600 rounded-t mb-2"
                  style={{ height: "100px" }}
                ></div>
                <span className="text-xs">مارس</span>
              </div>
              <div className="text-center">
                <div
                  className="w-8 bg-gradient-to-t from-blue-600 to-green-600 rounded-t mb-2"
                  style={{ height: "120px" }}
                ></div>
                <span className="text-xs">أبريل</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Advanced Theme Customization
export function ThemeCustomization() {
  const [selectedTheme, setSelectedTheme] = useState("default")
  const [customColors, setCustomColors] = useState({
    primary: "#10b981",
    secondary: "#3b82f6",
    accent: "#8b5cf6",
    background: "#ffffff",
  })

  const predefinedThemes = [
    {
      id: "default",
      name: "الافتراضي",
      colors: { primary: "#10b981", secondary: "#3b82f6", accent: "#8b5cf6", background: "#ffffff" },
    },
    {
      id: "islamic",
      name: "إسلامي",
      colors: { primary: "#059669", secondary: "#047857", accent: "#065f46", background: "#f0fdf4" },
    },
    {
      id: "modern",
      name: "عصري",
      colors: { primary: "#6366f1", secondary: "#8b5cf6", accent: "#ec4899", background: "#fafafa" },
    },
    {
      id: "warm",
      name: "دافئ",
      colors: { primary: "#f59e0b", secondary: "#ef4444", accent: "#dc2626", background: "#fffbeb" },
    },
  ]

  return (
    <div className="space-y-6">
      {/* Theme Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />🎨 تخصيص المظهر
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {predefinedThemes.map((theme) => (
              <div
                key={theme.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedTheme === theme.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTheme(theme.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                  </div>
                  <span className="font-medium">{theme.name}</span>
                </div>
                <div className="h-16 rounded border" style={{ backgroundColor: theme.colors.background }}>
                  <div className="h-4 rounded-t" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Custom Colors */}
      <Card>
        <CardHeader>
          <CardTitle>🌈 ألوان مخصصة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(customColors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <label className="w-24 text-sm font-medium capitalize">{key}:</label>
              <input
                type="color"
                value={value}
                onChange={(e) => setCustomColors({ ...customColors, [key]: e.target.value })}
                className="w-12 h-8 rounded border"
              />
              <Input
                value={value}
                onChange={(e) => setCustomColors({ ...customColors, [key]: e.target.value })}
                className="flex-1"
              />
            </div>
          ))}
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <CheckCircle className="w-4 h-4 mr-2" />
            تطبيق الألوان المخصصة
          </Button>
        </CardContent>
      </Card>

      {/* Font Settings */}
      <Card>
        <CardHeader>
          <CardTitle>📝 إعدادات الخطوط</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">خط العناوين</label>
            <select className="w-full p-2 border rounded">
              <option value="cairo">Cairo</option>
              <option value="amiri">Amiri</option>
              <option value="tajawal">Tajawal</option>
              <option value="noto-sans-arabic">Noto Sans Arabic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">خط النصوص</label>
            <select className="w-full p-2 border rounded">
              <option value="cairo">Cairo</option>
              <option value="amiri">Amiri</option>
              <option value="tajawal">Tajawal</option>
              <option value="noto-sans-arabic">Noto Sans Arabic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">حجم الخط الأساسي</label>
            <select className="w-full p-2 border rounded">
              <option value="small">صغير</option>
              <option value="medium">متوسط</option>
              <option value="large">كبير</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Logo Upload */}
      <Card>
        <CardHeader>
          <CardTitle>🖼️ شعار التطبيق</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2">الشعار الحالي</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-transparent">
                  <Upload className="w-3 h-3 mr-1" />
                  رفع شعار جديد
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent">
                  <Edit className="w-3 h-3 mr-1" />
                  تعديل
                </Button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              الأحجام المدعومة: PNG, SVG, JPG (512x512px أو أعلى)
              <br />
              الحد الأقصى للحجم: 2 MB
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle, TrendingUp, DollarSign, Briefcase } from "lucide-react"

interface EarningPlatform {
  اسم: string
  حالة: string
}

interface EarningPlatformsProps {
  platforms: EarningPlatform[]
  branchName: string
}

export function EarningPlatforms({ platforms, branchName }: EarningPlatformsProps) {
  if (!platforms || platforms.length === 0) return null

  const platformDetails: Record<string, { url: string; description: string; icon: string }> = {
    Upwork: {
      url: "https://upwork.com",
      description: "منصة عالمية للعمل الحر والمشاريع",
      icon: "💼",
    },
    Fiverr: {
      url: "https://fiverr.com",
      description: "سوق للخدمات المصغرة والمشاريع",
      icon: "🎯",
    },
    Freelancer: {
      url: "https://freelancer.com",
      description: "منصة عالمية للمستقلين",
      icon: "🌍",
    },
    Guru: {
      url: "https://guru.com",
      description: "منصة للمحترفين والخبراء",
      icon: "⭐",
    },
  }

  return (
    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />💰 مواقع الربح من {branchName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {platforms.map((platform, index) => {
            const details = platformDetails[platform.اسم] || {
              url: "#",
              description: "منصة للعمل الحر",
              icon: "💼",
            }

            return (
              <Card key={index} className="bg-white border-green-200 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{details.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg">{platform.اسم}</h4>
                        <Badge className="bg-green-100 text-green-700 border-green-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {platform.حالة}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{details.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span>أرباح عالية</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          <span>مشاريع متنوعة</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>موثوق 100%</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <TrendingUp className="w-4 h-4 text-purple-600" />
                          <span>نمو مستمر</span>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                        onClick={() => window.open(details.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        زيارة {platform.اسم}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Earning Tips */}
        <Card className="mt-4 bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />💡 نصائح للربح من {branchName}
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>أنشئ حساب احترافي مع صور عالية الجودة</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>ابدأ بأسعار تنافسية لبناء سمعتك</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>قدم خدمة ممتازة لتحصل على تقييمات عالية</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>تواصل بشكل احترافي واحفظ مواعيد التسليم</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

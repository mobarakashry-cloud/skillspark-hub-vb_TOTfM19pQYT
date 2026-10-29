"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, Award, Trophy, Users, Zap } from "lucide-react"

export function PiIntegration() {
  const [userBalance, setUserBalance] = useState(2347)
  const [userRank, setUserRank] = useState(47)
  const [earnedToday, setEarnedToday] = useState(25)

  const leaderboard = [
    { name: "أحمد محمد", points: 8950, rank: 1 },
    { name: "فاطمة علي", points: 7823, rank: 2 },
    { name: "محمد حسن", points: 6541, rank: 3 },
    { name: "سارة أحمد", points: 5432, rank: 4 },
    { name: "أنت", points: userBalance, rank: userRank },
  ]

  const earningOpportunities = [
    { action: "إكمال درس", reward: "5 π", icon: Award, color: "blue" },
    { action: "نشر محتوى", reward: "50 π", icon: Zap, color: "yellow" },
    { action: "تحدي أسبوعي", reward: "100 π", icon: Trophy, color: "purple" },
  ]

  return (
    <div className="space-y-6">
      {/* Pi Balance Card */}
      <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">رصيدك من Pi</p>
              <div className="flex items-center gap-3">
                <Coins className="w-10 h-10" />
                <span className="text-4xl font-bold">{userBalance.toLocaleString()}</span>
                <span className="text-2xl">π</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">اليوم</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-2xl font-bold">+{earnedToday}</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold">سحب Pi</Button>
        </CardContent>
      </Card>

      {/* Earning Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-yellow-600" />
            فرص لكسب المزيد من Pi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {earningOpportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-4 bg-${opportunity.color}-50 border-2 border-${opportunity.color}-200 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${opportunity.color}-600 rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{opportunity.action}</span>
                </div>
                <Badge className={`bg-${opportunity.color}-600 text-white px-3 py-1 text-base`}>
                  {opportunity.reward}
                </Badge>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            لوحة المتصدرين
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {leaderboard.map((user, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${
                user.name === "أنت" ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    user.rank === 1
                      ? "bg-yellow-500 text-white"
                      : user.rank === 2
                        ? "bg-gray-400 text-white"
                        : user.rank === 3
                          ? "bg-orange-500 text-white"
                          : user.name === "أنت"
                            ? "bg-white text-emerald-600"
                            : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {user.rank}
                </div>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className={`w-5 h-5 ${user.name === "أنت" ? "text-yellow-200" : "text-yellow-600"}`} />
                <span className="font-bold">{user.points.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Premium Subscription */}
      <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">اشترك في Premium</h3>
              <p className="text-sm opacity-90">احصل على مزايا حصرية</p>
            </div>
          </div>
          <ul className="space-y-2 mb-4 text-sm">
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>محتوى حصري بدون إعلانات</span>
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>شارة Premium على حسابك</span>
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>مضاعفة أرباح Pi</span>
            </li>
          </ul>
          <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold">
            اشترك الآن - 99 π / شهريًا
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

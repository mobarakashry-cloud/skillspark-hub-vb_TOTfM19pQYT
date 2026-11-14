// ProfileSection tab: user profile + Pi integration + creator dashboard.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiIntegration } from "@/components/pi-integration"
import { CreatorDashboard } from "@/components/creator-dashboard"
import { Briefcase, Settings, Shield, FileText } from "lucide-react"

interface Props {
  onNavigate: (tab: string) => void
}

export function ProfileSection({ onNavigate }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">ملفي الشخصي</h2>

      {/* Pi Integration */}
      <PiIntegration />

      {/* Creator Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            لوحة التحكم للمنشئين
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CreatorDashboard />
        </CardContent>
      </Card>

      {/* Settings Legal */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-gray-600" />
            الإعدادات القانونية
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start h-14 text-lg"
            onClick={() => onNavigate("privacy")}
          >
            <Shield className="w-5 h-5 mr-3 text-emerald-600" />
            سياسة الخصوصية
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start h-14 text-lg"
            onClick={() => onNavigate("terms")}
          >
            <FileText className="w-5 h-5 mr-3 text-blue-600" />
            الشروط والأحكام
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

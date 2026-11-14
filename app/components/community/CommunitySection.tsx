// CommunitySection tab: community + challenges hub.
import { Card } from "@/components/ui/card"
import { CommunityFeatures } from "@/components/community-features"

export function CommunitySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">المجتمع والتحديات</h2>
      <CommunityFeatures />
    </div>
  )
}

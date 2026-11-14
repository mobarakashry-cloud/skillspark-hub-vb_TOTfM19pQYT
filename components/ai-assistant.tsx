"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Sparkles, MessageCircle, Lightbulb, BookOpen, Video } from "lucide-react"

interface AIAssistantProps {
  context?: string
  sectionName?: string
}

export function AIAssistant({ context, sectionName }: AIAssistantProps) {
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    {
      role: "ai",
      content: `مرحباً! أنا مساعدك الذكي في ${sectionName || "SkillSpark Hub"}. كيف يمكنني مساعدتك اليوم؟`,
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    { icon: BookOpen, text: "ما هي أفضل طريقة للبدء؟", color: "blue" },
    { icon: Video, text: "أريد دروس مجانية", color: "green" },
    { icon: Lightbulb, text: "كيف أربح من هذا المجال؟", color: "yellow" },
    { icon: MessageCircle, text: "أحتاج نصيحة شخصية", color: "purple" },
  ]

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `شكراً على سؤالك! بناءً على خبرتي، أنصحك بالبدء بالدروس الأساسية أولاً. يمكنني أن أقترح عليك محتوى مناسب لمستواك. هل تريد أن أعرض لك الدروس المقترحة؟`,
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setMessages((prev) => [...prev, { role: "user", content: question }])
    setIsTyping(true)

    setTimeout(() => {
      let response = ""
      if (question.includes("البدء")) {
        response = "أفضل طريقة للبدء هي مشاهدة الدروس التمهيدية أولاً، ثم التطبيق العملي. سأرشدك خطوة بخطوة!"
      } else if (question.includes("مجانية")) {
        response = "لدينا الكثير من المحتوى المجاني الممتاز! دعني أعرض لك أفضل الدروس المجانية المتاحة."
      } else if (question.includes("أربح")) {
        response = "يمكنك الربح من خلال تطبيق ما تتعلمه على منصات العمل الحر مثل Upwork و Fiverr. سأوضح لك الخطوات!"
      } else {
        response = "بالتأكيد! أخبرني عن مستواك الحالي وأهدافك، وسأقدم لك خطة تعليمية مخصصة."
      }
      setMessages((prev) => [...prev, { role: "ai", content: response }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-2 border-purple-200 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xl font-bold">مساعد الذكاء الاصطناعي</div>
            <div className="text-sm font-normal opacity-90">متاح 24/7 للإجابة على أسئلتك</div>
          </div>
          <Sparkles className="w-6 h-6 ml-auto animate-pulse" />
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5">
        {/* Messages */}
        <div className="space-y-4 mb-5 max-h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
                    : "bg-white border-2 border-purple-200 text-gray-800"
                }`}
              >
                {msg.role === "ai" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-600">AI Assistant</span>
                  </div>
                )}
                <p className="text-base leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border-2 border-purple-200 p-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="mb-5">
            <h4 className="font-bold text-sm text-gray-700 mb-3">أسئلة سريعة:</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickQuestions.map((q, index) => {
                const Icon = q.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={`h-auto py-3 px-4 text-right justify-start bg-${q.color}-50 border-${q.color}-200 hover:bg-${q.color}-100`}
                    onClick={() => handleQuickQuestion(q.text)}
                  >
                    <Icon className={`w-5 h-5 mr-2 text-${q.color}-600`} />
                    <span className="text-sm">{q.text}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="اكتب سؤالك هنا..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 h-12 text-base border-2 border-purple-200 focus:border-purple-400"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-6"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>

        {/* AI Features */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <Badge className="bg-purple-100 text-purple-700 py-2 justify-center">
            <Sparkles className="w-4 h-4 mr-1" />
            ذكي
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 py-2 justify-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            سريع
          </Badge>
          <Badge className="bg-green-100 text-green-700 py-2 justify-center">
            <Lightbulb className="w-4 h-4 mr-1" />
            مفيد
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

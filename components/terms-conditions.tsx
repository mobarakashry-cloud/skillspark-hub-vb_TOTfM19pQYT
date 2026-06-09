"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Clock } from 'lucide-react'

export function TermsConditions() {
  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="space-y-6 p-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <FileText className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-blue-700">شروط وأحكام الاستخدام</div>
                <div className="text-sm text-gray-600 font-normal flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4" />
                  آخر تحديث: 15 نوفمبر 2025
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              مرحباً بك في <span className="font-bold text-blue-600">SkillSpark Hub</span>. باستخدامك لهذا
              التطبيق، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.
            </p>

            {/* قبول الشروط */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-700">
                  <CheckCircle className="w-6 h-6" />
                  1️⃣ قبول الشروط
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-3">
                <p className="leading-relaxed">
                  باستخدامك لتطبيق SkillSpark Hub، فإنك توافق على الالتزام بهذه الشروط والأحكام، بالإضافة إلى
                  سياسة الخصوصية الخاصة بنا.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold text-blue-700 mb-2">⚠️ ملاحظة مهمة:</p>
                  <p>
                    إذا كنت لا توافق على أي من هذه الشروط، يرجى التوقف عن استخدام التطبيق فوراً. استمرارك في
                    الاستخدام يعني موافقتك الكاملة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* الحسابات */}
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-emerald-700">
                  <CheckCircle className="w-6 h-6" />
                  2️⃣ الحسابات والتسجيل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">يجب أن تكون فوق 13 عاماً لإنشاء حساب.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">يجب تقديم معلومات دقيقة وصحيحة عند التسجيل.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">يمنع مشاركة الحساب مع أشخاص آخرين.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    نحتفظ بالحق في إيقاف أو حذف الحسابات التي تنتهك الشروط.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* المحتوى المسموح */}
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-green-700">
                  <CheckCircle className="w-6 h-6" />
                  3️⃣ المحتوى المسموح والممنوع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-green-600 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    المحتوى المسموح:
                  </h4>
                  <div className="space-y-2 bg-green-50 p-4 rounded-lg">
                    <p className="flex items-center gap-2">
                      ✅ محتوى تعليمي هادف (برمجة، تصميم، حرف، علوم)
                    </p>
                    <p className="flex items-center gap-2">✅ محتوى إسلامي من القرآن والسنة الصحيحة</p>
                    <p className="flex items-center gap-2">✅ نقاشات بناءة ومهذبة</p>
                    <p className="flex items-center gap-2">✅ أسئلة واستفسارات تعليمية</p>
                    <p className="flex items-center gap-2">✅ مشاركة الخبرات والمهارات</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-red-600 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    المحتوى الممنوع:
                  </h4>
                  <div className="space-y-2 bg-red-50 p-4 rounded-lg">
                    <p className="flex items-center gap-2">❌ أي محتوى مخالف للشريعة الإسلامية</p>
                    <p className="flex items-center gap-2">❌ المحتوى الجنسي أو الإباحي</p>
                    <p className="flex items-center gap-2">❌ خطاب الكراهية أو العنصرية</p>
                    <p className="flex items-center gap-2">❌ التحريض على العنف</p>
                    <p className="flex items-center gap-2">❌ الاحتيال أو النصب</p>
                    <p className="flex items-center gap-2">❌ انتهاك حقوق الملكية الفكرية</p>
                    <p className="flex items-center gap-2">❌ المعلومات المضللة أو الكاذبة</p>
                    <p className="flex items-center gap-2">❌ البريد العشوائي (Spam)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* حقوق الملكية */}
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-purple-700">
                  <Scale className="w-6 h-6" />
                  4️⃣ حقوق الملكية الفكرية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <div className="bg-purple-50 p-4 rounded-lg space-y-3">
                  <p className="leading-relaxed">
                    <span className="font-bold">المحتوى الذي تنشره:</span> أنت تحتفظ بملكية المحتوى الخاص بك، لكنك
                    تمنح SkillSpark Hub ترخيصاً غير حصري لاستخدامه وعرضه على المنصة.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-bold">محتوى التطبيق:</span> جميع عناصر التطبيق (التصميم، الشعارات، الرموز)
                    محمية بحقوق الملكية الفكرية ولا يجوز نسخها.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-bold">احترام الحقوق:</span> يجب عدم نشر محتوى محمي بحقوق الطبع والنشر دون
                    إذن.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* المدفوعات والعوائد */}
            <Card className="border-l-4 border-l-yellow-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-yellow-700">
                  <CheckCircle className="w-6 h-6" />
                  5️⃣ المدفوعات والعوائد (Pi Network)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2" />
                  <p className="leading-relaxed">جميع المعاملات تتم عبر شبكة Pi Network الرسمية.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    يحصل منشئو المحتوى على نسبة من العائدات حسب عدد المشاهدات والتفاعل.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2" />
                  <p className="leading-relaxed">الحد الأدنى للسحب: 100 Pi.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2" />
                  <p className="leading-relaxed">لا يمكن استرداد المدفوعات بعد إتمام المعاملة.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2" />
                  <p className="leading-relaxed">نحتفظ بنسبة 20% كعمولة على المحتوى المدفوع.</p>
                </div>
              </CardContent>
            </Card>

            {/* المسؤولية */}
            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-orange-700">
                  <AlertTriangle className="w-6 h-6" />
                  6️⃣ إخلاء المسؤولية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <div className="bg-orange-50 p-4 rounded-lg space-y-2">
                  <p className="leading-relaxed">
                    ❗ التطبيق يوفر منصة للمحتوى التعليمي، ونحن لسنا مسؤولين عن دقة أو جودة المحتوى المقدم من
                    المستخدمين.
                  </p>
                  <p className="leading-relaxed">
                    ❗ نحن غير مسؤولين عن أي خسائر مالية أو أضرار نتيجة استخدام التطبيق.
                  </p>
                  <p className="leading-relaxed">
                    ❗ النتائج التعليمية تعتمد على جهد المستخدم الشخصي ولا نضمن نتائج محددة.
                  </p>
                  <p className="leading-relaxed">
                    ❗ نحن غير مسؤولين عن محتوى الروابط الخارجية أو المواقع المرتبطة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* التعديلات والإنهاء */}
            <Card className="border-l-4 border-l-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-700">
                  <FileText className="w-6 h-6" />
                  7️⃣ التعديلات والإنهاء
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  <span className="font-bold">تعديل الشروط:</span> نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم
                  إشعار المستخدمين بالتغييرات المهمة.
                </p>
                <p className="leading-relaxed">
                  <span className="font-bold">إنهاء الحساب:</span> يمكنك حذف حسابك في أي وقت من إعدادات الملف الشخصي.
                </p>
                <p className="leading-relaxed">
                  <span className="font-bold">التعليق أو الحذف:</span> نحتفظ بالحق في تعليق أو حذف الحسابات التي تنتهك
                  الشروط دون إشعار مسبق.
                </p>
              </CardContent>
            </Card>

            {/* القانون الحاكم */}
            <Card className="border-l-4 border-l-indigo-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-indigo-700">
                  <Scale className="w-6 h-6" />
                  8️⃣ القانون الحاكم
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  تخضع هذه الشروط للقوانين المحلية في بلد إقامتك، بالإضافة إلى الالتزام الكامل بأحكام الشريعة
                  الإسلامية.
                </p>
              </CardContent>
            </Card>

            {/* الاتصال */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-700">
                  <FileText className="w-6 h-6" />
                  9️⃣ الاتصال بنا
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  لأي استفسارات حول الشروط والأحكام، يرجى التواصل معنا:
                </p>
                <div className="bg-white p-4 rounded-lg space-y-2 border border-blue-200">
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">الدعم الفني:</span>
                    <span className="text-gray-700">SkillSpark Support Team</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">📧 البريد:</span>
                    <span className="text-blue-600">support@skillspark.hub</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">⏰ ساعات العمل:</span>
                    <span className="text-gray-700">24/7 دعم متواصل</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Islamic Compliance */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-100 border-2 border-green-500 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">☪️</div>
                <h3 className="font-bold text-green-700 text-lg mb-2">نظام متوافق مع الشريعة الإسلامية</h3>
                <p className="text-gray-700 leading-relaxed">
                  جميع الشروط والأحكام في هذا التطبيق متوافقة مع الشريعة الإسلامية. نحن ملتزمون بالشفافية
                  والعدالة والأمانة في جميع المعاملات.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Calendar } from 'lucide-react'

export function PrivacyPolicy() {
  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="space-y-6 p-6">
        <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Shield className="w-8 h-8 text-emerald-600" />
              <div>
                <div className="text-emerald-700">سياسة الخصوصية</div>
                <div className="text-sm text-gray-600 font-normal flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4" />
                  تاريخ السريان: 15 نوفمبر 2025
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              نحن في <span className="font-bold text-emerald-600">SkillSpark Hub</span> نحترم خصوصيتك ونلتزم بحماية
              بياناتك الشخصية أثناء استخدامك للتطبيق. توضح هذه السياسة كيفية جمع المعلومات، استخدامها، ومشاركتها.
            </p>

            {/* البيانات التي نجمعها */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-700">
                  <Eye className="w-6 h-6" />
                  1️⃣ البيانات التي نجمعها
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-600">المعلومات الشخصية:</h4>
                  <p className="leading-relaxed">
                    الاسم، البريد الإلكتروني، رقم الهاتف (اختياري)، وصورة الملف الشخصي عند إنشاء الحساب.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-600">المعلومات التقنية:</h4>
                  <p className="leading-relaxed">
                    نوع الجهاز، نظام التشغيل، عنوان IP، وسجل النشاط داخل التطبيق لتحسين الأداء والتجربة.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-600">محفظة Pi Network:</h4>
                  <p className="leading-relaxed">
                    عنوان المحفظة وسجل المعاملات لإدارة المدفوعات والمكافآت داخل التطبيق.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-600">المحتوى الذي تنشئه:</h4>
                  <p className="leading-relaxed">
                    الفيديوهات، الدروس، التعليقات، التقييمات، والملفات التي تقوم برفعها أو مشاركتها.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-blue-600">بيانات التعلم:</h4>
                  <p className="leading-relaxed">سجل الدروس المكتملة، النتائج، الإنجازات، والتقدم في المهارات.</p>
                </div>
              </CardContent>
            </Card>

            {/* كيفية استخدام البيانات */}
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-emerald-700">
                  <UserCheck className="w-6 h-6" />
                  2️⃣ كيفية استخدام البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">إدارة حسابك وتخصيص تجربتك التعليمية.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    إرسال إشعارات حول الدروس الجديدة، التحديثات، والإنجازات الشخصية.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    تحليل النشاط لتقديم توصيات ذكية بناءً على اهتماماتك وسجل مشاهداتك.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    معالجة المدفوعات بعملة Pi وتوزيع المكافآت على منشئي المحتوى.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">تطوير وتحسين التطبيق باستخدام الذكاء الاصطناعي.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                  <p className="leading-relaxed">حماية التطبيق من الاحتيال والأنشطة المشبوهة.</p>
                </div>
              </CardContent>
            </Card>

            {/* مشاركة البيانات */}
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-purple-700">
                  <Lock className="w-6 h-6" />
                  3️⃣ مشاركة البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <p className="leading-relaxed font-semibold text-purple-600">
                  نحن لا نبيع بياناتك الشخصية لأي جهة خارجية. قد نشارك المعلومات فقط في الحالات التالية:
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    <span className="font-bold">شبكة Pi Network:</span> لمعالجة المدفوعات والتحويلات المالية.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    <span className="font-bold">مقدمو الخدمات التقنية:</span> لاستضافة التطبيق، تحليل البيانات، وتحسين
                    الأداء.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    <span className="font-bold">الجهات القانونية:</span> إذا تطلب القانون ذلك أو لحماية حقوق التطبيق
                    والمستخدمين.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <p className="leading-relaxed">
                    <span className="font-bold">منشئو المحتوى:</span> إحصائيات عامة (غير شخصية) حول المشاهدات
                    والتفاعل.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* حماية البيانات */}
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-red-700">
                  <Shield className="w-6 h-6" />
                  4️⃣ حماية البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  نطبق إجراءات أمنية متقدمة لحماية بياناتك من الوصول غير المصرح به، السرقة، أو التعديل، بما في
                  ذلك:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-bold text-red-700 mb-1">🔐 تشفير SSL/TLS</div>
                    <p className="text-sm">حماية جميع الاتصالات والبيانات المرسلة</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-bold text-red-700 mb-1">🛡️ جدران حماية</div>
                    <p className="text-sm">منع الوصول غير المصرح به للخوادم</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-bold text-red-700 mb-1">👤 مصادقة ثنائية</div>
                    <p className="text-sm">حماية إضافية لحسابك الشخصي</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-bold text-red-700 mb-1">📊 مراقبة مستمرة</div>
                    <p className="text-sm">كشف الأنشطة المشبوهة تلقائياً</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* حقوق المستخدمين */}
            <Card className="border-l-4 border-l-yellow-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-yellow-700">
                  <UserCheck className="w-6 h-6" />
                  5️⃣ حقوق المستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <div className="bg-yellow-50 p-4 rounded-lg space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span>
                      <span className="font-bold">الوصول:</span> عرض جميع بياناتك الشخصية المخزنة
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">✏️</span>
                    <span>
                      <span className="font-bold">التعديل:</span> تحديث أو تصحيح معلوماتك
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">🗑️</span>
                    <span>
                      <span className="font-bold">الحذف:</span> طلب حذف حسابك وجميع بياناتك
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">📥</span>
                    <span>
                      <span className="font-bold">التصدير:</span> الحصول على نسخة من بياناتك
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">🔕</span>
                    <span>
                      <span className="font-bold">إلغاء الاشتراك:</span> إيقاف الرسائل الترويجية
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-orange-700">
                  <FileText className="w-6 h-6" />
                  6️⃣ ملفات تعريف الارتباط (Cookies)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  يستخدم التطبيق ملفات Cookies لتحسين تجربة المستخدم، مثل حفظ تفضيلات اللغة، الوضع الليلي،
                  والتوصيات المخصصة. يمكنك التحكم في Cookies من إعدادات المتصفح.
                </p>
              </CardContent>
            </Card>

            {/* تغييرات السياسة */}
            <Card className="border-l-4 border-l-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-700">
                  <Calendar className="w-6 h-6" />
                  7️⃣ تغييرات سياسة الخصوصية
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  يجوز لنا تعديل هذه السياسة من وقت لآخر لتعكس التحديثات في التطبيق أو المتطلبات القانونية. سيتم
                  إشعار المستخدمين بأي تغييرات مهمة عبر البريد الإلكتروني أو الإشعارات داخل التطبيق.
                </p>
              </CardContent>
            </Card>

            {/* الاتصال */}
            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-emerald-700">
                  <Mail className="w-6 h-6" />
                  8️⃣ الاتصال بنا
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى التواصل معنا:
                </p>
                <div className="bg-white p-4 rounded-lg space-y-2 border border-emerald-200">
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-emerald-700">المطور:</span>
                    <span className="text-gray-700">SkillSpark Development Team</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-emerald-700">📧 البريد الإلكتروني:</span>
                    <span className="text-blue-600">privacy@skillspark.hub</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-emerald-700">🌐 الموقع:</span>
                    <span className="text-blue-600">www.skillspark.hub</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Islamic Compliance */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-100 border-2 border-green-500 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">☪️</div>
                <h3 className="font-bold text-green-700 text-lg mb-2">التزام إسلامي 100%</h3>
                <p className="text-gray-700 leading-relaxed">
                  جميع الممارسات في التطبيق متوافقة مع الشريعة الإسلامية. نحن نلتزم بالشفافية والأمانة والعدالة
                  في التعامل مع بيانات المستخدمين.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

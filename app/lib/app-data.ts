// Centralized data model + app content for the SkillSpark Hub dashboard.
// Extracted from app/page.tsx so the homepage stays a thin tab router.
// Icon references are React components (lucide-react); the data module
// carries the values, the feature components carry the markup.

export type Icon = ComponentType<{ className?: string }>;

export interface EarningSite {
  name: string;
  status: string;
}

export interface LessonItem {
  title: string;
  trainer?: string;
  duration?: string;
  views?: string;
  rating?: number;
  type?: string;
  profit?: string;
}

export interface Branch {
  id: string;
  name: string;
  icon: Icon;
  description: string;
  lessons: LessonItem[];
  earningSites?: EarningSite[];
}

export interface MainSection {
  id: string;
  name: string;
  icon: Icon;
  color: string;
  gradient: string;
  branches: Branch[];
}

export interface AppData {
  appName: string;
  mainSections: MainSection[];
}

// Exact copy of the hardcoded demo content (no backend). Kept in sync with
// app/page.tsx by the audit; do not hand-edit inline here.
export const appData: AppData = {
  appName: "SkillSpark Hub",
  mainSections: [
    {
      id: "religious",
      name: "📖 التعليم الديني",
      icon: BookOpen,
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      branches: [
        {
          id: "quran",
          name: "القرآن الكريم",
          icon: BookOpen,
          description: "تلاوة وتفسير وحفظ",
          lessons: [
            {
              title: "تفسير سورة الفاتحة - الآية الأولى",
              trainer: "الشيخ أحمد محمد",
              duration: "25 min",
              views: "15.2K",
              rating: 4.9,
              type: "مجاني",
            },
            {
              title: "أحكام التلاوة والتجويد",
              trainer: "الشيخ محمد علي",
              duration: "35 min",
              views: "12.8K",
              rating: 4.8,
              type: "مجاني",
            },
            {
              title: "حفظ القرآن الكريم - طرق وأساليب",
              trainer: "الشيخ خالد أحمد",
              duration: "42 min",
              views: "18.5K",
              rating: 4.9,
              type: "مجاني",
            },
          ],
          earningSites: [
            { name: "Upwork", status: "حلال 100%" },
            { name: "Fiverr", status: "حلال 100%" },
          ],
        },
        {
          id: "sunnah",
          name: "السنة الصحيحة",
          icon: BookOpen,
          description: "الأحاديث النبوية الصحيحة",
          lessons: [
            {
              title: "صحيح البخاري - كتاب الإيمان",
              trainer: "الشيخ عبدالله Hassan",
              duration: "40 min",
              views: "10.5K",
              rating: 4.9,
              type: "مجاني",
            },
          ],
          earningSites: [
            { name: "Upwork", status: "حلال 100%" },
            { name: "Fiverr", status: "حلال 100%" },
          ],
        },
        {
          id: "hadith",
          name: "تفسير الأحاديث النبوية",
          icon: MessageCircle,
          description: "شرح وتفسير الأحاديث",
          lessons: [],
          earningSites: [
            { name: "Upwork", status: "حلال 100%" },
            { name: "Fiverr", status: "حلال 100%" },
          ],
        },
        {
          id: "sahaba",
          name: "سيرة الصحابة",
          icon: Users,
          description: "قصص وسير الصحابة الكرام",
          lessons: [],
          earningSites: [
            { name: "Upwork", status: "حلال 100%" },
            { name: "Fiverr", status: "حلال 100%" },
          ],
        },
      ],
    },
    {
      id: "digital",
      name: "💻 المهارات الرقمية",
      icon: Code,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      branches: [
        {
          id: "programming",
          name: "البرمجة",
          icon: Code,
          description: "Web, Mobile, Python...",
          lessons: [
            {
              title: "مقدمة في JavaScript",
              trainer: "أحمد حسن",
              duration: "45 min",
              views: "8.9K",
              rating: 4.7,
              profit: "15 π",
            },
            {
              title: "تطوير تطبيقات React",
              trainer: "سارة أحمد",
              duration: "60 min",
              views: "12.3K",
              rating: 4.9,
              profit: "25 π",
            },
            {
              title: "Python للمبتدئين - الأساسيات",
              trainer: "محمد علي",
              duration: "50 min",
              views: "15.6K",
              rating: 4.8,
              profit: "20 π",
            },
          ],
          earningSites: [
            { name: "Upwork", status: "حلال 100%" },
            { name: "Fiverr", status: "حلال 100%" },
            { name: "Freelancer", status: "حلال 100%" },
          ],
        },
        {
          id: "design",
          name: "التصميم",
          icon: Sparkles,
          description: "Photoshop, Illustrator",
          lessons: [
            {
              title: "أساسيات Photoshop للمبتدئين",
              trainer: "فاطمة خالد",
              duration: "55 min",
              views: "9.2K",
              rating: 4.6,
              profit: "18 π",
            },
          ],
          earningSites: [
            { name: "Upwork", status: "حلال 100%" },
            { name: "Fiverr", status: "حلال 100%" },
            { name: "99designs", status: "حلال 100%" },
          ],
        },
      ],
    },
    {
      id: "crafts",
      name: "🧰 الحرف اليدوية",
      icon: Wrench,
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
      branches: [
        {
          id: "plumbing",
          name: "سباكة",
          icon: Wrench,
          description: "تعلم الحرف اليدوية للسباكة",
          lessons: [
            {
              title: "أساسيات السباكة المنزلية",
              trainer: "عمر محمود",
              duration: "35 min",
              views: "6.8K",
              rating: 4.5,
              type: "مجاني",
            },
          ],
          earningSites: [
            { name: "TaskRabbit", status: "حلال 100%" },
            { name: "Thumbtack", status: "حلال 100%" },
          ],
        },
        {
          id: "carpentry",
          name: "نجارة",
          icon: Hammer,
          description: "تعلم النجارة والصناعة اليدوية",
          lessons: [],
          earningSites: [
            { name: "TaskRabbit", status: "حلال 100%" },
            { name: "Thumbtack", status: "حلال 100%" },
          ],
        },
        {
          id: "electrical",
          name: "كهرباء",
          icon: Zap,
          description: "تعلم الكهرباء والصيانة",
          lessons: [],
          earningSites: [
            { name: "TaskRabbit", status: "حلال 100%" },
            { name: "Thumbtack", status: "حلال 100%" },
          ],
        },
      ],
    },
  ],
};

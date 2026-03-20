# Customization Guide 🎨

## Quick Customization Tips

### 1. تغيير الألوان والأنماط

**تحديث الألوان الأساسية:**

في `app/globals.css`:

```css
/* غير هذه الألوان لتتطابق مع علامتك التجارية */
--color-primary: #3b82f6; /* أزرق */
--color-secondary: #8b5cf6; /* بنفسجي */
--color-accent: #ec4899; /* وردي */
```

### 2. تحديث المعلومات الشخصية

**في `components/Hero.jsx`:**

```jsx
<h1>اسمك هنا</h1>
<span className="text-slate-300">وظيفتك هنا</span>
```

**في `app/layout.js`:**

```js
title: "اسمك | Full Stack Developer",
```

### 3. تعديل المهارات

**في `components/Skills.jsx`:**

```jsx
const skillCategories = {
  frontend: {
    skills: [
      { name: "React", level: 95 },
      // أضف مهاراتك هنا
    ],
  },
};
```

### 4. تحديث المشاريع

**في `components/Projects.jsx`:**

```jsx
const projects = [
  {
    title: "اسم مشروعك",
    description: "وصف المشروع",
    tags: ["React", "Node.js"],
    link: "رابط المشروع",
    // ...
  },
];
```

### 5. تعديل التجربة والتعليم

**في `components/Experience.jsx`:**

```jsx
const experiences = [
  {
    title: "منصبك",
    company: "اسم الشركة",
    duration: "التاريخ",
    // ...
  },
];
```

---

## تغيير الخطوط

في `app/layout.js`:

```jsx
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## تخصيص الرموز التعبيرية

جميع الرموز التعبيرية في المكونات يمكن تغييرها بسهولة:

```jsx
<span className="text-3xl">📧</span> {/* غير الرمز هنا */}
```

---

## إضافة أقسام جديدة

1. أنشئ ملف مكون جديد في `components/NewSection.jsx`
2. أضفه إلى `app/page.js`
3. أضفه إلى القائمة في `components/Navbar.jsx`

---

## تغيير السمات

**للتبديل بين الوضع الفاتح والداكن:**

في `globals.css`:

```css
/* للوضع الفاتح */
body {
  background-color: #ffffff;
  color: #000000;
}

/* للوضع الداكن */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0f172a;
    color: #e2e8f0;
  }
}
```

---

## إضافة قسم اتصال بواسطة البريد الإلكتروني

تم تكوين النموذج بالفعل للعمل مع `mailto:`

لإضافة خدمة بريد حقيقية (مثل EmailJS):

```bash
npm install @emailjs/browser
```

ثم في `components/Contact.jsx`:

```jsx
import emailjs from "@emailjs/browser";

// في handleSubmit:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData);
```

---

## إضافة ظاهرة بصرية مخصصة

في `app/globals.css`:

```css
@keyframes customAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.custom-animation {
  animation: customAnimation 1s ease-out;
}
```

---

## تخصيص النقاط الثابتة (Breakpoints)

في `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    screens: {
      'custom': '1400px',
    }
  }
}
```

---

## إضافة صور

ضع الصور في `public/` ثم استخدمها:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

---

## تغيير حجم الخط

في `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontSize: {
      'custom': '2.5rem',
    }
  }
}
```

---

## تعديل التباعد والحدود

```jsx
{
  /* تباعد مخصص */
}
<div className="p-8 rounded-2xl border-2">محتوى</div>;
```

---

## إضافة نماذج جديدة

انسخ هيكل نموذج الاتصال في `components/Contact.jsx` وقم بالتخصيص.

---

## تسريع الموقع

1. تقليل حجم الصور
2. استخدام WebP format
3. تفعيل الضغط
4. استخدام CDN للموارد

---

## اختبار التجاوب

استخدم:

```bash
npm run dev
```

ثم فتح أدوات المطور (F12) واختبر على أحجام شاشات مختلفة.

---

## هل تحتاج إلى مساعدة؟

كل شيء موثق وسهل التعديل! 🎯

**نصيحة:** ابدأ بتغيير النصوص والروابط أولاً، ثم انتقل إلى التخصيص الأعمق.

---

**استمتع بإنشاء محفظتك الاحترافية! 🚀**

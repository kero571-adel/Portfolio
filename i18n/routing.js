// // i18n/routing.js
// import { defineRouting } from 'next-intl/routing';
// import { createNavigation } from 'next-intl/navigation';

// export const routing = defineRouting({
//   locales: ['en', 'ar'],
//   defaultLocale: 'en',
//   localePrefix: 'always' // يخفي /en ويظهر /ar فقط
// });

// // ✅ تم تغيير الاسم من createSharedPathnamesNavigation إلى createNavigation
// export const { Link, redirect, usePathname, useRouter } =
//   createNavigation(routing);
import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
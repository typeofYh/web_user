import { createI18n } from 'vue-i18n'
import en from "@/locals/en"
import cn from "@/locals/cn"

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    cn
  }
})

export default i18n;

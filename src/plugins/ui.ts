import { 
  Button, 
  message, 
  ConfigProvider, 
  StyleProvider, 
  Form, 
  Input, 
  Layout, 
  Menu, 
  Avatar, 
  Card, 
  Modal, 
  Checkbox, 
  Tabs,
  Table,
  Radio,
  Progress
} from 'ant-design-vue';
import type { App } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
const customIconFontUrl = '//at.alicdn.com/t/c/font_4417762_na749ljm32.js'
export const IconFont = createFromIconfontCN({
  scriptUrl: customIconFontUrl
})
export function registerUI() {
  return (app: App) => {
    app.use(Button)
    app.use(ConfigProvider)
    app.use(StyleProvider)
    app.use(Avatar)
    app.use(Form)
    app.use(Input)
    app.use(Layout)
    app.use(Menu)
    app.use(Card)
    app.use(Modal)
    app.use(Checkbox)
    app.use(Tabs)
    app.use(Radio)
    app.use(Table)
    app.use(Progress)
    app.component('IconFont', IconFont)
    app.config.globalProperties.$message = message
  }
}
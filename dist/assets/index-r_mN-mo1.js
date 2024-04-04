import{u as B}from"./user-ImOX8yI0.js";import{d as L,r as C,C as $,D as R,b as p,c as k,e as T,f as s,t as d,i as e,j as t,u as g,l as b,V as F,v as P,h as V,W as j}from"./index-Qb4OZOi1.js";import{u as z}from"./useGetCode-fmL-Ba1t.js";const D="/assets/login-bg-Ea0EQyB-.jpg",E={class:"absolute right-5 top-1/2 -translate-y-1/2 bg-white shadow-[0_4px_20px_0px_rgba(27,139,140,0.2)] w-[456px] z-10 rounded-lg p-12"},G={class:"font-normal text-4xl text-gray-900"},N=s("span",{class:"text-gray-500 pr-2 relative after:content-[''] after:w-[1px] after:h-5 after:bg-gray-500 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"},"+86",-1),A={class:"text-center pt-4 font-normal text-gray-600 text-[12px]"},O=s("a",{href:"https://yingwuzhixue.com/legal.html",target:"_blank",class:"text-[#1B8B8C]"}," 《鹦鹉智学协议》",-1),Q=s("a",{href:"https://yingwuzhixue.com/legal.html",target:"_blank",class:"text-[#1B8B8C]"}," 《隐私条款》",-1),W=L({__name:"codeLogin",setup(S){const r=B(),u=C(),n=C(!1),{getCodeBtnText:h,getCode:l,resetCode:i}=z(),o=$({mobile:"",code:"",type:"sms"}),c=$({mobile:[{required:!0,message:"请输入你的手机号！"},{pattern:R,message:"请输入正确的手机号！",trigger:"blur"}],code:[{required:!0,message:"请输入验证码！"}]}),x=async()=>{try{n.value=!0,await r.api_login(o)}catch(a){console.log(a)}finally{n.value=!1}},v=()=>{u.value.validateFields("mobile").then(()=>{l(o.mobile,()=>{r.api_sms(o.mobile,i)})})},w=()=>{r.onClickChangeLoginType("password")};return(a,m)=>{const y=p("a-input"),f=p("a-form-item"),U=p("a-button"),q=p("a-form");return k(),T("div",E,[s("h1",G,d(a.$t("验证码登录/注册")),1),e(q,{ref_key:"formRef",ref:u,model:o,layout:"vertical",name:"login",autocomplete:"off",onFinish:x,class:"mt-8"},{default:t(()=>[e(f,{label:a.$t("手机号"),name:"mobile",rules:c.mobile},{default:t(()=>[e(y,{value:o.mobile,"onUpdate:value":m[0]||(m[0]=_=>o.mobile=_),type:"tel",class:"py-2.5 px-3.5",placeholder:a.$t("输入您的手机号")},{prefix:t(()=>[N]),_:1},8,["value","placeholder"])]),_:1},8,["label","rules"]),e(f,{label:a.$t("验证码"),name:"code",rules:c.code},{default:t(()=>[e(y,{value:o.code,"onUpdate:value":m[1]||(m[1]=_=>o.code=_),class:"px-3.5 py-0",placeholder:a.$t("输入验证码")},{suffix:t(()=>[s("span",{onClick:v,class:"text h-full py-2.5 px-2 cursor-pointer text-green-1"},d(a.$t(g(h))),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","rules"]),e(f,null,{default:t(()=>[s("span",{class:"text-green-1 font-semibold cursor-pointer",onClick:w},d(a.$t("切换为密码登陆")),1)]),_:1}),e(f,{class:"mb-0"},{default:t(()=>[e(U,{loading:n.value,type:"primary","html-type":"submit",class:"shadow-none w-full px-4 py-2.5 h-auto"},{default:t(()=>[b(d(a.$t("登陆/注册")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),s("h4",A,[b(d(a.$t("未注册手机验证后自动登录，注册即代表同意"))+" ",1),O,b(" 和 "),Q])])}}}),H={class:"absolute right-5 top-1/2 -translate-y-1/2 bg-white shadow-[0_4px_20px_0px_rgba(27,139,140,0.2)] w-[456px] z-10 rounded-lg p-12"},I={class:"font-normal text-4xl text-gray-900"},J={class:"flex justify-between w-full"},K={class:"text-green-1"},M=L({__name:"passwordLogin",setup(S){const r=B(),u=C(!1),n=$({username:"",password:"",type:"account"}),h=async()=>{try{u.value=!0,await r.api_login(n)}catch(l){console.log(l)}finally{u.value=!1}};return(l,i)=>{const o=p("a-input"),c=p("a-form-item"),x=p("a-input-password"),v=p("a-button"),w=p("a-form");return k(),T("div",H,[s("h1",I,d(l.$t("密码登录")),1),e(w,{model:n,layout:"vertical",name:"login",autocomplete:"off",onFinish:h,class:"mt-8"},{default:t(()=>[e(c,{label:l.$t("用户名或手机号"),name:"username",rules:[{required:!0,message:"请输入你的用户名或手机号！"}]},{default:t(()=>[e(o,{value:n.username,"onUpdate:value":i[0]||(i[0]=a=>n.username=a),type:"tel",class:"py-2.5 px-3.5",placeholder:l.$t("输入您的用户名或手机号")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(c,{label:l.$t("密码"),name:"password",rules:[{required:!0,message:"请输入密码！"}]},{default:t(()=>[e(x,{value:n.password,"onUpdate:value":i[1]||(i[1]=a=>n.password=a),class:"px-3.5 py-2.5",placeholder:l.$t("输入密码")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(c,null,{default:t(()=>[s("div",J,[s("span",{class:"text-green-1 font-semibold cursor-pointer",onClick:i[2]||(i[2]=a=>g(r).onClickChangeLoginType("code"))},d(l.$t("切换为验证码登陆")),1),s("span",{class:"text-green-1 font-semibold cursor-pointer",onClick:i[3]||(i[3]=a=>g(r).onClickChangeLoginType("findPassword"))},d(l.$t("忘记密码？")),1)])]),_:1}),e(c,{class:"mb-0"},{default:t(()=>[e(v,{type:"primary","html-type":"submit",class:"shadow-none w-full px-4 py-2.5 h-auto",loading:u.value},{default:t(()=>[b(d(l.$t("登录")),1)]),_:1},8,["loading"])]),_:1}),s("h4",{class:"text-center pt-4 font-normal text-gray-600 text-[12px]",onClick:i[4]||(i[4]=a=>g(r).onClickChangeLoginType("code"))},[b(d(l.$t("还没有账号？")),1),s("span",K,d(l.$t("马上注册")),1)])]),_:1},8,["model"])])}}}),X={class:"absolute right-5 top-1/2 -translate-y-1/2 bg-white shadow-[0_4px_20px_0px_rgba(27,139,140,0.2)] w-[456px] z-10 rounded-lg p-12"},Y={class:"font-normal text-4xl text-gray-900"},Z=s("span",{class:"text-gray-500 pr-2 relative after:content-[''] after:w-[1px] after:h-5 after:bg-gray-500 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"},"+86",-1),ee=L({__name:"findPassword",setup(S){const r=B(),u=C(!1),n=C(),{getCodeBtnText:h,getCode:l,resetCode:i}=z(),o=$({mobile:"",code:"",password:""}),c=$({mobile:[{required:!0,message:"请输入你的手机号！"},{pattern:R,message:"请输入正确的手机号！",trigger:"blur"}],code:[{required:!0,message:"请输入验证码！"}],password:[{required:!0,message:"请输入密码！"}]}),x=async()=>{try{u.value=!0,await r.api_findPassword(o)}catch(a){console.log(a)}finally{u.value=!1}},v=()=>{n.value.validateFields("mobile").then(()=>{l(o.mobile,()=>{r.api_sms(o.mobile,i)})})},w=()=>{r.onClickChangeLoginType("password")};return(a,m)=>{const y=p("a-input"),f=p("a-form-item"),U=p("a-button"),q=p("a-form");return k(),T("div",X,[s("h1",Y,[e(g(F),{class:"pr-2",onClick:w}),b("忘记密码")]),e(q,{ref_key:"formRef",ref:n,model:o,layout:"vertical",name:"login",autocomplete:"off",onFinish:x,class:"mt-8"},{default:t(()=>[e(f,{label:"手机号",name:"mobile",rules:c.mobile},{default:t(()=>[e(y,{value:o.mobile,"onUpdate:value":m[0]||(m[0]=_=>o.mobile=_),type:"tel",class:"py-2.5 px-3.5",placeholder:"输入您的手机号"},{prefix:t(()=>[Z]),_:1},8,["value"])]),_:1},8,["rules"]),e(f,{label:"验证码",name:"code",rules:c.code},{default:t(()=>[e(y,{value:o.code,"onUpdate:value":m[1]||(m[1]=_=>o.code=_),class:"px-3.5 py-0",placeholder:"输入验证码"},{suffix:t(()=>[s("span",{onClick:v,class:"text h-full py-2.5 px-2 cursor-pointer text-green-1"},d(g(h)),1)]),_:1},8,["value"])]),_:1},8,["rules"]),e(f,{label:"设置新密码",name:"password",rules:c.password},{default:t(()=>[e(y,{value:o.password,"onUpdate:value":m[2]||(m[2]=_=>o.password=_),class:"py-2.5 px-3.5",placeholder:"输入新密码"},null,8,["value"])]),_:1},8,["rules"]),e(f,{class:"mb-0"},{default:t(()=>[e(U,{type:"primary","html-type":"submit",class:"shadow-none w-full px-4 py-2.5 h-auto",loading:u.value},{default:t(()=>[b("确认")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}}),te={class:"bg-login-bg w-full h-full"},oe={class:"container h-full flex relative mx-auto"},ae={class:"w-1/2 absolute bottom-0 left-0 text-[0px] z-0"},se=["src"],ie=L({__name:"index",setup(S){const r={password:M,code:W,findPassword:ee},u=B(),n=P(()=>r[u.loginType]);return(h,l)=>(k(),T("div",te,[s("div",oe,[s("div",ae,[s("img",{src:g(D),alt:"login-bg",class:"w-full"},null,8,se)]),(k(),V(j(n.value)))])]))}});export{ie as default};
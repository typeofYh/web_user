import{M as f,r as u,C as p,p as m,ae as y,B as _,af as w,ag as k,ah as h,ad as d,ai as C,aj as q,ak as x,al as I}from"./index-nx37jhkW.js";const j=f("user",()=>{const c=u("code"),o=p([]),r=u(""),t=p([]),i=m();return{onClickChangeLoginType:s=>{c.value=s},loginType:c,api_sms:async(s,e)=>{try{await y({phone:s,type:1})}catch{_.error("获取验证码失败"),e()}},api_login:async s=>{const e=await w(s);k("userinfo",e,null),h("usermenu"),h("userdata"),_.success("登录成功",1,()=>{e.name?d.push("/home"):d.push("/welcome")})},api_findPassword:async s=>{const e=await C(s);console.log("api_findPassword",e)},api_out:async()=>{await x(),window.localStorage.clear()},api_setUserInfo:async(s,e)=>{await q(s,e)},api_checkin:async()=>{const s=i.userInfo.account_id,{charts:e,current:n,daka:l,info:g}=await I(s);o.length=0,o.push(...e),r.value=n,t.length=0,t.push(...l.map(a=>({...a,class:a.lock?"lock":a.count_process>=a.count_target?"success":a.date===n?"today":""}))),i.userTargets.forEach(a=>{a.val=g[a.id]})},homeCharts:o,homeDate:r,homeDaka:t}});export{j as u};

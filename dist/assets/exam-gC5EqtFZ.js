import{Z as s}from"./index-nx37jhkW.js";const c=e=>s.post("/api/system/microservice/resource/",e),a=e=>s.post("/api/system/microservice/create_mock/",e),o=e=>s.get(`/api/system/microservice/get_mock/${e}`),i=e=>s.get(`/api/system/microservice/answer_status/${e}/`),m=e=>s.post("/api/system/microservice/answer_panel/",e),u=e=>s.post(`/api/system/microservice/submit_answers/${e}/`),_=e=>s.post(`api/system/microservice/scoring/${e}/`),n=e=>s.get(`api/system/microservice/get_score/${e}/`),p=e=>s.get(`api/system/microservice/get_score_repeat/${e}/`),g=e=>s.get(`api/system/microservice/get_past_scores/${e}/`),v=(e,t)=>s.post("api/system/microservice/grade_answer/",{sheet_id:e,question_id:t}),q=e=>s.post("/api/system/microservice/create_mock_sheet/",e);export{n as a,p as b,o as c,i as d,u as e,m as f,v as g,c as h,a as i,q as j,g as k,_ as r};

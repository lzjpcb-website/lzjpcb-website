
/* =========================================================
   LZJPCB V2.1 原生 JavaScript
   说明：不依赖 React / Vue / Bootstrap / Tailwind
   ========================================================= */
document.addEventListener("DOMContentLoaded",function(){

  // 移动端菜单
  const header=document.querySelector("header");
  const menu=document.querySelector(".menu-btn");
  if(menu && header){
    menu.addEventListener("click",()=>header.classList.toggle("mobile-open"));
  }
  document.querySelectorAll("nav a").forEach(a=>{
    a.addEventListener("click",()=>header && header.classList.remove("mobile-open"));
  });

  // 当前页面导航高亮
  const current=location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a=>{
    const href=a.getAttribute("href") || "";
    if(href===current) a.classList.add("active");
  });

  // “I Have Gerber / I Don't Have Gerber” 快速选择
  document.querySelectorAll("[data-choice]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const target=document.querySelector("#quote-requirements");
      if(target){
        target.focus();
        target.value=btn.dataset.choice==="gerber"
          ? "I have Gerber files / BOM and would like a manufacturing review."
          : "I don't have final Gerber files yet. Here are my project requirements:";
        target.scrollIntoView({behavior:"smooth",block:"center"});
      }
    });
  });

  // 静态演示表单：正式上线时接入后端 / CRM / 邮件 API
  document.querySelectorAll("form[data-rfq]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const msg=form.querySelector(".form-message");
      if(msg){
        msg.textContent="Thank you. Your RFQ form is ready. Connect this form to your production email/CRM endpoint before launch.";
        msg.style.color="#0B5CAD";
      }
    });
  });
});

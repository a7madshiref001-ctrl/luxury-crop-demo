(function (d) {
  var owner = /owner\.html/.test(location.pathname);
  var r = d.createElement("div");
  r.setAttribute("role", "note");
  r.textContent = owner
    ? "لوحة عرض تجريبية — كل الأرقام هنا وهمية للتوضيح، مو أرقام المكان الحقيقية"
    : "نسخة عرض تجريبية — الطلبات هنا تجريبية وما توصل للمكان";
  r.style.cssText = "position:relative;z-index:5;padding:9px 14px;background:#111;color:#F7F5F2;font:600 12px/1.5 system-ui,sans-serif;text-align:center;direction:rtl";
  d.addEventListener("DOMContentLoaded", function () { d.body.insertBefore(r, d.body.firstChild); });
})(document);

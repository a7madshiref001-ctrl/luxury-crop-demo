/* نسخة عرض (Demo) — مفيش أي اتصال بقاعدة بيانات أو لوحة المكان الحقيقية.
   الطلب بيتسجّل على جهاز الزائر بس، عشان يجرّب التجربة كاملة. */
(function (w) {
  "use strict";
  var n = 100 + Math.floor(Math.random() * 800);
  w.Backend = {
    configured: function () { return true; },
    loadCatalog: function () { return Promise.resolve(null); },
    applyCatalog: function () {},
    resolveServicePoint: function () { return Promise.resolve(null); },
    placeOrder: function () {
      n += 1;
      return new Promise(function (res) { setTimeout(function () { res({ order_number: "D" + n, total: null }); }, 650); });
    }
  };
})(window);

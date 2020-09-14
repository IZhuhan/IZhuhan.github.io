! function (e) {
   var t = "onpreload" in document.createElement("link"),
      headElement = document.getElementsByTagName("head")[0];

   function s(e) {
      var linkElement = document.createElement("link");
      for (var index in e) linkElement.setAttribute(index, e[index]);
      headElement.appendChild(linkElement);
   }

   ["css/styles.css", "css/plugins.css"].forEach(function (link) {
      s(t ? {
         rel: "preload",
         href: link,
         as: "style",
         onload: "this.onload=null;this.rel='stylesheet'"
      } : {
            rel: "stylesheet",
            href: link
         })
   })
}();
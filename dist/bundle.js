(()=>{var r={986:r=>{"use strict";r.exports=require("body-parser")},582:r=>{"use strict";r.exports=require("cors")},860:r=>{"use strict";r.exports=require("express")},423:r=>{"use strict";r.exports=require("path")}},e={};function t(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return r[s](o,o.exports,t),o.exports}(()=>{var r=t(860),e=t(423),s=(t(582),t(986),r()),i=__dirname,o=e.join(i,"../dist/public/index.html");s.use(r.static(i)),s.get("*",(function(r,e){e.sendFile(o)}));var n=process.env.PORT||8080;s.listen(n,(function(){return console.log("Server started on port 3000")}))})()})();
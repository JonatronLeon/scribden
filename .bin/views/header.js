var jade = require("jadum/runtime");
module.exports = function header(locals) {
var jade_debug = [{ lineno: 1, filename: "views/header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (navType, thread) {
jade_debug.unshift({ lineno: 0, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/header.jade" });
if ( navType === 'main' || (navType === 'thread' && !thread))
{
jade_debug.unshift({ lineno: 3, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 3, filename: "views/header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon sd-o-home-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/header.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon sd-o-thread-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/header.jade" });
buf.push("<a href=\"/notifications\" aria-label=\"See user notifications\" class=\"sd-o-nav-icon sd-o-notification-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("N");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/header.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon sd-o-settings-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("S");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</nav>");
jade_debug.shift();
jade_debug.shift();
}
else if ( navType === 'thread' && thread)
{
jade_debug.unshift({ lineno: 14, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "views/header.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + thread.id, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("Compose");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</nav>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 21, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 21, filename: "views/header.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/header.jade" });
buf.push("<a href=\"/\" aria-label=\"Go to home\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("ScribDen");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/header.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("The minimalist forum.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.shift();}.call(this,"navType" in locals_for_with?locals_for_with.navType:typeof navType!=="undefined"?navType:undefined,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  if navType === 'main' || (navType === 'thread' && !thread)\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-home-icon(href='/recent', aria-label='See recently updated threads') R\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-thread-icon(href='/tracked', aria-label='See tracked threads') T\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-settings-icon(href='/settings', aria-label='Modify user settings') S\n  else if navType === 'thread' && thread\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-t-wire(href='/recent', aria-label='Go back') Back\n        li.sd-c-nav-right\n          a.sd-t-wire(href='/compose/' + thread.id, aria-label='Make a new post') Compose\n  else\n    h1\n      a.sd-t-link(href='/', aria-label='Go to home') ScribDen\n    h2 The minimalist forum.\n");
}
}
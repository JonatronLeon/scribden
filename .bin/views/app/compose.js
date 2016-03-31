var jade = require("jadum/runtime");
module.exports = function compose(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/compose.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (apiUrl, id, pageTitle, require, threadId, undefined, user) {
jade_debug.unshift({ lineno: 0, filename: "views/app/compose.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/compose.jade" });
buf.push(require("../partials/compose_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/compose.jade" });
buf.push("<main class=\"sd-o-main sd-u-padding--sm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/compose.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/compose.jade" });
buf.push("<h1 class=\"sd-t-wire\">" + (jade.escape(null == (jade_interp = pageTitle) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/app/compose.jade" });
buf.push("<ul class=\"sd-c-toolbar sd-no-js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_bold\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/compose.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("B");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_italic\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/app/compose.jade" });
buf.push("<em>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("I");
jade_debug.shift();
jade_debug.shift();
buf.push("</em>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/compose.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_link\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Link");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/compose.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_image\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Image");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/app/compose.jade" });
buf.push("<div id=\"editor_url\" class=\"sd-c-toolbar__url sd-u-hide\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "views/app/compose.jade" });
buf.push("<label for=\"editor_url_field\" class=\"sd-u-display--block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("url:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/compose.jade" });
buf.push("<input id=\"editor_url_field\" type=\"text\" placeholder=\"http://\" class=\"sd-t-wire sd-t-wire--field sd-u-display--block\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_url_btn\" type=\"button\" class=\"sd-c-toolbar__url__btn sd-t-wire sd-t-wire-hover sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Apply To Text");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/app/compose.jade" });
buf.push("<div id=\"editor_image_url\" class=\"sd-c-toolbar__url sd-u-hide\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "views/app/compose.jade" });
buf.push("<label for=\"editor_image_field\" class=\"sd-u-display--block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("source:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/app/compose.jade" });
buf.push("<input id=\"editor_image_field\" type=\"text\" placeholder=\"http://\" class=\"sd-u-display--block sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_image_btn\" type=\"button\" class=\"sd-c-toolbar__url__btn sd-t-wire sd-t-wire-hover sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("Add");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/app/compose.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/app/compose.jade" });
buf.push("<form id=\"new_post_form\" name=\"new_post_form\"" + (jade.attr("action", apiUrl, true, false)) + " method=\"POST\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "views/app/compose.jade" });
buf.push("<textarea id=\"editor\" name=\"content\" required=\"required\" class=\"sd-c-editor\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/app/compose.jade" });
buf.push("<input type=\"hidden\" name=\"id\"" + (jade.attr("value", id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/compose.jade" });
buf.push("<input type=\"hidden\" name=\"threadId\"" + (jade.attr("value", threadId, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/app/compose.jade" });
buf.push("<input type=\"hidden\" name=\"userId\"" + (jade.attr("value", user.id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/compose.jade" });
buf.push("<button type=\"submit\" class=\"sd-t-wire sd-t-wire-hover sd-t-wire--field sd-o-submit-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("Post");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"apiUrl" in locals_for_with?locals_for_with.apiUrl:typeof apiUrl!=="undefined"?apiUrl:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"threadId" in locals_for_with?locals_for_with.threadId:typeof threadId!=="undefined"?threadId:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/compose_header\nmain.sd-o-main.sd-u-padding--sm\n  include ../partials/flash\n  h1.sd-t-wire=pageTitle\n  ul.sd-c-toolbar.sd-no-js\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_bold' type='button')\n        strong B\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_italic' type='button')\n        em I\n    //- @TODO: Replace with icon images\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_link' type='button') Link\n    //- @TODO: Only for premium members\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_image' type='button') Image\n\n  div.sd-c-toolbar__url.sd-u-hide(id='editor_url')\n    label.sd-u-display--block(for='editor_url_field') url:\n    input.sd-t-wire.sd-t-wire--field.sd-u-display--block(id='editor_url_field' type='text' placeholder='http://')\n    button.sd-c-toolbar__url__btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field(id='editor_url_btn' type='button') Apply To Text\n  div.sd-c-toolbar__url.sd-u-hide(id='editor_image_url')\n    label.sd-u-display--block(for='editor_image_field') source:\n    input.sd-u-display--block.sd-t-wire.sd-t-wire--field(id='editor_image_field' type='text' placeholder='http://')\n    button.sd-c-toolbar__url__btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field(id='editor_image_btn' type='button') Add\n\n  //- Replace with the Squire editor if javascript is enabled\n  form(id='new_post_form' name='new_post_form' action=apiUrl method='POST')\n    textarea.sd-c-editor(id='editor' name='content' required)\n    input(type='hidden' name='id' value=id)\n    input(type='hidden' name='threadId' value=threadId)\n    input(type='hidden' name='userId' value=user.id)\n    button.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-o-submit-btn(type='submit') Post");
}
}
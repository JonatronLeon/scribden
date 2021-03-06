var jade = require("jadum/runtime");
module.exports = function register(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/register.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/register.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/register.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/home/register.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "views/home/register.jade" });
buf.push(require("../partials/home_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/home/register.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/home/register.jade" });
buf.push("<form name=\"registerForm\" action=\"/api/user/register\" method=\"post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/home/register.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/home/register.jade" });
buf.push("<label for=\"username\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("username:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/home/register.jade" });
buf.push("<input id=\"username\" name=\"username\" type=\"text\" placeholder=\"username\" maxlength=\"15\" pattern=\"[a-z0-9_-]{3,15}\" required=\"required\" class=\"sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/home/register.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/home/register.jade" });
buf.push("<label for=\"email\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("email:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/home/register.jade" });
buf.push("<input id=\"email\" name=\"email\" type=\"email\" placeholder=\"email\" maxlength=\"254\" required=\"required\" class=\"sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/home/register.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/home/register.jade" });
buf.push("<button type=\"submit\" class=\"sd-c-btn sd-t-wire sd-t-wire-hover sd-t-wire--field sd-c-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Register");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div.sd-u-align--center\n  include ../partials/flash\n  include ../partials/home_header\n  main.sd-o-main\n    form(name='registerForm' action='/api/user/register' method='post')\n      div\n        label.sd-c-form__label--medium(for='username') username:\n        input.sd-t-wire.sd-t-wire--field(id='username' name='username' type='text' placeholder='username' maxlength='15' pattern='[a-z0-9_-]{3,15}' required)\n      div\n        label.sd-c-form__label--medium(for='email') email:\n        input.sd-t-wire.sd-t-wire--field(id='email' name='email' type='email' placeholder='email' maxlength='254' required)\n      div\n        button.sd-c-btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-c-btn(type='submit') Register");
}
}
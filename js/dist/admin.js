(()=>{var t={n:e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const s=flarum.core.compat["admin/app"];var i=t.n(s),r="fof-forum-statistics-widget.admin.";i().initializers.add("fof-forum-statistics-widget",(function(){i().extensionData.for("fof-forum-statistics-widget").registerSetting({label:i().translator.trans(r+"settings.widget_ignore_private_discussions_label"),setting:"fof-forum-statistics-widget.ignore_private_discussions",type:"switch"}).registerSetting({label:i().translator.trans(r+"settings.widget_order_label"),setting:"fof-forum-statistics-widget.widget_order",type:"number",help:i().translator.trans(r+"settings.widget_helper_text")}).registerSetting({setting:"fof-forum-statistics-widget.cache_duration",type:"number",min:0,label:i().translator.trans("fof-forum-statistics-widget.admin.settings.cache_duration_label"),help:i().translator.trans("fof-forum-statistics-widget.admin.settings.cache_duration_help")}).registerSetting({setting:"fof-forum-statistics-widget.flush_cache_on_new_registration",type:"boolean",label:i().translator.trans("fof-forum-statistics-widget.admin.settings.flush_cache_on_new_registration_label"),help:i().translator.trans("fof-forum-statistics-widget.admin.settings.flush_cache_on_new_registration_help")}).registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_discussions_count_label"),permission:"fof-forum-statistics-widget.viewWidget.discussionsCount",allowGuest:!0},"view").registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_posts_count_label"),permission:"fof-forum-statistics-widget.viewWidget.postsCount",allowGuest:!0},"view").registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_users_count_label"),permission:"fof-forum-statistics-widget.viewWidget.usersCount",allowGuest:!0},"view").registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_lastest_member_label"),permission:"fof-forum-statistics-widget.viewWidget.latestMember",allowGuest:!0},"view")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map
(this.webpackJsonpclubreact=this.webpackJsonpclubreact||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"name":"meeting dates","dates":["March 10th","March 24th","April 28th","May 26th","June 9th","June 23rd","July 7th","July 21","July 28th","August 4th","etc..."]},{"name":"gardening dates","dates":["May 23rd","June 20th","July 25th","August 22nd","September 19"]},{"name":"personal meet ups","dates":["oddSundays of every month"]},{"name":"gardening dates","dates":["May 23rd","June 20th","July 25th","August 22nd","September 19"]}]')},12:function(e,t,n){e.exports=n.p+"static/media/activitiespage.7e1bd1ca.bmp"},13:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(4),i=n(6),c=n(7),o=n(2),u=n(9),s=n(8),m=n(0),h=n.n(m),E=n(3),d=n.n(E),p=n(11);var v=function(e){var t,n,a;return"guest"==e.role?(n=e.show,a=e.buttonsfunction,t=h.a.createElement("ul",null,h.a.createElement("li",{onClick:function(){return a("home")},className:"home"==n?"active":""},"HOME"),h.a.createElement("li",{onClick:function(){return a("activities")},className:"activities"==n?"active":""},"ACTIVITIES"),h.a.createElement("li",{onClick:function(){return a("login")},className:"login"==n?"active":""},"LOGIN"),h.a.createElement("li",{onClick:function(){return a("membership")},className:"membership"==n?"active":""},"MEMBERSHIP"))):"member"==e.role?t=function(e,t){return h.a.createElement("ul",null,h.a.createElement("li",{onClick:function(){return t("home")},className:"home"==e?"active":""},"HOME"),h.a.createElement("li",{onClick:function(){return t("activities")},className:"activities"==e?"active":""},"ACTIVITIES"),h.a.createElement("li",{onClick:function(){return t("membership")},className:"membership"==e?"active":""},"MEMBERSHIP"),h.a.createElement("li",{onClick:function(){return t("logout")},className:"logout"==e?"active":""},"LOGOUT"))}(e.show,e.buttonsfunction):"admin"==e.role&&(t=function(e,t){return h.a.createElement("ul",null,h.a.createElement("li",{onClick:function(){return t("home")},className:"home"==e?"active":""},"HOME"),h.a.createElement("li",{onClick:function(){return t("AdminActivities")},className:"AdminActivities"==e?"active":""},"MANAGE ACTIVITIES"),h.a.createElement("li",{onClick:function(){return t("activities")},className:"activities"==e?"active":""},"ACTIVITIES"),h.a.createElement("li",{onClick:function(){return t("logout")},className:"logout"==e?"active":""},"LOGOUT"))}(e.show,e.buttonsfunction)),h.a.createElement("nav",{className:"box"},t)},f=n(12),g=n.n(f);var b=function(e){var t=e.user,n=e.role,a=h.a.createElement("div",null,h.a.createElement("h1",null,"Hey There! Welcome to the GREEN-HANDS GARDEN CLUB!"),h.a.createElement("p",null,"A global platform for people having interest in gardening! Invite you friends to join by sharing the link... Do drop your comments and sussestions after the meet-ups/activities. Thankyou for visitng.")),l=h.a.createElement("div",null,h.a.createElement("article",null,h.a.createElement("h2",null,"GARDEN"),h.a.createElement("p",null,"Every aspect of our life involves language. The language also plays an important role in the development of a person personality, because communication is the one which drives our lives and makes ourselves better. Basically, language distinguishes humans from other animal species.")),h.a.createElement("article",null,h.a.createElement("h3",null,"WHY?"),h.a.createElement("p",null,"In addition to being a source of fresh, healthy produce, gardening can ease stress, keep you limber, and even improve your mood. Here are just a few of the ways gardening can benefit your physical and mental health, and how you can start harvesting those benefits for you and your family.")),h.a.createElement("article",null,h.a.createElement("h2",null,"NEWBIE'S HANDOUT"),h.a.createElement("p",null,"once again,We would like to welcome you to our club. We are pretty sure you would enjoy being a part of us."),h.a.createElement("h3",null,"Our Motto"),h.a.createElement("p",null,h.a.createElement("small",null,h.a.createElement("b",null,"CELEBRATE NATURE!"))),h.a.createElement("h3",null,"Purpose"),h.a.createElement("p",null,"The purpose of this club is to share our interest,experience and knowledge in gardeinging. This club would help improve your skills in gardening."),h.a.createElement("h3",null,"Services"),h.a.createElement("p",null,"1.educational sessions about gardening tips and tricks 2.virtual classes 3.sapling and seed supply and many more 4.Zoom catchups 5.Activities"," "),h.a.createElement("h3",null,"Expectations"),h.a.createElement("p",null,"All green-hand members are expected to actively participate in the sessions and post your updates on our page")));return h.a.createElement("div",{className:"margin-top-150"},h.a.createElement("div",null,h.a.createElement("p",null,"User: ",t,", role: ",n)),h.a.createElement("article",{className:"ctr"},a),h.a.createElement("img",{src:g.a}),";",h.a.createElement("main",null,l),h.a.createElement("footer",null,"\xa9 2020 GREEN-HANDS-CLUB"))},y=n(5),w=function(){var e="http://localhost:3051/";return{login:e+"login",logout:e+"logout",activities:e+"activities",deleteActivities:e+"activity/"}},A=function(e){var t=e.user,n=e.role,a=Object(m.useState)([]),i=Object(y.a)(a,2),c=i[0],o=i[1],u=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(w().activities,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.length>0&&o(e[0])})).catch((function(e){console.log("something went wrong")}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=c.map((function(e){return h.a.createElement("tr",{key:e.name},h.a.createElement("td",null,e.name),h.a.createElement("td",null,e.date))}));return Object(m.useEffect)((function(){u()}),[]),h.a.createElement("section",{className:"margin-top-150"},h.a.createElement("div",null,h.a.createElement("p",null,"User: ",t,", role: ",n)),h.a.createElement("h1",null,"Our Coding Club!"),h.a.createElement("table",{className:"myTable"},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",null,"Activity Name"),h.a.createElement("th",null,"Activity Date(s)"))),h.a.createElement("tbody",null,s)))},N=function(e){var t=Object(m.useState)({}),n=Object(y.a)(t,2),a=n[0],i=n[1],c=Object(m.useState)({}),o=Object(y.a)(c,2),u=o[0],s=o[1],E=function(){var t=Object(r.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={email:a,password:u},fetch("http://localhost:3051/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){if(t._id){var n=t.firstName+" "+t.lastName;e.action(t.role,"home",n)}else alert("incorrect email and password")})).catch((function(e){console.log("something went wrong")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(e,t){void 0!==e.target.value&&""!==e.target.value&&" "!==e.target.value&&("email"==t?i(e.target.value):s(e.target.value))};return h.a.createElement("div",null,h.a.createElement("main",null,h.a.createElement("form",null,h.a.createElement("label",null,"USER ID:"),h.a.createElement("input",{type:"text",onChange:function(e){d(e,"email")}}),h.a.createElement("label",null,"PASSWORD:"),h.a.createElement("input",{type:"password",onChange:function(e){d(e,"password")}})),h.a.createElement("button",{type:"submit",value:"Submit",onClick:function(e){E()}},"Submit")))};var k=function(){var e=h.a.createElement("form",{className:"myForm"},h.a.createElement("label",null,"NAME:"),h.a.createElement("input",{type:"text"}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("label",null,"EMAIL:"),h.a.createElement("input",{type:"email"}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("label",null,"PASSWORD:"),h.a.createElement("input",{type:"password"}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("label",null,"LEVEL:"),h.a.createElement("input",{type:"password"}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("label",null,"COMMENTS:"),h.a.createElement("input",{type:"password"}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("p",null,"Choose your level of expertise in gardening:"),h.a.createElement("select",{name:"Gardening",id:"Levels"},h.a.createElement("option",{value:"Beginer"},"Beginer"),h.a.createElement("option",{value:"Mid-Level"},"Mid-Level"),h.a.createElement("option",{value:"Expert"},"Expert"),h.a.createElement("option",{value:"Recreation"},"Recreation")),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("button",{type:"submit",value:"Submit"},"Submit"));return h.a.createElement("div",{className:"grid-item1"},e)},O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={addName:"",addDate:"",activities:[]},a.delActivity=a.delActivity.bind(Object(o.a)(a)),a.getActivity=a.getActivity.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"nameHandler",value:function(e){this.setState({addName:e.target.value})}},{key:"dateHandler",value:function(e){this.setState({addDate:e.target.value})}},{key:"getActivity",value:function(){var e=this;fetch(w().activities,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.length>0&&e.setState({activities:t[0]})})).catch((function(e){console.log("something went wrong")}))}},{key:"addActivity",value:function(){var e=this,t={name:this.state.addName,date:this.state.addDate};fetch(w().activities,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.getActivity()})).catch((function(e){console.log("something went wrong")}))}},{key:"componentDidMount",value:function(){this.getActivity()}},{key:"delActivity",value:function(e){var t=this;fetch(w().deleteActivities+e.name,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){t.getActivity()})).catch((function(e){console.log("something went wrong")}))}},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement("div",{className:"addActivityGrid"},h.a.createElement("table",{className:"activity-form"},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",null),h.a.createElement("th",null))),h.a.createElement("tbody",null,h.a.createElement("tr",null,h.a.createElement("td",null,"              ",h.a.createElement("label",null,"Name")),h.a.createElement("td",null,"                        ",h.a.createElement("input",{type:"text",onChange:this.nameHandler.bind(this),value:this.state.addName}))),h.a.createElement("tr",null,h.a.createElement("td",null,"                        ",h.a.createElement("label",null,"Date(s)")),h.a.createElement("td",null,h.a.createElement("input",{type:"text",value:this.state.addDate,onChange:this.dateHandler.bind(this)}))),h.a.createElement("tr",null,h.a.createElement("td",null,"                      "),h.a.createElement("td",null,h.a.createElement("button",{onClick:this.addActivity.bind(this)},"Add")))))),h.a.createElement("table",null,h.a.createElement("tr",null,h.a.createElement("th",null),h.a.createElement("th",null,"Name "),h.a.createElement("th",null,"Date(s)")),this.state.activities.map((function(t,n){return h.a.createElement("tr",{key:"act"+n},h.a.createElement("td",null,h.a.createElement("button",{onClick:e.delActivity.bind(e,t)},"Delete")),h.a.createElement("td",null,t.name),h.a.createElement("td",null,t.date))}))),h.a.createElement("footer",null,"\xa9 2020 GREEN-HANDS-CLUB"))}}]),n}(h.a.Component),S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).logout=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:3051/logout",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a.buttonsfunction("login")})).catch((function(e){console.log("something went wrong")}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={role:"guest",show:"home",user:"guest"},a.buttonsfunction=a.buttonsfunction.bind(Object(o.a)(a)),a.changeState=a.changeState.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"showData",value:function(){return"home"==this.state.show?h.a.createElement(b,{user:this.state.user,role:this.state.role}):"activities"==this.state.show?h.a.createElement(A,{events:p,user:this.state.user,role:this.state.role}):"membership"==this.state.show?h.a.createElement(k,null):"login"==this.state.show?h.a.createElement(N,{action:this.changeState}):"AdminActivities"==this.state.show?h.a.createElement(O,null):void 0}},{key:"buttonsfunction",value:function(e){"logout"==e?this.logout():this.setState({show:e})}},{key:"changeState",value:function(e,t,n){this.setState({role:e,show:t,user:n})}},{key:"render",value:function(){return h.a.createElement("div",null,"login"!=this.state.show?h.a.createElement(v,{role:this.state.role,show:this.state.show,buttonsfunction:this.buttonsfunction}):"",this.showData())}}]),n}(h.a.Component);d.a.render(h.a.createElement(S,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a904ea55.chunk.js.map
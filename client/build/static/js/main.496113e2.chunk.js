(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a.p+"static/media/square.fc92835d.png"},216:function(e,t,a){e.exports=a(510)},477:function(e,t,a){},479:function(e,t,a){},500:function(e,t,a){},502:function(e,t,a){},510:function(e,t,a){"use strict";a.r(t);a(217);var l=a(0),n=a.n(l),r=a(212),c=a.n(r),m=a(36),o=a(37),s=a(40),i=a(38),u=a(39),E=a(213),p=a(214),d=a.n(p),h=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(E.ReactSlackChat,{botName:"testbot1",apiToken:"eG94Yi0zNDIzMTMyMTE0MDgtNDQ5OTQwMDg2OTk0LWVPcTIxdHNUZEZTZGxiMDlXd0pIUHdlRw==",channels:[{name:"p3_slack"},{name:"p3t2",id:"GD8A395K4"}],helpText:"Slack \ud83c\udf0e",themeColor:"#007bff",userImage:d.a})}}]),t}(l.Component),g=(a(477),a(512)),f=a(514),b=a(513),N=function(e){var t=e.size,a=e.children;return n.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},y=function(e){var t=e.fluid,a=e.children;return n.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},v=function(e){var t=e.fluid,a=e.children;return n.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},x=(a(479),function(e){var t=e.children;return n.a.createElement("div",{style:{height:100,clear:"both",paddingTop:50,textAlign:"center",border:"10px",borderColor:"#fff"},className:"jumbotron jumbotron-fluid bg-transparent text-white border rounded-corner text-center"},t)}),w=function(){return n.a.createElement(y,{fluid:!0},n.a.createElement(v,null,n.a.createElement(N,{size:"md-12"},n.a.createElement(x,null,n.a.createElement("h1",null,"404 Page Not Found"),n.a.createElement("h1",null,n.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},C=a(511),F=a(72),O=a.n(F),I={getHotels:function(){return O.a.get("/api/hotels")},getHotel:function(e){return O.a.get("/api/hotels/"+e)},deleteHotel:function(e){return O.a.delete("/api/hotels/"+e)},saveHotel:function(e){return console.log("1"),O.a.post("/api/hotels",e)},runHotelIO:function(){return O.a.get("/api/trivago")}},j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={hotel:{}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.getHotel(this.props.match.params.marsha).then(function(t){return e.setState({hotel:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return n.a.createElement(y,{fluid:!0},n.a.createElement(v,null,n.a.createElement(N,{size:"md-12"},n.a.createElement(x,null,n.a.createElement("h1",null,this.state.hotel.marsha)))),n.a.createElement(v,null,["synopsis","IO","title","address","city","state","zip","phone","date"].map(function(t){return n.a.createElement(N,{size:"md-5 md-offset-1",key:t},n.a.createElement("article",null,n.a.createElement("h1",null,t),n.a.createElement("p",null,e.state.hotel[t])))})),n.a.createElement(v,null,n.a.createElement(N,{size:"md-5 md-offset-1"},n.a.createElement("img",{src:this.state.hotel.photo,alt:"hotel"}))),n.a.createElement(v,null,n.a.createElement(N,{size:"md-2"},n.a.createElement(C.a,{to:"/"},"\u2190 Back to Main Page"))))}}]),t}(l.Component),k=a(144),S=(a(500),function(e){return n.a.createElement("svg",Object.assign({className:"delete-btn",width:"20",height:"20",viewBox:"0 0 1024 1024"},e),n.a.createElement("path",{d:"M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"}))}),Y=(a(502),function(e){var t=e.children;return n.a.createElement("div",{className:"list-overflow-container"},n.a.createElement("ul",{className:"list-group"},t))}),R=function(e){return n.a.createElement("li",{className:"list-group-item"},e.children)},z=function(e){return n.a.createElement("div",{className:"form-group"},n.a.createElement("input",Object.assign({className:"form-control"},e)))},H=function(e){return n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",Object.assign({className:"form-control",rows:"5"},e)))},M=function(e){return n.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-primary"}),e.children)},B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={hotels:[],marsha:"",IO:"",description:""},a.loadHotels=function(){console.log(I),I.getHotels().then(function(e){return a.setState({hotels:e.data,marsha:"",IO:"",description:""})}).catch(function(e){return console.log(e)})},a.deleteHotel=function(e){I.deleteHotel(e).then(function(e){return a.loadHotels()}).catch(function(e){return console.log(e)})},a.runHotelIO=function(e){I.runHotelIO().catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,l=t.name,n=t.value;a.setState(Object(k.a)({},l,n))},a.handlelogininput=function(e){var t=e.target,l=t.eid,n=t.password;a.setState(Object(k.a)({},l,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.marsha&&a.state.IO&&I.saveHotel({marsha:a.state.marsha,IO:a.state.IO,description:a.state.description}).then(function(e){return a.loadHotels()}).catch(function(e){return console.log(e)})},a.handleGoSubmit=function(e){return e.preventDefault&&e.preventDefault(),document.getElementById("automation1").checked||(document.getElementById("automation2").checked?window.open("http://www.bing.com"):document.getElementById("automation3").checked&&window.open("http://www.yahoo.com")),!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadHotels()}},{key:"render",value:function(){var e=this;return n.a.createElement(y,{fluid:!0},n.a.createElement(v,null,n.a.createElement(N,{size:"md-3"},n.a.createElement("div",{className:"form-group"}," "),n.a.createElement(x,null,n.a.createElement("h1",null,"Add Hotel")),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement(z,{type:"text",value:this.state.marsha,onChange:this.handleInputChange,name:"marsha",placeholder:"Marsha (required)"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("p",null,"IO (Yes or No) "),n.a.createElement("select",{value:this.state.IO,onChange:this.handleInputChange,name:"IO",type:"switch"},n.a.createElement("option",{defaultValue:" "}," "),n.a.createElement("option",{value:"Yes"},"Yes"),n.a.createElement("option",{value:"No"},"No")),n.a.createElement("div",{className:"form-group"}," "),n.a.createElement(H,{type:"text",value:this.state.description,onChange:this.handleInputChange,name:"description",placeholder:"Description (Optional)"})),n.a.createElement(M,{disabled:!(this.state.IO&&this.state.marsha),onClick:this.handleFormSubmit,type:"button"},"Submit Hotel")))),n.a.createElement(N,{size:"md-4"},n.a.createElement("div",{className:"form-group"}," "),n.a.createElement(N,{size:"md-6"},n.a.createElement(x,null,n.a.createElement("h1",null,"Hotels")),this.state.hotels.length?n.a.createElement(Y,{class:"list-group-item list-group-item-dark"},this.state.hotels.map(function(t){return n.a.createElement(R,{key:t._id},n.a.createElement(C.a,{to:"/hotels/"+t._id},n.a.createElement("strong",null,t.marsha)),n.a.createElement(S,{onClick:function(){return e.deleteHotel(t._id)}}))})):n.a.createElement("h3",null,"No Results to Display"))),n.a.createElement(N,{size:"md-3"},n.a.createElement("div",{className:"form-group"}," "),n.a.createElement(x,null,n.a.createElement("h1",null,"Run Me")),n.a.createElement("div",{class:"well"},n.a.createElement("form",{action:"",size:"col-3"},n.a.createElement("input",{type:"radio",id:"automation1",name:"script",value:"www.google.com"}),n.a.createElement("label",{htmlFor:"IOClicker"},"IO Clicker"),n.a.createElement("br",null),n.a.createElement("input",{type:"radio",id:"automation2",name:"script",value:"www.bing.com"}),n.a.createElement("label",{htmlFor:"GPOClicker"},"GPO Clicker"),n.a.createElement("br",null),n.a.createElement("input",{type:"radio",id:"automation3",name:"script",value:"www.yahoo.com"}),n.a.createElement("label",{htmlFor:"invCheck"},"INV Check"),n.a.createElement("div",{className:"form-group"},n.a.createElement(M,{className:"btn btn-success",onClick:this.handleGoSubmit}," Go"))),n.a.createElement("row",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("form",{size:"md-3"},n.a.createElement("input",{type:"text",value:this.state.username,name:"eid",placeholder:"EID"}),n.a.createElement("div",{className:"form-group"}),n.a.createElement("input",{type:"password",id:"password",name:"password","data-toggle":"password",value:this.state.password}))))))))}}]),t}(l.Component),D=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Automation Station"))},A=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(D,null),n.a.createElement(g.a,null,n.a.createElement(f.a,null,n.a.createElement(b.a,{exact:!0,path:"/",component:B}),n.a.createElement(b.a,{exact:!0,path:"/hotels",component:B}),n.a.createElement(b.a,{exact:!0,path:"/hotels/:marsha",component:j}),n.a.createElement(b.a,{component:w}))))}}]),t}(l.Component),T=a(80),P=a(2),G=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.Row,{className:"align-items-center mt-5"},n.a.createElement("h4",{className:"grey-text",style:{margin:"0px"}},n.a.createElement("strong",null,e.title)),n.a.createElement("a",{className:"border grey-text px-2 border-light rounded ml-2",target:"_blank",href:e.href+"/?utm_source=DemoApp&utm_medium=MDBReactPro",rel:"noopener noreferrer"},n.a.createElement(P.Fa,{icon:"graduation-cap",className:"mr-2"}),"Docs")),n.a.createElement("hr",{className:"mb-5"}))},L=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(T.a)(Object(T.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return n.a.createElement(P.Container,{className:"mt-5"},n.a.createElement(G,{title:"Forms",href:"https://mdbootstrap.com/react/components/forms/"}),n.a.createElement(P.Row,null,n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h5 text-center mb-4"},"Sign in"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(P.Input,{label:"Type your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Type your password",icon:"lock",group:!0,type:"password",validate:!0})),n.a.createElement("div",{className:"text-center"},n.a.createElement(P.Button,null,"Login")))),n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center mb-4"},"Sign in"),n.a.createElement("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{type:"email",id:"defaultFormLoginEmailEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),n.a.createElement("input",{type:"password",id:"defaultFormLoginPasswordEx",className:"form-control"}),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("button",{className:"btn btn-indigo",type:"submit"},"Login"))))),n.a.createElement("hr",{className:"my-5"}),n.a.createElement("h2",{className:"mb-5"},"Form register"),n.a.createElement(P.Row,{className:"mt-5"},n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h5 text-center mb-4"},"Sign up"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(P.Input,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0})),n.a.createElement("div",{className:"text-center"},n.a.createElement(P.Button,{color:"primary"},"Register")))),n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center mb-4"},"Sign up"),n.a.createElement("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text"},"Your name"),n.a.createElement("input",{type:"text",id:"defaultFormRegisterNameEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormRegisterEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{type:"email",id:"defaultFormRegisterEmailEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormRegisterConfirmEx",className:"grey-text"},"Confirm your email"),n.a.createElement("input",{type:"email",id:"defaultFormRegisterConfirmEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"grey-text"},"Your password"),n.a.createElement("input",{type:"password",id:"defaultFormRegisterPasswordEx",className:"form-control"}),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("button",{className:"btn btn-unique",type:"submit"},"Register"))))),n.a.createElement("hr",{className:"my-5"}),n.a.createElement("h2",{className:"mb-5"},"Form subscription"),n.a.createElement(P.Row,{className:"mt-5"},n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h5 text-center mb-4"},"Subscribe"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(P.Input,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"})),n.a.createElement("div",{className:"text-center"},n.a.createElement(P.Button,{outline:!0,color:"info"},"Send ",n.a.createElement(P.Fa,{icon:"paper-plane-o",className:"ml-1"}))))),n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center mb-4"},"Subscribe"),n.a.createElement("label",{htmlFor:"defaultFormSubscriptionNameEx",className:"grey-text"},"Your name"),n.a.createElement("input",{type:"text",id:"defaultFormSubscriptionNameEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormSubscriptionEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{type:"email",id:"defaultFormSubscriptionEmailEx",className:"form-control"}),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("button",{className:"btn btn-outline-purple",type:"submit"},"Send",n.a.createElement("i",{className:"fa fa-paper-plane-o ml-2"})))))),n.a.createElement("hr",{className:"my-5"}),n.a.createElement("h2",{className:"mb-5"},"Form contact"),n.a.createElement(P.Row,{className:"my-5"},n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h5 text-center mb-4"},"Write to us"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(P.Input,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Subject",icon:"tag",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{type:"textarea",rows:"2",label:"Your message",icon:"pencil"})),n.a.createElement("div",{className:"text-center"},n.a.createElement(P.Button,{outline:!0,color:"secondary"},"Send ",n.a.createElement(P.Fa,{icon:"paper-plane-o",className:"ml-1"}))))),n.a.createElement(P.Col,{md:"6"},n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center mb-4"},"Write to us"),n.a.createElement("label",{htmlFor:"defaultFormContactNameEx",className:"grey-text"},"Your name"),n.a.createElement("input",{type:"text",id:"defaultFormContactNameEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{type:"email",id:"defaultFormContactEmailEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactSubjectEx",className:"grey-text"},"Subject"),n.a.createElement("input",{type:"text",id:"defaultFormContactSubjectEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactMessageEx",className:"grey-text"},"Your message"),n.a.createElement("textarea",{type:"text",id:"defaultFormContactMessageEx",className:"form-control",rows:"3"}),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("button",{className:"btn btn-outline-warning",type:"submit"},"Send",n.a.createElement("i",{className:"fa fa-paper-plane-o ml-2"})))))),n.a.createElement("hr",{className:"my-5"}),n.a.createElement("h2",{className:"mb-5"},"A form within a card"),n.a.createElement(P.Row,null,n.a.createElement(P.Col,{md:"6"},n.a.createElement(P.Card,null,n.a.createElement(P.CardBody,null,n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center py-4"},"Sign up"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(P.Input,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0})),n.a.createElement("div",{className:"text-center py-4 mt-3"},n.a.createElement(P.Button,{color:"cyan",type:"submit"},"Register")))))),n.a.createElement(P.Col,{md:"6"},n.a.createElement("div",{className:"card mx-xl-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",null,n.a.createElement("p",{className:"h4 text-center py-4"},"Subscribe"),n.a.createElement("label",{htmlFor:"defaultFormCardNameEx",className:"grey-text font-weight-light"},"Your name"),n.a.createElement("input",{type:"text",id:"defaultFormCardNameEx",className:"form-control"}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormCardEmailEx",className:"grey-text font-weight-light"},"Your email"),n.a.createElement("input",{type:"email",id:"defaultFormCardEmailEx",className:"form-control"}),n.a.createElement("div",{className:"text-center py-4 mt-3"},n.a.createElement("button",{className:"btn btn-outline-purple",type:"submit"},"Send",n.a.createElement("i",{className:"fa fa-paper-plane-o ml-2"})))))))),n.a.createElement("hr",{className:"my-5"}),n.a.createElement("h2",{className:"mb-5"},"A form within a modal"),n.a.createElement(P.Row,null,n.a.createElement(P.Col,{size:"12",className:"text-center mb-5"},n.a.createElement(P.Button,{color:"info",onClick:this.toggle},"Launch modal contact form"),n.a.createElement(P.Modal,{isOpen:this.state.modal,toggle:this.toggle,className:"cascading-modal"},n.a.createElement("div",{className:"modal-header primary-color white-text"},n.a.createElement("h4",{className:"title"},n.a.createElement(P.Fa,{className:"fa fa-pencil"})," Contact form"),n.a.createElement("button",{type:"button",className:"close",onClick:this.toggle},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement(P.ModalBody,{className:"grey-text"},n.a.createElement(P.Input,{size:"sm",label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{size:"sm",label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{size:"sm",label:"Subject",icon:"tag",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),n.a.createElement(P.Input,{size:"sm",type:"textarea",rows:"2",label:"Your message",icon:"pencil"})),n.a.createElement(P.ModalFooter,null,n.a.createElement(P.Button,{color:"secondary",onClick:this.toggle},"Close")," ",n.a.createElement(P.Button,{color:"primary"},"Save changes"))))))}}]),t}(n.a.Component),_=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"}),n.a.createElement("p",{className:"App-intro"}),n.a.createElement("div",{className:"App"},n.a.createElement(A,null)),n.a.createElement(h,null),n.a.createElement(L,null))};c.a.render(n.a.createElement(_,null),document.getElementById("root"))}},[[216,2,1]]]);
//# sourceMappingURL=main.496113e2.chunk.js.map
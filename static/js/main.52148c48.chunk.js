(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/victor-resume.819d5eb0.pdf"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/modular-led.cbb9940f.png"},function(e,t,a){e.exports=a.p+"static/media/owi-arm-model.6f746436.png"},function(e,t,a){e.exports=a.p+"static/media/owi-arm-sorting.558e464d.png"},function(e,t,a){e.exports=a.p+"static/media/rpi-dashcam.519914eb.png"},function(e,t,a){e.exports=a.p+"static/media/modular-led.3147bf6e.mp4"},function(e,t,a){e.exports=a.p+"static/media/robotics-project.8edf862a.mp4"},function(e,t,a){e.exports=a.p+"static/media/owi-arm-model.27ca1316.mp4"},function(e,t,a){e.exports=a.p+"static/media/rpi-dashcam.13b64b86.mp4"},,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(20),r=a.n(i),l=(a(35),a(10)),s=a(1),c=(a(36),Object(n.memo)((function(){return o.a.createElement("div",{className:"home-container"},o.a.createElement("h1",null,"Victor Lopez"),o.a.createElement("h2",null,"Embedded Software Developer"))})));c.displayName="Home";var m=c,p=a(16),d=a(17),u=(a(37),Object(n.memo)((function(e){var t=e.show?"display-block":"display-none";return o.a.createElement("div",{className:"modal "+t},o.a.createElement("div",{className:"overlay",onClick:function(t){e.hideModal(e.id),t.stopPropagation(),t.preventDefault()}}),o.a.createElement("section",{className:"modal-main "+t},o.a.createElement("div",{className:"video-container",style:{display:e.show?"block":"none"}},o.a.createElement("video",{controls:!0},o.a.createElement("source",{src:e.project.videolink,type:"video/mp4"}))),o.a.createElement("div",{className:"project-information"},o.a.createElement("h1",null,e.project.title),o.a.createElement("div",{className:"about-project"},o.a.createElement("div",{className:"tech-container"},e.project.technologies.map((function(e,t){return o.a.createElement("div",{key:"tech"+t,className:"tech-obj"},e)}))),e.project.description.map((function(e){return o.a.createElement("p",{key:e},e)}))),o.a.createElement("div",{className:"github-links"},e.project.links.map((function(t){return o.a.createElement("a",{key:t.link,href:t.link,style:{display:e.show?"block":"none"}},t.label)}))))))}),(function(e,t){return e.show===t.show})));u.displayName="ProjectModal";var h=u,f=(a(38),a(21)),b=a.n(f),g=a(22),v=a.n(g),E=a(23),y=a.n(E),k=a(24),S=a.n(k),w=a(25),x=a.n(w),N=a(26),j=a.n(N),P=a(27),C=a.n(P),z=a(28),A=a.n(z),D=[{title:"WS2812 Modular Display",description:["An embedded application that controls a large matrix of up to 1024 WS2812 leds.","The project uses a ESP32 microcontroller to drive an led display and runs a websocket server that receives data from a phone application."," The display can be updated real-time and a sequence of frames can be set to loop through. The ESP32 interfaces with an SD card breakout board to save frame data and store default sequences to display on start up."],img:b.a,videolink:x.a,technologies:["Expo CLI","React Native","ESP32","C++","WebSockets"],links:[{label:"Back End Source",link:"https://github.com/vmlopezr/modular-ws2812-display-esp32"},{label:"Front End Source",link:"https://github.com/vmlopezr/modular-ws2812-display-app"},{label:"View Expo",link:"https://exp.host/@vmlopez336/WS2812DisplayESP32"}]},{title:"Raspberry Pi Dashcam",description:["A web application controlling UVC compatible USB webcams on a Raspberry Pi. A RESTful Node.js server runs a python program that records to the file system and streams live feed to the application.","The application is served from a Raspberry Pi that is configured as a wireless Access Point. This application is available as a Docker image."],img:S.a,videolink:A.a,technologies:["Docker","Angular","Ionic","Node","RESTful","SQLite","HTML5","SCSS","Python3","GStreamer"],links:[{label:"Back End Source",link:"https://github.com/vmlopezr/rpi-dashcam"},{label:"Front End Source",link:"https://github.com/vmlopezr/rpi-dashcam-front-end"},{label:"View Demo",link:"https://vmlopezr.github.io/rpi-dashcam-front-end"}]},{title:"OWI Robot Arm Model",description:["A three.js model of a OWI Robot Arm. Written to help visualize forward kinematics. The model allows to move the arm based on its joint angles. Different positions can be set to animate the arm moving through the positions."],img:v.a,videolink:C.a,technologies:["React.js","three.js","SCSS","Docker"],links:[{label:"View Source",link:"https://github.com/vmlopezr/owi-arm-model"},{label:"View Demo",link:"https://vmlopezr.github.io/owi-arm-model"}]},{title:"OWI Robot Arm Color Sorting",description:["A robotics project controlling a OWI Robot Arm to place colored objects based on the position of QR codes."," A STM32F4 microcontroller is used to drive small DC motors. It receives position data via Direct Memory Access on its USART peripheral from a the OpenCV python program accessing a USB webcam."],img:y.a,videolink:j.a,technologies:["Python3","OpenCV","STM32","DMA","USART"],links:[{label:"View Source",link:"https://github.com/vmlopezr/owi-arm-model"}]}],I=[!1,!1,!1,!1],T=Object(n.memo)((function(){var e=o.a.useState([].concat(I)),t=Object(d.a)(e,2),a=t[0],n=t[1],i=o.a.useState(!1),r=Object(d.a)(i,2),l=r[0],s=r[1],c=function(e){return function(t){var o=Object(p.a)(a);o[e]=!0,n(o),s(!0),t.currentTarget.blur()}},m=function(e){var t=Object(p.a)(a);t[e]=!1,n(t),s(!1)};return o.a.createElement("div",{className:"projectsContainer"},D.map((function(e,t){return o.a.createElement("button",{type:"button",className:"ModalItem",key:e.title,onClick:c(t),tabIndex:0,style:{pointerEvents:l?"none":"auto"}},o.a.createElement("div",{"data-content":e.title,className:"button-content",tabIndex:-1},o.a.createElement("img",{src:e.img,alt:""}),o.a.createElement(h,{id:t,project:e,show:a[t],hideModal:m})))})))}));T.displayName="Projects";var M=T,R=(a(39),[{title:"Controls Engineering Co-op",dates:"August 2018 - May 2019",location:"Tulsa, Oklahoma",company:"Summit ESP, A Halliburton Company",bullets:["Developed a kivy python front-end application for test, validation and logging of up to 32 pressure transducers reducing test completion time by 90% down to 1 hour. (Python, SQLite)","Created a a raspberry pi modbus server to store live pressure transducer data retrieved via SPI peripheral. (Python)","Constructed a batch script that configures ethernet routers via SSH protocol to establish ethernet communications in multi-drive well-sites. (Batch Scriping, Teraterm)","Built ladder logic on an Idec FC6A+ PLC to enable ModbusTCP in Summit Products for use in ethernet networks. (Ladder Logic)","Redesigned the existing LabVIEW Product test to replace serial communications with ModbusTCP. Thus allowing testing of the new company instrument and data logging to SQLite databases. (LabView, SQLite)"]},{title:"Electrical Engineering Co-op",dates:"May 2019 - August 2019",location:"Houston, Texas",company:"Lyondellbasell, Houston Refinery",bullets:["Developed excel dashboard depicting the site electrical subs system, for capital and long term planning.","Discovered two critical 12KV motors are susceptible to insulation failure by identifying increasing negative polarity trend in Partial Discharge monitoring data."]},{title:"Instrumentation & Electrical Engineering Co-op",dates:"May 2018 - August 2018",location:"Clinton, Iowa",company:"Lyondellbasell, Clinton Complex",bullets:["Identified relieving air regulators in condensate pot service as failure points during low ambient temperatures in winter. Established project to replace relieving regulators in similar service with non-relieving versions.","Discovered 38 pressure instruments on the Plant Deluge System have no preventative maintenance. Partnered with local fire safety service company to establish function testing procedure to include in the semiannual testing. "]},{title:"Instrumentation & Electrical Engineering Co-op",dates:"Jan 2017 - August 2017",location:"Pasadena, Texas",company:"Lyondellbasell: Bayport Polymers",bullets:["Identified critical interlocks and designed functional testing procedures to validate the Safety Instrumented System of the plant. ","Collaborated with engineers, operations and vendors in order to certify instrument specifications, set up spares for essential instruments, and updated the Bill of Materials for the associated units."]}]),L=Object(n.memo)((function(){return o.a.createElement("div",null,R.map((function(e,t){return o.a.createElement("div",{className:"internship",key:e.dates},o.a.createElement("h1",{className:"position"},e.title),o.a.createElement("h2",{className:"company"},e.company),o.a.createElement("div",{className:"position-info"},o.a.createElement("h3",null,e.location),o.a.createElement("h3",null,e.dates)),o.a.createElement("ul",null,e.bullets.map((function(e){return o.a.createElement("li",{key:e},e)}))))})))}));L.displayName="ResumePage";var O=L,V=a(6),W=a(13),B=a.n(W),H=(a(40),Object(n.memo)((function(){return o.a.createElement(l.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("ul",{className:"menu"},o.a.createElement("li",null,o.a.createElement(l.b,{exact:!0,to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/projects"},"Projects")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/resume"},"Experience"))),o.a.createElement("div",{className:"media-pc"},o.a.createElement("a",{className:"external-link",href:B.a},o.a.createElement(V.d,{color:"#fff",size:"50px",style:{padding:"10px"}}),"Resume"),o.a.createElement("a",{className:"external-link",href:"https://github.com/vmlopezr"},o.a.createElement(V.b,{color:"#fff",size:"50px",style:{padding:"10px"}}),"Github"),o.a.createElement("a",{className:"external-link",href:"https://www.linkedin.com/in/victorlopezrodriguez/"},o.a.createElement(V.c,{color:"#fff",size:"50px",style:{padding:"10px"}}),"LinkedIn"),o.a.createElement("a",{className:"external-link",href:"http://github.com/vmlopezr/Portfolio"},o.a.createElement(V.a,{color:"#fff",size:"50px",style:{padding:"10px"}}),"Source Code"))),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"content"},o.a.createElement(s.a,{exact:!0,path:"/",component:m}),o.a.createElement(s.a,{path:"/projects",component:M}),o.a.createElement(s.a,{path:"/resume",component:O})),o.a.createElement("footer",{className:"mobilefooter"},o.a.createElement("a",{href:"https://github.com/vmlopezr"},o.a.createElement(V.b,{color:"#fff",size:"50px",style:{padding:"10px"}})),o.a.createElement("a",{href:"https://www.linkedin.com/in/victorlopezrodriguez/"},o.a.createElement(V.c,{color:"#fff",size:"50px",style:{padding:"10px"}})),o.a.createElement("a",{href:B.a},o.a.createElement(V.d,{color:"#fff",size:"50px",style:{padding:"10px"}}),"Resume"),o.a.createElement("a",{href:"http://github.com/vmlopezr/Portfolio"},o.a.createElement(V.a,{color:"#fff",size:"50px",style:{padding:"10px"}}),"Source Code")))))})));H.displayName="Main";var Q=H;r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null)),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.52148c48.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,t){e.exports=t(69)},69:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(20),o=t.n(i),l=t(1),s=[{name:"React Hooks: Last FM Music Search",link:"https://react-music-search.netlify.com/",description:"React app that calls Last FM's API and allows users to search for album data.",imageUrl:"./projectImages/react-music-search.png"},{name:"News Today: Front End",link:"https://news-today-ben-marley.herokuapp.com/",description:"Final solo Northcoders project - a Reddit clone, built with React and vanilla css.",imageUrl:"./projectImages/news-today-fe.png"},{name:"News Today: Back End",link:"https://ben-nc-news.herokuapp.com/API",description:"RESTful API built with Node, Express, MongoDB and Mongoose.",imageUrl:"./projectImages/news-today-be.png"},{name:"CreditWise",link:"https://github.com/bnmrly/project-game-FE",description:"Final group project at Northcoders - a Financial Education Progressive Web App game. Built with Node, React, Redux and Firebase.",imageUrl:"./projectImages/creditWise.png"},{name:"Google Books API Data Visualisation",link:"https://tranquil-hollows-48024.herokuapp.com/",description:"React app that calls the Google Books API to retrieve book data.",imageUrl:"./projectImages/google-books-api.png"},{name:"Street Support Network News Site",link:"https://news.streetsupport.net",description:"WordPress site for the Manchester homelessness start up. Built with Sass, HTML5 and PHP.",imageUrl:"./projectImages/street-support-project.png"},{name:"Illustrator's website",link:"http://jimnewcombe.co.uk",description:"Responsive, custom WordPress site for the London based artist, Jim Newcombe",imageUrl:"./projectImages/jim-newcombe-project.png"}],c=t(21);function m(){var e=Object(c.a)(["\n\n@import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,600&display=swap');\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n}\n\nh1 {\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-weight: 200;\n  text-transform: uppercase;\n}\n\na {\n  text-decoration: none;\n  font-weight: 600;\n  color: ",";\n}\n\na:hover {\n  color: ",";\n}\n\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\n\nul, p {\n  line-height: ",";\n}\n\n@media (min-width: 985px) {\n  ul, p {\n    line-height: ",";\n    }\n\n    body {\n      font-size: ",";\n    }\n}\n"]);return m=function(){return e},e}var d=Object(l.createGlobalStyle)(m(),function(e){return e.theme.dimensions.smallBodyFontSize},function(e){return e.theme.color.primaryFontColor},function(e){return e.theme.color.siteBackground},function(e){return e.theme.color.link},function(e){return e.theme.color.linkHover},function(e){return e.theme.dimensions.smallLineHeight},function(e){return e.theme.dimensions.largeLineHeight},function(e){return e.theme.dimensions.largeBodyFontSize}),u={color:{siteBackground:"#FDF9F8",primaryFont:"#333",link:"#b00090",linkHover:"#C57EBC",border:"#99ead4"},dimensions:{smallBodyFontSize:"14px",largeBodyFontSize:"16px",smallLineHeight:"20px",largeLineHeight:"22px",iconHeight:"40px",letterSpacingOverride:"0.2rem",appWrapperSpacingY:"1rem",appWrapperSpacingX:"1.5rem",appWrapperSpacingYLarge:"2rem",appWrapperSpacingXLarge:"3rem",introParagraphPadding:"1rem",defaultBorderRadius:"0.5rem",defaultSectionSpacing:"2rem",smallSpacing:"1rem",defaultSectionMarginY:"5rem",lastSectionMarginY:"2rem",copyrightFontSize:"0.7rem",buttonBorderRadius:"50px",buttonHeight:"2.5rem",inspirationContainerMargin:"0.25rem"},layout:{smallWidth:"480px",mediumWidth:"599px",largeWidth:"985px",xLargeWidth:"1180px"}},p=t(24),h=l.default.header.withConfig({displayName:"Header",componentId:"sc-26e9sz-0"})(["background-color:",";display:flex;justify-content:space-between;margin-bottom:",";"],function(e){return e.theme.backgroundColor},function(e){return e.theme.dimensions.defaultSectionSpacing}),g=l.default.div.withConfig({displayName:"Header__HeaderAboutMeWrapper",componentId:"sc-26e9sz-1"})(["display:flex;flex-direction:column;h1{font-weight:600;margin:0;a{color:",";}a:hover{color:",";}}h2{font-size:1em;letter-spacing:",";}"],function(e){return e.theme.color.primaryFont},function(e){return e.theme.color.linkHover},function(e){return e.theme.dimensions.letterSpacingOverride}),f=l.default.div.withConfig({displayName:"Header__HeaderLinksWrapper",componentId:"sc-26e9sz-2"})(["display:flex;div:first-of-type{margin-right:0.5rem;}img{height:",";}"],function(e){return e.theme.dimensions.iconHeight});var b=function(){return a.a.createElement(h,{className:"header"},a.a.createElement(g,null,a.a.createElement("div",{className:"header-about-me-wrapper__heading"},a.a.createElement("h1",null,a.a.createElement("a",{href:"/"},"Ben Marley"))),a.a.createElement("div",null,a.a.createElement("h2",{className:"header-about-me-wrapper__sub-heading"},"Front End Developer"))),a.a.createElement(f,null,a.a.createElement("div",{className:"header-links__link-container"},a.a.createElement("a",{className:"header__link",href:"https://github.com/bnmrly",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"header_link__image",src:"./github-logo.png",alt:"github logo"}))),a.a.createElement("div",{className:"header-links__link-container"},a.a.createElement("a",{className:"header__link",href:"https://www.linkedin.com/in/benmarley/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"header_link__image",src:"./linkedin-logo.png",alt:"linkedin logo"})))))},w=t(29),y=t(5),k=t(3),v=t.n(k),E=t(6),S=t(25),_=t(26),x=t(30),I=t(27),C=t(33),N=t(28),j=t.n(N),M="https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("d566a1102ca30d06a46cfa26cd386e7b","&photoset_id=72157709722406487&user_id=7631378@N04&format=json&nojsoncallback=1"),W=function(){var e=Object(E.a)(v.a.mark(function e(){var n,t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(M));case 3:return n=e.sent,t=n.data.photoset.photo,r=t.map(function(e){return"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_q.jpg")}),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),P=l.default.section.withConfig({displayName:"Inspiration__InspirationSection",componentId:"sc-1isxvrv-0"})(["border:2px solid ",";border-radius:",";padding:",";margin-bottom:",";width:100%;h1{margin-top:0;}"],function(e){return e.theme.color.border},function(e){return e.theme.dimensions.defaultBorderRadius},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.lastSectionMarginY}),F=l.default.div.withConfig({displayName:"Inspiration__InspirationContainer",componentId:"sc-1isxvrv-1"})(["margin-top:3rem;"]),B=l.default.div.withConfig({displayName:"Inspiration__InspirationPhotosContainer",componentId:"sc-1isxvrv-2"})(["overflow-y:scroll;width:100%;height:500px;display:flex;flex-wrap:wrap;justify-content:center;margin-top:3rem;margin-bottom:2rem;margin-left:auto;margin-right:auto;"]),L=l.default.div.withConfig({displayName:"Inspiration__PhotoContainer",componentId:"sc-1isxvrv-3"})(["margin:",";"],function(e){return e.theme.dimensions.inspirationContainerMargin}),H=l.default.button.withConfig({displayName:"Inspiration__ImageButton",componentId:"sc-1isxvrv-4"})(["background-color:transparent;height:",";padding-right:",";padding-left:",";border:1px solid ",";border-radius:",";cursor:pointer;:focus{outline:none;}:hover{border-color:",";}"],function(e){return e.theme.dimensions.buttonHeight},function(e){return e.theme.dimensions.smallSpacing},function(e){return e.theme.dimensions.smallSpacing},function(e){return e.theme.color.border},function(e){return e.theme.dimensions.buttonBorderRadius},function(e){return e.theme.color.linkHover}),R=l.default.div.withConfig({displayName:"Inspiration__LoadingMessage",componentId:"sc-1isxvrv-5"})(["margin-top:2rem;"]),A=function(e){function n(){var e,t;Object(S.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(x.a)(this,(e=Object(I.a)(n)).call.apply(e,[this].concat(a)))).state={loading:!1,photoUrls:[],buttonClicked:!1,buttonText:"Show Images"},t}return Object(C.a)(n,e),Object(_.a)(n,[{key:"handleShowPhotosClick",value:function(){var e=Object(E.a)(v.a.mark(function e(){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.buttonClicked){e.next=9;break}return this.setState({loading:!0}),e.next=5,W();case 5:n=e.sent,this.setState({loading:!1,photoUrls:n,buttonClicked:!0,buttonText:"Hide Images"}),e.next=10;break;case 9:this.setState({buttonClicked:!1,buttonText:"Show Images"});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state,t=n.loading,r=n.photoUrls,i=n.buttonClicked,o=n.buttonText;return a.a.createElement(P,null,a.a.createElement("h1",null,"Inspiration"),a.a.createElement("p",null,"Amongst other things, I'm inspired by 70s American Cinema, skateboarding, Modernist design, Italian red wine, Golden age hip hop, fell walking and my children."),a.a.createElement("p",null,"Please click below to view images of things that inspire me..."),a.a.createElement(F,null,a.a.createElement(H,{onClick:function(){e.handleShowPhotosClick()}},o),t&&a.a.createElement(R,null,"Loading..."),i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,r.map(function(e){return a.a.createElement(L,{key:Object(y.generate)()},a.a.createElement("img",{className:"inspiration-image",src:e,alt:"inspiration"}))})))))}}]),n}(r.Component),O=l.default.main.withConfig({displayName:"Main__MainWrapper",componentId:"sc-125u6n0-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),z=l.default.section.withConfig({displayName:"Main__MainAbout",componentId:"sc-125u6n0-1"})(["border:2px solid ",";border-radius:",";padding:",";margin-bottom:",";width:100%;@media screen and (min-width:","){width:40%;}h1{margin-top:0;}"],function(e){return e.theme.color.border},function(e){return e.theme.dimensions.defaultBorderRadius},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.defaultSectionMarginY},function(e){return e.theme.layout.largeWidth}),T=l.default.section.withConfig({displayName:"Main__MainSkills",componentId:"sc-125u6n0-2"})(["border:2px solid ",";border-radius:",";padding:",";margin-bottom:",";width:100%;@media screen and (min-width:","){width:40%;}h1{margin-top:0;}"],function(e){return e.theme.color.border},function(e){return e.theme.dimensions.defaultBorderRadius},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.defaultSectionMarginY},function(e){return e.theme.layout.largeWidth}),Y=l.default.li.withConfig({displayName:"Main__MainSkillsListItem",componentId:"sc-125u6n0-3"})(["margin-bottom:",";"],function(e){return e.theme.dimensions.smallSpacing}),D=l.default.section.withConfig({displayName:"Main__MainProjects",componentId:"sc-125u6n0-4"})(["width:100%;border:2px solid ",";border-radius:",";padding-top:",";padding-right:",";padding-bottom:0;padding-left:",";margin-bottom:",";h1{margin-top:0;}p{padding-bottom:",";}"],function(e){return e.theme.color.border},function(e){return e.theme.dimensions.defaultBorderRadius},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.defaultSectionMarginY},function(e){return e.theme.dimensions.introParagraphPadding}),U=l.default.ul.withConfig({displayName:"Main__ProjectsList",componentId:"sc-125u6n0-5"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin-left:-",";margin-right:-",";margin-bottom:0;"],function(e){return e.theme.dimensions.smallSpacing},function(e){return e.theme.dimensions.smallSpacing}),G=l.default.li.withConfig({displayName:"Main__ProjectsListItem",componentId:"sc-125u6n0-6"})(["border:1px solid ",";border-top-left-radius:",";border-top-right-radius:",";margin-bottom:",";margin-left:",";margin-right:",";width:100%;@media screen and (min-width:","){width:45%;flex-grow:1;}"],function(e){return e.theme.color.border},function(e){return e.theme.dimensions.defaultBorderRadius},function(e){return e.theme.dimensions.defaultBorderRadius},function(e){return e.theme.dimensions.defaultSectionSpacing},function(e){return e.theme.dimensions.smallSpacing},function(e){return e.theme.dimensions.smallSpacing},function(e){return e.theme.layout.largeWidth}),X=l.default.div.withConfig({displayName:"Main__ProjectContainer",componentId:"sc-125u6n0-7"})(["background-color:rgba(255,255,255,0.9);position:absolute;bottom:-1px;width:100%;border-top:1px solid ",";border-bottom:1px solid ",";height:12rem;@media screen and (min-width:","){height:8rem;}@media screen and (min-width:","){height:10rem;}"],function(e){return e.theme.color.border},function(e){return e.theme.color.border},function(e){return e.theme.layout.smallWidth},function(e){return e.theme.layout.mediumWidth}),J=l.default.div.withConfig({displayName:"Main__ProjectDescriptionContainer",componentId:"sc-125u6n0-8"})(["padding-left:",";padding-right:",";p{padding-bottom:0;}"],function(e){return e.theme.dimensions.smallSpacing},function(e){return e.theme.dimensions.smallSpacing});var q=function(e){var n=[];return Object.keys(e).forEach(function(t){n.push.apply(n,Object(w.a)(e[t]))}),a.a.createElement(O,null,a.a.createElement(z,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"I am a Manchester based Front End Developer and graduate from the"," ",a.a.createElement("a",{href:"https://northcoders.com/"},"Northcoders")," full-stack JavaScript bootcamp with experience of working in agency and start up environments."),a.a.createElement("p",null,"I have retrained in Front End Development, following a successful career within London\u2019s Contemporary Art industry, and am proficient in JavaScript, HTML5, and CSS, as well as having additional exposure to a range of front and back end technologies.")),a.a.createElement(T,null,a.a.createElement("h1",null,"Technical skills"),a.a.createElement("ul",null,a.a.createElement(Y,null,"React | ES6 | DOM manipulation"),a.a.createElement(Y,null,"Sass | CSS3 | Flexbox | Grid | BEM | HTML5"),a.a.createElement(Y,null,"Responsive design | Page speed optimisation"),a.a.createElement(Y,null,"Cross-browser testing | UAT | TDD with Chai and Mocha"),a.a.createElement(Y,null,"Node | Express | PHP | WordPress"),a.a.createElement(Y,null,"NPM | Yarn | Composer | Gulp"),a.a.createElement(Y,null,"Back End exposure: PostgreSQL | MongoDB | Umbraco | .NET"))),a.a.createElement(D,null,a.a.createElement("h1",null,"Projects"),a.a.createElement("p",null,"Recent projects I've worked on have been under NDA but here are some examples of my personal projects:"),a.a.createElement(U,null,n.map(function(e){return a.a.createElement(G,{key:Object(y.generate)(),style:{backgroundImage:"url(".concat(e.imageUrl,")"),backgroundPosition:"top",backgroundSize:"cover",height:"25rem",position:"relative"}},a.a.createElement(X,null,a.a.createElement(J,null,a.a.createElement("p",{className:"project__description"},a.a.createElement("a",{className:"project__link",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name)),a.a.createElement("p",{className:"project__description--p"},e.description))))}))),a.a.createElement(A,null))},Q=l.default.footer.withConfig({displayName:"Footer__SiteFooter",componentId:"dw7os7-0"})(["background-color:inherit;"]),V=l.default.ul.withConfig({displayName:"Footer__FooterList",componentId:"dw7os7-1"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;@media screen and (min-width:","){flex-direction:row;}li:first-of-type{font-size:",";}"],function(e){return e.theme.layout.mediumWidth},function(e){return e.theme.dimensions.copyrightFontSize});var $=function(){return a.a.createElement(Q,null,a.a.createElement(V,null,a.a.createElement("li",null,"Copyright \xa9 ",(new Date).getFullYear()," Ben Marley. All rights reserved."),a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:hello@benmarley.co.uk"},"hello@benmarley.co.uk"))))},K=l.default.div.withConfig({displayName:"App__AppWrapper",componentId:"sc-18clqhm-0"})(["padding-top:",";padding-right:",";padding-bottom:",";padding-left:",";margin-left:auto;margin-right:auto;max-width:",";@media screen and (min-width:","){padding-top:",";padding-right:",";padding-bottom:",";padding-left:",";}"],function(e){return e.theme.dimensions.appWrapperSpacingY},function(e){return e.theme.dimensions.appWrapperSpacingX},function(e){return e.theme.dimensions.appWrapperSpacingY},function(e){return e.theme.dimensions.appWrapperSpacingX},function(e){return e.theme.layout.xLargeWidth},function(e){return e.theme.layout.largeWidth},function(e){return e.theme.dimensions.appWrapperSpacingYLarge},function(e){return e.theme.dimensions.appWrapperSpacingXLarge},function(e){return e.theme.dimensions.appWrapperSpacingYLarge},function(e){return e.theme.dimensions.appWrapperSpacingXLarge});var Z=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(p.Normalize,null),a.a.createElement(l.ThemeProvider,{theme:u},a.a.createElement(K,null,a.a.createElement(b,null),a.a.createElement(q,{props:s}),a.a.createElement(d,null),a.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.037229fd.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,o){e.exports=o.p+"static/media/pikachu_phone.f70615ac.jpg"},46:function(e,t,o){e.exports=o.p+"static/media/pikachu.486d6ae6.jpg"},48:function(e,t,o){e.exports=o(77)},77:function(e,t,o){"use strict";o.r(t);var r=o(1),a=o.n(r),i=o(20),n=o.n(i),c=o(47),d=o(0),p=(o(53),o(4)),m=o(14),g=o(3),b=o(15),s=Object(b.b)({name:"auth",initialState:{isUserLoggedIn:!1},reducers:{login:function(e,t){var o=t.payload,r=o.username,a=o.password;"test"===r&&"test"===a&&(e.isUserLoggedIn=!0)},logout:function(e,t){e.isUserLoggedIn=!1}}}),l=function(e){return e.auth},u=s.actions,f=u.login,y=u.logout,x=s.reducer,h=function(){var e=Object(g.c)(l),t=Object(g.b)();return Object(d.c)("div",null,Object(d.c)("nav",{css:{display:"flex",flexDirection:"row",padding:"0.5rem",justifyContent:"space-between",alignItems:"center","--text-opacity":"1",color:"rgba(237, 242, 247, var(--text-opacity))","--bg-opacity":"1",backgroundColor:"rgba(107, 70, 193, var(--bg-opacity))","@media (min-width: 640px)":{fontSize:"1.125rem"},"@media (min-width: 768px)":{padding:"1rem"}}},Object(d.c)(m.b,{css:{":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600"}},to:"/home"},Object(d.c)("h3",null," POKEDEX")),e.isUserLoggedIn&&Object(d.c)("ul",{css:{display:"flex",flexDirection:"row"}},Object(d.c)("li",{css:{marginLeft:"0.25rem",marginRight:"0.25rem","@media (min-width: 768px)":{marginLeft:"0.5rem",marginRight:"0.5rem"}}},Object(d.c)(m.b,{css:{":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600"}},to:"/home"},"home")),Object(d.c)("li",{css:{marginLeft:"0.25rem",marginRight:"0.25rem","@media (min-width: 768px)":{marginLeft:"0.5rem",marginRight:"0.5rem"}}},Object(d.c)(m.b,{css:{":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600"}},to:"/explore"},"explore")),Object(d.c)("li",{css:{marginLeft:"0.25rem",marginRight:"0.25rem","@media (min-width: 768px)":{marginLeft:"0.5rem",marginRight:"0.5rem"}}},Object(d.c)("button",{onClick:function(e){t(y())},css:{padding:"0.25rem",fontSize:"0.875rem",borderRadius:"0.25rem","--bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--bg-opacity))","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(45, 55, 72, var(--bg-opacity))","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600"}}},"logout")))))},v=o(42),j=o(5),O=o(43),k=o(45),w=o.n(k),C=o(46),S=o.n(C),L=function(e){var t=e.signupModalBool,o=e.setSignupModalBool;return Object(d.c)("div",{css:{display:"flex",flexDirection:"column",textAlign:"center",height:"100%",width:"16rem","--bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--bg-opacity))","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",padding:"0.5rem","@media (min-width: 768px)":{padding:"1rem"},"@media (min-width: 1024px)":{padding:"1.5rem"}}},Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},Object(d.c)("p",{css:{fontSize:"1.125rem"}},"Sign up"),Object(d.c)("button",{css:{fontSize:"0.875rem"},onClick:function(){return o(!t)}},"close")),Object(d.c)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"space-around",marginTop:"0.25rem",marginBottom:"0.25rem"}},Object(d.c)("form",{css:{}},Object(d.c)("p",{css:{marginTop:"0.25rem",marginBottom:"0.25rem"}},"username",Object(d.c)("input",null)),Object(d.c)("p",{css:{marginTop:"0.25rem",marginBottom:"0.25rem"}},"password",Object(d.c)("input",null)),Object(d.c)("button",{css:{marginTop:"0.25rem",marginBottom:"0.25rem",padding:"0.25rem",borderRadius:"0.25rem","--bg-opacity":"1",backgroundColor:"rgba(45, 55, 72, var(--bg-opacity))","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(26, 32, 44, var(--bg-opacity))"}}},"sign up"))))},R=function(e){var t=e.loginModalBool,o=e.setLoginModalBool,a=Object(r.useState)(""),i=Object(j.a)(a,2),n=i[0],c=i[1],m=Object(r.useState)(""),b=Object(j.a)(m,2),s=b[0],l=b[1],u=Object(g.b)(),y=Object(p.g)();return Object(d.c)("div",{css:{display:"flex",flexDirection:"column",textAlign:"center",height:"100%",width:"16rem","--bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--bg-opacity))","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",padding:"0.5rem","@media (min-width: 768px)":{padding:"1rem"},"@media (min-width: 1024px)":{padding:"1.5rem"}}},Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},Object(d.c)("p",{css:{fontSize:"1.125rem"}},"Login"),Object(d.c)("button",{css:{fontSize:"0.875rem"},onClick:function(){return o(!t)}},"close")),Object(d.c)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"space-around",marginTop:"0.25rem",marginBottom:"0.25rem"}},Object(d.c)("form",{onSubmit:function(t){t.preventDefault(),u(f({username:n,password:s})),y.push(e.fromState||"/home")},css:{}},Object(d.c)("input",{css:{marginTop:"0.25rem",marginBottom:"0.25rem"},value:n,onChange:function(e){return c(e.target.value)},placeholder:"username"}),Object(d.c)("input",{css:{marginTop:"0.25rem",marginBottom:"0.25rem"},value:s,onChange:function(e){return l(e.target.value)},placeholder:"password"}),Object(d.c)("button",{type:"submit",css:{marginTop:"0.25rem",marginBottom:"0.25rem",padding:"0.25rem",borderRadius:"0.25rem","--bg-opacity":"1",backgroundColor:"rgba(45, 55, 72, var(--bg-opacity))","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(26, 32, 44, var(--bg-opacity))"}}},"log in"))))};function T(){var e=Object(v.a)(["\n          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n            url(",");\n          ","\n        "]);return T=function(){return e},e}var B=O.a.button({":hover":{"--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))","--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))"},borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--border-opacity))",borderRadius:"0.25rem",fontWeight:"600",fontSize:"1.125rem",padding:"0.5rem",margin:"0.5rem","@media (min-width: 768px)":{fontSize:"1.25rem",paddingLeft:"1rem",paddingRight:"1rem"},"@media (min-width: 1024px)":{fontSize:"1.5rem",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}}),z=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),o=t[0],a=t[1],i=Object(r.useState)(!1),n=Object(j.a)(i,2),c=n[0],m=n[1],g=Object(p.h)(),b=window.innerWidth>=650?S.a:w.a;return Object(d.c)("div",{css:[{display:"flex",flex:"1 1 0%",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"100vh",width:"100%"},Object(d.b)(T(),b,{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"})]},Object(d.c)("div",null,Object(d.c)("h1",{css:{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontSize:"2.25rem",fontWeight:"700","@media (min-width: 768px)":{fontSize:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"4rem"}}},"Pokedex")),Object(d.c)("div",{css:{display:"flex",flexDirection:"column","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))"}},!0===c?Object(d.c)(L,{fromState:g.state&&g.state.from,signupModalBool:c,setSignupModalBool:m}):!0===o?Object(d.c)(R,{fromState:g.state&&g.state.from,loginModalBool:o,setLoginModalBool:a}):Object(d.c)("div",null,Object(d.c)(B,{onClick:function(){return a(!o)}},"log in"),Object(d.c)(B,{onClick:function(){return m(!c)}},"sign up"))),Object(d.c)("div",null))},W=1,D=Object(b.b)({name:"collection",initialState:{collectionList:[]},reducers:{create:function(e,t){""!==t.payload?e.collectionList.find((function(e){return e.name===t.payload}))?alert('Collection name "'.concat(t.payload,'" already exists. Please choose another name.')):(e.collectionList.push({id:W,name:t.payload,pokemons:[]}),W++):alert("Collection name cannot be blank.")},add:function(e,t){var o=e.collectionList.findIndex((function(e){return e.id===t.payload.id})),r=e.collectionList.find((function(e){return e.id===t.payload.id})).name;-1!==o&&(e.collectionList[o].pokemons.includes(t.payload.pokemon)?alert("".concat(t.payload.pokemon,' already exists in collection "').concat(r,'".')):e.collectionList[o].pokemons.push(t.payload.pokemon))},remove:function(e,t){var o=t.payload.id,r=e.collectionList.findIndex((function(e){return e.id===o}));-1!==r&&e.collectionList.splice(r,1)},edit:function(e,t){var o=t.payload.id,r=t.payload.editedName,a=t.payload.editedPokemonList,i=e.collectionList.findIndex((function(e){return e.id===o}));-1!==i&&(e.collectionList[i].name=r,e.collectionList[i].pokemons=a)}}}),I=function(e){return e.collection.collectionList},P=D.actions,A=P.create,E=P.add,M=P.remove,N=P.edit,X=D.reducer,U=function(){var e=new Date,t=Object(g.c)(I),o=e.toDateString();return Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center","--bg-opacity":"1",backgroundColor:"rgba(44, 82, 130, var(--bg-opacity))",paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"1rem",paddingRight:"1rem"}}},Object(d.c)("section",{css:{width:"33.333333%",textAlign:"center",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(246, 224, 94, var(--border-opacity))","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",borderRadius:"9999px",padding:"1rem",marginRight:"0.25rem"}},Object(d.c)("h3",{css:{fontWeight:"600",fontSize:"1.25rem","@media (min-width: 768px)":{fontSize:"1.5rem"},"@media (min-width: 1024px)":{fontSize:"1.875rem"}}}," Hello User!"),Object(d.c)("p",null," ",o," ")),Object(d.c)("section",{css:{width:"66.666667%",textAlign:"left","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",padding:"1rem",borderRadius:"0.25rem",marginLeft:"0.25rem","@media (min-width: 640px)":{fontSize:"1.125rem"},"@media (min-width: 768px)":{fontSize:"1.25rem",display:"flex",flexDirection:"row",justifyContent:"center"},"@media (min-width: 1024px)":{fontSize:"1.5rem"}}},Object(d.c)("p",{css:{margin:"0.25rem",padding:"0.5rem"}},Object(d.c)("span",{css:{borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(246, 224, 94, var(--border-opacity))","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",margin:"0.25rem",borderRadius:"9999px"}},"XXX"),"coins"),Object(d.c)("p",{css:{margin:"0.25rem",padding:"0.5rem"}},Object(d.c)("span",{css:{borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(246, 224, 94, var(--border-opacity))","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",margin:"0.25rem",borderRadius:"9999px"}},t.length),"collections")))},H=function(e){var t=e.collectionObj,o=Object(g.b)(),a=Object(r.useState)(t.name),i=Object(j.a)(a,2),n=i[0],c=i[1],p=Object(r.useState)("no"),m=Object(j.a)(p,2),b=m[0],s=m[1],l=Object(r.useState)(t.pokemons),u=Object(j.a)(l,2),f=u[0],y=u[1],x=function(){"no"===b?(s("yes"),c(t.name)):(s("no"),c(t.name),y(t.pokemons))};return Object(d.c)("div",{css:{display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(44, 82, 130, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(42, 67, 101, var(--bg-opacity))"},height:"100%",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",borderRadius:"0.5rem",overflow:"auto",margin:"0.25rem"}},"no"===b?Object(d.c)("section",null,Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}},Object(d.c)("button",{onClick:x,css:{marginLeft:"0.25rem",marginRight:"0.25rem",padding:"0.25rem",borderRadius:"0.25rem",":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600",padding:"0.25rem"}}},"edit"),Object(d.c)("button",{onClick:function(){return e=t.id,void o(M({id:e}));var e},css:{marginLeft:"0.25rem",marginRight:"0.25rem",padding:"0.25rem",borderRadius:"0.25rem",":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600",padding:"0.25rem"}}},"delete")),Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-around",paddingTop:"1rem",paddingBottom:"3rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}},Object(d.c)("div",{css:{marginTop:"auto",marginBottom:"auto",fontSize:"1.25rem","@media (min-width: 768px)":{fontSize:"1.125rem"}}},Object(d.c)("h3",{css:{"--bg-opacity":"1",backgroundColor:"rgba(128, 90, 213, var(--bg-opacity))",whiteSpace:"pre-line",borderRadius:"0.25rem",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",textAlign:"center",fontWeight:"700",fontSize:"1.125rem","@media (min-width: 640px)":{fontSize:"1.25rem"},"@media (min-width: 768px)":{padding:"0.5rem",fontSize:"1.125rem"}}},t.name)),Object(d.c)("div",{css:{width:"66.666667%",marginTop:"auto",marginBottom:"auto",textAlign:"center","@media (min-width: 640px)":{fontSize:"1.125rem"},"@media (min-width: 768px)":{fontSize:"1rem"}}},Object(d.c)("ul",null,t.pokemons.map((function(e){return Object(d.c)("li",{key:e,css:{"--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",fontWeight:"600","--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))",padding:"0.25rem",borderRadius:"0.25rem",margin:"0.25rem"}},e)})))))):Object(d.c)("div",null,Object(d.c)("section",null,Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}},Object(d.c)("button",{onClick:x,css:{marginLeft:"0.25rem",marginRight:"0.25rem",padding:"0.25rem",borderRadius:"0.25rem",":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600",padding:"0.25rem"}}},"cancel"),Object(d.c)("button",{onClick:function(){return e=t.id,o(N({id:e,editedName:n,editedPokemonList:f})),void s("no");var e},css:{marginLeft:"0.25rem",marginRight:"0.25rem",padding:"0.25rem",borderRadius:"0.25rem",":hover":{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600",padding:"0.25rem"}}},"save")),Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-around",paddingTop:"1rem",paddingBottom:"2rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}},Object(d.c)("div",{css:{marginTop:"auto",marginBottom:"auto",fontSize:"1.25rem","@media (min-width: 768px)":{fontSize:"1.125rem"}}},Object(d.c)("input",{value:n,onChange:function(e){c(e.target.value)},css:{"--bg-opacity":"1",backgroundColor:"rgba(128, 90, 213, var(--bg-opacity))",whiteSpace:"pre-line",borderRadius:"0.25rem",paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"1rem",paddingBottom:"1rem",textAlign:"center",fontWeight:"700",fontSize:"1.125rem","@media (min-width: 640px)":{fontSize:"1.25rem"},"@media (min-width: 768px)":{padding:"0.5rem",fontSize:"1.125rem"}}})),Object(d.c)("div",{css:{width:"66.666667%",marginTop:"auto",marginBottom:"auto",textAlign:"center","@media (min-width: 640px)":{fontSize:"1.125rem"},"@media (min-width: 768px)":{fontSize:"1rem"}}},Object(d.c)("ul",null,f.map((function(e){return Object(d.c)("li",{key:e,css:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",marginLeft:"1rem",marginRight:"1rem",fontWeight:"600","--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))",padding:"0.25rem",marginTop:"0.25rem",marginBottom:"0.25rem",borderRadius:"0.25rem"}},Object(d.c)("p",null,e),Object(d.c)("button",{onClick:function(){return function(e){var t=f.filter((function(t){return t!==e}));y(t)}(e)},css:{fontWeight:"600","--bg-opacity":"1",backgroundColor:"rgba(155, 44, 44, var(--bg-opacity))",margin:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"9999px","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))"}},"x"))}))))))))},Y=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),o=t[0],a=t[1],i=Object(g.b)(),n=Object(g.c)(I);return Object(d.c)("div",{css:{padding:"0.5rem","@media (min-width: 768px)":{padding:"1rem"}}},Object(d.c)("section",{css:{fontSize:"1rem","@media (min-width: 768px)":{fontSize:"1.125rem"},"@media (min-width: 1024px)":{fontSize:"1.25rem"}}},Object(d.c)("h3",{css:{marginLeft:"0.25rem",marginRight:"0.25rem"}}," Your Collection "),Object(d.c)("form",{onSubmit:function(e){e.preventDefault(),i(A(o)),a("")}},Object(d.c)("input",{css:{borderRadius:"0.25rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(107, 70, 193, var(--border-opacity))",margin:"0.25rem"},value:o,onChange:function(e){return a(e.target.value)}}),Object(d.c)("button",{css:{"--bg-opacity":"1",backgroundColor:"rgba(107, 70, 193, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(85, 60, 154, var(--bg-opacity))","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))"},"--text-opacity":"1",color:"rgba(237, 242, 247, var(--text-opacity))",borderRadius:"0.25rem",padding:"0.25rem",margin:"0.25rem"},type:"submit"},"create collection"))),Object(d.c)("section",{css:{"@media (min-width: 768px)":{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"0.5rem"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}},n.map((function(e){return Object(d.c)(H,{key:e.id,collectionObj:e})}))))},_=function(){return Object(d.c)("div",{css:{display:"flex",flex:"1 1 0%",flexDirection:"column",height:"100vh","--bg-opacity":"1",backgroundColor:"rgba(235, 248, 255, var(--bg-opacity))"}},Object(d.c)(U,null),Object(d.c)(Y,null))},J=o(18),q=o.n(J),F=o(28),K=o(29),$=o.n(K),G="https://pokeapi.co/api/v2/pokemon?limit=".concat(25),Q=Object(b.b)({name:"pokemonCards",initialState:{pokemonList:[],filteredPokemonList:[]},reducers:{add:function(e,t){var o,r,a=e.pokemonList.map((function(e){return e.id}));o=a,r=t.payload.id,o.some((function(e){return r===e}))||e.pokemonList.push(t.payload)},search:function(e,t){var o=t.payload.searchTerm;""===o&&(e.filteredPokemonList=e.pokemonList);var r=e.pokemonList.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));""!==o&&0===r.length?e.filteredPokemonList=["xxx"]:e.filteredPokemonList=r}}}),V=Q.actions,Z=V.add,ee=V.search,te=function(e){return e.pokemon.pokemonList},oe=function(e){return e.pokemon.filteredPokemonList},re=Q.reducer,ae=function(){var e=Object(g.b)(),t=Object(r.useState)(""),o=Object(j.a)(t,2),a=o[0],i=o[1];return Object(d.c)("div",{css:{display:"flex",flexDirection:"row","--bg-opacity":"1",backgroundColor:"rgba(44, 82, 130, var(--bg-opacity))",paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"1rem",paddingRight:"1rem"}}},Object(d.c)("section",{css:{fontSize:"1.125rem","@media (min-width: 768px)":{fontSize:"1.25rem"}}},Object(d.c)("h3",{css:{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))"}}," Search Pokemon "),Object(d.c)("form",null,Object(d.c)("input",{css:{borderRadius:"0.25rem"},value:a,onChange:function(t){i(t.target.value),e(ee({searchTerm:t.target.value}))}}))))},ie=o(19),ne=o(23),ce=Object(ne.a)("p",{target:"e1jujn3q0"})((function(e){return function(e){switch(e){case"normal":return{"--bg-opacity":"1",backgroundColor:"rgba(192, 86, 33, var(--bg-opacity))"};case"fighting":return{"--bg-opacity":"1",backgroundColor:"rgba(155, 44, 44, var(--bg-opacity))"};case"flying":return{"--bg-opacity":"1",backgroundColor:"rgba(128, 90, 213, var(--bg-opacity))"};case"poison":return{"--bg-opacity":"1",backgroundColor:"rgba(151, 38, 109, var(--bg-opacity))"};case"ground":return{"--bg-opacity":"1",backgroundColor:"rgba(214, 158, 46, var(--bg-opacity))"};case"rock":return{"--bg-opacity":"1",backgroundColor:"rgba(151, 90, 22, var(--bg-opacity))"};case"bug":return{"--bg-opacity":"1",backgroundColor:"rgba(56, 161, 105, var(--bg-opacity))"};case"ghost":return{"--bg-opacity":"1",backgroundColor:"rgba(68, 51, 122, var(--bg-opacity))"};case"steel":return{"--bg-opacity":"1",backgroundColor:"rgba(113, 128, 150, var(--bg-opacity))"};case"fire":return{"--bg-opacity":"1",backgroundColor:"rgba(237, 137, 54, var(--bg-opacity))"};case"water":return{"--bg-opacity":"1",backgroundColor:"rgba(66, 153, 225, var(--bg-opacity))"};case"grass":return{"--bg-opacity":"1",backgroundColor:"rgba(39, 103, 73, var(--bg-opacity))"};case"electric":return{"--bg-opacity":"1",backgroundColor:"rgba(236, 201, 75, var(--bg-opacity))"};case"psychic":return{"--bg-opacity":"1",backgroundColor:"rgba(213, 63, 140, var(--bg-opacity))"};case"ice":return{"--bg-opacity":"1",backgroundColor:"rgba(144, 205, 244, var(--bg-opacity))"};case"dragon":return{"--bg-opacity":"1",backgroundColor:"rgba(183, 148, 244, var(--bg-opacity))"};case"dark":return{"--bg-opacity":"1",backgroundColor:"rgba(123, 52, 30, var(--bg-opacity))"};case"fairy":return{"--bg-opacity":"1",backgroundColor:"rgba(251, 182, 206, var(--bg-opacity))"};case"unknown":return{"--bg-opacity":"1",backgroundColor:"rgba(160, 174, 192, var(--bg-opacity))"};case"shadow":return{"--bg-opacity":"1",backgroundColor:"rgba(74, 85, 104, var(--bg-opacity))"};default:return{"--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))"}}}(e.color)}),""),de=function(e){var t=e.collection,o=e.pokemonId,r=e.addPokemonToCollection,a=e.pokemonCollectionInput,i=e.handlePokemonToCollection;return Object(d.c)("div",{css:{marginTop:"1rem"}},Object(d.c)("form",{onSubmit:r},Object(d.c)("label",null,Object(d.c)("select",{css:{borderRadius:"0.25rem"},value:a.id,onChange:i},Object(d.c)("option",{value:-1},"..."),t.map((function(e){return Object(d.c)("option",{key:"".concat(e.id,"-").concat(o),value:Number(e.id)},e.name)})))),Object(d.c)("button",{type:"submit",css:{borderRadius:"0.25rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--border-opacity))","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))",fontWeight:"600","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))"},paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",marginLeft:"0.5rem"}},"add")))},pe=function(e){var t=e.keyAttribute,o=e.val;return Object(d.c)("p",{css:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.5rem",marginBottom:"0.5rem",padding:"0.25rem","--bg-opacity":"1",backgroundColor:"rgba(45, 55, 72, var(--bg-opacity))",borderRadius:"0.25rem"}},Object(d.c)("span",{css:{fontWeight:"600","--text-opacity":"1",color:"rgba(247, 250, 252, var(--text-opacity))",padding:"0.25rem",marginLeft:"0.5rem",marginRight:"0.5rem",borderRadius:"0.25rem"}},t),Object(d.c)("span",{css:{fontWeight:"600","--bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--bg-opacity))",alignSelf:"stretch","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}},o))},me=function(e){var t=Object(g.c)(I),o=Object(g.b)(),a=e.pokemonId,i=e.pokemonName,n=e.pokemonType,c=e.pokemonHeight,p=e.pokemonWeight,m=e.pokemonBaseExperience,b=e.pokemonSprite,s=Object(r.useState)({id:"",pokemon:""}),l=Object(j.a)(s,2),u=l[0],f=l[1];return Object(d.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center","--bg-opacity":"1",backgroundColor:"rgba(44, 82, 130, var(--bg-opacity))",padding:"0.5rem",borderRadius:"0.5rem",overflowX:"auto"}},Object(d.c)("div",{css:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"33.333333%",margin:"0.25rem"}},Object(d.c)("img",{css:{objectFit:"contain","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))","@media (min-width: 640px)":{"--transform-scale-x":"1.25","--transform-scale-y":"1.25"}},alt:i,src:b}),Object(d.c)("p",{css:{"--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))","--text-opacity":"1",color:"rgba(26, 32, 44, var(--text-opacity))",fontWeight:"800",textAlign:"center",whiteSpace:"normal",borderRadius:"0.25rem",padding:"0.25rem",margin:"0.25rem"}},i),Object(d.c)(ce,{css:{textAlign:"center","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"600",whiteSpace:"normal",borderRadius:"0.25rem",padding:"0.25rem",margin:"0.25rem"},color:n},n)),Object(d.c)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center",width:"66.666667%"}},Object(d.c)("div",null,Object(d.c)(pe,{keyAttribute:"height",val:c}),Object(d.c)(pe,{keyAttribute:"weight",val:p}),Object(d.c)(pe,{keyAttribute:"base-exp",val:m})),Object(d.c)(de,{addPokemonToCollection:function(e){e.preventDefault(),f(Object(ie.a)(Object(ie.a)({},u),{},{id:"",pokemon:""})),o(E(u))},pokemonCollectionInput:u,handlePokemonToCollection:function(e){f(Object(ie.a)(Object(ie.a)({},u),{},{id:Number(e.target.value),pokemon:i}))},collection:t,pokemonId:a})))},ge=function(){var e=Object(g.b)(),t=Object(g.c)(te),o=Object(g.c)(oe);return Object(r.useEffect)((function(){e(function(){var e=Object(F.a)(q.a.mark((function e(t,o){var r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o(),e.prev=1,25===r.pokemon.pokemonList.length){e.next=8;break}return e.next=5,$.a.get(G);case 5:e.sent.data.results.map(function(){var e=Object(F.a)(q.a.mark((function e(o){var r,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.get(o.url);case 2:r=e.sent,a={id:r.data.id,name:r.data.species.name,baseExperience:r.data.base_experience,height:r.data.height,weight:r.data.weight,type:r.data.types[0].type.name,sprites:r.data.sprites.front_default},t(Z(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Could not fetch data.");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,o){return e.apply(this,arguments)}}())}),[e]),Object(d.c)("div",{css:{padding:"0.5rem","@media (min-width: 768px)":{padding:"1rem"}}},Object(d.c)("ul",null,Object(d.c)("div",{css:{display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"0.5rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 768px)":{gap:"0.75rem"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"1rem"},"@media (min-width: 1280px)":{gridTemplateColumns:"repeat(4, minmax(0, 1fr))"}}},"xxx"===o[0]?"No Pokemon found.":0===o.length?t.map((function(e){return Object(d.c)(me,{key:"key-".concat(e.id),pokemonId:e.id,pokemonName:e.name,pokemonType:e.type,pokemonHeight:e.height,pokemonWeight:e.weight,pokemonBaseExperience:e.baseExperience,pokemonSprite:e.sprites})})):o.map((function(e){return Object(d.c)(me,{key:"key-".concat(e.id),pokemonId:e.id,pokemonName:e.name,pokemonType:e.type,pokemonHeight:e.height,pokemonWeight:e.weight,pokemonBaseExperience:e.baseExperience,pokemonSprite:e.sprites})})))))},be=function(){return Object(d.c)("div",{css:{display:"flex",flex:"1 1 0%",flexDirection:"column",height:"100vh","--bg-opacity":"1",backgroundColor:"rgba(235, 248, 255, var(--bg-opacity))"}},Object(d.c)(ae,null),Object(d.c)(ge,null))},se=function(e){var t=e.component,o=e.authState,r=Object(c.a)(e,["component","authState"]);return Object(d.c)(p.b,Object.assign({},r,{render:function(e){return o.isUserLoggedIn?Object(d.c)(t,e):Object(d.c)(p.a,{to:{pathname:"/",state:{from:e.location}}})}}))},le=function(){var e=Object(g.c)(l);return Object(d.c)(m.a,null,Object(d.c)("div",{css:{display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(240, 255, 244, var(--bg-opacity))",minHeight:"100vh"}},Object(d.c)(h,null),Object(d.c)(p.d,null,Object(d.c)(p.b,{exact:!0,path:"/",component:z}),Object(d.c)(se,{path:"/home",component:_,authState:e}),Object(d.c)(se,{path:"/explore",component:be,authState:e}))))},ue=Object(b.a)({reducer:{collection:X,pokemon:re,auth:x}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g.a,{store:ue},a.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.516c1fe7.chunk.js.map
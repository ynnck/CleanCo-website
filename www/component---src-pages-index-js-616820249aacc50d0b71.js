(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"G+1K":function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"formspree":"https://formspree.io/mayqakqe"}}}}')},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),o=t("G+1K"),l=(t("Wbzz"),function(){var e=Object(n.useState)(""),a=e[0],t=e[1],l=Object(n.useState)(""),s=l[0],i=l[1],m=Object(n.useState)(""),c=m[0],u=m[1],d=Object(n.useState)(""),p=d[0],g=d[1],b=Object(n.useState)(""),k=b[0],h=b[1],v=o.data,x=function(e){switch(e.target.id){case"name":t(e.target.value);break;case"organization":i(e.target.value);break;case"email":u(e.target.value);break;case"message":g(e.target.value)}};return r.a.createElement("form",{id:"contactForm",onSubmit:function(e){e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(console.log("data",n,"xhr",r,"status",r.status),200===r.status?(t(""),i(""),u(""),g(""),h("SUCCESS")):h("ERROR"))},r.send(n)},action:v.site.siteMetadata.formspree,method:"POST",style:{display:"flex",flexDirection:"column",width:"100%",color:"rgb(94, 185, 180)"}},r.a.createElement("label",{style:{marginTop:"20px"},htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:a,onChange:x,className:"textbox",style:{border:"1px solid rgb(94, 185, 180)",borderRadius:"5px"}}),r.a.createElement("label",{style:{marginTop:"20px"},htmlFor:"organization"},"Organization"),r.a.createElement("input",{type:"text",name:"organization",id:"organization",value:s,onChange:x,className:"textbox",style:{border:"1px solid rgb(94, 185, 180)",borderRadius:"5px"}}),r.a.createElement("label",{style:{marginTop:"20px"},htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",name:"_replyto",id:"email",value:c,onChange:x,className:"textbox",style:{border:"1px solid rgb(94, 185, 180)",borderRadius:"5px"}}),r.a.createElement("label",{style:{marginTop:"20px"},htmlFor:"message"},"Enter your message"),r.a.createElement("textarea",{id:"message",name:"message",value:p,onChange:x,style:{border:"1px solid rgb(94, 185, 180)",borderRadius:"5px",minHeight:"200px"}}),"SUCCESS"===k?r.a.createElement("p",{className:"statusMessage"},"Thank you! Your message has been sent. We will get in touch as soon as possible."):r.a.createElement("input",{type:"submit",value:"Submit",className:"button",style:{border:"1px solid rgb(94, 185, 180)",color:"rgb(94,185,180)",background:"white",borderRadius:"5px",marginTop:"20px"}}),"ERROR"===k&&r.a.createElement("p",{className:"statusMessage"},"An error has occured. Please make sure all fields have been filled in correctly."))}),s=t("Bl7J"),i=t("qB64"),m=t("vrFN");a.default=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,{title:"Home"}),r.a.createElement("div",{className:"containerPaginaFoto"},r.a.createElement(i.default,null)),r.a.createElement("div",{className:"containerPaginaWit"},r.a.createElement("div",{className:"textOpWit",style:{textAlign:"justify",color:"rgb(94, 185, 180)",margin:"5vw"}},r.a.createElement("p",null,"Het onderhoud van kantoren en praktijken kan bestaan uit allerlei karweien. Denk hierbij maar aan stofzuigen, het reinigen en luchten van bureaus, het schoonmaken van de werkomgeving en de sanitaire ruimten. Wat u ook wenst, het Clean&Co-team heeft ervaring met de meest uiteenlopende schoonmaakklussen."),r.a.createElement("p",null,"Uw kantoor of praktijk is uw visitekaartje naar klanten toe. Het juiste schoonmaakbedrijf kiezen is dan ook van essentieel belang. Bij Clean&Co gaan we daarom voluit voor een persoonlijke aanpak. Daarom werken wij steeds een pakket uit op maat, dat past bij jouw noden. Avondwerk of weekendwerk, met jaarcontract of occasioneel schoonmaakwerk, ’s morgensvroeg schoonmaken? Geen enkel probleem, Clean&Co stelt zich graag flexibel op. Vertrouw op Clean&Co en maak indruk."),r.a.createElement("p",null,"We kijken uit naar een toekomstige samenwerking"),r.a.createElement("p",null,"Het Clean&Co-team")),r.a.createElement("div",{className:"containerContactForm",style:{margin:"5vw",display:"flex",flexDirection:"column"}},r.a.createElement("a",{name:"contactForm"}),r.a.createElement("h2",{style:{height:"5vh",color:"rgb(94, 185, 180)"}},"Vraag vrijblijvend een offerte aan"),r.a.createElement(l,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-616820249aacc50d0b71.js.map
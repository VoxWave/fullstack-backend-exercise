(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(11),o=t.n(u),c=t(12),i=t(2),l=t(3),m=t.n(l),s="/api/persons",f=function(){return m.a.get(s).then(function(e){return e.data})},d=function(e){return m.a.post(s,e).then(function(e){return e.data})},h=function(e){return m.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})},b=function(e){return m.a.put("".concat(s,"/").concat(e.id),e).then(function(e){return e.data})},v=function(e){var n=e.notification;if(null===n.message)return null;var t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:t},n.message)},g=function(e){return r.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4",r.a.createElement("input",{onChange:e.handleChange,value:e.value}))},p=function(e){return e.persons.map(function(n){return r.a.createElement("div",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return e.deletePerson(n.id)}},"poista"))})},E=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{onChange:e.handleNameChange,value:e.newName})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{onChange:e.handleNumberChange,value:e.newNumber})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),m=l[0],s=l[1],w=Object(a.useState)(""),j=Object(i.a)(w,2),C=j[0],O=j[1],S=Object(a.useState)(""),k=Object(i.a)(S,2),y=k[0],N=k[1],P=Object(a.useState)({message:null}),L=Object(i.a)(P,2),B=L[0],J=L[1];Object(a.useEffect)(function(){f().then(function(e){u(e)})},[]);var x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";J({message:e,type:n}),setTimeout(function(){return J({message:null})},1e4)},z=0===y.length?t:t.filter(function(e){return e.name.toLowerCase().includes(y.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(v,{notification:B}),r.a.createElement(g,{handleChange:function(e){return N(e.target.value)},value:y}),r.a.createElement("h3",null,"lis\xe4\xe4 uusi"),r.a.createElement(E,{handleNameChange:function(e){return s(e.target.value)},handleNumberChange:function(e){return O(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name===m});n?window.confirm("".concat(m," on jo luettelossa, korvataanko vanha numero uudella"))&&b(Object(c.a)({},n,{number:C})).then(function(e){u(t.map(function(n){return n.name===m?e:n})),s(""),O(""),x("Henkil\xf6n ".concat(m," numero muutettu"))}):d({name:m,number:C}).then(function(e){u(t.concat(e)),s(""),O(""),x("Lis\xe4ttiin ".concat(e.name))})},newName:m,newNumber:C}),r.a.createElement("h3",null,"Numerot"),r.a.createElement(p,{persons:z,deletePerson:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Poistetaanko ".concat(n.name))&&(h(e).then(function(){u(t.filter(function(n){return n.id!==e}))}),x("Poistettiin ".concat(n.name)))}}))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.7e563a19.chunk.js.map
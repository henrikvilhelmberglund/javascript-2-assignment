import{S as be,i as ke,s as Ee,k as d,q as E,a as q,l as p,m as v,r as C,h,c as H,n as f,J as he,K as Ce,b as M,H as r,L as $,M as te,C as K,N as ue,O as Ne,P as _e}from"../../chunks/index-eead6473.js";import{b as Te}from"../../chunks/paths-ff2a3ca2.js";class fe{constructor(e,s,c,n,o,N,O,m,k){this.name=e,this.gender=s,this.height=c,this.mass=n,this.hairColor=o,this.skinColor=N,this.eyeColor=O,this.movies=m,this.pictureURL=k}}const z=["Luke Skywalker","Obi-Wan Kenobi","Leia Organa","Jabba Desilijic Tiure","R2-D2","C-3PO","Chewbacca","Han Solo","Yoda","Darth Vader","Padmé Amidala","Ayla Secura","Jar Jar Binks"];async function me(l){try{let s=await(await fetch(`https://swapi.dev/api/people/?search=${l}`,{method:"GET"})).json();return console.log(s.results),s.results}catch(e){return e}}function de(l,e,s){const c=l.slice();return c[7]=e[s],c}function pe(l,e,s){const c=l.slice();return c[7]=e[s],c}function ge(l){let e,s=l[7]+"",c;return{c(){e=d("option"),c=E(s),this.h()},l(n){e=p(n,"OPTION",{});var o=v(e);c=C(o,s),o.forEach(h),this.h()},h(){e.__value=l[7],e.value=e.__value},m(n,o){M(n,e,o),r(e,c)},p:K,d(n){n&&h(e)}}}function ve(l){let e,s=l[7]+"",c;return{c(){e=d("option"),c=E(s),this.h()},l(n){e=p(n,"OPTION",{});var o=v(e);c=C(o,s),o.forEach(h),this.h()},h(){e.__value=l[7],e.value=e.__value},m(n,o){M(n,e,o),r(e,c)},p:K,d(n){n&&h(e)}}}function we(l){let e,s,c,n,o,N,O,m,k,I,j,g,R,B,U,F,b,V,P,Y,W,y,D,Q,T,A,ae,X,Z,le,G=z,u=[];for(let t=0;t<G.length;t+=1)u[t]=ge(pe(l,G,t));let J=z,_=[];for(let t=0;t<J.length;t+=1)_[t]=ve(de(l,J,t));return{c(){e=d("main"),s=d("h1"),c=E("Star Wars"),n=q(),o=d("h1"),N=E("The comparisons strike again"),O=q(),m=d("article"),k=d("label"),I=E("Pick character 1"),j=q(),g=d("select");for(let t=0;t<u.length;t+=1)u[t].c();R=q(),B=d("label"),U=E("Pick character 2"),F=q(),b=d("select");for(let t=0;t<_.length;t+=1)_[t].c();V=q(),P=d("button"),Y=E("Get data"),W=q(),y=d("footer"),D=d("p"),Q=E(`by\r
		`),T=d("a"),A=d("img"),X=E("henrikvilhelmberglund"),this.h()},l(t){e=p(t,"MAIN",{class:!0});var i=v(e);s=p(i,"H1",{class:!0});var a=v(s);c=C(a,"Star Wars"),a.forEach(h),n=H(i),o=p(i,"H1",{class:!0});var w=v(o);N=C(w,"The comparisons strike again"),w.forEach(h),O=H(i),m=p(i,"ARTICLE",{});var L=v(m);k=p(L,"LABEL",{for:!0});var re=v(k);I=C(re,"Pick character 1"),re.forEach(h),j=H(L),g=p(L,"SELECT",{name:!0,id:!0});var se=v(g);for(let S=0;S<u.length;S+=1)u[S].l(se);se.forEach(h),R=H(L),B=p(L,"LABEL",{for:!0});var ce=v(B);U=C(ce,"Pick character 2"),ce.forEach(h),F=H(L),b=p(L,"SELECT",{name:!0,id:!0});var ne=v(b);for(let S=0;S<_.length;S+=1)_[S].l(ne);ne.forEach(h),L.forEach(h),V=H(i),P=p(i,"BUTTON",{class:!0});var oe=v(P);Y=C(oe,"Get data"),oe.forEach(h),i.forEach(h),W=H(t),y=p(t,"FOOTER",{class:!0});var ie=v(y);D=p(ie,"P",{});var x=v(D);Q=C(x,`by\r
		`),T=p(x,"A",{class:!0,href:!0});var ee=v(T);A=p(ee,"IMG",{class:!0,src:!0,alt:!0}),X=C(ee,"henrikvilhelmberglund"),ee.forEach(h),x.forEach(h),ie.forEach(h),this.h()},h(){f(s,"class","uno-i3kzqs"),f(o,"class","uno-gdjwma"),f(k,"for","character1Name"),f(g,"name","character1Name"),f(g,"id","character1Name"),l[0]===void 0&&he(()=>l[3].call(g)),f(B,"for","character2Name"),f(b,"name","character2Name"),f(b,"id","character2Name"),l[1]===void 0&&he(()=>l[4].call(b)),f(P,"class","uno-ylnhsu"),f(e,"class","uno-i33qvz"),f(A,"class","uno-043j0c"),Ce(A.src,ae=Te+"/Henrik.png")||f(A,"src",ae),f(A,"alt","avatar"),f(T,"class","uno-gt78pw"),f(T,"href","https://github.com/henrikvilhelmberglund"),f(y,"class","uno-ulm6d1")},m(t,i){M(t,e,i),r(e,s),r(s,c),r(e,n),r(e,o),r(o,N),r(e,O),r(e,m),r(m,k),r(k,I),r(m,j),r(m,g);for(let a=0;a<u.length;a+=1)u[a].m(g,null);$(g,l[0]),r(m,R),r(m,B),r(B,U),r(m,F),r(m,b);for(let a=0;a<_.length;a+=1)_[a].m(b,null);$(b,l[1]),r(e,V),r(e,P),r(P,Y),M(t,W,i),M(t,y,i),r(y,D),r(D,Q),r(D,T),r(T,A),r(T,X),Z||(le=[te(g,"change",l[3]),te(b,"change",l[4]),te(P,"click",l[2])],Z=!0)},p(t,[i]){if(i&0){G=z;let a;for(a=0;a<G.length;a+=1){const w=pe(t,G,a);u[a]?u[a].p(w,i):(u[a]=ge(w),u[a].c(),u[a].m(g,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=G.length}if(i&1&&$(g,t[0]),i&0){J=z;let a;for(a=0;a<J.length;a+=1){const w=de(t,J,a);_[a]?_[a].p(w,i):(_[a]=ve(w),_[a].c(),_[a].m(b,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=J.length}i&2&&$(b,t[1])},i:K,o:K,d(t){t&&h(e),ue(u,t),ue(_,t),t&&h(W),t&&h(y),Z=!1,Ne(le)}}}function Le(l,e,s){let c,n,o,N;async function O(){let I=await me(c),j=await me(n),g=I.name.replaceAll(" ","_")+"_placeholder.png",R=j.name.replaceAll(" ","_")+"_placeholder.png";o=new fe(...I,g),console.log(o),N=new fe(...j,R),console.log(N)}function m(){c=_e(this),s(0,c)}function k(){n=_e(this),s(1,n)}return[c,n,O,m,k]}class ye extends be{constructor(e){super(),ke(this,e,Le,we,Ee,{})}}export{ye as default};

import{S as He,i as Re,s as Ge,k as g,q as C,a as V,l as b,m as E,r as N,h as u,c as B,n as p,J as ke,K as he,b as O,H as h,L as oe,M as te,C as se,N as ne,O as Je,e as ae,u as z,P as Ee,Q as Ce}from"../../chunks/index-2579c387.js";import{b as ue}from"../../chunks/paths-ff2a3ca2.js";async function Ne(r){try{let t=await(await fetch(`https://swapi.dev/api/people/?search=${r}`,{method:"GET"})).json();return console.log(t),t}catch(e){return e}}async function ze(r){try{let t=await(await fetch(r,{method:"GET"})).json();return console.log(t),t}catch(e){return e}}class we{constructor(e,t,n,a,l,s,f,c,o){this.name=e,this.gender=t,this.height=JSON.parse(n),this.mass=JSON.parse(a),this.hairColor=l,this.skinColor=s,this.eyeColor=f,this.movies=c,this.pictureURL=o}async returnFirstAppearance(e){let t=[];for(const a of e){let l=await ze(a);t.push(l.release_date)}return t.sort((a,l)=>new Date(l.date)-new Date(a.date)),t[0]}}const ie=["Luke Skywalker","Obi-Wan Kenobi","Leia Organa","Jabba Desilijic Tiure","R2-D2","C-3PO","Chewbacca","Han Solo","Yoda","Darth Vader","Padmé Amidala","Ayla Secura","Jar Jar Binks"];function Se(r,e,t){const n=r.slice();return n[16]=e[t],n}function ye(r,e,t){const n=r.slice();return n[19]=e[t],n[21]=t,n}function Te(r,e,t){const n=r.slice();return n[22]=e[t][0],n[23]=e[t][1],n}function Oe(r,e,t){const n=r.slice();return n[19]=e[t],n}function Ae(r,e,t){const n=r.slice();return n[19]=e[t],n}function De(r){let e,t=r[19]+"",n;return{c(){e=g("option"),n=C(t),this.h()},l(a){e=b(a,"OPTION",{});var l=E(e);n=N(l,t),l.forEach(u),this.h()},h(){e.__value=r[19],e.value=e.__value},m(a,l){O(a,e,l),h(e,n)},p:se,d(a){a&&u(e)}}}function Ie(r){let e,t=r[19]+"",n;return{c(){e=g("option"),n=C(t),this.h()},l(a){e=b(a,"OPTION",{});var l=E(e);n=N(l,t),l.forEach(u),this.h()},h(){e.__value=r[19],e.value=e.__value},m(a,l){O(a,e,l),h(e,n)},p:se,d(a){a&&u(e)}}}function Le(r){let e,t,n,a,l,s=r[5]&&Pe(r),f=[r[2],r[3]],c=[];for(let i=0;i<2;i+=1)c[i]=Ve(ye(r,f,i));let o=r[7]&&r[4]&&Be(r);return{c(){e=g("div"),s&&s.c(),t=V(),n=g("div");for(let i=0;i<2;i+=1)c[i].c();a=V(),o&&o.c(),l=ae(),this.h()},l(i){e=b(i,"DIV",{class:!0});var w=E(e);s&&s.l(w),w.forEach(u),t=B(i),n=b(i,"DIV",{class:!0});var _=E(n);for(let U=0;U<2;U+=1)c[U].l(_);_.forEach(u),a=B(i),o&&o.l(i),l=ae(),this.h()},h(){p(e,"class","uno-1u7wu9"),p(n,"class","uno-5rxnd7")},m(i,w){O(i,e,w),s&&s.m(e,null),O(i,t,w),O(i,n,w);for(let _=0;_<2;_+=1)c[_].m(n,null);O(i,a,w),o&&o.m(i,w),O(i,l,w)},p(i,w){if(i[5]?s?s.p(i,w):(s=Pe(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null),w&92){f=[i[2],i[3]];let _;for(_=0;_<2;_+=1){const U=ye(i,f,_);c[_]?c[_].p(U,w):(c[_]=Ve(U),c[_].c(),c[_].m(n,null))}for(;_<2;_+=1)c[_].d(1)}i[7]&&i[4]?o?o.p(i,w):(o=Be(i),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},d(i){i&&u(e),s&&s.d(),i&&u(t),i&&u(n),ne(c,i),i&&u(a),o&&o.d(i),i&&u(l)}}}function Pe(r){let e,t,n,a;return{c(){e=g("button"),t=C("Compare characters"),this.h()},l(l){e=b(l,"BUTTON",{class:!0});var s=E(e);t=N(s,"Compare characters"),s.forEach(u),this.h()},h(){p(e,"class","uno-bt3t5r")},m(l,s){O(l,e,s),h(e,t),n||(a=te(e,"click",r[13]),n=!0)},p:se,d(l){l&&u(e),n=!1,a()}}}function qe(r){let e,t=Object.entries(r[19]),n=[];for(let a=0;a<t.length;a+=1)n[a]=Ue(Te(r,t,a));return{c(){e=g("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var l=E(e);for(let s=0;s<n.length;s+=1)n[s].l(l);l.forEach(u),this.h()},h(){p(e,"class","uno-rg20wa")},m(a,l){O(a,e,l);for(let s=0;s<n.length;s+=1)n[s].m(e,null)},p(a,l){if(l&12){t=Object.entries(a[19]);let s;for(s=0;s<t.length;s+=1){const f=Te(a,t,s);n[s]?n[s].p(f,l):(n[s]=Ue(f),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}},d(a){a&&u(e),ne(n,a)}}}function Fe(r){let e,t,n=r[23].length+"",a,l;return{c(){e=g("p"),t=C("Stars in "),a=C(n),l=C(" movies"),this.h()},l(s){e=b(s,"P",{id:!0});var f=E(e);t=N(f,"Stars in "),a=N(f,n),l=N(f," movies"),f.forEach(u),this.h()},h(){p(e,"id","movies_"+r[21])},m(s,f){O(s,e,f),h(e,t),h(e,a),h(e,l)},p(s,f){f&12&&n!==(n=s[23].length+"")&&z(a,n)},d(s){s&&u(e)}}}function We(r){let e;function t(l,s){return l[22]==="height"?Ye:l[22]==="mass"?Qe:Ke}let n=t(r),a=n(r);return{c(){a.c(),e=ae()},l(l){a.l(l),e=ae()},m(l,s){a.m(l,s),O(l,e,s)},p(l,s){n===(n=t(l))&&a?a.p(l,s):(a.d(1),a=n(l),a&&(a.c(),a.m(e.parentNode,e)))},d(l){a.d(l),l&&u(e)}}}function Ke(r){let e,t=re(r[22])+"",n,a,l=r[23]+"",s,f;return{c(){e=g("p"),n=C(t),a=C(": "),s=C(l),this.h()},l(c){e=b(c,"P",{id:!0});var o=E(e);n=N(o,t),a=N(o,": "),s=N(o,l),o.forEach(u),this.h()},h(){p(e,"id",f=r[22]+"_"+r[21])},m(c,o){O(c,e,o),h(e,n),h(e,a),h(e,s)},p(c,o){o&12&&t!==(t=re(c[22])+"")&&z(n,t),o&12&&l!==(l=c[23]+"")&&z(s,l),o&12&&f!==(f=c[22]+"_"+c[21])&&p(e,"id",f)},d(c){c&&u(e)}}}function Qe(r){let e,t=re(r[22])+"",n,a,l=r[23]+"",s,f,c;return{c(){e=g("p"),n=C(t),a=C(": "),s=C(l),f=C("kg"),this.h()},l(o){e=b(o,"P",{id:!0});var i=E(e);n=N(i,t),a=N(i,": "),s=N(i,l),f=N(i,"kg"),i.forEach(u),this.h()},h(){p(e,"id",c=r[22]+"_"+r[21])},m(o,i){O(o,e,i),h(e,n),h(e,a),h(e,s),h(e,f)},p(o,i){i&12&&t!==(t=re(o[22])+"")&&z(n,t),i&12&&l!==(l=o[23]+"")&&z(s,l),i&12&&c!==(c=o[22]+"_"+o[21])&&p(e,"id",c)},d(o){o&&u(e)}}}function Ye(r){let e,t=re(r[22])+"",n,a,l=r[23]+"",s,f,c;return{c(){e=g("p"),n=C(t),a=C(": "),s=C(l),f=C("cm"),this.h()},l(o){e=b(o,"P",{id:!0});var i=E(e);n=N(i,t),a=N(i,": "),s=N(i,l),f=N(i,"cm"),i.forEach(u),this.h()},h(){p(e,"id",c=r[22]+"_"+r[21])},m(o,i){O(o,e,i),h(e,n),h(e,a),h(e,s),h(e,f)},p(o,i){i&12&&t!==(t=re(o[22])+"")&&z(n,t),i&12&&l!==(l=o[23]+"")&&z(s,l),i&12&&c!==(c=o[22]+"_"+o[21])&&p(e,"id",c)},d(o){o&&u(e)}}}function Ue(r){let e;function t(l,s){if(l[22]!=="movies"&&l[22]!=="pictureURL")return We;if(l[22]==="movies")return Fe}let n=t(r),a=n&&n(r);return{c(){a&&a.c(),e=ae()},l(l){a&&a.l(l),e=ae()},m(l,s){a&&a.m(l,s),O(l,e,s)},p(l,s){n===(n=t(l))&&a?a.p(l,s):(a&&a.d(1),a=n&&n(l),a&&(a.c(),a.m(e.parentNode,e)))},d(l){a&&a.d(l),l&&u(e)}}}function je(r){let e,t=r[19].name+"",n,a,l=r[6][r[21]]+"",s,f;return{c(){e=g("p"),n=C(t),a=C(" first appeared on film in "),s=C(l),f=C(".")},l(c){e=b(c,"P",{});var o=E(e);n=N(o,t),a=N(o," first appeared on film in "),s=N(o,l),f=N(o,"."),o.forEach(u)},m(c,o){O(c,e,o),h(e,n),h(e,a),h(e,s),h(e,f)},p(c,o){o&12&&t!==(t=c[19].name+"")&&z(n,t),o&64&&l!==(l=c[6][c[21]]+"")&&z(s,l)},d(c){c&&u(e)}}}function Ve(r){let e,t,n,a=(r[19].name??"empty")+"",l,s,f,c,o,i,w,_,U,H,J,W,D,R,m,y,I,d=r[4]&&qe(r);function K(){return r[14](r[21],r[19])}let S=r[6][r[21]]&&je(r);return{c(){e=g("article"),t=g("div"),n=g("h2"),l=C(a),s=V(),f=g("img"),o=V(),d&&d.c(),i=V(),w=g("div"),_=g("button"),U=C("Show first appearance"),H=V(),J=g("button"),W=C("More buttons"),D=V(),R=g("div"),S&&S.c(),m=V(),this.h()},l(M){e=b(M,"ARTICLE",{});var A=E(e);t=b(A,"DIV",{class:!0});var j=E(t);n=b(j,"H2",{class:!0});var G=E(n);l=N(G,a),G.forEach(u),s=B(j),f=b(j,"IMG",{class:!0,src:!0,alt:!0}),o=B(j),d&&d.l(j),j.forEach(u),i=B(A),w=b(A,"DIV",{class:!0});var F=E(w);_=b(F,"BUTTON",{});var Q=E(_);U=N(Q,"Show first appearance"),Q.forEach(u),H=B(F),J=b(F,"BUTTON",{});var Y=E(J);W=N(Y,"More buttons"),Y.forEach(u),F.forEach(u),D=B(A),R=b(A,"DIV",{class:!0});var ee=E(R);S&&S.l(ee),ee.forEach(u),m=B(A),A.forEach(u),this.h()},h(){p(n,"class","uno-px2hef"),p(f,"class","uno-79ike7"),he(f.src,c=ue+"/"+r[19].pictureURL)||p(f,"src",c),p(f,"alt","a"),p(t,"class","uno-t8tm4j"),p(w,"class","uno-ds0ucv"),p(R,"class","uno-7bxur7")},m(M,A){O(M,e,A),h(e,t),h(t,n),h(n,l),h(t,s),h(t,f),h(t,o),d&&d.m(t,null),h(e,i),h(e,w),h(w,_),h(_,U),h(w,H),h(w,J),h(J,W),h(e,D),h(e,R),S&&S.m(R,null),h(e,m),y||(I=te(_,"click",K),y=!0)},p(M,A){r=M,A&12&&a!==(a=(r[19].name??"empty")+"")&&z(l,a),A&12&&!he(f.src,c=ue+"/"+r[19].pictureURL)&&p(f,"src",c),r[4]?d?d.p(r,A):(d=qe(r),d.c(),d.m(t,null)):d&&(d.d(1),d=null),r[6][r[21]]?S?S.p(r,A):(S=je(r),S.c(),S.m(R,null)):S&&(S.d(1),S=null)},d(M){M&&u(e),d&&d.d(),S&&S.d(),y=!1,I()}}}function Be(r){let e,t,n=r[7].split("^"),a=[];for(let l=0;l<n.length;l+=1)a[l]=Me(Se(r,n,l));return{c(){e=g("aside"),t=g("ul");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=b(l,"ASIDE",{class:!0});var s=E(e);t=b(s,"UL",{});var f=E(t);for(let c=0;c<a.length;c+=1)a[c].l(f);f.forEach(u),s.forEach(u),this.h()},h(){p(e,"class","uno-qwwda1")},m(l,s){O(l,e,s),h(e,t);for(let f=0;f<a.length;f+=1)a[f].m(t,null)},p(l,s){if(s&128){n=l[7].split("^");let f;for(f=0;f<n.length;f+=1){const c=Se(l,n,f);a[f]?a[f].p(c,s):(a[f]=Me(c),a[f].c(),a[f].m(t,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=n.length}},d(l){l&&u(e),ne(a,l)}}}function Me(r){let e,t=r[16]+"",n,a;return{c(){e=g("li"),n=C(t),a=V()},l(l){e=b(l,"LI",{});var s=E(e);n=N(s,t),a=B(s),s.forEach(u)},m(l,s){O(l,e,s),h(e,n),h(e,a)},p(l,s){s&128&&t!==(t=l[16]+"")&&z(n,t)},d(l){l&&u(e)}}}function Xe(r){let e,t,n,a,l,s,f,c,o,i,w,_,U,H,J,W,D,R,m,y,I,d,K,S,M,A,j,G,F,Q,Y,ee,X=ie,L=[];for(let k=0;k<X.length;k+=1)L[k]=De(Ae(r,X,k));let Z=ie,P=[];for(let k=0;k<Z.length;k+=1)P[k]=Ie(Oe(r,Z,k));let q=r[2]&&r[3]&&Le(r);return{c(){e=g("main"),t=g("h1"),n=C("Star Wars"),a=V(),l=g("h1"),s=C("The comparisons strike again"),f=V(),c=g("div"),o=g("label"),i=C("Pick character 1"),w=V(),_=g("select");for(let k=0;k<L.length;k+=1)L[k].c();U=V(),H=g("label"),J=C("Pick character 2"),W=V(),D=g("select");for(let k=0;k<P.length;k+=1)P[k].c();R=V(),m=g("button"),y=C("Get data"),I=V(),d=g("div"),q&&q.c(),K=V(),S=g("footer"),M=g("p"),A=C(`by\r
		`),j=g("a"),G=g("img"),Q=C("henrikvilhelmberglund"),this.h()},l(k){e=b(k,"MAIN",{class:!0});var T=E(e);t=b(T,"H1",{class:!0});var v=E(t);n=N(v,"Star Wars"),v.forEach(u),a=B(T),l=b(T,"H1",{class:!0});var $=E(l);s=N($,"The comparisons strike again"),$.forEach(u),f=B(T),c=b(T,"DIV",{});var x=E(c);o=b(x,"LABEL",{for:!0});var _e=E(o);i=N(_e,"Pick character 1"),_e.forEach(u),w=B(x),_=b(x,"SELECT",{name:!0,id:!0});var me=E(_);for(let le=0;le<L.length;le+=1)L[le].l(me);me.forEach(u),U=B(x),H=b(x,"LABEL",{for:!0});var pe=E(H);J=N(pe,"Pick character 2"),pe.forEach(u),W=B(x),D=b(x,"SELECT",{name:!0,id:!0});var de=E(D);for(let le=0;le<P.length;le+=1)P[le].l(de);de.forEach(u),x.forEach(u),R=B(T),m=b(T,"BUTTON",{class:!0});var ve=E(m);y=N(ve,"Get data"),ve.forEach(u),I=B(T),d=b(T,"DIV",{class:!0});var ge=E(d);q&&q.l(ge),ge.forEach(u),T.forEach(u),K=B(k),S=b(k,"FOOTER",{class:!0});var be=E(S);M=b(be,"P",{});var ce=E(M);A=N(ce,`by\r
		`),j=b(ce,"A",{class:!0,href:!0});var fe=E(j);G=b(fe,"IMG",{class:!0,src:!0,alt:!0}),Q=N(fe,"henrikvilhelmberglund"),fe.forEach(u),ce.forEach(u),be.forEach(u),this.h()},h(){p(t,"class","uno-i3kzqs"),p(l,"class","uno-gdjwma"),p(o,"for","character1Name"),p(_,"name","character1Name"),p(_,"id","character1Name"),r[0]===void 0&&ke(()=>r[10].call(_)),p(H,"for","character2Name"),p(D,"name","character2Name"),p(D,"id","character2Name"),r[1]===void 0&&ke(()=>r[11].call(D)),p(m,"class","uno-ylnhsu"),p(d,"class","uno-hlz3d8"),p(e,"class","uno-i33qvz"),p(G,"class","uno-043j0c"),he(G.src,F=ue+"/Henrik.png")||p(G,"src",F),p(G,"alt","avatar"),p(j,"class","uno-gt78pw"),p(j,"href","https://github.com/henrikvilhelmberglund"),p(S,"class","uno-lh1a7i")},m(k,T){O(k,e,T),h(e,t),h(t,n),h(e,a),h(e,l),h(l,s),h(e,f),h(e,c),h(c,o),h(o,i),h(c,w),h(c,_);for(let v=0;v<L.length;v+=1)L[v].m(_,null);oe(_,r[0]),h(c,U),h(c,H),h(H,J),h(c,W),h(c,D);for(let v=0;v<P.length;v+=1)P[v].m(D,null);oe(D,r[1]),h(e,R),h(e,m),h(m,y),h(e,I),h(e,d),q&&q.m(d,null),O(k,K,T),O(k,S,T),h(S,M),h(M,A),h(M,j),h(j,G),h(j,Q),Y||(ee=[te(_,"change",r[10]),te(_,"change",function(){Ee(r[5]=!1)&&(r[5]=!1).apply(this,arguments)}),te(D,"change",r[11]),te(D,"change",function(){Ee(r[5]=!1)&&(r[5]=!1).apply(this,arguments)}),te(m,"click",r[12])],Y=!0)},p(k,[T]){if(r=k,T&0){X=ie;let v;for(v=0;v<X.length;v+=1){const $=Ae(r,X,v);L[v]?L[v].p($,T):(L[v]=De($),L[v].c(),L[v].m(_,null))}for(;v<L.length;v+=1)L[v].d(1);L.length=X.length}if(T&1&&oe(_,r[0]),T&0){Z=ie;let v;for(v=0;v<Z.length;v+=1){const $=Oe(r,Z,v);P[v]?P[v].p($,T):(P[v]=Ie($),P[v].c(),P[v].m(D,null))}for(;v<P.length;v+=1)P[v].d(1);P.length=Z.length}T&2&&oe(D,r[1]),r[2]&&r[3]?q?q.p(r,T):(q=Le(r),q.c(),q.m(d,null)):q&&(q.d(1),q=null)},i:se,o:se,d(k){k&&u(e),ne(L,k),ne(P,k),q&&q.d(),k&&u(K),k&&u(S),Y=!1,Je(ee)}}}function re(r){if(r==="hairColor"||r==="eyeColor"||r==="skinColor"){let e=r.split("Color")[0];return e[0].toUpperCase()+e.slice(1)+" color"}else return r[0].toUpperCase()+r.slice(1)}function Ze(r,e,t){let n,a,l,s;async function f(){w();let m=await Ne(n),y=await Ne(a);console.log(m.results[0]),console.log(y.results[0]);let I="images/"+m.results[0].name.replaceAll(" ","_")+"_placeholder.png",d="images/"+y.results[0].name.replaceAll(" ","_")+"_placeholder.png",{name:K,gender:S,height:M,mass:A,hair_color:j,skin_color:G,eye_color:F,films:Q}=m.results[0],{name:Y,gender:ee,height:X,mass:L,hair_color:Z,skin_color:P,eye_color:q,films:k}=y.results[0];t(2,l=new we(K,S,M,A.replaceAll(",",""),j,G,F,Q,I)),console.log(l),t(3,s=new we(Y,ee,X,L.replaceAll(",",""),Z,P,q,k,d)),console.log(s)}let c=!1,o=!1,i=[!1,!1];function w(){t(4,c=!1),t(5,o=!0),t(6,i=[!1,!1])}let _="";function U(){for(const[m,y]of Object.entries(l))if(typeof y=="number"){let I=document.querySelector(`#${m}_0`),d=document.querySelector(`#${m}_1`);y>s[m]?(I.className="green",d.className="red",t(7,_+=`${l.name}'s ${m} is greater than ${s.name}'s.^`)):y<s[m]?(d.className="green",I.className="red",t(7,_+=`${s.name}'s ${m} is greater than ${l.name}'s.^`)):(I.className="green",d.className="green",t(7,_+=`${l.name} and ${s.name} have the same ${m}.^`))}else if(m==="name"||m==="gender"||m==="hairColor"||m==="skinColor"||m==="eyeColor"){let I=document.querySelector(`#${m}_0`),d=document.querySelector(`#${m}_1`);y===s[m]&&(I.className="green",d.className="green",m.includes("Color")?t(7,_+=`${l.name} and ${s.name} have the same ${m.split("Color")[0]} color.^`):t(7,_+=`${l.name} and ${s.name} are both ${y}.^`))}else if(m==="movies"){let I=document.querySelector(`#${m}_0`),d=document.querySelector(`#${m}_1`);y.length>s[m].length?(I.className="green",d.className="red",t(7,_+=`^${l.name} has starred in more movies than ${s.name}.^`)):y.length<s[m].length?(d.className="green",I.className="red",t(7,_+=`^${s.name} has starred in more movies than ${l.name}.^`)):(I.className="green",d.className="green",t(7,_+=`^${l.name} and ${s.name} have starred in the same number of movies.^`))}}function H(){n=Ce(this),t(0,n)}function J(){a=Ce(this),t(1,a)}return[n,a,l,s,c,o,i,_,f,U,H,J,()=>{f(),t(5,o=!0)},()=>{t(7,_=""),t(4,c=!0),setTimeout(()=>{U()},1e3)},async(m,y)=>{t(6,i[m]=await y.returnFirstAppearance(y.movies),i)}]}class el extends He{constructor(e){super(),Re(this,e,Ze,Xe,Ge,{})}}export{el as default};
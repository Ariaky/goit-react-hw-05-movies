"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{1096:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,a,o,s,l,d,x,c,p,m=t(5861),f=t(9439),h=t(7757),g=t.n(h),v=t(7689),u=t(1087),j=t(168),w=t(7924),b=(0,w.ZP)(u.rU)(r||(r=(0,j.Z)(["\n    color: black;\n    \n    padding: 10px 20px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    text-decoration: none;\n    border-radius: 10px;\n    border: 1px solid rgba(190, 190, 190);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    font-size: 20px;\n    text-align: center;\n\n    @media only screen and (min-width: 768px) {\n        max-width: 184px;\n    }\n\n\n"]))),Z=t(184),y=function(n){var e=n.to,t=n.children;return(0,Z.jsx)(b,{to:e,children:t})},k=t(2791),P=w.ZP.div(i||(i=(0,j.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 15px;\n\n    @media only screen and (min-width: 768px) {\n        flex-direction: column;\n}\n"]))),S=w.ZP.h1(a||(a=(0,j.Z)(["\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    text-align: left;\n    font-size: 22px;\n    font-weight: 500;\n"]))),U=w.ZP.div(o||(o=(0,j.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-bottom: 15px;\n    border-bottom: 1px solid gray;\n\n    @media only screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 30px;\n    }\n"]))),G=w.ZP.img(s||(s=(0,j.Z)(["\n    object-fit: cover;\n    min-width: 100%;\n    \n    @media only screen and (min-width: 768px) {\n        min-width: 226px;\n        margin-bottom: 15px;\n    }\n"]))),I=w.ZP.div(l||(l=(0,j.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    margin-bottom: 15px;\n"]))),_=w.ZP.span(d||(d=(0,j.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n"]))),z=w.ZP.p(x||(x=(0,j.Z)(["\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 14px;\n    margin-bottom: 15px;\n"]))),T=w.ZP.ul(c||(c=(0,j.Z)(["\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    display: flex;\n    flex-direction: row;\n    gap: 4px;\n    margin-bottom: 15px;\n    }\n\n  "]))),C=w.ZP.h2(p||(p=(0,j.Z)(["\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    margin-bottom: 6px;\n"]))),V=t(5778),A=function(n){var e,t,r=n.poster,i=n.title,a=n.releaseDate,o=n.voteAvarage,s=n.overview,l=n.genres,d=(0,v.TH)(),x=(0,k.useRef)(null!==(e=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),c=o?o.toFixed(1):"";return(0,Z.jsxs)(P,{children:[(0,Z.jsx)(y,{to:x.current,children:"\u2190 Go back"}),(0,Z.jsxs)(U,{children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(G,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://via.placeholder.com/200x300?text=No+Image",width:250,alt:i})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(S,{children:[i," (",a?a.slice(0,4):null,")"]}),(0,Z.jsxs)(I,{children:[(0,Z.jsx)(V.Z,{rating:o,numberOfStars:10,starRatedColor:"#ffc414",starDimension:"16px",starSpacing:"3px"}),(0,Z.jsx)(_,{children:c})]}),(0,Z.jsx)(C,{children:"Overview"}),(0,Z.jsx)(z,{children:s}),(0,Z.jsx)(C,{children:"Genres"}),(0,Z.jsx)(T,{children:l&&l.map((function(n){return n.name})).join(", ")})]})]}),(0,Z.jsx)(C,{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]})},D=t(3579),O=t(1526),R=function(){var n=(0,k.useState)([]),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=(0,v.UO)().movieId,a=(0,k.useCallback)((0,m.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,O.BG)(i);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[i]);return(0,k.useEffect)((function(){a()}),[a]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(A,{poster:t.poster_path,title:t.title,releaseDate:t.release_date,voteAvarage:t.vote_average,overview:t.overview,genres:t.genres}),(0,Z.jsx)(k.Suspense,{fallback:(0,Z.jsx)(D.Z,{}),children:(0,Z.jsx)(v.j3,{})})]})}}}]);
//# sourceMappingURL=96.329f4a6f.chunk.js.map
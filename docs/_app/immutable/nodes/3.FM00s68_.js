import"../chunks/B17Q6ahh.js";import{c as P}from"../chunks/oTiwTGUC.js";import"../chunks/DsnmJJEf.js";import{z as k,p as j,f as p,t as w,a as b,b as S,aN as I,aw as O,c as o,r as s,s as m,Z as D}from"../chunks/Cyzci3AS.js";import{i as B}from"../chunks/vgtz_OvR.js";import{e as V,i as C}from"../chunks/BbI4LpFe.js";import{p as y,s as G}from"../chunks/D9agxZaB.js";import{s as g}from"../chunks/Ccumf3B4.js";import{s as N}from"../chunks/QPVT4RpM.js";import{b as L}from"../chunks/RksUhAnY.js";function M(l,t,e){var a=l==null?"":""+l;return t&&(a=a?a+" "+t:t),a===""?null:a}function z(l,t,e,a,c,r){var i=l.__className;if(k||i!==e||i===void 0){var d=M(e,a);(!k||d!==l.getAttribute("class"))&&(d==null?l.removeAttribute("class"):l.className=d),l.__className=e}return r}let R=["react-basics","svelte-basics"];async function T({params:l,fetch:t}){const e=R.map(r=>t(`${P.API}/blog/`+r).then(i=>i.ok?i.json():(console.log(`404 Route "${r}" was not found.`),null)).catch(i=>(console.log(`Error fetching "${r}":`,i.message),null)));return{posts:(await Promise.all(e)).filter(r=>r!==null)}}const it=Object.freeze(Object.defineProperty({__proto__:null,load:T},Symbol.toStringTag,{value:"Module"}));var Z=p("<div></div>");function q(l,t){j(t,!0);var e=Z();w(()=>z(e,1,t.class,"svelte-1xdbll9")),b(l,e),S()}var F=p('<a class="inline-block"><button> </button></a>'),H=p("<button> </button>");function J(l,t){let e=y(t,"href",3,""),a=y(t,"variant",3,"primary"),c=y(t,"size",3,"lg");const r={primary:"bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-xl"},i={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg",xl:"px-10 py-5 text-xl"};var d=I(),x=O(d);{var h=u=>{var n=F(),v=o(n),_=o(v,!0);s(v),s(n),w(()=>{N(n,"href",e()),z(v,1,`
                font-semibold rounded-xl transition-all duration-300 ease-out
                transform hover:scale-105 active:scale-95
                focus:outline-none focus:ring-4 focus:ring-blue-500/50
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg hover:shadow-xl
                ${r[a()]??""} ${i[c()]??""}
            `),g(_,t.text)}),b(u,n)},f=u=>{var n=H(),v=o(n,!0);s(n),w(()=>{z(n,1,`
            font-semibold rounded-full transition-all duration-300 ease-out
            transform hover:scale-105 active:scale-95
            focus:outline-none focus:ring-4 focus:ring-blue-500/50
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg hover:shadow-xl
            ${r[a()]??""} ${i[c()]??""}
        `),g(v,t.text)}),b(u,n)};B(x,u=>{e()?u(h):u(f,!1)})}b(l,d)}var K=p('<article class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700"><div class="p-6"><a><div class="flex items-center gap-2 text-sm text-zinc-400 mb-4"><span> </span> <span>•</span> <span> </span></div> <h3 class="text-xl font-bold mb-2"> </h3> <p class="text-zinc-400 md:text-lg mb-4"> </p></a></div></article>');function Q(l,t){var e=K(),a=o(e),c=o(a),r=o(c),i=o(r),d=o(i,!0);s(i);var x=m(i,4),h=o(x,!0);s(x),s(r);var f=m(r,2),u=o(f,!0);s(f);var n=m(f,2),v=o(n,!0);s(n),s(c),s(a),s(e),w(()=>{N(c,"href",L+"/blog/"+t.slug),g(d,t.date),g(h,t.read_time_estimation),g(u,t.title),g(v,t.summary)}),b(l,e)}var U=p('<section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]"><div class="mb-16"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Projects</h1></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div></section>'),W=p(`<main class="relative z-[1] w-full bg-zinc-900 "><div class="
        background w-full h-screen
        fixed z-[2]
        
    "><div class="
            w-full h-full
            absolute top-0 left-0  
            bg-[url('$lib/assets/noise.svg')] opacity-70
        "></div> <div class="blobs"><!></div></div> <section class="
        relative z-[3]
        w-11/12 md:w-3/4 mx-auto h-screen 
        flex flex-col justify-center
        pt-16 md:pt-24 pb-20 md:pb-80
    "><h1 class="
            text-4xl md:text-5xl lg:text-6xl
            font-extrabold tracking-tight pt-8 pb-3
        ">Diego V.</h1> <h2 class="
            text-2xl md:text-3xl lg:text-4xl
            font-bold tracking-tight opacity-30 mb-8
        ">Systems Engineer</h2> <p class="
            text-lg md:text-xl lg:text-2xl 
            font-light max-w-2xl mb-12 leading-relaxed
        ">I'm a backend developer with 2+ years of experience, and I also develop embedded software solutions as a hobby.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl"><div><h3 class="text-lg md:text-xl font-semibold mb-2">Currently</h3> <p class="opacity-50 md:text-lg 
                    font-normal tracking-wider
                ">Studying Systems Engineering</p></div> <div><h3 class="text-lg md:text-xl font-semibold mb-2">Seeking</h3> <ul class="opacity-50 md:text-lg font-normal tracking-wider"><li>Backend Development role</li></ul></div></div> <div class="mt-12"><!></div></section> <!></main>`);function nt(l,t){j(t,!0);let e=t.data.posts;var a=W(),c=o(a),r=m(o(c),2),i=o(r);q(i,{class:`
                blur-2xl rounded-br-full rounded-tr-full  
                pulse-animate
                absolute 
                -left-15 top-1/2 
                -translate-x-1/12 -translate-y-1/2

                bg-blue-700 opacity-80
                w-3/12 sm:w-1/12 h-8/12
                max-w-[180px] max-h-4/6
            `}),s(r),s(c);var d=m(c,2),x=m(o(d),8),h=o(x);J(h,{get href(){return P.BLOG},text:"Ver blog"}),s(x),s(d);var f=m(d,2);{var u=n=>{var v=U(),_=m(o(v),2);V(_,21,()=>e,C,(A,E)=>{Q(A,G(()=>D(E)))}),s(_),s(v),b(n,v)};B(f,n=>{e.length>=1&&n(u)})}s(a),b(l,a),S()}export{nt as component,it as universal};

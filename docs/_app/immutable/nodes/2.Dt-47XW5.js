import"../chunks/B17Q6ahh.js";import"../chunks/DsnmJJEf.js";import{o as _,aw as w,an as b,as as y,ar as g,ax as k,at as o,au as i,ap as m,Q as z}from"../chunks/NSEFbnKq.js";import{i as P}from"../chunks/BxH1XTVG.js";import{e as j,i as S}from"../chunks/C7EYBrCu.js";import{s as E}from"../chunks/CvYwY6mH.js";import{s as f}from"../chunks/CPskMXyx.js";import{s as N}from"../chunks/C-965xCA.js";import{b as A}from"../chunks/Bg8_yLxg.js";function B(s,t,e){var a=s==null?"":""+s;return a=a?a+" "+t:t,a===""?null:a}function D(s,t,e,a,n,l){var r=s.__className;if(_||r!==e||r===void 0){var c=B(e,a);(!_||c!==s.getAttribute("class"))&&(c==null?s.removeAttribute("class"):s.className=c),s.__className=e}return l}let I=["react-basics","svelte-basics"];async function O({params:s,fetch:t}){const e=I.map(l=>t("http://localhost:8000/blog/"+l).then(r=>r.ok?r.json():(console.log(`404 Route "${l}" was not found.`),null)).catch(r=>(console.log(`Error fetching "${l}":`,r.message),null)));return{posts:(await Promise.all(e)).filter(l=>l!==null)}}const X=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));var C=b("<div></div>");function M(s,t){w(t,!0);var e=C();y(()=>D(e,1,t.class,"svelte-1xdbll9")),g(s,e),k()}var Q=b('<article class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700"><div class="p-6"><a><div class="flex items-center gap-2 text-sm text-zinc-400 mb-4"><span> </span> <span>•</span> <span> </span></div> <h3 class="text-xl font-bold mb-2"> </h3> <p class="text-zinc-400 md:text-lg mb-4"> </p></a></div></article>');function R(s,t){var e=Q(),a=o(e),n=o(a),l=o(n),r=o(l),c=o(r,!0);i(r);var p=m(r,4),v=o(p,!0);i(p),i(l);var d=m(l,2),x=o(d,!0);i(d);var u=m(d,2),h=o(u,!0);i(u),i(n),i(a),i(e),y(()=>{N(n,"href",A+"/blog/"+t.slug),f(c,t.date),f(v,t.read_time_estimation),f(x,t.title),f(h,t.summary)}),g(s,e)}var T=b('<section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]"><div class="mb-16"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Projects</h1></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div></section>'),V=b(`<main class="relative z-[1] w-full bg-zinc-900 "><div class="
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
                ">Studying Systems Engineering</p></div> <div><h3 class="text-lg md:text-xl font-semibold mb-2">Seeking</h3> <ul class="opacity-50 md:text-lg font-normal tracking-wider"><li>Backend Development role</li></ul></div></div></section> <!></main>`);function Y(s,t){w(t,!0);let e=t.data.posts;var a=V(),n=o(a),l=m(o(n),2),r=o(l);M(r,{class:`
                blur-2xl rounded-br-full rounded-tr-full  
                pulse-animate
                absolute 
                -left-15 top-1/2 
                -translate-x-1/12 -translate-y-1/2

                bg-blue-700 opacity-80
                w-3/12 sm:w-1/12 h-8/12
                max-w-[180px] max-h-4/6
            `}),i(l),i(n);var c=m(n,4);{var p=v=>{var d=T(),x=m(o(d),2);j(x,21,()=>e,S,(u,h)=>{R(u,E(()=>z(h)))}),i(x),i(d),g(v,d)};P(c,v=>{e.length>=1&&v(p)})}i(a),g(s,a),k()}export{Y as component,X as universal};

import"../chunks/B17Q6ahh.js";import{c as z,e as P,i as j}from"../chunks/DzsH8w_K.js";import"../chunks/DsnmJJEf.js";import{A as _,p as y,f as b,t as w,a as g,b as k,c as o,r as i,s as m,a0 as S}from"../chunks/CbAEheNt.js";import{i as A}from"../chunks/DE8iaVpt.js";import{s as E}from"../chunks/DPhWKBJi.js";import{s as f}from"../chunks/xn5FxYo5.js";import{s as I}from"../chunks/DMOilZf8.js";import{b as N}from"../chunks/CjQXBZhJ.js";function B(s,t,e){var a=s==null?"":""+s;return a=a?a+" "+t:t,a===""?null:a}function D(s,t,e,a,n,l){var r=s.__className;if(_||r!==e||r===void 0){var c=B(e,a);(!_||c!==s.getAttribute("class"))&&(c==null?s.removeAttribute("class"):s.className=c),s.__className=e}return l}let O=["react-basics","svelte-basics"];async function R({params:s,fetch:t}){const e=O.map(l=>t(`${z.API_URL}/blog/`+l).then(r=>r.ok?r.json():(console.log(`404 Route "${l}" was not found.`),null)).catch(r=>(console.log(`Error fetching "${l}":`,r.message),null)));return{posts:(await Promise.all(e)).filter(l=>l!==null)}}const Y=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));var V=b("<div></div>");function C(s,t){y(t,!0);var e=V();w(()=>D(e,1,t.class,"svelte-1xdbll9")),g(s,e),k()}var L=b('<article class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700"><div class="p-6"><a><div class="flex items-center gap-2 text-sm text-zinc-400 mb-4"><span> </span> <span>•</span> <span> </span></div> <h3 class="text-xl font-bold mb-2"> </h3> <p class="text-zinc-400 md:text-lg mb-4"> </p></a></div></article>');function M(s,t){var e=L(),a=o(e),n=o(a),l=o(n),r=o(l),c=o(r,!0);i(r);var p=m(r,4),v=o(p,!0);i(p),i(l);var d=m(l,2),u=o(d,!0);i(d);var x=m(d,2),h=o(x,!0);i(x),i(n),i(a),i(e),w(()=>{I(n,"href",N+"/blog/"+t.slug),f(c,t.date),f(v,t.read_time_estimation),f(u,t.title),f(h,t.summary)}),g(s,e)}var T=b('<section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]"><div class="mb-16"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Projects</h1></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div></section>'),U=b(`<main class="relative z-[1] w-full bg-zinc-900 "><div class="
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
                ">Studying Systems Engineering</p></div> <div><h3 class="text-lg md:text-xl font-semibold mb-2">Seeking</h3> <ul class="opacity-50 md:text-lg font-normal tracking-wider"><li>Backend Development role</li></ul></div></div> <div class="mt-12"><a href="https://api-devvdiego.infinityfreeapp.com"><button class=" cursor-pointer
                    text-lg md:text-xl lg:text-2xl p-3 
                    bg-blue-800/50 rounded-full
                    hover:bg-blue/70 hover:scale-110 transition-transform">Ver blog</button></a></div></section> <!></main>`);function Z(s,t){y(t,!0);let e=t.data.posts;var a=U(),n=o(a),l=m(o(n),2),r=o(l);C(r,{class:`
                blur-2xl rounded-br-full rounded-tr-full  
                pulse-animate
                absolute 
                -left-15 top-1/2 
                -translate-x-1/12 -translate-y-1/2

                bg-blue-700 opacity-80
                w-3/12 sm:w-1/12 h-8/12
                max-w-[180px] max-h-4/6
            `}),i(l),i(n);var c=m(n,4);{var p=v=>{var d=T(),u=m(o(d),2);P(u,21,()=>e,j,(x,h)=>{M(x,E(()=>S(h)))}),i(u),i(d),g(v,d)};A(c,v=>{e.length>=1&&v(p)})}i(a),g(s,a),k()}export{Z as component,Y as universal};

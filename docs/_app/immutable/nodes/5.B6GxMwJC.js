import{f as g,a as v,t as I}from"../chunks/LaR_1xaD.js";import"../chunks/9wQ0V3Uh.js";import{p as k,t as h,a as z,c as e,r as t,s as c,J as y}from"../chunks/CdN2SWA2.js";import{s as p}from"../chunks/DrgnjvF2.js";import{a as j}from"../chunks/wkxDL9Mr.js";import{e as A,i as B}from"../chunks/CZKXOPH5.js";import{s as P}from"../chunks/m4gi8oQi.js";import{i as D}from"../chunks/Jj4iC4Si.js";import{s as V}from"../chunks/DHu1Urja.js";import{s as q}from"../chunks/DHSzcYN-.js";import{b as C}from"../chunks/ChDnAHXf.js";import{a as F,c as J}from"../chunks/DkKd-2ZO.js";import{r as L}from"../chunks/HnBW-5NE.js";import"../chunks/8UtF8RsF.js";var G=g("<div></div>");function H(x,r){k(r,!0);var l=G();h(()=>q(l,1,r.class,"svelte-1a15q85")),v(x,l),z()}var K=g('<article class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700"><div class="p-6"><a><div class="flex items-center gap-2 text-sm text-zinc-400 mb-4"><span> </span> <span>•</span> <span> </span></div> <h3 class="text-xl font-bold mb-2"> </h3> <p class="text-zinc-400 md:text-lg mb-4"> </p></a></div></article>');function M(x,r){var l=K(),f=e(l),n=e(f),d=e(n),m=e(d),w=e(m,!0);t(m);var b=c(m,4),a=e(b,!0);t(b),t(d);var s=c(d,2),i=e(s,!0);t(s);var o=c(s,2),u=e(o,!0);t(o),t(n),t(f),t(l),h(()=>{P(n,"href",C+"/blog/"+r.slug),p(w,r.date),p(a,r.read_time_estimation),p(i,r.title),p(u,r.summary)}),v(x,l)}var N=g(`<section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]"><div class="mb-16"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Featured blog posts</h1></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div> <div class="mt-12"><a class="
                    p-3 px-4 bg-neutral-800 border border-white rounded-lg
                ">Ver blog</a></div></section>`),O=g("<h1>Loading featured posts...</h1>"),Q=g(`<main class="relative z-[1] w-full bg-zinc-900 "><div class="
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
                ">Studying Systems Engineering</p></div> <div><h3 class="text-lg md:text-xl font-semibold mb-2">Seeking</h3> <ul class="opacity-50 md:text-lg font-normal tracking-wider"><li>Backend Development role</li></ul></div></div></section> <!></main>`);function it(x,r){k(r,!1);async function l(){try{return(await F.get(`${J.API}/blog`)).data}catch(a){if(a instanceof Error)throw a}}let f=l();D();var n=Q(),d=e(n),m=c(e(d),2),w=e(m);H(w,{class:`
                blur-2xl rounded-br-full rounded-tr-full  
                pulse-animate
                absolute 
                -left-15 top-1/2 
                -translate-x-1/12 -translate-y-1/2

                bg-blue-700 opacity-80
                w-3/12 sm:w-1/12 h-8/12
                max-w-[180px] max-h-4/6
            `}),t(m),t(d);var b=c(d,4);j(b,()=>f,a=>{var s=O();v(a,s)},(a,s)=>{var i=N(),o=c(e(i),2);A(o,5,()=>y(s),B,(_,E)=>{M(_,V(()=>y(E)))}),t(o);var u=c(o,2),S=e(u);t(u),t(i),h(_=>P(S,"href",_),[()=>L("/blog")]),v(a,i)},(a,s)=>{var i=I();h(o=>p(i,o),[()=>console.error("An error ocurred during fetching: ",y(s))]),v(a,i)}),t(n),v(x,n),z()}export{it as component};

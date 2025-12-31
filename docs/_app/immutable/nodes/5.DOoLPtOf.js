import{f as h,a as g,t as V}from"../chunks/DyXVPLU6.js";import"../chunks/aq-8T8O5.js";import{p as B,t as u,a as E,c as e,r as t,s as o,k as z}from"../chunks/BmrPca9F.js";import{s as f}from"../chunks/vgCI0c3w.js";import{r as S,a as j,S as I}from"../chunks/Co6nKvUP.js";import{e as A,i as D}from"../chunks/CHOJaHMm.js";import{s as P}from"../chunks/y0QUn2J4.js";import{i as F}from"../chunks/DDZlaJGW.js";import{s as q}from"../chunks/ChFo3vln.js";import{s as C}from"../chunks/YLMbwA1p.js";import{a as G,c as H}from"../chunks/DkKd-2ZO.js";import"../chunks/8UtF8RsF.js";var J=h("<div></div>");function K(p,s){B(s,!0);var d=J();u(()=>C(d,1,s.class,"svelte-1a15q85")),g(p,d),E()}var L=h('<article class="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700"><div class="p-6"><a><div class="flex items-center gap-2 text-sm text-zinc-400 mb-4"><span> </span> <span>•</span> <span> </span></div> <h3 class="text-xl font-bold mb-2"> </h3> <p class="text-zinc-400 md:text-lg mb-4"> </p></a></div></article>');function M(p,s){B(s,!0);var d=L(),_=e(d),n=e(_),c=e(n),v=e(c),y=e(v,!0);t(v);var w=o(v,4),r=e(w,!0);t(w),t(c);var l=o(c,2),a=e(l,!0);t(l);var i=o(l,2),m=e(i,!0);t(i),t(n),t(_),t(d),u(x=>{P(n,"href",x),f(y,s.date),f(r,s.read_time_estimation),f(a,s.title),f(m,s.summary)},[()=>S("/blog/[slug]",{slug:s.slug})]),g(p,d),E()}var N=h(`<section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]"><div class="mb-16"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Featured blog posts</h1></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div> <div class="mt-12"><a class="
                    p-3 px-4 bg-neutral-800 border border-white rounded-lg
                ">Ver blog</a></div></section>`),O=h(`<section class="w-11/12 md:w-3/4 mx-auto py-16 relative z-[3]"><div class="mb-16"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Featured blog posts</h1></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"><!> <!></div> <div class="mt-12"><a class="
                    p-3 px-4 bg-neutral-800 border border-white rounded-lg
                ">Ver blog</a></div></section>`),Q=h(`<main class="relative z-[1] w-full bg-zinc-900 "><div class="
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
                ">Studying Systems Engineering</p></div> <div><h3 class="text-lg md:text-xl font-semibold mb-2">Seeking</h3> <ul class="opacity-50 md:text-lg font-normal tracking-wider"><li>Backend Development role</li></ul></div></div></section> <!></main>`);function rt(p,s){B(s,!1);async function d(){try{return(await G.get(`${H.API}/blog`)).data}catch(r){if(r instanceof Error)throw r}}let _=d();F();var n=Q(),c=e(n),v=o(e(c),2),y=e(v);K(y,{class:`
                blur-2xl rounded-br-full rounded-tr-full  
                pulse-animate
                absolute 
                -left-15 top-1/2 
                -translate-x-1/12 -translate-y-1/2

                bg-blue-700 opacity-80
                w-3/12 sm:w-1/12 h-8/12
                max-w-[180px] max-h-4/6
            `}),t(v),t(c);var w=o(c,4);j(w,()=>_,r=>{var l=O(),a=o(e(l),2),i=e(a);I(i,{class:"w-full h-60"});var m=o(i,2);I(m,{class:"w-full h-60"}),t(a);var x=o(a,2),b=e(x);t(x),t(l),u(k=>P(b,"href",k),[()=>S("/blog")]),g(r,l)},(r,l)=>{var a=N(),i=o(e(a),2);A(i,5,()=>z(l),D,(b,k)=>{M(b,q(()=>z(k)))}),t(i);var m=o(i,2),x=e(m);t(m),t(a),u(b=>P(x,"href",b),[()=>S("/blog")]),g(r,a)},(r,l)=>{var a=V();u(i=>f(a,i),[()=>console.error("An error ocurred during fetching: ",z(l))]),g(r,a)}),t(n),g(p,n),E()}export{rt as component};

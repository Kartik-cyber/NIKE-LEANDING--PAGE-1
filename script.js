var tl = gsap.timeline()
gsap.from("#nav-part-1 img",{
    y:-100,  
    duration:0.9,
    scale:0.5,
    opacity:1,
})
gsap.from("#nav-part-2 ",{
    y:-100,  
    duration:0.5,
    scale:0.1,
    opacity:1,
})
tl.from("#nike-left",{
    y:150,  
    duration:0.9,
    scale:0.9,
    opacity:0.51,

})
gsap.from("#nike-right",{
    y:-150,  
    duration:0.9,
    scale:0.9,
    opacity:0.1,

})
gsap.from("#page-part-2-right-top",{
    y:-2000,  
    duration:0.9,
        opacity:0.1,
})
gsap.from("#page-part-2-right-bottom",{
    y:2000,  
    duration:0.9,
    opacity:0.1,

})
gsap.from("#page-part-2-left img",{
    // y:2000,  
    duration:0.9,
    opacity:0.1,
    scale:0.1,
})
gsap.from("#image img",{
    duration:0.9,
    opacity:0.9,
    scale:0.1,

})

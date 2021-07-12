function togglepara(){
    let a=document.getElementById('para');
    let b=document.getElementById('btn');
    if(a.style.display!='none'){
        a.style.display='none';
    }
    else{
        a.style.display='block';
    }
    
}
function togglepara1(){
    let a=document.getElementById('para1');
    let b=document.getElementById('btn1');
    if(a.style.display!='none'){
        a.style.display='none';
    }
    else{
        a.style.display='block';
    }
    
}  
function togglepara2(){
    let a=document.getElementById('para2');
    let b=document.getElementById('btn2');
    if(a.style.display!='none'){
        a.style.display='none';
    }
    else{
        a.style.display='block';
    }
    
} 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

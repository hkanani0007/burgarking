let images_dt=[
     {
         title : "THE CHICKEN <br> BURGER",
         price : "$12.90",
         MRP : "$24",
         calorie : 7845,
         fat : 98 ,
         protein : 112
     },
     {
         title : "THE PINK <br> BURGER",
         price : "$18.90",
         MRP : "$38",
         calorie : 4512,
         fat : 65,
         protein : 78
     },
     {
         title : "THE BLACK <br> BURGER",
         price : "$10.90",
         MRP : "$18",
         calorie : 6545,
         fat : 115 ,
         protein : 56
     },
     {
         title : "THE RED <br> BURGER",
         price : "$11.90",
         MRP : "$20",
         calorie : 9845,
         fat : 68 ,
         protein : 86
     },
     {
         title : "THE GREEN <br> BURGER",
         price : "$13.90",
         MRP : "$26",
         calorie : 1256,
         fat : 45 ,
         protein : 123
     },
     {
         title : "THE TORNADO <br> BURGER",
         price : "$18.90",
         MRP : "$38",
         calorie : 5678,
         fat : 92 ,
         protein : 99
     },
     {
         title : "THE COMBO <br> BURGER",
         price : "$9.90",
         MRP : "$17",
         calorie : 3245,
         fat : 49,
         protein : 78
     },
 ]

 let index = 0;

//  let image{
//     Array.from(document.getElementsByClassName('main_imgs')).forEach((el){
//         el.style.width = "60%";
//         el.style.filter = "blur(0px)";
//     });
// };

 document.getElementsByClassName('bi-chevron-right')[0].addEventListener('click',() =>{
     index += 310;
     document.getElementsByClassName('images')[0].scrollLeft= index;
     image();
     document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
     document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)";



 });

 document.getElementsByClassName('bi-chevron-left')[0].addEventListener('click',() =>{
    index += 310;
    document.getElementsByClassName('images')[0].scrollLeft= index;
    image();
    document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)";



});

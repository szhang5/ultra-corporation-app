function goShopping() {
	// alert("click");
	window.location.href = "shopping.html";
} 

function goBackToHomepage() {
	// alert("click");
	window.location.href = "homepage.html";
}

/***************************/	
/*-- IMAGE FLIP FUNCTION --*/
/***************************/
function changeImg(e){
	// alert("click");
	let id = parseInt(e.id, 10);
	let image = $(`#${id}`);
	let src = image.attr('src');
	// console.log(src);
    switch(id){
		case 1: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536970022/artifical_flower2.jpg'){
							image.stop().animate({opacity:'0'},function(){
				        $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536956841/hw2/artifical_flower.jpg');
				      }).on('load', function(){
				        $(this).stop().animate({opacity:'1'});
				      });
		        } 
		        if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536956841/hw2/artifical_flower.jpg' ){
		        	image.stop().animate({opacity:'0'},function(){
				        $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536970022/artifical_flower2.jpg');
				      }).on('load', function(){
				        $(this).stop().animate({opacity:'1'});
				      });
		        }
						break; 
		case 2: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536970175/Chinese_style2.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536956841/hw2/Chinese_style_home_accessories.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536956841/hw2/Chinese_style_home_accessories.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536970175/Chinese_style2.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 3: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536956842/hw2/decoration.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536970411/thinking_decoration.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536970411/thinking_decoration.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536956842/hw2/decoration.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 4: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536969884/painting2.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536957651/hw2/painting1.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536957651/hw2/painting1.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536969884/painting2.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 5: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536971290/vase2.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536971290/vase1.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536971290/vase1.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536971290/vase2.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 6: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536957766/hw2/kiss-painting.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536969767/kiss-painting2.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536969767/kiss-painting2.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536957766/hw2/kiss-painting.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 7: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536968809/hw2/desk-decoration2.png'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536958188/hw2/desk-decoration.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536958188/hw2/desk-decoration.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536968809/hw2/desk-decoration2.png');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 8: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536958188/hw2/wall-decoration.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536969561/wall-decoration2.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536969561/wall-decoration2.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536958188/hw2/wall-decoration.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break; 
		case 9: if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536971534/vase3.jpg'){
							image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536971534/vase4.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            } 
            if(src === 'https://res.cloudinary.com/zoey1111/image/upload/v1536971534/vase4.jpg'){
            	image.stop().animate({opacity:'0'},function(){
                $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536971534/vase3.jpg');
            	}).on('load', function(){
                $(this).stop().animate({opacity:'1'});
            	});
            }
						break;
		default: break;		
	}

}



/*onmouseover="changeImg(this)" onmouseout="backToImg(this)"*/
// function changeImg(e){
// 	let id = parseInt(e.id, 10);
// 	let image = $(`#${id}`);
// 	switch(id){
// 		case 1: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536970022/artifical_flower2.jpg";
// 						break; 
// 		case 2: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536956841/hw2/Chinese_style_home_accessories.jpg";
// 						break; 
// 		case 3: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536970411/thinking_decoration.jpg";
// 						break; 
// 		case 4: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536957651/hw2/painting1.jpg";
// 						break; 
// 		case 5: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536971290/vase1.jpg";
// 						break; 
// 		case 6: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536969767/kiss-painting2.jpg";
// 						break; 
// 		case 7: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536958188/hw2/desk-decoration.jpg";
// 						break; 
// 		case 8: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536969561/wall-decoration2.jpg";
// 						break; 
// 		case 9: e.src="https://res.cloudinary.com/zoey1111/image/upload/v1536971534/vase4.jpg";	
// 						break;
// 		default: break;		
// 	}
// }

// function backToImg(e){
// 	let id = parseInt(e.id, 10);
// 	let image = $(`#${id}`);
//     switch(id){
// 		case 1: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536956841/hw2/artifical_flower.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 2: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536970175/Chinese_style2.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 3: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536956842/hw2/decoration.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 4: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536969884/painting2.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 5: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536971290/vase2.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 6: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536957766/hw2/kiss-painting.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 7: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536968809/hw2/desk-decoration2.png');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 8: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536958188/hw2/wall-decoration.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break; 
// 		case 9: image.stop().animate({opacity:'0'},function(){
//                     $(this).attr('src', 'https://res.cloudinary.com/zoey1111/image/upload/v1536971534/vase3.jpg');
//             }).on('load', function(){
//                     $(this).stop().animate({opacity:'1'});
//             });
// 						break;
// 		default: break;		
// 		}
//  }

/**********************************/	
/*-- BACK GROUP CHANGE FUNCTION --*/
/**********************************/
// function changeBgr(e){
// 	let hpHeader = document.querySelector("header.homepage");
// 	hpHeader.classList.add("background");
// }

// function backToBgr(e){
// 	let hpHeader = document.querySelector("header.homepage");
//   hpHeader.classList.remove("background");
// }




 




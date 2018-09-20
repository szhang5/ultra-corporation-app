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
function flipImg(e) {
    e.classList.toggle('flipped');
}


/****************************/    
/*-- ADD TO CART FUNCTION --*/
/****************************/
let cartCount = 0;
const cartItems = {};
function addToCart(e, id) {
  cartCount++;
  const product = document.querySelector(`#${id}`);
  const image = product.querySelector('.card-face-front img').src;
  const title = product.querySelector('h3').innerHTML;
  const price = product.querySelector('p').innerHTML;
  if (cartItems[id]) {
    cartItems[id].count++;
  } else {
    cartItems[id] = {
      id,
      image,
      title,
      price,
      count: 1,
    };
  }
  // console.log(cartItems);
  document.querySelector('#countItem').innerHTML = cartCount;
}

/**********************************/    
/*-- SHOW CART SUMMARY FUNCTION --*/
/**********************************/
function showCart(e, id) {
  let summary = document.querySelector(`.${id}`);
  // console.log(summary);
  summary.style.display = "block";
}

function hideCart(e, id) {
  let summary = document.querySelector(`.${id}`);
  // console.log(summary);
  summary.style.display = "none";
}


/***********************/    
/*-- ROTATE FUNCTION --*/
/***********************/

let cube = document.querySelector('.cube');
let radioGroup = document.querySelector('.radio-group');
let reason = document.getElementsByClassName('reason');
let currentClass = '';
if (radioGroup) {
  let count = 0;
  let radio = $("input[type=radio]");
  setInterval(function() {
    count++;
    if(count < radio.length){
      // console.log(count);
        radio[count].checked = true;
        radioGroup.dispatchEvent(new Event('change'));
    } else {
      count = 0;
    }
    
  }, 3000);


  function changeSide() {
    if (!radioGroup) {
      return;
    }
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = 'show-' + checkedRadio.value;


    for(let i = 0; i < reason.length; i++) {
      if(i === (parseInt(checkedRadio.value, 10)-1)) {
        reason[i].hidden = false;
      } else {
        reason[i].hidden = true;
      }
    }

    if ( currentClass ) {
      cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
  }

  changeSide();

  radioGroup.addEventListener( 'change', changeSide );
}




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








 




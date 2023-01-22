//the first image that will be display on the phone mockup
var FirstImage = null;

//the element that on click will show or hidde the input password
var showpwdBtn = null;

//the password input
var inputPwd = null;

//all the inputs of the form
var inputs = null;

//all the input placeholder element
var placeholders = null;

/*
 *the init function that handle the phone galery animation
 */
const imageGalleryAnimationHandler = () => {
  //initialize all the variables
  FirstImage = document.getElementById("firstImg");
  let current = FirstImage;
  /**
   * we start with the first img and move on to the next and so on
   * until the last img that does not have a sibbling after it
   *    *in that case the current variable get the value of the first img
   */
  setInterval(() => {
    current.classList.remove("active");
    current =
      current.nextElementSibling == null
        ? FirstImage
        : current.nextElementSibling;
    current.classList.add("active");
  }, 4000);
};

const inputAnimationHandler = () => {
  //initialize all the variables
  showpwdBtn = document.querySelector(".show-password");
  inputPwd = document.getElementById("password");
  inputs = document.querySelectorAll(".formControl input");
  placeholders = document.querySelectorAll(".placeholder");

  /**
   * A simple use of the click event to swith the type of the input password to text an vice-versa
   */
  showpwdBtn.addEventListener("click", (e) => {
    showpwdBtn.innerText = inputPwd.type == "password" ? "Masquer" : "Afficher";
    inputPwd.type = inputPwd.type == "password" ? "text" : "password";
  });

  inputs.forEach((element) => {
    /**
     *  when an input element of the form lost the focus then:
     *      *the placeholder element get back to its original position (this action take place only if the input is empty)
     */
    element.addEventListener("blur", (e) => {
      element.placeholder="";
      if (e.currentTarget.value == "") {
        e.currentTarget.parentElement
          .querySelector(".placeholder")
          .classList.remove("active");
      }
    });

    /**
     * When the input Element get the focus we move up the placeholder Element
     */
    element.addEventListener("focus", (e) => {
      if(element.type == 'password'){
        element.placeholder ="**************";
      }else{
        element.placeholder ="blacklivemater237";
      }
      if (e.currentTarget.value == "") {
        e.currentTarget.parentElement
          .querySelector(".placeholder")
          .classList.add("active");
      }
    });
  });

  /**
   * Because the Placeholder Element is hover the input element and when it's click the input does not receive the focus
   * We have to manually fire the focus event on the sibbling input of the placeholder Element
   */
  placeholders.forEach((element) => {
    element.addEventListener("click", (e) => {
      const input = e.target.parentElement.querySelector("input");
      input.focus();
    });
  });
};

/**
 * The init function that will run all the animaitons
 */
const init = () => { 
  if(document.readyState === "complete"){
    console.log(document.readyState);
    inputAnimationHandler()
    handleImageLoading() 
  } 
};

/**
 * We will load all the images of our phone gallery when all the Elements of the DOM had been mounted
 * And start running our input behaviour
 * ---------------------------------------------------------------------*
 */

//the Images contenair Elements
var imagesWrapper = null;

//All our Images
var imagesElements = [];

//The path to our images order by the position in the HTML file
const imagesSrc = [
  "./assets/phoneMockup.png",
  "./assets/phoneImage1.png",
  "./assets/phoneImage2.png",
  "./assets/phoneImage3.png",
  "./assets/phoneImage4.png",
];

/*Our images loaded indicator variable which indicate us the number of images loaded
 *  * When this indicator === to the number of images inside our gallery we can run our gallery animation  
 */
var imagesLoaded = 0;

/**
 * STEPS:
 *    1.  We get all the images
 *    2. We initialize the src attribute of each of them
 *    3. We listen for the load event 
 *          * When an image is loader we increment the "imagesLoaded" variable
 *    4. We set a timer that will check the value of the "imagesLoaded" variable each 200ms
 * 
 */
function handleImageLoading() {
  imagesElements = document.querySelectorAll(".phone-container .wrapper img"); 
  imagesElements.forEach((elt, index) => {
    elt.src = imagesSrc[index];
    elt.addEventListener("load", (e) => imagesLoaded++);
  });
  checkImagesLoaded;
}

/**
 * We write time like this to be able to remove our timer when all the images have been loaded 
 * We clear our timer with the "clearInterval" function
 * When all the images have been loaded when remove the loading animation running on the phone mockup
 */
var checkImagesLoaded = setInterval(() => {
  if (imagesLoaded == imagesElements.length) {
    console.log("all images loaded");
    clearInterval(checkImagesLoaded);
    imagesWrapper = document.querySelector(".img-items"); 
    imagesWrapper.classList.remove("loading");
    imageGalleryAnimationHandler()
  } else {
    console.log(imagesLoaded);
  }
}, 200);


init();
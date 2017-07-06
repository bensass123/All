// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = ["https://i.imgur.com/wGo9L5s.gif","https://i.imgur.com/j2s75cA.gif","https://i.redd.it/t18c92m29c3y.jpg","https://i.imgur.com/9XzIeYS.gif","https://i.reddituploads.com/2a01fc9423f64c38835315cb6ee1e3e7?fit=max&h=1536&w=1536&s=7f33158852fdf549e804f2f587228d02"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.

$('#start').click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {

  // TODO: Increment the count by 1.
  	count += 1;


  // TODO: Show the loading gif in the "image-holder" div.


  	$('#image-holder').prepend('<img src="loading.gif" />');


  // TODO: Use a setTimeout to run displayImage after 1 second.

  setTimeout(displayImage, 1000);


  // TODO: If the count is the same as the length of the images array, reset the count to 0.

  if (count === images.length) {
  	count = 0;
  }

}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 1000);

}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

// This will run the display image function as soon as the page loads.
displayImage();

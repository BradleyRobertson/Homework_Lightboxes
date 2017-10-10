(function() {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

  function changeElements() {
    // make sure event handling  is working
    //debugger;
    let objectIndex = dynamicContent[this.id];
    // grab the object that corresponds to the ID of the element clicked on
    let subImages = document.querySelector('.subImagesContainer');

    // remove all subimages
    while(subImages.firstChild) {
      subImages.removeChild(subImages.firstChild);
    }

    // add some images at the bottom of the page
    objectIndex.images.forEach(function(image, index) {
      // create a new image element
      let newSubImg = document.createElement('img');
      // add a css class to it
      newSubImg.classList.add('thumb');
      // add a source
      newSubImg.src = "images/" + objectIndex.images[index];
      // add it to the page
      subImages.appendChild(newSubImg);

    });

    // remove the last css class applied
    theSubhead.classList.remove(appliedClass);
    theHeading.classList.remove(appliedClass);

    // change the color of the text elements
    theSubhead.classList.add(this.id);
    theHeading.classList.add(this.id);

    // change the content on the page
    // firstChild.nodeValue is the same as innerHTML (kind of)
    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;

    appliedClass = this.id;
  }

  theImages.forEach(function(element, index) {
    // loop through the images and add event handling to each one
    element.addEventListener('click', changeElements, false);
  });

  // theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
  // theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
  // theHeading.classList.add('spring');

  //document.querySelector('#spring').click();

  // more programmy-type way to do the same thing
  changeElements.call(document.querySelector('#spring'));
})();

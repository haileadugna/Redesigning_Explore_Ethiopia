function showimage(idx){

    let images = document.getElementsByClassName("carousel-item");

    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    console.log(images)
    images[idx-1].style.display = "block";
}

function showMod(idx, idx2){
    var the_demo = document.getElementsByClassName("d-block")[idx2-1];
    console.log(the_demo);
    var image_elmt = the_demo.getElementsByClassName("img-elmt")[idx-1];
    console.log(image_elmt);
    var the_modal = document.getElementsByClassName("modal")[idx-1];
    var img = image_elmt.getElementsByTagName("img")[0];
    var modal_img = the_modal.getElementsByTagName("img")[0];


    the_modal.style.display = "block";
    modal_img.src = img.src;
}

function closeMod(){
    var the_modal = document.getElementsByClassName("modal");

    for (let i = 0; i < the_modal.length; i++){
        the_modal[i].style.display = "none";
    }
}


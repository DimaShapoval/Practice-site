const buttonVoting = document.getElementById('button-voting');
const votingImage = document.getElementById('first-image');
const buttonBreeds = document.getElementById('form-breeds-radio');
const breedsImage = document.getElementById('second-image-wrapper');
const galleryImage = document.getElementById('third-image-wrapper');
const buttonGallery = document.getElementById('form-gallery-radio');
const thirdImage = document.getElementById('third-image-wrapper');
const backImageMain = document.getElementById('background-main-image');
const mainImage = document.getElementById('main-image');
const searchVoting = document.getElementById('search-voting');
const loupeWrapper = document.getElementById('loupe-wrapper');
const likeWrapper = document.getElementById('like-wrapper');
const favouritesWrapper = document.getElementById('favourites-wrapper');
const likeButton = document.getElementById('like-back');
const likeImage = document.getElementById('like-image');
const likeActiveImage = document.getElementById('like-image-2');
const favouritesButton = document.getElementById('favourites-back');
const favouritesActiveImage = document.getElementById('favourites-image-2');
const buttonWrapper = document.getElementById('button-wrapper');
const dislikeWrapper = document.getElementById('dislike-wrapper');
const dislikeButton = document.getElementById('dislike-back');
const dislikeActiveImage = document.getElementById('dislike-image-2');
const dislikeImage = document.getElementById('dislike-image');
const voitingActiveWrapper = document.getElementById('voting-active-wrapper');
const votingActiveText = document.getElementById('voting-active-text-wrapper');
const votingActiveButtonText = document.getElementById('voting-active-text');
const buttonBack = document.getElementById('back-button');
const buttonBackImage = document.getElementById('back-button-image');
const buttonBackActiveImage = document.getElementById('back-button-image2');
const backButtonWrapper = document.getElementById('back-button-wrapper');
const voitingActiveDoWrapper = document.getElementById('voiting-active-button-wrapper');
const voitingLikeButton = document.getElementById('voiting-like-button');
const voitingLikeButtonImage = document.getElementById('voiting-like-button-image');
const voitingFavouritesButtonWrapper = document.getElementById('voiting-favourites-button-wrapper');
const voitingFavouritesButton = document.getElementById('voiting-favourites-button');
const voitingFavouritesButtonImage = document.getElementById('voiting-favourites-button-image');
const voitingDislikeButton = document.getElementById('voiting-dislike-button');
const voitingDislikeButtonImage = document.getElementById('voiting-dislike-button-image');
const img = document.getElementById("response");
const activeStr = document.getElementsByClassName('inform-active');
const activeName = document.getElementsByClassName('inform-name');
const activeWrapper = document.getElementById('inform-wrapper');
const activeTime = document.getElementsByClassName('inform-time');
const activeImage = document.getElementsByClassName('inform-active-image');
let url = "https://api.thecatapi.com/v1/images/search?size=small&limit=1&has_breeds=1";
let borderColor = "4px solid rgba(255, 255, 255, 0.6)";
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

//BUTTON VOTING
buttonVoting.addEventListener('change', function(){
    votingImage.style.border = "4px solid #FBE0DC";
    votingImage.style.transition = "all 0.3s";
    breedsImage.style.border = borderColor;
    thirdImage.style.border = borderColor;
    mainImage.style.display = "none";
    likeActiveImage.style.display = "none";
    likeWrapper.style.backgroundColor = "#FFF";
    favouritesWrapper.style.backgroundColor = "#FFF";
    favouritesActiveImage.style.display = "none";
    dislikeWrapper.style.display = "inline";
    backImageMain.style.display = "none";
    searchVoting.style.display = "inline";
    loupeWrapper.style.display = "inline";
    favouritesWrapper.style.display = "inline";
    likeWrapper.style.display = "inline";
    likeButton.style.opacity = "0";
    searchVoting.style.border = "0px"
    dislikeWrapper.style.backgroundColor = "#FFF";
    dislikeActiveImage.style.display = "none";
    voitingActiveWrapper.style.display = "inline";
    votingActiveText.style.display = "inline";
    votingActiveButtonText.innerText = "VOTING";
    votingActiveButtonText.style.letterSpacing = "2px";
    votingActiveText.style.width = "146px";
    votingActiveButtonText.style.width = "146px";
    votingActiveButtonText.style.left = "0px";
    voitingActiveDoWrapper.style.display = 'flex';
    img.style.display = "inline";
    breedsActiveForm.style.display = "";
    activeWrapper.style.display = "flex";
    activeImageWrapper.style.display = "";

    fetch(url)
    .then(response => response.json())
    .then(commits => {
        img.src = commits[0].url
        img.name = commits[0].id
    }); // после commits => {дальше пишешь что надо}
});
// BREEDS BUTTON
buttonBreeds.addEventListener('change', function(){
    breedsImage.style.border = "4px solid #FBE0DC";
    breedsImage.style.transition = "all 0.3s";
    votingImage.style.border = borderColor;
    thirdImage.style.border = borderColor;
    votingImage.style.transition = "all 0.3s";
    mainImage.style.display = "none";
    likeActiveImage.style.display = "none";
    favouritesActiveImage.style.display = "none";
    likeWrapper.style.backgroundColor = "#FFF";
    favouritesWrapper.style.backgroundColor = "#FFF";
    backImageMain.style.display = "none";
    searchVoting.style.display = "inline";
    loupeWrapper.style.display = "inline";
    likeWrapper.style.display = "inline";
    favouritesWrapper.style.display = "inline";
    likeButton.style.opacity = "0";
    searchVoting.style.border = "0px"
    dislikeWrapper.style.display = "inline";
    dislikeWrapper.style.backgroundColor = "#FFF";
    dislikeActiveImage.style.display = "none";
    voitingActiveWrapper.style.display = "inline";
    votingActiveText.style.display = "inline";
    votingActiveButtonText.innerText = "BREEDS";
    votingActiveButtonText.style.letterSpacing = "2px";
    votingActiveText.style.width = "148px";
    votingActiveButtonText.style.width = "148px";
    votingActiveButtonText.style.left = "2px";
    voitingActiveDoWrapper.style.display = 'none';
    img.style.display = "none";
    activeWrapper.style.display = "";
    
});
// BUTTON GALLERY
buttonGallery.addEventListener('change', function(){
    votingImage.style.border = borderColor;
    breedsImage.style.border = borderColor;
    thirdImage.style.border = "4px solid #FBE0DC";
    thirdImage.style.transition = "all 0.3s";
    mainImage.style.display = "none";
    likeActiveImage.style.display = "none";
    favouritesActiveImage.style.display = "none";
    likeWrapper.style.backgroundColor = "#FFF";
    favouritesWrapper.style.backgroundColor = "#FFF";
    searchVoting.style.display = "inline";
    loupeWrapper.style.display = "inline";
    likeWrapper.style.display = "inline";
    favouritesWrapper.style.display = "inline";
    likeButton.style.opacity = "0";
    searchVoting.style.border = "0px"
    backImageMain.style.display = "none";
    dislikeWrapper.style.display = "inline";
    dislikeWrapper.style.backgroundColor = "#FFF";
    dislikeActiveImage.style.display = "none";
    voitingActiveWrapper.style.display = "inline";
    votingActiveText.style.display = "inline";
    votingActiveButtonText.innerText = "GALLERY";
    votingActiveButtonText.style.letterSpacing = "2px";
    votingActiveText.style.width = "156px";
    votingActiveButtonText.style.width = "146px";
    votingActiveButtonText.style.left = "5px";
    voitingActiveDoWrapper.style.display = 'none';
    img.style.display = "none";
    activeWrapper.style.display = "";
    breedsActiveForm.style.display = ""
    activeImageWrapper.style.display = "none";
    
})
// SEARCH
searchVoting.addEventListener('focus', function(){
    searchVoting.placeholder = " ";
    getComputedStyle(searchVoting, "::-ms-clear").display = "none";
    searchVoting.style.color = "#1D1D1D";
    searchVoting.style.fontWeight = "400";
    voitingActiveWrapper.style.display = "none";
    
})
searchVoting.addEventListener('change', function(){
    searchVoting.placeholder = "Search for breeds by name";
    
})
searchVoting.addEventListener('click',function(){
    votingActiveButtonText.innerHTML = "SEARCH";
    votingActiveButtonText.style.letterSpacing = "2px";
    buttonBreeds.checked = false;
    buttonVoting.checked = false;
    buttonGallery.checked = false;
    likeButton.checked = false;
    favouritesButton.checked = false;
    dislikeButton.checked = false;
    likeWrapper.style.backgroundColor = "rgb(255, 255, 255)";
    likeActiveImage.style.display = "none";
    likeImage.style.display = "inline";
    favouritesWrapper.style.backgroundColor = "rgb(255, 255, 255)";
    favouritesActiveImage.style.display = "none";
    dislikeWrapper.style.backgroundColor = "rgb(255, 255, 255)";
    dislikeActiveImage.style.display = "none";
    
    
    
})
searchVoting.addEventListener('input', function(){
    img.style.display = "none";
    activeWrapper.style.display = "none";
    voitingActiveDoWrapper.style.display = 'none';
    activeImageWrapper.style.display = "none";
})
// LIKE BUTTON
likeButton.addEventListener('change', function(){
    likeWrapper.style.backgroundColor = "var(--active-color)";
    likeActiveImage.style.display = "inline";
    favouritesWrapper.style.backgroundColor = "#fff";
    favouritesActiveImage.style.display = "none";
    dislikeWrapper.style.backgroundColor = "#FFF";
    dislikeActiveImage.style.display = "none";
    breedsImage.style.border = borderColor;
    thirdImage.style.border = borderColor;
    votingImage.style.border = borderColor;
    voitingActiveWrapper.style.display = "inline";
    votingActiveButtonText.innerText = "LIKES";
    votingActiveButtonText.style.letterSpacing = "2px";
    votingActiveText.style.width = "119px";
    votingActiveButtonText.style.width = "109px";
    voitingActiveDoWrapper.style.display = 'none';
    img.style.display = "none";
    activeWrapper.style.display = "none";
    activeImageWrapper.style.display = "none";

    
    
})
likeButton.addEventListener('mousemove', function(){
    if(likeButton.checked === false){
        likeWrapper.style.backgroundColor = "var(--back-color)";
    }
    else{
        likeWrapper.style.backgroundColor = "var(--active-color)";
    }
    
})
likeButton.addEventListener('mouseout', function(){
    if(likeButton.checked === false){
        likeWrapper.style.backgroundColor = "";
    }
    else{
        likeWrapper.style.backgroundColor = "var(--active-color)";
    }
    
})
// FAVOURITES BUTTON
favouritesButton.addEventListener('change', function(){
    likeWrapper.style.backgroundColor = "#FFF";
    likeActiveImage.style.display = "none";
    dislikeWrapper.style.backgroundColor = "#FFF";
    dislikeActiveImage.style.display = "none";
    favouritesWrapper.style.backgroundColor = "var(--active-color)";
    favouritesActiveImage.style.display = "inline";
    breedsImage.style.border = borderColor;
    thirdImage.style.border = borderColor;
    votingImage.style.border = borderColor;
    voitingActiveWrapper.style.display = "inline";
    votingActiveButtonText.innerHTML = "FAVOURITES";
    votingActiveButtonText.style.letterSpacing = "2px";
    votingActiveText.style.width = "192px";
    votingActiveButtonText.style.width = "182px";
    voitingActiveDoWrapper.style.display = 'none';
    img.style.display = "none";
    activeWrapper.style.display = "";
    activeImageWrapper.style.display = "none";
})
favouritesButton.addEventListener('mousemove', function(){
    if(favouritesButton.checked === false){
        favouritesWrapper.style.backgroundColor = "var(--back-color)";
    }
    else{
        favouritesWrapper.style.backgroundColor = "var(--active-color)";
    }
    
})
favouritesButton.addEventListener('mouseout', function(){
    if(favouritesButton.checked === false){
        favouritesWrapper.style.backgroundColor = "";
    }
    else{
        favouritesWrapper.style.backgroundColor = "var(--active-color)";
    }
    
})
// DISLIKE BUTTON
dislikeButton.addEventListener('change', function(){
    dislikeWrapper.style.backgroundColor = "var(--active-color)";
    dislikeActiveImage.style.display = "inline";
    likeWrapper.style.backgroundColor = "#FFF";
    likeActiveImage.style.display = "none";
    favouritesWrapper.style.backgroundColor = "#fff";
    favouritesActiveImage.style.display = "none";
    dislikeActiveImage.style.zIndex = "2";
    breedsImage.style.border = borderColor;
    thirdImage.style.border = borderColor;
    votingImage.style.border = borderColor;
    voitingActiveWrapper.style.display = "inline";
    votingActiveButtonText.innerText = "DISLIKES";
    votingActiveButtonText.style.letterSpacing = "2px";
    votingActiveText.style.width = "156px";
    votingActiveButtonText.style.width = "146px";
    voitingActiveDoWrapper.style.display = 'none';
    img.style.display = "none";
    activeWrapper.style.display = "";
    activeImageWrapper.style.display = "none";
})
dislikeButton.addEventListener('mousemove', function(){
    if(dislikeButton.checked === false){
        dislikeWrapper.style.backgroundColor = "var(--back-color)";
    }
    else{
        dislikeWrapper.style.backgroundColor = "var(--active-color)";
    }
    
})
dislikeButton.addEventListener('mouseout', function(){
    if(dislikeButton.checked === false){
        dislikeWrapper.style.backgroundColor = "";
    }
    else{
        dislikeWrapper.style.backgroundColor = "var(--active-color)";
    }
    
})
// BUTTON BACK
buttonBack.addEventListener('click', function(event){
    event.preventDefault();
    searchVoting.style.display =  "none";
    loupeWrapper.style.display = "none";
    likeWrapper.style.display = "none";
    favouritesWrapper.style.display = "none";
    dislikeWrapper.style.display = "none";
    voitingActiveWrapper.style.display = "none";
    mainImage.style.display = "inline";
    backImageMain.style.display = "inline";
    breedsImage.style.border = borderColor;
    thirdImage.style.border = borderColor;
    votingImage.style.border = borderColor;
    buttonBreeds.checked = false;
    buttonVoting.checked = false;
    buttonGallery.checked = false;
    likeButton.checked = false;
    favouritesButton.checked = false;
    dislikeButton.checked = false;
    img.style.display = "none";
    activeWrapper.style.display = "";
    activeImageWrapper.style.display = "none";
    
    
})

buttonBack.addEventListener('mousemove',function(){
    buttonBackImage.style.display = "none";
    buttonBackActiveImage.style.display = "inline";
    backButtonWrapper.style.backgroundColor = "var(--active-color)";
})
buttonBack.addEventListener('mouseleave', function(){
    buttonBackImage.style.display = "inline";
    buttonBackActiveImage.style.display = "none";
    backButtonWrapper.style.backgroundColor = "var(--back-color)";
})
// VOITING DOING
voitingLikeButton.addEventListener('click', function(event){
    event.preventDefault();
    voitingFavouritesButton.checked  = false;
    voitingFavouritesButtonImage.style.backgroundImage = "";
    img.style.display = "inline";
    let url = "https://api.thecatapi.com/v1/images/search?size=small&limit=1&has_breeds=1";

    
    fetch(url)
    .then(response => {
        return response.json()
        
    })
    .then(commits =>{
         img.src = commits[0].url
         img.name = commits[0].id
         
        }); 
        // console.log(img.name);
       let activeNameText = img.name; 
       let date = new Date();
       let hours = date.getHours();
       let minutes = date.getMinutes();
       
    
    for(let i=0;i<activeStr.length;i++){
        let index = 0;
        activeStr[i].innerHTML.split(' ')[2]=activeNameText;
        // console.log(activeNameText);
        if(activeStr[i].innerHTML == " "){
            activeImage[i].style.backgroundImage = "url(.//voitingDoing/likeMini.svg)"
            activeTime[i].innerHTML = hours + ":" + minutes;
            if(minutes<10){
                activeTime[i].innerHTML = hours + ":0" + minutes;
            }
            activeStr[i].innerHTML = "Image ID: " + activeNameText +  " was added to Likes" 
            console.log(activeStr[i].innerHTML.split(' ')[2]);
            break;
        }
        else if (activeStr[0].innerHTML != " " && activeStr[1].innerHTML != " " && activeStr[2].innerHTML != " " && activeStr[3].innerHTML != " "){
            activeName.innerHTML = activeNameText;
            i=3;
            activeStr[0].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites"
            activeStr[1].innerHTML = " "
            activeStr[2].innerHTML = " "
            activeStr[3].innerHTML = " "
            activeImage[0].style.backgroundImage = "url(.//voitingDoing/likeMini.svg)"
            activeImage[1].style.backgroundImage = ""
            activeImage[2].style.backgroundImage = ""
            activeImage[3].style.backgroundImage = ""
            activeTime[0].innerHTML = hours + ":" + minutes;
            if(minutes<10){
                activeTime[0].innerHTML = hours + ":0" + minutes;
            }
            activeTime[1].innerHTML =" ";
            activeTime[2].innerHTML =" ";
            activeTime[3].innerHTML =" ";

            
            

            }
            
            
        }
        
    } 
      


)
voitingLikeButton.addEventListener('mousemove', function(){
    voitingLikeButton.style.backgroundColor = "rgba(151, 234, 185, 0.3)";
    voitingLikeButtonImage.style.backgroundImage = "url(.//voitingDoing/likeHover.svg)";

})
voitingLikeButton.addEventListener('mouseout', function(){
    voitingLikeButton.style.backgroundColor = "#97EAB9";
    voitingLikeButtonImage.style.backgroundImage = "";
})
// FAVOURITES BUTTON WHEN VOITING ACTIVE
voitingFavouritesButtonWrapper.addEventListener('mouseover', function(){
    if(voitingFavouritesButton.checked === true){
        voitingFavouritesButtonImage.style.backgroundImage = "url(.//voitingDoing/favouritesChecked.svg)";
        
    }
    else{
        voitingFavouritesButtonImage.style.backgroundImage = "url(.//voitingDoing/FavouritesHover.svg)";
        voitingFavouritesButtonWrapper.style.backgroundColor = "rgba(255, 134, 142, 0.3)";
    }
    
})
voitingFavouritesButton.addEventListener('mouseout', function(){
    if(voitingFavouritesButton.checked === true){
        voitingFavouritesButtonImage.style.backgroundImage = "url(.//voitingDoing/favouritesChecked.svg)";
        
    }
    else{
        voitingFavouritesButtonImage.style.backgroundImage = "";
        voitingFavouritesButtonWrapper.style.backgroundColor = "";
        voitingFavouritesButtonImage.style.backgroundImage = ""
    }
})
voitingFavouritesButton.addEventListener('change', function(){
    voitingFavouritesButtonImage.style.backgroundImage = "url(.//voitingDoing/favouritesChecked.svg)";
    voitingFavouritesButtonWrapper.style.backgroundColor = "";
    if(voitingFavouritesButton.checked === false){
        voitingFavouritesButtonImage.style.backgroundImage = "";
    }
    fetch(url)
    .then(response => {
        return response.json()
        
    })
        // console.log(img.name);
       let activeNameText = img.name;  
       let date = new Date();
       let hours = date.getHours();
       let minutes = date.getMinutes();
    for(let i=0;i<activeStr.length;i++){
        let index = 0;
        activeStr[i].innerHTML.split(' ')[2]=activeNameText;
        if(voitingFavouritesButton.checked === false){
            if(activeStr[i].innerHTML == " "){
                activeStr[i].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites"
                activeTime[i].innerHTML = hours + ":" + minutes;
                activeImage[i].style.backgroundImage = ""
                    if(minutes<10){
                activeTime[i].innerHTML = hours + ":0" + minutes;
            } 
                break;
            }
            else if (activeStr[0].innerHTML != " " && activeStr[1].innerHTML != " " && activeStr[2].innerHTML != " " && activeStr[3].innerHTML != " "){
                activeName.innerHTML = activeNameText;
                i=3;
                activeStr[0].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites"
                activeStr[1].innerHTML = " "
                activeStr[2].innerHTML = " "
                activeStr[3].innerHTML = " "
                activeImage[0].style.backgroundImage = "url(.//voitingDoing/favouritesMini.svg)"
                activeImage[1].style.backgroundImage = ""
                activeImage[2].style.backgroundImage = ""
                activeImage[3].style.backgroundImage = ""
                activeTime[0].innerHTML = hours + ":" + minutes;
                if(minutes<10){
                    activeTime[0].innerHTML = hours + ":0" + minutes;
                }
                activeTime[1].innerHTML =" ";
                activeTime[2].innerHTML =" ";
                activeTime[3].innerHTML =" ";
    
                
                
    
                }
        
    } 
    if(voitingFavouritesButton.checked === true){
        if(activeStr[i].innerHTML == " "){
            activeStr[i].innerHTML = "Image ID: " + activeNameText +  " was added to Favourites"
            activeTime[i].innerHTML = hours + ":" + minutes;
            activeImage[i].style.backgroundImage = "url(.//voitingDoing/favouritesMini.svg)"
            if(minutes<10){
                activeTime[i].innerHTML = hours + ":0" + minutes;
            }
            break;
        }
        else if (activeStr[0].innerHTML != " " && activeStr[1].innerHTML != " " && activeStr[2].innerHTML != " " && activeStr[3].innerHTML != " "){
            activeName.innerHTML = activeNameText;
            i=3;
            activeStr[0].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites"
            activeStr[1].innerHTML = " "
            activeStr[2].innerHTML = " "
            activeStr[3].innerHTML = " "
            activeImage[0].style.backgroundImage = "url(.//voitingDoing/favouritesMini.svg)"
            activeImage[1].style.backgroundImage = ""
            activeImage[2].style.backgroundImage = ""
            activeImage[3].style.backgroundImage = ""
            activeTime[0].innerHTML = hours + ":" + minutes;
            if(minutes<10){
                activeTime[0].innerHTML = hours + ":0" + minutes;
            }
            activeTime[1].innerHTML =" ";
            activeTime[2].innerHTML =" ";
            activeTime[3].innerHTML =" ";

            
            

            
            
            if(voitingFavouritesButton.checked === false){
                if(activeStr[i].innerHTML == " "){
                    activeStr[i].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites" 
                    break;
                }
                else if (activeStr[0].innerHTML != " " && activeStr[1].innerHTML != " " && activeStr[2].innerHTML != " " && activeStr[3].innerHTML != " "){
                    activeName.innerHTML = activeNameText;
                    activeStr[0].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites"
                }
            }  
            
        }

            }
            

}
})
// DISLIKE BUTTON
voitingDislikeButton.addEventListener('click', function(event){
    event.preventDefault();
    voitingFavouritesButton.checked  = false;
    voitingFavouritesButtonImage.style.backgroundImage = "";
    img.style.display = "inline";
    fetch(url)
    .then(response => {
        return response.json()
        
    })
    .then(commits =>{
         img.src = commits[0].url
         img.name = commits[0].id
         
        }); 
        // console.log(img.name);
       let activeNameText = img.name; 
       let date = new Date();
       let hours = date.getHours();
       let minutes = date.getMinutes();
    for(let i=0;i<activeStr.length;i++){
        let index = 0;
        activeStr[i].innerHTML.split(' ')[2]=activeNameText;
        console.log(activeNameText);
        if(activeStr[i].innerHTML == " "){
            activeStr[i].innerHTML = "Image ID: " + activeNameText +  " was added to Dislikes" 
            activeTime[i].innerHTML = hours + ":" + minutes;
            activeImage[i].style.backgroundImage = "url(.//voitingDoing/dislikeMini.svg)"
            if(minutes<10){
                activeTime[i].innerHTML = hours + ":0" + minutes;
            }
            break;
        }
        else if (activeStr[0].innerHTML != " " && activeStr[1].innerHTML != " " && activeStr[2].innerHTML != " " && activeStr[3].innerHTML != " "){
            activeName.innerHTML = activeNameText;
            i=3;
            activeStr[0].innerHTML = "Image ID: " + activeNameText +  " was removed to Favourites"
            activeStr[1].innerHTML = " "
            activeStr[2].innerHTML = " "
            activeStr[3].innerHTML = " "
            activeImage[0].style.backgroundImage = "url(.//voitingDoing/dislikeMini.svg)"
            activeImage[1].style.backgroundImage = ""
            activeImage[2].style.backgroundImage = ""
            activeImage[3].style.backgroundImage = ""
            activeTime[0].innerHTML = hours + ":" + minutes;
            if(minutes<10){
                activeTime[0].innerHTML = hours + ":0" + minutes;
            }
            activeTime[1].innerHTML =" ";
            activeTime[2].innerHTML =" ";
            activeTime[3].innerHTML =" ";

            
            

            }
            
            
        }

})
voitingDislikeButton.addEventListener('mousemove', function(){
    voitingDislikeButton.style.backgroundColor = " rgba(255, 210, 128, 0.3)";
    voitingDislikeButtonImage.style.backgroundImage = "url(.//voitingDoing/dislikeHover.svg)";
})
voitingDislikeButton.addEventListener('mouseout',function(){
    voitingDislikeButton.style.backgroundColor = "";
    voitingDislikeButtonImage.style.backgroundImage = "";
})

// function fun1(){
//     votingImage.style.border = "4px solid #FF868E";
// }

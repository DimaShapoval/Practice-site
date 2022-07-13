const breedsSelectBreeds = document.getElementById('breeds-choose');
const breedsActiveForm = document.getElementById('breeds-active');
const activeImageWrapper = document.getElementById('inform-image-wrapper');
const sortA = document.getElementById('sort-button-a');
const sortAImage = document.getElementById('sort-button-a-image');
const sortZ = document.getElementById('sort-button-z');
const sortZImage = document.getElementById('sort-button-z-image');
const breedsFormImages = document.getElementsByClassName('breeds-image');
const limitSelect = document.getElementById('limit-choose');


buttonBreeds.addEventListener('change',function(){
    breedsActiveForm.style.display = "inline";
    activeImageWrapper.style.display = "none";
})
sortA.addEventListener('mouseover', function(){
    sortAImage.style.backgroundImage = "url(.//voitingDoing/sortAHover.svg)";
})
sortA.addEventListener('mouseout', function(){
    sortAImage.style.backgroundImage = "";
})
sortZ.addEventListener('mouseover', function(){
    sortZImage.style.backgroundImage = "url(.//voitingDoing/sortZHover.svg)";
})
sortZ.addEventListener('mouseout', function(){
    sortZImage.style.backgroundImage = "";
})
buttonBreeds.addEventListener('change', function(){
    document.getElementById('breeds-images-wrapper').style.display = "inline";    
    activeImageWrapper.style.display = "none";
    url = "https://api.thecatapi.com/v1/images/search?size=small&limit=20&has_breeds=1/v1/breeds?limit=20&page=0"
    // let url2 ="https://api.thecatapi.com/v1/breeds?limit=20&page=0"
    fetch(url)
    .then(response => response.json())
    .then(commits =>{
        for(let i = 0; i<20;i++){
            breedsFormImages[i].src = commits[i].url
            breedsFormImages[i].name = commits[i].id
            console.log(breedsFormImages[i].name)
            
            
            
        }
    // fetch(url2)
    // .then(response => response.json())
    // .then(commits =>{
    //     for(let i=0;i<20;i++){
    //         breedsFormImages[i].name = commits[i].name
    //         console.log(breedsFormImages[i].name)
    //     }
    // })
        
    })
    
})
limitSelect.addEventListener('change', function(){
    console.log(limitSelect.selectedIndex)
    if(limitSelect.selectedIndex == 0){
        for(let i=4;i<breedsFormImages.length;i++){
            breedsFormImages[i].style.display = "none";
            breedsFormImages[9].style.display = 'inline';
            
        }
        

    } 
    else if(limitSelect.selectedIndex == 1){
        for(let i=4;i<11;i++){
            breedsFormImages[i].style.display = "";
            for(let j=10;j<breedsFormImages.length;j++){
                breedsFormImages[j].style.display = "none";
            }
            
            
        }
        

    } 
    else if(limitSelect.selectedIndex == 2){
        for(let i=4;i<16;i++){
            breedsFormImages[i].style.display = "";
            for(let j=15;j<20;j++){
                breedsFormImages[j].style.display = "none";
            }
            
            
        }
        

    } 
    else if(limitSelect.selectedIndex == 3){
        for(let i=4;i<breedsFormImages.length;i++){
            breedsFormImages[i].style.display = "";
            
            
        }
        

    } 
})
if(limitSelect.selectedIndex == 1){
    for(let i=4;i<11;i++){
        breedsFormImages[i].style.display = "";
        for(let j=10;j<breedsFormImages.length;j++){
            breedsFormImages[j].style.display = "none";
        }
        
        
    }
    

} 
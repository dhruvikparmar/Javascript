let arr = ["5.jpg", "2.jpg", "1.jpg", "2.jpg", "5.jpg"];
let cnt = 0;

let back = document.getElementById("back");
let next = document.getElementById("next");
let  img= document.getElementById("img");

function updateImage() {
    img.src = arr[cnt]; 
    console.log(arr[cnt]);  
}

back.addEventListener("click", () => {
    cnt--;  
    if (cnt < 0) {
        cnt = arr.length - 1;  
    }
    updateImage();  
});

next.addEventListener("click", () => {
    cnt++;  
    if (cnt >= arr.length) {
        cnt = 0;   
    }
    updateImage();
});

updateImage();

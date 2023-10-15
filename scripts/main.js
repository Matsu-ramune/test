const myImage = document.querySelector("img");

myImage.onclick = () =>{
    const mySrc = myImage.getAttribute("src");
    if  (mySrc === "image/plk.png"){
        myImage.setAttribute("src", "image/saito.png");
    } else {
        myImage.setAttribute("src", "image/plk.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}団`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}団`;
}

myButton.onclick = () => {
    setUserName();
};
function demo2(): void{
    let input:HTMLInputElement = <HTMLInputElement> document.getElementById("img-name");
    let filename: String = input.value;

    let image:HTMLImageElement =<HTMLImageElement> document.getElementById("dice-1");
    image.src = "./img/" + filename;
}
function roll(){
    const max : number = 6;
    const min : number = 1;
    let a : number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let b : number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let image:HTMLImageElement =<HTMLImageElement> document.getElementById("dice-1");
    image.src ="./img/dice" + a + ".png";
    let image2: HTMLImageElement =<HTMLImageElement> document.getElementById("dice-2");
    image2.src = "./img/dice" + b + ".png";

}
export{};
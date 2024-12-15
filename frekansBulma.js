//Harf Frekans Bulma
let alfabe = "abcçdefgğhıijklmnoöprsştuüvyzwqx";
const sentence = prompt("Lütfen bir cümle giriniz.").toLocaleLowerCase("tr");
let letter = [];
for (let i = 0; i < alfabe.length; i++){
    letter[alfabe[i]] = 0;
}

for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    if(alfabe.includes(word)){
        letter[word] = letter[word] + 1;
    }
}
   console.log(letter);
   

//readline modulü require ile disaridan ice aktarildi.
const readline = require('readline');

//Random Sayi üretme Fonksiyonu
function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

//Ana Fonksiyon 
function main(){
    // 0 ile 100 arasinda rastgele bir hedef sayi olustur
    const targetNumber = generateRandomNumber(0,100);

    // kullanici icin gerekli olan denemeye sayisi 
    let attempts =0;

    //readline arayuzu olusturulur.
    const r1= readline.createInterface({
        input:process.stdin,  //kullanici girisi standart giris olarak belirt
        output:process.stdout  // kullanii ciktiyi standart cikti olarak belirle
    })

    //Deneme Fonksiyonu
    function tryGuess(){
        //Kullanicidan tahmin iste ve callback function kullanrak girisi isle
        r1.question("0 ile 100 arasinda bir ayi tahmin edin:",(guess)=>{
            //Kullanici girdisini tam sayiya donustur.
            const guessInt=parseInt(guess);

            //girdinin gecerli olub olmadigini kontrol et
            if(isNaN(guessInt)|| guessInt<0 || guessInt>100){
                console.log("Lutfen 0 ile 100 arasinda bir sayi giriniz.");
                tryGuess(); //Gecersiz giris durumunda  denemeyi tekrarla
                return;
            }

            // Deneme sayisini artir
            attempts++;

            //Dogru tahmini kontrol et
            if(guessInt==targetNumber){
                console.log("Tebrik sayiyi",attempts,"denemede buldunuz");
                r1.close(); //Oyunu Sonlandir
            }

            else if(attempts>=5){
                console.log("Uzgunum dogru sayiyi bulamadiniz dogru sayi",targetNumber);
                r1.close(); //Oyunu Sonlandir
            }
            else{
                console.log('Uzgunum yanlis tahmin.Kalan deneme:',5-attempts);
                tryGuess(); //Denemeyi tekrarla
                if(guess>targetNumber){
                    console.log("\nTahmin ettigin sayi bulacagin sayidan buyuk cikti");
                }
                else{
                    console.log("\nBulacagin sayi tahmin ettigin sayidan buyuk");
                }
            }
          

        })
    }
    //Deneme islemini baslat
    tryGuess();

    }
    //Programi baslat
    main();


// // class mathclass{
// //     constructor(a,b){
// //         this.a=a;
// //         this.b=b;

// //     }

// //     add(){
// //         return this.a+this.b;
// //     }
// //     ayirma(){
// //         return this.a-this.b;

// //     }
// //     bolinma(){
// //         return this.a/this.b;
// //     }

// // }
// // let asd=new mathclass(77,11);

// // console.log(asd.ayirma());
// //////////////////////////////////////////////////////////////

// // class animal{
// //     constructor(laqabi,oyoqlari){
// //         this.name=laqabi;
// //         this.legs=oyoqlari;
// //     }

// //     makeSound(){
// //         console.log("some sound");
// //     }
// // }
// // class dog extends animal{
    
// //     constructor(laqabi,oyoqlari,ovozi){
// //         super(laqabi,oyoqlari);
// //         this.voice=ovozi;
// //     }
// //     sound(){
// //         console.log(this.voice);
// //     }
    
// // }

// // let dog1=new dog("tuzik", 22,"vuuuu")
// // dog1.sound()


// class Books{
//     constructor(name,muallif,yili,size){
//         this.name=name;
//         this.muallif=muallif;
//         this.yili=yili;
//         this.size=size;
//     }

    
// }

// class eBook extends Books{
//     constructor(name,muallif,yili,size,sizemb){
//         super(name,muallif,yili,size);
//         this.sizemb=sizemb;
//     }
//     infoBook(){
//         console.log(this.name,this.muallif,this.yili,this.size,this.sizemb);
    
//     }
//     // sizeee(){
//     //     console.log(this.sizeee);
//     // }
// }


// class paperBook extends Books{
//     constructor(name,muallif,yili,size,muqovasi,paper_color){
//         super(name,muallif,yili,size);
//         this.muqovasi=muqovasi;
//         this.paper_color=paper_color;
//     }
//     infoBook(){
//         console.log(this.name,this.muallif,this.yili,this.size,this.muqovasi,this.paper_color);
    
//     }
// }

// let paper_ufq=new paperBook("\nUfq romani", "\nSaid Ahmad", "\n6666-yil","\n22222-varaqa","\nYumshoq muqovali","\nOq")

// let ufqEbook= new eBook("\nUfq", "\nSaid Ahmad", "\n9000", "\n276-varaq", "\n12 MB");

// paper_ufq.infoBook()




//////////  Homework  ////////


class Transport{
    constructor(name,weight,color){
        this.weight=weight;
        this.name=name;
        this.color=color;
        
    }
    
}
/// 1-voris
class vehicle extends Transport{
    constructor(name,weight,color,gildirak){
        super(name,weight,color)
        this.gildirak=gildirak;
    }

    infoTransport(){
        console.log(" 1-voris 1-qism \n Vehicle classi uchun  =>","\nNomi: ",this.name,"\nOg`irligi: ",this.weight,"\nRangi: ",this.color,"\nG`ildiraklar soni: ",this.gildirak);
    }
}
let vahicleTrans=new vehicle("Damas","1400 kg", "Oq", "4 ta");
vahicleTrans.infoTransport();

///// 2-voris  1-qism //////////
class truck extends vehicle{
    constructor(name,weight,color,gildirak,yuk_xona,orindiq){
        super(name,weight,color,gildirak);
        this.yuk_xona=yuk_xona;
        this.orindiq=orindiq;

    }
    infoTransport(){
        console.log("2-voris 1-qism\n Truck classi uchun =>","\nNomi: ",this.name,"\nOg`irligi: ",this.weight,"\nRangi: ",this.color,"\nG`ildiraklar soni: ",this.gildirak,"\nYuk xonasi bormi: ",this.yuk_xona,"\nO`rindiqlar soni: ",this.orindiq);
    }
}
let  truckTrans = new truck("Kamaz", "2 yoki 3 tonna", "Oq","6 ta","Yuk xonasi bor","2 ta joy bor")
truckTrans.infoTransport();

//////// 2-voris 2-qism ////////

class car extends vehicle{
    constructor(name,weight,color,gildirak,markasi,orindiq){
        super(name,weight,color,gildirak);
        this.markasi=markasi;
        this.orindiq=orindiq;

    }
    infoTransport(){
        console.log("2-voris 2-qism\n Car classi uchun =>","\nNomi: ",this.name,"\nOg`irligi: ",this.weight,"\nRangi: ",this.color,"\nG`ildiraklar soni: ",this.gildirak,"\nMarkasi: ",this.markasi,"\nO`rindiqlar soni: ",this.orindiq);
    }
}
let  carTrans = new car("Ferari","1500 kg", "Qizil","4 ta", "Ferrary", "2 ta")
carTrans.infoTransport();











///// 1-voris 2-qism///////////
class train extends Transport{
    constructor(name,weight,color,vagoni){
        super(name,weight,color);
            this.vagoni=vagoni;
        

    }
    infoTransport(){
        console.log(" 1-voris 2-qism \n Train  classi uchun =>","\nNomi: ",this.name,"\nOg`irligi: ",this.weight,"\nRangi: ",this.color,"\nVagonlar soni: ",this.vagoni);
    }

}
let trainTrans=new train("Metro", "bilmayman", "kulrang bo`lsa kerak", "30 tacha bordir");
trainTrans.infoTransport();


class intercity extends train{
    constructor(name,weight,color,vagoni,manzili) {
        super(name,weight,color,vagoni);
        this.manzili=manzili;
        
    }
    infoTransport(){
        console.log(" 2-voris 1-qism \n City  classi uchun => \n","\nNomi: ",this.name,"\nOg`irligi: ",this.weight,"\nRangi: ",this.color,"\nVagonlar soni: ",this.vagoni,"\nBoradigan Shaharlari: ",this.manzili);

    }
    
}

let cityTrain=new intercity("Afrosiyob", "2222 t", "k`ok-oq-yashil ranglarda", "20 ta", "Toshkent-Samarqand");
cityTrain.infoTransport();

class tram extends train{
    constructor(name,weight,color,vagoni,manzili) {
        super(name,weight,color,vagoni);
        this.manzili=manzili;
        
    }
    infoTransport(){
        console.log(" 2-voris 2-qism \n Tram  classi uchun => ","\nNomi: ",this.name,"\nOg`irligi: ",this.weight,"\nRangi: ",this.color,"\nVagonlar soni: ",this.vagoni,"\nBoradigan Shaharlari: ",this.manzili);

    }
    
}

let tramTrain=new tram("Metro", "999 t", "k`ok-oq-yashil ranglarda", "10 ta", "Toshkent shahri -Chirchiq-Chilonzor");
tramTrain.infoTransport();






//////////////



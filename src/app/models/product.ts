export class Product {
   id: number;
   name: string;
   description: string;
   price: number;
   imageUrl: string;

   constructor(id:number, name:string, description = '',price = 0,imageUrl='https://images-na.ssl-images-amazon.com/images/I/61DJRLNgyWL._AC_SL1500_.jpg') {
       this.id = id
       this.name = name
       this.description = description
       this.price = price
       this.imageUrl = imageUrl
   }

}


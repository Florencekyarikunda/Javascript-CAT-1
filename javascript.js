class Mkulima{
    constructor(farms,vendors,products,orders){
this.farms=[];
this.vendors=[];
this.products=[];
this.orders=[];

    }
    //this is a method used to add farms in the list
    addFarm(farmId,name, farmer, phone, address){
        var farm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address
        };
        
        this.farms.push(farm);
        return this.farms;
        }
//method is to remove farm id from the already existed farms
// and loops through the farm to remove the farmid. 

        removeFarm(farmId){
        let newFarm=this.farms.find(newFarm.farmId == farmId);
        return delete this.farms[newFarm];

        }

        updateFarm(farmId, name, farmer, phone, address){
            let myFarm=this.farms.find(myFarm=>myFarm.farmId == farmId);
            myFarm={
                farmId:farmId,
                name:name,
                farmer:farmer,
                phone:phone,
                address:address,
            };
          
           return this.myFarm; 
}
        getFarm(farmId){
        //    for(let p=0; p<this.farm.length; p++);
        //    let farm=this.farm[p];
        //    if(this.farm.farmId===farmId){
        //     return farm;
        //    }
let mFarm=this.farms.find(mFarm=>mFarm.farmId==farmId);
return mFarm;
    }
    //this method is adding products in the product list
 addProduct(farmId,name, farmer, phone, address){
        var product={
         productId:productId,
         name:name,
         price:price,
         }
        this.products.push(product);
        return products;
    }
    //this method remove product from the already existed products and loops through the list to remove the
removeProduct (){
let newProduct=this.product.find(newProduct.productId==productId);
return delete this.product[newProduct]

}
//
updateProduct(productId,name,price){
    let updateProduct=this.products.find(updateProduct=>updateProduct.productId==productId);
    updateProduct={
        productId:productId,
        name:name,
        price:price,
    }
    return updateProduct;
}
//farm and farmer were supposed to run
getProduct(productId){
let goodProduct=this.products.find(goodProduct=>goodProduct.productId==productId);
return goodProduct;
        }
        
printProducts(){
    for(let product of this.products){
        console.log(product.name +" "+ product.price);
    }
}

calculateOrderCost(quantity,productId){
    var totalCost=productId*quantity;
    return totalCost;
}


}

let mkulima=new Mkulima([],[],[],[]);
console.log(mkulima.addFarm(345,"Agaba farm","Mwesi","Punchase order","678- Kabartesi"));
console.log(mkulima.addFarm(2365,"rahima","dadu","7777896","uganda"))
 console.log(mkulima.removeProduct(2365));
console.log(newFarm.farmId(2365));


console.log(getFarm(2365));
 console.log(mkulima.addProduct(780,"vines","7800ugshs"));
console.log(mkulima.addProduct(790,"ugalli","900ug shs"));


 console.log(removeproductId);
 console.log(mkulima.updateFarm(567,"rice","ug shs.900"));
 console.log(mkulima.getProduct(780));
 mkulima.printProducts();
console.log(mkulima.calculateOrderCost(780,23));
 console.log(mkulima.calculateOrderCost(567,12));
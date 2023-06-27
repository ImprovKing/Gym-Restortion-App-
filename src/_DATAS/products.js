let products = [
    {
        id: 1,
        name: "Optimum Nutrition Micronized Creatine Monohydrate Powder",
        price: "$49.46",
        image : "https://m.media-amazon.com/images/I/51feSybGQOL._AC_SX679_.jpg" ,
        description: "BCAAs – 2:1:1 ratio of leucine, isoleucine, valine RECOVERY – take your training efforts to the next level by supporting endurance and recovery Made with CreaPure Creatine. At maximum dosage in conjunction with a healthy diet and regular exercise program. Results may vary Increases muscle strength and power",
        shortdec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque optio a soluta nobis non, quidem tempore eum voluptatibus officia harum pariatur reprehenderit inventore deserunt voluptate saepe nemo atque laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        name: "adidas Essential Adjustable Gloves",
        price: "$14.11 - $17.99",
        image : "https://m.media-amazon.com/images/I/91JRpegYzkL._AC_UX385_.jpg" ,
        description: "Material: Made from lightweight breathable fabric, the gloves are designed to wick away sweat and moisture whilst you exercise, keeping you cool and dry. Features: They feature padded suede palms for a natural grip, enhanced comfort and improved hand protection. Easy On and Off: Dual material finger pull and elasticated side panels allow for quick and convenient removal; No need to fight to get your gloves off . Highly versatile: The gloves are suitable for all kinds of exercise activities including weight lifting, Crossfit and general fitness training at home or in the gym. Suede Fabric Size: Small - 18 - 19 cm measuring around the circumference of your palm, not including the thumb",
        shortdec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque optio a soluta nobis non, quidem tempore eum voluptatibus officia harum pariatur reprehenderit inventore deserunt voluptate saepe nemo atque laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        name: "Boldfit Gym Shaker Pro Cyclone Shaker 500ml with Extra Compartment ",
        price: "$469.00",
        image : " https://m.media-amazon.com/images/I/71vhbihHtKL._AC_UL320_.jpg" ,
        description: "BPA free: 100% BPA free, no toxins, very easy to clean Better body Absorption: the tornado mixer works like a blending blade, Shake to create a fresh blend Extra compartment: Extra compartment for powder, mixes, etc No leaks, No drips 100% Guarantee : Anti-leak tested and Proven, lockable flip top, easy to read measuring Premium sports and gym shaker bottle: Boldfit gym shaker bottle is exclusively for work out regimens",
        shortdec : "This shaker is ideal for blending protein shakes, pre workout supplements, BCAA supplement, smoothies and juices. It is safe and suitable for regular use. It is dishwasher safe and easy to clean."
    }
] ;


/// to get all products like the http Get function
export function getProducts() {
    return products ;
}

export function getProductsId(id){
    return products.find(
        (products) => products.id === id 
    ) 
}


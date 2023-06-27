let price = [
    {
        id: 1,
        name: "Basic Plan",
        price: "$32.86",
        feature1 : "4 times a Week " ,
        feature2 : "Professional Gym Gloves" ,
        feature3 : "Inspections " ,
    },
    {
        id: 2,
        name: "Intermidiate Plan",
        price: "$50.86",
        feature1 : "5 times a Week " ,
        feature2 : "Professional Gym Gloves" ,
        feature3 : "Inspections " ,
        feature4 : "Professional Meal Plan" ,
    },
    {
        id: 3,
        name: "Advance Plan",
        price: "$56.86",
        feature1 : "7 times a Week " ,
        feature2 : "Professional Gym Gloves" ,
        feature3 : "Inspections " ,
        feature4 : "Professional Meal Plan " ,
        feature5 : "Gym Instructor " ,
    },
] ;


/// to get all products like the http Get function
export function getPrices() {
    return price ;
}

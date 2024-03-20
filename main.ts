let students = ["student 1", "student 2"];

interface AddresType{
    streetName: string,
    city: string,
    country: string,
    zipcode: number
}

type UserData = {
    Name: string,
    Mobil: number,
    email: string,
    address: null,
}

type Usertype = {
    firstName: string;
    lastName: string;
    cnicNo: number;
    isStudent: boolean;
    subjects: string[];
    address : AddresType;
    data: UserData
}

let user : Usertype = {
    firstName: "Imran",
    lastName: "Khan",
    cnicNo: 4240145052595,
    isStudent: true,
    subjects : ["Urdu", "English"],
    
    address :{
        streetName: "Pathan colony",
        city: "Karachi",
        country: "Pakistan",
        zipcode: 7500
    },
    
data:{
    Name: "Umer",
    Mobil: 313-2433249,
    email: "umerzareen@gamil.com",
    address: null
}

}


 console.log(user);

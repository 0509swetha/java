
// object is a key value pair
// var details_obj={key:value}

var details_obj={
    "name":"swetha",
    "college":"sietk",
    "city":"puttur",
    "education":"b.tech",
    "specilization":"ece",
    "address":{
        "village":"badavandlapalli",
        "mandal":"nallamada",
        "district":"anantapur"
    },
    "family_details":{
        "father":"madhusudhan reddy",
        "mother":"sree devi",
        "sister":"navya"
    }
};
console.log(details_obj);
console.log("type of object===",typeof(details_obj));
console.log("before adding===",details_obj);
details_obj["college_ state"]="andhrapradhesh";
details_obj["gender"]="female";
console.log("after adding===",details_obj);
delete details_obj.city
console.log("after deleting===",details_obj);
let keys=Object.keys(details_obj);
console.log("keys===",keys.length);
console.log("keys===",keys);
console.log(details_obj.name);
keys=Object.keys(details_obj);


for(var i=0;i<keys.length;i++){
    console.log(i);
    console.log(keys[i]);
}
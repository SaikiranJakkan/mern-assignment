function result(credits){
    if(credits >= 7500){
        console.log("Tera leader")
    }
    else if(credits >= 6000){
        console.log("Gega leader")
    }
    else if(credits >= 4500){
        console.log("Mega leader")
    }
    else{
        console.log("Rising Star")
    }
}

result(8000)
result(6500)
result(5000)
result(2500)
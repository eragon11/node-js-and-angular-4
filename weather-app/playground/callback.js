var getuser = (id,callback) =>{
    var user = {
        id : id,
        name: 'eragon'
    };

    setTimeout(() => {
        callback(user);
    }, 2000);
}

getuser(11,(userobject) => {
    console.log(userobject);
})
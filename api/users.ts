module.exports = (req,res) => {
    if(req.method === "GET") {
        res.json([
            {
                name:"Sagar",
                age:"18"
            },
            {
                name:"Appler"
            }
        ])
    }
    else{

    }
}
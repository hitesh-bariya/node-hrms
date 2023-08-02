exports.userController = async(req,res)=>{
    try{
        res.status(200).send(req.body.firstName)
    }catch(err){}
}
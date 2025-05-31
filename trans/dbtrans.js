const allCustomer=(req,res)=>{
    res.status(200n ).json( {

        success:true,
        data:'hii'

    })

}




const newCustomer = (req,res)=>{

    res.status(200).json({
        success:true,
        data:req.body
    })

}


module.exports={allCustomer ,newCustomer      }
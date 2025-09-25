import main from '../services/Service.js'

export const getReview = async (req,res) => {
    
    const {code} = req.body

    if(!code){
        return res.status(400).json({message:"Prompt is required"})
    }

    const result = await main(code)

    res.status(200).json({success:true,response:result})
}
import user from '../models/user.js'

const createUser = async (req,res)=>{
    try
    {
        const {email,password,username,profileImage,bio,createdAt} = req.body;
        const response = await user.create({email,password,username,profileImage,bio,createdAt});
        console.log("User added Successfully");
        res.status(200).json(
            {
                success : true,
                data : response,
                message : "user created successfully"
            }
        )
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json(
            {
                success : false,
                data : "Internal Server Error",
                message : error.message,
            }
        )
    }
}



export default createUser;
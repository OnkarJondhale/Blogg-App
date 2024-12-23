import comment from '../models/comment.js'

const createComment = async (req,res) => {
    try
    {
        const {content,post,author,createdAt} = req.body;
        const response = await comment.create({content,post,author,createdAt});
        res.status(200).json(
            {
                success : true,
                data : response,
                message : "comment created Successfully"
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
                message : error.message
            }
        )
    }
}

export default createComment;
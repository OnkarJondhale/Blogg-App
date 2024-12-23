import post from '../models/post.js'

const createPost = async (req,res) => {
    try
    {
        const {title,content,author,tags,likes,comments,createdAt} = req.body;
        const response = await post.create({title,content,author,tags,likes,comments,createdAt});
        res.status(200).json(
            {
                success : true,
                data : response,
                message : "Post created Successfully"
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

export default createPost;
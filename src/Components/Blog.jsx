function Blog(props)
{
    return(
    <>
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.blog }} className="min-h-[20rem] w-full rounded-xl shadow-xl shadow-zinc-800"/>
        </div>
    </>);
}

export default Blog;
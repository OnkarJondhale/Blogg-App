function Blog(props)
{
    return(
    <>
       
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.blog }} className={`min-h-fit w-full rounded-xl shadow-xl shadow-zinc-800  text-[0.8rem] border-[0.01rem] px-2 py-4 ${props.border}`}/>
        </div>
    </>);
}

export default Blog;
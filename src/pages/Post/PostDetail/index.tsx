import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { getPostDetail, sendComment } from '../../../api/methods/post.method';
interface Param {
    id: string;
}
interface Post {
    title: string,
    content: string,
    comments: []
}
interface SendComment {
    postId: string,
    content: {
        user: string,
        content: string
    }
}
function PostDetail() {
    const { register, handleSubmit } = useForm();
    const {id} = useParams<Param>();
    const [post, setPost] = useState<Post>()

    useEffect(() => {
        const fetchData = async() => {
            const data = await getPostDetail(id)
            setPost(data);
            
        }
        fetchData()
    }, [])

    const onSubmit = async(data: any) => {
        const comment: SendComment = {
            postId: id,
            content: {
                user: "62b130448a70b7e660b39795",
                content: data.input
            }
        }
        const resultComment = await sendComment(comment);
        console.log('====================================');
        console.log(resultComment);
        console.log('====================================');
    }
    
    return (
        <>
        {post &&
            <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Bài viết chi tiết</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <div>
                            <h1  className="text-1xl font-bold text-blue-400 cursor-pointer">{post.title}</h1>
                            <p ><span className="text-1xl font-bold">Nội dung:</span> {post.content}</p>
                        </div> 

                    </div>
                    {/* Bình luận */}
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <div>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Bình luận ngay:</label>
                                    <textarea {...register("input")} id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                    <input value="Gửi" className="inline-block px-7 py-1 bg-blue-600 text-white   uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" />
                                </form>
                            </div>
                            <p className="text-1xl font-bold">Bình luận:</p>
                            {post.comments.map((item: any, index: number) => {
                                return(
                                    <div key={index}>
                                        <p ><span className="text-1xl font-bold">Nội dung: </span> {item.content}</p>
                                        <p>User: {item._id}</p>                                    
                                    </div>

                                )

                            })

                            }
                            
                        </div> 

                    </div>
                    
                    
                </div>
                
                {/* <!-- /End replace --> */}
                </div>
            </main>
            </>
        }
        </>

  )
}

export default PostDetail
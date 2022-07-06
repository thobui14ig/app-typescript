import { useEffect, useState } from "react"
import { GetAllPost } from "../../api/methods/post.method";
import { withRouter } from "react-router-dom";
function Post(props: any) {
    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
      const fetchData = async() => {
        const data = await GetAllPost()
        setPosts(data)
      }

      fetchData();
    },[])

    const hanldeGetIdPost = (id: string) => {
        props.history.push(`/post/detail/${id}`)
    }

  
    return (
      <>

        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Bài viết</h1>
            </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          
              <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                      {posts &&// eslint-disable-next-line array-callback-return
                        posts.map((item: any, index: number) => {
                          return(
                              <div key={index}>
                                <h1 onClick={() => hanldeGetIdPost(item._id)}  className="text-1xl font-bold text-blue-400 cursor-pointer">{item.title}</h1>
                                <p>Tác giả: {item.userId}</p>
                            </div> 
                            )                           
                          })
                      }

                  </div>
              </div>
             
            </div>
        </main>
      </>
    )
  }
  
  export default withRouter(Post)
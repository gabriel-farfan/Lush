import axios from 'axios'

const blogActions = {
    fetchBlogs: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/blog')
      
      dispatch({ type: 'blogs/fetch', payload: res.data.content.blogs })
    }
  },
  blogData: (blogData) => {
    return async (dispatch, getState) => {
        const res = await axios.post('http://localhost:4000/api/blog', blogData)
        dispatch({
            type: 'blog/data',
            payload: {
                view: true,
                message: res.data.message,
                success: res.data.success
            }
        });
    }
},
}
export default blogActions;
import axios from 'axios'

const blogActions = {
    fetchBlogs: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/blog')
      
      dispatch({ type: 'blogs/fetch', payload: res.data.content.blogs })
    }
  },
}
export default blogActions;
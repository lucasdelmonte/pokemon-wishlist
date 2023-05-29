import axios from 'axios'
import { ref } from 'vue'

export const useGetData = () => {

  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  const getData = async (url) => {
    try {
      const res = await axios.get(url)
      data.value = res.data
    } catch (e) {
      console.log(e)
      error.value = '404 Not found'
    } finally {
      setTimeout(() => {
        loading.value = false
      }, 500);
    }
  }

  return {
    getData,
    data,
    loading,
    error
  }
}
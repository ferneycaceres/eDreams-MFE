import { useEffect, useState } from 'react'
import axios from 'axios'

interface UsefetchProps {
  url: string
}

const useFetch = (props: UsefetchProps) => {
  const { url } = props
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url)
        setData(response)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return {
    data,
    loading,
  }
}

export default useFetch

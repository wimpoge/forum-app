import { useEffect, useState } from 'react'

const useLogin = (url) => {
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data')
          }
          return res.json()
        })
        .then(() => {
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [url])
  return { isPending, error }
}

export default useLogin

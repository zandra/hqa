import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export function useUser () {
  const { user } = useSWR('/api/user', fetcher)
  return [user]
}

export function extractUser (req) {
  if (!req.user) return null
  const { name, email } = req.user

  return { name, email }
}

export const isTokenValid = (
  token: string | null,
  expiration: string | null
): boolean => {
  if (!token || !expiration) return false

  try {
    const nowTime = Date.now()
    const tokenTime = new Date(expiration).getTime()
    return tokenTime > nowTime
  } catch {
    return false
  }
}

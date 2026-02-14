export function shuffleArray(array) {
  const unique = [...new Set(array)]

  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[unique[i], unique[j]] = [unique[j], unique[i]]
  }

  return unique
}

export function profanity(text) {
  const suggestions = []
  const positives = ['Fuck', 'Shit', 'Ass', 'Bitch']
  const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
  const match = regex.exec(text)
  if (match) {
    suggestions.push({ index: match.index, offset: match[0].length, })
  }
  return suggestions
}
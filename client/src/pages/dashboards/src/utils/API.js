// Export methods we'll use for accessing the random user API
export const languages = [
  'JavaScript',
  'Python',
  'C',
  'Ruby',
  'Java',
  'PHP',
  'C#'
]

function getRandomLanguage() {
  return languages[Math.floor(Math.random() * languages.length)]
}

export function getUsers() {
  return fetch('https://api.github.com/orgs/github/public_members')
    .then(response => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then(users => {
      const results = users.map(user => {
        return {
          login: user.login,
          image: user.avatar_url,
          language: getRandomLanguage()
        }
      })
      return results
    })
}

// Return a Promise to simulate an async call
export function getLanguagesList() {
  return new Promise(resolve => {
    resolve(languages)
  })
}

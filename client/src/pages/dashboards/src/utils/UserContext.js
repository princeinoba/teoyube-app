import React, {useState, useEffect} from 'react'
import {getUsers} from './API'
import {useLanguage} from './LanguageContext'

const UserContext = React.createContext()

export function UserProvider(props) {
  const {language} = useLanguage()
  const [users, setUsers] = useState()
  const [filteredUsers, setFilteredUsers] = useState([])
  const [user, setUser] = useState()
  const [userIndex, setUserIndex] = useState(0)

  const lastIndex = filteredUsers?.length - 1

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users)
        setUser(users[0])
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setFilteredUsers(() => users?.filter(user => user.language === language))
  }, [language, users])

  useEffect(() => {
    if (filteredUsers) setUser(filteredUsers[userIndex])
  }, [userIndex, filteredUsers])

  function showNextUser() {
    setUserIndex(prevIndex => (prevIndex === lastIndex ? 0 : prevIndex + 1))
  }

  function showPreviousUser() {
    setUserIndex(prevIndex => (prevIndex === 0 ? lastIndex : prevIndex - 1))
  }

  return (
    <UserContext.Provider
      value={{user, showPreviousUser, showNextUser}}
      {...props}
    />
  )
}

export function useUser() {
  const context = React.useContext(UserContext)
  if (!context)
    throw new Error('useUser must be called from a descendent of UserProvider.')

  return context
}

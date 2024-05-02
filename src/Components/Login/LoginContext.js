import React, { createContext } from 'react'

function LoginContext() {
    const LoginContext = createContext("");
    
  return (
    <LoginContext.Provider value={{}}>
        {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContext



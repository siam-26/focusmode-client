

import { SignUp } from '@clerk/clerk-react'

export default function Signup() {
  return <SignUp path="/login" 
  passwordSettings={{
    shouldCheckPasswordStrength: false,
  }}
  />
}
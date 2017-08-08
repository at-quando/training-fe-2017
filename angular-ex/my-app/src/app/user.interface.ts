export interface User {
  personal:{
    name: string,
    birthday: string,
    avatar: string
  }, 
  company: {
    team: string,
    joined: string
  },
  skills: string
}
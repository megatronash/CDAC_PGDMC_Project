import jwt from 'jsonwebtoken'

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }
const generateToken = (id) => {
  return jwt.sign({ id }, 'ankitnigga', {
    expiresIn: '30d',
  })
}


export default generateToken

import bcrypt from 'bcryptjs';

export const hashPassword = async(password) => {
    
    const salt = await bcrypt.genSaltSync(10);
    
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword
}

// export const hashPassword = async(password) => {
//     const saltRounds = 10
  
//     const hashedPassword = await new Promise((resolve, reject) => {
//       bcrypt.hash(password, saltRounds, function (err, hash) {
//         if (err) reject(err)
//         resolve(hash)
//       })
//     })
  
//     return hashedPassword
//   }
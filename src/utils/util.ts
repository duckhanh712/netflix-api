import bcrypt from 'bcryptjs';

export const hashPassword = async(password) => {
    
    const salt = bcrypt.genSaltSync(10);
    
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword
}
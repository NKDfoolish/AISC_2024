import * as bcrypt from 'bcrypt';

export async function encryptPassWord(rawPassWord: string){
    const salt = await bcrypt.genSalt();
    const encryptPass = await bcrypt.hash(rawPassWord, salt);

    return encryptPass;
}
import CryptoJS from 'crypto-js'

export default function UseHash(e){
    
        return CryptoJS.SHA256(e).toString();
        
      
}
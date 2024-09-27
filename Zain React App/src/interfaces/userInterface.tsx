import Address from './addressInterface'
  
  // User Interface
interface User {
    id: number;
    name: string;
    age: number;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    occupation: string;
    hobbies: string[]; // Array of strings
}

export default User
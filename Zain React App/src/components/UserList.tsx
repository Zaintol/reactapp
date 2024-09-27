import User from '../interfaces/userInterface'
import {useQuery} from '@tanstack/react-query'
const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://freetestapi.com/api/v1/users');
    if(!response.ok)
        throw new Error('Failed to fetch users')
    const data = await response.json()
    return data
};

const UserList: React.FC = () => {
    const {data: users, isLoading, error} = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: fetchUsers
    });

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return <div>
        {users?.map((user) => (
            <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
}

export default UserList
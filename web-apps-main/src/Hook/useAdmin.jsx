import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./UseAxioSecure";

const useAdmin = () => {
    const { user, loading: authLoading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: users, isLoading } = useQuery({
        queryKey: ['users'],
        enabled: !authLoading && user !== undefined,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/user/get-all');
                return res.data;
            } catch (error) {
                console.error("Error fetching users:", error);
                throw new Error("Failed to fetch users");
            }
        }
    });

    const loading = authLoading || isLoading;

    // Filter user type based on user email
    const getUserType = (email) => {
        if (!users) return 0;
        const user = users.find(u => u.email === email);
        if (!user) return 0;
        switch (user.role) {
            case 'admin':
                return 1;
            case 'user':
                return 2;
            case 'creator':
                return 3;
            default:
                return 0;
        }
    };

    const userType = getUserType(user?.email);
    console.log(userType);

    return { loading, userType };
};

export default useAdmin;

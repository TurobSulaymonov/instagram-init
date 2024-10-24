import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import notFound from "./not-found";


type Props = {
    params: {username: string}
};
export default async function UserPage({params: {username}}: Props){
     const user = await getUserForProfile(username);
    
     if(!user) {
        notFound()
     }
   
   return <>
   <UserProfile user={user} />
    </>;
}
import { useAsync } from "../hooks/useAsync";
import { homescreen } from "../services/user";

export function Home(){
    const {Loading,Error} = useAsync(homescreen)

    return 
}
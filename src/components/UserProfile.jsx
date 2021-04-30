import { useParams} from "react-router-dom";
import { useState, useEffect } from 'react';



const UserProfile = (props) => {
    const { username } = useParams();
    const [repoList, setRepoList] = useState([]);
    useEffect(() => {
        (async function() {
            const url = `https://api.guthub.com/users.${username}/repos`;
            const userInfo = await fetch(url)
                .then(reponse => reponse.json())
                console.log("USERNAME: ", userInfo);
                setRepoList(userInfo);
        })
    })
    

}
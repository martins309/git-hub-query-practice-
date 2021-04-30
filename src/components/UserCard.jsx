import { BrowserRouter as Link, useRouteMatch } from " react-router-dom";
import { CardHeader } from "bloomer/lib/components/Card/Header/CardHeader";
import 'bulma/css/bulma.css';

const UserCard = (props) => {
    const { user } = props;
    console.log(user);

    const { url } = useRouterMatch();

    return (

        <li>
            <Card>
                <CardHeader>
                    <Link to={`${url}/${user.login}`}><img src={user.avatar_url} atl="a" />
                    </Link>
                </CardHeader>
            </Card>
        </li>
    )
}

export default UserCard;
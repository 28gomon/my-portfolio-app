import HomePage from "../../components/Main/HomePage/HomePage";
import About from "../../components/Main/About/About";
import Contacts from "../../components/Main/Contacts/Contacts";

const routes = [
	{
		path: '/contacts',
		component: Contacts,
		exact: true,
	},
	{
		path: '/about',
		component: About,
		exact: true,
	},
	{
		path: '/',
		component: HomePage,
		exact: true,
	},
];

export default routes;
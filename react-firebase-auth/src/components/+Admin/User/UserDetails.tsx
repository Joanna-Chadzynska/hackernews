import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { userFirestore } from "../../+Firebase/firebase.utils";
import UserDetailsInfo from "./UserDetailsInfo";

export interface UserDetailsProps {}

const UserDetails: React.SFC<UserDetailsProps> = () => {
	const slug: any = useParams();
	const location: any = useLocation();
	const [state, setState] = useState({
		loading: false,
		user: null,
		...location.state
	});

	const { loading, user } = state;

	useEffect(() => {
		// if (user) return;
		setState({
			...state,
			loading: true
		});

		const userCollectionRef = userFirestore(slug.userId).onSnapshot(
			(snapshot: any) => {
				const userDb = snapshot.data();

				setState({
					user: userDb,
					loading: false
				});
			}
		);

		return () => userCollectionRef();
	}, []);

	return (
		<div>
			<h1>User details page</h1>
			<span>
				User <strong>({slug.userId})</strong>
			</span>
			<br />
			{loading && <div>Loading ...</div>}
			<br />
			{user && <UserDetailsInfo user={user} id={slug.userId} />}
		</div>
	);
};

export default UserDetails;

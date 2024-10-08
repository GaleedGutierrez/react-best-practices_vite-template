import styles from './styles.module.css';
import { User } from './useUsers';

function UserCard({ user }: { user: Readonly<User> }): JSX.Element {
	return (
		<div className={styles['m-user-card']}>
			<p>{user.name}</p>
		</div>
	);
}

export default UserCard;

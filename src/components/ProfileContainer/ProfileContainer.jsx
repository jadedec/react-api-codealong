import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileContainer.scss";

const ProfileContainer = ({ users }) => {

    const cardDisplay = users.map((user) => {

        return (
            <ProfileCard
                key={user.registered.date}
                name={user.name.first}
                image={user.picture.large}
                email={user.email}
                phoneNumber={user.phone}
            />
        );
    });

    return (
    <div className="profile-container">
        {cardDisplay}
    </div>
    );
}; 


export default ProfileContainer;
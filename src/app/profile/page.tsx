import ProfileContainer from "@/components/profiile/ProfileContainer";

const Profile = () => {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
      <h2 className="text-3xl font-bold mb-6 text-center">User Profile</h2>
      <ProfileContainer />
    </div>
  );
};

export default Profile;

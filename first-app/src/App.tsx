import React from "react";
import UserProfileCard from "./components/UserProfileCard";



const App: React.FC = () => {
  const users = [
    {
      id: 1,
      name: "John Carter",
      email: "John@example.com",
      isOnline: true,
      avatarUrl: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
      skills: [
        { name: "React", level: "Intermediate"  as const},
        { name: "TypeScript", level: "Beginner"  as const},
      ],
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      isOnline: false,
      avatarUrl: "https://dy7glz37jgl0b.cloudfront.net/advice/images/54781057df5a48802fb00169e02f36ca-woman-takes-notes-in-a-journal-while-sitting-at-a-desk-in-front-of-her-laptop_l.jpg",
      skills: [
        { name: "JavaScript", level: "Advanced"  as const},
        { name: "CSS", level: "Intermediate"  as const},
      ],
    },
    {
      id: 3,
      name: "Suzy Johnson",
      email: "Suzy@example.com",
      isOnline: true,
      avatarUrl: "https://www.shutterstock.com/image-photo/smiling-asian-woman-posing-crossed-600nw-2526357527.jpg",
      skills: [{ name: "Python", level: "Advanced"  as const}],
    },
  ];

  const handleViewDetails = (userId: string | number) => {
    console.log("ดูรายละเอียดของ userId:", userId);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile Card </h2>
      {users.map((user) => (
        <UserProfileCard key={user.id} user={user} onViewDetails={handleViewDetails} />
      ))}
    </div>
  );
};

export default App

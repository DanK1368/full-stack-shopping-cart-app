import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default function User() {
  const route = useRouter();
  const { user } = useUser();

  if (!user) {
    return (
      <ProfileButton onClick={() => route.push("/api/auth/login")}>
        <FaUserCircle size={20} />
        <h3>Login</h3>
      </ProfileButton>
    );
  } else {
    return (
      <ProfileWrapper>
        <ProfilePic onClick={() => route.push("/profile")}>
          <Image
            src={user.picture}
            alt={user.name}
            layout="fill"
            objectFit="cover"
          />
        </ProfilePic>
        <h3>{user.name}</h3>
      </ProfileWrapper>
    );
  }
}

const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  h3 {
    font-size: 0.7rem;
  }
`;

const ProfilePic = styled.button`
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 0.7rem;
  }
`;

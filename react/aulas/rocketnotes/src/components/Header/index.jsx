import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/jairtorezone.png"
          alt="Foto perfil Jair Torezone"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Jair Torezone</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

import { Container, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/jairtorezone.png"
          alt="Foto perfil Jair Torezone"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Jair Torezone</strong>
        </div>
      </Profile>
    </Container>
  );
}

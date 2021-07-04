import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import routes from "./routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { FatLink } from "../components/shared";

const Logo = styled.img`
  width: 200px;
  height: 80px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
`;

const FacebookLogin = styled.div`
  color: #385285;
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.blue};
  color: white;
  span {
    margin: 10px 0px;
    margin-left: 10px;
    font-weight: 600;
  }
`;

function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <Logo src="https://fontmeme.com/images/instagram-new-logo.png" />
        </div>
        <HeaderContainer>
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          <span>Log in with Facebook</span>
        </FacebookLogin>
        <Separator />
        <form>
          <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
    </AuthLayout>
  );
}
export default SignUp;

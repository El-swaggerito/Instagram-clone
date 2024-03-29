import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />

      <Button
        w={"full"}
        colorScheme="blue"
        size="sm"
        isLoading={loading}
        fontSize={14}
        onClick={() => login(input)}
      >
        Log In
      </Button>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
    </>
  );
};

export default Login;

import { useState } from "react";
import { Heading, Icon, Link, Text, VStack, useTheme } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "react-native";

import auth from "@react-native-firebase/auth";

import Logo from "../assets/logo_primary.svg";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha.");
    }

    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.code === "auth/invalid-email") {
          return Alert.alert("Entrar", "E-mail inválido.");
        }
        if (error.code === "auth/invalid-credential") {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }
        if (error.code === "auth/user-not-found") {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }

        return Alert.alert("Entrar", "Não foi possível acessar");
      });
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize={20} mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Feather name="mail" />} ml={4} />}
        onChangeText={setEmail}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Feather name="key" />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Entrar"
        w="full"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
      <Text
        color={colors.primary[700]}
        fontSize="sm"
        my={4}
        onPress={() => navigate("createAccount")}
      >
        Cadastre-se
      </Text>
    </VStack>
  );
}

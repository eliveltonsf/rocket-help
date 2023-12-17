import { useState } from "react";
import { Heading, Icon, Text, VStack, useTheme } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "react-native";

import auth, { firebase } from "@react-native-firebase/auth";

import Logo from "../assets/logo_primary.svg";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { colors } = useTheme();
  const { navigate } = useNavigation();

  async function handleCreateAccount() {
    if (!email || !password || !confirmPassword) {
      return Alert.alert(
        "Cadastrar",
        "Informe e-mail, senha e confirme sua senha."
      );
    }

    if (password !== confirmPassword) {
      return Alert.alert(
        "Cadastrar",
        "senhas não conferem, confirme sua senha."
      );
    }

    setLoading(true);

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        return Alert.alert("Cadastrar", "Seu cadastro foi finalizado!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    await firebase.auth().signOut();
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize={20} mt={20} mb={6}>
        Crie sua conta
      </Heading>

      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Feather name="mail" />} ml={4} />}
        onChangeText={setEmail}
      />

      <Input
        mb={4}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Feather name="key" />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Input
        mb={8}
        placeholder="Confirmar senha"
        InputLeftElement={<Icon as={<Feather name="key" />} ml={4} />}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      <Button
        title="Cadastrar"
        w="full"
        onPress={handleCreateAccount}
        isLoading={isLoading}
      />
      <Text
        color={colors.primary[700]}
        fontSize="sm"
        my={4}
        onPress={() => navigate("signIn")}
      >
        Voltar
      </Text>
    </VStack>
  );
}

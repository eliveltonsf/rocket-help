import React from "react";
import {
  HStack,
  Heading,
  IconButton,
  StyledProps,
  useTheme,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = StyledProps & { title: string };

export function Header({ title, ...rest }: Props) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        icon={<Feather name="arrow-left" size={24} color={colors.gray[200]} />}
        onPress={() => navigation.goBack()}
      />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}

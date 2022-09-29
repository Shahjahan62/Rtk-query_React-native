import { View, Text, Button, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetDataMutation } from "./pokemon";

const AuthenticPortfolio = () => {
  const [getData, { data: post, isLoading: loading, error: Error }] =
    useGetDataMutation();

  const [password, setPassword] = React.useState();
  const [name, setName] = useState("");

  const Data = {
    email: "shah1@gmail.com",
    password: 1234,
  };

  async function handleAdd() {
    try {
      await getData(Data);
      // console.log(name, password);
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  }

  const AddData = async () => {
    await getData(Data);
    getData({});
    console.log(post);
  };

  useEffect(() => {
    getData({});
  }, []);

  //   console.log(Error?.data?.message);

  return (
    <View style={{ padding: 50 }}>
      <TextInput
        style={{
          height: 50,
          width: "100%",
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 20,
          marginVertical: 20,
        }}
        value={name}
        onChangeText={(text) => setName(text)}
        placeHolder="enter name"
      />
      <TextInput
        style={{
          height: 50,
          width: "100%",
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 20,
          marginVertical: 20,
        }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeHolder="enter pwd"
      />
      {Error ? (
        <Text>{Error?.data?.message}</Text>
      ) : loading ? (
        <Text>Loading...</Text>
      ) : post ? (
        <Text>{post}</Text>
      ) : (
        <Text>no data</Text>
      )}

      <Button title="Add " onPress={() => AddData()}></Button>
      <Text></Text>
      <Button title="LOGIN " onPress={() => handleAdd()}></Button>
    </View>
  );
};

export default AuthenticPortfolio;

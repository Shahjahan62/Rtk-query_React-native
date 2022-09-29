import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useGetDataTickerMutation, useEditDataMutation } from "./pokemon";

const TickerData = () => {
  const [getDataTicker, { data, isLoading, error }] =
    useGetDataTickerMutation();
  const [show, setShow] = React.useState("");

  useEffect(() => {
    getDataTicker({});
  }, []);

  console.log(data);

  const [editData] = useEditDataMutation();

  const updateData = async () => {
    const formData = new FormData();
    formData.append("buy", 156544);
    await editData({ formData }).unwrap();
  };

  return (
    <View style={{ padding: 50 }}>
      {error ? (
        <Text>Error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <View>
          <Text style={{ fontSize: 20 }}> {data.USD.last}</Text>
          <Text style={{ fontSize: 20 }}> {data.USD.symbol}</Text>
          <Text style={{ fontSize: 20 }}> {data.USD.sell}</Text>
        </View>
      ) : (
        <Text>no data</Text>
      )}
    </View>
  );
};

export default TickerData;

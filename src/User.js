import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Slice";
import {
  Text,
  View,
  Button,
  Image,
  DatePickerIOSComponent,
} from "react-native";
import {
  useGetPhotoByIdQuery,
  useGetJokeByTypeQuery,
  useGetDataMutation,
  useGetJokeByTypeMutation,
} from "./pokemon";

const User = () => {
  const [getall, { data: post, isLoading: loading, error: Error }] =
    useGetJokeByTypeMutation();

  useEffect(() => {
    getall({});
  }, []);

  console.log(post ? post : "Null");

  return (
    <View style={{ padding: 50 }}>
      {Error ? (
        <Text>Error</Text>
      ) : loading ? (
        <Text>Loading...</Text>
      ) : post ? (
        <Text>{post}</Text>
      ) : (
        <Text>NO DATA</Text>
      )}
    </View>
  );
};

export default User;

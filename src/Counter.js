import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Slice";
import { Text, View, Button, Image } from "react-native";
import {
  useGetPhotoByIdQuery,
  useGetJokeByTypeQuery,
  useGetDataMutation,
} from "./pokemon";

export function Counter() {
  const [photo, setPhoto] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const photoId = 1;
  // const { data, isLoading, error } = useGetPhotoByIdQuery(photoId);
  const { data, isLoading, error } = useGetJokeByTypeQuery("programming");

  const { data: post, isLoading: loading, error: Error } = useGetDataMutation();
  const [title, setTitle] = useState("");

  console.log(post);
  useEffect(() => {
    setPhoto(post);
  }, []);
  // console.log("photo" + photo);

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <View>
        <Button title="Increment value" onPress={() => dispatch(increment())}>
          Increment
        </Button>
        <Text>{count}</Text>
        <Button title="Decrement value" onPress={() => dispatch(decrement())}>
          Decrement
        </Button>
        {post ? <Text>{data.name}</Text> : <Text></Text>}
        <View style={{ width: "100%", height: 200 }}>
          {error ? (
            <Text>Error</Text>
          ) : isLoading ? (
            <Text>Loading...</Text>
          ) : data ? (
            <Image
              source={{
                uri: data.url,
              }}
              alt="image"
              style={{ height: 200, width: 100 }}
            />
          ) : (
            <Text>NO data</Text>
          )}

          {data.map((item, index) => (
            <Text>{item.punchline}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

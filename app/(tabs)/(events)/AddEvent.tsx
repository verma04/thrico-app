import React from "react";

import { Input, Icon } from "@rneui/themed";
import { Text, Card, Button } from "@rneui/themed";

const AddEvent = () => {
  return (
    <>
      <Card>
        <Card.Title>Add Event</Card.Title>
        <Input placeholder="BASIC INPUT" />

        <Input
          placeholder="Event Name"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
        />

        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />

        <Input
          placeholder="Comment"
          leftIcon={{ type: "font-awesome", name: "comment" }}
        />

        <Input
          placeholder="INPUT WITH ERROR MESSAGE"
          errorStyle={{ color: "red" }}
          errorMessage="ENTER A VALID ERROR HERE"
        />

        <Input placeholder="Password" secureTextEntry={true} />
      </Card>
    </>
  );
};

export default AddEvent;

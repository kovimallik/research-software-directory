import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TypeBoolean from "../components/Form/TypeBoolean";
import TypeString from "../components/Form/TypeString";
import TypeStringEnum from "../components/Form/TypeStringEnum";
import TypeObject from "../components/Form/TypeObject";
import TypeArray from "../components/Form/TypeArray";
import TypeForeignKey from "../components/Form/TypeForeignKey";

storiesOf("Form elements")
  .add("Boolean", () => (
    <TypeBoolean
      schema={null}
      value={true}
      settings={null}
      onChange={action("change")}
      label="Boolean"
    />
  ))
  .add("String", () => (
    <TypeString
      schema={null}
      value={"Value here"}
      settings={null}
      onChange={action("change")}
      label="String"
    />
  ))
  .add("StringEnum", () => (
    <TypeStringEnum
      schema={{ enum: ["option1", "option2", "option3"] }}
      value="option1"
      settings={null}
      onChange={action("change")}
      label="StringEnum"
    />
  ))
  .add("Object", () => (
    <TypeObject
      schema={{
        properties: {
          prop1: { type: "string" },
          prop2: { type: "boolean" }
        }
      }}
      value={{
        prop1: "asdasd",
        prop2: false
      }}
      settings={null}
      onChange={action("change")}
      label="Object"
    />
  ))
  .add("ForeignKey", () => (
    <TypeForeignKey
      schema={{
        properties: {
          collection: {
            enum: ["things"]
          }
        }
      }}
      data={{
        things: [
          {
            primaryKey: {
              id: "thing1"
            }
          },
          {
            primaryKey: {
              id: "thing2"
            }
          }
        ]
      }}
      value={{ collection: "things", id: "thing1" }}
      settings={null}
      onChange={action("change")}
      label="ForeignKey"
    />
  ))
  .add("Array", () => (
    <TypeArray
      schema={{
        items: {
          type: "string"
        }
      }}
      value={["asdasd", "asdasddsa"]}
      settings={null}
      onChange={action("change")}
      label="Array"
    />
  ));

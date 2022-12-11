import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";


const generateClassname = createGenerateClassName({
  productionPrefix: "ho",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
       <h1>Home</h1>
      </StylesProvider>
    </div>
  );
};
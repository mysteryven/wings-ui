import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome
};

export const ToStorybook = () => (
  <div>
    <div>
      主要的展示代码都在每个组件的 <code>docs</code> 这个 Tab 里面。
    </div>
  </div>
);

ToStorybook.story = {
  name: "简要说明"
};

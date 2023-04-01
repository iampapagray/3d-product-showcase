import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#F44336",
          "#E91E63",
          "#80c670",
          "#9C27B0",
          "#673AB7",
          "#7098da",
          "#3F51B5",
          "#FF96AD",
          "#2CCCE4",
          "#5F123D",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;

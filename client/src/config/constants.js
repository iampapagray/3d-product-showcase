import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    id: 1,
    name: "colorpicker",
    icon: swatch,
  },
  {
    id: 2,
    name: "filepicker",
    icon: fileIcon,
  },
  {
    id: 3,
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    id: 5,
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    id: 6,
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

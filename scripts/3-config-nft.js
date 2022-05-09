import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x1AC84695bbFBb321A94f36f596526b8580DE23f8");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Inital Members",
        description: "This NFT will give you access to kuusikulmioDAO!",
        image: readFileSync("scripts/assets/init_member.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
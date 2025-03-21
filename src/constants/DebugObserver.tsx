import { useRecoilSnapshot } from "recoil";
import { useEffect } from "react";

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log("🔎 Recoil State Changed:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node).contents);
    }
  }, [snapshot]);

  return null;
};

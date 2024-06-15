import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ItemProps } from "../lib/types";
import AddItem from "../components/add-item";
import LocalItems from "../components/local-items";
import { Plus } from "lucide-react";

export default function HomePage() {
  const [addPanel, setAddPanel] = useState(false);

  const [localItems, setLocalItems] = useLocalStorage<ItemProps[]>("items", []);

  return (
    <>
      <button
        onClick={() => {
          setAddPanel(!addPanel);
        }}
        className={`h-14 w-14 bg-orange-600 text-white rounded-full fixed right-4 bottom-[72px] flex items-center justify-center active:scale-95 transition-all`}
      >
        <Plus />
      </button>

      {addPanel && (
        <AddItem localItems={localItems} setLocalItems={setLocalItems} />
      )}

      <LocalItems localItems={localItems} setLocalItems={setLocalItems} />
    </>
  );
}

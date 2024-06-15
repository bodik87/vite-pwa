import { ItemProps } from "../lib/types";
import Item from "./item";

type Props = {
  localItems: ItemProps[];
  setLocalItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
};

export default function LocalItems({ localItems, setLocalItems }: Props) {
  const deleteLocalItem = (id: string) => {
    const filteredValue = localItems.filter((item) => item.id !== id);
    setLocalItems(filteredValue);
  };

  return (
    <>
      {localItems.length > 0 ? (
        <div className="mt-4">
          {localItems.map((item) => (
            <Item key={item.id} item={item} deleteItem={deleteLocalItem} />
          ))}
        </div>
      ) : (
        <p className="wrapper mt-4 px-4 text-gray-400">No local items</p>
      )}
    </>
  );
}

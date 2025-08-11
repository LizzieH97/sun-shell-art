type BasketItemsProps = {
  items: { pic: string; name: string; id: number }[];
  onRemove: (id: number) => void;
};

export default function BasketItems({ items, onRemove }: BasketItemsProps) {
  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-60 h-80 bg-petal p-3 rounded-2xl border-4 border-bark m-1"
        >
          <img src={item.pic} className="h-48 rounded-xl object-cover" />
          <span className="text-xl font-bold">{item.name}</span>
          <button
            onClick={() => onRemove(item.id)}
            className="bg-lavender text-bark py-2 rounded-md hover:bg-bark hover:text-cream"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

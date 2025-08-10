type ItemProps = {
  pic: string;
  price: number;
  name: string;
  id: number;
};

export default function ItemCard({ pic, price, name, id }: ItemProps) {
  return (
    <div className="w-60 h-80 bg-petal p-3 flex flex-col gap-1 rounded-2xl border-4 border-bark m-1">
      <img src={pic} className="h-48 rounded-xl object-cover"></img>
      <div className="flex flex-col gap-0">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{name}</span>
            <p className="text-xs text-bark">ID: {id}</p>
          </div>
          <span className="font-bold text-maroon">£{price}</span>
        </div>
        <button className="hover:bg-bark hover:text-cream text-bark bg-lavender py-2 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
}

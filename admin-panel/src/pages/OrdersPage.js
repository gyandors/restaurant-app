export default function OrdersPage() {
  return (
    <div className="w-[50rem] m-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Orders</h1>
      </div>
      <ul>
        {/* {recCtx.recipies.map((r) => {
          return (
            <RecipeItems
              key={r.id}
              id={r.id}
              name={r.name}
              category={r.category}
              ingredients={r.ingredients}
              price={r.price}
              image={r.image}
            />
          );
        })} */}
      </ul>
    </div>
  );
}

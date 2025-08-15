function ProductItem({ data }) {
    return (
        <div className="p-4 border rounded-md shadow hover:shadow-lg transition">
            <img
                src={data.images[0]} // ✅ Show first image
                alt={data.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <h1 className="mt-2 text-lg font-semibold">{data.title}</h1>
        </div>
    );
}
export default ProductItem;


const NewsItem = ({ item }) => {
    const { image, publisher, title, description } = item;
    return (
        <div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-96 h-3/4" src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{publisher}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsItem;
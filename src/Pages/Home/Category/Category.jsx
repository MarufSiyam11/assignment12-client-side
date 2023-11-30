
const Category = () => {
    return (
       <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
         <div className="card border-lime-100 rounded-lg bg-neutral text-neutral-content ">
        <div className="card-body ">
          <h2 className="card-title btn btn-secondary">Free For 1 Month</h2>
          <div className="card-actions justify-between">
            <button className="text-3xl ">Premium Individual</button>
            <button className=""><span className="font-bold text-white">FREE</span> <br /><small>FOR 1 MONTH</small></button>
          </div>
          <li>1 Premium account</li>
          <li>Cancel anytime</li>
          <li>15 hours/month of listening time from our audiobookd subscriber catalog</li>
    
        </div>
        <div className="pt-10">
        <button className="btn w-full btn-info">Try free for 1 month </button>
           <p className="p-5 text-center">free for 1 month, then $10.99 per month after.Terms apply</p> 
        </div>
      </div>
         <div className="card border-lime-100 rounded-lg bg-neutral text-neutral-content">
        <div className="card-body ">
          <div className="card-actions justify-between">
            <button className="text-3xl font-bold text-white">Premium Duo</button>
            <button className=""> <span className="font-bold text-white">$14.99</span> <br /><small>PER MONTH</small></button>
          </div>
          <li>2 Premium account</li>
          <li>Cancel anytime</li>
          <li>15 hours/month of listening time from our audiobookd subscriber catalog</li>
    
        </div>
        <div className="pt-10">
        <button className="btn w-full btn-primary">Get Premium Duo </button>
           <p className="p-5 text-center">For couples who reside at the same adress.Terms apply</p> 
        </div>
      </div>
         <div className="card border-lime-100 rounded-lg bg-neutral text-neutral-content">
        <div className="card-body ">
       
          <div className="card-actions justify-between">
            <button className="text-3xl font-bold text-white">Premium family</button>
            <button className=""><span className="font-bold text-white">$16.99</span> <br /><small>PER MONTH</small></button>
          </div>
          <li>Up to 6 Premium or Kids accouonts</li>
          <li>Block explicit music</li>
          <li>Access to Spotify Kids</li>
          <li>Cancel anytime</li>
          <li>15 hours/month of listening time from our audiobookd subscriber catalog(plan manager only)</li>
    
        </div>
        <div className="pt-10">
        <button className="btn w-full btn-warning">Get Primium Family</button>
           <p className="p-5 text-center">For up to 6 family members residing at the same address. Terms apply</p> 
        </div>
      </div>
       </div>
    );
};

export default Category;
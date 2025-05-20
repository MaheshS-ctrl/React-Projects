const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO 
            HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
             WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
             <div className="hero-button">
                <button className="sn">Shop Now </button>
                <button className="cat">Category</button>
             </div>

             <div className="Shopping">
                <p>Also Available On</p>
             <div className="hero-imagesF">
                <img src="./images/amazon.png" alt="" />
                <img src="./images/flipkart.png" alt="" />
             </div>
             </div>
             
      </div>

      <div className="hero-image">
        <img src="./images/shoe_image.png"></img>
      </div>
    </main>
  );
};

export default HeroSection;

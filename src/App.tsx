function App() {
	return (
		<div className="h-screen w-screen flex bg-cream">
			<div className="flex flex-col sm:grid sm:grid-cols-2 m-auto bg-white rounded-xl max-w-screen-sm sm:max-w-screen-md">
				<div className=" rounded-t-xl [background-image:url('/image-product-mobile.jpg')] h-96 bg-center sm:h-auto bg-cover bg-no-repeat sm:[background-image:url('/image-product-desktop.jpg')]"></div>
				<div className="flex flex-col gap-4 p-8 px-5 sm:gap-8 sm:px-10">
					<span className="uppercase text-blue-gray">Perfume</span>
					<h1 className="text-4xl text-blue-dark font-bold font-serif sm:text-5xl">
						Gabrielle Essence Eau De Parfum
					</h1>
					<p className="text-blue-gray sm:text-lg">
						A floral, solar and voluptuous interpretation composed
						by Olivier Polge, Perfumer-Creator for the House of
						CHANEL.
					</p>
					<div className="flex flex-row items-center gap-6">
						<h2 className="text-4xl text-cyan font-serif">
							$149.99
						</h2>
						<span className="line-through text-sm text-blue-gray">
							$169.99
						</span>
					</div>
					<button className="bg-cyan rounded-lg py-4 text-white flex items-center justify-center gap-2 font-bold hover:bg-[#1a4031]">
						<img src="/icon-cart.svg" alt="Cart icon" />
						<h3 className="">Add to Cart</h3>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
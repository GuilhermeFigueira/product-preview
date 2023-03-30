function App() {
	return (
		<div className="h-screen w-screen flex flex-col bg-cream">
			<div className="flex flex-col sm:grid sm:grid-cols-2 m-auto bg-white rounded-xl max-w-screen-sm sm:max-w-screen-md">
				<div className=" rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none [background-image:url('/image-product-mobile.jpg')] h-96 bg-center sm:h-auto bg-cover bg-no-repeat sm:[background-image:url('/image-product-desktop.jpg')]"></div>
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
						Add to Cart
					</button>
				</div>
			</div>
			<div className="text-center">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg transition-all"
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}

export default App;

import Table from './Table'

const Body = () => {
	return <>
		<div>
			<div className="row" id="banner">
				<div className="col-12 col-md-12">
					<img alt="banière" className="mt-3 position-absolute marginneg " src="./assets/image/account/foret.png" style={{ height: '100%', width: '100%', maxHeight: '384px' }} />
					<h2 className="position-absolute pseudo titre3 py-2 ">BodoWT</h2>
					<img alt="Avatar" className="rounded-circle position-relative tp start-0 translate-middle ms-5" height="90px" src="./assets/image/account/avatar.png" width="90px" />
				</div>
				<div className="row" id="table" style={{ marginTop: '310px', paddingLeft: '30px' }}>
					<Table />
				</div>
				<div>
					<h2 className="text-uppercase gras text-center py-3 titre mb-5 ">récemment vus</h2>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 d-flex align-items-center justify-content-center">
							<div className="image-container">
								<div>
									<a href="" className="lienb"><img src="./assets/image/account/exorciste.png" alt="exorsiste" className="img-fluid" />
										<div className="centered-text">
											<p className="titre3">exorsiste</p>
										</div></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-9 my-auto">
						<div className="row">
							<div className="col-4 col-lg-auto">
								<div>
									<div style={{ height: 'auto', width: 'auto' }}>
										<a href="movie_description.html">
										<img alt="island" className="img-fluid" src="./assets/image/account/island.png" style={{ maxHeight: '127px', height: 'auto', width: '192px' }} /></a>
									</div>
									<div className="col-7 col-lg-4">
										<h2 className="titre2 text-truncate">Shutter Island</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, sapiente vel incidunt optio iusto dolore ipsa repellendus deleniti nulla eos qui excepturi necessitatibus culpa itaque numquam iste rerum nobis!</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="movie_description.html">
										<img alt="interstellar" className="img-fluid" src="./assets/image/account/interstellar.png" style={{ maxHeight: '127px', height: 'auto', width: '192px' }} /></a>
									</div>
									<div className="col-7 col-lg-3">
										<h2 className="titre2 text-truncate">Interstellar</h2>
										<p className="overflow-hidden" style={{ height: "60px", maxWidth: "300px", width: "auto" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ipsum iure totam obcaecati dolores omnis illo, magnam nobis amet ipsa facilis aspernatur earum sit officiis eligendi, expedita iusto nulla? Commodi?</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="movie_description.html">
										<img alt="Leonardo di caprio" className="img-fluid" src="./assets/image/account/leo.png" style={{ maxHeight: '127px', height: 'auto', width: '192px' }} /></a>
									</div>
									<div className="col-7 col-lg-4">
										<h2 className="titre2 text-truncate">Léonardo Di Caprio</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis qui soluta et suscipit. Ducimus, illum eaque corrupti vel ea consectetur? Quia molestias et corrupti aliquam in hic nemo, dicta ad!</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="movie_description.html">
										<img alt="Oppenheimer" className="img-fluid" src="./assets/image/account/oppen.png" style={{ maxHeight: '127px', height: 'auto', width: '192px' }} /></a>
									</div>
									<div className="col-7 col-lg-3">
										<h2 className="titre2 text-truncate">Oppenheimer</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel quia, ab, nihil commodi deleniti, ipsa quasi cum maiores provident incidunt iusto consectetur eaque totam quae. Exercitationem quae eius laudantium.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Barbie" className="img-fluid" src="./assets/image/account/barbie.png" style={{ maxHeight: '127px', height: 'auto', width: '192px' }} /></a>
									</div>
									<div className="col-7 col-lg-4">
										<h2 className="titre2 text-truncate">Barbie</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati molestias ut. Nihil itaque dicta, neque molestias aspernatur cumque unde. Quia voluptatem tempora velit. Voluptatibus modi aut consequuntur earum eos.</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Spiderman" className="img-fluid" src="./assets/image/account/spiderman.png" style={{ maxHeight: '127px', height: 'auto', width: '192px' }} /></a>
									</div>
									<div className="col-7 col-lg-3">
										<h2 className="titre2 text-truncate">Spiderman</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus natus quisquam? Perferendis voluptas saepe voluptatum minus eius! Maxime ad cupiditate unde accusantium? Saepe voluptas dolores dolorum reiciendis! Deserunt, molestias?</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 justify-content-center">
					<a href="" className="text-center">
					<p className="text-center">Voir plus</p></a>
				</div>
			</div >
			<div>
				<h2 className="text-uppercase gras text-center py-3 titre mx">favoris</h2>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 my-3 mx-2">
						<div className="row justify-content-center">
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Interstellar" className="img-fluid " src="./assets/image/account/interstellar.png" /></a>
									</div>
									<div className="col-7 col-lg-2 me-lg-5">
										<h2 className="titre2 text-truncate">Interstellar</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, sapiente vel incidunt optio iusto dolore ipsa repellendus deleniti nulla eos qui excepturi necessitatibus culpa itaque numquam iste rerum nobis!</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="island" className="img-fluid " src="./assets/image/account/island.png" /></a>
									</div>
									<div className="col-7 col-lg-2 me-lg-5">
										<h2 className="titre2 text-truncate">Shutter Island</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Oppenheimer" className="img-fluid " src="./assets/image/account/oppen.png" /></a>
									</div>
									<div className="col-7 col-lg-2">
										<h2 className="titre2 text-truncate">Oppenheimer</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Superman" className="img-fluid " src="./assets/image/account/superman.png" /></a>
									</div>
									<div className="col-7 col-lg-2 me-lg-5">
										<h2 className="titre2 text-truncate">Superman</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Poupée" className="img-fluid " src="./assets/image/account/poup%C3%A9e.png" /></a>
									</div>
									<div className="col-7 col-lg-2 me-lg-5">
										<h2 className="titre2 text-truncate">Poupée de Chiffon</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Minecraft" className="img-fluid " src="./assets/image/account/minecraft.png" /></a>
									</div>
									<div className="col-7 col-lg-2">
										<h2 className="titre2 text-truncate">Minecraft</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Margot" className="img-fluid " src="./assets/image/account/margot.png" /></a>
									</div>
									<div className="col-7 col-lg-2 me-lg-5">
										<h2 className="titre2 text-truncate">Margot Robbie</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-lg-auto">
								<div>
									<div>
										<a href="">
										<img alt="Roméo" className="img-fluid " src="./assets/image/account/romeo.png" /></a>
									</div>
									<div className="col-7 col-lg-2 me-md-5">
										<h2 className="titre2 text-truncate ">Roméo Elvis</h2>
										<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
									</div>
								</div>
							</div>
							<div className="col-4 col-md-auto">
								<div>
									<a href="">
									<img alt="Jul" className="img-fluid " src="./assets/image/account/jul.png" /></a>
								</div>
								<div className="col-7 col-lg-2">
									<h2 className="titre2 text-truncate">Jul</h2>
									<p className="overflow-hidden" style={{ height: '60px', maxWidth: '300px', width: 'auto' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et ratione</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
			<div className="container-fluid">
				<div className="row text-center">
					<div className="col-12 col-lg-2">
						<div>
							<div>
								<h3 className="text-center titre2">Cetro</h3>
								<a href="">
								<img alt="Cetro" className="" src="./assets/image/account/cetro.png" /></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-2">
						<div>
							<div>
								<h3 className="text-center titre2">Batman</h3>
								<a href="">
								<img alt="Batman" className="" src="./assets/image/account/batman.png" /></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-2">
						<div>
							<div>
								<h3 className="text-center titre2">Hitman</h3>
								<a href="">
								<img alt="Hitman" className="" src="./assets/image/account/hitman.png" /></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-2">
						<div>
							<div>
								<h3 className="text-center titre2">News</h3>
								<a href="">
								<img alt="News" className="" src="./assets/image/account/news.png" /></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-2">
						<div>
							<div>
								<h3 className="text-center titre2">The Shinning</h3>
								<a href="">
								<img alt="Shining" className="" src="./assets/image/account/shining.png" /></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-2">
						<div>
							<div>
								<h3 className="text-center titre2">The Thing</h3>
								<a href="">
								<img alt="The Thing" className=" " src="./assets/image/account/thing.png" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 justify-content-center">
					<a href="" className="text-center">
					<p className="text-center">Voir plus</p></a>
				</div>
			</div >
			<h2 className="text-uppercase gras text-center py-3 titre ">centres dinterêts</h2>
			<div className="container-fluid">
				<div className="row mx-lg-auto" style={{ maxWidth: '1510px', maxHeight: '1310px' }}>
					<div className="col-md-4 d-flex align-items-center justify-content-center">
						<div className="image-container">
							<div>
								<div>
									<a href="" className="lienb"><img src="./assets/image/account/aventure.png" alt="aventure" className="img-fluid" />
										<div className="centered-text">
										<p className="titre3">Gaming - Aventure </p> </div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4 d-flex align-items-center justify-content-center">
				<div className="image-container">
					<div>
						<div>
							<a href="" className="lienb"><img src="./assets/image/account/horreur.png" alt="horreur" className="img-fluid" />
							<div className="centered-text">
							<p className="titre3">Film - Horreur</p>
							</div></a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4 d-flex align-items-center justify-content-center">
				<div className="image-container">
					<div>
						<div>
							<a href="" className="lienb"><img src="./assets/image/account/shutter.png" alt="Thriller" className="img-fluid" />
							<div className="centered-text">
							<p className="titre3">Livre - Thriller</p>
							</div></a>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row mx-lg-auto" style={{ maxWidth: '1510px', maxHeight: '1310px' }}>
					<div className="col-md-4 d-flex align-items-center justify-content-center">
						<div className="image-container">
							<div>
								<div>
									<a href="" className="lienb"><img src="./assets/image/account/sf.png" alt="Sience-fiction" className="img-fluid" />
									<div className="centered-text">
									<p className="titre3">Film - Sience Fiction</p>
									</div></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 d-flex align-items-center justify-content-center">
					<div className="image-container">
						<div>
							<div>
								<a href="" className="lienb"><img src="./assets/image/account/survie.png" alt="Survie" className="img-fluid" />
								<div className="centered-text">
								<p className="titre3">Gaming - Survie</p>
								</div></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4 d-flex align-items-center justify-content-center">
				<div className="image-container">
					<div>
						<div>
							<a href="" className="lienb"><img src="./assets/image/account/rap.png" alt="Musique" className="img-fluid" />
							<div className="centered-text">
							<p className="titre3">Musique - Rap</p>
							</div></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 justify-content-center">
					<a href="" className="text-center">
					<p className="text-center">Voir plus</p></a>
				</div>
			</div >
			<div>
				<h2 className="text-uppercase gras text-center py-3 titre">derniers messages</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-11 col-md-3 my-3 me-md-5">
					<div className="card">
						<div className="card-div">
							<img alt="Avatar" className="rounded-circle" src="./assets/image/account/avatar.png" /> <span className="badge bg-primary mare">1</span>
							<h5 className="card-title">BodoWT</h5>
							<p className="text-center">Message de la boîte</p>
						</div>
					</div>
				</div>
				<div className="col-11 col-md-3 my-3 me-md-5">
					<div className="card">
						<div className="card-div">
							<img alt="Avatar" className="rounded-circle" src="./assets/image/account/avatar.png" /> <span className="badge bg-primary mare">5</span>
							<h5 className="card-title">BodoWT</h5>
							<p className="text-center">Message de la boîte</p>
						</div>
					</div>
				</div>
				<div className="col-11 col-md-3 my-3">
					<div className="card">
						<div className="card-div">
							<img alt="Avatar" className="rounded-circle" src="./assets/image/account/avatar.png" /> <span className="badge bg-primary mare">4</span>
							<h5 className="card-title">BodoWT</h5>
							<p className="text-center">Message de la boîte</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-11 col-md-3  my-3 me-md-5">
					<div className="card">
						<div className="card-div">
							<img alt="Avatar" className="rounded-circle" src="./assets/image/account/avatar.png" /> <span className="badge bg-primary mare">1</span>
							<h5 className="card-title">BodoWT</h5>
							<p className="text-center">Message de la boîte</p>
						</div>
					</div>
				</div>
				<div className="col-11 col-md-3 my-3 me-md-5">
					<div className="card">
						<div className="card-div">
							<img alt="Avatar" className="rounded-circle" src="./assets/image/account/avatar.png" /> <span className="badge bg-primary mare">5</span>
							<h5 className="card-title">BodoWT</h5>
							<p className="text-center">Message de la boîte</p>
						</div>
					</div>
				</div>
				<div className="col-11 col-md-3 my-3">
					<div className="card">
						<div className="card-div">
							<img alt="Avatar" className="rounded-circle" src="./assets/image/account/avatar.png" /> <span className="badge bg-primary mare">4</span>
							<h5 className="card-title">BodoWT</h5>
							<p className="text-center">Message de la boîte</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 justify-content-center">
					<a href="" className="text-center"><p className="text-center">Voir plus</p></a>
				</div>
			</div>
			<div>
				<h2 className="text-uppercase gras text-center py-3 titre">gestion compte</h2>
			</div>
			<div className="pt-4 px-14">
				<p className="ps-1">Votre Pseudo : BodoWT</p>
				<div className="input-group mb-3">
					<input aria-describedby="form-control light" aria-label="name" className="form-control light" placeholder="Saisir votre nouveau Pseudo" type="text" />
				</div>
			</div>
			<div className="pt-3 px-14">
				<p className="ps-1">Votre Prénom : Victorien</p>
				<div className="input-group">
					<input aria-describedby="form-control light" aria-label="last name" className="form-control light" placeholder="Saisir votre nouveau prénom" type="text" />
				</div>
			</div>
			<div className="pt-3 px-14">
				<p className="ps-1">Votre Email : victorien.lague@gmail.com</p>
				<div className="input-group">
					<input aria-describedby="form-control light" aria-label="Email" className="form-control light" placeholder="Saisir votre nouveau Email" type="email" />
				</div>
			</div>
			<div className="pt-3 px-14">
				<p className="ps-1">Mot de passe : ***********</p>
				<div className="input-group">
					<input aria-describedby="form-control light" aria-label="Phone" className="form-control light" placeholder="Saisir votre nouveau mot de passe" type="password" />
				</div>
				<p className="thin">Votre mot de passe doit contenir : 8 à 72 caractères
					1 chiffre
					1 caractère spécial
					1 majuscule</p>
			</div>
			<div className="pt-3 px-14">
				<p className="ps-1">Pour confirmer entrer votre mot de passe :</p>
				<div className="input-group">
					<input aria-describedby="form-control light" aria-label="Phone" className="form-control light" placeholder="Saisir mot de passe" type="password" />
				</div>
			</div>
			<div className="text-center py-5">
				<a href=""><button className="btn" id="confirmer" type="submit">Confirmer</button></a>
			</div>
			<div className="limit text-center pb-5">
				<a href="#" className=""><img src="./assets/image/series/UP.svg" alt="Go up" className="" /></a>
			</div>
		</div>
	</>
}

export default Body
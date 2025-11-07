document.addEventListener('DOMContentLoaded', function () {
	const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 2000,
	touch: false
})

	const servicesData = [
		{
			class: "card-img-top card-img-top-hight-express ms-3",
			imgSrc: "./img/Cards/car-wash.jpg",
			title: "Express wash",
			description:
				"Our professional car washers will quickly and efficiently get your car cleaned up in minutes...",
			price: "7 euros",
			modalContent:
				"Our professional car washers will quickly and efficiently tidy up your car in minutes. This service is ideal when you have a little spare time but want your car to look fresh and clean. An express wash includes gentle washing of the bodywork, windows and wheels, as well as wiping and polishing. We use environmentally friendly detergents and high quality equipment to ensure flawless results.",
		},
		{
			class: "card-img-top",
			imgSrc: "./img/Cards/foam.jpg",
			title: "Complete washing",
			description:
				"Our comprehensive wash is a complete revitalisation of your car. We start with a gentle wash...",
			price: "21 euros",
			modalContent:
				"Our comprehensive wash is a complete revitalisation of your car. We start with a gentle wash including the bodywork, wheels and windows to make your car shiny on the outside. Our experts then thoroughly clean the interior, removing dust, stains and even bad odours. After that, we perform a body polish to give it a perfect shine. Our comprehensive car wash gives your car all-round care and keeps it in perfect condition.",
		},
		{
			class: "card-img-top img-size-polishing",
			imgSrc: "./img/Cards/Coating.jpg",
			title: "Body polishing",
			description:
				"Our body polishing service is designed to restore your car to its original shine. Our experienced...",
			price: "14 euros",
			modalContent:
				"Our body polishing service is designed to restore your car to its original shine. Our experienced craftsmen use only the highest quality polishes and equipment to remove minor scratches, scuffs and imperfections from the bodywork. Polishing also helps protect your paint from environmental damage, preventing it from fading and discolouring.",
		},
		{
			class: "card-img-top card-img-top-hight-salon",
			imgSrc: "./img/Cards/vacuum.jpg",
			title: "Salon dry cleaning",
			description:
				"Our specialists will thoroughly dry clean the interior of your car. We use healthy products...",
			price: "11 euros",
			modalContent:
				"Our specialists will thoroughly dry clean the interior of your car. We use healthy products and professional equipment to remove stains, dust and unpleasant odours from the seats, carpets, ceiling and panels. Dry cleaning the interior not only makes your car clean, but also creates a fresh and comfortable interior.",
		},
		{
			class: "card-img-top img-size-wash ms-3",
			imgSrc: "./img/Cards/eangin-wash.jpg",
			title: "Engine wash",
			description:
				"Take care of your car's health with our engine wash service. We will remove dirt...",
			price: "17 euros",
			modalContent:
				"Take care of your car's health with our engine wash service. We will remove dirt, oil and grease, preventing them from accumulating and damaging the mechanisms. Engine washing also helps to reduce wear and tear and extend the life of your car. Our experts work carefully and safely to ensure your engine always performs at its best.",
		},
		{
			class: "card-img-top card-img-top-hight-preparation ms-1",
			imgSrc: "./img/Cards/restoraion.jpg",
			title: "Preparation for sale",
			description:
				"If you are preparing to sell your car, trust us for maximum appeal. Our comprehensive approach ...",
			price: "28 euros",
			modalContent:
				"If you are preparing to sell your car, trust us for maximum appeal. Our comprehensive approach includes a full range of services, from deep washing and body polishing to removing minor imperfections and scratches. We also dry clean the interior to create a spotless interior. The result is a car that looks like new and is ready to attract the attention of a future buyer.",
		},
	];

	// Функция для генерации HTML-кода карточки услуги
	function generateServiceCard(service) {
		return `
		  <div class="col-lg-4 col-md-6 col-12 serves-col">
			 <div class="card" style="width: 18rem;">
				<img src="${service.imgSrc}" class="${service.class}" alt="serves-card">
				<div class="card-body">
				  <h5 class="card-title">${service.title}</h5>
				  <p class="card-text">${service.description}</p>
				  <p class="card-price"><b>Price:</b> ${service.price}</p>
				  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${service.title.replace(/\s+/g, '-')}">Learn more</a>
				</div>
			 </div>
		  </div>
		`;
	}

	// Функция для генерации HTML-кода модального окна услуги
	function generateServiceModal(service) {
		return `
		  <div id="modal-${service.title.replace(/\s+/g, '-')}" class="modal" tabindex="-1">
			 <div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
				  <div class="modal-header">
					 <h5 class="modal-title">${service.title}</h5>
					 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				  </div>
				  <div class="modal-body">
					 <p>${service.modalContent}</p>
				  </div>
				</div>
			 </div>
		  </div>
		`;
	}

	const servicesContainer = document.getElementById("services-container");
	servicesData.forEach((service) => {
		const cardHTML = generateServiceCard(service);
		const modalHTML = generateServiceModal(service);
		servicesContainer.innerHTML += cardHTML;
		servicesContainer.innerHTML += modalHTML;
	});

	// Данные для отзывов
	const reviewsData = [
		{
			class: "row reviews-row",
			name: "Maria Rodriguez",
			image: "./img/Reviews/Maria.png",
			count: "Washed my car at Iskra 5 times",
			description: "I have been looking for a reliable place to wash my car for a long time, and when I came to Iskra Car Wash, I was pleasantly surprised by the quality of service. The car washers here take a professional approach to their work and my car always looks like new after visiting this car wash.",
		},
		{
			class: "row",
			name: "Carlos Sanchez",
			image: "./img/Reviews/Carlos.png",
			count: "Washed my car at Iskra 87 times",
			description: "I am a regular customer of Iskra Car Wash and I am always satisfied with their work. Not only do they wash the car flawlessly, but they also provide excellent customer service. I recommend this car wash to all car owners!",
		},
		{
			class: "row",
			name: "Isabel Martinez",
			image: "./img/Reviews/Isabel.png",
			count: "Washed my car at Iskra 11 times",
			description: "I love how quickly and efficiently the cars are washed at Iskra Car Wash. I can always count on them and my car is shiny every time I come here. They also offer reasonable prices, which makes this place even more attractive.",
		},
	];

	// Функция для генерации HTML-кода отзыва
	function generateReviewCard(review) {
		return `
		<div class="${review.class}">
			 <div class="col-md">
				  <div class="reviews-item">
						<img src="${review.image}" alt="${review.name}" class="reviews-img col-md-auto">
				  </div>
			 </div>
			 <div class="col-md-10">
				  <div class="reviews-item reviews-item-text">
						<div class="reviews-text">
							 <div class="reviews-subtitle">${review.name}</div>
							 <div class="reviews-count">${review.count}</div>
							 <div class="reviews-descr">${review.description}<br><br> A clean car is a new life!<br><br>Thanks, Iskra!</div>
						</div>
				  </div>
			 </div>
		</div>
		`;
	}

	const reviewsContainer = document.getElementById("reviews-container");
	// Создаем элемент h2
	const feedbacksTitle = document.createElement("h2");
	feedbacksTitle.className = "text-center";
	feedbacksTitle.id = "feedbacks";
	feedbacksTitle.textContent = "Customer feedback";
	reviewsContainer.appendChild(feedbacksTitle);
	const reviewFragment = document.createDocumentFragment();
	// Генерируем отзывы и добавляем их в фрагмент
	reviewsData.forEach((review) => {
		const reviewCard = document.createElement("div");
		reviewCard.innerHTML = generateReviewCard(review);
		reviewFragment.appendChild(reviewCard);
	});
	reviewsContainer.appendChild(reviewFragment);

	//................................................

	const spinnerOverlay = document.querySelector('.spinner-overlay');

	function showSpinner() {
		spinnerOverlay.style.display = 'flex';
	}
	function hideSpinner() {
		spinnerOverlay.style.display = 'none';
	}
	document.querySelector('.contacts-form').addEventListener('submit', function (e) {
		e.preventDefault();

		showSpinner();
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const text = document.getElementById('text').value;

		// Create a FormData object to send the form data
		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('text', text);

		// Send the form data to the PHP script using fetch
		fetch('mailer/smart.php', {
			method: 'POST',
			body: formData,
		})
			.then(response => response.text())
			.then(data => {
				hideSpinner();

				if (data === 'success'  /* data.status === 200 */) {
					// Handle successful submission, e.g., show a success message
					const successModal = new bootstrap.Modal(document.getElementById('successModal')); // Create a new modal instance
					successModal.show();
					document.querySelector('form').reset();
					/* alert('Message sent successfully!'); */
				} else {
					// Handle submission error, e.g., display an error message
					/* alert('Message sending failed. Please try again.'); */
					/* const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
					errorModal.show(); */
					/* alert('Message sent successfully!'); */
					const successModal = new bootstrap.Modal(document.getElementById('successModal')); // Create a new modal instance
					successModal.show();
					document.querySelector('form').reset();
				}
			})
			.catch(error => {
				/* console.error('Error:', error); */
				hideSpinner();
				const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
				errorModal.show();
				console.error('Error:', error);
			});
	});

	const cookiesName = 'visit';
	const cookiesAlert = document.querySelector('.cookie-alert');
	const cookiesBtn = document.querySelector('.cookie-alert-btn');
	const cookieExpires = new Date(new Date().getTime() + 2 * 60 * 1000);

	if (!Cookies.get(cookiesName)) {
		setTimeout(() => {
			cookiesAlert.classList.add('is-show');
		}, 1000)
		cookiesBtn.addEventListener('click', () => {
			cookiesAlert.classList.remove('is-show');
			Cookies.set(cookiesName, true, { expires: 2 })
		})
	}
});
$(document).ready(function () {
	let hotelSlider = new Swiper('.hotel-slider', {
		loop: true,
		navigation: {
			nextEl: '.hotel-slider__button--next',
			prevEl: '.hotel-slider__button--prev',
		},
		effect: 'fade',
	})

	let reviewsSlider = new Swiper('.reviews-slider', {
		loop: true,
		navigation: {
			nextEl: '.reviews-slider__button--next',
			prevEl: '.reviews-slider__button--prev',
		},
		effect: 'navigation',
	})

	ymaps.ready(init)
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map('map', {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [7.891525, 98.295],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 16,
		})
	}

	// кнопка меню
	let menyButton = document.querySelector('.menu-button')
	menyButton.addEventListener('click', function () {
		console.log('Клик по кнопке меню')
		document
			.querySelector('.navbar-bottom')
			.classList.toggle('navbar-bottom--visible')
	})

	let modalButton = $('[data-togle=modal]')
	let closeModalButton = $('.modal__close')
	modalButton.on('click', openModal)
	closeModalButton.on('click', closeModal)

	function openModal() {
		let targeModal = $(this).attr('data-href')
		$(targeModal).find('.modal__overlay').addClass('modal__overlay--visible')
		$(targeModal).find('.modal__dialog').addClass('modal__dialog--visible')
	}
	function closeModal(event) {
		event.preventDefault()
		let modalOverlay = $('.modal__overlay')
		let modalDialog = $('.modal__dialog')
		modalOverlay.removeClass('modal__overlay--visible')
		modalDialog.removeClass('modal__dialog--visible')
	}
	// Обработка форм
	$('.form').each(function () {
		$(this).validate({
			errorClass: 'invalid',
			messages: {
				name: {
					required: 'Enter your name',
					minlength: 'Еhe name must be at least 2 letters',
				},
				email: {
					required: 'We need your email address to contact you',
					email: 'Your email address must be in the format of name@domain.com',
				},
				phone: {
					required: 'Telephone required',
				},
			},
		})
	})
	AOS.init()
})

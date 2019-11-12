$(document).ready(function () {
	function triviaGame() {
		var gameData = {
			timer: 30,
			correct: 0,
			incorrect: 0,
			unanswered: 0,
			foodData: {
				questions: {
					q0: 'What state is the birthplace of the cheeseburger?',
					q1: 'What is the only state that grows coffee beans?',
					q2: 'What is the most ordered food in the USA?',
					q3: 'In which state was Coca-Cola first sold?',
					q4: 'What is the state fruit of New York?'
				},
				choices: {
					q0: ['Pennsylvania', 'Maine', 'Colorado', 'New Jersey'],
					q1: ['Hawaii', 'Florida', 'Texas', 'California'],
					q2: ['Pizza', 'Cheeseburger', 'Hot Dog', 'Fried Chicken'],
					q3: ['Tennessee', 'Oregan', 'New York', 'Georgia'],
					q4: ['Pear', 'Apple', 'Grape', 'Banana']
				},
				answerIndex: {
					q0: 3,
					q1: 1,
					q2: 4,
					q3: 4,
					q4: 2,
				}
			}
		};

		function categorySelect() {
			$('.category').on('click', function () {
				var category = $(this).val();
				console.log(category);
				$('.categorySlide').fadeOut(500, game(category));

			});
		};

		function game(selection) {
			if (selection === 'food') {
				for (var i = 0; i < 5; i++) {
					var slide = $('<div> \r' + gameData.foodData.questions[i], { id: 'slide' + [i], class: 'foodSlide' });
					// $('.foodSlides').append(slide);
					console.log(gameData.foodData.questions[i]);
				}
			}
		};




		categorySelect();
	};

	triviaGame();
});

// function displaySplash() {
// 	var splashText = ['Ready...', 'Get Set...', 'Go!'];
// 	for (var i = 0; i < splashText.length; i++) {
// 		splashDelay(splashText, i);
// 	};
// };
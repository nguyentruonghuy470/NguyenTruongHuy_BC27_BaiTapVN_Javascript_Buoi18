const showExBtns = document.querySelectorAll('.show-ex');
const exercisesNode = document.querySelectorAll('.exercise-wrapper');
const exercises = Array.from(exercisesNode);
let isShow=true;  
// console.log(ex1.dataset);
showExBtns.forEach((btn, i) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    exercises.forEach(ex => {
      ex.classList.remove('active');   
    });
    exercises[i].classList.add('active');
  });

});

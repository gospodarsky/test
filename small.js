// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log('2 seconds passed'));

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  el.style.position = 'relative';
  el.style.transition = 'transform 1s';
  el.style.transform = 'translate3d(100px, 0, 0)';
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  return Array.from(new Set(xs));
} 

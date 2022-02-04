// const sba_container = document.querySelector('.sba-container');
// for (var i = 0; i<= 100; i++){
//     const sba_block = document.createElement('div');
//     sba_block.classList.add('sba-block');
//     sba_container.appendChild(sba_block);
// }
function animateBlocks(){
    anime({
        targets:'.sba-block',
        translateX: function(){
            return anime.random(-700,700);
        },
        translateY: function(){
            return anime.random(-500,500);
        },
        scale: function(){
            return anime.random(1,5);
        },
        easing: 'linear',
        duration: 3000,
        delay:anime.stagger(10),
        complete: animateBlocks,
    })
}
animateBlocks();
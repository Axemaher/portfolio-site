// import TweenMax from 'gsap';
import { TweenMax } from "gsap";
import 'gsap/CSSPlugin';

const magnetizeAnimation = (elementClassName, maxDistance) => {
    console.log('animation')
    if (window.innerWidth > 600) {
        document.addEventListener("mousemove", e => {
            positionCalculating(`.${elementClassName}`, e);
        });

        const positionCalculating = (el, e) => {
            const item = document.querySelector(el);

            if (item !== null) {
                const mX = e.clientX;
                const mY = e.clientY;
                const customDist = item.getAttribute('dist') * 20 || maxDistance;
                const centerX = item.offsetLeft + (item.clientWidth / 2);
                const centerY = item.offsetTop + (item.clientHeight / 2);

                const deltaX = Math.floor((centerX - mX)) * -0.45;
                const deltaY = Math.floor((centerY - mY)) * -0.45;

                const distance = calculateDistance(item, mX, mY);

                if (distance < customDist) {
                    TweenMax.to(item, 0.3, { y: deltaY, x: deltaX, scale: 1.1 });
                }
                else {
                    TweenMax.to(item, 0.45, { y: 0, x: 0, scale: 1 });
                }
            }
        }
        const calculateDistance = (elem, mouseX, mouseY) => {
            return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft + (elem.clientWidth / 2)), 2) + Math.pow(mouseY - (elem.offsetTop + (elem.clientHeight / 2)), 2)));
        }
    }

}

export default magnetizeAnimation;

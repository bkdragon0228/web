const circles = document.querySelectorAll('.circle');
let activeLight = 0;

function changeLight() {
    circles[activeLight].className = 'circle';
    // 색을 초기화
    activeLight++;
    if (activeLight > 2) {
        activeLight = 0;
        //다시 빨강으로 돌아가기
    }
    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
    // 어트리뷰트에 준 color를 이용!
}

setInterval(changeLight, 3000);

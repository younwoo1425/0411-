//<<원래 계획>>
//오늘 - 생일
//년 - 년 = a
//월 - 월 1)마이너스 = a-1
//        2)플러스  = a
//        3)같으면  1)일 마이너스 = a-1
//                  2)일 플러스 = a
//                  3)일 같으면 = a
//생일을 년 월 일로 나누는 걸 잘 모르겠어서 Chat-GPT를 참고하였습니다

function calculateAge() {
    var birthDate = document.getElementById("birthdate").value; 
    // 생년월일을 입력받음 - HTML에서 birthdate라는 id를 가진 요소를 가져옴 .value를 사용하여 해당 요소의 값을 가져옴 생년월일이 YYYY-MM-DD 형식의 문자열로 birthDate 변수에 저장
    var today = new Date();
    // 현재 날짜를 구함 - 현재 날짜와 시간을 나타내는 Date 객체 생성, 이 객체는 today 변수에 저장됌
    var birthYear = birthDate.substring(0, 4); // 생년을 구함
    var birthMonth = birthDate.substring(5, 7); // 생월을 구함
    var birthDay = birthDate.substring(8, 10); // 생일을 구함
    //substring 메소드를 사용하여 문자열의 일부분을 추출
    var age = today.getFullYear() - birthYear; // 현재년도 - 생년 = 만나이
    //getFullYear() - 현재 연도를 가져옴. 계산 결과 age 변수에 저장
    if (today.getMonth() + 1 < birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() < birthDay)) {
        age--; // 생일이 지나지 않았으면 1을 빼줌
    }
    //today.getMonth()+1 : 현재 월 (+1의 이유: getMonth()가 0부터 시작하는 월을 반환. 월을 나타내는 변수 birthMonth와 비교하기 위해 ex) 1월 => 0 )
    document.getElementById("result").innerHTML = age + "세입니다."; // 결과를 출력
    //계산된 만나이를 result라는 id를 가진 HTML 요소에 출력. innerHTML 속성 사용 => 요소 내부 문자열 삽입
}


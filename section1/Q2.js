/**
 * 삼각형 판별하기
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 */

function solution(a, b, c){
    let tmp;
    let answer="no";
    if(a>b) {tmp=a; if(tmp<b+c){answer="yes"} else answer="no"} 
    else {tmp=b; if(tmp<a+c){answer="yes"} else answer="no"}
    if(tmp<c) {tmp=c; if(tmp<b+a){answer="yes"} else answer="no"}
    return answer;
}

console.log(solution(12, 6, 6));
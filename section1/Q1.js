/**
 * 세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
세요.(정렬을 사용하면 안됩니다)s
 */

function solution(a, b, c){
    let temp;
    if(a<b) temp=a;
    else temp=b;
    if(temp>c) temp=c;

    return temp;
}

console.log(solution(9, 5, 11));
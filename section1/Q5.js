/**
 *최솟값 구하기
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 */

function solution(arr){         
    let tmp=arr[0]<arr[1] ? arr[0] : arr[1];
    for(let i=2; i<arr.length; i++) {
        if(tmp>arr[i]) tmp=arr[i];
    }
    return tmp;
}

let arr=[5, 7, 20, 3, 8, 9, 11];
console.log(solution(arr));
function solution(answers) {
    let answer = [];
    const Array = [[1, 2, 3, 4, 5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];

    let sum = [0,0,0];

    for(let j = 0; j < 3; j++){
        for(let i = 0; i < answers.length; i++) {
            if (answers[i] === Array[j][i % (Array[j].length)]) {
                sum[j]++;
            }
        }
    }
    //max 값 계산
    let max = Math.max(sum[0], sum[1], sum[2]);

    //max값을 가진 index + 1을 배열에 삽입
    if (max === sum[0]) {
        answer.push(1);
    }
    if (max === sum[1]) {
        answer.push(2);
    }
    if (max === sum[2]) {
        answer.push(3);
    }

    return answer;
}
function solution(answers) {
    let answer = [];
    const Array = [[1, 2, 3, 4, 5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];

    let sum = [0,0,0];

    for(let j = 0; j < 3; j++){
        for(let i = 0; i < answers.length; i++) {
            if (answers[i] === Array[j][i % (Array[j].length)]) {
                sum[j]++;
            }
        }
    }
    //max 값 계산
    let max = Math.max(sum[0], sum[1], sum[2]);

    //max값을 가진 index + 1을 배열에 삽입
    if (max === sum[0]) {
        answer.push(1);
    }
    if (max === sum[1]) {
        answer.push(2);
    }
    if (max === sum[2]) {
        answer.push(3);
    }

    return answer;
}
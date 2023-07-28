function solution(clothes) {
  const clothesMap = new Map();

  // 각 의상 종류별로 개수를 카운트
  clothes.forEach(([, type]) => {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  });

  let answer = 1;
  clothesMap.forEach((count) => {
    answer *= (count + 1); // 해당 의상 종류를 입지 않는 경우까지 포함하여 곱셈
  });

  return answer - 1; // 아무것도 입지 않는 경우를 뺀다.
}
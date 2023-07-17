function solution(priorities, location) {
  let answer = 0;

  // 프로세스들의 정보를 담을 배열 생성
  const queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));

  while (queue.length > 0) {
    // 큐에서 가장 앞에 있는 프로세스 추출
    const currentProcess = queue.shift();

    // 우선순위가 더 높은 프로세스가 있는지 확인
    const hasHigherPriority = queue.some(
      (process) => process.priority > currentProcess.priority
    );

    if (hasHigherPriority) {
      // 우선순위가 더 높은 프로세스가 있으면 현재 프로세스를 큐의 뒤로 이동
      queue.push(currentProcess);
    } else {
      // 우선순위가 가장 높은 프로세스인 경우 실행 완료
      answer++;

      // 실행 완료한 프로세스가 목표 프로세스인지 확인
      if (currentProcess.index === location) {
        break;
      }
    }
  }

  return answer;
}
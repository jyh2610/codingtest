function solution(bridge_length, weight, truck_weights) {
    let timeCount = 0;
    // 다리
    const bridge = Array(bridge_length).fill(0)
    // 현재 다리의 총 무게
    let currentBridgeWeigth = 0;
    // while (건너지 못한 트럭이 없을 때까지)
    while (truck_weights.length) {
        // timeCount ++
        timeCount = timeCount + 1;
        //다리 맨 앞의 트럭을 빠져나옴
        bridge.shift()
        // 현재 다리의 총 무게 갱신
        currentBridgeWeigth = bridge.reduce((prev, curr) => {
            return prev + curr
        }, 0)
        //if(갱신된 다리의 무게 + 건너야 할 첫번째 트럭 무게 <= weight)
        if(currentBridgeWeigth + truck_weights[0] <= weight) {
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
    }
    return timeCount + bridge.length
}
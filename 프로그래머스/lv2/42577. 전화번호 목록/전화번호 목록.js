function solution(phone_book) {
    // 정렬을 통해 길이가 짧은 번호부터 비교하기 위해 정렬합니다.
    phone_book.sort();

    // 번호를 순서대로 비교하여 접두사인지 확인합니다.
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            // 다른 번호의 접두사인 경우 false를 반환합니다.
            return false;
        }
    }

    // 접두사가 없는 경우 true를 반환합니다.
    return true;
}
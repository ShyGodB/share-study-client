export function getMenu() {
    const count = 4;
    const result = [];
    for (let i = 1; i <= count; i++) {
        result.push({
            id: i,
            title: '测试' + i,
            path: 'lll' + 1,
        });
    }
    return result;
}

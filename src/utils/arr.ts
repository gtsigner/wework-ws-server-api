export function arrayToObject(arr: [], key: string) {
    const obj: any = {};
    arr.forEach((it) => {
        obj[it[key]] = it;
    });
    return obj;
}

export function objectToArray(obj: any) {
    const arr: any[] = [];
    Object.keys(obj).forEach((k: string) => {
        arr.push(obj[k]);
    });
    return arr;
}


export const voice_types = {
    shangfen: 'shangfen',
    boss_find: 'boss_find',
    drag_man: 'drag_man',
    msg: 'msg',
    fpsb: 'fpsb',
    warning_1: 'warning_1',
    warning_2: 'warning_2',
    warning_3: 'warning_3',
    game_start: 'game_start',
    game_res: 'game_res',
    game_stop: 'game_stop',
    wx_down: 'wx_down',
};
const diamond = (n: number): void => {
    let s: number = n - 1;
    let st: string = ' ';
    for (let i: number = 1; i <= n; i++) {
        st = '';
        for (let c: number = 1; c <= s; c++)
            st = st + ' ';

        s--;

        for (let c = 1; c <= i - 1; c++)
            st = st + '* ';
        console.log(st + '\n');
    }
    s = 1;
    for (let i = 1; i <= n; i++) {

        st = '';
        for (let c = 1; c < s; c++)
            st = st + ' ';

        s++;

        for (let c = 1; c <= (n - i); c++)
            st = st + '* ';

        console.log(st + '\n');
    }
};
export default diamond;
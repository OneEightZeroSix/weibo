function setChannel(type) {
    //判断当前是什么路由
    var route = this.$router.history.current.path;
    switch (route) {
        case "/home/hot":
            this[type] = 0;
            break;
        case "/home/fresh":
            this[type] = 1;
            break;
        case "/home/fun":
            this[type] = 2;
            break;
        case "/home/emotion":
            this[type] = 3;
            break;
        case "/home/star":
            this[type] = 4;
            break;
        case "/home/society":
            this[type] = 5;
            break;
        case "/home/digit":
            this[type] = 6;
            break;
        case "/home/sports":
            this[type] = 7;
            break;
        case "/home/car":
            this[type] = 8;
            break;
        case "/home/film":
            this[type] = 9;
            break;
        case "/home/game":
            this[type] = 10;
            break;
        default:
            this[type] = 0;
    }
}

export default setChannel
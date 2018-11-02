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
        default:
            this[type] = 0;
    }
}

export default setChannel
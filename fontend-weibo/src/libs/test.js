this.scroll.on("touchEnd", pos => {
    // 下拉动作
    if (pos.y > 32) {
        this.loadMore("down");
    }
});
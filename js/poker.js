
const poker = {
    imgs: [],  //一个空数组，用于存储 图像。
    img_index: 0,  //一个变量，用于存储当前显示的牌的索引。
    poker_eles: {},  //一个空对象，用于存储所有具有类名 "poker" 的 DOM 元素。
    transform_datas: [  //一个字符串数组，用于存储 5 个转换字符串，用于改变牌的位置和旋转。
        "rotate(-10deg)",
        "rotate(-6deg) translate(35%, -12%)",
        "rotate(-2deg) translate(65%, -19%)",
        "rotate(2deg) translate(95%, -26%)",
        "rotate(6deg) translate(125%, -23%)",
    ],
    init() {  //用于初始化扑克牌动画
        for (let i = 0; i < 9; i++) {
            let img = new Image();
            img.src = `./images/${i}.jpg`;
            this.imgs.push(img);
        }
        this.poker_eles = [...document.getElementsByClassName("poker")];
        this.poker_eles.forEach((obj, index) => {
            console.log(obj);
            console.log(index);
            obj.nums = index;
        });

        this.img_index = this.poker_eles.length;
    },
    move() {
        this.poker_eles.map((ele) => {
            let nums = ele.nums;
            if (nums + 1 >= this.poker_eles.length) {
                nums = 0;
                ele.style.transition = "";
                ele.querySelector("img").src =
                    this.imgs[this.img_index].src;
                this.img_index++;
                if (this.img_index >= this.imgs.length)
                    this.img_index = 0;
            } else {
                nums += 1;
                ele.style.transition = "transform 0.3s ease";
            }
            ele.style.zIndex = nums;
            ele.style.transform = this.transform_datas[nums];
            ele.nums = nums;
        });
    },
};
poker.init();
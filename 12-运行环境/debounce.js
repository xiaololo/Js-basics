const input1 = document.getElementById('input1')
// let timer=null
// input1.addEventListener('keyup', function () {
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         //模拟触发change事件
//         console.log(input1.value)
//         // 清空计时器
//         timer = null
//     }, 500);
// })

function debounce(fn,delay){
    let timer=null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer=setTimeout(() => {
            fn.apply(this,arguments)
            timer=null
        }, delay);
    }
}
input1.addEventListener('keyup', debounce(()=>{
    console.log(input1.value)
},500))
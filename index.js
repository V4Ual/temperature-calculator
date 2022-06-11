const tempretureCal = () => {

    const Ivalue = document.getElementById("input").value;


    const tempselected = document.getElementById('changeO').value;
    //  const valueTemp = changeO.option[tempselected.selectedIndex].value;
    console.log(tempselected);
    const c = document.getElementById("c").value;
    console.log(c)

    let a;
    let b;

    if (tempselected == c) {
        a = Math.round(Ivalue * (5 / 9)) + 32;
        document.getElementById('text').innerHTML = `= ${a} Fahrenheit (°F)`;
        console.log(a)
    } else {
        const b = Math.round(Ivalue - 32) * (5 / 9);
        document.getElementById('text').innerHTML = `= ${b} calceus`
        console.log(b)
    }



    // if (tempselected.value = c) {
    //     console.log("it is celceus")
    // } else {
    //     console.log('it is f')
    // }
}
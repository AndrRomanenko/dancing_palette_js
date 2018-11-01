module.exports = {
// Проверка цвета на валидность
    checkColor(color){
        if(isNaN(color)){
            return false;
        }else{

            return true;
        }
    },

    // Генерация палтиры при итерациях
    palette(color){
        let currentColor = color;
        return function() {
            const tempColor = currentColor;
            currentColor = shaderColor(currentColor);
            return tempColor;
        }
    },

    // Осветление цвета
    shaderColor(color) {
        var num = parseInt(color.slice(1), 16);
        var amt = Math.round(2.55 * 9);
        var R = (num >> 16) + amt;
        var G = (num >> 8 & 0x00FF) + amt;
        var B = (num & 0x0000FF) + amt;
        var new_color = ("#" + (0x1000000 +
            (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString (16).slice (1))
        return new_color;
    }
}

alert('im index.js');

requireJS('./scripts/init.js')
    .then(() => {
        alert("init is ok!");
        newDiv();

    })
    .catch((err) => {
        console.log(err);
    });

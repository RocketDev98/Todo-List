window.setTimeout(function () {


    let entry = prompt('What you like to do?');
    let list = [];

    while (entry !== 'quit') {
        if (entry === 'quit') break;
        if (entry === 'new') {
            let add = prompt('What would you like to add?');
            list.push(add);
            entry = prompt('What you like to do?');
        }
        if (entry === 'list') {
            for (let print of list) {
                console.log(`${list.indexOf(print) + 1} ${print}`);
            }
            entry = prompt('What you like to do?');
        }
    }

    if (entry === 'quit') {
        console.log('OK, YOU QUIT');
    }

}, 500);


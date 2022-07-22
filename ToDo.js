window.setTimeout(function () {


    let entry = prompt('What you like to do?');
    let list = [];

    while (entry !== 'quit') {
        if (entry === 'quit') break;
        if (entry === 'new') {
            let add = prompt('What would you like to add?');
            list.push(add);
            console.log(`${add} added to list`);
            entry = prompt('What you like to do?');
        }
        if (entry === 'list') {
            for (let print of list) {
                console.log(`${list.indexOf(print)} ${print}`);
            }
            entry = prompt('What you like to do?');
        }
        if (entry === 'delete') {
            let del = prompt('Enter the index of todo to delete:');
            console.log(`${list[parseInt(del)]} removed from list`);
            list.splice(del, 1);
            entry = prompt('What you like to do?');
        }
    }

    if (entry === 'quit') {
        console.log('OK, YOU QUIT');
    }

}, 500);


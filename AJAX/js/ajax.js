(() => {

    const xhr = new XMLHttpRequest(),
          $xhr = document.getElementById('xhr'),
          $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', (e) => {
        if(xhr.readyState !== 4) { return; }
        // console.log(xhr);
        
        if(xhr.status >= 200 && xhr.status < 300) {
            // console.log('La petición fue realizada éxitosamente');
            // console.log(xhr.responseText);
            // $xhr.innerHTML = xhr.responseText;
            // console.log(JSON.stringify(xhr.responseText));
            const json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach( (el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
            
        } else {
            // console.error('La petición dio error!');
            let message = xhr.statusText || 'Ocurrio un error';
            $xhr.innerHTML = `Error <b>${xhr.status}</b>: ${message}`
        }

        console.log('Este mensaje se va a ejecutar de todas formas.');
    });

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/user');
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    // xhr.open('GET', './assets/users.json');


    xhr.send();


})();
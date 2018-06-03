const typingOutputs = {};
window.addEventListener('DOMContentLoaded', () => {
    // Reveal.addEventListener('fragmentshown', function (event) {
    //     let fr = event.fragments[0];
    //     let id = fr.id;
    //     if (!id) {
    //         fr = event.fragments[1] || {};
    //         id = fr.id;
    //     }
    //     if (!id) {
    //         return false;
    //     }
    
    //     const outputId = id.replace('s', 'o');
    //     const outputEl = document.querySelector(`#${outputId}`);
    
    //     // if (outputEl.classList.contains('to-be-clear')) {
    //     //     outputEl.innerHTML = '';
    //     //     outputEl.classList.remove('to-be-clear');
    //     // }
    
    //     if (fr.classList.contains('fade-in')) {
    //         // debugger;
    //         const options = {
    //             cursor: false,
    //             speed: 25,
    //             startDelete: false,
    //             startDelay: 0,
    //             lifeLike: false,
    //             breakLines: false,
    //             html: true
    //         }
    //         var typed = new TypeIt(`#${outputId}`, {
    //             ...options,
    //             strings: fr.innerHTML.trim()
    //         });
    //         typingOutputs[id] = typed;
    //     }
    
    // });
    
    // Reveal.addEventListener('fragmenthidden', function (event) {
    //     console.log('fragment', event);
    //     let fr = event.fragments[0];
    //     let id = fr.id;
    //     if (!id) {
    //         fr = event.fragments[1] || {};
    //         id = fr.id;
    //     }
    //     if (!id) {
    //         return
    //     };
    //     typingOutputs[id] && typingOutputs[id].delete();
    // });
    
    Reveal.addEventListener('fragmentshown', function (event) {
        let fr = event.fragments[0];
        let id = fr.id;
        if (!id) {
            fr = event.fragments[1] || {};
            id = fr.id;
        }
        if (!id) {
            return false;
        }
    
        const outputId = id.replace('s', 'o');
        const outputEl = document.querySelector(`#${outputId}`);
    
        // if (outputEl.classList.contains('to-be-clear')) {
        //     outputEl.innerHTML = '';
        //     outputEl.classList.remove('to-be-clear');
        // }
    
        if (fr.classList.contains('fade-in')) {
            //debugger;
            var typed = new Typed(`#${outputId}`, {
                stringsElement: `#${id}`,
                loop: false,
                startDelay: 0,
                typeSpeed: 25,
                showCursor: false,
                contentType: 'html'
            });
            typingOutputs[id] = typed;
        }
    
    });
    
    Reveal.addEventListener('fragmenthidden', function (event) {
        console.log('fragment', event);
        let fr = event.fragments[0];
        let id = fr.id;
        if (!id) {
            fr = event.fragments[1] || {};
            id = fr.id;
        }
        if (!id) {
            return
        };
        typingOutputs[id] && typingOutputs[id].destroy();
    });
});



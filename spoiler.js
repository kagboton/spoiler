
(function(){
    var spoilers = document.querySelectorAll('.spoiler')

    var createSpoilerButtonAndSpan = function(spoiler){
        
        //Create the button
        var button = document.createElement('button')
        button.textContent = 'Afficher le spoiler'
        

        //Create the span.spoiler-content
        var span = document.createElement('span')
        span.innerHTML = spoiler.innerHTML
        span.className = 'spoiler-content'

        //Append span.spoiler-content and button to the DOM
        spoiler.innerHTML = ''
        spoiler.appendChild(span)
        spoiler.appendChild(button)
        

        button.addEventListener('click', function(){
            span.classList.add('visible')
            button.parentNode.removeChild(button)
        })
    }


    for(let i = 0; i < spoilers.length; i++){
        createSpoilerButtonAndSpan(spoilers[i])
    }

})()
 
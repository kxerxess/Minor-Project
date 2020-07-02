$(document).ready(function () {

    var tl = gsap.timeline({
        defaults: {
            duration: 1
        }
    })

    tl.from('.splash-text', {
            y: -200
        })
        .from('.fname, .lname', {
            opacity: 0
        }, '-=0.2')
        .from('.cta', {
            opacity: 0
        }, '-=1')

});
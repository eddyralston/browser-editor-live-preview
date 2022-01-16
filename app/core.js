const id = id => document.getElementById(id)
const html = string =>{
    var el = document.createElement('div')
    el.innerHTML=string
    return el.firstElementChild
}
const script = string =>{
    var el = document.createElement('script')
    el.innerHTML=string
    return el
}
/**============================================
 **               JS/CSS Loader
 *=============================================**/
const load = (function (doc, head) {

    const js = (url, callback) => {
        var script = doc.createElement('script')
        script.src = url
        script.onload = callback
        head.append(script)
    }

    const css = (url) => {
        var link = doc.createElement('link')
        link.rel = 'stylesheet'
        link.href = url
        head.append(link)
    }
    return { js, css }
})(document, document.head);


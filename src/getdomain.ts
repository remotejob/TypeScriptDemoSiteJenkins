export function setupDomain(element:HTMLHeadElement) {

    console.log(window.location.hostname)
    let domain = window.location.hostname.split(".")

    element.innerHTML="DemoSite for "+domain[0].toUpperCase() 

}
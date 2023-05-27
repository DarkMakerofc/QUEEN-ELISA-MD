const instagramGetUrl = require("./index")

async function test(url){
    let result = await instagramGetUrl(url)
    return result
}

test("https://www.instagram.com/p/CMAMhvgsVal/").then(result=>{
    console.log("Test Videos/Images OK")
    console.log(result)
}).catch(err=>{
    console.error(err)
})

test("https://www.instagram.com/p/CHSvvKXpkH6/").then(result=>{
    console.log("Test Only Image OK")
    console.log(result)
}).catch(err=>{
    console.error(err)
})

test("https://www.instagram.com/tv/CdmYaq3LAYo/").then(result=>{
    console.log("Test Only Video OK")
    console.log(result)
}).catch(err=>{
    console.error(err)
})

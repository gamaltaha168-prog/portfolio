//add class acttive to headeron scrole
let header =docment.queryselector('header')

window scrole = function(){
if (this-scroleY>=50) {
 header.classlist=add("active")   
}else{
    header.classlist=remove("active")
}
}
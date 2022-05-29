function calculateDate(){
    let second=1000000;
    const min=60;
    const hour=min*60;
    const day=hour*24;
    const week=day*7;
    const month=week*4;
    const monCount=Math.trunc(second/hour);
    
    console.log(monCount);

}
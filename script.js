
function getLocalDay(date){
	let day= date.getDay();
	if(day==0){
		day=7
	};
	return day;
}
let date = new Date(2012, 0, 8);  // 8 января 2012 года
alert( getLocalDay(date) );        // 7

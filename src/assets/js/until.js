export function formatTime(time) {
	let dateTimeStamp = new Date(time).getTime()
	let minute = 1000 * 60;
	let hour = minute * 60;
	let day = hour * 24;
	let halfamonth = day * 15;
	let month = day * 30;
	let now = new Date().getTime();
	let diffValue = now - dateTimeStamp;
	let monthC = diffValue / month;
	let weekC = diffValue / (7 * day);
	let dayC = diffValue / day;
	let hourC = diffValue / hour;
	let minC = diffValue / minute;
	let result = ''
	if(monthC >= 1) {
		result= parseInt(monthC) + "个月前发布";
	}
	else if(weekC >= 1) {
		result= parseInt(weekC) + "周前发布";
	}
	/* if(weekC > 1) {
		
		result= `${time.split(" ")[0]} 发布`;
	}
	else if(weekC == 1) {
		result= parseInt(weekC) + "周前发布";
	} */
	else if(dayC >= 1) {
		//console.log(`${time.split(" ")[0]}发布`)
		result= parseInt(dayC) +"天前发布";
	}
	else if(hourC >= 1) {
		result= parseInt(hourC) +"小时前发布";
	}
	else if(minC >= 1) {
		result= parseInt(minC) +"分钟前发布";
	}
	else {
		result="刚刚发布";
		
	}
	return result;
}
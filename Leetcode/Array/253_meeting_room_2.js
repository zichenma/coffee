var canAttendMeetingRooms = function (intervals) {
	
	if (intervals.length == 0) return;

	var start = [], end = [];

	for (var i = 0; i < intervals.length; i++) {
		start.push(intervals[i][0]);
		end.push(intervals[i][1]);
	}

	start.sort(function(a, b) { return a - b});

	end.sort(function(a, b) { return a - b});

	var endPoint = 0, res = 0;

	for (var i = 0; i < end.length; i++) {
		if (start[i] < end[endPoint]) {
			res++;
		}else{
			endPoint++;
		}
	}

	return res;

}

document.write(canAttendMeetingRooms([[0,1],[2,3],[4,5], [6, 9], [ 7, 10], [8,9]]));
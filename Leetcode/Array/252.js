var canAttendMeetings = function (intervals) {
	if (intervals.length == 0) return;
	if (intervals.length == 1) return true;

	var start = [], end = [];

	for (var i = 0; i < intervals.length; i++) {
		start.push(intervals[i][0]);
		end.push(intervals[i][1]);
	}

	start.sort(function(a, b) { return a - b});

	end.sort(function(a, b) { return a - b});

	for (var i = 0; i < end.length; i++) {
		if (end[i] >  start[i + 1]) {
			return false;
		}
	}

	return true;

}

document.write(canAttendMeetings([[0,1],[2,3],[4,5]]));
var request = require('request');

function getLSJZ(code, size, startDate, endDate) {
	console.log(`Fund: ${code}`);

	var url = `http://api.fund.eastmoney.com/f10/lsjz?fundCode=${code}&pageIndex=1&pageSize=${size}`;

	if (startDate) {
		url += `&startDate=${startDate}`;
		console.log(`start Date: ${startDate}`);
	}
	if (endDate) {
		url += `&endDate=${endDate}`;
		console.log(`end Date: ${endDate}`);
	}

	var options = {
		url: url,
		headers: {
			'Host': 'api.fund.eastmoney.com',
			'Referer': `http://fund.eastmoney.com/f10/jjjz_${code}.html`,
		}
	}


	request(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(`PageSize: ${info.PageSize}`);
			var info = JSON.parse(body);
			var lsjzs = info.Data.LSJZList;
			for (jz of lsjzs) {
				console.log(`Date: ${jz.FSRQ}, JZ: ${jz.DWJZ} LJJZ:${jz.LJJZ} JZZZL:${jz.JZZZL}`);
			}
		}
	}).on('error', function(e) {
		console.log(e.message);
	})

}

//var data = getLSJZ('020003', 2)

// fundCode: 020003
// pageSize: 50
// start: 2018-03-01
// end: 2018-04-01
getLSJZ('020003', 50, '2018-03-01', '2018-04-01')

/* 
 * output
Fund: 020003
start Date: 2018-03-01
end Date: 2018-04-01
Date: 2018-03-30, JZ: 0.6110 LJJZ:5.2400 JZZZL:2.17
Date: 2018-03-29, JZ: 0.5980 LJJZ:5.1990 JZZZL:-0.99
Date: 2018-03-28, JZ: 0.6040 LJJZ:5.2180 JZZZL:-0.82
Date: 2018-03-27, JZ: 0.6090 LJJZ:5.2330 JZZZL:2.01
Date: 2018-03-26, JZ: 0.5970 LJJZ:5.1960 JZZZL:1.02
Date: 2018-03-23, JZ: 0.5910 LJJZ:5.1780 JZZZL:-3.43
Date: 2018-03-22, JZ: 0.6120 LJJZ:5.2430 JZZZL:-0.97
Date: 2018-03-21, JZ: 0.6180 LJJZ:5.2610 JZZZL:-0.96
Date: 2018-03-20, JZ: 0.6240 LJJZ:5.2800 JZZZL:0.65
Date: 2018-03-19, JZ: 0.6200 LJJZ:5.2680 JZZZL:0.32
Date: 2018-03-16, JZ: 0.6180 LJJZ:5.2610 JZZZL:-1.75
Date: 2018-03-15, JZ: 0.6290 LJJZ:5.2960 JZZZL:0.32
Date: 2018-03-14, JZ: 0.6270 LJJZ:5.2890 JZZZL:-0.95
Date: 2018-03-13, JZ: 0.6330 LJJZ:5.3080 JZZZL:-0.47
Date: 2018-03-12, JZ: 0.6360 LJJZ:5.3170 JZZZL:0.47
Date: 2018-03-09, JZ: 0.6330 LJJZ:5.3080 JZZZL:1.44
Date: 2018-03-08, JZ: 0.6240 LJJZ:5.2800 JZZZL:0.48
Date: 2018-03-07, JZ: 0.6210 LJJZ:5.2710 JZZZL:0.16
Date: 2018-03-06, JZ: 0.6200 LJJZ:5.2680 JZZZL:0.65
Date: 2018-03-05, JZ: 0.6160 LJJZ:5.2550 JZZZL:0.49
Date: 2018-03-02, JZ: 0.6130 LJJZ:5.2460 JZZZL:-1.13
Date: 2018-03-01, JZ: 0.6200 LJJZ:5.2680 JZZZL:0.16
*/

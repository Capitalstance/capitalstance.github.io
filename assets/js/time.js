var startTime = null;
		var hourDisplayed = false;

		function startTimer() {
            if (!startTime) {
              startTime = new Date().getTime();
              document.getElementById("time-wrapper").style.display = "block";
            }
          }

		setInterval(function() {
			if (startTime) {
				var currentTime = new Date().getTime();
				var timeDiff = currentTime - startTime;
				var hours = Math.floor(timeDiff / (1000 * 60 * 60));
				var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

				if (hours >= 1 && !hourDisplayed) {
					document.getElementById("time").innerHTML = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
					hourDisplayed = true;
				} else if (hours < 1) {
					document.getElementById("time").innerHTML = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
				}
			}
		}, 1000);
let config = {
	address: "0.0.0.0",
	port: 8100,
	basePath: "/",
	ipWhitelist: [],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			header: "Current Weather",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				weatherEndpoint: "/weather",
				lat: 37.6688,
				lon: -122.0808,
				apiKey: "a2234ec090366bc33f21dc68db7dc3c0",
				units: "metric"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				weatherEndpoint: "/forecast",
				lat: 37.6688,
				lon: -122.0808,
				apiKey: "a2234ec090366bc33f21dc68db7dc3c0",
				units: "metric"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "NBC Bay Area",
						url: "https://www.nbcbayarea.com/?rss=y"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-NHL",
			position: "bottom_right",
			config: {
				colored: true,
				focus_on: false,
				matches: 6,
				rotateInterval: 20 * 1000,
				showPlayoffSeries: true,
				showGameStatus: true,
				showGameTime: true,
				showGameScore: true,
				showTeamLogos: true
			}
		},
		{
			module: "MMM-Spotify",
			position: "bottom_left",
			config: {
				debug: false,
				style: "default",
				moduleWidth: 360,
				control: "default",
				showAlbumLabel: true,
				showVolumeLabel: true,
				showAccountName: false,
				showAccountButton: true,
				showDeviceButton: true,
				useExternalModal: false,
				updateInterval: 1000,
				idleInterval: 30000,
				defaultAccount: 0,
				defaultDevice: null,
				allowDevices: [],
				onStart: null,
				notificationsOnSuspend: [
					{
						notification: "TOUCH_SET_MODE",
						payload: "myNormalMode",
					},
					{
						notification: "WHATEVERYOUWANT",
						payload: "sendMe",
					}
				],
				notificationsOnResume: [
					{
						notification: "TOUCH_SET_MODE",
						payload: "mySpotifyControlMode",
					},
				],
				deviceDisplay: "Listening on",
				volumeSteps: 5,
				miniBarConfig: {
					album: true,
					scroll: true,
					logo: true,
				}
			}
		},
		{
			module: 'MMM-Remote-Control',
			position: 'bottom_right',
			config: {
				showModuleApiMenu: true,
				secureEndpoints: false,
				showMonitorMenu: true,
				customCommand: {
				}
			}
		},
		{
			module: "calendar2",
			header: "My Google Calendar", 
			position: "upper_third",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/noahonice%40gmail.com/private-45f53d3356685083c41dc3618c245a49/basic.ics",
						fetchInterval: 5 * 60 * 1000
					}
				]
			}
		},
		{
			module: 'MMM-pages',
			config: {
				modules: [
					[
						"alert",
						"updatenotification",
						"clock",
						"calendar",
						"compliments",
						"weather",
						"newsfeed",
						"MMM-NHL",
						"MMM-Spotify"
					],  // Page 0 = all modules with US Holidays calendar
					[
						"calendar2"
					]   // Page 1 = only Google Calendar
				],
				fixed: ["MMM-Remote-Control"],
				rotationTime: 0
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }

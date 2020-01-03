(function(angular) {
	angular.module("cke-timetable-am_1.1.0")
		.provider("ckeditorTimetablePlugin", [

			"$provide",

			function ckeditorTimetablePluginProvider($provide) {

				var registerAll = function registerAll() {
					$provide.decorator("ckeditorService", [

						"$delegate",
						"ckeditorPluginDefinitionsTimetableAM",

						function(ckeditorService, ckeditorPluginDefinitionsTimetableAM) {
							_.forEach(ckeditorPluginDefinitionsTimetableAM, function(plugin, name) {
								ckeditorService.activatePlugin(name, plugin.plugin, plugin.meta);
							});

							return ckeditorService;
						},
					]);
				};

				this.controls = {
					registerAll: registerAll,
				};

				this.$get = function get() {
					return this.controls;
				};

			},
		]);
})(window.angular);

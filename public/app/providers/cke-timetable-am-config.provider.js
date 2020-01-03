(function(angular) {
	angular.module("cke-timetable-am_1.1.0")
		.provider("CKEditorTimetableAMConfig", [

			"MODULE_ENV_CONFIG",

			function timetableConfig(MODULE_ENV_CONFIG) {

				this.API = {
					name: MODULE_ENV_CONFIG.angularModule,
					version: "1.1.0",
					feDirPath: MODULE_ENV_CONFIG.feDirPath,
					assetsDirPath: MODULE_ENV_CONFIG.assetsDirPath,
					cssDirPath: MODULE_ENV_CONFIG.cssDirPath,
				};

				this.API.modulePath = this.API.feDirPath;

				this.$get = function get() {
					return this.API;
				};
			},
		]);
})(window.angular);

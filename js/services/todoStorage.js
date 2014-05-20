/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('todomvc')
	.factory('todoStorage', function () {
		'use strict';

		var STORAGE_ID = 'todos-angularjs';

		return {
			get: function (callback) {
				// Chrome Sync storage is linked to the user's Google account and
				// can therefore be syned across all of the user's browsers with
				// no extra work required from you.
				chrome.storage.sync.get(STORAGE_ID, function(data) {
					callback(data[STORAGE_ID] || []);
					console.log(data[STORAGE_ID]);
				});
			},

			put: function (todos) {
				// TODO: There's a callback for set() that tells you when the data is stored.
				// 		 We really should be waiting for that. 
				// TODO: We should be checking to ensure that we have enough storage space.
				var storedTasks = {};
				storedTasks[STORAGE_ID] = todos;
				chrome.storage.sync.set(storedTasks);
			}
		};
	});

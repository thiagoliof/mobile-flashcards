import React from 'react';
import { AsyncStorage  } from 'react-native';
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'Flascards:notifications'

export function getDeckMetaInfo (deck) {
	return typeof deck === 'undefined'
		? info
		: info[deck]
}

export function itemDetails(metaInfo, key){
	return metaInfo[key]
}

export function clearLocalNotification(){
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync())
} 
function createNotification(){
	return {
		title: 'Lembrete de estudo',
		body: 'Não esqueça de estudar no dia de hoje',
		ios: {
			sound: true,
		},
	}
}
export function setLocalNotification(){
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then((data) =>{
			if(data === null){
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({ status }) =>{
						if (status === 'granted'){
							Notifications.cancelAllScheduledNotificationsAsync()
							
							let tomorrow = new Date()
							tomorrow.setDate( tomorrow.getDate() + 1 )
							tomorrow.setHours(20)
							tomorrow.setMinutes(0)

							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: tomorrow,
									repeat: 'day' 
								}
							)
							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
						}
					})
			}
		})
}
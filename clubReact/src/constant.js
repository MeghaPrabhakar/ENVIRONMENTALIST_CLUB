export default {
	api() {
		let route = "http://localhost:3051/"
        return {
            login: route + "login",
			logout: route + "logout",
			activities: route + "activities",
			deleteActivities:route + "activity/",
			
        }

    }
}
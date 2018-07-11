import BOSSES from "data/BOSSES"
import JOBS from "data/JOBS"

export default {
	CORE: () => import("./core/modules" /* webpackChunkName: "core" */),

	JOBS: {
		[JOBS.SUMMONER.logType]: () => import("./jobs/smn" /* webpackChunkName: "jobs-smn" */),
	},

	BOSSES: {
		[BOSSES.DEMON_CHADARNOOK.logId]: () => import("./bosses/chadarnook" /* webpackChunkName: "bosses-chadarnook" */),
	},
}

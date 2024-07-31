import {Layer} from 'data/layer'
import {ActionRoot} from '../root'
import {BonusModifier} from '../type'

export const patch705: Layer<ActionRoot> = {
	patch: '7.05',
	data: {
		HARD_SLASH: {potencies: [{value: 300, bonusModifiers: []}]},
		SYPHON_STRIKE: {
			potencies: [{
				value: 240,
				bonusModifiers: [],
			},
			{
				value: 380,
				bonusModifiers: [BonusModifier.COMBO],
			}],
		},
		SOULEATER: {
			potencies: [{
				value: 260,
				bonusModifiers: [],
			},
			{
				value: 480,
				bonusModifiers: [BonusModifier.COMBO],
			}],
		},
		CARVE_AND_SPIT: {potencies: [{value: 540, bonusModifiers: []}]},
		DISESTEEM: {potencies: [{value: 1000, bonusModifiers: []}]},
	},
}